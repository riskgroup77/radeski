import type { Article, Locale } from '../types';
import type { ClinicVideo } from '../data/sitePagesContent';
import { conditionPath, serviceCategoryPath, serviceEquipmentPath, serviceSubPath } from '../routing/paths';
import { filterPublicArticles, resolveArticleRouteKey } from './articles';

export interface VideoTopicLink {
  label: string;
  path: string;
}

interface TopicLink {
  label: Record<Locale, string>;
  path: (locale: Locale) => string;
}

interface VideoTopic {
  /** Matched against the Uzbek and Russian title and description (lower case, plain apostrophes). */
  match: RegExp;
  /** Videos that also match this are about something else (laser hair removal is not hair loss). */
  exclude?: RegExp;
  /** Too general to pick videos for an article (it still links a video to articles). */
  broad?: boolean;
  /** Article route keys, most relevant first; unpublished or retired ones are skipped. */
  articles: string[];
  links: TopicLink[];
}

const L = (uz: string, ru: string, en: string) => ({ uz, ru, en });
const category = (id: string, label: Record<Locale, string>): TopicLink => ({ label, path: (l) => serviceCategoryPath(l, id) });
const sub = (categoryId: string, subId: string, label: Record<Locale, string>): TopicLink => ({
  label,
  path: (l) => serviceSubPath(l, categoryId, subId),
});
const device = (id: string, label: string): TopicLink => ({ label: L(label, label, label), path: (l) => serviceEquipmentPath(l, id) });
const condition = (slug: string, label: Record<Locale, string>): TopicLink => ({ label, path: (l) => conditionPath(l, slug) });

const TRICHOLOGY = category('trihologiya-centr-lechenie-volos', L('Trixologiya markazi', 'Центр трихологии', 'Trichology centre'));
const TRICHOSCOPY = category('trixoskopiya', L('Trixoskopiya', 'Трихоскопия', 'Trichoscopy'));
const EPILATION = category('lazernaya-epilyaciya', L('Lazer epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'));
const DERMATOLOGY = category('dermatologiya', L('Dermatologiya', 'Дерматология', 'Dermatology'));
const ONCOLOGY = category('dermatoonkologiya', L('Dermatoonkologiya', 'Дерматоонкология', 'Dermato-oncology'));
const HARDWARE = category('apparatnaya-kosmetologiya', L('Apparatli kosmetologiya', 'Аппаратная косметология', 'Device-based cosmetology'));
const INJECTIONS = category('in-ekcionnaya-kosmetologiya', L("In'eksion kosmetologiya", 'Инъекционная косметология', 'Injectable cosmetology'));
const PODOLOGY = category('clinika-patologii-nogtej', L('Podologiya va tirnoq markazi', 'Подология и центр патологии ногтей', 'Podiatry and nail clinic'));
const PHOTOTHERAPY = sub('dermatologiya', 'fototerapiya', L('Fototerapiya', 'Фототерапия', 'Phototherapy'));
const CLEANSING = sub('apparatnaya-kosmetologiya', 'ultratovush-yuz', L('Ultratovush yuz tozalash', 'Ультразвуковая чистка лица', 'Ultrasonic facial cleansing'));
const BOTULINUM = sub('in-ekcionnaya-kosmetologiya', 'botulino', L('Botulinoterapiya', 'Ботулинотерапия', 'Botulinum therapy'));

