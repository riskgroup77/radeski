import { useEffect, useState, type ImgHTMLAttributes, type ReactNode } from 'react';
import { isLocalMediaRef, resolveMediaUrl, isBlobUrl } from '../utils/localMediaStorage';

function mimeFromUrl(url: string): string {
  const lower = url.split('?')[0].toLowerCase();
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  return 'application/octet-stream';
}

function needsBlobFix(src: string): boolean {
  return src.includes('/uploads/');
}

interface MediaImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | null | undefined;
  fallback?: ReactNode;
}

export default function MediaImage({
  src,
  alt = '',
  className,
  fallback = null,
  ...props
}: MediaImageProps) {
  const [displaySrc, setDisplaySrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!src) {
      setDisplaySrc(null);
      setFailed(false);
      return;
    }

    if (!needsBlobFix(src) && !isLocalMediaRef(src)) {
      setDisplaySrc(src);
      setFailed(false);
      return;
    }

    let cancelled = false;
    let objectUrl: string | null = null;

    setDisplaySrc(null);
    setFailed(false);

    const loadPromise = isLocalMediaRef(src)
      ? resolveMediaUrl(src)
      : fetch(src)
          .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.blob();
          })
          .then((blob) => {
            const typedBlob = blob.type.startsWith('image/')
              ? blob
              : new Blob([blob], { type: mimeFromUrl(src) });
            return URL.createObjectURL(typedBlob);
          });

    loadPromise
      .then((resolved) => {
        if (cancelled) {
          if (isBlobUrl(resolved)) URL.revokeObjectURL(resolved!);
          return;
        }
        objectUrl = resolved;
        setDisplaySrc(resolved);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      if (isBlobUrl(objectUrl)) URL.revokeObjectURL(objectUrl!);
    };
  }, [src]);

  if (!src || failed) return fallback ? <>{fallback}</> : null;

  if (!displaySrc) {
    return (
      <div
        className={`animate-pulse bg-brand-offwhite ${className || ''}`}
        aria-hidden="true"
      />
    );
  }

  return <img src={displaySrc} alt={alt} className={className} {...props} />;
}
