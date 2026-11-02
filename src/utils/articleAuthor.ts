import type { Article, Doctor } from '../types';
import { slugifyDoctorName } from './doctorSlug';

/** The doctor an article is attributed to (author name matches a doctor's name). */
export function findArticleAuthorDoctor(article: Pick<Article, 'author'>, doctors: Doctor[]): Doctor | undefined {
  const author = slugifyDoctorName(article.author?.uz || '');
  if (!author) return undefined;
  return doctors.find((doctor) => {
    const name = slugifyDoctorName(doctor.name.uz);
    return name && (name === author || name.startsWith(`${author}-`) || author.startsWith(`${name}-`));
  });
}

/** Articles attributed to a doctor, newest first (shown on the doctor's profile). */
export function articlesByDoctor<T extends Pick<Article, 'author' | 'date'>>(doctor: Doctor, articles: T[]): T[] {
  return articles
    .filter((article) => findArticleAuthorDoctor(article, [doctor]) === doctor)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}
