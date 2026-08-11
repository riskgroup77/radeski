import type { Locale } from '../types';
import type { DaavlinSectionId } from '../routing/paths';

type L = Record<Locale, string>;
type LList = Record<Locale, string[]>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });
const LL = (uz: string[], ru: string[], en: string[]): LList => ({ uz, ru, en });

/** Nav mirrors https://radeski-distributor.uz/ */
export const DAAVLIN_SECTION_NAV: { id: DaavlinSectionId; label: L }[] = [
  { id: 'about', label: L('Biz haqimizda', 'О нас', 'About us') },
  {
    id: 'radeski-skin-clinic',
    label: L('Radeski Skin Clinic', 'Radeski Skin Clinic', 'Radeski Skin Clinic'),
  },
  {
    id: 'cabins',
    label: L('Fototerapiya kabinalari', 'Кабины для фототерапии', 'Phototherapy cabins'),
  },
  {
    id: 'clinical-results',
    label: L('Klinik natijalar', 'Клинические результаты', 'Clinical results'),
  },
  {
    id: 'skin-diseases',
    label: L('Teri kasalliklari', 'Кожные болезни', 'Skin diseases'),
  },
  { id: 'contacts', label: L('Aloqa', 'Контакты', 'Contacts') },
];

export const DAAVLIN_SHARED = {
  eyebrow: L(
    'Radeski Distributor · Daavlin',
    'Radeski Distributor · Daavlin',
    'Radeski Distributor · Daavlin',
  ),
  brandTitle: L('Daavlin Foto kabinalari', 'Фотокабины Daavlin', 'Daavlin Photo Cabins'),
  /** Fallback if a section has no dedicated hero */
  heroImage: '/daavlin/daavlin-about-hero.webp',
  ctaFototerapiya: L('Fototerapiya xizmati', 'Услуга фототерапии', 'Phototherapy service'),
  ctaEquipment: L('Apparatlar parki', 'Парк аппаратов', 'Equipment park'),
  ctaBook: L('Qabulga yozilish', 'Записаться на приём', 'Book an appointment'),
  ctaDoctors: L('Shifokorlar', 'Врачи', 'Doctors'),
  ctaResults: L('Natijalar galereyasi', 'Галерея результатов', 'Results gallery'),
  ctaDistributor: L('Distributor sayti', 'Сайт дистрибьютора', 'Distributor website'),
  ctaExplore: L('Yechimlarni o‘rganish', 'Изучить решения', 'Explore solutions'),
  phonePrimary: '+998 (90) 409-00-29',
  phoneSecondary: '+998 (90) 583-28-57',
  address: L(
    'O‘zbekiston, Farg‘ona sh., O‘zbekiston Ovozi ko‘chasi, 1B',
    'Узбекистан, г. Фергана, ул. Узбекистон Овози, 1Б',
    '1B Uzbekiston Ovozi St., Fergana, Uzbekistan',
  ),
  hours: L(
    'Dush–Juma: 09:00–18:00 · Shanba–Yakshanba: dam olish',
    'Пн–Пт: 09:00–18:00 · Сб–Вс: выходной',
    'Mon–Fri: 09:00–18:00 · Sat–Sun: closed',
  ),
};

/** Per-section photography for heroes and mid-page visual bands */
export const DAAVLIN_SECTION_MEDIA: Record<
  DaavlinSectionId,
  { hero: string; mid: string; gallery?: string[] }
> = {
  about: {
    hero: '/daavlin/daavlin-about-hero.webp',
    mid: '/daavlin/daavlin-about-mid.webp',
    gallery: [
      '/daavlin/about-partnership.webp',
      '/daavlin/daavlin-clinic-mid.webp',
      '/daavlin/daavlin-results-mid.webp',
      '/daavlin/about-mission-band.webp',
      '/daavlin/daavlin-cabins-mid.webp',
    ],
  },
  'radeski-skin-clinic': {
    hero: '/daavlin/daavlin-clinic-hero.webp',
    mid: '/daavlin/daavlin-clinic-mid.webp',
    gallery: [
      '/daavlin/clinic-consult.webp',
      '/daavlin/daavlin-cabin-clinic.webp',
      '/daavlin/clinic-branch.webp',
      '/daavlin/clinic-pathway-band.webp',
      '/daavlin/daavlin-about-mid.webp',
    ],
  },
  cabins: {
    hero: '/daavlin/daavlin-cabins-hero.webp',
    mid: '/daavlin/daavlin-cabins-mid.webp',
    gallery: [
      '/daavlin/daavlin-cabin-home.webp',
      '/daavlin/daavlin-cabin-clinic.webp',
      '/daavlin/daavlin-cabin-targeted.webp',
      '/daavlin/cabins-promise-band.webp',
      '/daavlin/model-neolux.webp',
    ],
  },
  'clinical-results': {
    hero: '/daavlin/daavlin-results-hero.webp',
    mid: '/daavlin/daavlin-results-mid.webp',
    gallery: [
      '/daavlin/daavlin-results-mid.webp',
      '/daavlin/daavlin-about-mid.webp',
      '/daavlin/daavlin-clinic-mid.webp',
    ],
  },
  'skin-diseases': {
    hero: '/daavlin/daavlin-diseases-hero.webp',
    mid: '/daavlin/daavlin-diseases-mid.webp',
    gallery: [
      '/daavlin/daavlin-diseases-mid.webp',
      '/daavlin/daavlin-results-hero.webp',
      '/daavlin/daavlin-about-mid.webp',
    ],
  },
  contacts: {
    hero: '/daavlin/daavlin-contacts-hero.webp',
    mid: '/daavlin/daavlin-contacts-mid.webp',
    gallery: [
      '/daavlin/daavlin-contacts-mid.webp',
      '/daavlin/daavlin-clinic-hero.webp',
      '/daavlin/daavlin-cabin-clinic.webp',
    ],
  },
};

