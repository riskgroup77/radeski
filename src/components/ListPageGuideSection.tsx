import type { ListPageGuide } from '../data/listPageGuides';

/** Patient guide block under the doctors / branches lists (data/listPageGuides.ts). */
export default function ListPageGuideSection({ guide, className = '' }: { guide: ListPageGuide; className?: string }) {
  return (
    <section className={`bg-brand-white rounded-2xl border border-brand-sectiongray p-6 sm:p-8 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight">{guide.title}</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {guide.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-bold text-brand-text-primary">{section.title}</h3>
            <p className="mt-1.5 text-sm text-brand-text-secondary leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
