import dermatologiyaTeaserVideo from '../assets/services-teaser/dermatologiya.mp4';
import dermatologiyaTeaserPoster from '../assets/services-teaser/dermatologiya-poster.jpg';

export interface HomeServiceTeaserMedia {
  video: string;
  poster: string;
}

/** Hover-play clips for homepage service cards (video + matching poster frame). */
export const HOME_SERVICE_TEASER_MEDIA: Partial<Record<string, HomeServiceTeaserMedia>> = {
  dermatologiya: {
    video: dermatologiyaTeaserVideo,
    poster: dermatologiyaTeaserPoster,
  },
};

export function getHomeServiceTeaserMedia(categoryId: string): HomeServiceTeaserMedia | undefined {
  return HOME_SERVICE_TEASER_MEDIA[categoryId];
}
