import { CheckCircle2, CreditCard, FileText, Hash, Info, ListOrdered } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Locale } from '../types';
import { OBRAZOVANIYA, type EducationProgram } from '../data/obrazovaniyaContent';
import { EDUCATION_PROGRAM_IMAGES } from '../utils/educationPrograms';
import EducationMediaFrame from './EducationMediaFrame';
import EducationApplicationForm from './EducationApplicationForm';

interface EducationProgramDetailProps {
  locale: Locale;
  program: EducationProgram;
  showHeroImage?: boolean;
}

function BlockTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-text-primary">
      {icon}
      {title}
    </h4>
  );
}

export default function EducationProgramDetail({
  locale,
  program,
  showHeroImage = true,
}: EducationProgramDetailProps) {
  const labels = OBRAZOVANIYA.sectionLabels;

  return (
    <article id={program.id} className="scroll-mt-2">
      {showHeroImage ? (
        <EducationMediaFrame
          src={EDUCATION_PROGRAM_IMAGES[program.id]}
          alt={program.title[locale]}
          variant="programHero"
          className="mb-6 rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/80 via-brand-dark-navy/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-5 sm:p-6">
            <span className="mb-2 inline-flex w-fit rounded-xl bg-brand-dark-navy/85 px-3 py-1.5 text-sm font-extrabold text-brand-gold">
              {program.num}
            </span>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">{program.title[locale]}</h2>
          </div>
        </EducationMediaFrame>
      ) : null}

      <div className="mb-6 rounded-3xl border border-brand-sectiongray bg-white p-5 shadow-sm sm:p-6">
        <BlockTitle icon={<Info className="h-4 w-4 text-brand-gold" />} title={labels.info[locale]} />
        <p className="mb-4 text-sm font-light leading-relaxed text-brand-text-secondary">{program.info[locale]}</p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {program.highlights.map((item) => (
            <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              {item[locale]}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-brand-sectiongray bg-white p-5 shadow-sm sm:p-6">
          <BlockTitle icon={<Info className="h-4 w-4 text-brand-gold" />} title={labels.form[locale]} />
          <EducationApplicationForm
            locale={locale}
            programTitle={program.title[locale]}
            formIntro={program.formIntro[locale]}
            formFields={program.formFields.map((field) => field[locale])}
          />
        </div>

        <div className="rounded-3xl border border-brand-sectiongray bg-white p-5 shadow-sm sm:p-6">
          <BlockTitle icon={<FileText className="h-4 w-4 text-brand-gold" />} title={labels.documents[locale]} />
          <p className="mb-3 text-sm font-light text-brand-text-secondary">{program.documentSubmission.intro[locale]}</p>
          <ul className="mb-6 space-y-2">
            {program.documentSubmission.items.map((item) => (
              <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                {item[locale]}
              </li>
            ))}
          </ul>

          <BlockTitle icon={<FileText className="h-4 w-4 text-brand-gold" />} title={labels.mzDocuments[locale]} />
          <ul className="space-y-2">
            {program.mzDocuments.map((item) => (
              <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                {item[locale]}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-brand-sectiongray bg-white p-5 shadow-sm sm:p-6">
          <BlockTitle icon={<CreditCard className="h-4 w-4 text-brand-gold" />} title={labels.payment[locale]} />
          <ul className="mb-6 space-y-2">
            {program.paymentMethods.map((item) => (
              <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                {item[locale]}
              </li>
            ))}
          </ul>

          <BlockTitle icon={<ListOrdered className="h-4 w-4 text-brand-gold" />} title={labels.steps[locale]} />
          <ol className="mb-6 space-y-2">
            {program.steps.map((step, stepIndex) => (
              <li key={step.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-[11px] font-bold text-brand-gold">
                  {stepIndex + 1}
                </span>
                {step[locale]}
              </li>
            ))}
          </ol>

          <BlockTitle icon={<Hash className="h-4 w-4 text-brand-gold" />} title={labels.seo[locale]} />
          <p className="text-xs font-light leading-relaxed text-brand-text-muted">{program.seo.keywords[locale]}</p>
          <p className="mt-2 text-xs font-medium text-brand-gold">{program.seo.hashtags[locale]}</p>
        </div>
      </div>
    </article>
  );
}