/** О нас — radeski-distributor.uz/o-nas + bosh sahifa */
export const DAAVLIN_ABOUT = {
  title: L('Biz haqimizda', 'О нас', 'About us'),
  subtitle: L(
    'Radeski Distributor bilan tanishing: fototerapiyada yangi davr',
    'Знакомство с Radeski Distributor: новая эра в фототерапии',
    'Meet Radeski Distributor: a new era in phototherapy',
  ),
  heroTag: L(
    'Fototerapiya — psoriaz, vitiligo, atopik dermatit va ekzemani xavfsiz va samarali davolash',
    'Фототерапия — безопасное и эффективное лечение псориаза, витилиго, атопического дерматита и экземы',
    'Phototherapy — safe, effective care for psoriasis, vitiligo, atopic dermatitis and eczema',
  ),
  storyEyebrow: L('Hikoya', 'История', 'Our story'),
  missionLabel: L('Missiyamiz', 'Наша миссия', 'Our mission'),
  missionQuote: L(
    'Sifatli va xavfsiz fototerapiyani unga muhtoj har bir kishiga ochiq qilish — shifokor, klinika yoki uyda davolanayotgan bemor.',
    'Сделать качественную и безопасную фототерапию доступной каждому, кто в ней нуждается — врачу, клинике или пациенту дома.',
    'Make high-quality, safe phototherapy accessible to everyone who needs it — physician, clinic, or patient at home.',
  ),
  missionAside: L(
    'Radeski Distributor — shunchaki brend emas; bu innovatsiyaga sodiqlik va bemor hamda shifokor ehtiyojini birinchi o‘ringa qo‘yish.',
    'Radeski Distributor — больше, чем бренд; это приверженность инновациям и приоритет потребностям пациентов и врачей.',
    'Radeski Distributor is more than a brand — a commitment to innovation and putting patients’ and clinicians’ needs first.',
  ),
  stats: [
    {
      value: 'Daavlin',
      label: L('Rasmiy vakillik', 'Официальное представительство', 'Official representation'),
    },
    {
      value: '82%',
      label: L('~5 haftada deyarli toza teri*', 'Практически чистая кожа за ~5 недель*', 'Nearly clear skin in ~5 weeks*'),
    },
    {
      value: 'NB-UVB',
      label: L('Asosiy terapiya turi', 'Основной вид терапии', 'Primary therapy type'),
    },
    {
      value: 'UZ',
      label: L('O‘zbekiston bo‘ylab', 'По Узбекистану', 'Across Uzbekistan'),
    },
  ],
  statsNote: L(
    '*Distributor materiallaridagi orientir; yakuniy natija tashxis va kursga bog‘liq.',
    '*Ориентир по материалам дистрибьютора; итог зависит от диагноза и курса.',
    '*Benchmark from distributor materials; outcomes depend on diagnosis and course.',
  ),
  audiencesTitle: L('Kimlar uchun ishlaymiz', 'Для кого мы работаем', 'Who we serve'),
  audiences: [
    {
      title: L('Shifokorlar', 'Врачи', 'Physicians'),
      text: L(
        'Apparat tanlash, o‘rnatish va doza protokoli bo‘yicha yo‘l-yo‘riq — amaliyotingizga mos yechim.',
        'Подбор аппарата, установка и рекомендации по протоколу дозы — решение под вашу практику.',
        'Device selection, install guidance and dosing protocol advice — fitted to your practice.',
      ),
    },
    {
      title: L('Klinikalar', 'Клиники', 'Clinics'),
      text: L(
        'Kabina parkini kengaytirish, trening va kuzatuv: bemor oqimini fototerapiya bilan mustahkamlash.',
        'Расширение парка кабин, обучение и сопровождение: усиление потока пациентов фототерапией.',
        'Expand cabin capacity, training and follow-up — strengthen patient flow with phototherapy.',
      ),
    },
    {
      title: L('Bemorlar', 'Пациенты', 'Patients'),
      text: L(
        'Klinikada Radeski Skin Clinic orqali davolanish yoki shifokor belgilagan uy rejimida yordam.',
        'Лечение в клинике через Radeski Skin Clinic или поддержка домашнего режима по назначению врача.',
        'Clinic care via Radeski Skin Clinic or support for physician-prescribed home regimens.',
      ),
    },
  ],
  therapyTitle: L('Fototerapiya qanday ishlaydi', 'Как работает фототерапия', 'How phototherapy works'),
  therapyIntro: L(
    'Yorug‘lik dozasi tibbiy qurilma orqali aniq to‘lqinlarda beriladi. Quyidagi ikki yo‘l eng ko‘p muhokama qilinadi.',
    'Доза света подаётся медицинским устройством на строго заданных волнах. Чаще всего обсуждают два пути.',
    'Light dose is delivered by a medical device at precisely defined wavelengths. Two paths are discussed most often.',
  ),
  therapyModes: [
    {
      name: 'NB-UVB',
      title: L('Tor diapazonli UVB', 'Узкополосный UVB', 'Narrowband UVB'),
      text: L(
        'Eng keng tarqalgan yo‘l: foydalanish oson, samaradorligi yuqori, yon ta’sirlari kam va nazorat qilinadi.',
        'Самый распространённый путь: прост в использовании, высокоэффективен, побочные эффекты немногочисленны и контролируемы.',
        'The most common path: simple to use, highly effective, with few and controllable side effects.',
      ),
    },
    {
      name: 'PUVA',
      title: L('UVA + psoralen', 'UVA + псорален', 'UVA + psoralen'),
      text: L(
        'Odatda eng og‘ir hollarda: remissiya uzoqroq bo‘lishi mumkin, lekin protokol murakkabroq va xavf yuqoriroq.',
        'Обычно при самых тяжёлых случаях: ремиссия может быть дольше, но протокол сложнее и риск выше.',
        'Usually reserved for severe cases: longer remissions are possible, but the protocol is more complex with higher risk.',
      ),
    },
  ],
  sections: [
    {
      title: L('Rasmiy vakillik', 'Официальное представительство', 'Official representation'),
      paragraphs: [
        L(
          'Radeski Distributor — fototerapiya texnologiyalari bo‘yicha jahon lideri Daavlin kompaniyasining O‘zbekistondagi rasmiy vakili. Biz sog‘liqni saqlash, zamonaviy texnologiyalar va klinik tajribani birlashtirib, samarali fototerapiya yechimlarini taklif etamiz.',
          'Radeski Distributor — официальный представитель мирового лидера фототерапевтических технологий Daavlin в Узбекистане. Мы объединили заботу о здоровье, современные технологии и клинический опыт, чтобы предложить эффективные решения в области фототерапии.',
          'Radeski Distributor is Daavlin’s official representative in Uzbekistan — a global leader in phototherapy technology. We combine patient care, modern technology and clinical experience to deliver effective phototherapy solutions.',
        ),
        L(
          'Kompaniyamiz Daavlinning rasmiy dileri: psoriaz, vitiligo, atopik dermatit va akne uchun apparatlarni yetkazib beramiz. Barcha qurilmalar sertifikatlangan, qulay va dermatologlar tomonidan ma’qullangan. Mijozni jihoz tanlashdan foydalanish tavsiyalarigacha kuzatamiz.',
          'Наша компания — официальный дилер Daavlin: продаём аппараты для лечения псориаза, витилиго, атопического дерматита и акне. Все устройства сертифицированы, удобны и одобрены дерматологами. Сопровождаем клиента от подбора оборудования до рекомендаций по использованию.',
          'As an official Daavlin dealer we supply devices for psoriasis, vitiligo, atopic dermatitis and acne. All units are certified, practical and dermatologist-approved. We support clients from selection through usage guidance.',
        ),
      ],
    },
    {
      title: L('Missiya', 'Миссия', 'Mission'),
      paragraphs: [
        L(
          'Missiyamiz — sifatli va xavfsiz fototerapiyani unga muhtoj har bir kishiga ochiq qilish: shifokor, klinika yoki uyda davolanayotgan bemor.',
          'Наша миссия — сделать качественную и безопасную фототерапию доступной каждому, кто в ней нуждается: врачу, клинике или пациенту, лечащемуся дома.',
          'Our mission is to make high-quality, safe phototherapy accessible to everyone who needs it — physicians, clinics, or patients treating at home.',
        ),
        L(
          'Radeski Distributor — shunchaki brend emas; bu innovatsiyaga sodiqlik va bemorlar hamda shifokorlar ehtiyojini birinchi o‘ringa qo‘yish. Eng yaxshi kirish imkoni eng yaxshi parvarish bilan uyg‘unlashgan joy.',
          'Radeski Distributor — это больше, чем бренд; это приверженность инновациям и приоритет потребностям пациентов и врачей. Место, где лучший доступ сочетается с лучшим уходом.',
          'Radeski Distributor is more than a brand — a commitment to innovation and putting patients’ and clinicians’ needs first. Where better access meets better care.',
        ),
      ],
    },
    {
      title: L('Fototerapiya nima?', 'Что такое фототерапия?', 'What is phototherapy?'),
      paragraphs: [
        L(
          'Fototerapiya — qattiq belgilangan ultrabinafsha yorug‘lik to‘lqinlarini chiqaradigan tibbiy qurilma yordamida davolash usuli. U psoriaz, vitiligo va boshqa teri kasalliklarida qo‘llanadi.',
          'Фототерапия — метод лечения с помощью медицинского устройства, излучающего строго определённые волны ультрафиолетового света. Применяется при псориазе, витилиго и других заболеваниях кожи.',
          'Phototherapy is treatment with a medical device that emits precisely defined ultraviolet wavelengths. It is used for psoriasis, vitiligo and other skin diseases.',
        ),
        L(
          'Eng keng tarqalgan turi — tor diapazonli UVB (NB-UVB): foydalanish oson, samaradorligi yuqori, yon ta’sirlari kam va nazorat qilinadi.',
          'Наиболее распространённый вид — узкополосный UVB (NB-UVB): прост в использовании, высокоэффективен, побочные эффекты немногочисленны и легко контролируются.',
          'The most common type is narrowband UVB (NB-UVB): simple to use, highly effective, with few and controllable side effects.',
        ),
        L(
          'PUVA-terapiya (UVA + psoralen) odatda eng og‘ir hollarda tayinlanadi: teri sog‘ayishi va remissiya uzoqroq bo‘lishi mumkin, lekin qo‘llash murakkabroq va jiddiyroq yon ta’sir xavfi yuqoriroq.',
          'PUVA-терапия (UVA + псорален) обычно назначается в самых тяжёлых случаях: даёт более высокие показатели оздоровления кожи и более длительные ремиссии, но сложнее в применении и связана с риском более серьёзных побочных эффектов.',
          'PUVA therapy (UVA plus psoralen) is usually reserved for the most severe cases: clearer skin and longer remissions are possible, but it is more complex and carries higher side-effect risk.',
        ),
      ],
    },
  ],
  safeBanner: L(
    'Barcha uchun xavfsiz va samarali yechim: fototerapiya homilador ayollar, bolalar, keksa odamlar va immuniteti pasaygan bemorlar uchun ham qo‘llanilishi mumkin (shifokor qarori bilan).',
    'Безопасное и эффективное решение для всех: фототерапия безопасна для беременных женщин, детей, пожилых людей и пациентов с ослабленным иммунитетом (по решению врача).',
    'A safe, effective option for many: phototherapy may be used for pregnant women, children, elderly people and immunocompromised patients (when a clinician approves).',
  ),
  benefitsTitle: L(
    'Daavlin fototerapiya apparatlarining afzalliklari',
    'Преимущества фототерапевтических аппаратов фирмы Daavlin',
    'Benefits of Daavlin phototherapy devices',
  ),
  benefits: [
    {
      title: L('Xavfsizlik', 'Безопасность', 'Safety'),
      text: L(
        'NB-UVB homilador ayollar, bolalar, keksa odamlar va immuniteti pasaygan odamlar uchun xavfsiz yondashuv sifatida qo‘llaniladi.',
        'UVB (NB-UVB) безопасен для беременных женщин, детей, пожилых людей и людей с ослабленным иммунитетом.',
        'NB-UVB is considered safe for pregnant women, children, elderly people and immunocompromised patients.',
      ),
    },
    {
      title: L('Samaradorlik', 'Эффективность', 'Effectiveness'),
      text: L(
        'NB-UVB samaradorligi isbotlangan: bemorlarning 82%ida taxminan 5 haftadan so‘ng teri deyarli toza holatga kelishi kuzatilgan.',
        'Эффективность UVB (NB-UVB) доказана: у 82% пациентов кожа становится практически чистой всего через 5 недель.',
        'NB-UVB efficacy is proven: in 82% of patients the skin becomes nearly clear in about 5 weeks.',
      ),
    },
    {
      title: L('Qulaylik', 'Удобство', 'Convenience'),
      text: L(
        'Fototerapiya klinikada yoki uyda o‘tkazilishi mumkin — kundalik hayotga oson moslashadi.',
        'Фототерапия легко интегрируется в повседневную жизнь благодаря возможности проведения лечения на дому или в клинике.',
        'Phototherapy fits daily life — treatment can be delivered in clinic or at home.',
      ),
    },
    {
      title: L('Texnologik yechimlar', 'Технологичность', 'Technology-driven'),
      text: L(
        'Daavlin muolajani soddalashtiradigan va osonlashtiradigan texnologik yechimlarni taklif etadi.',
        'Только Daavlin предлагает технологичные решения, которые делают проведение лечения беспроблемным и легким.',
        'Daavlin provides technology that makes treatment straightforward and manageable.',
      ),
    },
  ],
  helpNote: L(
    'Savol yoki muammo bo‘lsa, maxsus jamoamiz yordamga tayyor. Xizmatlar haqida batafsil ma’lumot beramiz va ehtiyojlaringizni muhokama qilish uchun uchrashuv tashkil qilamiz.',
    'Если есть вопросы или трудности, наша специальная команда всегда готова помочь. Предоставим дополнительную информацию об услугах и организуем встречу для детального обсуждения ваших потребностей.',
    'If you have questions or concerns, our specialist team is ready to help. We share service details and can arrange a meeting to discuss your needs.',
  ),
};

