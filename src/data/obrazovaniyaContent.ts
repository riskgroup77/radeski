import type { Locale } from '../types';

type L = Record<Locale, string>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export type EducationProgramId =
  | 'certification-courses'
  | 'residency'
  | 'continuing-education'
  | 'masterclasses'
  | 'hands-on-training'
  | 'young-specialists'
  | 'hair-transplant-training'
  | 'laser-training'
  | 'international-programs';

export type EducationProgram = {
  num: string;
  id: EducationProgramId;
  title: L;
  seo: {
    title: L;
    description: L;
    keywords: L;
    hashtags: L;
  };
  info: L;
  highlights: L[];
  formIntro: L;
  formFields: L[];
  documentSubmission: {
    intro: L;
    items: L[];
  };
  mzDocuments: L[];
  paymentMethods: L[];
  steps: L[];
};

const SHARED = {
  paymentMethods: [
    L('Onlayn: Payme, Click, Uzcard, Humo', 'Онлайн: Payme, Click, Uzcard, Humo', 'Online: Payme, Click, Uzcard, Humo'),
    L('Bank orqali o‘tkazma', 'Банковский перевод', 'Bank transfer'),
    L('Klinika kassasida naqd yoki kartada to‘lov', 'Оплата в кассе клиники', 'Payment at the clinic front desk'),
  ],
  baseMzDocuments: [
    L('Pasport (asli yoki notarial tasdiqlangan nusxa)', 'Паспорт (оригинал или нотариально заверенная копия)', 'Passport (original or notarized copy)'),
    L('Oliy tibbiy ta’lim to‘g‘risidagi diplom', 'Диплом о высшем медицинском образовании', 'Higher medical education diploma'),
    L('3×4 o‘lchamdagi rasm (2 dona)', 'Фотография 3×4 (2 шт.)', '3×4 photo (2 copies)'),
    L('Mavjud sertifikatlar va malaka hujjatlari (agar bo‘lsa)', 'Сертификаты и документы о квалификации (при наличии)', 'Certificates and credentials (if available)'),
  ],
  baseFormFields: [
    L('Familiya, ism, otasining ismi', 'Фамилия, имя, отчество', 'Full name'),
    L('Telefon raqami va elektron pochta', 'Телефон и электронная почта', 'Phone number and email'),
    L('Tibbiy ta’lim va mutaxassislik', 'Медицинское образование и специальность', 'Medical education and specialty'),
    L('Tanlangan ta’lim yo‘nalishi', 'Выбранное направление обучения', 'Selected education program'),
  ],
  baseDocumentSubmission: {
    intro: L(
      'Arizani yuborganingizdan so‘ng hujjatlarni quyidagi usullardan biri bilan taqdim eting:',
      'После отправки заявки предоставьте документы одним из способов:',
      'After submitting your application, provide documents using one of the following methods:',
    ),
    items: [
      L('Onlayn forma orqali skan nusxalarni yuklash', 'Загрузка сканов через онлайн-форму', 'Upload scanned copies via the online form'),
      L('Klinika ma’muriyati bo‘limiga shaxsan topshirish (Farg‘ona yoki Qo‘qon)', 'Личная подача в административный отдел клиники (Фергана или Коканд)', 'In-person submission at the clinic admin office (Fergana or Kokand)'),
      L('Telegram yoki elektron pochta orqali yuborish', 'Отправка через Telegram или электронную почту', 'Send via Telegram or email'),
    ],
  },
};