/** Specific topics first: a video takes its articles and links from every topic it matches, in this order. */
const VIDEO_TOPICS: VideoTopic[] = [
  {
    match: /soch ekish|soqol|transplant|пересадк/,
    articles: ['art-hair-transplant-contraindications', 'art-erkaklarda-soch-tokilishi'],
    links: [TRICHOLOGY],
  },
  {
    match: /tuliy|тулиев|thulium/,
    articles: ['art-thulium-laser-hair-kokand', 'art-lasemd-ultra-kokand'],
    links: [device('lasemd-ultra-lutronic', 'LaseMD Ultra'), TRICHOLOGY],
  },
  {
    match: /bosh terisi|кожи головы|kepak|перхот/,
    exclude: /mezoterap|мезотерап/,
    articles: ['art-bosh-terisi-psoriazi', 'art-seboreyali-dermatit', 'art-teri-qichishi'],
    links: [condition('seboreyali-dermatit', L('Seboreyali dermatit', 'Себорейный дерматит', 'Seborrheic dermatitis')), TRICHOSCOPY],
  },
  {
    match: /soch|trixolog|трихолог|волос/,
    exclude: /epilyats|эпиляц/,
    articles: ['art-ayollarda-soch-tokilishi', 'art-erkaklarda-soch-tokilishi', 'art-plazmotorapiya-soch-prp', 'art-soch-tokilishi-tahlillar-radeski'],
    links: [TRICHOLOGY, TRICHOSCOPY],
  },
  {
    match: /seborey|себор/,
    articles: ['art-seboreyali-dermatit'],
    links: [condition('seboreyali-dermatit', L('Seboreyali dermatit', 'Себорейный дерматит', 'Seborrheic dermatitis'))],
  },
  {
    match: /saraton|рак кожи/,
    articles: ['art-xol-tekshiruvi-dermatoskopiya', 'art-melanoma', 'art-lazer-epilyatsiya-samara-xatolar'],
    links: [ONCOLOGY],
  },
  {
    match: /epilyats|эпиляц|moveo/,
    articles: ['art-lazer-epilyatsiya-kuz-qish', 'art-lazer-epilyatsiya-samara-xatolar', 'art-deka-moveo-epilyatsiya-tayyorgarlik'],
    links: [EPILATION, device('deka-alexandrite-laser', 'DEKA Moveo')],
  },
  {
    match: /co2|co₂|tetra|chandiq|рубц|shlifov|шлифов/,
    articles: ['art-deka-co2-chandiqlar-radeski', 'art-lazernaya-shlifovka-rubcov', 'art-postakne', 'art-tetra-pro-yuz-tortish-radeski'],
    links: [device('deka-co2-laser', 'DEKA SmartXide CO₂'), condition('postacne', L('Postakne', 'Постакне', 'Post-acne'))],
  },
  {
    match: /melazm|мелазм|pigment|пигмент/,
    articles: ['art-melazma', 'art-pigment-doglari-qishda', 'art-pigmentaciya-hollywood-spectra-radeski'],
    links: [
      condition('teri-doglari', L("Teri dog'lari (pigmentatsiya)", 'Пигментные пятна', 'Pigment spots')),
      device('hollywood-spectra-lutronic', 'Hollywood Spectra'),
    ],
  },
  {
    match: /derma v|sosud|сосуд|tomir/,
    articles: ['art-sosudistaya-setochka-derma-v-radeski', 'art-derma-v-qizarish-radeski', 'art-oyoqdagi-tomir-tori'],
    links: [device('derma-v-lutronic', 'Lutronic Derma V'), condition('yuz-qizarishi', L('Yuz qizarishi', 'Покраснение лица', 'Facial redness'))],
  },
  {
    match: /\bipl\b/,
    articles: ['art-ipl-terapiya', 'art-ipl-fototerapiya-radeski', 'art-ipl-lumecca-pigmentatsiya-radeski'],
    links: [device('ipl-inmode', 'InMode IPL')],
  },
  {
    match: /fototerap|фототерап|uvb|vitiligo|витилиго/,
    articles: ['art-vitiligo-belgilari', 'art-vitiligo-daavlin', 'art-psoriasis-daavlin-kokand'],
    links: [PHOTOTHERAPY, condition('vitiligo', L('Vitiligo', 'Витилиго', 'Vitiligo'))],
  },
  {
    match: /terla|потлив|потоотдел|aquex|giperhidroz|гипергидроз/,
    articles: ['art-giperhidroz'],
    links: [device('daavlin-aquex', 'Daavlin Aquex'), BOTULINUM],
  },
  {
    match: /pedikyur|педикюр|tovon|пятк|podolog|подолог/,
    articles: ['art-tovon-yoriqlari', 'art-qadoq-va-kesak', 'art-diabetda-oyoq-parvarishi', 'art-tirnoq-zamburugi'],
    links: [PODOLOGY],
  },
  {
    match: /qora nuqta|черн\S* точ|akne|акне|yuz tozala|чистк/,
    articles: ['art-karbon-piling', 'art-akne-u-vzroslykh', 'art-kimyoviy-piling'],
    links: [condition('acne', L('Akne (ugri)', 'Акне', 'Acne')), CLEANSING],
  },
  {
    match: /piling|пилинг/,
    articles: ['art-kimyoviy-piling', 'art-karbon-piling'],
    links: [HARDWARE],
  },
  {
    match: /botoks|ботокс|mezoterap|мезотерап|biorevital|биоревит/,
    exclude: /soch|волос/,
    articles: ['art-botulinoterapiya-radeski', 'art-biorevitalizatsiya-radeski'],
    links: [INJECTIONS],
  },
  {
    match: /teri parvarish|уход\S* за кож(?!ей головы)/,
    articles: ['art-qishda-teri-parvarishi', 'art-kimyoviy-piling', 'art-hollywood-spectra-poralar-radeski'],
    links: [HARDWARE],
  },
  {
    match: /janus/,
    articles: ['art-hollywood-spectra-poralar-radeski', 'art-biorevitalizatsiya-radeski'],
    links: [HARDWARE],
  },
  {
    match: /dermatolog|дерматолог/,
    broad: true,
    articles: ['art-akne-dermatolog-kosmetolog', 'art-teri-qichishi', 'art-ekzema'],
    links: [DERMATOLOGY],
  },
];