/** Radeski Skin Clinic */
export const DAAVLIN_CLINIC = {
  title: L('Radeski Skin Clinic', 'Radeski Skin Clinic', 'Radeski Skin Clinic'),
  subtitle: L(
    'Farg‘ona | Qo‘qon — dermatologiya, kosmetologiya, IPL, lazer, fototerapiya',
    'Фергана | Коканд — дерматология, косметология, IPL, лазер, фототерапия',
    'Fergana | Kokand — dermatology, cosmetology, IPL, laser, phototherapy',
  ),
  storyEyebrow: L('Klinik parvarish', 'Клиническая помощь', 'Clinical care'),
  promiseLabel: L('Bizning va’damiz', 'Наше обещание', 'Our promise'),
  promiseQuote: L(
    'Davolanish — shifokor nazoratida. Daavlin kabinasi — vosita; tashxis, doza va kuzatuv — klinikadan.',
    'Лечение — под контролем врача. Кабина Daavlin — инструмент; диагноз, доза и наблюдение — от клиники.',
    'Care under physician supervision. The Daavlin cabin is the tool; diagnosis, dose and follow-up come from the clinic.',
  ),
  promiseAside: L(
    'Distributor jihoz sotadi va o‘rnatadi. Bemor esa Radeski Skin Clinic’da qabul, kurs va natijani oladi — ikki rol chalkashmasligi kerak.',
    'Дистрибьютор продаёт и устанавливает оборудование. Пациент получает приём, курс и результат в Radeski Skin Clinic — роли не должны смешиваться.',
    'The distributor sells and installs equipment. Patients receive exam, course and outcomes at Radeski Skin Clinic — the two roles stay clear.',
  ),
  splitTitle: L('Klinika va distributor', 'Клиника и дистрибьютор', 'Clinic vs distributor'),
  stats: [
    {
      value: '2',
      label: L('Shaharda qabul', 'Города приёма', 'Cities of care'),
    },
    {
      value: 'NB-UVB',
      label: L('Asosiy fototerapiya', 'Основная фототерапия', 'Core phototherapy'),
    },
    {
      value: '4',
      label: L('Bosqichli bemor yo‘li', 'Этапы пути пациента', 'Patient pathway steps'),
    },
    {
      value: 'Daavlin',
      label: L('Klinik kabinalar', 'Клинические кабины', 'Clinical cabins'),
    },
  ],
  pathwayTitle: L('Bemor uchun yo‘l', 'Путь для пациента', 'Patient pathway'),
  pathwayIntro: L(
    'Fototerapiya “kelib-ketish” emas — rejalashtirilgan kurs. Har bosqich shifokor qarori bilan bog‘liq.',
    'Фототерапия — не «пришёл-ушёл», а запланированный курс. Каждый этап связан с решением врача.',
    'Phototherapy is not a drop-in visit — it is a planned course. Every step is tied to a clinician’s decision.',
  ),
  pathway: [
    {
      step: '01',
      title: L('Dermatolog ko‘rigi', 'Осмотр дерматолога', 'Dermatologist exam'),
      text: L(
        'Tashxis, teri tipi, tarqalish maydoni va oldingi davolash baholanadi. Kerak bo‘lsa laboratoriya yoki fotosuratlar olinadi.',
        'Оценивают диагноз, тип кожи, площадь поражения и предыдущее лечение. При необходимости — анализы или фотофиксация.',
        'Diagnosis, skin type, area involved and prior therapy are assessed. Labs or baseline photos when needed.',
      ),
    },
    {
      step: '02',
      title: L('Ko‘rsatma bahosi', 'Оценка показаний', 'Indication review'),
      text: L(
        'NB-UVB / boshqa rejim mosligi, kontrendikatsiyalar va uy yoki klinik format tanlanadi.',
        'Оценивают подходящий режим (NB-UVB и др.), противопоказания и формат — дом или клиника.',
        'Fit for NB-UVB or other modes, contraindications, and home vs clinic format are decided.',
      ),
    },
    {
      step: '03',
      title: L('Daavlin kursi', 'Курс в кабине Daavlin', 'Daavlin cabin course'),
      text: L(
        'Individual doza bilan seanslar boshlanadi. NeoLux va boshqa klinik tizimlar shifokor protokoliga bo‘ysunadi.',
        'Сеансы стартуют с индивидуальной дозы. NeoLux и другие клинические системы работают по протоколу врача.',
        'Sessions start with an individualized dose. NeoLux and other clinic systems follow the physician protocol.',
      ),
    },
    {
      step: '04',
      title: L('Nazorat va moslashuv', 'Контроль и корректировка', 'Monitor & adjust'),
      text: L(
        'Natija kuzatiladi, doza tuzatiladi, mahalliy terapiya qo‘shilishi mumkin. Oldin/keyin yozuvlar saqlanadi.',
        'Контролируют результат, корректируют дозу, могут добавить наружную терапию. Фиксируют «до/после».',
        'Results are reviewed, dose adjusted, topicals added if needed. Before/after records are kept.',
      ),
    },
  ],
  servicesTitle: L('Klinikada nimalar bor?', 'Что есть в клинике?', 'What the clinic offers'),
  services: [
    {
      title: L('Dermatologik qabul', 'Дерматологический приём', 'Dermatology visits'),
      text: L(
        'Tashxis, yo‘llanma va fototerapiya oldidan to‘liq klinik baholash.',
        'Диагноз, направление и полное клиническое обследование перед фототерапией.',
        'Diagnosis, referral and full clinical assessment before phototherapy.',
      ),
    },
    {
      title: L('Nazoratli fototerapiya', 'Контролируемая фототерапия', 'Supervised phototherapy'),
      text: L(
        'Daavlin kabinalarida seanslar: doza, xavfsizlik va jurnal — shifokor jamoasi bilan.',
        'Сеансы в кабинах Daavlin: доза, безопасность и журнал — с командой врача.',
        'Daavlin cabin sessions: dose, safety and logging with the clinical team.',
      ),
    },
    {
      title: L('IPL va lazer', 'IPL и лазер', 'IPL & laser'),
      text: L(
        'Dermatokosmetologik protseduralar — fototerapiyadan alohida yoki kursga qo‘shimcha.',
        'Дерматокосметологические процедуры — отдельно от фототерапии или в дополнение к курсу.',
        'Dermato-cosmetology procedures — separate from phototherapy or as course adjuncts.',
      ),
    },
    {
      title: L('Surunkali teri holatlari', 'Хронические заболевания кожи', 'Chronic skin conditions'),
      text: L(
        'Psoriaz, vitiligo, ekzema va bog‘liq holatlar uchun individual reja.',
        'Индивидуальный план при псориазе, витилиго, экземе и связанных состояниях.',
        'Individual plans for psoriasis, vitiligo, eczema and related conditions.',
      ),
    },
  ],
  branchesTitle: L('Qayerda qabul', 'Где принимают', 'Where we see patients'),
  branches: [
    {
      city: L('Farg‘ona', 'Фергана', 'Fergana'),
      role: L('Bosh klinika', 'Главная клиника', 'Main clinic'),
      text: L(
        'Asosiy dermatologiya va fototerapiya oqimi. Daavlin kabinalari shu yerda klinik rejimda ishlaydi.',
        'Основной поток дерматологии и фототерапии. Кабины Daavlin работают здесь в клиническом режиме.',
        'Primary dermatology and phototherapy flow. Daavlin cabins run here in clinical mode.',
      ),
    },
    {
      city: L('Qo‘qon', 'Коканд', 'Kokand'),
      role: L('Filial', 'Филиал', 'Branch'),
      text: L(
        'Filial qabuli va davomiy xizmatlar — bemorga yaqinroq joylashuv.',
        'Приём в филиале и сопутствующие услуги — ближе к пациенту.',
        'Branch visits and continuing care — closer to the patient.',
      ),
    },
  ],
  sections: [
    {
      title: L('Klinikada nima qilinadi?', 'Что делается в клинике?', 'What happens in the clinic?'),
      paragraphs: [
        L(
          'Radeski Skin Clinic — bemorlarni qabul qiladigan dermatologiya va kosmetologiya markazi. Bu yerda Daavlin fototerapiya tizimlari shifokor nazoratida ishlaydi: tashxis, individual doza, seanslar va kuzatuv.',
          'Radeski Skin Clinic — центр дерматологии и косметологии, где принимают пациентов. Здесь системы фототерапии Daavlin работают под контролем врача: диагноз, индивидуальная доза, сеансы и наблюдение.',
          'Radeski Skin Clinic is where patients receive care. Daavlin phototherapy systems run under physician supervision: diagnosis, individualized dosing, sessions and follow-up.',
        ),
        L(
          'Distributor esa klinikalar va shifokorlarga jihoz sotish, o‘rnatish va qo‘llab-quvvatlash bilan shug‘ullanadi. Ya’ni: davolanish — klinikada; apparat xarid qilish — distributor orqali.',
          'Дистрибьютор занимается продажей, установкой и поддержкой оборудования для клиник и врачей. То есть: лечение — в клинике; покупка аппарата — через дистрибьютора.',
          'The distributor sells, installs and supports equipment for clinics and doctors. In short: treatment at the clinic; equipment purchase via the distributor.',
        ),
      ],
    },
    {
      title: L('Bemor uchun yo‘l', 'Путь для пациента', 'Patient pathway'),
      paragraphs: [
        L(
          '1) Dermatolog ko‘rigi. 2) Fototerapiya ko‘rsatmasi baholanadi. 3) Daavlin kabinasida kurs boshlanadi. 4) Natija kuzatiladi va protokol moslashtiriladi.',
          '1) Осмотр дерматолога. 2) Оценка показаний к фототерапии. 3) Курс в кабине Daavlin. 4) Контроль результата и корректировка протокола.',
          '1) Dermatologist exam. 2) Assess phototherapy indications. 3) Start a Daavlin cabin course. 4) Monitor results and adjust the protocol.',
        ),
      ],
    },
  ],
  pointsTitle: L('Klinikada nimalar bor?', 'Что есть в клинике?', 'What the clinic offers'),
  points: LL(
    [
      'Shifokor ko‘rigi va fototerapiyaga yo‘llanma',
      'Daavlin kabinalarida nazoratli seanslar',
      'Psoriaz, vitiligo, ekzema va boshqa holatlar',
      'IPL, lazer va boshqa dermatokosmetologik xizmatlar',
      'Farg‘ona bosh klinika va Qo‘qon filiali',
    ],
    [
      'Осмотр врача и направление на фототерапию',
      'Контролируемые сеансы в кабинах Daavlin',
      'Псориаз, витилиго, экзема и другие состояния',
      'IPL, лазер и другие дерматокосметологические услуги',
      'Главная клиника в Фергане и филиал в Коканде',
    ],
    [
      'Doctor exam and referral to phototherapy',
      'Supervised sessions in Daavlin cabins',
      'Psoriasis, vitiligo, eczema and related conditions',
      'IPL, laser and other dermato-cosmetology services',
      'Main clinic in Fergana and Kokand branch',
    ],
  ),
  note: L(
    'Davolanish uchun — qabulga yoziling. Klinikangizga kabina o‘rnatish yoki jihoz sotib olish uchun — Aloqa bo‘limi orqali Distributor jamoasiga murojaat qiling.',
    'Для лечения — запишитесь на приём. Чтобы купить оборудование или установить кабину в своей клинике — обратитесь к команде дистрибьютора через раздел «Контакты».',
    'For treatment — book an appointment. To buy equipment or install a cabin in your practice — contact the distributor team via Contacts.',
  ),
};

