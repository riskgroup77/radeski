import type { Locale } from '../types';

type L = Record<Locale, string>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export const DERMO_SCAN = {
  eyebrow: L(
    'AI qo‘llab-quvvatlangan dermatologiya',
    'AI-SUPPORTED DERMATOLOGY',
    'AI-SUPPORTED DERMATOLOGY',
  ),
  title: L('DermaScan', 'DermaScan', 'DermaScan'),
  subtitle: L(
    'Sun’iy intellekt zamonaviy dermatologiyada',
    'Искусственный интеллект в современной дерматологии',
    'Artificial intelligence in modern dermatology',
  ),
  heroIntro: L(
    'Radeski Skin Clinic o‘zining raqamli ekotizimini rivojlantiradi va sun’iy intellekt texnologiyalarini shifokorlar hamda bemorlar kundalik amaliyotiga joriy etmoqda.',
    'Radeski Skin Clinic развивает собственную цифровую экосистему и внедряет технологии искусственного интеллекта в ежедневную практику врачей и пациентов.',
    'Radeski Skin Clinic is building its own digital ecosystem and integrating artificial intelligence into the daily practice of physicians and patients.',
  ),
  heroDescription: L(
    'Radeski ning asosiy texnologik yechimlaridan biri — DermaScan mobil ilovasi: teri holatini kuzatishda shifokor va bemorga yordam beradigan raqamli vosita.',
    'Одним из ключевых технологических решений Radeski является мобильное приложение DermaScan — цифровой инструмент для поддержки врача и пациента при наблюдении за состоянием кожи.',
    'One of Radeski\'s core technological solutions is the DermaScan mobile app — a digital tool that supports physicians and patients in monitoring skin condition.',
  ),
  unificationTitle: L(
    'DermaScan quyidagilarni bir tizimga birlashtirish uchun yaratilgan:',
    'DermaScan создан с целью объединить:',
    'DermaScan is designed to bring together:',
  ),
  unificationItems: [
    L('Sun’iy intellekt', 'Искусственный интеллект', 'Artificial intelligence'),
    L('Shifokorning tibbiy tajribasi', 'Медицинскую экспертизу врача', 'Medical expertise of the physician'),
    L('Raqamli tasvirlar', 'Цифровые изображения', 'Digital images'),
    L('Dinamik kuzatuv', 'Динамическое наблюдение', 'Dynamic monitoring'),
  ],
  principle: L(
    'AI shifokorni almashtirmaydi. AI shifokorga ko‘proq ko‘rish, tezroq tahlil qilish va asosliroq qarorlar qabul qilishga yordam beradi.',
    'AI не заменяет врача. AI помогает врачу видеть больше, анализировать быстрее и принимать более обоснованные решения.',
    'AI does not replace the physician. AI helps the physician see more, analyze faster, and make better-informed decisions.',
  ),

  whatIs: {
    title: L('DermaScan nima?', 'Что такое DermaScan?', 'What is DermaScan?'),
    paragraphs: [
      L(
        'DermaScan — Radeski Skin Clinic bemorlari va tibbiy mutaxassislari uchun ishlab chiqilgan mobil ilova.',
        'DermaScan — мобильное приложение, разработанное для использования пациентами и медицинскими специалистами Radeski Skin Clinic.',
        'DermaScan is a mobile application developed for patients and medical specialists at Radeski Skin Clinic.',
      ),
      L(
        'Ilova teri holati bo‘yicha raqamli tarix yaratish, tasvirlar bilan ishlash, vaqt o‘tishi bilan o‘zgarishlarni kuzatish va sun’iy intellekt algoritmlaridan klinik qo‘llab-quvvatlash vositasi sifatida foydalanish imkonini beradi.',
        'Приложение позволяет создавать цифровую историю состояния кожи, работать с изображениями, отслеживать изменения во времени и использовать алгоритмы искусственного интеллекта в качестве дополнительного инструмента клинической поддержки.',
        'The app enables a digital history of skin condition, image management, tracking changes over time, and AI algorithms as an additional clinical support tool.',
      ),
      L(
        'Bir martalik teri suratidan farqli o‘laroq, DermaScan dinamik kuzatuvga yo‘naltirilgan.',
        'В отличие от разовой фотографии кожи, DermaScan ориентирован на динамическое наблюдение.',
        'Unlike a one-time skin photo, DermaScan is built for dynamic monitoring.',
      ),
    ],
    notOnly: L('Faqat:', 'Не только:', 'Not only:'),
    notOnlyQuestion: L(
      '«Bugun teri qanday ko‘rinadi?»',
      '«Как выглядит кожа сегодня?»',
      '"How does the skin look today?"',
    ),
    butAlso: L('Balki:', 'но и:', 'but also:'),
    butAlsoQuestion: L(
      '«Oldingi tekshiruv bilan solishtirganda qanday o‘zgardi?»',
      '«Как она изменилась по сравнению с предыдущим обследованием?»',
      '"How has it changed compared to the previous examination?"',
    ),
    dynamicsNote: L(
      'Aynan dinamika uzoq muddatli kuzatuvda muhim ahamiyatga ega bo‘lishi mumkin.',
      'Именно динамика может иметь большое значение при длительном наблюдении пациентов.',
      'It is the dynamics that often matter most in long-term patient follow-up.',
    ),
  },

  philosophy: {
    title: L('Bizning falsafamiz', 'НАША ФИЛОСОФИЯ', 'OUR PHILOSOPHY'),
    intro: L(
      'Biz sun’iy intellekt shifokorni almashtirmasligi kerakligiga ishonamiz — u shifokor imkoniyatlarini kuchaytirishi kerak.',
      'Мы верим, что искусственный интеллект не должен заменять врача. Он должен усиливать возможности врача.',
      'We believe artificial intelligence should not replace the physician — it should enhance the physician\'s capabilities.',
    ),
    doctorQualities: L(
      'Shifokor klinik fikrlash, tajriba, hamdardlik va murakkab qarorlar qabul qilish qobiliyatiga ega.',
      'Врач обладает клиническим мышлением, опытом, эмпатией и способностью принимать комплексные решения.',
      'The physician brings clinical reasoning, experience, empathy, and the ability to make complex decisions.',
    ),
    aiQualities: L(
      'AI esa katta hajmdagi tuzilgan ma’lumotlar, tasvirlar va ma’lumotlar dinamikasini tez tahlil qila oladi.',
      'AI способен быстро анализировать большие объемы структурированной информации, изображения и динамику данных.',
      'AI can rapidly analyze large volumes of structured information, images, and data dynamics.',
    ),
    modelTitle: L('AI + SHIFOKOR', 'AI + ВРАЧ', 'AI + PHYSICIAN'),
    modelSubtitle: L(
      'Tibbiy ekspertizaning ikki darajasi',
      'Два уровня медицинской экспертизы',
      'Two levels of medical expertise',
    ),
    principle: L(
      'DermaScan shifokorni almashtirish vazifasini qo‘ymaydi. Aksincha, tizim quyidagi tamoyil atrofida qurilgan:',
      'DermaScan не ставит перед собой задачу заменить врача. Напротив, система построена вокруг принципа:',
      'DermaScan is not designed to replace the physician. The system is built around the principle:',
    ),
    principleTagline: L(
      'AI shifokorni qo‘llab-quvvatlaydi',
      'AI supports the doctor',
      'AI supports the doctor',
    ),
    aiHelpsTitle: L('Sun’iy intellekt yordam berishi mumkin:', 'Искусственный интеллект может помочь:', 'Artificial intelligence can help:'),
    aiHelps: [
      L('Ma’lumotlarni tizimlashtirish', 'Систематизировать информацию', 'Systematize information'),
      L('Tasvirlarni tahlil qilish', 'Анализировать изображения', 'Analyze images'),
      L('Shifokor e’tiborini muayyan belgilarga qaratish', 'Обратить внимание врача на определенные признаки', 'Draw the physician\'s attention to specific signs'),
      L('O‘zgarishlarni kuzatish', 'Отслеживать изменения', 'Track changes'),
      L('Bemor ma’lumotlarini tuzish', 'Структурировать данные пациента', 'Structure patient data'),
      L('Potensial xavf omillarini baholash', 'Оценивать потенциальные факторы риска', 'Assess potential risk factors'),
      L('Tibbiy murojaatlarni saralashni qo‘llab-quvvatlash', 'Поддерживать медицинскую сортировку обращений', 'Support medical triage of requests'),
    ],
    finalNote: L(
      'Yakuniy klinik qaror malakali tibbiy mutaxassis zimmasida qoladi.',
      'Окончательное клиническое решение остается за квалифицированным медицинским специалистом.',
      'The final clinical decision remains with the qualified medical specialist.',
    ),
  },

  features: {
    title: L(
      'DermaScan asosiy imkoniyatlari',
      'ОСНОВНЫЕ ВОЗМОЖНОСТИ DERMASCAN',
      'KEY DERMASCAN CAPABILITIES',
    ),
    items: [
      {
        num: '01',
        title: L('Tasvir tahlili', 'Анализ изображений', 'Image analysis'),
        description: L(
          'DermaScan teri ko‘rinishlarining raqamli tasvirlari bilan ishlash imkonini beradi. AI algoritmlari tasvirni tahlil qilib, qo‘shimcha e’tibor talab qiladigan belgilarni ajratib ko‘rsatishi mumkin.',
          'DermaScan позволяет работать с цифровыми изображениями кожных проявлений. Алгоритмы искусственного интеллекта могут анализировать изображение и выделять признаки, требующие дополнительного внимания.',
          'DermaScan works with digital images of skin findings. AI algorithms can analyze images and highlight signs that warrant additional attention.',
        ),
        note: L(
          'AI natijalari yordamchi ma’lumot hisoblanadi, mustaqil tibbiy tashxis emas.',
          'Результаты AI являются вспомогательной информацией, а не самостоятельным медицинским диагнозом.',
          'AI results are supplementary information, not an independent medical diagnosis.',
        ),
      },
      {
        num: '02',
        title: L(
          'Teri hosilalarining dinamikasini kuzatish',
          'Мониторинг динамики кожных образований',
          'Monitoring dynamics of skin lesions',
        ),
        description: L(
          'Raqamli yondashuvning asosiy afzalliklaridan biri — teri holatini vaqt o‘tishi bilan kuzatish imkoniyati. DermaScan tasvirlar ketma-ketligini shakllantiradi: birinchi tashrif → nazorat → qayta nazorat → dinamika.',
          'Одно из ключевых преимуществ цифрового подхода — возможность наблюдать состояние кожи во времени. DermaScan позволяет формировать последовательность изображений: первичный визит → контроль → повторный контроль → динамика.',
          'A key advantage of the digital approach is observing skin condition over time. DermaScan builds a sequence of images: initial visit → follow-up → re-check → dynamics.',
        ),
        highlight: L(
          'Bitta surat o‘rniga — raqamli tarix.',
          'Вместо одного снимка — цифровая история.',
          'Instead of a single snapshot — a digital history.',
        ),
      },
      {
        num: '03',
        title: L('Xavf omillarini baholash', 'Оценка факторов риска', 'Risk factor assessment'),
        description: L(
          'DermaScan bemor haqidagi tuzilgan ma’lumotlar va raqamli tahlil natijalaridan foydalanib, shifokor e’tiborini talab qilishi mumkin bo‘lgan qo‘shimcha xavf omillarini baholaydi.',
          'DermaScan может использовать структурированную информацию о пациенте и результаты цифрового анализа для формирования дополнительной оценки факторов, которые могут потребовать внимания врача.',
          'DermaScan can use structured patient information and digital analysis results to form an additional assessment of factors that may require the physician\'s attention.',
        ),
        bullets: [
          L('Batafsil tekshiruv talab qilinadigan bemorlarni ajratish', 'Выделять пациентов, которым необходимо более тщательное обследование', 'Identify patients who need more thorough examination'),
          L('Keyingi kuzatuv bo‘yicha tavsiyalar berish', 'Формировать рекомендации по дальнейшему наблюдению', 'Generate recommendations for further monitoring'),
          L('Bemorni o‘z vaqtida mutaxassisga yo‘naltirish', 'Своевременно направлять пациента к специалисту', 'Timely referral to a specialist'),
          L('Shaxsiylashtirilgan tibbiy hamrohlik uchun ma’lumotlardan foydalanish', 'Использовать данные для персонализированного медицинского сопровождения', 'Use data for personalized medical follow-up'),
        ],
        note: L(
          'Algoritm shifokorning klinik bahosini almashtirmaydi.',
          'При этом алгоритм не заменяет клиническую оценку врача.',
          'The algorithm does not replace the physician\'s clinical assessment.',
        ),
      },
      {
        num: '04',
        title: L(
          'Aqlli murojaatlarni saralash',
          'Интеллектуальная сортировка обращений',
          'Intelligent triage of requests',
        ),
        description: L(
          'Murojaatlar soni oshgan sharoitda raqamli vositalar bemorlar oqimini to‘g‘ri taqsimlashga yordam berishi mumkin. DermaScan murojaatlarni keyingi tibbiy baholash zarurati darajasi bo‘yicha dastlabki saralash uchun ishlatilishi mumkin.',
          'В условиях растущего количества обращений цифровые инструменты могут помочь медицинской системе правильно распределять поток пациентов. DermaScan потенциально может использоваться для предварительной сортировки обращений по степени необходимости дальнейшей медицинской оценки.',
          'As patient volumes grow, digital tools can help the healthcare system distribute the flow appropriately. DermaScan can potentially be used for preliminary triage by urgency of further medical evaluation.',
        ),
        priorities: [
          {
            level: L('PAST', 'LOW PRIORITY', 'LOW PRIORITY'),
            label: L('Reja bo‘yicha kuzatuv', 'Плановое наблюдение', 'Scheduled follow-up'),
            color: 'green' as const,
          },
          {
            level: L('O‘RTA', 'MODERATE PRIORITY', 'MODERATE PRIORITY'),
            label: L('Mutaxassis maslahati kerak', 'Необходима консультация специалиста', 'Specialist consultation needed'),
            color: 'amber' as const,
          },
          {
            level: L('YUQORI', 'HIGH PRIORITY', 'HIGH PRIORITY'),
            label: L('Ustuvor tibbiy baholash tavsiya etiladi', 'Рекомендуется приоритетная медицинская оценка', 'Priority medical evaluation recommended'),
            color: 'red' as const,
          },
        ],
        note: L(
          'Raqamli saralash yakuniy tibbiy tashxis yoki favqulodda yordam tizimi emas.',
          'Цифровая сортировка не является окончательной медицинской диагностической или экстренной системой.',
          'Digital triage is not a final diagnostic or emergency care system.',
        ),
      },
      {
        num: '05',
        title: L(
          'Davolash samaradorligini kuzatish',
          'Мониторинг эффективности лечения',
          'Treatment effectiveness monitoring',
        ),
        description: L(
          'DermaScan nafaqat terapiya boshlanishidan oldin, balki tayinlangandan keyin ham ishlatilishi mumkin. Bemor va shifokor teri o‘zgarishlarini dinamikada kuzatadi.',
          'DermaScan может использоваться не только до начала терапии, но и после ее назначения. Пациент и врач могут отслеживать изменения кожи в динамике.',
          'DermaScan can be used not only before therapy begins, but also after it is prescribed. Patient and physician can track skin changes over time.',
        ),
        timeline: [
          L('Davolashdan oldin', 'До лечения', 'Before treatment'),
          L('2 hafta', '2 недели', '2 weeks'),
          L('1 oy', '1 месяц', '1 month'),
          L('3 oy', '3 месяца', '3 months'),
          L('Natija bahosi', 'Оценка результата', 'Outcome assessment'),
        ],
        note: L(
          'Bu kuzatuvni yanada obyektiv va tuzilgan qiladi.',
          'Это позволяет сделать наблюдение более объективным и структурированным.',
          'This makes monitoring more objective and structured.',
        ),
      },
      {
        num: '06',
        title: L('Bemorning raqamli kundaligi', 'Цифровой дневник пациента', 'Patient digital diary'),
        description: L(
          'DermaScan bemorning Digital Skin Diary — raqamli teri kundaligi bo‘lishi mumkin.',
          'DermaScan может стать своеобразным Digital Skin Diary пациента.',
          'DermaScan can serve as the patient\'s Digital Skin Diary.',
        ),
        bullets: [
          L('Tasvirlar', 'Изображения', 'Images'),
          L('Tekshiruv sanalari', 'Даты обследований', 'Examination dates'),
          L('O‘zgarishlar joylashuvi', 'Локализация изменений', 'Location of changes'),
          L('Tayinlangan davolash haqida ma’lumot', 'Сведения о назначенном лечении', 'Information on prescribed treatment'),
          L('Dinamika', 'Динамика', 'Dynamics'),
          L('Kuzatuv natijalari', 'Результаты наблюдения', 'Monitoring results'),
        ],
        note: L(
          'Bu surunkali teri kasalliklarida — uzoq davolash va muntazam nazorat talab qiladigan holatlarda — ayniqsa foydali.',
          'Это особенно полезно при хронических заболеваниях кожи, которые требуют длительного лечения и регулярного контроля.',
          'This is especially valuable for chronic skin conditions requiring long-term treatment and regular follow-up.',
        ),
      },
      {
        num: '07',
        title: L(
          'Shifokor va bemor o‘zaro aloqasi',
          'Взаимодействие врача и пациента',
          'Physician–patient interaction',
        ),
        description: L(
          'DermaScan shifokor va bemor o‘rtasidagi yangi hamkorlik modelini yaratadi — bir martalik maslahat emas, balki uzluksiz raqamli kuzatuv tsikli.',
          'DermaScan создает новую модель взаимодействия — не разовая консультация, а непрерывный цифровой цикл медицинского наблюдения.',
          'DermaScan creates a new collaboration model — not a one-off consultation, but a continuous digital cycle of medical monitoring.',
        ),
        flow: [
          { role: L('Bemor', 'Пациент', 'Patient'), action: L('Suratlar va ma’lumot yuboradi', 'Делает фотографии и предоставляет информацию', 'Takes photos and provides information') },
          { role: L('DermaScan', 'DermaScan', 'DermaScan'), action: L('Ma’lumotlarni tuzadi va tahlil qiladi', 'Структурирует и анализирует данные', 'Structures and analyzes data') },
          { role: L('Shifokor', 'Врач', 'Physician'), action: L('Klinik manzara bilan birga baholaydi', 'Оценивает результаты с учетом клинической картины', 'Evaluates results in clinical context') },
          { role: L('Bemor', 'Пациент', 'Patient'), action: L('Keyingi qadamlar rejasini oladi', 'Получает индивидуальный план дальнейших действий', 'Receives an individualized plan of next steps') },
          { role: L('DermaScan', 'DermaScan', 'DermaScan'), action: L('Dinamikani kuzatishda yordam beradi', 'Помогает отслеживать динамику', 'Helps track dynamics over time') },
        ],
      },
    ],
  },

  ecosystem: {
    title: L(
      'Radeskida AI qo‘llab-quvvatlangan dermatologiya',
      'AI-SUPPORTED DERMATOLOGY В RADESKI',
      'AI-SUPPORTED DERMATOLOGY AT RADESKI',
    ),
    intro: L(
      'Biz sun’iy intellektni alohida texnologiya emas, balki Radeski kelajakdagi raqamli infratuzilmasining bir qismi sifatida ko‘ramiz.',
      'Мы рассматриваем искусственный интеллект не как отдельную технологию, а как часть будущей цифровой инфраструктуры Radeski.',
      'We see artificial intelligence not as a standalone technology, but as part of Radeski\'s future digital infrastructure.',
    ),
    components: [
      L('DermaScan', 'DermaScan', 'DermaScan'),
      L('Elektron tibbiy karta', 'Electronic Medical Record', 'Electronic Medical Record'),
      L('Raqamli dermatoskopiya', 'Digital Dermoscopy', 'Digital Dermoscopy'),
      L('Teledermatologiya', 'Teledermatology', 'Teledermatology'),
      L('Klinik qaror qo‘llab-quvvatlash', 'Clinical Decision Support', 'Clinical Decision Support'),
      L('Bemor monitoringi', 'Patient Monitoring', 'Patient Monitoring'),
      L('Ilmiy-tadqiqot ma’lumotlari', 'Research Data', 'Research Data'),
    ],
    platform: L(
      'RADESKI DIGITAL DERMATOLOGY — yagona raqamli platforma',
      'RADESKI DIGITAL DERMATOLOGY — единая цифровая платформа',
      'RADESKI DIGITAL DERMATOLOGY — a unified digital platform',
    ),
  },

  science: {
    title: L('AI va ilm-fan', 'AI И НАУКА', 'AI AND SCIENCE'),
    intro: L(
      'DermaScan rivojining eng istiqbolli yo‘nalishlaridan biri — anonimlashtirilgan va tegishli tarzda himoyalangan ma’lumotlardan ilmiy tadqiqotlarda foydalanish.',
      'Одним из наиболее перспективных направлений развития DermaScan является использование обезличенных и надлежащим образом защищенных данных для научных исследований.',
      'One of the most promising directions for DermaScan is using de-identified and properly protected data for scientific research.',
    ),
    researchAreas: [
      L('Kasalliklar kechishi xususiyatlari', 'Особенности течения заболеваний', 'Disease course patterns'),
      L('Turli davolash usullari samaradorligi', 'Эффективность различных методов лечения', 'Effectiveness of different treatment methods'),
      L('Xavf omillari', 'Факторы риска', 'Risk factors'),
      L('Teri o‘zgarishlari dinamikasi', 'Динамика кожных изменений', 'Dynamics of skin changes'),
      L('Klinik fenotiplar', 'Клинические фенотипы', 'Clinical phenotypes'),
      L('Klinik belgilar va davolash natijalari o‘rtasidagi bog‘liqlik', 'Взаимосвязи между клиническими признаками и результатами лечения', 'Links between clinical signs and treatment outcomes'),
    ],
    transition: L(
      'Alohida klinik holatlardan → katta hajmdagi tuzilgan ma’lumotlarga → Data-Driven Dermatology ga o‘tish imkoniyati.',
      'От отдельных клинических случаев → к большим массивам структурированных данных → к развитию Data-Driven Dermatology.',
      'From individual clinical cases → to large structured datasets → toward Data-Driven Dermatology.',
    ),
  },

  future: {
    title: L('DermaScan va kelajak', 'DERMASCAN И БУДУЩЕЕ', 'DERMASCAN AND THE FUTURE'),
    intro: L(
      'Biz DermaScan ni doimiy rivojlanayotgan texnologik mahsulot sifatida ko‘ramiz.',
      'Мы рассматриваем DermaScan как постоянно развивающийся технологический продукт.',
      'We see DermaScan as an evolving technology product.',
    ),
    directions: [
      L('AI yordamida tasvir tahlili', 'AI-assisted image analysis', 'AI-assisted image analysis'),
      L('Tasvirlarni avtomatik solishtirish', 'Автоматизированного сравнения изображений', 'Automated image comparison'),
      L('Dinamika baholash', 'Оценки динамики', 'Dynamics assessment'),
      L('Shaxsiylashtirilgan kuzatuv tavsiyalari', 'Персонализированных рекомендаций по наблюдению', 'Personalized monitoring recommendations'),
      L('Teledermatologiya', 'Теледерматологии', 'Teledermatology'),
      L('Elektron tibbiy kartalar bilan integratsiya', 'Интеграции с электронными медицинскими картами', 'Integration with electronic medical records'),
      L('Raqamli dermatoskopiya bilan integratsiya', 'Интеграции с цифровой дерматоскопией', 'Integration with digital dermoscopy'),
      L('Klinik tadqiqotlar', 'Клинических исследований', 'Clinical research'),
      L('Katta tibbiy ma’lumotlar tahlili', 'Аналитики больших медицинских данных', 'Big medical data analytics'),
    ],
  },

  security: {
    title: L('Xavfsizlik va maxfiylik', 'БЕЗОПАСНОСТЬ И КОНФИДЕНЦИАЛЬНОСТЬ', 'SECURITY AND CONFIDENTIALITY'),
    intro: L(
      'Tibbiy ma’lumotlar juda sezgir axborot hisoblanadi. Shuning uchun DermaScan rivojlanishi quyidagi tamoyillar asosida bo‘lishi kerak:',
      'Медицинские данные являются особо чувствительной информацией. Поэтому развитие DermaScan должно основываться на принципах:',
      'Medical data is highly sensitive information. DermaScan development must therefore be grounded in these principles:',
    ),
    principles: [
      {
        title: L('Privacy by Design', 'Privacy by Design', 'Privacy by Design'),
        description: L(
          'Maxfiylik mahsulot arxitekturasiga dastlabdan qo‘yiladi.',
          'Конфиденциальность закладывается в архитектуру продукта с самого начала.',
          'Confidentiality is built into the product architecture from the start.',
        ),
      },
      {
        title: L('Data Security', 'Data Security', 'Data Security'),
        description: L(
          'Tibbiy ma’lumotlar va raqamli tasvirlarni himoya qilish.',
          'Защита медицинской информации и цифровых изображений.',
          'Protection of medical information and digital images.',
        ),
      },
      {
        title: L('Controlled Access', 'Controlled Access', 'Controlled Access'),
        description: L(
          'Ma’lumotlarga faqat vakolatli foydalanuvchilarga, ularning roliga mos ravishda kirish.',
          'Доступ к данным предоставляется только авторизованным пользователям в соответствии с их ролью.',
          'Data access only for authorized users according to their role.',
        ),
      },
      {
        title: L('Patient Consent', 'Patient Consent', 'Patient Consent'),
        description: L(
          'Bemor ma’lumotlaridan qonunchilik talablari va xabardor qilingan rozilik tamoyillari asosida foydalanish.',
          'Использование данных пациента осуществляется с учетом применимых требований законодательства и принципов информированного согласия.',
          'Patient data use in line with applicable law and informed consent.',
        ),
      },
      {
        title: L('Responsible AI', 'Responsible AI', 'Responsible AI'),
        description: L(
          'Algoritmlar tibbiy mutaxassisni qo‘llab-quvvatlash vositasi sifatida ishlatiladi, shartsiz klinik qaror manbai emas.',
          'Алгоритмы используются как инструмент поддержки медицинского специалиста, а не как безусловный источник клинического решения.',
          'Algorithms support the medical specialist, not replace clinical judgment.',
        ),
      },
    ],
  },

  forPatient: {
    title: L('Bemor uchun', 'ДЛЯ ПАЦИЕНТА', 'FOR THE PATIENT'),
    intro: L(
      'DermaScan bemorga o‘z salomatligiga faolroq jalb bo‘lishga yordam beradi.',
      'DermaScan помогает пациенту быть более вовлеченным в собственное здоровье.',
      'DermaScan helps patients take a more active role in their own health.',
    ),
    benefits: [
      L('Teri holati tarixini saqlash', 'Хранить историю состояния кожи', 'Keep a history of skin condition'),
      L('O‘zgarishlarni kuzatish', 'Отслеживать изменения', 'Track changes over time'),
      L('Kasallik dinamikasini yaxshiroq tushunish', 'Лучше понимать динамику заболевания', 'Better understand disease dynamics'),
      L('Tibbiy tizim bilan aloqada qolish', 'Поддерживать связь с медицинской системой', 'Stay connected with the healthcare system'),
      L('Kuzatuv rejasiga rioya qilish', 'Соблюдать план наблюдения', 'Follow the monitoring plan'),
      L('O‘z vaqtida mutaxassisga murojaat qilish', 'Своевременно обращаться к специалисту', 'Seek specialist care in good time'),
    ],
    tagline: L(
      'Teriingizning tarixi bor. DermaScan uni saqlashga yordam beradi.',
      'Ваша кожа имеет историю. DermaScan помогает ее сохранить.',
      'Your skin has a history. DermaScan helps you preserve it.',
    ),
  },

  forDoctor: {
    title: L('Shifokor uchun', 'ДЛЯ ВРАЧА', 'FOR THE PHYSICIAN'),
    intro: L(
      'DermaScan shifokor uchun qo‘shimcha raqamli vosita bo‘lib, «muayyan kundagi ko‘rik» modelidan «vaqt bo‘yicha uzluksiz kuzatuv» modeliga o‘tish imkonini beradi.',
      'DermaScan становится дополнительным цифровым инструментом врача, позволяя переходить от модели «осмотр пациента в конкретный день» к модели «непрерывное наблюдение пациента во времени».',
      'DermaScan is an additional digital tool for the physician, enabling a shift from "examination on a given day" to "continuous monitoring over time."',
    ),
    benefits: [
      L('Faqat joriy holatni emas, balki dinamikani ham ko‘rish', 'Видеть не только текущее состояние, но и динамику', 'See not only current state but also dynamics'),
      L('To‘plangan raqamli ma’lumot va oldingi kuzatuv natijalari', 'Накопленную цифровую информацию и результаты предыдущих наблюдений', 'Accumulated digital information and prior monitoring results'),
      L('Tuzilgan ma’lumotlar asosida tezroq tahlil', 'Более быстрый анализ на основе структурированных данных', 'Faster analysis based on structured data'),
      L('Bemor bilan uzluksiz hamkorlik tsikli', 'Непрерывный цикл взаимодействия с пациентом', 'A continuous collaboration cycle with the patient'),
    ],
  },

  appInstall: {
    eyebrow: L('Mobil ilova', 'Мобильное приложение', 'Mobile app'),
    title: L('DermaScan ilovasini yuklab oling', 'Скачайте приложение DermaScan', 'Get the DermaScan app'),
    subtitle: L(
      'Teri holatingizni kuzatish, suratlarni saqlash va shifokoringiz bilan aloqada qolish — barchasi bitta ilovada.',
      'Наблюдение за кожей, сохранение снимков и связь с врачом — всё в одном приложении.',
      'Monitor your skin, save images, and stay connected with your doctor — all in one app.',
    ),
    developer: L('Radeski Skin Clinic', 'Radeski Skin Clinic', 'Radeski Skin Clinic'),
    category: L('Tibbiyot', 'Медицина', 'Medical'),
    comingSoon: L('Tez orada', 'Скоро', 'Coming soon'),
    comingSoonNote: L(
      'Ilova hozir yakuniy sinov bosqichida. Play Market va App Store’da tez orada ochiladi — hozircha sahifadan imkoniyatlar bilan tanishing.',
      'Приложение на финальной стадии тестирования. Скоро появится в Play Market и App Store — пока ознакомьтесь с возможностями на этой странице.',
      'The app is in final testing. It will appear on Play Market and the App Store soon — explore features on this page for now.',
    ),
    comingSoonToast: L(
      'DermaScan hozircha do‘konlarda mavjud emas — tez orada ochiladi. Yangiliklar uchun biz bilan bog‘laning.',
      'DermaScan пока недоступен в магазинах — скоро появится. Свяжитесь с нами для новостей.',
      'DermaScan is not in stores yet — coming soon. Contact us for updates.',
    ),
    ratingLabel: L('4.9 · Bepul', '4.9 · Бесплатно', '4.9 · Free'),
    installsLabel: L('Radeski bemorlari uchun', 'Для пациентов Radeski', 'For Radeski patients'),
    playStore: L('Google Play', 'Google Play', 'Google Play'),
    appStore: L('App Store', 'App Store', 'App Store'),
    getOn: L('Yuklab olish', 'Скачать в', 'Get it on'),
    downloadOn: L('Yuklab olish', 'Загрузить в', 'Download on the'),
    featuresTitle: L('Ilova imkoniyatlari', 'Возможности приложения', 'App features'),
    features: [
      L('Teri holati suratlarini vaqt bo‘yicha saqlash', 'Хранение снимков состояния кожи во времени', 'Save skin images over time'),
      L('AI yordamida o‘zgarishlarni tahlil qilish', 'Анализ изменений с помощью AI', 'AI-assisted change analysis'),
      L('Shifokor bilan xavfsiz ma’lumot almashinuvi', 'Безопасный обмен данными с врачом', 'Secure data sharing with your doctor'),
      L('Kuzatuv va qayta ko‘rik eslatmalari', 'Напоминания о наблюдении и повторном осмотре', 'Follow-up and re-check reminders'),
    ],
    bannerTitle: L('DermaScan ilovasi', 'Приложение DermaScan', 'DermaScan app'),
    bannerSubtitle: L('Tez orada Play Market va App Store’da', 'Скоро в Play Market и App Store', 'Coming soon to Play Market & App Store'),
    bannerAction: L('Batafsil', 'Подробнее', 'Learn more'),
    heroDownloadCta: L('Mobil ilovani yuklab olish', 'Скачать мобильное приложение', 'Download the mobile app'),
    screenshotsTitle: L('Ilova ko‘rinishi', 'Интерфейс приложения', 'App preview'),
  },
};
