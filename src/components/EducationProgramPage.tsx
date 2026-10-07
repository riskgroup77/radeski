import { motion } from 'motion/react';

import { Phone } from 'lucide-react';

import type { Locale } from '../types';

import { OBRAZOVANIYA, type EducationProgram } from '../data/obrazovaniyaContent';

import { EDUCATION_PROGRAM_IMAGES } from '../utils/educationPrograms';

import { openAppointmentBooking } from '../config/links';

import EducationOverlayHero from './EducationOverlayHero';

import EducationProgramDetail from './EducationProgramDetail';



interface EducationProgramPageProps {

  locale: Locale;

  program: EducationProgram;

}



export default function EducationProgramPage({ locale, program }: EducationProgramPageProps) {

  const c = OBRAZOVANIYA;



  return (

    <section id="education-program-page" className="min-h-screen bg-brand-offwhite pb-12 sm:pb-16">

      <EducationOverlayHero

        image={EDUCATION_PROGRAM_IMAGES[program.id]}

        imageAlt={program.title[locale]}

        eyebrow={c.eyebrow[locale]}

        title={program.title[locale]}

        description={program.seo.description[locale]}

        programNum={program.num}

      />



      <div className="site-container py-8 sm:py-10">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>

          <EducationProgramDetail locale={locale} program={program} showHeroImage={false} />

        </motion.div>



        <motion.div

          initial={{ opacity: 0, y: 16 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          className="mt-10 overflow-hidden rounded-3xl border border-brand-gold/25 bg-gradient-to-br from-brand-dark-navy via-brand-dark-navy to-brand-gold/20 p-6 text-center sm:p-10"

        >

          <h2 className="text-xl font-extrabold text-white sm:text-2xl">{c.cta.title[locale]}</h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-light leading-relaxed text-white/85 sm:text-base">

            {c.cta.desc[locale]}

          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

            <button

              type="button"

              onClick={() => openAppointmentBooking()}

              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"

            >

              {locale === 'uz' ? 'Qabulga yozilish' : locale === 'ru' ? 'Записаться' : 'Book appointment'}

            </button>

            <a

              href={`tel:${c.cta.phone.replace(/\s/g, '')}`}

              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-white/15"

            >

              <Phone className="h-4 w-4" />

              {c.cta.phone}

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );

}