/** Кабины — produkciya + homepage solutions */
export const DAAVLIN_CABINS = {
  title: L('Fototerapiya kabinalari', 'Кабины для фототерапии', 'Phototherapy cabins'),
  subtitle: L(
    'Daavlin kabinalari — O‘zbekistonda sotuv. Uy va klinik yechimlar',
    'Кабины Daavlin — продажа в Узбекистане. Домашние и клинические решения',
    'Daavlin cabins — available in Uzbekistan. Home and clinical solutions',
  ),
  storyEyebrow: L('Yechimlar qatori', 'Линейка решений', 'Solution range'),
  promiseLabel: L('Nima uchun Daavlin', 'Почему Daavlin', 'Why Daavlin'),
  promiseQuote: L(
    'Xavfsiz, samarali va ilmiy asoslangan fototerapiya — uy bemori uchun ham, klinik amaliyot uchun ham.',
    'Безопасная, эффективная и научно обоснованная фототерапия — и для домашнего пациента, и для клинической практики.',
    'Safe, effective, science-grounded phototherapy — for home patients and clinical practice alike.',
  ),
  promiseAside: L(
    'Radeski Distributor — tanlash, o‘rnatish, o‘qitish va kuzatuv. Radeski Skin Clinic — bemor uchun nazoratli kurs.',
    'Radeski Distributor — подбор, установка, обучение и сопровождение. Radeski Skin Clinic — контролируемый курс для пациента.',
    'Radeski Distributor — selection, install, training and support. Radeski Skin Clinic — supervised courses for patients.',
  ),
  intro: L(
    'Daavlin psoriaz, ekzema va vitiligo uchun uy fototerapiyasi hamda shifokorlarning ambulator fototerapiyasini qo‘llab-quvvatlovchi to‘liq qurilmalar va xizmatlar spektrini taklif etadi. Xavfsiz, samarali va ilmiy yutuqlarga asoslangan variantlar.',
    'Daavlin предлагает полный спектр устройств и услуг фототерапии для поддержки домашней фототерапии пациентов и амбулаторной фототерапии для медицинских работников. Безопасные, эффективные и доступные варианты на основе научных и практических достижений.',
    'Daavlin offers a full spectrum of phototherapy devices and services supporting home phototherapy for patients and outpatient phototherapy for clinicians. Safe, effective, accessible options grounded in scientific and practical advances.',
  ),
  introExtra: L(
    'Qator to‘liq tana kabinasidan nishonli qo‘l qurilmasigacha va giperhidroza uchun TWI moduligacha cho‘ziladi. To‘g‘ri model — diagnostika, zona va oqimga bog‘liq.',
    'Линейка охватывает кабины на всё тело, точечные ручные устройства и модуль TWI при гипергидрозе. Правильная модель зависит от диагноза, зоны и потока.',
    'The range spans full-body cabins, targeted handheld units and a TWI module for hyperhidrosis. The right model depends on diagnosis, area and throughput.',
  ),
  stats: [
    {
      value: '6',
      label: L('Asosiy model qatori', 'Основной модельный ряд', 'Core models in focus'),
    },
    {
      value: '3',
      label: L('Yechim yo‘nalishi', 'Направления решений', 'Solution directions'),
    },
    {
      value: 'NB-UVB',
      label: L('Eng keng qo‘llanadigan', 'Самый частый режим', 'Most common regimen'),
    },
    {
      value: 'UZ',
      label: L('Mahalliy distributor', 'Локальный дистрибьютор', 'Local distributor'),
    },
  ],
  chooseTitle: L('Qanday tanlash kerak?', 'Как выбрать?', 'How to choose?'),
  chooseIntro: L(
    'Bir model “hammasi uchun” emas. Quyidagi savollar tanlovni toraytiradi — yakuniy qaror mutaxassis bilan.',
    'Одна модель не подходит «всем». Эти вопросы сужают выбор — итог с специалистом.',
    'No single model fits everyone. These questions narrow the choice — final pick with a specialist.',
  ),
  choose: [
    {
      title: L('Zona qamrovi', 'Зона покрытия', 'Coverage area'),
      text: L(
        'To‘liq tana — NeoLux / 7 Series / ML24000. Qo‘l-oyoq — M Series. Lokal / bosh terisi — DermaPal.',
        'Всё тело — NeoLux / 7 Series / ML24000. Кисти-стопы — M Series. Локально / кожа головы — DermaPal.',
        'Full body — NeoLux / 7 Series / ML24000. Hands/feet — M Series. Spot / scalp — DermaPal.',
      ),
    },
    {
      title: L('Uy yoki klinika', 'Дом или клиника', 'Home or clinic'),
      text: L(
        'Uy: ixcham panel yoki qo‘l qurilmasi. Klinika: oqim, SmartTouch™, nogironlar aravachasi va elektr talablari.',
        'Дом: компактная панель или ручное устройство. Клиника: поток, SmartTouch™, доступность и электрика.',
        'Home: compact panel or handheld. Clinic: throughput, SmartTouch™, accessibility and electrical needs.',
      ),
    },
    {
      title: L('Spektr va intensitet', 'Спектр и интенсивность', 'Spectrum & intensity'),
      text: L(
        'Ko‘p hollarda NB-UVB. Og‘ir tanlangan UVA-1 — ML24000. Giperhidroza — Aquex (UV emas).',
        'Чаще NB-UVB. Тяжёлый отобранный UVA-1 — ML24000. Гипергидроз — Aquex (не UV).',
        'Often NB-UVB. Selected severe UVA-1 — ML24000. Hyperhidrosis — Aquex (not UV).',
      ),
    },
  ],
  processTitle: L('Sotib olishdan ishga tushirishgacha', 'От покупки до запуска', 'From purchase to go-live'),
  process: [
    {
      step: '01',
      title: L('Maslahat', 'Консультация', 'Consult'),
      text: L(
        'Diagnostika, joy, elektr va bemor oqimini muhokama qilamiz.',
        'Обсуждаем диагноз, помещение, электрику и поток пациентов.',
        'We discuss diagnosis, room, electrical supply and patient flow.',
      ),
    },
    {
      step: '02',
      title: L('Model tanlash', 'Подбор модели', 'Model select'),
      text: L(
        '7 Series, NeoLux, M Series va boshqalar ichidan mos konfiguratsiya.',
        'Подходящая конфигурация из 7 Series, NeoLux, M Series и других.',
        'The right configuration from 7 Series, NeoLux, M Series and more.',
      ),
    },
    {
      step: '03',
      title: L('O‘rnatish', 'Установка', 'Install'),
      text: L(
        'Yetkazib berish, montaj va xavfsizlik tekshiruvi — mutaxassis jamoa bilan.',
        'Поставка, монтаж и проверка безопасности — со специалистами.',
        'Delivery, assembly and safety checks with a specialist team.',
      ),
    },
    {
      step: '04',
      title: L('O‘qitish va kuzatuv', 'Обучение и сопровождение', 'Train & support'),
      text: L(
        'Operator treningi, protokol tavsiyalari va keyingi texnik yordam.',
        'Обучение операторов, рекомендации по протоколу и дальнейшая поддержка.',
        'Operator training, protocol guidance and ongoing technical support.',
      ),
    },
  ],
  solutionsTitle: L('Uch asosiy yo‘nalish', 'Три основных направления', 'Three core directions'),
  blocks: [
    {
      image: '/daavlin/daavlin-cabin-home.webp',
      title: L(
        'Uy foydalanishi uchun fototerapiya',
        'Фототерапия для домашнего использования',
        'Home-use phototherapy',
      ),
      text: L(
        'Daavlin uy va klinikada qulay, maxfiy va oson foydalanish uchun mo‘ljallangan to‘liq qurilmalar liniyasini taklif etadi. Terini o‘zingiz nazorat qiling — teri sizni boshqarmasin.',
        'Daavlin предлагает полную линейку устройств, разработанных для комфортного, уединённого и удобного использования дома и в клинике. Выберите контроль над своей кожей — не позволяйте коже управлять вами.',
        'Daavlin offers a full line designed for comfortable, private, convenient use at home and in clinic. Take control of your skin — do not let skin control you.',
      ),
    },
    {
      image: '/daavlin/daavlin-cabin-clinic.webp',
      title: L(
        'Tibbiy klinikalar uchun fotokabinalar',
        'Фотокабины для медицинских клиник',
        'Photo cabins for medical clinics',
      ),
      text: L(
        'Fototerapiyani amaliyotingizga joriy etish — surunkali teri kasalliklarini bevosita kabinetingizda davolash imkonini beradi. Klinikangizga apparat o‘rnatmoqchi bo‘lsangiz, biz bilan bog‘laning.',
        'Внедрение фототерапии в вашу практику позволит лечить пациентов с хроническими заболеваниями кожи прямо в кабинете. Если хотите установить фототерапевтический аппарат — свяжитесь с нами.',
        'Adding phototherapy to your practice lets you treat chronic skin disease in your office. If you want to install a phototherapy system — contact us.',
      ),
    },
    {
      image: '/daavlin/daavlin-cabin-targeted.webp',
      title: L(
        'Biznesingizni kengaytirishda hamkor',
        'Ваш партнёр в развитии практики',
        'Your partner in growing practice',
      ),
      text: L(
        'Klinikangiz bor yoki klinik fototerapiyani amaliyotingizga qo‘shmoqchi shifokor bo‘lsangiz — har bosqichda yordam beramiz: tanlash, o‘rnatish, o‘qitish va kuzatuv.',
        'Если у вас клиника или вы врач, желающий расширить практику клинической фототерапией — поддержим на каждом этапе: подбор, установка, обучение и сопровождение.',
        'If you run a clinic or want to expand with clinical phototherapy, we support every stage: selection, installation, training and ongoing support.',
      ),
    },
  ],
  lineupTitle: L('Asosiy modelllar qatori', 'Основной модельный ряд', 'Core model range'),
  lineupIntro: L(
    'Distributor va klinikada uchraydigan Daavlin qatoridan asosiy tizimlar. Har bir model — alohida vazifa: to‘liq tana, ekstremitetlar, nishonli zonalar yoki giperhidroza.',
    'Ключевые системы ряда Daavlin у дистрибьютора и в клинике. У каждой модели своя роль: всё тело, конечности, точечные зоны или гипергидроз.',
    'Key Daavlin systems available via the distributor and clinic. Each model has a clear role: full body, extremities, spot areas, or hyperhidrosis.',
  ),
  lineup: [
    {
      id: '7-series',
      name: '7 Series',
      image: '/daavlin/model-7-series.webp',
      badge: L('Uy / klinika', 'Дом / клиника', 'Home / clinic'),
      tagline: L(
        'To‘liq tana paneli — moslashuvchan lampalar konfiguratsiyasi',
        'Панель для всего тела — гибкая конфигурация ламп',
        'Full-body panel — flexible lamp configurations',
      ),
      summary: L(
        'Daavlin 7 Series — vertikal fototerapiya paneli: uyda yoki klinikada to‘liq tana NB-UVB / UVA / broadband UVB davolash uchun. Esikli va esiksiz variantlar, 4–12 lampagacha.',
        'Daavlin 7 Series — вертикальная панель фототерапии для лечения всего тела NB-UVB / UVA / broadband UVB дома или в клинике. Варианты с дверями и без, от 4 до 12 ламп.',
        'Daavlin 7 Series is a vertical phototherapy panel for full-body NB-UVB / UVA / broadband UVB at home or in clinic. Door and no-door options, from 4 to 12 lamps.',
      ),
      details: [
        L(
          'Balandligi taxminan 6 fut (≈189 cm): bemor turib turib seans o‘tkazadi. Esikli modellarda “wrap-around” effekt — bir-ikki ekspozitsiyada kengroq zona qamrovi.',
          'Высота около 6 футов (≈189 см): сеанс стоя. У моделей с дверями — эффект «облегания» света: шире охват за одно-два облучения.',
          'About 6 ft (≈189 cm) tall for standing sessions. Door-lamp models create a wrap-around effect so broader coverage may need only one or two exposures.',
        ),
        L(
          'Standart rozetkaga ulanadi (110–120 V yoki 220–240 V). Har bir apparat Output Certificate bilan yetkaziladi — haqiqiy chiqish doza rejasiga asos bo‘ladi.',
          'Подключается к обычной розетке (110–120 В или 220–240 В). Каждое устройство поставляется с Output Certificate — реальная мощность служит основой для дозирования.',
          'Plugs into standard outlets (110–120 V or 220–240 V). Each unit ships with an Output Certificate so real output underpins dosing.',
        ),
      ],
      benefits: LL(
        [
          'To‘liq tana psoriaz, vitiligo, atopik dermatit protokoli',
          '4 / 6 / 8 / 10 / 12 lampalik variantlar',
          'Uyga o‘rnatish yoki klinik kabinet uchun',
          'UVA, NB-UVB yoki broadband UVB tanlash',
        ],
        [
          'Протоколы для всего тела: псориаз, витилиго, атопический дерматит',
          'Варианты на 4 / 6 / 8 / 10 / 12 ламп',
          'Для дома или клинического кабинета',
          'Выбор UVA, NB-UVB или broadband UVB',
        ],
        [
          'Full-body protocols: psoriasis, vitiligo, atopic dermatitis',
          '4 / 6 / 8 / 10 / 12 lamp options',
          'Home install or clinic room',
          'UVA, NB-UVB or broadband UVB choice',
        ],
      ),
      bestFor: L(
        'Kimga: uyda to‘liq tana kursi kerak bo‘lgan bemor; kichik klinikada vertikal panel yetarli joyajda.',
        'Кому: пациенту нужен полный курс дома; небольшой клинике — вертикальная панель без большой кабины.',
        'Best for: patients needing a full-body home course; smaller clinics wanting a panel without a full booth.',
      ),
      specs: LL(
        ['Balandlik ≈189 cm', 'Kenglik (eshik ochiq) ≈100 cm', 'Og‘irlik ≈34–58 kg', 'Quvvat: 110–240 V'],
        ['Высота ≈189 см', 'Ширина (двери открыты) ≈100 см', 'Вес ≈34–58 кг', 'Питание: 110–240 В'],
        ['Height ≈189 cm', 'Width (doors open) ≈100 cm', 'Weight ≈34–58 kg', 'Power: 110–240 V'],
      ),
    },
    {
      id: 'dermapal',
      name: 'DermaPal',
      image: '/daavlin/model-dermapal.webp',
      badge: L('Nishonli / portativ', 'Точечный / портативный', 'Spot / portable'),
      tagline: L(
        'Qo‘lda nishonli UV — bosh terisi va lokal o‘choqlar',
        'Ручной точечный UV — кожа головы и локальные очаги',
        'Handheld targeted UV — scalp and spot lesions',
      ),
      summary: L(
        'DermaPal — shifokor nazoratidagi qo‘l UV chiroq. Psoriaz, vitiligo va atopik dermatitning mahalliy zonalarini (shu jumladan bosh terisini) davolash uchun mo‘ljallangan; sayohatga ham olib yuriladi.',
        'DermaPal — ручная UV-лампа под контролем врача. Для локальных зон псориаза, витилиго и атопического дерматита (включая кожу головы); достаточно компактна для поездок.',
        'DermaPal is a physician-directed handheld UV lamp for localized psoriasis, vitiligo and atopic dermatitis — including scalp — compact enough to travel with.',
      ),
      details: [
        L(
          'UVA, broadband UVB yoki narrowband UVB lampalar bilan konfiguratsiya qilinadi. Doza aniqligi ±5% (10 daqiqalik oralikda) — qisqa, nishonli seanslar uchun muhim.',
          'Конфигурируется лампами UVA, broadband UVB или narrowband UVB. Точность дозы ±5% за 10 минут — важно для коротких точечных сеансов.',
          'Configurable with UVA, broadband UVB or narrowband UVB lamps. Dose accuracy ±5% over a 10-minute window — important for short targeted sessions.',
        ),
        L(
          'Katta kabina o‘rniga emas — uning qo‘shimchasi: plitalar, pigmental o‘choqlar yoki bosh terisidagi joylar uchun. Shifokor ko‘rsatmasiz mustaqil “o‘zini davolash” uchun emas.',
          'Не замена большой кабины, а дополнение: бляшки, пигментные очаги или зоны на коже головы. Не для самолечения без назначения врача.',
          'Not a full-cabin replacement — an add-on for plaques, pigment patches or scalp spots. Not for self-treatment without a clinician’s plan.',
        ),
      ],
      benefits: LL(
        [
          'Bosh terisi va kichik o‘choqlar',
          'Past quvvat sarfi (~0.4 A)',
          'Teri tipi I–VI uchun (shifokor qarori)',
          'Uy va ambulator nishonli protokol',
        ],
        [
          'Кожа головы и мелкие очаги',
          'Низкое энергопотребление (~0.4 А)',
          'Для типов кожи I–VI (по решению врача)',
          'Домашний и амбулаторный точечный протокол',
        ],
        [
          'Scalp and small spots',
          'Low power draw (~0.4 A)',
          'Skin types I–VI (clinician directed)',
          'Home and outpatient spot protocols',
        ],
      ),
      bestFor: L(
        'Kimga: lokal psoriaz/vitiligo; bosh terisi; katta kabinani to‘ldirish kerak bo‘lganda.',
        'Кому: локальный псориаз/витилиго; кожа головы; когда нужна точечная доза к основной кабине.',
        'Best for: localized psoriasis/vitiligo; scalp; when spot dosing should complement a cabin.',
      ),
      specs: LL(
        ['Format: qo‘lda', 'Lampalar: UVA / BB-UVB / NB-UVB', 'Quvvat: 110–240 V', 'Ko‘rsatmalar: shifokor nazorati'],
        ['Формат: ручной', 'Лампы: UVA / BB-UVB / NB-UVB', 'Питание: 110–240 В', 'Показания: под контролем врача'],
        ['Format: handheld', 'Lamps: UVA / BB-UVB / NB-UVB', 'Power: 110–240 V', 'Use: physician directed'],
      ),
    },
    {
      id: 'm-series',
      name: 'M Series',
      image: '/daavlin/model-m-series.webp',
      badge: L('Qo‘l va oyoq', 'Кисти и стопы', 'Hands & feet'),
      tagline: L(
        'Ekstremitetlarga maxsus — qo‘l-oyoq fototerapiyasi',
        'Специально для конечностей — фототерапия кистей и стоп',
        'Extremity-focused — hand and foot phototherapy',
      ),
      summary: L(
        'M Series — qo‘l va oyoq fotosezgir kasalliklari (psoriaz, ekzema va boshqalar) uchun ixcham stol usti / hood tizimi. Klinikada tez almashinadigan, qulay va texnologik yechim.',
        'M Series — компактная система с колпаком для фоточувствительных заболеваний кистей и стоп (псориаз, экзема и др.). Удобна и технологична для быстрой ротации в клинике.',
        'M Series is a compact hooded system for photoresponsive hand and foot disease (psoriasis, eczema and related). Convenient and tech-forward for clinic throughput.',
      ),
      details: [
        L(
          'O‘lchami taxminan 13″ × 20.25″ × 22″, og‘irligi ~48 lbs (~22 kg). Standart 120–240 V. NB-UVB, broadband UVB, UVA va kombinatsiyalar mavjud.',
          'Размер примерно 13″ × 20.25″ × 22″, вес ~48 фунтов (~22 кг). Стандарт 120–240 В. Доступны NB-UVB, broadband UVB, UVA и комбинации.',
          'Roughly 13″ × 20.25″ × 22″, ~48 lbs (~22 kg). Standard 120–240 V. NB-UVB, broadband UVB, UVA and combination units available.',
        ),
        L(
          'To‘liq tana kabinasiga alternativ emas — palmar/plantar yoki bilak-to‘piq zonalarida yuqori doza zichligi kerak bo‘lganda asosiy vosita. NeoLux / 7 Series bilan birgalikda “to‘liq kurs”ni yopadi.',
          'Не замена кабине всего тела — основной инструмент, когда на ладонях/стопах нужна более плотная доза. Вместе с NeoLux / 7 Series закрывает полный курс.',
          'Not a full-body cabin substitute — the tool when palms/soles need denser dosing. Paired with NeoLux / 7 Series it completes a full course.',
        ),
      ],
      benefits: LL(
        [
          'Qo‘l va oyoqni alohida protokol',
          'Klinikada joy tejaydi',
          'Lampalar spektri — moslashuvchan',
          'Ambulator seanslar uchun tez aylanish',
        ],
        [
          'Отдельный протокол для кистей и стоп',
          'Экономия места в клинике',
          'Гибкий выбор спектра ламп',
          'Быстрая ротация амбулаторных сеансов',
        ],
        [
          'Dedicated hand/foot protocol',
          'Clinic space efficient',
          'Flexible lamp spectra',
          'Fast outpatient turnover',
        ],
      ),
      bestFor: L(
        'Kimga: palmar/plantar psoriaz yoki ekzema; ekstremitetlarda qattiq o‘choqlar.',
        'Кому: ладонно-подошвенный псориаз или экзема; упорные очаги на конечностях.',
        'Best for: palmoplantar psoriasis or eczema; stubborn extremity lesions.',
      ),
      specs: LL(
        ['Format: hood / stol', 'Maqsad: qo‘l va oyoq', 'Og‘irlik ≈22 kg', 'Quvvat: 120–240 V'],
        ['Формат: колпак / стол', 'Цель: кисти и стопы', 'Вес ≈22 кг', 'Питание: 120–240 В'],
        ['Format: hood / tabletop', 'Target: hands & feet', 'Weight ≈22 kg', 'Power: 120–240 V'],
      ),
    },
    {
      id: 'ml24000',
      name: 'ML24000',
      image: '/daavlin/model-ml24000.webp',
      badge: L('Yuqori intensivlik', 'Высокая интенсивность', 'High intensity'),
      tagline: L(
        'To‘liq tana UVA-1 kabinasi — chuqur yorug‘lik kursi',
        'Кабина UVA-1 на всё тело — курс глубокого света',
        'Full-body UVA-1 cabinet — deep-penetrating light courses',
      ),
      summary: L(
        'ML24000 — klinik to‘liq tana UVA-1 fototerapiya kabinasi: 24 ta yuqori quvvatli metal halide lampa, asosiy spektr ~350–400 nm. Intensiv protocol va SmartTouch™ / Flex Timer boshqaruvi.',
        'ML24000 — клиническая кабина UVA-1 на всё тело: 24 мощные metal halide лампы, основной спектр ~350–400 нм. Интенсивные протоколы и управление SmartTouch™ / Flex Timer.',
        'ML24000 is a full-body clinical UVA-1 cabinet: twenty-four high-intensity metal halide lamps, primary emission ~350–400 nm. Intensive protocols with SmartTouch™ / Flex Timer control.',
      ),
      details: [
        L(
          'Tipik irradiansiya ~60–100 mW/cm² (±10%, 9″ da). Bu NB-UVB paneldan boshqa kategoriya: chuqurroq UVA-1 energiya — tanlangan og‘ir dermatologik holatlar uchun shifokor rejasi bilan.',
          'Типичная облучённость ~60–100 мВт/см² (±10% на 9″). Это иная категория, чем панель NB-UVB: более глубокая энергия UVA-1 — только по плану врача при отобранных тяжёлых состояниях.',
          'Typical irradiance ~60–100 mW/cm² (±10% at 9″). A different class than NB-UVB panels: deeper UVA-1 energy only under a clinician’s plan for selected severe disease.',
        ),
        L(
          'Elektr: kuchli uch fazali ulanish (masalan 230 V 3Φ / 400 V 3Φ+N, yuqori tok) — faqat litsenziyalangan elektrik o‘rnatadi. Ventilyatsiya va xona limitalari muhim; bemor protokoli jurnalga yoziladi.',
          'Электрика: мощное трёхфазное подключение (например 230 В 3Φ / 400 В 3Φ+N, высокий ток) — только лицензированный электрик. Важны вентиляция и лимиты помещения; протокол пациента журналируется.',
          'Electrical: heavy three-phase supply (e.g. 230 V 3Φ / 400 V 3Φ+N, high amperage) — licensed electrician only. Ventilation and room limits matter; patient protocols are logged.',
        ),
      ],
      benefits: LL(
        [
          'Yuqori intensivetdagi UVA-1',
          'To‘liq tana klinik kabina',
          'SmartTouch™ dozani nazorat qiladi',
          'Intensiv kurslar / og‘ir holatlar',
        ],
        [
          'Высокоинтенсивный UVA-1',
          'Клиническая кабина на всё тело',
          'SmartTouch™ контролирует дозу',
          'Интенсивные курсы / тяжёлые случаи',
        ],
        [
          'High-intensity UVA-1',
          'Full-body clinical cabinet',
          'SmartTouch™ dose control',
          'Intensive courses / severe cases',
        ],
      ),
      bestFor: L(
        'Kimga: yirik klinik markaz; UVA-1 bo‘yicha maxsus protokol; yuqori oqimli kabinet.',
        'Кому: крупный клинический центр; отдельный протокол UVA-1; кабинет с высокой нагрузкой.',
        'Best for: larger clinical centers; dedicated UVA-1 protocols; high-throughput rooms.',
      ),
      specs: LL(
        ['24 × metal halide lampa', 'Spektr ≈350–400 nm', 'Irradiansiya ≈60–100 mW/cm²', '3-fazali kuchli o‘rnatish'],
        ['24 × metal halide лампы', 'Спектр ≈350–400 нм', 'Облучённость ≈60–100 мВт/см²', 'Мощный 3-фазный монтаж'],
        ['24 × metal halide lamps', 'Spectrum ≈350–400 nm', 'Irradiance ≈60–100 mW/cm²', 'Heavy 3-phase install'],
      ),
    },
    {
      id: 'neolux',
      name: 'NeoLux',
      image: '/daavlin/model-neolux.webp',
      badge: L('Klinik asosiy kabina', 'Основная клиническая кабина', 'Core clinic cabin'),
      tagline: L(
        'Zamonaviy to‘liq tana kabina — NB-UVB / UVA, SmartTouch™',
        'Современная кабина на всё тело — NB-UVB / UVA, SmartTouch™',
        'Modern full-body cabin — NB-UVB / UVA with SmartTouch™',
      ),
      summary: L(
        'NeoLux — Daavlinning klinik ofis uchun “premium” to‘liq tana kabinasi. Crystal Cool™ sovutish, Crystal Clear™ akril ichki qoplama, SmartTouch™ protokol va doza himoyasi. Radeski amaliyotidagi asosiy NB-UVB kabinalardan biri.',
        'NeoLux — «премиум» клиническая кабина Daavlin на всё тело. Crystal Cool™ охлаждение, акрил Crystal Clear™, SmartTouch™ протоколы и защита дозы. Одна из ключевых NB-UVB кабин в практике Radeski.',
        'NeoLux is Daavlin’s premium full-body clinic cabin. Crystal Cool™ cooling, Crystal Clear™ acrylic interior, SmartTouch™ protocols and dose safeguards. A core NB-UVB cabin in Radeski practice.',
      ),
      details: [
        L(
          'Taxminan 40 ta lampa (klassik 48 o‘rniga) + UV aks ettirish tizimi: qisqaroq seans, kamroq issiqlik va elektr. Ichki akril lampani bemordan himoya qiladi va tozalashni osonlashtiradi.',
          'Около 40 ламп (вместо классических 48) + система UV-отражения: короче сеанс, меньше тепла и электричества. Внутренний акрил защищает пациента от ламп и упрощает уборку.',
          'As few as ~40 lamps (vs classic 48) plus a UV reflector system: shorter sessions, less heat and power. Interior acrylic shields patients from lamps and eases cleaning.',
        ),
        L(
          'O‘lchami ≈84″ balandlik; eshik yopiq ~41″ × 40″. Maxsus 20 A zanjir (200–240 V; EU/NeoLux+ variantlar farq qilishi mumkin). Nogironlar aravachasiga mos joy ajratish imkoniyati.',
          'Размер ≈84″ в высоту; двери закрыты ~41″ × 40″. Выделенная цепь 20 А (200–240 В; EU/NeoLux+ могут отличаться). Пространство рассчитано и на доступность для коляски.',
          'About 84″ tall; doors closed ~41″ × 40″. Dedicated 20 A circuit (200–240 V; EU/NeoLux+ may differ). Designed with wheelchair-accessible interior space.',
        ),
      ],
      benefits: LL(
        [
          'NB-UVB, UVA yoki kombinatsiya',
          'SmartTouch™: jurnal, protokol, xato himoyasi',
          'Crystal Cool™ — bemor salqinroq',
          'Joy tejaydigan “premium” klinika kabinasi',
        ],
        [
          'NB-UVB, UVA или комбинация',
          'SmartTouch™: журнал, протокол, защита от ошибок',
          'Crystal Cool™ — пациенту прохладнее',
          'Компактная «премиум» клиническая кабина',
        ],
        [
          'NB-UVB, UVA or combination',
          'SmartTouch™: logs, protocols, error guards',
          'Crystal Cool™ — cooler for patients',
          'Space-efficient premium clinic cabin',
        ],
      ),
      bestFor: L(
        'Kimga: Radeski / zamonaviy dermatologiya markazi; asosiy NB-UVB oqimi; bemor qulayligi muhim joy.',
        'Кому: Radeski / современный дерматологический центр; основной поток NB-UVB; важен комфорт пациента.',
        'Best for: Radeski / modern derm centers; primary NB-UVB throughput; when patient comfort matters.',
      ),
      specs: LL(
        ['Balandlik ≈213 cm', 'Eshik yopiq ≈104×102 cm', '≈40 lampa (+ reflektor)', 'Maxsus 20 A zanjir'],
        ['Высота ≈213 см', 'Двери закрыты ≈104×102 см', '≈40 ламп (+ рефлектор)', 'Выделенная цепь 20 А'],
        ['Height ≈213 cm', 'Doors closed ≈104×102 cm', '≈40 lamps (+ reflector)', 'Dedicated 20 A circuit'],
      ),
    },
    {
      id: 'aquex',
      name: 'Aquex',
      image: '/daavlin/model-aquex.webp',
      badge: L('Ionoforez · TWI', 'Ионофорез · TWI', 'Iontophoresis · TWI'),
      tagline: L(
        'Musluk suvi ionoforezi — giperhidroza (ortiqcha terlash)',
        'Ионофорез водопроводной водой — гипергидроз',
        'Tap-water iontophoresis — hyperhidrosis (excess sweating)',
      ),
      summary: L(
        'Aquex — UV kabina emas. Bu “tap water iontophoresis” (TWI) tizimi: kichik modul + suvli vannalar orqali qo‘l/oyoq giperhidrozasini xavfsiz va tejamkor davolash.',
        'Aquex — не UV-кабина. Система «tap water iontophoresis» (TWI): компактный модуль + ванночки с водой для безопасного и экономичного лечения гипергидроза кистей/стоп.',
        'Aquex is not a UV cabin. It is a tap-water iontophoresis (TWI) system: a compact module plus water trays for safe, cost-effective hand/foot hyperhidrosis care.',
      ),
      details: [
        L(
          'Modul o‘lchami ≈7.5″ × 5.4″ × 2″, og‘irligi ~1 lb. 110–240 V, 50–60 Hz. Protokol shifokor tomonidan: seanslar chastotasi va tok kuchi individual.',
          'Размер модуля ≈7.5″ × 5.4″ × 2″, вес ~1 фунт. 110–240 В, 50–60 Гц. Протокол врача: частота сеансов и сила тока индивидуальны.',
          'Module ~7.5″ × 5.4″ × 2″, about 1 lb. 110–240 V, 50–60 Hz. Clinician sets session frequency and current individually.',
        ),
        L(
          'Fototerapiya liniyasidagi “qo‘shimcha” yechim: terlash muammosi fotosezgir plitalardan farq qiladi. Distributor katalogida Daavlin oilasi sifatida turadi — lekin indikatsiya alohida.',
          '«Дополнение» в линейке фототерапии: гипергидроз — не то же, что фоточувствительные бляшки. В каталоге дистрибьютора — семья Daavlin, но показание отдельное.',
          'A line companion to phototherapy: sweating disorders differ from photoresponsive plaques. Listed with Daavlin via the distributor, but the indication is distinct.',
        ),
      ],
      benefits: LL(
        [
          'Giperhidroza uchun TWI',
          'Dori-darmonsiz yondashuv (musluk suvi)',
          'Ixcham, uy/klinika',
          'Samara + tejamkorlik (Daavlin tavsifi)',
        ],
        [
          'TWI при гипергидрозе',
          'Подход без лекарств (водопроводная вода)',
          'Компактно: дом/клиника',
          'Эффективность + экономичность (по Daavlin)',
        ],
        [
          'TWI for hyperhidrosis',
          'Drug-free approach (tap water)',
          'Compact: home/clinic',
          'Effective + cost-conscious (per Daavlin)',
        ],
      ),
      bestFor: L(
        'Kimga: palmar/plantar giperhidroza; UV kursiga parallel yoki alohida yechim.',
        'Кому: ладонно-подошвенный гипергидроз; параллельно UV-курсу или отдельно.',
        'Best for: palmoplantar hyperhidrosis; parallel to or separate from a UV course.',
      ),
      specs: LL(
        ['Format: TWI modul', 'Vazn ≈0.45 kg', 'Quvvat: 110–240 V', 'Indikatsiya: giperhidroza'],
        ['Формат: модуль TWI', 'Вес ≈0.45 кг', 'Питание: 110–240 В', 'Показание: гипергидроз'],
        ['Format: TWI module', 'Weight ≈0.45 kg', 'Power: 110–240 V', 'Indication: hyperhidrosis'],
      ),
    },
  ],
  closing: L(
    'Qaysi model klinikangiz yoki bemoringiz uchun mos — mutaxassis bilan birga tanlaymiz. Ariza qoldiring yoki qo‘ng‘iroq qiling: menejer 10 daqiqa ichida bog‘lanishga intiladi.',
    'Какая модель подходит вашей клинике или пациенту — подберём вместе со специалистом. Оставьте заявку или позвоните: менеджер стремится связаться в течение 10 минут.',
    'Which model fits your clinic or patient — we select it with a specialist. Leave a request or call: managers aim to respond within about 10 minutes.',
  ),
};

