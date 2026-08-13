import type { Locale } from '../types';

type L = Record<Locale, string>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export const SCIENCE = {
  eyebrow: L('Ilm-fan', 'НАУКА', 'SCIENCE'),
  title: L(
    'Radeski Skin Clinic da ilm-fan',
    'Наука в Radeski Skin Clinic',
    'Science at Radeski Skin Clinic',
  ),
  subtitle: L(
    'Klinik amaliyotdan — yangi bilimlargacha',
    'От клинической практики — к новым знаниям',
    'From clinical practice to new knowledge',
  ),
  heroIntro: L(
    'Radeski Skin Clinic ilm-fanni zamonaviy tibbiy amaliyotning ajralmas qismi deb biladi.',
    'Radeski Skin Clinic рассматривает науку как неотъемлемую часть современной медицинской практики.',
    'Radeski Skin Clinic sees science as an inseparable part of modern medical practice.',
  ),
  heroDescription: L(
    'Kuchli klinika — bu faqat bemorlarni davolaydigan joy emas. Bu shifokorlar tadqiq qiladigan, tahlil qiladigan, o‘rganadigan, yangi bilim yaratadigan va uni keyingi avlod mutaxassislariga yetkazadigan muhit.',
    'Мы убеждены, что сильная клиника — это не только место, где лечат пациентов. Это пространство, где врачи исследуют, анализируют, учатся, создают новые знания и передают их следующему поколению специалистов.',
    'A strong clinic is more than a place where patients are treated. It is a space where physicians investigate, analyze, keep learning, create new knowledge, and pass it on to the next generation of specialists.',
  ),
  environment: L(
    'Shuning uchun Radeskida klinik amaliyot, tadqiqot, ta’lim va xalqaro hamkorlikni birlashtiruvchi o‘z ilmiy-ta’lim muhiti rivojlanmoqda.',
    'Поэтому в Radeski развивается собственная научно-образовательная среда, объединяющая клиническую практику, исследования, образование и международное сотрудничество.',
    'That is why Radeski is building its own scientific and educational environment — bringing together clinical practice, research, teaching, and international collaboration.',
  ),
  formulaTitle: L('Bizning formulamiz', 'Наша формула', 'Our formula'),
  formulaSteps: [
    L('Bemor', 'Пациент', 'Patient'),
    L('Klinik tajriba', 'Клинический опыт', 'Clinical experience'),
    L('Tadqiqot', 'Исследование', 'Research'),
    L('Yangi bilim', 'Новые знания', 'New knowledge'),
    L('Davolashni takomillashtirish', 'Совершенствование лечения', 'Better treatment'),
    L('Yangi avlod shifokorlar', 'Новое поколение врачей', 'The next generation of physicians'),
  ],

  forPatients: {
    title: L('Bemorlar uchun', 'ДЛЯ ПАЦИЕНТОВ', 'FOR PATIENTS'),
    question: L(
      'Ilmiy ish nima uchun sizga muhim?',
      'Почему научная работа важна для Вас?',
      'Why does scientific work matter to you?',
    ),
    intro: L(
      'Radeski Skin Clinic ga murojaat qilganingizda siz faqat shifokor maslahatini olmaysiz. Biz klinik tajriba tizimlashtiriladigan, tahlil qilinadigan va tashxis hamda davolashni yanada yaxshilash uchun ishlatiladigan tibbiy muhit yaratishga intilamiz.',
      'Когда Вы обращаетесь в Radeski Skin Clinic, Вы получаете не только консультацию врача. Мы стремимся создавать медицинскую среду, в которой клинический опыт систематизируется, анализируется и используется для дальнейшего совершенствования диагностики и лечения.',
      'When you come to Radeski Skin Clinic, you receive more than a consultation. We work to build a medical environment where clinical experience is organized, analyzed, and used to keep improving diagnosis and treatment.',
    ),
    scienceHelpsTitle: L(
      'Ilmiy faoliyat shifokorlarga imkon beradi:',
      'Научная деятельность позволяет врачам:',
      'Scientific work helps physicians:',
    ),
    scienceHelps: [
      L('Teri kasalliklarini chuqurroq o‘rganish', 'Глубже изучать заболевания кожи', 'Study skin disease in greater depth'),
      L('Turli davolash usullari samaradorligini tahlil qilish', 'Анализировать эффективность различных методов лечения', 'Analyze how well different treatments work'),
      L('Tashxis yondashuvlarini takomillashtirish', 'Совершенствовать диагностические подходы', 'Refine diagnostic approaches'),
      L('Davolashning uzoq muddatli natijalarini o‘rganish', 'Изучать отдаленные результаты лечения', 'Study long-term treatment outcomes'),
      L('Kasallik kechishiga ta’sir qiluvchi omillarni aniqlash', 'Выявлять факторы, влияющие на течение заболеваний', 'Identify factors that influence disease course'),
      L('Zamonaviy xalqaro tibbiy yondashuvlarni joriy etish', 'Внедрять современные международные медицинские подходы', 'Bring in current international medical approaches'),
      L('Yangi klinik algoritmlarni ishlab chiqishda qatnashish', 'Участвовать в разработке новых клинических алгоритмов', 'Take part in developing new clinical algorithms'),
    ],
    qualityNote: L(
      'Shunday qilib, ilm-fan tibbiy yordam sifatini oshirish vositasiga aylanadi.',
      'Таким образом, наука становится инструментом повышения качества медицинской помощи.',
      'In this way, science becomes a tool for raising the quality of care.',
    ),
    learningTitle: L(
      'Bemor bilan birga o‘rganadigan klinika',
      'Клиника, которая учится вместе с пациентом',
      'A clinic that keeps learning with the patient',
    ),
    learningIntro: L(
      'Dermatologiya tinmay rivojlanadi. Yangi tashxis usullari, dori vositalari, lazer texnologiyalari, fototerapiya, raqamli vositalar va sun’iy intellekt imkoniyatlari paydo bo‘ladi. O‘rganishni to‘xtatgan shifokor asta-sekin zamonaviy tibbiyotdan orqada qoladi.',
      'Дерматология постоянно развивается. Появляются новые методы диагностики, лекарственные препараты, лазерные технологии, методы фототерапии, цифровые инструменты и возможности искусственного интеллекта. Поэтому врач, который перестает учиться, постепенно перестает соответствовать современной медицине.',
      'Dermatology keeps moving forward. New diagnostics, medicines, laser methods, phototherapy, digital tools, and AI capabilities appear all the time. A physician who stops learning slowly falls behind modern medicine.',
    ),
    cultureTitle: L(
      'Radeskida doimiy kasbiy o‘sish madaniyatini yaratamiz:',
      'В Radeski мы создаем культуру постоянного профессионального развития:',
      'At Radeski we build a culture of ongoing professional growth:',
    ),
    culture: [
      L('Har bir bemor bizga klinik tajriba beradi.', 'Каждый пациент дает нам клинический опыт.', 'Every patient gives us clinical experience.'),
      L('Har bir klinik holat o‘rganish imkonini ochadi.', 'Каждый клинический случай дает возможность учиться.', 'Every clinical case is a chance to learn.'),
      L('Har bir tadqiqot tibbiy yordamni yaxshilashga yordam beradi.', 'Каждое исследование помогает сделать медицинскую помощь лучше.', 'Every study helps make care better.'),
    ],
  },

  ethics: {
    title: L('Xavfsizlik va etika', 'БЕЗОПАСНОСТЬ И ЭТИКА', 'SAFETY AND ETHICS'),
    intro: L(
      'Ilmiy faoliyat bemor manfaatini buzmasligi kerak. Bemor ishtirokidagi har qanday tadqiqot tibbiy etika, shaxsiy ma’lumotlar maxfiyligi va amaldagi qonunchilik talablariga rioya qilgan holda o‘tkaziladi.',
      'Научная деятельность не должна нарушать интересы пациента. Любые исследования с участием пациентов должны проводиться с соблюдением принципов медицинской этики, конфиденциальности персональных данных и применимых требований законодательства.',
      'Scientific work must never override the patient’s interests. Any research involving patients is carried out in line with medical ethics, data confidentiality, and applicable law.',
    ),
    voluntary: L(
      'Tadqiqotda ishtirok ixtiyoriy. Bu bemorning tibbiy yordam olish huquqiga ta’sir qilmasligi kerak.',
      'Участие пациента в научном исследовании является добровольным и не должно влиять на его право получать медицинскую помощь.',
      'Participation in research is voluntary and must not affect the patient’s right to receive care.',
    ),
    principle: L(
      'Ilm-fan bemor uchun — bemor ilm-fan uchun emas.',
      'Наука — для пациента, а не пациент для науки.',
      'Science serves the patient — the patient is not there to serve science.',
    ),
  },

  forDoctors: {
    title: L(
      'Shifokorlar va yosh mutaxassislar uchun',
      'ДЛЯ ВРАЧЕЙ И МОЛОДЫХ СПЕЦИАЛИСТОВ',
      'FOR PHYSICIANS AND EARLY-CAREER SPECIALISTS',
    ),
    subtitle: L(
      'Radeski — ilmiy o‘sish maydoni',
      'Radeski как пространство для научного роста',
      'Radeski as a space for scientific growth',
    ),
    intro: L(
      'Yosh shifokor klinik holatdan o‘z tadqiqoti, nashri va ilmiy loyihasigacha yo‘l bosishi mumkin bo‘lgan sharoit yaratamiz.',
      'Мы создаем условия, в которых молодой врач может пройти путь: от клинического случая — к собственному исследованию, публикации и научному проекту.',
      'We create conditions where a young physician can grow from a clinical case to their own study, publication, and research project.',
    ),
    rolesTitle: L(
      'Radeski shifokori nafaqat qabul qiladi — u rivojlanishi mumkin:',
      'Врач Radeski может не только принимать пациентов, но и развиваться как:',
      'A Radeski physician can do more than see patients. They can grow as:',
    ),
    roles: [
      L('Klinik shifokor', 'Клиницист', 'A clinician'),
      L('Tadqiqotchi', 'Исследователь', 'A researcher'),
      L('Ilmiy nashrlar muallifi', 'Автор научных публикаций', 'An author of scientific papers'),
      L('O‘qituvchi', 'Преподаватель', 'A teacher'),
      L('Xalqaro loyihalar ishtirokchisi', 'Участник международных проектов', 'A participant in international projects'),
      L('O‘z sohasida ekspert', 'Эксперт в своей области', 'An expert in their field'),
    ],
  },

  activities: {
    title: L(
      'Radeskida nima bilan shug‘ullanish mumkin?',
      'ЧЕМ МОЖНО ЗАНИМАТЬСЯ В RADESKI?',
      'WHAT CAN YOU DO AT RADESKI?',
    ),
    items: [
      {
        num: '01',
        title: L('O‘z tadqiqotlari', 'Собственные исследования', 'Original research'),
        description: L(
          'Yosh shifokorlar o‘z klinik va ilmiy loyihalarini boshlashi va amalga oshirishi mumkin. Maqsad — shifokorning ilmiy savolga qiziqishi to‘laqonli tadqiqot loyihasiga aylanishi mumkin bo‘lgan muhit yaratish.',
          'Молодые врачи могут инициировать и реализовывать собственные клинические и научные проекты. Мы стремимся создать среду, в которой интерес врача к научной проблеме может превратиться в полноценный исследовательский проект.',
          'Early-career physicians can start and carry out their own clinical and scientific projects. We want a setting where a doctor’s interest in a question can grow into a full research project.',
        ),
        bullets: [
          L('Surunkali dermatozlar', 'Хронические дерматозы', 'Chronic dermatoses'),
          L('Yallig‘lanishli teri kasalliklari', 'Воспалительные заболевания кожи', 'Inflammatory skin disease'),
          L('Psoriaz', 'Псориаз', 'Psoriasis'),
          L('Atopik dermatit', 'Атопический дерматит', 'Atopic dermatitis'),
          L('Akne', 'Акне', 'Acne'),
          L('Rozatsea', 'Розацеа', 'Rosacea'),
          L('Soch va tirnoq kasalliklari', 'Заболевания волос и ногтей', 'Hair and nail disorders'),
          L('Dermatoonkologiya', 'Дерматоонкология', 'Dermato-oncology'),
          L('Fototerapiya', 'Фототерапия', 'Phototherapy'),
          L('Lazer dermatologiyasi', 'Лазерная дерматология', 'Laser dermatology'),
          L('Estetik dermatologiya', 'Эстетическая дерматология', 'Aesthetic dermatology'),
          L('Raqamli dermatologiya', 'Цифровая дерматология', 'Digital dermatology'),
          L('Dermatologiyada sun’iy intellekt', 'Применение искусственного интеллекта в дерматологии', 'AI in dermatology'),
        ],
      },
      {
        num: '02',
        title: L('Klinik ma’lumotlar bazalari', 'Клинические базы данных', 'Clinical databases'),
        description: L(
          'Zamonaviy tibbiy ilm-fanning muhim manbalaridan biri — sifatli tuzilgan klinik ma’lumotlar bazalari. Istiqbolda Radeski standartlashtirilgan, anonimlashtirilgan klinik ma’lumotlar bazalarini yaratishni rejalashtiradi. Ular klinik tadqiqotlar, tahlil va yangi tashxis hamda davolash algoritmlari uchun asos bo‘lishi mumkin.',
          'Одним из важнейших ресурсов современной медицинской науки являются качественно сформированные клинические базы данных. В перспективе Radeski планирует создавать стандартизированные обезличенные базы клинических данных. Такие базы могут стать основой для клинических исследований, аналитики и разработки новых диагностических и лечебных алгоритмов.',
          'Well-built clinical databases are one of the most important resources in modern medical science. Over time, Radeski plans to create standardized, de-identified clinical datasets. They can support research, analysis, and new diagnostic and treatment algorithms.',
        ),
        bullets: [
          L('Klinik belgilari', 'Клинических проявлениях', 'Clinical findings'),
          L('Tashxis', 'Диагностике', 'Diagnosis'),
          L('Laboratoriya va instrumental tekshiruv natijalari', 'Результатах лабораторных и инструментальных исследований', 'Lab and imaging results'),
          L('Dermatoskopik ma’lumotlar', 'Дерматоскопических данных', 'Dermoscopic data'),
          L('Davolash usullari', 'Методах лечения', 'Treatment methods'),
          L('Kasallik dinamikasi', 'Динамике заболевания', 'Disease dynamics'),
          L('Terapiya natijalari', 'Результатах терапии', 'Treatment outcomes'),
          L('Uzoq muddatli kuzatuv', 'Долгосрочном наблюдении', 'Long-term follow-up'),
        ],
      },
      {
        num: '03',
        title: L('Ilmiy nashrlar', 'Научные публикации', 'Scientific publications'),
        description: L(
          'Radeski shifokorlarining ish natijalari xalqaro ilmiy makonning bir qismi bo‘lishini xohlaymiz. Alohida e’tibor: ilmiy savol qo‘yishdan — statistik tahlil, maqola yozish va nashr etishgacha bo‘lgan ko‘nikmalarni rivojlantirish.',
          'Мы заинтересованы в том, чтобы результаты работы врачей Radeski становились частью международного научного пространства. Особое внимание будет уделяться развитию навыков: от постановки научного вопроса → до статистического анализа → написания статьи → публикации.',
          'We want the work of Radeski physicians to become part of the international scientific conversation. Special attention will go to the full path: from posing a research question to statistical analysis, writing, and publication.',
        ),
        bullets: [
          L('Ilmiy maqolalar', 'Научных статей', 'Scientific articles'),
          L('Klinik kuzatuvlar', 'Клинических наблюдений', 'Clinical case reports'),
          L('Tizimli sharhlar', 'Систематических обзоров', 'Systematic reviews'),
          L('Konferensiya tezislari', 'Тезисов конференций', 'Conference abstracts'),
          L('Ilmiy ma’ruzalar', 'Научных докладов', 'Scientific talks'),
          L('Metodik materiallar', 'Методических материалов', 'Teaching materials'),
          L('Klinik tavsiyalar va protokollar', 'Клинических рекомендаций и протоколов', 'Clinical guidelines and protocols'),
        ],
      },
      {
        num: '04',
        title: L('Klinik protokollar', 'Клинические протоколы', 'Clinical protocols'),
        description: L(
          'Ilmiy ish amaliy natija berishi kerak. Shu bois ichki klinik algoritm va protokollarni ishlab chiqish va takomillashtirish asosiy yo‘nalishlardan biri bo‘ladi. Maqsad — Radeski tarmog‘ida tibbiy yordamning yagona sifat standartini ta’minlash.',
          'Научная деятельность должна приводить к практическому результату. Поэтому одним из направлений работы станет разработка и совершенствование внутренних клинических алгоритмов и протоколов. Цель — обеспечить единый стандарт качества медицинской помощи во всей сети Radeski.',
          'Research should lead to practical results. One focus will be developing and refining internal clinical algorithms and protocols. The aim is a shared standard of care across the Radeski network.',
        ),
        bullets: [
          L('Zamonaviy xalqaro tavsiyalar', 'Современных международных рекомендациях', 'Current international guidelines'),
          L('Dalillarga asoslangan tibbiyot', 'Доказательной медицине', 'Evidence-based medicine'),
          L('O‘z klinik ma’lumotlari', 'Собственных клинических данных', 'Our own clinical data'),
          L('Mutaxassislar tajribasi', 'Опыте специалистов', 'Specialist experience'),
          L('Ilmiy tadqiqot natijalari', 'Результатах научных исследований', 'Research findings'),
        ],
      },
      {
        num: '05',
        title: L(
          'Ilmiy konferensiyalar va ta’lim tadbirlari',
          'Научные конференции и образовательные мероприятия',
          'Scientific conferences and educational events',
        ),
        description: L(
          'Radeski o‘z ilmiy-ta’lim maydonini yaratishni rejalashtiradi. Yosh mutaxassislarga alohida e’tibor qaratiladi.',
          'Radeski планирует создавать собственную научно-образовательную площадку. Особое внимание будет уделяться молодым специалистам.',
          'Radeski plans to build its own scientific and educational platform, with particular attention to early-career specialists.',
        ),
        bullets: [
          L('Ilmiy-amaliy konferensiyalar', 'Научно-практические конференции', 'Scientific and practical conferences'),
          L('Klinik tahlillar', 'Клинические разборы', 'Clinical case discussions'),
          L('Mahorat darslari', 'Мастер-классы', 'Masterclasses'),
          L('Vebinarlar', 'Вебинары', 'Webinars'),
          L('Simpoziumlar', 'Симпозиумы', 'Symposia'),
          L('Yosh olimlar maktablari', 'Школы молодых ученых', 'Schools for young researchers'),
          L('Ekspert uchrashuvlari', 'Экспертные встречи', 'Expert meetings'),
          L('Xalqaro ta’lim dasturlari', 'Международные образовательные программы', 'International education programs'),
        ],
      },
      {
        num: '06',
        title: L('Xalqaro hamkorlik', 'Международное сотрудничество', 'International collaboration'),
        description: L(
          'Radeski O‘zbekiston shifokorlarini xalqaro dermatologik ilmiy jamiyatga bog‘lashga intiladi. Mumkin bo‘lgan formatlar: qo‘shma tadqiqotlar → nashrlar → stajirovkalar → tajriba almashish → xalqaro loyihalar.',
          'Radeski стремится интегрировать врачей Узбекистана в международное дерматологическое научное сообщество. Возможные форматы: совместные исследования → публикации → стажировки → обмен опытом → международные проекты.',
          'Radeski aims to connect physicians in Uzbekistan with the international dermatology research community. Possible formats: joint studies → publications → fellowships → exchange of experience → international projects.',
        ),
        bullets: [
          L('Universitetlar', 'Университетами', 'Universities'),
          L('Ilmiy-tadqiqot markazlari', 'Научно-исследовательскими центрами', 'Research centres'),
          L('Yetakchi dermatologik klinikalar', 'Ведущими дерматологическими клиниками', 'Leading dermatology clinics'),
          L('Xalqaro ekspertlar', 'Международными экспертами', 'International experts'),
          L('Kasbiy tibbiy tashkilotlar', 'Профессиональными медицинскими организациями', 'Professional medical organizations'),
          L('Tibbiy texnologiya ishlab chiqaruvchilari', 'Производителями медицинских технологий', 'Medical technology companies'),
        ],
      },
      {
        num: '07',
        title: L(
          'Yangi avlod mutaxassislarni tayyorlash',
          'Подготовка нового поколения специалистов',
          'Training the next generation',
        ),
        description: L(
          'Radeskining strategik vazifalaridan biri — yangi avlod dermatolog shifokorlarni shakllantirishda ishtirok etish. Yosh mutaxassis nafaqat klinik ko‘nikma olsin, balki mavjud bilimni qo‘llash bilan birga yangi bilim yaratishni ham biladigan shifokor bo‘lib yetishsin.',
          'Одна из стратегических задач Radeski — участие в формировании нового поколения врачей-дерматологов. Наша цель: подготовить врача, который умеет не только применять существующие знания, но и создавать новые.',
          'One of Radeski’s strategic aims is to help shape the next generation of dermatologists. We want a young specialist to gain clinical skill and also learn how to create new knowledge — not only apply what already exists.',
        ),
        bullets: [
          L('Ilmiy gipotezani to‘g‘ri shakllantirish', 'Как правильно формулировать научную гипотезу', 'How to frame a scientific hypothesis'),
          L('Klinik tadqiqot o‘tkazish', 'Как проводить клиническое исследование', 'How to run a clinical study'),
          L('Tibbiy ma’lumotlar bilan ishlash', 'Как работать с медицинскими данными', 'How to work with medical data'),
          L('Statistik tahlil qilish', 'Как проводить статистический анализ', 'How to do statistical analysis'),
          L('Ilmiy adabiyotni o‘qish', 'Как читать научную литературу', 'How to read the scientific literature'),
          L('Ilmiy maqola yozish', 'Как писать научную статью', 'How to write a scientific paper'),
          L('Tadqiqot natijalarini taqdim etish', 'Как представлять результаты исследования', 'How to present research findings'),
          L('Xalqaro ilmiy muhitda ishlash', 'Как работать в международной научной среде', 'How to work in an international research setting'),
        ],
      },
    ],
  },
};
