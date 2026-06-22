import { useEffect, useState } from 'react';
import { isBlobUrl, isLocalMediaRef, resolveMediaUrl } from '../utils/localMediaStorage';

export function useMediaUrl(source: string | null | undefined): string | null {
  const [url, setUrl] = useState<string | null>(() =>
    source && !isLocalMediaRef(source) ? source : null,
  );

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | null = null;

    if (!source) {
      setUrl(null);
      return;
    }

    if (!isLocalMediaRef(source)) {
      setUrl(source);
      return;
    }

    setUrl(null);
    resolveMediaUrl(source)
      .then((resolved) => {
        if (cancelled) {
          if (isBlobUrl(resolved)) URL.revokeObjectURL(resolved!);
          return;
        }
        objectUrl = resolved;
        setUrl(resolved);
      })
      .catch(() => {
        if (!cancelled) setUrl(null);
      });

    return () => {
      cancelled = true;
      if (isBlobUrl(objectUrl)) URL.revokeObjectURL(objectUrl!);
    };
  }, [source]);

  return url;
}