/** Клинические результаты */
export const DAAVLIN_RESULTS = {
  title: L('Klinik natijalar', 'Клинические результаты', 'Clinical results'),
  subtitle: L(
    'Daavlin fototerapiyasining isbotlangan samaradorligi',
    'Доказанная эффективность фототерапии Daavlin',
    'Proven effectiveness of Daavlin phototherapy',
  ),
  sections: [
    {
      title: L('Nima uchun “isbotlangan”?', 'Почему «доказанная»?', 'Why “proven”?'),
      paragraphs: [
        L(
          'Distributor materiallariga ko‘ra, NB-UVB samaradorligi yuqori: bemorlarning 82%ida taxminan 5 hafta ichida teri deyarli toza holatga yaqinlashishi kuzatilgan. Bu o‘rtacha ko‘rsatkich — yakuniy natija tashxis, doza, teri tipi va kurs intizomiga bog‘liq.',
          'По материалам дистрибьютора эффективность NB-UVB высока: у 82% пациентов кожа становится практически чистой примерно за 5 недель. Это ориентир — итоговый результат зависит от диагноза, дозы, типа кожи и соблюдения курса.',
          'According to distributor materials, NB-UVB is highly effective: in 82% of patients the skin becomes nearly clear in about 5 weeks. That is a benchmark — final results depend on diagnosis, dose, skin type and adherence.',
        ),
        L(
          'Fototerapiya “darhol sehr” emas — nazoratli seanslar ketma-ketligi. Eng yaxshi natijalar odatda shifokor bilan rejalashtirilgan kursda kuzatiladi.',
          'Фототерапия — не «мгновенное чудо», а последовательность контролируемых сеансов. Лучшие результаты обычно видны на курсе, согласованном с врачом.',
          'Phototherapy is not an instant miracle — it is a sequence of supervised sessions. Best outcomes usually appear on a course planned with a clinician.',
        ),
      ],
    },
    {
      title: L('Qanday kuzatiladi?', 'Как контролируют результат?', 'How is progress tracked?'),
      paragraphs: [
        L(
          'Boshlanish holati fotosuratlari, seanslar oralig‘ida ko‘rik, doza tuzatishi va kerak bo‘lsa qo‘shimcha mahalliy terapiya. Radeski Skin Clinic’da natijalar “oldin/keyin” formatida jamlanadi.',
          'Фото исходного состояния, осмотры между сеансами, корректировка дозы и при необходимости дополнительная наружная терапия. В Radeski Skin Clinic результаты собирают в формате «до/после».',
          'Baseline photos, reviews between sessions, dose adjustments and topical add-ons when needed. At Radeski Skin Clinic outcomes are collected as before/after records.',
        ),
      ],
    },
  ],
  bulletsTitle: L('Qisqa xulosalar', 'Ключевые выводы', 'Key takeaways'),
  bullets: LL(
    [
      'NB-UVB — psoriaz, vitiligo va ekzemada asosiy vositalardan biri',
      '82% / ~5 hafta — distributor e’lon qilgan samaradorlik orientiri',
      'Yon ta’sirlar odatda kam; doza shifokor nazoratida',
      'Uy yoki klinik rejim — ehtiyojga qarab',
      'Haqiqiy klinik fotolarni saytdagi Natijalar sahifasida ko‘ring',
    ],
    [
      'NB-UVB — один из ключевых методов при псориазе, витилиго и экземе',
      '82% / ~5 недель — ориентир эффективности по данным дистрибьютора',
      'Побочные эффекты обычно невелики; доза под контролем врача',
      'Домашний или клинический режим — по потребности',
      'Реальные клинические фото смотрите на странице «Результаты»',
    ],
    [
      'NB-UVB is a core option for psoriasis, vitiligo and eczema',
      '82% / ~5 weeks — efficacy benchmark from distributor materials',
      'Side effects are usually limited; dosing is clinician-guided',
      'Home or clinic mode — based on need',
      'See real clinical photos on the Results page',
    ],
  ),
};

