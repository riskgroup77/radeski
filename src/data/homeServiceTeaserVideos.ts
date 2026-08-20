import dermatologiyaTeaserVideo from '../assets/services-teaser/dermatologiya.mp4';
import dermatologiyaTeaserPoster from '../assets/services-teaser/dermatologiya-poster.jpg';
import apparatnayaTeaserVideo from '../assets/services-teaser/apparatnaya-kosmetologiya.mp4';
import apparatnayaTeaserPoster from '../assets/services-teaser/apparatnaya-kosmetologiya-poster.jpg';
import inekcionnayaTeaserVideo from '../assets/services-teaser/in-ekcionnaya-kosmetologiya.mp4';
import inekcionnayaTeaserPoster from '../assets/services-teaser/in-ekcionnaya-kosmetologiya-poster.jpg';
import lazernayaEpilyaciyaTeaserVideo from '../assets/services-teaser/lazernaya-epilyaciya.mp4';
import lazernayaEpilyaciyaTeaserPoster from '../assets/services-teaser/lazernaya-epilyaciya-poster.jpg';
import hirurgicheskayaTeaserVideo from '../assets/services-teaser/hirurgicheskaya-dermatologiya.mp4';
import hirurgicheskayaTeaserPoster from '../assets/services-teaser/hirurgicheskaya-dermatologiya-poster.jpg';
import dermatoonkologiyaTeaserVideo from '../assets/services-teaser/dermatoonkologiya.mp4';
import dermatoonkologiyaTeaserPoster from '../assets/services-teaser/dermatoonkologiya-poster.jpg';

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
  'apparatnaya-kosmetologiya': {
    video: apparatnayaTeaserVideo,
    poster: apparatnayaTeaserPoster,
  },
  'in-ekcionnaya-kosmetologiya': {
    video: inekcionnayaTeaserVideo,
    poster: inekcionnayaTeaserPoster,
  },
  'lazernaya-epilyaciya': {
    video: lazernayaEpilyaciyaTeaserVideo,
    poster: lazernayaEpilyaciyaTeaserPoster,
  },
  'hirurgicheskaya-dermatologiya': {
    video: hirurgicheskayaTeaserVideo,
    poster: hirurgicheskayaTeaserPoster,
  },
  dermatoonkologiya: {
    video: dermatoonkologiyaTeaserVideo,
    poster: dermatoonkologiyaTeaserPoster,
  },
};

export function getHomeServiceTeaserMedia(categoryId: string): HomeServiceTeaserMedia | undefined {
  return HOME_SERVICE_TEASER_MEDIA[categoryId];
}