export const OBRAZOVANIYA = {
  eyebrow: L("Ta'lim", 'ОБРАЗОВАНИЕ', 'EDUCATION'),
  title: L(
    "Radeski Skin Clinic ta'lim markazi",
    'Образовательный центр Radeski Skin Clinic',
    'Radeski Skin Clinic education center',
  ),
  subtitle: L(
    'Teri, soch va tirnoq — zamonaviy estetik korrektsiya',
    'Кожа, волосы и ногти — современная эстетическая коррекция',
    'Skin, hair, and nails — modern aesthetic correction',
  ),
  heroIntro: L(
    'Radeski Skin Clinic — teri, soch va tirnoq kasalliklari hamda zamonaviy estetik korrektsiya bo‘yicha ixtisoslashgan klinikada shifokorlar va yosh mutaxassislar uchun tizimli ta’lim dasturlari.',
    'Radeski Skin Clinic — системные образовательные программы для врачей и молодых специалистов в клинике, специализирующейся на коже, волосах, ногтях и современной эстетической коррекции.',
    'Radeski Skin Clinic offers structured education programs for physicians and early-career specialists in a clinic focused on skin, hair, nails, and modern aesthetic correction.',
  ),
  heroDescription: L(
    'Har bir yo‘nalishda: dastur haqida ma’lumot, onlayn ariza, hujjat topshirish tartibi, O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi talablariga mos hujjatlar ro‘yxati, to‘lov usullari va qadam-baqadam yo‘riqnoma mavjud.',
    'По каждому направлению: информация о программе, онлайн-заявка, порядок подачи документов, перечень документов по требованиям МЗ РУз, способы оплаты и пошаговая инструкция.',
    'Each track includes program information, an online application, document submission instructions, Ministry of Health RUz required documents, payment options, and a step-by-step guide.',
  ),
  environment: L(
    'Farg‘ona va Qo‘qondagi klinik bazamizda DEKA lazerlari, dermatoskopiya, trixoskopiya, IPL, fototerapiya, soch transplantatsiyasi va inyeksion kosmetologiya bo‘yicha amaliy o‘quv muhiti mavjud.',
    'На клинической базе в Фергане и Коканде доступна практическая среда: лазеры DEKA, дерматоскопия, трихоскопия, IPL, фототерапия, пересадка волос и инъекционная косметология.',
    'Our Fergana and Kokand clinical sites offer hands-on learning with DEKA lasers, dermoscopy, trichoscopy, IPL, phototherapy, hair transplantation, and injectable cosmetology.',
  ),

  sectionLabels: {
    info: L('Ma’lumot', 'Информация', 'Information'),
    form: L('Ariza formasi', 'Форма заявки', 'Application form'),
    documents: L('Hujjat topshirish', 'Подача документов', 'Document submission'),
    mzDocuments: L('MZ RUz talab qilinadigan hujjatlar', 'Документы по требованию МЗ РУз', 'Documents required by the Ministry of Health'),
    payment: L('To‘lov usullari', 'Форма оплаты', 'Payment options'),
    steps: L('Qadam-baqadam jarayon', 'Пошаговый процесс', 'Step-by-step process'),
    seo: L('SEO kalit so‘zlar va xeshteglar', 'SEO-ключи и хэштеги', 'SEO keywords and hashtags'),
  },

  formulaTitle: L('Ta’lim modeli', 'Модель обучения', 'Learning model'),
  formulaSteps: [
    L('Ariza', 'Заявка', 'Application'),
    L('Hujjatlar', 'Документы', 'Documents'),
    L('Nazariya', 'Теория', 'Theory'),
    L('Amaliyot', 'Практика', 'Practice'),
    L('Sertifikat', 'Сертификат', 'Certificate'),
  ],

  forWho: {
    title: L('Kimlar uchun', 'ДЛЯ КОГО', 'WHO IT IS FOR'),
    intro: L(
      'Dasturlar dermatologiya, kosmetologiya, trixologiya va podologiya sohasida ishlayotgan shifokorlar, ordinatura va magistratura talabalari, hamshiralar hamda yosh mutaxassislar uchun mo‘ljallangan.',
      'Программы предназначены для врачей, ординаторов, магистрантов, медсёстер и молодых специалистов, работающих в дерматологии, косметологии, трихологии и подологии.',
      'Programs are designed for physicians, residents, master’s students, nurses, and early-career specialists in dermatology, cosmetology, trichology, and podology.',
    ),
    audience: [
      L('Dermatolog va dermatovenerologlar', 'Дерматологи и дерматовенерологи', 'Dermatologists and dermato-venereologists'),
      L('Kosmetolog va estetik tibbiyot mutaxassislari', 'Косметологи и специалисты эстетической медицины', 'Cosmetologists and aesthetic medicine specialists'),
      L('Trixolog va podolog mutaxassislari', 'Трихологи и подологи', 'Trichologists and podologists'),
      L('Ordinatura va magistratura talabalari', 'Ординаторы и магистранты', 'Residents and master’s students'),
      L('Yosh mutaxassislarni tayyorlash dasturi ishtirokchilari', 'Участники программ подготовки молодых специалистов', 'Participants in early-career training programs'),
    ],
  },

  advantages: {
    title: L('Nima uchun Radeski', 'ПОЧЕМУ RADESKI', 'WHY RADESKI'),
    items: [
      L('Teri, soch va tirnoq bo‘yicha ixtisoslashgan klinik bazada amaliyot', 'Практика на базе клиники, специализирующейся на коже, волосах и ногтях', 'Practice at a clinic specialized in skin, hair, and nails'),
      L('DEKA, InMode, Daavlin va boshqa sertifikatlangan uskunalar', 'Оборудование DEKA, InMode, Daavlin и другое сертифицированное', 'DEKA, InMode, Daavlin and other certified equipment'),
      L('Tajribali dermatolog, kosmetolog va trixolog mentorlar', 'Опытные наставники — дерматологи, косметологи, трихологи', 'Experienced dermatologist, cosmetologist, and trichologist mentors'),
      L('O‘zbekiston va xalqaro protokollarga mos dasturlar', 'Программы по узбекским и международным протоколам', 'Programs aligned with Uzbek and international protocols'),
      L('Sertifikat, davomat va malaka hujjatlari', 'Сертификаты, документы о посещении и квалификации', 'Certificates, attendance, and credential documentation'),
      L('Farg‘ona va Qo‘qon filiallarida qulay joylashuv', 'Удобное расположение в филиалах Ферганы и Коканда', 'Convenient locations in Fergana and Kokand branches'),
    ],
  },

  programs: {
    title: L("Ta'lim yo'nalishlari", 'НАПРАВЛЕНИЯ ОБРАЗОВАНИЯ', 'EDUCATION PROGRAMS'),
    items: [
      {
        num: '01',
        id: 'certification-courses',
        title: L('Sertifikatsiya kurslari', 'Сертификационные курсы', 'Certification programs'),
        seo: {
          title: L(
            'Sertifikatsiya kurslari — Radeski Skin Clinic',
            'Сертификационные курсы — Radeski Skin Clinic',
            'Certification programs — Radeski Skin Clinic',
          ),
          description: L(
            'Dermatologiya, trixologiya va estetik tibbiyot bo‘yicha qisqa muddatli sertifikatsiya kurslari. Radeski Skin Clinic da rasmiy sertifikat oling.',
            'Краткосрочные сертификационные курсы по дерматологии, трихологии и эстетической медицине. Получите официальный сертификат в Radeski Skin Clinic.',
            'Short-term certification courses in dermatology, trichology, and aesthetic medicine. Earn an official certificate at Radeski Skin Clinic.',
          ),
          keywords: L(
            "sertifikatsiya kurslari, dermatologiya o'qitish, kosmetologiya kurslari, estetik tibbiyot O'zbekiston, Radeski",
            'сертификационные курсы, обучение дерматологии, курсы косметологии, эстетическая медицина Узбекистан, Radeski',
            'certification courses, dermatology training, cosmetology courses, aesthetic medicine Uzbekistan, Radeski',
          ),
          hashtags: L(
            '#sertifikatsiya #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#сертификация #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#certification #dermatology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Sertifikatsiya kurslari shifokorlar va mutaxassislarga teri, soch va tirnoq bo‘yicha zamonaviy bilimlarni rasmiy tasdiqlash imkonini beradi. Dasturlar nazariy modullar, amaliy mashg‘ulotlar va yakuniy baholashdan iborat.',
          'Сертификационные курсы дают врачам и специалистам официальное подтверждение современных знаний по коже, волосам и ногтям. Программы включают теоретические модули, практические занятия и итоговую аттестацию.',
          'Certification programs give physicians and specialists official validation of modern knowledge in skin, hair, and nails. Programs include theory modules, practical sessions, and final assessment.',
        ),
        highlights: [
          L('Dermatoskopiya va trixoskopiya modullari', 'Модули дерматоскопии и трихоскопии', 'Dermoscopy and trichoscopy modules'),
          L('Lazer va IPL xavfsizligi', 'Лазерная и IPL безопасность', 'Laser and IPL safety'),
          L('Inyeksion kosmetologiya asoslari', 'Основы инъекционной косметологии', 'Injectable cosmetology fundamentals'),
          L('Yakuniy test va sertifikat', 'Итоговый тест и сертификат', 'Final test and certificate'),
        ],
        formIntro: L(
          'Sertifikatsiya kursiga yozilish uchun quyidagi ma’lumotlarni to‘ldiring:',
          'Для записи на сертификационный курс заполните следующие данные:',
          'To enroll in a certification course, complete the following:',
        ),
        formFields: [
          ...SHARED.baseFormFields,
          L('Tanlangan modul (masalan, dermatoskopiya, lazer)', 'Выбранный модуль (например, дерматоскопия, лазер)', 'Selected module (e.g., dermoscopy, laser)'),
        ],
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: SHARED.baseMzDocuments,
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Saytdagi ariza formasini to‘ldiring', 'Заполните форму заявки на сайте', 'Complete the application form on the website'),
          L('Pasport, diplom va rasm nusxalarini yuklang', 'Загрузите копии паспорта, диплома и фото', 'Upload copies of passport, diploma, and photo'),
          L('Kurs va sanani tasdiqlang', 'Подтвердите курс и дату', 'Confirm course and date'),
          L('To‘lovni tanlangan usulda amalga oshiring', 'Оплатите выбранным способом', 'Pay using your chosen method'),
          L('Kursni yakunlang va sertifikat oling', 'Завершите курс и получите сертификат', 'Complete the course and receive your certificate'),
        ],
      },
      {
        num: '02',
        id: 'residency',
        title: L('Ordinatura', 'Ординатура', 'Dermatology residency'),
        seo: {
          title: L(
            'Ordinatura — dermatologiya va kosmetologiya | Radeski',
            'Ординатура — дерматология и косметология | Radeski',
            'Residency — dermatology and cosmetology | Radeski',
          ),
          description: L(
            'Dermatologiya, trixologiya va estetik korrektsiya bo‘yicha chuqur ordinatura dasturi. Radeski Skin Clinic da zamonaviy klinik amaliyot.',
            'Углублённая ординатура по дерматологии, трихологии и эстетической коррекции. Современная клиническая практика в Radeski Skin Clinic.',
            'In-depth residency in dermatology, trichology, and aesthetic correction. Modern clinical practice at Radeski Skin Clinic.',
          ),
          keywords: L(
            "ordinatura dermatologiya, ordinatura kosmetologiya, shifokorlar o'qitish O'zbekiston, Radeski",
            'ординатура дерматология, ординатура косметология, обучение врачей Узбекистан, Radeski',
            'dermatology residency, cosmetology residency, physician training Uzbekistan, Radeski',
          ),
          hashtags: L(
            '#ordinatura #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#ординатура #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#residency #dermatology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Ordinatura dasturi teri, soch va tirnoq patologiyasini chuqur o‘rganish, klinik holatlarni tahlil qilish va zamonaviy estetik korrektsiya usullarini o‘zlashtirishga qaratilgan. Rezidentlar faol klinik bazada mentor nazoratida ishlaydi.',
          'Программа ординатуры направлена на глубокое изучение патологии кожи, волос и ногтей, разбор клинических случаев и освоение современных методов эстетической коррекции. Ординаторы работают на активной клинической базе под наставничеством.',
          'The residency program focuses on in-depth study of skin, hair, and nail pathology, clinical case analysis, and modern aesthetic correction methods. Residents work at an active clinical site under mentor supervision.',
        ),
        highlights: [
          L('Klinik holatlar va morfologik tahlil', 'Клинические случаи и морфологический анализ', 'Clinical cases and morphologic analysis'),
          L('Bemor qabul protokollari', 'Протоколы приёма пациентов', 'Patient consultation protocols'),
          L('Lazer, IPL va apparatli muolajalar', 'Лазер, IPL и аппаратные процедуры', 'Laser, IPL, and device-based treatments'),
          L('Etika, xavfsizlik va hujjatlashtirish', 'Этика, безопасность и документирование', 'Ethics, safety, and documentation'),
        ],
        formIntro: L(
          'Ordinaturaga topshirish uchun onlayn arizani to‘ldiring:',
          'Для поступления в ординатуру заполните онлайн-заявку:',
          'To apply for residency, complete the online application:',
        ),
        formFields: [
          ...SHARED.baseFormFields,
          L('Mutaxassislik va ish staji', 'Специальность и стаж работы', 'Specialty and work experience'),
          L('Tanlangan ordinatura yo‘nalishi', 'Выбранное направление ординатуры', 'Selected residency track'),
        ],
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: [
          ...SHARED.baseMzDocuments,
          L('Ish staji to‘g‘risidagi ma’lumotnoma', 'Справка о стаже работы', 'Work experience certificate'),
        ],
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn arizani to‘ldiring', 'Заполните онлайн-заявку', 'Complete the online application'),
          L('Pasport, diplom, rasm va staj ma’lumotnomasini yuklang', 'Загрузите паспорт, диплом, фото и справку о стаже', 'Upload passport, diploma, photo, and experience certificate'),
          L('Mutaxassislar bilan suhbatdan o‘ting', 'Пройдите собеседование со специалистами', 'Attend an interview with specialists'),
          L('Qabul tasdiqini oling', 'Получите подтверждение зачисления', 'Receive enrollment confirmation'),
          L('To‘lovni amalga oshiring va dasturni boshlang', 'Оплатите обучение и начните программу', 'Pay tuition and start the program'),
        ],
      },
      {
        num: '03',
        id: 'continuing-education',
        title: L('Malaka oshirish', 'Повышение квалификации', 'Continuing medical education'),
        seo: {
          title: L(
            'Malaka oshirish — Radeski Skin Clinic',
            'Повышение квалификации — Radeski Skin Clinic',
            'Continuing medical education — Radeski Skin Clinic',
          ),
          description: L(
            'Amaliyotchi mutaxassislar uchun teri, soch va tirnoq bo‘yicha malaka oshirish kurslari. Zamonaviy metodikalar va sertifikatsiya.',
            'Курсы повышения квалификации для практикующих специалистов по коже, волосам и ногтям. Современные методики и сертификация.',
            'Continuing education for practicing specialists in skin, hair, and nails. Modern methods and certification.',
          ),
          keywords: L(
            'malaka oshirish, dermatologiya o\'qitish, kosmetologiya amaliyot, estetik tibbiyot kurslari, Radeski',
            'повышение квалификации, обучение дерматологии, практика косметологии, эстетическая медицина курсы, Radeski',
            'continuing education, dermatology training, cosmetology practice, aesthetic medicine courses, Radeski',
          ),
          hashtags: L(
            '#malakaoshirish #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#повышение_квалификации #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#CME #dermatology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Malaka oshirish dasturlari amaliyotchi shifokorlar va mutaxassislarga bilimlarini yangilash, yangi protokollarni o‘rganish va klinik ko‘nikmalarni mustahkamlash imkonini beradi. Dasturlar teri, soch, tirnoq va estetik korrektsiya yo‘nalishlarini qamrab oladi.',
          'Программы повышения квалификации позволяют практикующим врачам обновить знания, освоить новые протоколы и укрепить клинические навыки. Охватывают направления кожи, волос, ногтей и эстетической коррекции.',
          'Continuing education programs help practicing physicians update knowledge, learn new protocols, and strengthen clinical skills across skin, hair, nails, and aesthetic correction.',
        ),
        highlights: [
          L('Dalillarga asoslangan protokollar', 'Протоколы, основанные на доказательствах', 'Evidence-based protocols'),
          L('Klinik amaliyot va superviziya', 'Клиническая практика и супервизия', 'Clinical practice and supervision'),
          L('Modul formatida qisqa kurslar', 'Краткие курсы в модульном формате', 'Short modular courses'),
          L('Malaka oshirish sertifikati', 'Сертификат о повышении квалификации', 'CME certificate'),
        ],
        formIntro: L(
          'Malaka oshirish kursiga yozilish uchun formani to‘ldiring:',
          'Для записи на курс повышения квалификации заполните форму:',
          'To enroll in a continuing education course, complete the form:',
        ),
        formFields: [
          ...SHARED.baseFormFields,
          L('Tanlangan malaka oshirish kursi', 'Выбранный курс повышения квалификации', 'Selected CME course'),
          L('Ish joyi va lavozim', 'Место работы и должность', 'Workplace and position'),
        ],
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: [
          ...SHARED.baseMzDocuments,
          L('Ish staji to‘g‘risidagi ma’lumotnoma', 'Справка о стаже работы', 'Work experience certificate'),
        ],
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn formani to‘ldiring', 'Заполните онлайн-форму', 'Complete the online form'),
          L('Kerakli hujjatlarni yuklang', 'Загрузите необходимые документы', 'Upload required documents'),
          L('Kurs taklifini oling', 'Получите приглашение на курс', 'Receive course invitation'),
          L('To‘lovni amalga oshiring', 'Оплатите обучение', 'Pay tuition'),
          L('Kursni yakunlang va sertifikat oling', 'Завершите курс и получите сертификат', 'Complete the course and receive certificate'),
        ],
      },
      {
        num: '04',
        id: 'masterclasses',
        title: L('Master-klasslar', 'Мастер-классы', 'Masterclasses'),
        seo: {
          title: L(
            'Master-klasslar — dermatologiya va kosmetologiya | Radeski',
            'Мастер-классы — дерматология и косметология | Radeski',
            'Masterclasses — dermatology and cosmetology | Radeski',
          ),
          description: L(
            'Radeski Skin Clinic da yetakchi mutaxassislar bilan amaliy master-klasslar. Teri, soch va estetik korrektsiya bo‘yicha zamonaviy ko‘nikmalar.',
            'Практические мастер-классы с ведущими специалистами Radeski Skin Clinic. Современные навыки по коже, волосам и эстетической коррекции.',
            'Practical masterclasses with leading Radeski Skin Clinic specialists. Modern skills in skin, hair, and aesthetic correction.',
          ),
          keywords: L(
            'master-klass dermatologiya, kosmetologiya o\'qitish, estetik tibbiyot trening, Radeski',
            'мастер-классы дерматология, обучение косметологии, тренинг эстетическая медицина, Radeski',
            'masterclass dermatology, cosmetology training, aesthetic medicine workshop, Radeski',
          ),
          hashtags: L(
            '#masterklass #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#мастеркласс #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#masterclass #dermatology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Master-klasslar yetakchi mutaxassislar ishtirokida qisqa, chuqur va amaliy formatda o‘tkaziladi: jonli demonstratsiya, klinik holatlar tahlili, savol-javob va protokol muhokamasi. Akne, pigment, rozatsea, lazer epilyatsiya va estetik muolajalar bo‘yicha mavzular mavjud.',
          'Мастер-классы проводятся в коротком, глубоком и практическом формате с ведущими специалистами: живая демонстрация, разбор случаев, Q&A и обсуждение протоколов. Темы: акне, пигментация, розацеа, лазерная эпиляция и эстетические процедуры.',
          'Masterclasses run in a focused, practical format with leading specialists: live demonstration, case review, Q&A, and protocol discussion. Topics include acne, pigmentation, rosacea, laser hair removal, and aesthetic procedures.',
        ),
        highlights: [
          L('Jonli demonstratsiya va amaliyot', 'Живая демонстрация и практика', 'Live demonstration and practice'),
          L('Kichik guruh formati', 'Формат малых групп', 'Small-group format'),
          L('Protokol va xatolardan saqlanish', 'Протоколы и предотвращение ошибок', 'Protocols and error prevention'),
          L('Ishtirok sertifikati', 'Сертификат об участии', 'Participation certificate'),
        ],
        formIntro: L(
          'Master-klassga ro‘yxatdan o‘tish uchun quyidagi ma’lumotlarni kiriting:',
          'Для регистрации на мастер-класс укажите следующие данные:',
          'To register for a masterclass, provide the following:',
        ),
        formFields: [
          ...SHARED.baseFormFields,
          L('Tanlangan master-klass mavzusi', 'Выбранная тема мастер-класса', 'Selected masterclass topic'),
        ],
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: SHARED.baseMzDocuments,
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn ro‘yxatdan o‘ting', 'Зарегистрируйтесь онлайн', 'Register online'),
          L('Kerakli hujjatlarni yuklang', 'Загрузите необходимые документы', 'Upload required documents'),
          L('Ishtirok tasdiqini oling', 'Получите подтверждение участия', 'Receive participation confirmation'),
          L('Master-klass uchun to‘lov qiling', 'Оплатите мастер-класс', 'Pay for the masterclass'),
          L('Amaliy mashg‘ulotda qatnashing va sertifikat oling', 'Примите участие и получите сертификат', 'Attend the session and receive certificate'),
        ],
      },
      {
        num: '05',
        id: 'hands-on-training',
        title: L('Amaliy treninglar', 'Практические тренинги', 'Hands-on training'),
        seo: {
          title: L(
            'Amaliy treninglar — Radeski Skin Clinic',
            'Практические тренинги — Radeski Skin Clinic',
            'Hands-on training — Radeski Skin Clinic',
          ),
          description: L(
            'Dermatologiya va kosmetologiya bo‘yicha amaliy treninglar. Jonli klinik holatlar, zamonaviy uskunalar va superviziya.',
            'Практические тренинги по дерматологии и косметологии. Живые клинические случаи, современное оборудование и супервизия.',
            'Hands-on training in dermatology and cosmetology. Live clinical cases, modern equipment, and supervision.',
          ),
          keywords: L(
            'amaliy trening dermatologiya, kosmetologiya o\'qitish, estetik tibbiyot amaliyot, Radeski',
            'практические тренинги дерматология, обучение косметологии, практика эстетическая медицина, Radeski',
            'hands-on training dermatology, cosmetology training, aesthetic medicine practice, Radeski',
          ),
          hashtags: L(
            '#trening #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#тренинг #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#training #dermatology #aestheticmedicine #learning #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Amaliy treninglar klinika bazasida real bemor oqimi va zamonaviy uskunalar kontekstida o‘tkaziladi. Dermatoskop, trixoskop, lazer platformalari, UVB kabinalari va inyeksion texnikalar bo‘yicha qo‘l ostida superviziya ta’minlanadi.',
          'Практические тренинги проходят на базе клиники в контексте реального потока пациентов и современного оборудования. Обеспечивается супервизия по дерматоскопу, трихоскопу, лазерным платформам, UVB-кабинам и инъекционным техникам.',
          'Hands-on training takes place at the clinic with real patient flow and modern equipment. Supervision covers dermatoscope, trichoscope, laser platforms, UVB cabins, and injection techniques.',
        ),
        highlights: [
          L('Real klinik holatlar', 'Реальные клинические случаи', 'Real clinical cases'),
          L('Apparat va uskunalar ustida amaliyot', 'Практика на аппаратах', 'Device-based practice'),
          L('Xavfsizlik protokollari', 'Протоколы безопасности', 'Safety protocols'),
          L('Trening sertifikati', 'Сертификат о прохождении тренинга', 'Training certificate'),
        ],
        formIntro: L(
          'Amaliy treningga yozilish uchun formani to‘ldiring:',
          'Для записи на практический тренинг заполните форму:',
          'To enroll in hands-on training, complete the form:',
        ),
        formFields: SHARED.baseFormFields,
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: [
          ...SHARED.baseMzDocuments,
          L('Ish staji ma’lumotnomasi (zarurat bo‘lsa)', 'Справка о стаже (при необходимости)', 'Work experience certificate (if required)'),
        ],
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn ro‘yxatdan o‘ting', 'Зарегистрируйтесь онлайн', 'Register online'),
          L('Hujjatlarni yuklang', 'Загрузите документы', 'Upload documents'),
          L('Ishtirok tasdiqini oling', 'Получите подтверждение участия', 'Receive confirmation'),
          L('To‘lovni amalga oshiring', 'Оплатите обучение', 'Pay tuition'),
          L('Treningni yakunlang va sertifikat oling', 'Завершите тренинг и получите сертификат', 'Complete training and receive certificate'),
        ],
      },
      {
        num: '06',
        id: 'young-specialists',
        title: L('Yosh mutaxassislarni tayyorlash', 'Подготовка молодых специалистов', 'Training early-career specialists'),
        seo: {
          title: L(
            'Yosh mutaxassislarni tayyorlash — Radeski Skin Clinic',
            'Подготовка молодых специалистов — Radeski Skin Clinic',
            'Training early-career specialists — Radeski Skin Clinic',
          ),
          description: L(
            'Yosh shifokorlar uchun teri, soch va tirnoq bo‘yicha tayyorgarlik dasturi. Amaliyot, mentorlik va professional rivojlanish.',
            'Программа подготовки молодых врачей по коже, волосам и ногтям. Практика, наставничество и профессиональное развитие.',
            'Preparation program for early-career physicians in skin, hair, and nails. Practice, mentorship, and professional growth.',
          ),
          keywords: L(
            'yosh shifokorlar o\'qitish, dermatologiya amaliyot, kosmetologiya kurslari, Radeski',
            'обучение молодых врачей, практика дерматология, курсы косметология, Radeski',
            'early-career physician training, dermatology practice, cosmetology courses, Radeski',
          ),
          hashtags: L(
            '#yoshshifokorlar #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#молодые_врачи #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#youngdoctors #dermatology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Yosh mutaxassislarni tayyorlash dasturi yangi bitiruvchilar va stajyorlarga klinik amaliyotga tayyorgarlik ko‘rish, bemor bilan muloqot, diagnostika va zamonaviy muolajalar protokollarini o‘zlashtirish imkonini beradi.',
          'Программа подготовки молодых специалистов даёт выпускникам и стажёрам возможность подготовиться к клинической практике, освоить коммуникацию с пациентом, диагностику и протоколы современных процедур.',
          'The early-career program helps graduates and interns prepare for clinical practice, patient communication, diagnostics, and modern treatment protocols.',
        ),
        highlights: [
          L('Mentor nazoratida klinik amaliyot', 'Клиническая практика под наставничеством', 'Clinical practice under mentorship'),
          L('Diagnostika va hujjatlashtirish', 'Диагностика и документирование', 'Diagnostics and documentation'),
          L('Etika va bemor xavfsizligi', 'Этика и безопасность пациента', 'Ethics and patient safety'),
          L('Dastur yakunida sertifikat', 'Сертификат по завершении программы', 'Certificate upon completion'),
        ],
        formIntro: L(
          'Yosh mutaxassis dasturiga ariza topshirish uchun formani to‘ldiring:',
          'Для подачи заявки на программу для молодых специалистов заполните форму:',
          'To apply for the early-career program, complete the form:',
        ),
        formFields: [
          ...SHARED.baseFormFields,
          L('Ta’lim darajasi yoki stajyorlik ma’lumoti', 'Уровень образования или данные о стажировке', 'Education level or internship details'),
        ],
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: [
          ...SHARED.baseMzDocuments,
          L('Ta’lim yoki stajyorlik to‘g‘risidagi ma’lumotnoma', 'Справка об обучении или стажировке', 'Education or internship certificate'),
        ],
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn anketa to‘ldiring', 'Заполните онлайн-анкету', 'Complete the online form'),
          L('Hujjatlarni yuklang', 'Загрузите документы', 'Upload documents'),
          L('Dastur taklifini oling', 'Получите приглашение на программу', 'Receive program invitation'),
          L('To‘lovni amalga oshiring', 'Оплатите обучение', 'Pay tuition'),
          L('Dasturni yakunlang va sertifikat oling', 'Завершите программу и получите сертификат', 'Complete program and receive certificate'),
        ],
      },
      {
        num: '07',
        id: 'hair-transplant-training',
        title: L("Soch transplantatsiyasi bo'yicha o'qitish", 'Обучение пересадке волос', 'Hair transplant training'),
        seo: {
          title: L(
            "Soch transplantatsiyasi o'qitish — Radeski",
            'Обучение пересадке волос — Radeski',
            'Hair transplant training — Radeski',
          ),
          description: L(
            'Soch transplantatsiyasi bo‘yicha ixtisoslashtirilgan kurslar. Zamonaviy metodikalar, amaliyot va sertifikatsiya Radeski Skin Clinic da.',
            'Специализированные курсы по пересадке волос. Современные методики, практика и сертификация в Radeski Skin Clinic.',
            'Specialized hair transplant training. Modern methods, practice, and certification at Radeski Skin Clinic.',
          ),
          keywords: L(
            'soch transplantatsiyasi o\'qitish, trixologiya kurslari, estetik tibbiyot O\'zbekiston, Radeski',
            'обучение пересадке волос, курсы трихология, эстетическая медицина Узбекистан, Radeski',
            'hair transplant training, trichology courses, aesthetic medicine Uzbekistan, Radeski',
          ),
          hashtags: L(
            '#sochtransplantatsiyasi #trixologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#трансплантацияволос #трихология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#hairtransplant #trichology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Soch transplantatsiyasi bo‘yicha o‘qitish dasturi FUE/FUT usullari, donor zonani baholash, implantatsiya texnikasi, postoperatsion parvarish va asoratlar profilaktikasi bo‘yicha chuqur amaliy tayyorgarlikni o‘z ichiga oladi.',
          'Программа обучения пересадке волос включает углублённую практическую подготовку по методам FUE/FUT, оценке донорской зоны, технике имплантации, послеоперационному уходу и профилактике осложнений.',
          'Hair transplant training covers in-depth practical preparation in FUE/FUT methods, donor zone assessment, implantation technique, postoperative care, and complication prevention.',
        ),
        highlights: [
          L('FUE va FUT metodlari', 'Методы FUE и FUT', 'FUE and FUT methods'),
          L('Donor va qabul qiluvchi zona tahlili', 'Анализ донорской и реципиентной зон', 'Donor and recipient zone analysis'),
          L('Postoperatsion parvarish protokollari', 'Протоколы послеоперационного ухода', 'Postoperative care protocols'),
          L('Amaliy superviziya va sertifikat', 'Практическая супервизия и сертификат', 'Practical supervision and certificate'),
        ],
        formIntro: L(
          'Soch transplantatsiyasi kursiga yozilish uchun formani to‘ldiring:',
          'Для записи на курс пересадки волос заполните форму:',
          'To enroll in hair transplant training, complete the form:',
        ),
        formFields: [
          ...SHARED.baseFormFields,
          L('Trixologiya yoki jarrohlik tajribasi', 'Опыт в трихологии или хирургии', 'Trichology or surgical experience'),
        ],
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: [
          ...SHARED.baseMzDocuments,
          L('Ish staji ma’lumotnomasi (agar talab qilinsa)', 'Справка о стаже (если требуется)', 'Work experience certificate (if required)'),
        ],
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn arizani yuboring', 'Отправьте онлайн-заявку', 'Submit online application'),
          L('Hujjatlarni taqdim eting', 'Предоставьте документы', 'Provide documents'),
          L('Ishtirok tasdiqini oling', 'Получите подтверждение участия', 'Receive confirmation'),
          L('To‘lovni amalga oshiring', 'Оплатите обучение', 'Pay tuition'),
          L('Kursni yakunlang va sertifikat oling', 'Завершите курс и получите сертификат', 'Complete course and receive certificate'),
        ],
      },
      {
        num: '08',
        id: 'laser-training',
        title: L("Lazer texnologiyalari bo'yicha o'qitish", 'Обучение лазерным технологиям', 'Laser technology training'),
        seo: {
          title: L(
            "Lazer texnologiyalari o'qitish — Radeski Skin Clinic",
            'Обучение лазерным технологиям — Radeski Skin Clinic',
            'Laser technology training — Radeski Skin Clinic',
          ),
          description: L(
            'Dermatologiya va kosmetologiyada lazer texnologiyalari bo‘yicha kurslar. DEKA va boshqa platformalar ustida amaliyot.',
            'Курсы по лазерным технологиям в дерматологии и косметологии. Практика на DEKA и других платформах.',
            'Laser technology courses in dermatology and cosmetology. Practice on DEKA and other platforms.',
          ),
          keywords: L(
            'lazer texnologiyalari o\'qitish, dermatologiya lazer, kosmetologiya lazer kurslari, Radeski',
            'обучение лазерным технологиям, дерматология лазер, лазерные курсы косметология, Radeski',
            'laser technology training, dermatology laser, cosmetology laser courses, Radeski',
          ),
          hashtags: L(
            '#lazer #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#лазер #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#laser #dermatology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Lazer texnologiyalari bo‘yicha o‘qitish DEKA CO₂, alexandrite, Derma V tomir lazeri va boshqa platformalar bo‘yicha ko‘rsatmalar, kontraindikatsiyalar, parametrlarni sozlash va post-protsedura parvarishini qamrab oladi.',
          'Обучение лазерным технологиям охватывает показания, противопоказания, настройку параметров и послепроцедурный уход по платформам DEKA CO₂, александрит, сосудистый лазер Derma V и другим.',
          'Laser training covers indications, contraindications, parameter settings, and aftercare for DEKA CO₂, alexandrite, Derma V vascular laser, and other platforms.',
        ),
        highlights: [
          L('CO₂ ablyatsiya va resurfacing', 'CO₂ абляция и resurfacing', 'CO₂ ablation and resurfacing'),
          L('Lazer epilyatsiya va pigment terapiyasi', 'Лазерная эпиляция и пигментная терапия', 'Laser hair removal and pigment therapy'),
          L('Tomir va pigment lazerlari', 'Сосудистые и пигментные лазеры', 'Vascular and pigment lasers'),
          L('Asoratlar profilaktikasi va boshqaruvi', 'Профилактика и управление осложнениями', 'Complication prevention and management'),
        ],
        formIntro: L(
          'Lazer kursiga yozilish uchun formani to‘ldiring:',
          'Для записи на лазерный курс заполните форму:',
          'To enroll in laser training, complete the form:',
        ),
        formFields: SHARED.baseFormFields,
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: SHARED.baseMzDocuments,
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn arizani to‘ldiring', 'Заполните онлайн-заявку', 'Complete online application'),
          L('Hujjatlarni yuklang', 'Загрузите документы', 'Upload documents'),
          L('Ishtirok tasdiqini oling', 'Получите подтверждение', 'Receive confirmation'),
          L('To‘lovni amalga oshiring', 'Оплатите обучение', 'Pay tuition'),
          L('Kursni yakunlang va sertifikat oling', 'Завершите курс и получите сертификат', 'Complete course and receive certificate'),
        ],
      },
      {
        num: '09',
        id: 'international-programs',
        title: L("Xalqaro ta'lim dasturlari", 'Международные образовательные программы', 'International education programs'),
        seo: {
          title: L(
            "Xalqaro ta'lim dasturlari — Radeski Skin Clinic",
            'Международные образовательные программы — Radeski Skin Clinic',
            'International education programs — Radeski Skin Clinic',
          ),
          description: L(
            'Xorijiy klinikalar va universitetlar bilan qo‘shma dasturlar. Dermatologiya, trixologiya va estetik tibbiyot bo‘yicha xalqaro tajriba.',
            'Совместные программы с зарубежными клиниками и университетами. Международный опыт в дерматологии, трихологии и эстетической медицине.',
            'Joint programs with foreign clinics and universities. International experience in dermatology, trichology, and aesthetic medicine.',
          ),
          keywords: L(
            'xalqaro ta\'lim dasturlari, dermatologiya o\'qitish, xorijiy kurslar kosmetologiya, Radeski',
            'международное образование медицина, обучение дерматология, зарубежные курсы косметология, Radeski',
            'international medical education, dermatology training, abroad cosmetology courses, Radeski',
          ),
          hashtags: L(
            '#xalqarotalim #dermatologiya #estetiktibbiyot #oquv #kosmetologiya #Uzbekistan #Radeski',
            '#международноеобразование #дерматология #эстетическаямедицина #обучение #косметология #Uzbekistan #Radeski',
            '#internationaleducation #dermatology #aestheticmedicine #training #cosmetology #Uzbekistan #Radeski',
          ),
        },
        info: L(
          'Xalqaro ta’lim dasturlari xorijiy klinikalar, universitetlar va konferensiyalar bilan hamkorlikda o‘tkaziladi. Almashinuv, qo‘shma master-klasslar, onlayn vebinarlar va xalqaro sertifikatlash imkoniyatlari mavjud.',
          'Международные образовательные программы проводятся в сотрудничестве с зарубежными клиниками, университетами и конференциями. Доступны обмен, совместные мастер-классы, онлайн-вебинары и международная сертификация.',
          'International programs are delivered with foreign clinics, universities, and conferences. Options include exchange, joint masterclasses, online webinars, and international certification.',
        ),
        highlights: [
          L('Xalqaro konferensiyalar va vebinarlar', 'Международные конференции и вебинары', 'International conferences and webinars'),
          L('Hamkor klinikalar bilan almashinuv', 'Обмен с партнёрскими клиниками', 'Exchange with partner clinics'),
          L('Ingliz va rus tillarida materiallar', 'Материалы на русском и английском', 'Materials in Russian and English'),
          L('Xalqaro sertifikat imkoniyati', 'Возможность международного сертификата', 'International certificate opportunity'),
        ],
        formIntro: L(
          'Xalqaro dasturga ariza topshirish uchun formani to‘ldiring (motivatsion xat qisqacha izohda ko‘rsatilishi mumkin):',
          'Для подачи заявки на международную программу заполните форму (мотивационное письмо можно указать в комментарии):',
          'To apply for an international program, complete the form (motivation letter can be included in comments):',
        ),
        formFields: [
          ...SHARED.baseFormFields,
          L('Tanlangan xalqaro dastur', 'Выбранная международная программа', 'Selected international program'),
          L('Motivatsion xat (qisqacha)', 'Мотивационное письмо (кратко)', 'Motivation letter (brief)'),
        ],
        documentSubmission: SHARED.baseDocumentSubmission,
        mzDocuments: [
          ...SHARED.baseMzDocuments,
          L('Ish staji ma’lumotnomasi', 'Справка о стаже работы', 'Work experience certificate'),
        ],
        paymentMethods: SHARED.paymentMethods,
        steps: [
          L('Onlayn arizani va motivatsion xatni yuboring', 'Отправьте онлайн-заявку и мотивационное письмо', 'Submit application and motivation letter'),
          L('Hujjatlarni taqdim eting', 'Предоставьте документы', 'Provide documents'),
          L('Xalqaro dastur taklifini oling', 'Получите приглашение на программу', 'Receive program invitation'),
          L('To‘lovni amalga oshiring', 'Оплатите обучение', 'Pay tuition'),
          L('Dasturni yakunlang va xalqaro sertifikat oling', 'Завершите программу и получите международный сертификат', 'Complete program and receive international certificate'),
        ],
      },
    ] as EducationProgram[],
  },

  cta: {
    title: L(
      "Ta'lim dasturiga yoziling",
      'Запишитесь на образовательную программу',
      'Enroll in an education program',
    ),
    desc: L(
      'Qaysi yo‘nalish sizga mos ekanini bilish uchun biz bilan bog‘laning. Menejerlar dastur formati, hujjatlar va to‘lov usullarini tushuntiradi.',
      'Свяжитесь с нами, чтобы узнать, какая программа вам подходит. Менеджеры расскажут о формате, документах и способах оплаты.',
      'Contact us to find the program that fits you. Our team will explain format, documents, and payment options.',
    ),
    phone: '+998 73 200-73-73',
  },
};