/** Кожные болезни */
export const DAAVLIN_DISEASES = {
  title: L('Teri kasalliklari', 'Кожные болезни', 'Skin diseases'),
  subtitle: L(
    'Fototerapiya dermatologiyada: psoriaz, vitiligo, dermatit',
    'Фототерапия в дерматологии: псориаз, витилиго, дерматит',
    'Phototherapy in dermatology: psoriasis, vitiligo, dermatitis',
  ),
  intro: L(
    'Fototerapiya — psoriaz, vitiligo, atopik dermatit va ekzemani xavfsiz va samarali davolash usuli. Radeski Distributor va Radeski Skin Clinic shu yondashuvni Daavlin texnikasi bilan birlashtiradi.',
    'Фототерапия — безопасный и эффективный метод лечения псориаза, витилиго, атопического дерматита и экземы. Radeski Distributor и Radeski Skin Clinic соединяют этот подход с техникой Daavlin.',
    'Phototherapy is a safe, effective treatment approach for psoriasis, vitiligo, atopic dermatitis and eczema. Radeski Distributor and Radeski Skin Clinic pair that approach with Daavlin technology.',
  ),
  dermTitle: L('Fototerapiya dermatologiyada', 'Фототерапия в дерматологии', 'Phototherapy in dermatology'),
  dermBody: L(
    'Yorug‘lik dozasi teriga to‘g‘ridan-to‘g‘ri beriladi. Bu ko‘p hollarda mahalliy kremlardan keyingi bosqich yoki ularga qo‘shimcha bo‘ladi. Eng ko‘p ishlatiladigan rejim — NB-UVB; og‘ir tanlangan hollarda PUVA muhokama qilinadi.',
    'Доза света подаётся прямо на кожу. Часто это следующий шаг после наружных средств или дополнение к ним. Самый частый режим — NB-UVB; в тяжёлых отобранных случаях обсуждают PUVA.',
    'Light dose is delivered directly to the skin. It is often a step after topicals or used alongside them. The most common regimen is NB-UVB; PUVA is discussed in selected severe cases.',
  ),
  safeTitle: L('Kimlarga ehtiyotkorlik bilan mos?', 'Кому подходит с осторожностью?', 'Who may it suit carefully?'),
  safeBody: L(
    'Homilador ayollar, bolalar, keksa odamlar va immuniteti pasaygan bemorlar uchun fototerapiya ko‘pincha xavfsiz yechim deb baholanadi — lekin yakuniy qaror faqat shifokorniki.',
    'Для беременных женщин, детей, пожилых людей и пациентов с ослабленным иммунитетом фототерапия часто оценивается как безопасное решение — но итоговое решение только за врачом.',
    'For pregnant women, children, elderly people and immunocompromised patients phototherapy is often considered a safer systemic alternative — but the final decision is always clinical.',
  ),
  blocks: [
    {
      title: L('Psoriaz', 'Псориаз', 'Psoriasis'),
      text: L(
        'NB-UVB plitalar va yallig‘lanishni kamaytirishga yordam beradi. Kurs individual: teri tipi, tarqalish maydoni va oldingi davolash hisobga olinadi.',
        'NB-UVB помогает уменьшить бляшки и воспаление. Курс индивидуален: учитывают тип кожи, площадь поражения и предыдущее лечение.',
        'NB-UVB helps reduce plaques and inflammation. Courses are individualized for skin type, area involved and prior therapy.',
      ),
    },
    {
      title: L('Vitiligo', 'Витилиго', 'Vitiligo'),
      text: L(
        'Tor diapazonli UVB pigmentatsiyani qo‘llab-quvvatlashga yordam berishi mumkin. Natija bosqichma-bosqich; sabr va muntazam seanslar muhim.',
        'Узкополосный UVB может поддерживать репигментацию. Результат поэтапный; важны терпение и регулярные сеансы.',
        'Narrowband UVB may support repigmentation. Progress is gradual; patience and regular sessions matter.',
      ),
    },
    {
      title: L('Atopik dermatit', 'Атопический дерматит', 'Atopic dermatitis'),
      text: L(
        'Surunkali quruqlik, qichishish va yallig‘lanishda fototerapiya mahalliy vositalar yetarli bo‘lmasa qo‘llanilishi mumkin.',
        'При хронической сухости, зуде и воспалении фототерапию используют, когда наружных средств недостаточно.',
        'For chronic dryness, itch and inflammation, phototherapy may be used when topicals are not enough.',
      ),
    },
    {
      title: L('Ekzema', 'Экзема', 'Eczema'),
      text: L(
        'Keng maydonlarni tinchlantirish, qichishishni yumshatish va hujumlarni kamaytirishga yordam berishi mumkin — shifokor protokoli bilan.',
        'Может помочь успокоить большие зоны, смягчить зуд и снизить частоту обострений — по протоколу врача.',
        'May help calm larger areas, ease itch and reduce flares — under a clinician’s protocol.',
      ),
    },
    {
      title: L('Akne va boshqa holatlar', 'Акне и другие состояния', 'Acne and other conditions'),
      text: L(
        'Ayrim fotosezgir yoki yallig‘lanishli holatlarda yondashuv tashxisga qarab belgilanadi. O‘z-o‘zini davolash tavsiya etilmaydi.',
        'При отдельных фоточувствительных или воспалительных состояниях подход зависит от диагноза. Самолечение не рекомендуется.',
        'For selected photoresponsive or inflammatory conditions the approach depends on diagnosis. Self-treatment is not recommended.',
      ),
    },
  ],
  whenTitle: L('Qachon shifokorga?', 'Когда к врачу?', 'When to see a doctor'),
  whenBullets: LL(
    [
      'Uzoq davom etgan dog‘, plita yoki qichishish',
      'Mahalliy dorilar yetarli samara bermasa',
      'Keng maydon shikastlanishi',
      'Homiladorlik, bolalik yoki surunkali kasallik fonida reja kerak bo‘lsa',
    ],
    [
      'Длительно сохраняющееся пятно, бляшка или зуд',
      'Если наружные средства дают мало эффекта',
      'Большая площадь поражения',
      'Нужен план на фоне беременности, детского возраста или хронических болезней',
    ],
    [
      'A lasting patch, plaque or itch',
      'When topicals give limited benefit',
      'Large area involvement',
      'When a plan is needed in pregnancy, childhood or with chronic illness',
    ],
  ),
};

