import type { VideoHTMLAttributes } from 'react';
import { useMediaUrl } from '../hooks/useMediaUrl';

interface ResolvedVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export default function ResolvedVideo({ src, ...props }: ResolvedVideoProps) {
  const resolvedSrc = useMediaUrl(src);
  if (!resolvedSrc) {
    return <div className={`animate-pulse bg-brand-offwhite ${props.className || ''}`} aria-hidden="true" />;
  }
  return <video {...props} src={resolvedSrc} />;
}
