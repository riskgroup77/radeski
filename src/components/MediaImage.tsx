import { useEffect, useState, type ImgHTMLAttributes, type ReactNode } from 'react';
import { isApiUploadMediaUrl, resolveMediaUrl as resolveApiMediaUrl } from '../api/client';
import { isLocalMediaRef, resolveMediaUrl, isBlobUrl } from '../utils/localMediaStorage';
import { responsiveImage } from '../utils/imageVariants';

interface MediaImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | null | undefined;
  fallback?: ReactNode;
}

/** Most images on the site are cards or half-width columns. */
const DEFAULT_SIZES = '(max-width: 640px) 100vw, 640px';

/**
 * <img> for CMS uploads and built-in photos: served as responsive WebP (srcset) when a
 * variant exists, lazy-loaded unless the caller says otherwise, and falls back to the
 * original file if a variant ever fails to load. Images stored in the browser by the admin
 * panel (local media refs) are resolved to blob URLs.
 */
export default function MediaImage({
  src,
  alt = '',
  className,
  fallback = null,
  sizes,
  loading,
  decoding,
  onError,
  ...props
}: MediaImageProps) {
  const [localSrc, setLocalSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [useOriginal, setUseOriginal] = useState(false);
  const isLocal = Boolean(src && isLocalMediaRef(src));

  useEffect(() => {
    setFailed(false);
    setUseOriginal(false);
    if (!src || !isLocalMediaRef(src)) {
      setLocalSrc(null);
      return;
    }
    let cancelled = false;
    let objectUrl: string | null = null;
    resolveMediaUrl(src)
      .then((resolved) => {
        if (cancelled) {
          if (isBlobUrl(resolved)) URL.revokeObjectURL(resolved!);
          return;
        }
        objectUrl = resolved;
        setLocalSrc(resolved);
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

  if (isLocal) {
    if (!localSrc) {
      return <div className={`animate-pulse bg-brand-offwhite ${className || ''}`} aria-hidden="true" />;
    }
    return <img src={localSrc} alt={alt} className={className} {...props} />;
  }

  const original = isApiUploadMediaUrl(src) ? (resolveApiMediaUrl(src) ?? src) : src;
  const responsive = useOriginal ? { src: original } : responsiveImage(original);

  return (
    <img
      src={responsive.src}
      srcSet={responsive.srcSet}
      sizes={responsive.srcSet ? (sizes ?? DEFAULT_SIZES) : sizes}
      alt={alt}
      className={className}
      loading={loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
      onError={(event) => {
        if (!useOriginal && responsive.src !== original) setUseOriginal(true);
        else if (onError) onError(event);
        else setFailed(true);
      }}
      {...props}
    />
  );
}