/** Контакты */
export const DAAVLIN_CONTACTS = {
  title: L('Aloqa', 'Контакты', 'Contacts'),
  subtitle: L(
    'Radeski Distributor — Daavlin fototerapiya, Farg‘ona',
    'Radeski Distributor — фототерапия Daavlin в Фергане',
    'Radeski Distributor — Daavlin phototherapy in Fergana',
  ),
  intro: L(
    'Savollaringizga javob beramiz, xizmatlar haqida qo‘shimcha ma’lumot beramiz va ehtiyojlaringizni batafsil muhokama qilish uchun uchrashuv tashkil qilamiz.',
    'Рады ответить на все ваши вопросы, предоставить дополнительную информацию о наших услугах и организовать встречу для детального обсуждения ваших потребностей.',
    'We are glad to answer your questions, share more about our services and arrange a meeting to discuss your needs in detail.',
  ),
  helpTitle: L('Nima bo‘yicha yordam beramiz?', 'С чем помогаем?', 'How we can help'),
  helpBullets: LL(
    [
      'Daavlin kabina va apparatlarni tanlash',
      'Klinikaga o‘rnatish va o‘qitish',
      'Uy foydalanishi uchun qurilmalar bo‘yicha maslahat',
      'Radeski Skin Clinic’da davolanishga yo‘naltirish',
    ],
    [
      'Подбор кабин и аппаратов Daavlin',
      'Установка и обучение для клиники',
      'Консультация по домашним устройствам',
      'Направление на лечение в Radeski Skin Clinic',
    ],
    [
      'Selecting Daavlin cabins and devices',
      'Clinic installation and training',
      'Advice on home-use devices',
      'Referral for treatment at Radeski Skin Clinic',
    ],
  ),
  requestTitle: L('Qo‘ng‘iroq buyurtma qilish', 'Заказать звонок', 'Request a call'),
  requestBody: L(
    'Ism va telefon qoldiring — menejerlar tez orada (odatda 10 daqiqa ichida) bog‘lanishga intiladi. Klinik davolanish uchun saytdagi «Qabulga yozilish» dan foydalaning.',
    'Оставьте имя и телефон — менеджеры стремятся связаться в ближайшее время (обычно в течение 10 минут). Для клинического лечения используйте «Записаться» на сайте клиники.',
    'Leave your name and phone — managers aim to call back soon (often within about 10 minutes). For clinical treatment use Book appointment on the clinic site.',
  ),
  legal: L(
    '© 2025–2026 MChJ «RADESKI». Jihoz va distributor masalalari — shu aloqa. Tibbiy yordam — Radeski Skin Clinic.',
    '© 2025–2026 ООО «RADESKI». Вопросы оборудования и дистрибуции — по этим контактам. Медицинская помощь — Radeski Skin Clinic.',
    '© 2025–2026 RADESKI LLC. Equipment and distribution matters — via these contacts. Medical care — Radeski Skin Clinic.',
  ),
};
