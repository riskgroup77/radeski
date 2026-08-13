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
  brandTitle: L(
    'Daavlin — O‘zbekiston Milliy Fototerapiya Markazi',
    'Daavlin — Национальный центр фототерапии Узбекистана',
    'National Phototherapy Center of Uzbekistan by Daavlin',
  ),
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
    'O‘zbekiston, Farg‘ona sh., O‘zbekiston ovozi ko‘chasi, 1B',
    'Узбекистан, г. Фергана, ул. Узбекистон овози 1Б',
    '1B Uzbekiston ovozi St., Fergana, Uzbekistan',
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
    'Сделать качественную и безопасную фототерапию доступной для каждого, кто нуждается в ней, будь то врач, клиника или пациент, лечащийся дома.',
    'Make high-quality, safe phototherapy accessible to everyone who needs it — whether physician, clinic, or patient treating at home.',
  ),
  missionAside: L(
    'Radeski Distributor — shunchaki yangi brend emas; bu innovatsiyaga sodiqlik va bemor hamda shifokor ehtiyojini birinchi o‘ringa qo‘yish.',
    'Radeski Distributor — это больше, чем новый бренд; это приверженность инновациям и обещание уделять приоритетное внимание потребностям пациентов и врачей.',
    'Radeski Distributor is more than a new brand — a commitment to innovation and putting patients’ and clinicians’ needs first.',
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
        'To‘liq tana fototerapiyasi — uyda va tor joylarda',
        'Фототерапия всего тела — дома и в клиниках с ограниченным пространством',
        'Full-body phototherapy — at home and in space-limited clinics',
      ),
      summary: L(
        '7 Series uyda va joyi cheklangan kliniklarda to‘liq tana fototerapiyasini o‘tkazishga imkon beradi. Daavlin xavfsizlik va ilg‘or texnologiyani birlashtiradi: yupqa dizayn 4 dan 12 tagacha lampani joylashtirishga ruxsat beradi. Qo‘shimcha eshik panellari samaradorlikni oshiradi va muolaja vaqtini qisqartiradi.',
        '7 Series делает возможным проведение фототерапии всего тела дома и в клиниках с ограниченным пространством. Выбирая панель 7-й серии, вы можете быть уверены, что Daavlin обеспечит как безопасность, так и передовые технологии! Тонкий дизайн позволяет разместить от 4 до 12 ламп. Дополнительные панели с лампами повышают эффективность и сокращают время лечения.',
        '7 Series makes full-body phototherapy possible at home and in clinics with limited space. Choosing a Series 7 panel means Daavlin safety plus advanced technology: a slim design holds 4 to 12 lamps. Extra lamp doors raise efficiency and shorten treatment time.',
      ),
      details: [
        L(
          'Shifokor UVA yoki tor diapazonli UVB belgilasa ham, 7 Series 4–12 lampalik komplektlar bilan barqaror ishlaydi.',
          'Независимо от того, назначит ли ваш врач UVA или узкополосный UVB, 7 Series разработана так, чтобы работать безупречно с комплектами от 4 до 12 ламп.',
          'Whether your doctor orders UVA or narrowband UVB, 7 Series is built to work reliably with 4–12 lamp kits.',
        ),
        L(
          'Ergonomik dizayn uy uchun qulay: eshiklar bilan yoki usiz qurilma taxminan 0,3 m² pol maydonida joylashadi. ClearLink™ sensorli boshqaruv — sodda va xavfsiz seanslar uchun.',
          'Эргономичный дизайн 7 Series делает его идеальной для домашнего использования. С дверями или без них устройство легко разместится всего на 0,3 м² площади пола. Сенсорный контроллер Daavlin ClearLink™ прост и удобен в использовании.',
          'Ergonomic design suits home use: with or without doors the unit fits on about 0.3 m² of floor. Daavlin ClearLink™ touch control keeps each session simple and safe.',
        ),
      ],
      benefits: LL(
        [
          '4–12 lampa konfiguratsiyasi',
          'Taxminan 0,3 m² pol maydoni',
          'Eshiklarda qo‘shimcha lampalar (gacha 6 ta)',
          'ClearLink™ sensorli boshqaruv',
        ],
        [
          'Конфигурация от 4 до 12 ламп',
          'Около 0,3 м² площади пола',
          'До 6 дополнительных ламп в дверях',
          'Сенсорный контроллер ClearLink™',
        ],
        [
          '4–12 lamp configurations',
          'About 0.3 m² floor footprint',
          'Up to 6 extra door lamps',
          'ClearLink™ touch controller',
        ],
      ),
      bestFor: L(
        'Kimga: uyda to‘liq tana kursi yoki joyi cheklangan klinik kabinet.',
        'Кому: полный курс дома или клинический кабинет с ограниченным пространством.',
        'Best for: full-body home courses or clinic rooms with limited space.',
      ),
      specs: LL(
        ['To‘liq tana paneli', '4–12 lampa', '~0,3 m²', 'ClearLink™'],
        ['Панель на всё тело', '4–12 ламп', '~0,3 м²', 'ClearLink™'],
        ['Full-body panel', '4–12 lamps', '~0.3 m²', 'ClearLink™'],
      ),
    },
    {
      id: 'dermapal',
      name: 'DermaPal',
      image: '/daavlin/model-dermapal.webp',
      badge: L('Bosh terisi / lokal', 'Кожа головы / локально', 'Scalp / spot'),
      tagline: L(
        'Bosh terisi va kichik zonalar — sayohatga ham olib yuriladi',
        'Идеален для кожи головы и локальных зон — удобно брать в поездки',
        'Ideal for scalp and local areas — compact enough to travel with',
      ),
      summary: L(
        'DermaPal bosh terisi va kichik maydonlar uchun yaratilgan: ixcham, samarali va qulay. Chexoli tufayli sayohatda ham muolajani o‘tkazib yubormaysiz. Yuqori intensivlikli lampalar klinikadagi kuchli Daavlin tizimlariga o‘xshash samaraga yaqinlashadi.',
        'Идеален для лечения кожи головы и локальных зон, DermaPal достаточно компактен, чтобы брать его с собой в поездки; вы никогда не пропустите процедуру. Компактный, эффективный и доступный. Оснащённый лампами высокой интенсивности, DermaPal лечит кожу столь же эффективно, как и мощные профессиональные системы Daavlin в кабинете врача.',
        'Ideal for scalp and local areas, DermaPal is compact enough to travel with so you do not miss a session. Compact, effective and practical — high-intensity lamps treat skin as effectively as powerful Daavlin systems used in clinic.',
      ),
      details: [
        L(
          'Mustahkam taroq-nasadka sochni ajratadi, yorug‘likning bosh terisiga yaxshiroq yetishini ta’minlaydi va tekis muolaja uchun yo‘naltiruvchi bo‘ladi.',
          'Прочный насадной гребень раздвигает волосы, обеспечивая лучшее проникновение света к коже головы, и одновременно служит направляющей для равномерного проведения процедур.',
          'A sturdy comb attachment parts the hair for better scalp light delivery and guides even treatment passes.',
        ),
        L(
          'Ichki boshqaruv alohida noqulay taymerni keraksiz qiladi. Engil dastak uzoq foydalanishda ham qo‘lni charchatmaydi.',
          'Встроенный контроллер избавляет от необходимости использовать отдельный и неудобный таймер. Лёгкая рукоятка удобна даже при длительном использовании.',
          'Built-in control removes the need for a separate timer. A light handle stays comfortable even during longer use.',
        ),
      ],
      benefits: LL(
        [
          'Bosh terisi va kichik joylar',
          'Yuqori intensivlikli lampalar',
          'Taroq-nasadka',
          'Ichki boshqaruv + engil dastak',
        ],
        [
          'Кожа головы и небольшие участки',
          'Лампы высокой интенсивности',
          'Насадной гребень',
          'Встроенный контроллер + лёгкая рукоятка',
        ],
        [
          'Scalp and small areas',
          'High-intensity lamps',
          'Comb attachment',
          'Built-in control + light handle',
        ],
      ),
      bestFor: L(
        'Kimga: lokal o‘choqlar, bosh terisi, sayohatda ham kursni davom ettirish kerak bo‘lganda.',
        'Кому: локальные очаги, кожа головы, если курс нужно продолжать в поездках.',
        'Best for: local spots, scalp care, and staying on course while travelling.',
      ),
      specs: LL(
        ['Qo‘lda / portativ', 'Bosh terisi + lokal', 'Ichki taymer', 'Sayohat chexoli'],
        ['Ручной / портативный', 'Кожа головы + локально', 'Встроенный таймер', 'Чехол для переноски'],
        ['Handheld / portable', 'Scalp + local', 'Built-in timer', 'Carry case'],
      ),
    },
    {
      id: 'm-series',
      name: 'M Series',
      image: '/daavlin/model-m-series.webp',
      badge: L('Qo‘l va oyoq', 'Кисти и стопы', 'Hands & feet'),
      tagline: L(
        'Qo‘l va oyoq fotosezgir kasalliklari uchun — klinika va uy',
        'Идеальна для фоточувствительных заболеваний кистей и стоп — клиника и дом',
        'Ideal for photoresponsive hand and foot disease — clinic and home',
      ),
      summary: L(
        'M Series — qo‘l va oyoqni samarali va xavfsiz davolash uchun universal qurilma: klinikada ham, uyda ham. Futlyarni yechib, apparatni vertikal qo‘yib kichik lokal zonani ishlash mumkin.',
        'Идеальна для лечения фоточувствительных заболеваний кистей и стоп. M Series — универсальное и мощное устройство для клиники и дома. Футляр можно снять, а прибор установить вертикально для обработки небольших локализованных участков кожи.',
        'Ideal for photoresponsive diseases of the hands and feet. M Series is a versatile unit for clinic and home. Remove the case and stand the device upright to treat small localized areas.',
      ),
      details: [
        L(
          'NB-UVB, broadband UVB, UVA va kombinatsiyalangan variantlar mavjud. ClearLink™ sensorli boshqaruv har bir seansni xavfsiz o‘tkazishga yordam beradi.',
          'Поддерживает Narrowband UVB, Broadband UVB и UVA. Также доступны комбинированные установки. Сенсорный контроллер Daavlin ClearLink™ прост в использовании.',
          'Supports narrowband UVB, broadband UVB and UVA — combination units available. Daavlin ClearLink™ touch control keeps sessions safe and clear.',
        ),
        L(
          'Kuchaytirilgan qismlar va U-shaklli lampalar tufayli seanslar juda qisqa: bir o‘lchamda ikki lampa quvvatiga yaqin chiqish. Qo‘l va oyoqni birga davolash tizimi alohida sotilishi mumkin.',
          'Время процедур удивительно короткое — благодаря усиленным компонентам и U-образным лампам, которые дают мощность двух ламп при размере одной. Специальная система позволяет одновременно лечить руки и ноги (продаётся отдельно).',
          'Sessions can be surprisingly short thanks to reinforced components and U-shaped lamps that deliver near two-lamp power in one-lamp size. A special system can treat hands and feet together (sold separately).',
        ),
      ],
      benefits: LL(
        [
          'NB-UVB / BB-UVB / UVA',
          'ClearLink™ boshqaruv',
          'Qisqa seans vaqti',
          'Qo‘l+oyoq opsiyasi (alohida)',
        ],
        [
          'NB-UVB / BB-UVB / UVA',
          'Контроллер ClearLink™',
          'Короткое время процедур',
          'Опция руки+ноги (отдельно)',
        ],
        [
          'NB-UVB / BB-UVB / UVA',
          'ClearLink™ control',
          'Short procedure times',
          'Hands+feet option (separate)',
        ],
      ),
      bestFor: L(
        'Kimga: palmar/plantar psoriaz yoki boshqa qo‘l-oyoq fotosezgir jarayonlar.',
        'Кому: ладонно-подошвенные и другие фоточувствительные процессы кистей и стоп.',
        'Best for: palmoplantar and other photoresponsive hand/foot conditions.',
      ),
      specs: LL(
        ['Qo‘l va oyoq', 'Uy + klinika', 'U-lampalar', 'ClearLink™'],
        ['Кисти и стопы', 'Дом + клиника', 'U-образные лампы', 'ClearLink™'],
        ['Hands & feet', 'Home + clinic', 'U-shaped lamps', 'ClearLink™'],
      ),
    },
    {
      id: 'ml24000',
      name: 'ML24000',
      image: '/daavlin/model-ml24000.webp',
      badge: L('Sof UVA1', 'Чистый UVA1', 'Pure UVA1'),
      tagline: L(
        'Kuchli. Unumdor. Sof UVA1 — bozordagi ixcham vertikal tizim',
        'Мощный. Продуктивный. Чистый UVA1 — единственное компактное устройство с вертикальной ориентацией',
        'Powerful. Productive. Pure UVA1 — a compact vertically oriented unit',
      ),
      summary: L(
        'ML24000 — bozorda vertikal yo‘nalishdagi ixcham UVA1 terapiya qurilmasi. 24 ta yuqori intensivlikli vertikal lampa bemor o‘tkazuvchanligini 30–40% ga oshirishi mumkin, an’anaviy UVA1 qurilmalarga nisbatan taxminan ikki baravar kam joy egallab.',
        'Мощный. Продуктивный. Чистый UVA1. Единственное компактное устройство с вертикальной ориентацией для терапии UVA1 на рынке. Двадцать четыре лампы высокой интенсивности, расположенные вертикально, обеспечивают увеличение пропускной способности пациентов на 30–40%, занимая при этом лишь половину пространства по сравнению с традиционными установками UVA1.',
        'Powerful. Productive. Pure UVA1. A compact vertically oriented UVA1 therapy unit. Twenty-four high-intensity vertical lamps can raise patient throughput by 30–40% while taking about half the space of traditional UVA1 setups.',
      ),
      details: [
        L(
          'Yuqori doza protokollari UVB chaqirilgan eritemasiz bajarilishi mumkin — lyuminessent UVA1 qurilmalardagi holatdan farqli ravishda.',
          'Протоколы с высокими дозами могут выполняться без вызванной UVB эритемой, как это бывает с люминесцентными устройствами UVA1.',
          'High-dose protocols can be delivered without UVB-driven erythema of the kind seen with fluorescent UVA1 devices.',
        ),
        L(
          'Qulay tutqichlar odatda qiyin nurlanadigan tana zonalarini ishlashga yordam beradi. Har bir lampa orqasidagi maxsus reflektorlar oqimni tekislaydi. To‘rt ustunli modulli konstruksiya xona joyini tejaydi.',
          'Удобно расположенные ручки позволяют легко обрабатывать участки тела, которые обычно трудно подвергнуть облучению. Специально разработанные отражатели за каждой из двадцати четырёх ламп повышают равномерность излучения. Уникальная модульная конструкция из четырёх колонн экономит пространство.',
          'Conveniently placed handles help treat areas that are usually hard to irradiate. Dedicated reflectors behind each of the 24 lamps improve field uniformity. A unique four-column modular design saves room space.',
        ),
      ],
      benefits: LL(
        [
          'Sof UVA1',
          '24 yuqori intensivlikli lampa',
          '+30–40% o‘tkazuvchanlik potensiali',
          'An’anaviy UVA1 dan ~2× kam joy',
        ],
        [
          'Чистый UVA1',
          '24 лампы высокой интенсивности',
          '+30–40% пропускной способности',
          '~Вдвое меньше места, чем у традиционных UVA1',
        ],
        [
          'Pure UVA1',
          '24 high-intensity lamps',
          '+30–40% throughput potential',
          '~Half the space of traditional UVA1',
        ],
      ),
      bestFor: L(
        'Kimga: UVA1 protokoli kerak bo‘lgan klinik markazlar — joy tejamkorligi muhim bo‘lsa.',
        'Кому: клиническим центрам с протоколами UVA1, где важна экономия площади.',
        'Best for: clinics needing UVA1 protocols where floor space matters.',
      ),
      specs: LL(
        ['24 vertikal lampa', 'Sof UVA1', '4 ustunli modul', 'Yuqori doza protokollari'],
        ['24 вертикальные лампы', 'Чистый UVA1', 'Модуль из 4 колонн', 'Высокодозовые протоколы'],
        ['24 vertical lamps', 'Pure UVA1', '4-column module', 'High-dose protocols'],
      ),
    },
    {
      id: 'neolux',
      name: 'NeoLux',
      image: '/daavlin/model-neolux.webp',
      badge: L('Klinik kabina', 'Клиническая кабина', 'Clinic cabin'),
      tagline: L(
        'Zamonaviy kabinet kutgan barcha funksiyalar — ixcham va kuchli',
        'Все функции, которых ждёт современный кабинет — компактность и мощь',
        'Everything a modern clinic room expects — compact power',
      ),
      summary: L(
        'NeoLux ilg‘or texnologiya bilan zamonaviy dizaynni birlashtiradi: ko‘p mashinali konfiguratsiya, sozlanadigan lampa joylashuvi va kuchaytirilgan xavfsizlik. Ikki eshik konstruksiyasi sinfidagi eng ixcham va ergonomik fototerapiya kabinalaridan biri; ichki makon har qanday bemor o‘lchamiga qulay.',
        'Объединяя передовые технологии с современным изяществом, NeoLux обладает всеми функциями, которых ждёт современный медицинский кабинет. Уникальная двухдверная конструкция Daavlin делает NeoLux самым компактным и эргономичным фототерапевтическим кабинетом в своём классе. При этом внутреннее пространство достаточно комфортно, чтобы разместить пациентов любого размера.',
        'Combining advanced technology with modern design, NeoLux has the features a contemporary clinic room expects. Daavlin’s unique two-door design makes NeoLux among the most compact and ergonomic cabins in its class, while the interior remains comfortable for patients of any size.',
      ),
      details: [
        L(
          'Ochiq yuqori qism va keng ichki makon klaustrofobiyasi bo‘lgan bemorlarga qulayroq; nogironlar aravachasini ham sig‘diradi. Ichki tutqichlar barqarorlikni oshiradi.',
          'Открытый верх и просторный интерьер помогают чувствовать себя комфортно пациентам с клаустрофобией. Внутреннее пространство достаточно велико, чтобы вместить инвалидное кресло. Большие внутренние поручни повышают безопасность и устойчивость.',
          'An open top and roomy interior help patients with claustrophobia feel more at ease; the space can fit a wheelchair. Large interior handrails improve safety and stability.',
        ),
        L(
          'UV o‘tkazuvchi lampalar himoya ekranlari chang yig‘ilishini kamaytiradi, bemorni lampadan himoya qiladi va ish haroratini optimallashtirib xizmat muddatini uzaytiradi. ClearLink™ — xavfsiz va samarali seanslar uchun.',
          'Специальные защитные экраны для ламп, пропускающие UV, препятствуют накоплению пыли, предотвращают контакт пациента с лампами и продлевают срок их службы. Сенсорный контроллер Daavlin ClearLink™ гарантирует безопасное и эффективное проведение каждой процедуры.',
          'UV-transmitting lamp shields reduce dust build-up, keep patients from touching lamps and help lamp life by optimizing operating temperature. Daavlin ClearLink™ supports safe, effective sessions.',
        ),
      ],
      benefits: LL(
        [
          'Ikki eshik / ixcham kabina',
          'Nogironlar aravachasiga mos joy',
          'UV himoya ekranlari',
          'ClearLink™ boshqaruv',
        ],
        [
          'Двухдверная / компактная кабина',
          'Место для инвалидного кресла',
          'UV-защитные экраны ламп',
          'Контроллер ClearLink™',
        ],
        [
          'Two-door / compact cabin',
          'Wheelchair-capable interior',
          'UV lamp shields',
          'ClearLink™ control',
        ],
      ),
      bestFor: L(
        'Kimga: zamonaviy klinik kabinet — bemor qulayligi va joy tejash muhim.',
        'Кому: современный клинический кабинет, где важны комфорт пациента и экономия пространства.',
        'Best for: modern clinic rooms where patient comfort and space efficiency matter.',
      ),
      specs: LL(
        ['To‘liq tana kabina', 'Ikki eshik', 'ClearLink™', 'UV ekranlar'],
        ['Кабина на всё тело', 'Двухдверная', 'ClearLink™', 'UV-экраны'],
        ['Full-body cabin', 'Two-door', 'ClearLink™', 'UV shields'],
      ),
    },
    {
      id: 'aquex',
      name: 'Aquex',
      image: '/daavlin/model-aquex.webp',
      badge: L('Giperhidroza · TWI', 'Гипергидроз · TWI', 'Hyperhidrosis · TWI'),
      tagline: L(
        'Giperhidroz uchun aniq tanlov — dori-darmonsiz TWI',
        'Явный выбор для лечения гипергидроза — безлекарственный TWI',
        'A clear choice for hyperhidrosis — drug-free TWI',
      ),
      summary: L(
        'Aquex giperhidrozni musluk suvi ionoforezi (TWI) bilan dori-darmonsiz, xavfsiz va sinovdan o‘tgan usulda davolaydi. TWI eng samarali, xavfsiz va tejamkor usullardan biri hisoblanadi.',
        'Явный выбор для лечения гипергидроза. Aquex использует безлекарственный, безопасный и проверенный метод лечения гипергидроза с помощью системы ионофореза водой (TWI). TWI считается одним из самых эффективных, безопасных и экономичных методов лечения.',
        'A clear choice for hyperhidrosis. Aquex uses a drug-free, safe, proven tap-water iontophoresis (TWI) method — among the most effective, safe and cost-conscious options.',
      ),
      details: [
        L(
          'Buyurtma asosida tayyorlangan engil va portativ futlyar saqlashni osonlashtiradi va bir vaqtning o‘zida ikkita vannacha vazifasini bajaradi — qo‘shimcha aksessuarsiz.',
          'Футляр Aquex, изготовленный на заказ, легкий и портативный; корпус также служит двумя лотками для процедуры, что устраняет необходимость в дополнительных аксессуарах.',
          'A custom lightweight portable case is easy to store and also doubles as two treatment trays — no extra accessories required for the trays.',
        ),
        L(
          'Raqamli modul: ichki taymer, 3 tagacha dasturlanadigan profil, ortiqcha terapiyadan himoya, ASE© antishok elektronikasi va boshqalar. Qo‘shimcha aksessuarlar orqali qiyin zonalarni (masalan qo‘ltiq) ishlash mumkin.',
          'Цифровой модуль Aquex включает встроенный таймер, до 3 программируемых предустановленных профилей, защиту от избыточной терапии, систему антишоковой электроники (ASE©) и многое другое. Дополнительные аксессуары помогают лечить труднодоступные участки, например подмышечную зону.',
          'The digital module includes a built-in timer, up to 3 programmable profiles, over-treatment protection, ASE© anti-shock electronics and more. Optional accessories help treat harder-to-reach areas such as the axilla.',
        ),
      ],
      benefits: LL(
        [
          'TWI — dori-darmonsiz',
          '2 ta vannacha + futlyar',
          '3 gacha profil / ASE©',
          'Kaft va tovonni tez ishlash',
        ],
        [
          'TWI — без лекарств',
          '2 лотка + футляр',
          'До 3 профилей / ASE©',
          'Быстрая обработка ладоней и стоп',
        ],
        [
          'TWI — drug-free',
          '2 trays + case',
          'Up to 3 profiles / ASE©',
          'Fast palm and sole sessions',
        ],
      ),
      bestFor: L(
        'Kimga: kaft va tovon (va tegishli zonalar) giperhidrozasi.',
        'Кому: гипергидроз ладоней и стоп (и связанные зоны).',
        'Best for: palm and sole hyperhidrosis (and related areas).',
      ),
      specs: LL(
        ['TWI ionoforez', 'Portativ futlyar', 'Raqamli modul', 'Aksessuarlar opsiyasi'],
        ['Ионофорез TWI', 'Портативный футляр', 'Цифровой модуль', 'Опциональные аксессуары'],
        ['TWI iontophoresis', 'Portable case', 'Digital module', 'Optional accessories'],
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
    'Fototerapiya — psoriaz, vitiligo, atopik dermatit va ekzemani xavfsiz va samarali davolash usuli. Radeski Distributor sahifasidagi asosiy guruhlar: vitiligo, psoriaz, atopik dermatit, tekis liken, eritrodermiya, ekzema.',
    'Фототерапия — безопасный и эффективный метод лечения псориаза, витилиго, атопического дерматита и экземы. На сайте дистрибьютора выделены: витилиго, псориаз, атопический дерматит, плоский лихен, эритродермия, экзема.',
    'Phototherapy is a safe, effective approach for psoriasis, vitiligo, atopic dermatitis and eczema. The distributor lists vitiligo, psoriasis, atopic dermatitis, lichen planus, erythroderma and eczema.',
  ),
  dermTitle: L('Fototerapiya dermatologiyada', 'Фототерапия в Дерматологии', 'Phototherapy in dermatology'),
  dermBody: L(
    'Yorug‘lik dozasi teriga tibbiy qurilma orqali beriladi. Eng ko‘p ishlatiladigan rejim — NB-UVB; og‘ir tanlangan hollarda PUVA muhokama qilinadi. Kurs faqat shifokor nazoratida.',
    'Доза света подаётся на кожу медицинским устройством. Самый частый режим — NB-UVB; в тяжёлых отобранных случаях обсуждают PUVA. Курс — только под контролем врача.',
    'Light dose is delivered to the skin by a medical device. The most common regimen is NB-UVB; PUVA is discussed in selected severe cases. Courses run under clinician supervision only.',
  ),
  safeTitle: L('Kimlarga ehtiyotkorlik bilan mos?', 'Кому подходит с осторожностью?', 'Who may it suit carefully?'),
  safeBody: L(
    'Homilador ayollar, bolalar, keksa odamlar va immuniteti pasaygan bemorlar uchun fototerapiya ko‘pincha xavfsiz yechim deb baholanadi — lekin yakuniy qaror faqat shifokorniki.',
    'Для беременных женщин, детей, пожилых людей и пациентов с ослабленным иммунитетом фототерапия часто оценивается как безопасное решение — но итоговое решение только за врачом.',
    'For pregnant women, children, elderly people and immunocompromised patients phototherapy is often considered a safer systemic alternative — but the final decision is always clinical.',
  ),
  blocks: [
    {
      title: L('Vitiligo', 'Витилиго', 'Vitiligo'),
      text: L(
        'Tor diapazonli UVB pigmentatsiyani qo‘llab-quvvatlashga yordam berishi mumkin. Natija bosqichma-bosqich; sabr va muntazam seanslar muhim.',
        'Узкополосный UVB может поддерживать репигментацию. Результат поэтапный; важны терпение и регулярные сеансы.',
        'Narrowband UVB may support repigmentation. Progress is gradual; patience and regular sessions matter.',
      ),
    },
    {
      title: L('Psoriaz', 'Псориаз', 'Psoriasis'),
      text: L(
        'NB-UVB plitalar va yallig‘lanishni kamaytirishga yordam beradi. Kurs individual: teri tipi, tarqalish maydoni va oldingi davolash hisobga olinadi.',
        'NB-UVB помогает уменьшить бляшки и воспаление. Курс индивидуален: учитывают тип кожи, площадь поражения и предыдущее лечение.',
        'NB-UVB helps reduce plaques and inflammation. Courses are individualized for skin type, area involved and prior therapy.',
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
      title: L('Tekis liken', 'Плоский лихен', 'Lichen planus'),
      text: L(
        'Ayrim fotosezgir yallig‘lanishli jarayonlarda fototerapiya shifokor tanlovi bilan qo‘llanilishi mumkin. Kurs tashxis va tarqalishga bog‘liq.',
        'При отдельных фоточувствительных воспалительных процессах фототерапия может применяться по решению врача. Курс зависит от диагноза и распространённости.',
        'In selected photoresponsive inflammatory disease, phototherapy may be used when a clinician decides. The course depends on diagnosis and extent.',
      ),
    },
    {
      title: L('Eritrodermiya', 'Эритродермия', 'Erythroderma'),
      text: L(
        'Keng maydonli qizilish va yallig‘lanishda yondashuv faqat klinik: xavf, doza va kuzatuv alohida baholanadi.',
        'При обширном покраснении и воспалении подход только клинический: риск, доза и наблюдение оцениваются отдельно.',
        'For extensive redness and inflammation the approach is strictly clinical — risk, dose and monitoring are assessed carefully.',
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