function videoText(video: ClinicVideo): string {
  return [video.title.uz, video.title.ru, video.description.uz, video.description.ru]
    .join(' ')
    .toLowerCase()
    .replace(/[‘’ʻʼ`]/g, "'");
}

function matchedTopics(video: ClinicVideo): VideoTopic[] {
  const text = videoText(video);
  return VIDEO_TOPICS.filter((topic) => topic.match.test(text) && !topic.exclude?.test(text));
}

/** Published articles on the video's subject, most relevant first. */
export function videoTopicArticles(video: ClinicVideo, articles: Article[], limit = 3): Article[] {
  const byKey = new Map(filterPublicArticles(articles).map((article) => [resolveArticleRouteKey(article), article]));
  const keys = [...new Set(matchedTopics(video).flatMap((topic) => topic.articles))];
  return keys.flatMap((key) => byKey.get(key) ?? []).slice(0, limit);
}

/** Service, device and condition pages on the video's subject. */
export function videoTopicLinks(video: ClinicVideo, locale: Locale, limit = 4): VideoTopicLink[] {
  const seen = new Set<string>();
  return matchedTopics(video)
    .flatMap((topic) => topic.links)
    .map((link) => ({ label: link.label[locale], path: link.path(locale) }))
    .filter((link) => (seen.has(link.path) ? false : (seen.add(link.path), true)))
    .slice(0, limit);
}

/** Videos on the same subject first, then the same category, then the rest in list order. */
export function relatedVideos(video: ClinicVideo, videos: ClinicVideo[], limit = 6): ClinicVideo[] {
  const own = new Set(matchedTopics(video));
  const score = (item: ClinicVideo) =>
    matchedTopics(item).filter((topic) => own.has(topic)).length * 2 +
    (item.category.uz && item.category.uz === video.category.uz ? 1 : 0);
  return videos
    .filter((item) => item.id !== video.id)
    .map((item, index) => ({ item, index, score: score(item) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ item }) => item);
}

/** Videos on an article's subject (the reverse of videoTopicArticles), most relevant first. */
export function articleTopicVideos(routeKey: string, videos: ClinicVideo[], limit = 3): ClinicVideo[] {
  return videos
    .map((video, index) => {
      const topics = matchedTopics(video).filter((topic) => !topic.broad);
      const ranks = topics.map((topic) => topic.articles.indexOf(routeKey)).filter((rank) => rank >= 0);
      // A video about this one subject beats a video that touches several.
      return { video, index, rank: ranks.length ? Math.min(...ranks) : -1, spread: topics.length };
    })
    .filter((entry) => entry.rank >= 0)
    .sort((a, b) => a.rank - b.rank || a.spread - b.spread || a.index - b.index)
    .slice(0, limit)
    .map(({ video }) => video);
}
