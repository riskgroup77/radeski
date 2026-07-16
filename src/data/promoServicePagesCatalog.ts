export interface PromoLocalizedText {
  uz: string;
  ru: string;
  en: string;
}

export interface PromoSubsection {
  title: PromoLocalizedText;
  paragraphs?: PromoLocalizedText[];
  bullets?: PromoLocalizedText[];
}

export interface PromoStep {
  title: PromoLocalizedText;
  description: PromoLocalizedText;
  details?: PromoLocalizedText[];
}

export interface PromoFaqItem {
  question: PromoLocalizedText;
  answer: PromoLocalizedText;
}

export interface PromoPriceTier {
  label: PromoLocalizedText;
  value: PromoLocalizedText;
  note?: PromoLocalizedText;
}

export interface PromoSection {
  id: string;
  title: PromoLocalizedText;
  intro?: PromoLocalizedText;
  paragraphs?: PromoLocalizedText[];
  bullets?: PromoLocalizedText[];
  subsections?: PromoSubsection[];
  steps?: PromoStep[];
  tiers?: PromoPriceTier[];
  faq?: PromoFaqItem[];
}

export interface PromoPageContent {
  sections: PromoSection[];
}

function L(uz: string, ru: string, en: string): PromoLocalizedText {
  return { uz, ru, en };
}

function clinicAdvantagesSection(
  equipmentTitle: PromoLocalizedText,
  equipmentParagraphs: PromoLocalizedText[],
  equipmentBullets: PromoLocalizedText[],
): PromoSection {
  return {
    id: 'clinic-advantages',
    title: L(
      'Nima uchun Radeski?',
      'Почему Radeski?',
      'Why Radeski?',
    ),
    subsections: [
      {
        title: equipmentTitle,
        paragraphs: equipmentParagraphs.slice(0, 1),
        bullets: equipmentBullets,
      },
    ],
  };
}

function recoverySection(
  aftercareBullets: PromoLocalizedText[],
  contraindicationBullets: PromoLocalizedText[],
): PromoSection {
  return {
    id: 'recovery',
    title: L(
      'Tiklanish va parvarish',
      'Восстановление и уход',
      'Recovery and aftercare',
    ),
    subsections: [
      {
        title: L('Parvarish tavsiyalari', 'Рекомендации по уходу', 'Aftercare recommendations'),
        bullets: aftercareBullets,
      },
      {
        title: L('Qarshi ko\'rsatmalar', 'Противопоказания', 'Contraindications'),
        bullets: contraindicationBullets,
      },
    ],
  };
}

const PROMO_DERMATASKOPIYA: PromoPageContent = {
  sections: [
    {
      id: 'overview',
      title: L('Xizmat haqida', 'Об услуге', 'About the service'),
      paragraphs: [
        L(
          'Dermataskopiya — teridagi hol, dog\' va o\'smalarni kattalashtirilgan optik uskunada (dermatoskop) ko\'rib chiqish usuli. Radeski klinikasida professional dermatoskop yordamida teri o\'zgarishlarining tuzilishi, rangi va chegaralari batafsil baholanadi.',
          'Дерматоскопия — метод осмотра родинок, пятен и новообразований с помощью оптического увеличения (дерматоскопа). В клинике Radeski с профессиональным дерматоскопом детально оцениваются структура, цвет и границы изменений кожи.',
          'Dermoscopy is an examination of moles, spots and skin lesions using optical magnification (dermatoscope). At Radeski Clinic, a professional dermatoscope evaluates structure, color and borders in detail.',
        ),
        L(
          'Bu tekshiruv og\'riqsiz, invaziv emas va melanoma hamda boshqa xavfli o\'zgarishlarni erta bosqichda aniqlashga yordam beradi. Dermatolog ko\'rigi bilan birgalikda aniq tashxis va keyingi harakatlar rejasi tuziladi.',
          'Обследование безболезненное, неинвазивное и помогает выявить меланому и другие опасные изменения на ранней стадии. Вместе с осмотром дерматолога формируется точный диагноз и план дальнейших действий.',
          'The exam is painless, non-invasive and helps detect melanoma and other dangerous changes early. Combined with a dermatologist visit, it leads to accurate diagnosis and next steps.',
        ),
      ],
    },
    {
      id: 'indications',
      title: L('Ko\'rsatmalar', 'Показания', 'Indications'),
      subsections: [
        {
          title: L('Kim uchun kerak?', 'Кому необходимо?', 'Who needs it?'),
          paragraphs: [
            L(
              'Terida yangi paydo bo\'lgan yoki o\'zgargan hol, dog\' va o\'smalarga ega bo\'lgan har bir kishi uchun tavsiya etiladi.',
              'Рекомендуется всем, у кого появились или изменились родинки, пятна и новообразования на коже.',
              'Recommended for anyone with new or changing moles, spots or skin lesions.',
            ),
          ],
          bullets: [
            L('Ko\'p sonli hol va dog\'lar', 'Множественные родинки и пятна', 'Multiple moles and spots'),
            L('Oila anamnezida teri saratoni', 'Семейный анамнез рака кожи', 'Family history of skin cancer'),
            L('Quyosh kuyish tarixi yuqori bo\'lganlar', 'Выраженная инсоляция в анамнезе', 'Significant sun exposure history'),
            L('Yillik profilaktik tekshiruv', 'Ежегодный профилактический осмотр', 'Annual preventive screening'),
          ],
        },
        {
          title: L('Belgilar va shubhali o\'zgarishlar', 'Симптомы и подозрительные изменения', 'Symptoms and suspicious changes'),
          paragraphs: [
            L(
              'ABCDE qoidasi bo\'yicha quyidagi belgilar shubhali deb baholanadi va darhol tekshiruv talab qiladi.',
              'По правилу ABCDE следующие признаки считаются подозрительными и требуют немедленного осмотра.',
              'By the ABCDE rule, the following signs are suspicious and require prompt examination.',
            ),
          ],
          bullets: [
            L('Asimmetriya — holning ikki yarmi farq qiladi', 'Асимметрия — половины родинки различаются', 'Asymmetry — halves of the mole differ'),
            L('Chegara noaniq yoki tishsimon', 'Нечёткие или зубчатые границы', 'Irregular or jagged borders'),
            L('Rang bir xil emas (qora, jigarrang, qizil)', 'Неравномерный цвет (чёрный, коричневый, красный)', 'Uneven color (black, brown, red)'),
            L('Diametr 6 mm dan katta', 'Диаметр более 6 мм', 'Diameter greater than 6 mm'),
            L('Vaqt o\'tishi bilan o\'zgarish (Evolution)', 'Изменение со временем (Evolution)', 'Change over time (Evolution)'),
          ],
        },
      ],
    },
    {
      id: 'protocol',
      title: L('Muolaja bosqichlari', 'Этапы процедуры', 'Procedure steps'),
      intro: L(
        'Dermataskopiya va shifokor ko\'rigi standart protokol bo\'yicha o\'tkaziladi.',
        'Дерматоскопия и осмотр врача проводятся по стандартному протоколу.',
        'Dermoscopy and physician examination follow a standard protocol.',
      ),
      steps: [
        {
          title: L('1. Ro\'yxatdan o\'tish va anamnez', '1. Регистрация и анамнез', '1. Registration and history'),
          description: L(
            'Bemor qabul qilinadi, shikoyatlar va teri kasalliklari tarixi yozib olinadi.',
            'Пациент регистрируется, фиксируются жалобы и история кожных заболеваний.',
            'Patient is registered; complaints and skin disease history are recorded.',
          ),
          details: [
            L('Dori-darmonlar va allergiyalar aniqlanadi', 'Уточняются лекарства и аллергии', 'Medications and allergies are noted'),
            L('Oila anamnezi so\'raladi', 'Собирается семейный анамнез', 'Family history is collected'),
          ],
        },
        {
          title: L('2. Vizual ko\'rik', '2. Визуальный осмотр', '2. Visual examination'),
          description: L(
            'Dermatolog terini ko\'z bilan ko\'rib chiqadi, shubhali zonalarni belgilaydi.',
            'Дерматолог осматривает кожу невооружённым глазом, отмечает подозрительные зоны.',
            'Dermatologist visually inspects the skin and marks suspicious areas.',
          ),
          details: [
            L('Butun tana yoki muayyan zona ko\'rib chiqiladi', 'Осматривается всё тело или конкретная зона', 'Full body or specific area is examined'),
            L('Fotosurat olish tavsiya etilishi mumkin', 'Может быть рекомендована фотофиксация', 'Photography may be recommended'),
          ],
        },
        {
          title: L('3. Dermatoskop tekshiruvi', '3. Дерматоскопическое исследование', '3. Dermatoscope examination'),
          description: L(
            'Professional dermatoskop yordamida hol va o\'smalarning ichki tuzilishi kattalashtirilgan holda baholanadi.',
            'С профессиональным дерматоскопом оценивается внутренняя структура родинок и образований под увеличением.',
            'A professional dermatoscope evaluates internal structure of moles and lesions under magnification.',
          ),
          details: [
            L('Pigment tarmoqlari va naqshlar tahlil qilinadi', 'Анализируются пигментные сети и узоры', 'Pigment networks and patterns are analyzed'),
            L('Xavf darajasi baholanadi', 'Оценивается уровень риска', 'Risk level is assessed'),
            L('Natija bemor bilan tushuntiriladi', 'Результат объясняется пациенту', 'Results are explained to the patient'),
          ],
        },
        {
          title: L('4. Tashxis va reja', '4. Диагноз и план', '4. Diagnosis and plan'),
          description: L(
            'Shifokor xulosani beradi: kuzatish, biopsiya yoki davolash rejasi belgilanadi.',
            'Врач формулирует заключение: наблюдение, биопсия или план лечения.',
            'Physician provides conclusion: observation, biopsy or treatment plan.',
          ),
          details: [
            L('Xavfsiz holatlar uchun kuzatish jadvali', 'График наблюдения для доброкачественных образований', 'Follow-up schedule for benign lesions'),
            L('Shubhali holatlarda biopsiya yo\'naltiriladi', 'При подозрении направляется на биопсию', 'Biopsy is recommended when suspicious'),
          ],
        },
      ],
    },
    clinicAdvantagesSection(
      L('Professional dermatoskop va diagnostika', 'Профессиональный дерматоскоп и диагностика', 'Professional dermatoscope and diagnostics'),
      [
        L(
          'Radeski klinikasida yuqori aniqlikdagi professional dermatoskop qo\'llaniladi. Bu teri o\'smalarini erta bosqichda baholash uchun asosiy diagnostik vosita hisoblanadi.',
          'В клинике Radeski используется высокоточный профессиональный дерматоскоп — основной инструмент ранней оценки новообразований кожи.',
          'Radeski Clinic uses a high-precision professional dermatoscope — the primary tool for early assessment of skin lesions.',
        ),
      ],
      [
        L('Yuqori aniqlikdagi dermatoskop', 'Высокоточный дерматоскоп', 'High-precision dermatoscope'),
        L('Raqamli suratga olish va arxivlash', 'Цифровая фотофиксация и архив', 'Digital imaging and archiving'),
        L('Teri pasporti xizmati', 'Услуга «паспорт кожи»', 'Skin passport service'),
      ],
    ),
    {
      id: 'pricing',
      title: L('Narxlar', 'Цены', 'Pricing'),
      intro: L(
        'Dermataskopiya va dermatolog ko\'rigi narxi quyidagicha. Aniq narx konsultatsiyada tasdiqlanadi.',
        'Стоимость дерматоскопии и осмотра дерматолога указана ниже. Точная цена подтверждается на консультации.',
        'Dermoscopy and dermatologist consultation pricing is below. Exact price confirmed at consultation.',
      ),
      tiers: [
        {
          label: L('Dermataskopiya + shifokor ko\'rigi', 'Дерматоскопия + осмотр врача', 'Dermoscopy + physician examination'),
          value: L('150 000 so\'m', '150 000 сум', '150,000 UZS'),
        },
      ],
    },
    recoverySection(
      [
        L('Tekshiruvdan keyin maxsus parvarish talab qilinmaydi', 'После обследования специальный уход не требуется', 'No special aftercare required after examination'),
        L('Shifokor tavsiya qilgan kuzatish muddatiga rioya qiling', 'Соблюдайте сроки наблюдения, назначенные врачом', 'Follow observation intervals prescribed by physician'),
        L('Terini quyoshdan himoya qiling (SPF 30+)', 'Защищайте кожу от солнца (SPF 30+)', 'Protect skin from sun (SPF 30+)'),
        L('Yangi o\'zgarishlarni darhol xabar qiling', 'Немедленно сообщайте о новых изменениях', 'Report new changes promptly'),
      ],
      [
        L('Tekshiruvning o\'zi uchun qarshi ko\'rsatmalar yo\'q', 'Противопоказаний к самому обследованию нет', 'No contraindications to the examination itself'),
        L('Faol teri infeksiyasi bo\'lsa, ko\'rik kechiktirilishi mumkin', 'При активной инфекции кожи осмотр может быть отложен', 'Active skin infection may postpone examination'),
      ],
    ),
    {
      id: 'faq',
      title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'),
      faq: [
        {
          question: L('Dermataskopiya og\'riqlimi?', 'Болезненна ли дерматоскопия?', 'Is dermoscopy painful?'),
          answer: L(
            'Yo\'q, bu butunlay og\'riqsiz va invaziv bo\'lmagan tekshiruv. Dermatoskop teriga tegib, kattalashtirilgan ko\'rinish beradi.',
            'Нет, это полностью безболезненное неинвазивное исследование. Дерматоскоп касается кожи и даёт увеличенное изображение.',
            'No, it is completely painless and non-invasive. The dermatoscope touches the skin and provides magnified imaging.',
          ),
        },
        {
          question: L('Tekshiruv qancha vaqt oladi?', 'Сколько длится осмотр?', 'How long does the exam take?'),
          answer: L(
            'Odatda 20–30 daqiqa. Ko\'p sonli hol bo\'lsa yoki butun tana ko\'rigi kerak bo\'lsa, vaqt uzayishi mumkin.',
            'Обычно 20–30 минут. При множественных родинках или осмотре всего тела время может увеличиться.',
            'Usually 20–30 minutes. Multiple moles or full-body exam may take longer.',
          ),
        },
        {
          question: L('Yillik tekshiruv kerakmi?', 'Нужен ли ежегодный осмотр?', 'Is annual screening needed?'),
          answer: L(
            'Ha, ayniqsa ko\'p holga ega bo\'lganlar va quyosh ta\'siriga ko\'p uchraganlar uchun yillik dermatolog ko\'rigi tavsiya etiladi.',
            'Да, особенно при множественных родинках и выраженной инсоляции рекомендуется ежегодный осмотр дерматолога.',
            'Yes, especially with many moles and significant sun exposure, annual dermatologist screening is recommended.',
          ),
        },
        {
          question: L('Biopsiya har doim kerakmi?', 'Всегда ли нужна биопсия?', 'Is biopsy always needed?'),
          answer: L(
            'Yo\'q. Ko\'pchilik holatlar dermatoskop orqali xavfsiz deb baholanadi va kuzatish yetarli. Biopsiya faqat shubhali o\'zgarishlarda tavsiya etiladi.',
            'Нет. Большинство случаев признаются доброкачественными при дерматоскопии и требуют наблюдения. Биопсия назначается только при подозрении.',
            'No. Most cases are assessed as benign on dermoscopy and need observation only. Biopsy is recommended only when suspicious.',
          ),
        },
      ],
    },
  ],
};

const PROMO_IPL: PromoPageContent = {
  sections: [
    {
      id: 'overview',
      title: L('Xizmat haqida', 'Об услуге', 'About the service'),
      paragraphs: [
        L(
          'IPL (Intense Pulsed Light) fotoomolajeniyatsiya — yuqori intensivlikdagi yorug\'lik impulslari yordamida teridagi pigmentatsiya, qon tomirlari va yoshga bog\'liq o\'zgarishlarni bartaraf etish usuli. Radeski klinikasida AQShda ishlab chiqarilgan Sciton IPL Lumecca platformasi qo\'llaniladi.',
          'IPL-фотоомоложение — метод устранения пигментации, сосудов и возрастных изменений с помощью импульсов интенсивного света. В клинике Radeski используется платформа Sciton IPL Lumecca из США.',
          'IPL photo-rejuvenation removes pigmentation, vessels and age-related changes using intense pulsed light. Radeski Clinic uses the US-made Sciton IPL Lumecca platform.',
        ),
        L(
          'Lumecca yuqori quvvatli spektral filtrlash bilan terining turli qatlamlariga nishonlangan ta\'sir ko\'rsatadi. Pigment dog\'lari, rozatsea qizarishi, kengaygan kapillyarlar va teri rangsizligi seanslar davomida sezilarli yaxshilanadi.',
          'Lumecca с мощной спектральной фильтрацией оказывает целенаправленное воздействие на разные слои кожи. Пигментные пятна, покраснение при розацеа, расширенные капилляры и неровный тон улучшаются в ходе сеансов.',
          'Lumecca delivers targeted treatment across skin layers with powerful spectral filtering. Pigment spots, rosacea redness, dilated capillaries and uneven tone improve over sessions.',
        ),
        L(
          'Jarrohliksiz, minimal tiklanish vaqtli muolaja. Butun yuz yoki alohida zonalarga (masalan, 2 ta yonoq) individual protokol tuziladi.',
          'Безоперационная процедура с минимальным восстановлением. Индивидуальный протокол для всего лица или отдельных зон (например, 2 щёк).',
          'Non-surgical procedure with minimal downtime. Individual protocol for full face or selected zones (e.g., both cheeks).',
        ),
      ],
    },
    {
      id: 'indications',
      title: L('Ko\'rsatmalar', 'Показания', 'Indications'),
      subsections: [
        {
          title: L('Kim uchun kerak?', 'Кому необходимо?', 'Who needs it?'),
          paragraphs: [L('Teri rangsizligi, pigmentatsiya yoki qon tomir muammolari bo\'lgan bemorlar uchun.', 'Пациентам с неровным тоном, пигментацией или сосудистыми проблемами.', 'Patients with uneven tone, pigmentation or vascular concerns.')],
          bullets: [
            L('Yoshga bog\'liq teri o\'zgarishlari', 'Возрастные изменения кожи', 'Age-related skin changes'),
            L('Quyosh dog\'lari va melazma', 'Солнечные пятна и мелазма', 'Sun spots and melasma'),
            L('Rozatsea va qizarish', 'Розацеа и покраснение', 'Rosacea and redness'),
            L('Kengaygan kapillyarlar (kuperoz)', 'Расширенные капилляры (купероз)', 'Dilated capillaries (couperose)'),
          ],
        },
        {
          title: L('Belgilar', 'Симптомы', 'Symptoms'),
          paragraphs: [L('Quyidagi belgilar IPL terapiyaga mos kelishi mumkin.', 'Следующие признаки могут быть показанием к IPL-терапии.', 'The following signs may indicate IPL therapy.')],
          bullets: [
            L('Teri mat va rangsiz', 'Тусклая, неровная кожа', 'Dull, uneven skin'),
            L('Yuzda qizil dog\'lar', 'Красные пятна на лице', 'Red spots on the face'),
            L('Burun va yonoqlarda qizarish', 'Покраснение на носу и щеках', 'Redness on nose and cheeks'),
            L('Yengil ajinlar va teri silliqligining pasayishi', 'Мелкие морщины и снижение гладкости', 'Fine lines and reduced smoothness'),
          ],
        },
        {
          title: L('Qachon murojaat qilish kerak?', 'Когда обратиться?', 'When to visit'),
          paragraphs: [L('Kuz va qish mavsumi IPL uchun eng qulay — quyosh ta\'siri kam.', 'Осень и зима — оптимальное время для IPL при меньшей инсоляции.', 'Autumn and winter are optimal for IPL with less sun exposure.')],
          bullets: [
            L('Kosmetik muammolar teri sifatiga ta\'sir qilayotganda', 'Когда эстетические проблемы влияют на качество кожи', 'When cosmetic concerns affect skin quality'),
            L('Krem va uy parvarishi yetarli bo\'lmaganda', 'Когда кремы и домашний уход недостаточны', 'When creams and home care are insufficient'),
            L('Jarrohliksiz yaxshilanish istagida', 'При желании улучшения без операции', 'When seeking improvement without surgery'),
          ],
        },
      ],
    },
    {
      id: 'protocol',
      title: L('Muolaja bosqichlari', 'Этапы процедуры', 'Procedure steps'),
      steps: [
        {
          title: L('1. Konsultatsiya va teri baholash', '1. Консультация и оценка кожи', '1. Consultation and skin assessment'),
          description: L('Dermatolog/kosmetolog teri turini, pigmentatsiya darajasini baholaydi.', 'Дерматолог/косметолог оценивает тип кожи и степень пигментации.', 'Dermatologist/cosmetologist assesses skin type and pigmentation level.'),
          details: [
            L('Fotosurat olish (oldin/keyin)', 'Фотофиксация (до/после)', 'Before/after photography'),
            L('Qarshi ko\'rsatmalar tekshiriladi', 'Проверяются противопоказания', 'Contraindications are checked'),
          ],
        },
        {
          title: L('2. Teri tayyorgarligi', '2. Подготовка кожи', '2. Skin preparation'),
          description: L('Yuz tozalanadi, korrektiruvchi gel qo\'llaniladi.', 'Лицо очищается, наносится контактный гель.', 'Face is cleansed; contact gel is applied.'),
          details: [
            L('Ko\'z himoyasi taqiladi', 'Надевается защита для глаз', 'Eye protection is worn'),
            L('Sochlar himoya qilinadi', 'Волосы защищаются', 'Hair is protected'),
          ],
        },
        {
          title: L('3. Sciton IPL Lumecca seansi', '3. Сеанс Sciton IPL Lumecca', '3. Sciton IPL Lumecca session'),
          description: L('Lumecca apparati yordamida yorug\'lik impulslari teriga yo\'naltiriladi.', 'Импульсы света направляются на кожу аппаратом Lumecca.', 'Light pulses are delivered to the skin with the Lumecca device.'),
          details: [
            L('Eneriya va filtr individual sozlanadi', 'Энергия и фильтр настраиваются индивидуально', 'Energy and filter are individualized'),
            L('Seans 20–40 daqiqa davom etadi', 'Сеанс длится 20–40 минут', 'Session lasts 20–40 minutes'),
            L('Yengil issiqlik hissi normal', 'Лёгкое ощущение тепла — норма', 'Mild warmth sensation is normal'),
          ],
        },
        {
          title: L('4. Parvarish va tavsiyalar', '4. Уход и рекомендации', '4. Care and recommendations'),
          description: L('Tinchlantiruvchi krem surtiladi, keyingi seans sanasi belgilanadi.', 'Наносится успокаивающий крем, назначается следующий сеанс.', 'Soothing cream is applied; next session is scheduled.'),
          details: [
            L('Odatda 3–5 seanslik kurs', 'Обычно курс из 3–5 сеансов', 'Usually a course of 3–5 sessions'),
            L('Seanslar oralig\'i 3–4 hafta', 'Интервал между сеансами 3–4 недели', 'Sessions spaced 3–4 weeks apart'),
          ],
        },
      ],
    },
    clinicAdvantagesSection(
      L('Sciton IPL Lumecca — O\'zbekistonda kam uchraydigan texnologiya', 'Sciton IPL Lumecca — редкая технология в Узбекистане', 'Sciton IPL Lumecca — rare technology in Uzbekistan'),
      [L('AQShda ishlab chiqarilgan Sciton platformasi gen darajasida foto-yangilash imkonini beradi. Radeski — Farg\'onada bu uskunaga ega kam klinikalardan biri.', 'Американская платформа Sciton обеспечивает фотоомоложение на генном уровне. Radeski — одна из немногих клиник в Фергане с этим оборудованием.', 'The US Sciton platform enables gene-level photo-rejuvenation. Radeski is among few Fergana clinics with this equipment.')],
      [L('Sciton IPL Lumecca asl uskunasi', 'Оригинальное оборудование Sciton IPL Lumecca', 'Original Sciton IPL Lumecca device'), L('Keng spektrli filtrlash', 'Широкий спектр фильтров', 'Broad-spectrum filters'), L('Dermatolog nazoratida', 'Под контролем дерматолога', 'Under dermatologist supervision')],
    ),
    {
      id: 'pricing',
      title: L('Narxlar', 'Цены', 'Pricing'),
      tiers: [
        { label: L('Butun yuz IPL Lumecca', 'Всё лицо IPL Lumecca', 'Full face IPL Lumecca'), value: L('900 000 so\'m', '900 000 сум', '900,000 UZS') },
        { label: L('2 ta yonoq', '2 щеки', '2 cheeks'), value: L('600 000 so\'m', '600 000 сум', '600,000 UZS') },
      ],
    },
    recoverySection(
      [L('24–48 soat quyoshdan saqlaning, SPF 50+ ishlating', 'Избегайте солнца 24–48 часов, используйте SPF 50+', 'Avoid sun 24–48 hours; use SPF 50+'), L('Birinchi kun issiq dush va sportdan voz keching', 'В первый день избегайте горячего душа и спорта', 'Avoid hot showers and exercise on day one'), L('Qizarish va qattiqlashish 2–5 kun ichida o\'tadi', 'Покраснение и стянутость проходят за 2–5 дней', 'Redness and tightness resolve in 2–5 days'), L('Terini namlantiruvchi kremlar ishlating', 'Используйте увлажняющие кремы', 'Use moisturizing creams')],
      [L('Homiladorlik va emizish', 'Беременность и лактация', 'Pregnancy and breastfeeding'), L('Faol gerpes yoki ekzema', 'Активный герпес или экзема', 'Active herpes or eczema'), L('Yaqinda quyosh kuyishi', 'Недавний солнечный ожог', 'Recent sunburn'), L('Qora teri fototipi (V–VI) — cheklangan', 'Тёмный фототип кожи (V–VI) — ограничено', 'Dark skin phototype (V–VI) — limited')],
    ),
    {
      id: 'faq',
      title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'),
      faq: [
        { question: L('IPL og\'riqlimi?', 'Болезненна ли IPL?', 'Is IPL painful?'), answer: L('Yengil igna sanchishi yoki issiqlik hissi bo\'lishi mumkin. Ko\'pchilik bemorlar yengil deb baholaydi.', 'Возможно лёгкое покалывание или тепло. Большинство пациентов переносят легко.', 'Mild pinching or warmth may occur. Most patients tolerate it well.') },
        { question: L('Natija qachon ko\'rinadi?', 'Когда виден результат?', 'When are results visible?'), answer: L('Pigment dog\'lari 1–2 haftada qorayib, keyin tushadi. To\'liq natija kurs oxirida.', 'Пигментные пятна темнеют за 1–2 недели, затем отшелушиваются. Полный результат — в конце курса.', 'Pigment spots darken in 1–2 weeks then flake off. Full result at course end.') },
        { question: L('Necha seans kerak?', 'Сколько сеансов нужно?', 'How many sessions needed?'), answer: L('Odatda 3–5 seans, muammo og\'irligiga qarab.', 'Обычно 3–5 сеансов в зависимости от выраженности.', 'Usually 3–5 sessions depending on severity.') },
        { question: L('Yuz va yonoq narxi farqi nima?', 'В чём разница цены лица и щёк?', 'What is the price difference for face vs cheeks?'), answer: L('Butun yuz — 900 000 so\'m, faqat 2 yonoq zonasi — 600 000 so\'m. Zona shifokor bilan kelishiladi.', 'Всё лицо — 900 000 сум, только 2 щеки — 600 000 сум. Зона согласуется с врачом.', 'Full face — 900,000 UZS; 2 cheeks only — 600,000 UZS. Zone agreed with physician.') },
        { question: L('Lumecca boshqa IPL dan farqi?', 'Чем Lumecca отличается от других IPL?', 'How is Lumecca different from other IPL?'), answer: L('Lumecca yuqori quvvat va aniqlik bilan ishlaydi, kamroq seansda yaxshi natija beradi. Sciton — dunyoda yetakchi brend.', 'Lumecca работает с высокой мощностью и точностью, даёт лучший результат за меньше сеансов. Sciton — мировой лидер.', 'Lumecca delivers higher power and precision with better results in fewer sessions. Sciton is a global leader.') },
      ],
    },
  ],
};

const PROMO_PODOLOGIYA: PromoPageContent = {
  sections: [
    {
      id: 'overview',
      title: L('Xizmat haqida', 'Об услуге', 'About the service'),
      paragraphs: [
        L('Podologiya — oyoq va tirnoqlarning tibbiy parvarishi. Radeski klinikasida aparat yordamida tirnoq tozalash zamburug\'i, qalinlashish va deformatsiyani og\'riqsiz, steril sharoitda bartaraf etish uchun o\'tkaziladi.', 'Подология — медицинский уход за стопами и ногтями. В клинике Radeski аппаратная чистка ногтей устраняет грибок, утолщение и деформацию безболезненно в стерильных условиях.', 'Podiatry is medical foot and nail care. At Radeski Clinic, device-assisted nail cleansing treats fungus, thickening and deformity painlessly in sterile conditions.'),
        L('Zamonaviy podologiya apparatlari tirnoq plastinasini millimetr aniqlikda ishlov beradi, infektsiyani olib tashlaydi va sog\'lom o\'sish uchun sharoit yaratadi.', 'Современные подологические аппараты обрабатывают ногтевую пластину с миллиметровой точностью, удаляют инфекцию и создают условия для здорового роста.', 'Modern podology devices treat the nail plate with millimeter precision, remove infection and create conditions for healthy growth.'),
        L('Muolaja podolog-dermatolog tomonidan bajariladi. Kerak bo\'lsa, laboratoriya tekshiruvi va dori-darmon terapiyasi qo\'shiladi.', 'Процедуру выполняет подолог-дерматолог. При необходимости добавляются лабораторные исследования и медикаментозная терапия.', 'Performed by a podiatrist-dermatologist. Lab tests and medication therapy are added when needed.'),
      ],
    },
    {
      id: 'indications',
      title: L('Ko\'rsatmalar', 'Показания', 'Indications'),
      subsections: [
        { title: L('Kim uchun kerak?', 'Кому необходимо?', 'Who needs it?'), paragraphs: [L('Tirnoq kasalliklari va parvarish muammolari bo\'lgan bemorlar.', 'Пациенты с заболеваниями и проблемами ухода за ногтями.', 'Patients with nail diseases and care problems.')], bullets: [L('Onikomikoz (tirnoq zamburug\'i)', 'Онихомикоз (грибок ногтей)', 'Onychomycosis (nail fungus)'), L('Tirnoq qalinlashishi', 'Утолщение ногтя', 'Nail thickening'), L('Tirnoq deformatsiyasi', 'Деформация ногтя', 'Nail deformity'), L('Oyoq tirnoqlarining parvarishi', 'Уход за ногтями стоп', 'Toenail care')] },
        { title: L('Belgilar', 'Симптомы', 'Symptoms'), paragraphs: [L('Quyidagi belgilar podologik muolajaga ko\'rsatma beradi.', 'Следующие признаки — показание к подологической процедуре.', 'The following signs indicate podiatric treatment.')], bullets: [L('Tirnoq rangi o\'zgardi (sariq, jigarrang)', 'Изменился цвет ногтя (жёлтый, коричневый)', 'Nail color changed (yellow, brown)'), L('Tirnoq qalin va qattiqlashgan', 'Ноготь толстый и плотный', 'Nail is thick and hard'), L('Tirnoq qirqish qiyinlashgan', 'Трудно подстричь ноготь', 'Difficult to trim nail'), L('Og\'riq yoki noqulaylik', 'Боль или дискомфорт', 'Pain or discomfort')] },
        { title: L('Qachon murojaat qilish kerak?', 'Когда обратиться?', 'When to visit'), paragraphs: [L('Zamburug\' belgilari paydo bo\'lganda kechiktirmang — erta davolash samaraliroq.', 'Не откладывайте при признаках грибка — раннее лечение эффективнее.', 'Do not delay when fungus signs appear — early treatment is more effective.')], bullets: [L('Uy parvarishi yordam bermaganda', 'Домашний уход не помогает', 'Home care does not help'), L('Tirnoq atrofida qizarish va shish', 'Покраснение и отёк вокруг ногтя', 'Redness and swelling around nail'), L('Bir necha tirnoqda muammo', 'Проблема на нескольких ногтях', 'Problem on multiple nails')] },
      ],
    },
    {
      id: 'protocol',
      title: L('Muolaja bosqichlari', 'Этапы процедуры', 'Procedure steps'),
      steps: [
        { title: L('1. Ko\'rik va tashxis', '1. Осмотр и диагноз', '1. Examination and diagnosis'), description: L('Podolog tirnoq holatini baholaydi, kerak bo\'lsa skraping olinadi.', 'Подолог оценивает состояние ногтя, при необходимости берёт соскоб.', 'Podiatrist assesses nail condition; scraping taken if needed.'), details: [L('Laboratoriya tekshiruvi tavsiya etilishi mumkin', 'Может быть рекомендовано лабораторное исследование', 'Lab testing may be recommended')] },
        { title: L('2. Dezinfeksiya', '2. Дезинфекция', '2. Disinfection'), description: L('Oyoq va tirnoq steril eritma bilan ishlanadi.', 'Стопа и ноготь обрабатываются стерильным раствором.', 'Foot and nail are treated with sterile solution.'), details: [L('Bir martalik sarf materiallar ishlatiladi', 'Используются одноразовые материалы', 'Single-use supplies are used')] },
        { title: L('3. Aparat bilan tozalash', '3. Аппаратная чистка', '3. Device cleansing'), description: L('Podologiya apparati tirnoq plastinasini bosqichma-bosqich tozalaydi.', 'Подологический аппарат поэтапно очищает ногтевую пластину.', 'Podology device gradually cleans the nail plate.'), details: [L('Og\'riqsiz freza ishlov berish', 'Безболезненная обработка фрезой', 'Painless burr treatment'), L('Zamburug\'li qatlamlar olib tashlanadi', 'Удаляются поражённые слои', 'Infected layers are removed'), L('Tirnoq qisqartiriladi va shakllantiriladi', 'Ноготь укорачивается и формируется', 'Nail is shortened and shaped')] },
        { title: L('4. Davolash va tavsiyalar', '4. Лечение и рекомендации', '4. Treatment and recommendations'), description: L('Antimikotik preparat surtiladi, uy parvarishi ko\'rsatiladi.', 'Наносится противогрибковый препарат, даются рекомендации по уходу.', 'Antifungal agent applied; home care instructions given.'), details: [L('Takroriy seanslar rejasi tuziladi', 'Составляется план повторных сеансов', 'Repeat session plan is made'), L('Odatda 4–8 hafta oralig\'ida', 'Обычно с интервалом 4–8 недель', 'Usually every 4–8 weeks')] },
      ],
    },
    clinicAdvantagesSection(
      L('Podologiya apparatlari va steril sharoit', 'Подологические аппараты и стерильность', 'Podology devices and sterile conditions'),
      [L('Radeski klinikasida zamonaviy podologiya apparatlari va tirnoq patologiyasi bo\'yicha malakali mutaxassislar ishlaydi.', 'В клинике Radeski работают современные подологические аппараты и квалифицированные специалисты по патологии ногтей.', 'Radeski Clinic has modern podology devices and qualified nail pathology specialists.')],
      [L('Professional podologiya apparati', 'Профессиональный подологический аппарат', 'Professional podology device'), L('Podolog-dermatolog mutaxassisi', 'Специалист подолог-дерматолог', 'Podiatrist-dermatologist specialist'), L('Steril kabinet va bir martalik asboblar', 'Стерильный кабинет и одноразовые инструменты', 'Sterile room and single-use instruments')],
    ),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Aparat yordamida tirnoq tozalash', 'Аппаратная чистка ногтей', 'Medical device nail cleansing'), value: L('230 000 so\'m', '230 000 сум', '230,000 UZS') }] },
    recoverySection(
      [L('Tirnoqni quruq saqlang', 'Держите ноготь сухим', 'Keep nail dry'), L('Antimikotik krem/moycha qo\'llang', 'Применяйте противогрибковый крем/лак', 'Apply antifungal cream/lacquer'), L('Qulay va keng poyabzal kiying', 'Носите удобную просторную обувь', 'Wear comfortable roomy shoes'), L('Keyingi seansga vaqtida keling', 'Приходите на следующий сеans вовремя', 'Attend next session on time')],
      [L('Faol tirnoq atrofi yallig\'lanishi', 'Активное воспаление вокруг ногтя', 'Active periungual inflammation'), L('Qon aylanish buzilishlari (shakar diabeti asoratlari)', 'Нарушения кровообращения (осложнения диабета)', 'Circulation disorders (diabetes complications)'), L('Otkrit yaralar', 'Открытые раны', 'Open wounds')],
    ),
    {
      id: 'faq',
      title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'),
      faq: [
        { question: L('Muolaja og\'riqlimi?', 'Болезненна ли процедура?', 'Is the procedure painful?'), answer: L('Yo\'q, aparat bilan ishlov berish og\'riqsiz. Ba\'zan yengil noqulaylik bo\'lishi mumkin.', 'Нет, аппаратная обработка безболезненна. Иногда возможен лёгкий дискомфорт.', 'No, device treatment is painless. Mild discomfort may occur.') },
        { question: L('Bir seans yetadimi?', 'Достаточно ли одного сеанса?', 'Is one session enough?'), answer: L('Zamburug\' uchun bir necha seans kerak. Shifokor individual reja tuzadi.', 'При грибке нужно несколько сеансов. Врач составляет индивидуальный план.', 'Fungus requires multiple sessions. Physician creates individual plan.') },
        { question: L('Qancha vaqtda tuzaladi?', 'Сколько времени до выздоровления?', 'How long until recovery?'), answer: L('Tirnoq to\'liq o\'sishi 6–12 oy davom etishi mumkin. Muntazam seanslar muhim.', 'Полный отрастание ногтя может занять 6–12 месяцев. Регулярные сеансы важны.', 'Full nail regrowth may take 6–12 months. Regular sessions are important.') },
        { question: L('Uy sharoitida davolanish mumkinmi?', 'Можно ли лечиться дома?', 'Can I treat at home only?'), answer: L('Uy parvarishi qo\'llab-quvvatlaydi, lekin aparat tozalash professional muolaja talab qiladi.', 'Домашний уход дополняет, но аппаратная чистка требует профессиональной процедуры.', 'Home care supports treatment but device cleansing requires professional procedure.') },
        { question: L('Profilaktika qanday?', 'Как профилактика?', 'How to prevent recurrence?'), answer: L('Oyoqni quruq saqlang, jamoat hammomlarida shippak kiying, eski poyabzallarni almashtiring.', 'Держите ноги сухими, носите шлёпанцы в общественных душах, меняйте старую обувь.', 'Keep feet dry, wear flip-flops in public showers, replace old shoes.') },
      ],
    },
  ],
};

const PROMO_KARBON_PEELING: PromoPageContent = {
  sections: [
    {
      id: 'overview',
      title: L('Xizmat haqida', 'Об услуге', 'About the service'),
      paragraphs: [
        L('Karbon piling (Hollywood Spectra) — Q-switch lazer va maxsus karbon losyoni yordamida terini chuqur tozalash va yangilash usuli. Radeski klinikasida Hollywood Spectra lazer tizimi qo\'llaniladi.', 'Карбоновый пилинг (Hollywood Spectra) — глубокое очищение и обновление кожи с помощью Q-switch лазера и специального карбонового лосьона. В клинике Radeski используется лазерная система Hollywood Spectra.', 'Carbon peeling (Hollywood Spectra) deeply cleanses and renews skin using a Q-switch laser and special carbon lotion. Radeski Clinic uses the Hollywood Spectra laser system.'),
        L('Karbon losyoni teri poralariga kiradi, lazer uni «portlatadi» — bu esa qora nuqtalar, yog\' va qattiqlikni olib tashlaydi. Natijada teri yorqin, silliq va poralar torayadi.', 'Карбоновый лосьон проникает в поры, лазер «взрывает» его — удаляя чёрные точки, жир и ороговевшие клетки. Кожа становится сияющей, гладкой, поры сужаются.', 'Carbon lotion penetrates pores; the laser «explodes» it — removing blackheads, oil and dead cells. Skin becomes brighter, smoother; pores tighten.'),
        L('Muolaja 30–40 daqiqa davom etadi, minimal tiklanish vaqti bilan tez natija beradi. Yuz terisi uchun eng mashhur lazer tozalash protokollaridan biri.', 'Процедура длится 30–40 минут, даёт быстрый результат с минимальным восстановлением. Один из самых популярных лазерных протоколов очищения лица.', 'Procedure takes 30–40 minutes with quick results and minimal downtime. One of the most popular laser facial cleansing protocols.'),
      ],
    },
    {
      id: 'indications',
      title: L('Ko\'rsatmalar', 'Показания', 'Indications'),
      subsections: [
        { title: L('Kim uchun kerak?', 'Кому необходимо?', 'Who needs it?'), paragraphs: [L('Yog\'li, keng porali yoki mat teri egalari.', 'Обладателям жирной, с расширенными порами или тусклой кожи.', 'Those with oily, enlarged-pore or dull skin.')], bullets: [L('Keng poralar va qora nuqtalar', 'Расширенные поры и чёрные точки', 'Enlarged pores and blackheads'), L('Yog\'li teri (seboreya)', 'Жирная кожа (себорея)', 'Oily skin (seborrhea)'), L('Teri matligi va rangsizligi', 'Тусклость и неровный тон', 'Dullness and uneven tone'), L('Yengil pigmentatsiya', 'Лёгкая пигментация', 'Mild pigmentation')] },
        { title: L('Belgilar', 'Симптомы', 'Symptoms'), paragraphs: [L('Karbon piling quyidagi muammolarni hal qiladi.', 'Карбоновый пилинг решает следующие проблемы.', 'Carbon peel addresses the following concerns.')], bullets: [L('T-zone yog\'liligi', 'Жирность Т-зоны', 'T-zone oiliness'), L('Komodonlar va akne izlari', 'Комедоны и следы акне', 'Comedones and acne marks'), L('Teri qattiqligi', 'Огрубение кожи', 'Skin roughness'), L('Yorqinlik yo\'qligi', 'Отсутствие сияния', 'Lack of radiance')] },
        { title: L('Qachon murojaat qilish kerak?', 'Когда обратиться?', 'When to visit'), paragraphs: [L('Muhim tadbir oldidan yoki muntazam teri tozalash uchun.', 'Перед важным событием или для регулярного очищения кожи.', 'Before important events or for regular skin cleansing.')], bullets: [L('Har 3–4 haftada profilaktik tozalash', 'Профилактическое очищение каждые 3–4 недели', 'Preventive cleansing every 3–4 weeks'), L('Boshqa kosmetologik muolajalar oldidan tayyorgarlik', 'Подготовка перед другими косметологическими процедурами', 'Preparation before other cosmetic procedures')] },
      ],
    },
    {
      id: 'protocol',
      title: L('Muolaja bosqichlari', 'Этапы процедуры', 'Procedure steps'),
      steps: [
        { title: L('1. Tozalash va tayyorgarlik', '1. Очищение и подготовка', '1. Cleansing and preparation'), description: L('Yuz make-up va iforatdan tozalanadi.', 'Лицо очищается от макияжа и загрязнений.', 'Face is cleansed of makeup and impurities.'), details: [L('Teri turi baholanadi', 'Оценивается тип кожи', 'Skin type is assessed')] },
        { title: L('2. Karbon losyoni surtish', '2. Нанесение карбонового лосьона', '2. Carbon lotion application'), description: L('Hollywood Spectra protokoliga mos karbon gel yuzga surtiladi.', 'Карбоновый гель наносится по протоколу Hollywood Spectra.', 'Carbon gel is applied per Hollywood Spectra protocol.'), details: [L('Losyon poralarga kirishi uchun 10–15 daqiqa kutish', 'Ожидание 10–15 минут для проникновения в поры', 'Wait 10–15 minutes for pore penetration')] },
        { title: L('3. Q-switch lazer muolajasi', '3. Q-switch лазерная обработка', '3. Q-switch laser treatment'), description: L('Hollywood Spectra lazeri karbon qatlamini «portlatadi» va terini yangilaydi.', 'Лазер Hollywood Spectra «взрывает» карбоновый слой и обновляет кожу.', 'Hollywood Spectra laser «explodes» carbon layer and renews skin.'), details: [L('Yengil qarsildoq tovush va issiqlik — normal', 'Лёгкий хлопок и тепло — норма', 'Mild popping sound and warmth are normal'), L('Butun yuz yoki muayyan zona ishlanadi', 'Обрабатывается всё лицо или зона', 'Full face or zone is treated')] },
        { title: L('4. Tinchlantirish va SPF', '4. Успокоение и SPF', '4. Soothing and SPF'), description: L('Tinchlantiruvchi maska va himoya kremi qo\'llaniladi.', 'Наносится успокаивающая маска и защитный крем.', 'Soothing mask and protective cream applied.'), details: [L('24 soat quyoshdan saqlanish tavsiyasi', 'Рекомендация избегать солнца 24 часа', 'Avoid sun for 24 hours recommended')] },
      ],
    },
    clinicAdvantagesSection(
      L('Hollywood Spectra Q-switch lazer', 'Лазер Hollywood Spectra Q-switch', 'Hollywood Spectra Q-switch laser'),
      [L('Radeski klinikasida asl Hollywood Spectra lazer tizimi o\'rnatilgan. Bu Q-switch texnologiyasi karbon piling, gold toning va pigmentatsiya davolash uchun ishlatiladi.', 'В клинике Radeski установлена оригинальная лазерная система Hollywood Spectra. Q-switch технология используется для карбонового пилинга, gold toning и лечения пигментации.', 'Radeski Clinic has an original Hollywood Spectra laser system. Q-switch technology is used for carbon peel, gold toning and pigmentation treatment.')],
      [L('Hollywood Spectra asl uskunasi', 'Оригинальное оборудование Hollywood Spectra', 'Original Hollywood Spectra device'), L('Q-switch lazer texnologiyasi', 'Q-switch лазерная технология', 'Q-switch laser technology'), L('Kosmetolog va dermatolog nazorati', 'Контроль косметолога и дерматолога', 'Cosmetologist and dermatologist supervision')],
    ),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Karbon piling (Hollywood Spectra)', 'Карбоновый пилинг (Hollywood Spectra)', 'Carbon peeling (Hollywood Spectra)'), value: L('700 000 so\'m', '700 000 сум', '700,000 UZS') }] },
    recoverySection(
      [L('24 soat quyoshdan saqlaning', 'Избегайте солнца 24 часа', 'Avoid sun for 24 hours'), L('Birinchi 2 kun agressiv kosmetikadan voz keching', 'Первые 2 дня без агрессивной косметики', 'No aggressive cosmetics first 2 days'), L('Namlantiruvchi krem ishlating', 'Используйте увлажняющий крем', 'Use moisturizer'), L('SPF 30+ har kuni', 'SPF 30+ ежедневно', 'SPF 30+ daily')],
      [L('Faol akne yallig\'lanishi', 'Активное воспалительное акне', 'Active inflammatory acne'), L('Ochiq yaralar', 'Открытые раны', 'Open wounds'), L('Herpes faol bosqichi', 'Активная стадия герпеса', 'Active herpes stage'), L('Homiladorlik', 'Беременность', 'Pregnancy')],
    ),
    {
      id: 'faq',
      title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'),
      faq: [
        { question: L('Og\'riqlimi?', 'Болезненно ли?', 'Is it painful?'), answer: L('Yengil igna sanchishi hissi bo\'lishi mumkin, lekin ko\'pchilik yengil deb baholaydi.', 'Возможно лёгкое покалывание, большинство переносят легко.', 'Mild pinching may occur; most tolerate it well.') },
        { question: L('Natija qachon ko\'rinadi?', 'Когда виден результат?', 'When is result visible?'), answer: L('Darhol teri yorqinlashadi. To\'liq effekt 3–5 kun ichida.', 'Сияние сразу после процедуры. Полный эффект за 3–5 дней.', 'Immediate glow. Full effect within 3–5 days.') },
        { question: L('Necha seans kerak?', 'Сколько сеансов нужно?', 'How many sessions?'), answer: L('Bir seans ham sezilarli natija beradi. Kurs — 4–6 seans, 3–4 hafta oralig\'ida.', 'Один сеанс даёт заметный результат. Курс — 4–6 сеансов с интервалом 3–4 недели.', 'One session gives noticeable results. Course — 4–6 sessions every 3–4 weeks.') },
        { question: L('Hollywood Spectra nima?', 'Что такое Hollywood Spectra?', 'What is Hollywood Spectra?'), answer: L('Q-switch Nd:YAG lazer tizimi. Karbon piling, tatuaj yo\'qotish va pigmentatsiya davolash uchun ishlatiladi.', 'Лазерная система Q-switch Nd:YAG. Используется для карбонового пилинга, удаления татуажа и лечения пигментации.', 'Q-switch Nd:YAG laser system. Used for carbon peel, tattoo removal and pigmentation treatment.') },
        { question: L('Tiklanish qancha davom etadi?', 'Сколько длится восстановление?', 'How long is recovery?'), answer: L('24–48 soat yuzda yengil qizarish mumkin. Keyin oddiy hayotga qaytish mumkin.', '24–48 часов возможно лёгкое покраснение. Затем можно вернуться к обычной жизни.', '24–48 hours mild redness possible. Then normal activities resume.') },
      ],
    },
  ],
};

const PROMO_CO2_LAZER: PromoPageContent = {
  sections: [
    {
      id: 'overview',
      title: L('Xizmat haqida', 'Об услуге', 'About the service'),
      paragraphs: [
        L('CO₂ lazer bilan olib tashlash — DEKA SmartXide Punto CO₂ lazer yordamida papilloma, hol, so\'gal va boshqa xavfsiz teri o\'smalarini minimal travma bilan olib tashlash usuli.', 'Удаление CO₂-лазером — метод удаления папиллом, родинок, бородавок и других доброкачественных новообразований лазером DEKA SmartXide Punto CO₂ с минимальной травмой.', 'CO₂ laser removal uses DEKA SmartXide Punto CO₂ laser to remove papillomas, moles, warts and other benign lesions with minimal trauma.'),
        L('Lazer nur to\'qimalarni bug\'latib, qon ketishsiz kesadi. Bu usul xirurgik skalpelga nisbatan aniqroq, kamroq qon ketadi va tezroq tiklanadi.', 'Лазерный луч испаряет ткани, разрезая без кровотечения. По сравнению со скальпелем — точнее, меньше крови, быстрее заживление.', 'The laser vaporizes tissue, cutting without bleeding. Compared to scalpel — more precise, less bleeding, faster healing.'),
        L('Radeski klinikasida xirurgik dermatolog nazoratida bajariladi. Har bir o\'sma oldindan dermatoskop bilan baholanadi.', 'Выполняется под контролем хирургического дерматолога в клинике Radeski. Каждое образование предварительно оценивается дерматоскопом.', 'Performed under surgical dermatologist supervision at Radeski. Each lesion is pre-assessed with dermoscopy.'),
      ],
    },
    {
      id: 'indications',
      title: L('Ko\'rsatmalar', 'Показания', 'Indications'),
      subsections: [
        { title: L('Kim uchun kerak?', 'Кому необходимо?', 'Who needs it?'), paragraphs: [L('Xavfsiz teri o\'smalari bo\'lgan bemorlar.', 'Пациенты с доброкачественными новообразованиями кожи.', 'Patients with benign skin lesions.')], bullets: [L('Papilloma va so\'gallar', 'Папилломы (бородавки)', 'Papillomas (skin tags)'), L('Xol (nevus)', 'Родинки (невусы)', 'Moles (nevi)'), L('Seborreik keratozlar', 'Себорейные кератомы', 'Seborrheic keratoses'), L('Ksantelazmalar', 'Ксантелазмы', 'Xanthelasmas')] },
        { title: L('Belgilar', 'Симптомы', 'Symptoms'), paragraphs: [L('Quyidagi holatlar CO₂ lazer olib tashlash uchun ko\'rsatma.', 'Следующие состояния — показание к удалению CO₂-лазером.', 'The following indicate CO₂ laser removal.')], bullets: [L('Kosmetik noqulaylik tug\'diradigan o\'smalar', 'Образования, вызывающие эстетический дискомфорт', 'Lesions causing cosmetic discomfort'), L('Siqilish yoki jarohatlanadigan joylashuv', 'Локализация с трением или травмированием', 'Location with friction or trauma'), L('O\'sib borayotgan o\'smalar', 'Растущие образования', 'Growing lesions')] },
        { title: L('Qachon murojaat qilish kerak?', 'Когда обратиться?', 'When to visit'), paragraphs: [L('Dermatolog ko\'rigidan keyin olib tashlash rejalashtiriladi.', 'Удаление планируется после осмотра дерматолога.', 'Removal is planned after dermatologist examination.')], bullets: [L('Dermatoskop tekshiruvi o\'tkazilgandan keyin', 'После дерматоскопического обследования', 'After dermoscopic examination'), L('Shubhali o\'zgarishlar bundan mustasno — biopsiya kerak', 'Исключая подозрительные изменения — нужна биопсия', 'Except suspicious changes — biopsy needed')] },
      ],
    },
    {
      id: 'protocol',
      title: L('Muolaja bosqichlari', 'Этапы процедуры', 'Procedure steps'),
      steps: [
        { title: L('1. Ko\'rik va dermatoskopiya', '1. Осмотр и дерматоскопия', '1. Examination and dermoscopy'), description: L('O\'sma xavfsizligi baholanadi.', 'Оценивается безопасность образования.', 'Lesion safety is assessed.'), details: [L('Shubhali holatlarda biopsiya yo\'naltiriladi', 'При подозрении направляется на биопсию', 'Biopsy referred when suspicious')] },
        { title: L('2. Mahalliy behushlik', '2. Местная анестезия', '2. Local anesthesia'), description: L('Lidokain kremi yoki inyeksiya qo\'llaniladi.', 'Наносится лидокаиновый крем или инъекция.', 'Lidocaine cream or injection applied.'), details: [L('15–20 daqiqa kutish (krem uchun)', 'Ожидание 15–20 минут (для крема)', 'Wait 15–20 minutes (for cream)')] },
        { title: L('3. DEKA SmartXide CO₂ lazer olib tashlash', '3. Удаление лазером DEKA SmartXide CO₂', '3. DEKA SmartXide CO₂ laser removal'), description: L('Lazer o\'smani qatlamma-qatlam bug\'latadi.', 'Лазер послойно испаряет образование.', 'Laser vaporizes lesion layer by layer.'), details: [L('Aniq chuqurlik nazorati', 'Точный контроль глубины', 'Precise depth control'), L('Qon ketish deyarli yo\'q', 'Практически без кровотечения', 'Virtually bloodless'), L('Bir nechta o\'sma bir seansda', 'Несколько образований за один сеанс', 'Multiple lesions in one session')] },
        { title: L('4. Parvarish va kuzatuv', '4. Уход и наблюдение', '4. Care and follow-up'), description: L('Antiseptik va bog\'lovchi qo\'llaniladi, kuzatuv belgilanadi.', 'Наносится антисептик и повязка, назначается наблюдение.', 'Antiseptic and dressing applied; follow-up scheduled.'), details: [L('7–14 kun ichida kuzatuv ko\'rigi', 'Контрольный осмотр через 7–14 дней', 'Follow-up in 7–14 days')] },
      ],
    },
    clinicAdvantagesSection(
      L('DEKA SmartXide Punto CO₂ lazer', 'Лазер DEKA SmartXide Punto CO₂', 'DEKA SmartXide Punto CO₂ laser'),
      [L('Italiyada ishlab chiqarilgan DEKA SmartXide — dunyodagi eng ilg\'or CO₂ lazer tizimlaridan biri. Radeski klinikasida xirurgik dermatologlar tomonidan qo\'llaniladi.', 'DEKA SmartXide из Италии — одна из самых передовых CO₂-лазерных систем в мире. Применяется хирургическими дерматологами клиники Radeski.', 'Italian-made DEKA SmartXide is among the world\'s most advanced CO₂ laser systems. Used by surgical dermatologists at Radeski.')],
      [L('DEKA SmartXide Punto CO₂ asl uskunasi', 'Оригинальное оборудование DEKA SmartXide Punto CO₂', 'Original DEKA SmartXide Punto CO₂ device'), L('Xirurgik dermatolog mutaxassisi', 'Специалист хирургический дерматолог', 'Surgical dermatologist specialist'), L('Dermatoskop oldindan tekshiruv', 'Предварительная дерматоскопия', 'Pre-procedure dermoscopy')],
    ),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Bitta o\'sma olib tashlash', 'Удаление одного образования', 'Single lesion removal'), value: L('30 000 so\'mdan', 'от 30 000 сум', 'from 30,000 UZS'), note: L('O\'sma hajmi va joylashuviga qarab', 'В зависимости от размера и локализации', 'Depending on size and location') }] },
    recoverySection(
      [L('Muolaja joyini quruq va toza saqlang', 'Держите место процедуры сухим и чистым', 'Keep treatment site dry and clean'), L('Qarovsiz qoldirmang, qichishni bosmang', 'Не сдирайте корочку, не чешите', 'Do not pick scab; avoid scratching'), L('Quyoshdan himoya (SPF 50+)', 'Защита от солнца (SPF 50+)', 'Sun protection (SPF 50+)'), L('Shifokor tavsiya qilgan antiseptik ishlating', 'Используйте антисептик по назначению', 'Use antiseptic as prescribed')],
      [L('Shubhali o\'sma (biopsiya talab qilinadi)', 'Подозрительное образование (нужна биопсия)', 'Suspicious lesion (biopsy required)'), L('Faol infeksiya hududi', 'Область активной инфекции', 'Active infection area'), L('Qon ivish buzilishlari', 'Нарушения свёртываемости крови', 'Blood clotting disorders'), L('Homiladorlik (ba\'zi hududlar)', 'Беременность (некоторые зоны)', 'Pregnancy (certain areas)')],
    ),
    {
      id: 'faq',
      title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'),
      faq: [
        { question: L('Iz qoladimi?', 'Останется ли шрам?', 'Will there be a scar?'), answer: L('DEKA SmartXide aniq ishlaydi, iz minimal. Katta o\'smalarda yengil iz bo\'lishi mumkin.', 'DEKA SmartXide работает точно, рубец минимален. При крупных образованиях возможен лёгкий след.', 'DEKA SmartXide is precise; scarring is minimal. Large lesions may leave a light mark.') },
        { question: L('Og\'riqlimi?', 'Болезненно ли?', 'Is it painful?'), answer: L('Mahalliy behushlik bilan og\'riq sezilmas. Keyin yengil noqulaylik bo\'lishi mumkin.', 'При местной анестезии боли нет. Затем возможен лёгкий дискомфорт.', 'No pain with local anesthesia. Mild discomfort afterward.') },
        { question: L('Necha kun tiklanadi?', 'Сколько дней заживление?', 'How many days to heal?'), answer: L('Odatda 7–14 kun. Joylashuv va hajmga bog\'liq.', 'Обычно 7–14 дней. Зависит от локализации и размера.', 'Usually 7–14 days. Depends on location and size.') },
        { question: L('Bir nechta o\'sma olib tashlash mumkinmi?', 'Можно удалить несколько образований?', 'Can multiple lesions be removed?'), answer: L('Ha, bir seansda bir nechta o\'sma olib tashlash mumkin. Narx har biri uchun alohida.', 'Да, за один сеанс можно удалить несколько. Цена за каждое отдельно.', 'Yes, multiple lesions per session. Priced individually.') },
        { question: L('Holni olib tashlash xavfsizmi?', 'Безопасно ли удалять родинку?', 'Is mole removal safe?'), answer: L('Dermatoskop tekshiruvidan keyin xavfsiz deb baholangan holatlarda — ha. Shubhali holatlarda biopsiya kerak.', 'Да, если после дерматоскопии признана доброкачественной. При подозрении — биопсия.', 'Yes, if deemed benign after dermoscopy. Biopsy needed if suspicious.') },
      ],
    },
  ],
};

const PROMO_QOSH_TATU: PromoPageContent = {
  sections: [
    {
      id: 'overview',
      title: L('Xizmat haqida', 'Об услуге', 'About the service'),
      paragraphs: [
        L('Qoshdagi tatuirashni lazer bilan yo\'qotish — Hollywood Spectra Q-switch lazer yordamida qoshdagi eski tatuirash va pigment izlarini bosqichma-bosqich olib tashlash usuli.', 'Лазерное удаление татуажа бровей — поэтапное удаление старого татуажа и пигмента на бровях с помощью Q-switch лазера Hollywood Spectra.', 'Laser eyebrow tattoo removal uses Hollywood Spectra Q-switch laser to gradually remove old eyebrow tattoo and pigment.'),
        L('Lazer pigment zarrachalarini maydalab, organizm tomonidan chiqarilishiga yordam beradi. Har bir seansda pigment rangi ochiladi, to\'liq yo\'qotish bir necha seans talab qiladi.', 'Лазер разрушает пигментные частицы, помогая организму их вывести. С каждым сеансом пигмент светлеет; полное удаление требует нескольких сеансов.', 'Laser breaks down pigment particles for body elimination. Pigment lightens each session; full removal needs multiple sessions.'),
        L('Radeski klinikasida teri tiklanishi nazorat qilinadi, shifokor individual protokol va seanslar oralig\'ini belgilaydi.', 'В клинике Radeski контролируется заживление кожи; врач определяет индивидуальный протокол и интервалы сеансов.', 'At Radeski, skin healing is monitored; physician sets individual protocol and session intervals.'),
      ],
    },
    {
      id: 'indications',
      title: L('Ko\'rsatmalar', 'Показания', 'Indications'),
      subsections: [
        { title: L('Kim uchun kerak?', 'Кому необходимо?', 'Who needs it?'), paragraphs: [L('Qoshdagi noto\'g\'ri tatuirash yoki pigmentdan xalos bo\'lmoqchi bo\'lganlar.', 'Тем, кто хочет избавиться от неудачного татуажа или пигмента на бровях.', 'Those wanting to remove unsatisfactory eyebrow tattoo or pigment.')], bullets: [L('Noto\'g\'ri shakl yoki rang', 'Неправильная форма или цвет', 'Wrong shape or color'), L('Eski, o\'chgan tatuirash', 'Старый, выцветший татуаж', 'Old, faded tattoo'), L('Yangi tatuirash oldidan tozalash', 'Очистка перед новым татуажем', 'Clearing before new tattoo'), L('Pigment noto\'g\'ri joylashgan', 'Пигмент расположен неправильно', 'Pigment misplaced')] },
        { title: L('Belgilar', 'Симптомы', 'Symptoms'), paragraphs: [L('Lazer yo\'qotish quyidagi muammolarni hal qiladi.', 'Лазерное удаление решает следующие проблемы.', 'Laser removal addresses the following.')], bullets: [L('Qoshda ko\'k, yashil yoki qizil pigment', 'Синий, зелёный или красный пигмент на бровях', 'Blue, green or red pigment on brows'), L('Qalin yoki notekis chiziqlar', 'Толстые или неровные линии', 'Thick or uneven lines'), L('Qosh shaklini buzgan tatuirash', 'Татуаж, искажающий форму брови', 'Tattoo distorting brow shape')] },
        { title: L('Qachon murojaat qilish kerak?', 'Когда обратиться?', 'When to visit'), paragraphs: [L('Tatuirashdan kamida 4–6 hafta o\'tgach murojaat qiling.', 'Обратитесь не ранее чем через 4–6 недель после татуажа.', 'Visit at least 4–6 weeks after tattoo application.')], bullets: [L('Yangi tatuirash rejasi bo\'lsa — avval tozalash', 'При плане нового татуажа — сначала очистка', 'If planning new tattoo — cleanse first'), L('Pigment rangi qoniqarsiz bo\'lsa', 'Если цвет пигмента не устраивает', 'If pigment color is unsatisfactory')] },
      ],
    },
    {
      id: 'protocol',
      title: L('Muolaja bosqichlari', 'Этапы процедуры', 'Procedure steps'),
      steps: [
        { title: L('1. Konsultatsiya', '1. Консультация', '1. Consultation'), description: L('Pigment turi, rang chuqurligi baholanadi.', 'Оценивается тип пигмента, глубина цвета.', 'Pigment type and color depth assessed.'), details: [L('Taxminiy seanslar soni aytiladi', 'Озвучивается примерное число сеансов', 'Estimated session count provided')] },
        { title: L('2. Tayyorgarlik', '2. Подготовка', '2. Preparation'), description: L('Qosh tozalangan, ko\'z himoyasi taqilgan.', 'Бровь очищена, надета защита для глаз.', 'Brow cleansed; eye protection worn.'), details: [L('Mahalliy behushlik kremi (ixtiyoriy)', 'Местный обезболивающий крем (по желанию)', 'Topical anesthetic cream (optional)')] },
        { title: L('3. Hollywood Spectra lazer seansi', '3. Сеанс лазера Hollywood Spectra', '3. Hollywood Spectra laser session'), description: L('Q-switch lazer pigmentga qisqa impulslar beradi.', 'Q-switch лазер посылает короткие импульсы на пигмент.', 'Q-switch laser delivers short pulses to pigment.'), details: [L('Yengil og\'riq — normal', 'Лёгкая боль — норма', 'Mild pain is normal'), L('Pigment oqartiriladi', 'Пигмент осветляется', 'Pigment lightens'), L('15–20 daqiqa davom etadi', 'Длится 15–20 минут', 'Lasts 15–20 minutes')] },
        { title: L('4. Tiklanish va keyingi seans', '4. Восстановление и следующий сеанс', '4. Recovery and next session'), description: L('Tinchlantiruvchi krem, 6–8 hafta keyin keyingi seans.', 'Успокаивающий крем, следующий сеанс через 6–8 недель.', 'Soothing cream; next session in 6–8 weeks.'), details: [L('Odatda 3–6 seans kerak', 'Обычно нужно 3–6 сеансов', 'Usually 3–6 sessions needed')] },
      ],
    },
    clinicAdvantagesSection(
      L('Hollywood Spectra Q-switch lazer', 'Q-switch лазер Hollywood Spectra', 'Hollywood Spectra Q-switch laser'),
      [L('Qosh tatuirash yo\'qotish uchun Hollywood Spectra — xavfsiz va samarali Q-switch texnologiya. Radeski klinikasida kosmetolog va dermatolog nazoratida.', 'Hollywood Spectra — безопасная и эффективная Q-switch технология для удаления татуажа бровей. Под контролем косметолога и дерматолога в Radeski.', 'Hollywood Spectra is safe, effective Q-switch technology for brow tattoo removal. Under cosmetologist and dermatologist supervision at Radeski.')],
      [L('Hollywood Spectra asl uskunasi', 'Оригинальное оборудование Hollywood Spectra', 'Original Hollywood Spectra device'), L('Pigment turi bo\'yicha individual sozlash', 'Индивидуальная настройка по типу пигмента', 'Individual settings by pigment type'), L('Tiklanish kuzatuvi', 'Контроль заживления', 'Healing monitoring')],
    ),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Qosh tatuirashni lazer bilan yo\'qotish (1 seans)', 'Лазерное удаление татуажа бровей (1 сеанс)', 'Laser eyebrow tattoo removal (1 session)'), value: L('400 000 so\'m', '400 000 сум', '400,000 UZS') }] },
    recoverySection(
      [L('24 soat suvga tushmang', 'Не мочите 24 часа', 'No water contact for 24 hours'), L('Qichishni bosmang, qarovsiz qoldirmang', 'Не чешите, не сдирайте корочку', 'Do not scratch or pick scabs'), L('SPF 50+ qosh atrofiga', 'SPF 50+ вокруг бровей', 'SPF 50+ around brows'), L('Keyingi seansgacha quyoshdan saqlaning', 'Избегайте солнца до следующего сеанса', 'Avoid sun until next session')],
      [L('Homiladorlik va emizish', 'Беременность и лактация', 'Pregnancy and breastfeeding'), L('Faol herpes', 'Активный герпес', 'Active herpes'), L('Yaqinda qilingan tatuirash (4 haftadan kam)', 'Недавний татуаж (менее 4 недель)', 'Recent tattoo (less than 4 weeks)'), L('Keloid ehtimoli yuqori', 'Высокий риск келоидов', 'High keloid risk')],
    ),
    {
      id: 'faq',
      title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'),
      faq: [
        { question: L('Bir seansda to\'liq yo\'qoladimi?', 'Удалится ли полностью за один сеанс?', 'Will it be fully removed in one session?'), answer: L('Yo\'q. Pigment bosqichma-bosqich ochiladi. Odatda 3–6 seans kerak.', 'Нет. Пигмент осветляется поэтапно. Обычно нужно 3–6 сеансов.', 'No. Pigment lightens gradually. Usually 3–6 sessions needed.') },
        { question: L('Qosh tuklari zararlanadimi?', 'Пострадают ли волоски бровей?', 'Will brow hairs be damaged?'), answer: L('To\'g\'ri protokolda qosh tuklari saqlanadi. Ba\'zi tuklar vaqtincha tushishi mumkin.', 'При правильном протоколе волоски сохраняются. Некоторые могут временно выпасть.', 'With proper protocol, hairs are preserved. Some may temporarily shed.') },
        { question: L('Og\'riqlimi?', 'Болезненно ли?', 'Is it painful?'), answer: L('Yengil og\'riq hissi bo\'ladi. Mahalliy behushlik kremi yordam beradi.', 'Есть лёгкая боль. Помогает местный обезболивающий крем.', 'Mild pain occurs. Topical anesthetic cream helps.') },
        { question: L('Qaysi ranglar tezroq ketadi?', 'Какие цвета удаляются быстрее?', 'Which colors fade faster?'), answer: L('Qora va jigarrang tezroq. Ko\'k, yashil va qizil ko\'proq seans talab qiladi.', 'Чёрный и коричневый быстрее. Синий, зелёный и красный требуют больше сеансов.', 'Black and brown fade faster. Blue, green and red need more sessions.') },
        { question: L('Keyin yangi tatuirash mumkinmi?', 'Можно ли сделать новый татуаж после?', 'Can I get new tattoo after?'), answer: L('Ha, to\'liq tiklanishdan keyin (3–6 oy). Shifokor bilan maslahatlashing.', 'Да, после полного заживления (3–6 месяцев). Проконсультируйтесь с врачом.', 'Yes, after full healing (3–6 months). Consult your physician.') },
      ],
    },
  ],
};

// PLACEHOLDER_NEXT_SERVICES

const PROMO_LAZER_EPILYATSIYA: PromoPageContent = {
  sections: [
    {
      id: 'overview',
      title: L('Xizmat haqida', 'Об услуге', 'About the service'),
      paragraphs: [
        L('Aleksandrit lazer epilyatsiyasi — istalmagan tuklarni folikula darajasida yo\'q qiluvchi zamonaviy usul. Radeski klinikasida oyoqlar uchun samarali, og\'riqsiz va uzoq muddatli natija beruvchi protokol qo\'llaniladi.', 'Александритовая лазерная эпиляция — современный метод удаления нежелательных волос на уровне фолликула. В Radeski эффективный, безболезненный протокол для ног с долгосрочным результатом.', 'Alexandrite laser epilation removes unwanted hair at the follicle level. At Radeski, an effective, comfortable leg protocol delivers long-lasting results.'),
        L('Lazer nur melaninni absorb qiladi va folikulani zararlaydi. Bir necha seansdan keyin tuklar sekin o\'sadi yoki butunlay yo\'qoladi. Sovitish tizimi terini himoya qiladi.', 'Лазерное излучение поглощается меланином и повреждает фолликул. После нескольких сеансов волосы растут медленнее или исчезают. Система охлаждения защищает кожу.', 'Laser energy is absorbed by melanin and damages the follicle. After several sessions hair grows slower or disappears. Cooling protects the skin.'),
      ],
    },
    {
      id: 'indications',
      title: L('Ko\'rsatmalar', 'Показания', 'Indications'),
      subsections: [
        { title: L('Kim uchun?', 'Кому подходит?', 'Who is it for?'), paragraphs: [L('Oyoq va boshqa zonalar uchun istalmagan tuklardan xalos bo\'lmoqchi bo\'lganlar.', 'Желающие избавиться от нежелательных волос на ногах и других зонах.', 'Those seeking permanent hair reduction on legs and other areas.')], bullets: [L('Qalin va qora tuklar', 'Густые тёмные волосы', 'Thick dark hair'), L('Tirnoq atrofi qichish', 'Раздражение после бритья', 'Irritation after shaving'), L('Ingrown tuklar', 'Вросшие волосы', 'Ingrown hairs')] },
        { title: L('Qachon murojaat?', 'Когда обращаться?', 'When to visit?'), paragraphs: [L('Yozdan oldin yoki doimiy epilyatsiya rejasi boshlash uchun.', 'Перед летом или для начала курса постоянной эпиляции.', 'Before summer or to start a permanent hair removal course.')], bullets: [L('Har 4–6 haftada seans', 'Сеанс каждые 4–6 недель', 'Session every 4–6 weeks')] },
      ],
    },
    {
      id: 'protocol',
      title: L('Muolaja bosqichlari', 'Этапы', 'Procedure steps'),
      steps: [
        { title: L('1. Konsultatsiya', '1. Консультация', '1. Consultation'), description: L('Teri va tuk turi baholanadi.', 'Оцениваются кожа и тип волос.', 'Skin and hair type assessed.'), details: [L('Zona va seanslar soni belgilanadi', 'Определяется зона и число сеансов', 'Zone and session count set')] },
        { title: L('2. Tayyorgarlik', '2. Подготовка', '2. Prep'), description: L('Tuklar 1–2 mm qisqartiriladi, teri tozalanadi.', 'Волосы укорочены до 1–2 мм, кожа очищена.', 'Hair trimmed to 1–2 mm, skin cleansed.'), details: [L('24 soat oldin quyoshdan saqlaning', 'Избегайте солнца за 24 часа', 'Avoid sun 24 hours before')] },
        { title: L('3. Lazer seansi', '3. Лазерный сеанс', '3. Laser session'), description: L('Aleksandrit lazer impulslari zona bo\'ylab qo\'llaniladi.', 'Импульсы александритового лазера по зоне.', 'Alexandrite pulses applied to the zone.'), details: [L('Sovitish tizimi og\'riqni kamaytiradi', 'Охлаждение снижает боль', 'Cooling reduces discomfort'), L('20–40 daqiqa', '20–40 минут', '20–40 minutes')] },
        { title: L('4. Parvarish', '4. Уход', '4. Aftercare'), description: L('Tinchlantiruvchi krem, SPF tavsiyasi.', 'Успокаивающий крем, рекомендация SPF.', 'Soothing cream, SPF advice.'), details: [L('Keyingi seans sanasi belgilanadi', 'Назначается дата следующего сеанса', 'Next session scheduled')] },
      ],
    },
    clinicAdvantagesSection(L('Aleksandrit lazer', 'Александритовый лазер', 'Alexandrite laser'), [L('Radeski klinikasida aleksandrit lazer — yorug\' teri va nozik tuklar uchun samarali.', 'В Radeski александритовый лазер эффективен для светлой кожи и тонких волос.', 'At Radeski, alexandrite laser is effective for fair skin and fine hair.')], [L('Integratsiyalangan sovitish', 'Встроенное охлаждение', 'Integrated cooling'), L('Malakali operator nazorati', 'Контроль квалифицированного оператора', 'Qualified operator supervision')]),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Ayollar oyoqlari (to\'liq)', 'Женские ноги полностью', 'Women\'s legs full'), value: L('550 000 so\'m', '550 000 сум', '550,000 UZS') }, { label: L('Oyoq to\'piqdan tizzagacha (50%)', 'Ноги от стопы до колена', 'Legs ankle to knee'), value: L('300 000 so\'m', '300 000 сум', '300,000 UZS') }] },
    recoverySection([L('48 soat issiq vannadan saqlaning', 'Избегайте горячей ванны 48 часов', 'No hot bath 48 hours'), L('SPF 30+', 'SPF 30+', 'SPF 30+'), L('Qizilishda sovuq kompress', 'Холодный компресс при покраснении', 'Cold compress if redness')], [L('Homiladorlik', 'Беременность', 'Pregnancy'), L('Faol herpes', 'Активный герпес', 'Active herpes'), L('Yaqinda quyosh kuyishi', 'Недавний загар', 'Recent tanning')]),
    { id: 'faq', title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'), faq: [{ question: L('Nechta seans kerak?', 'Сколько сеансов?', 'How many sessions?'), answer: L('Odatda 6–8 seans, tuk turi va zonaga bog\'liq.', 'Обычно 6–8 сеансов, зависит от типа волос и зоны.', 'Usually 6–8 sessions depending on hair and zone.') }, { question: L('Og\'riqlimi?', 'Болезненно?', 'Painful?'), answer: L('Yengil qisqich hissi. Sovitish yordam beradi.', 'Лёгкое покалывание. Охлаждение помогает.', 'Mild pinching. Cooling helps.') }] },
  ],
};

const PROMO_SOCH_MEZOTERAPIYA: PromoPageContent = {
  sections: [
    { id: 'overview', title: L('Xizmat haqida', 'Об услуге', 'About'), paragraphs: [L('Soch mezoterapiyasi — vitamin, aminokislota va peptid komplekslarini bosh terisiga mikroinjektsiya qilish. Folikulalar oziqlantiriladi, to\'kilish kamayadi.', 'Мезотерапия волос — микроинъекции витаминных и пептидных комплексов в кожу головы. Фолликулы питаются, выпадение снижается.', 'Hair mesotherapy delivers vitamin and peptide complexes into the scalp. Follicles are nourished, shedding decreases.'), L('Radeski trixologiya markazida individual kokteyl va trixoskopik nazorat bilan amalga oshiriladi.', 'В трихологическом центре Radeski с индивидуальным коктейлем и трихоскопическим контролем.', 'At Radeski trichology center with individual cocktail and trichoscopy monitoring.')] },
    { id: 'indications', title: L('Ko\'rsatmalar', 'Показания', 'Indications'), subsections: [{ title: L('Belgilar', 'Симптомы', 'Symptoms'), paragraphs: [L('Soch sifati yomonlashganda.', 'При ухудшении качества волос.', 'When hair quality worsens.')], bullets: [L('Soch to\'kilishi', 'Выпадение волос', 'Hair loss'), L('Soch siyraklashishi', 'Истончение', 'Thinning'), L('Quruq bosh terisi', 'Сухая кожа головы', 'Dry scalp')] }] },
    { id: 'protocol', title: L('Bosqichlar', 'Этапы', 'Steps'), steps: [{ title: L('1. Trixoskopiya', '1. Трихоскопия', '1. Trichoscopy'), description: L('Folikul holati baholanadi.', 'Оценка состояния фолликулов.', 'Follicle assessment.'), details: [] }, { title: L('2. Mezoterapiya', '2. Мезотерапия', '2. Mesotherapy'), description: L('Bosh terisiga mikroinjektsiyalar.', 'Микроинъекции в кожу головы.', 'Microinjections into scalp.'), details: [L('400 000 – 480 000 so\'m oralig\'i', '400 000 – 480 000 сум', '400,000 – 480,000 UZS')] }, { title: L('3. Kurs', '3. Курс', '3. Course'), description: L('Odatda 4–8 seans, 2 hafta oralig\'ida.', 'Обычно 4–8 сеансов с интервалом 2 недели.', 'Usually 4–8 sessions every 2 weeks.'), details: [] }] },
    clinicAdvantagesSection(L('Trixologiya markazi', 'Трихологический центр', 'Trichology center'), [L('Kompyuter trixoskopiyasi va AI tahlil imkoniyati.', 'Компьютерная трихоскопия и ИИ-анализ.', 'Computer trichoscopy and AI analysis.')], [L('Sertifikatlangan trixolog', 'Сертифицированный трихолог', 'Certified trichologist')]),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Soch mezoterapiyasi (1 seans)', 'Мезотерапия волос (1 сеанс)', 'Hair mesotherapy (1 session)'), value: L('400 000 – 480 000 so\'m', '400 000 – 480 000 сум', '400,000 – 480,000 UZS'), note: L('Preparat turiga bog\'liq', 'Зависит от препарата', 'Depends on product') }] },
    recoverySection([L('24 soat bosh yuvmay turing', 'Не мойте голову 24 часа', 'No hair wash 24 hours'), L('Sauna va basseyn 3 kun', 'Сауна и бассейн 3 дня', 'No sauna/pool 3 days')], [L('Faol infeksiya', 'Активная инфекция', 'Active infection'), L('Qon ivish buzilishi', 'Нарушения свёртываемости', 'Coagulation disorders')]),
    { id: 'faq', title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'), faq: [{ question: L('Qachon natija?', 'Когда результат?', 'When results?'), answer: L('2–3 seansdan keyin seziladi, to\'liq kursdan keyin mustahkamlanadi.', 'Заметно после 2–3 сеансов, закрепляется после курса.', 'Noticeable after 2–3 sessions, consolidated after full course.') }] },
  ],
};

const PROMO_FOTOTERAPIYA: PromoPageContent = {
  sections: [
    { id: 'overview', title: L('Xizmat haqida', 'Об услуге', 'About'), paragraphs: [L('Fototerapiya (UVB 311 nm) — surunkali teri kasalliklarini dori-darmonsiz davolash usuli. Psoriaz, vitiligo va ekzema uchun klinikada tasdiqlangan protokol.', 'Фототерапия (УФB 311 нм) — лечение хронических кожных заболеваний без системных препаратов. Клинически подтверждённый протокол при псориазе, витилиго и экземе.', 'Phototherapy (UVB 311 nm) treats chronic skin conditions without systemic drugs. Clinically proven for psoriasis, vitiligo and eczema.'), L('Tor UVB nurlar immun javobni tartibga soladi va yallig\'lanishni kamaytiradi.', 'Узкополосное УФB регулирует иммунный ответ и снижает воспаление.', 'Narrow-band UVB regulates immune response and reduces inflammation.')] },
    { id: 'indications', title: L('Ko\'rsatmalar', 'Показания', 'Indications'), subsections: [{ title: L('Kasalliklar', 'Заболевания', 'Conditions'), paragraphs: [L('Surunkali teri kasalliklari uchun kursli fototerapiya protokoli qo\'llaniladi.', 'Для хронических кожных заболеваний применяется курсовая фототерапия.', 'A course-based phototherapy protocol is used for chronic skin conditions.')], bullets: [L('Psoriaz plakalari', 'Бляшечный псориаз', 'Plaque psoriasis'), L('Vitiligo', 'Витилиго', 'Vitiligo'), L('Atopik dermatit', 'Атопический дерматит', 'Atopic dermatitis')] }] },
    { id: 'protocol', title: L('Bosqichlar', 'Этапы', 'Steps'), steps: [{ title: L('1. Dermatolog ko\'rigi', '1. Осмотр дерматолога', '1. Dermatologist exam'), description: L('Kasallik faolligi baholanadi.', 'Оценка активности заболевания.', 'Disease activity assessed.'), details: [] }, { title: L('2. UVB seansi', '2. Сеанс УФB', '2. UVB session'), description: L('Kabinetda maxsus apparatda 5–15 daqiqa.', '5–15 минут в специальном кабинете.', '5–15 minutes in dedicated cabinet.'), details: [L('70 000 so\'mdan boshlab', 'От 70 000 сум', 'From 70,000 UZS')] }, { title: L('3. Kurs', '3. Курс', '3. Course'), description: L('Haftada 2–3 marta, 15–30 seans.', '2–3 раза в неделю, 15–30 сеансов.', '2–3 times weekly, 15–30 sessions.'), details: [] }] },
    clinicAdvantagesSection(L('UVB 311 nm kabineti', 'Кабинет УФB 311 нм', 'UVB 311 nm cabinet'), [L('Tor spektrli UVB — minimal yon ta\'sir.', 'Узкополосное УФB — минимальные побочные эффекты.', 'Narrow-band UVB — minimal side effects.')], [L('Dermatolog nazorati', 'Контроль дерматолога', 'Dermatologist supervision')]),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Fototerapiya (1 seans)', 'Фототерапия (1 сеанс)', 'Phototherapy (1 session)'), value: L('70 000 so\'m', '70 000 сум', '70,000 UZS') }, { label: L('6 seans paketi', 'Пакет 6 сеансов', '6-session package'), value: L('300 000 so\'m', '300 000 сум', '300,000 UZS') }] },
    recoverySection([L('Seansdan keyin namlantiruvchi krem', 'Увлажняющий крем после сеанса', 'Moisturizer after session'), L('Qo\'shimcha quyoshdan saqlaning', 'Дополнительная защита от солнца', 'Extra sun protection')], [L('Teri saratoni tarixi', 'История рака кожи', 'Skin cancer history'), L('Fotosensitiv dorilar', 'Фотосенсибилизирующие препараты', 'Photosensitizing drugs')]),
    { id: 'faq', title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'), faq: [{ question: L('Xavflimi?', 'Опасно ли?', 'Is it safe?'), answer: L('Dermatolog nazoratida xavfsiz. Doza individual hisoblanadi.', 'Безопасно под контролем дерматолога. Доза индивидуальна.', 'Safe under dermatologist supervision. Dose is individualized.') }] },
  ],
};

const PROMO_SOCH_EKISH: PromoPageContent = {
  sections: [
    { id: 'overview', title: L('Xizmat haqida', 'Об услуге', 'About'), paragraphs: [L('FUE soch ekish — folikul birma-bir olib ko\'chiriladigan zamonaviy transplantatsiya. Tabiiy chiziq, yuqori zichlik va minimal chandiqlar.', 'FUE пересадка волос — современная трансплантация с пофолликулярным изъятием. Естественная линия, высокая плотность, минимальные рубцы.', 'FUE hair transplant moves follicles individually. Natural hairline, high density, minimal scarring.'), L('Radeski trixologiya markazida to\'liq konsultatsiya, reja va operatsiyadan keyin nazorat.', 'В трихологическом центре Radeski полная консультация, план и послеоперационный контроль.', 'Full consultation, planning and post-op monitoring at Radeski trichology center.')] },
    { id: 'indications', title: L('Ko\'rsatmalar', 'Показания', 'Indications'), subsections: [{ title: L('Kim uchun?', 'Кому подходит?', 'Who for?'), paragraphs: [L('Doimiy soch yo\'qolishi va zichlik pasayishi bo\'lgan bemorlar uchun.', 'Для пациентов с постоянным выпадением волос и снижением плотности.', 'For patients with persistent hair loss and reduced density.')], bullets: [L('Androgenetik alopeciya', 'Андрогенетическая алопеция', 'Androgenetic alopecia'), L('Tepa va cho\'kka soch yo\'qolishi', 'Потеря на макушке и темени', 'Crown and vertex loss'), L('Chandiqlar va izlar', 'Рубцы и шрамы', 'Scars')] }] },
    { id: 'protocol', title: L('Bosqichlar', 'Этапы', 'Steps'), steps: [{ title: L('1. Konsultatsiya va trixoskopiya', '1. Консультация и трихоскопия', '1. Consultation & trichoscopy'), description: L('Donor va qabul zona baholanadi.', 'Оценка донорской и реципиентной зон.', 'Donor and recipient zones assessed.'), details: [] }, { title: L('2. FUE operatsiyasi', '2. Операция FUE', '2. FUE procedure'), description: L('Mahalliy behushlik ostida graftlar ko\'chiriladi.', 'Пересадка графтов под местной анестезией.', 'Grafts transplanted under local anesthesia.'), details: [L('Bir kunda 2000–4000 graft', '2000–4000 графтов за день', '2000–4000 grafts per day')] }, { title: L('3. Tiklanish', '3. Восстановление', '3. Recovery'), description: L('7–14 kun dam olish, dori va parvarish.', '7–14 дней отдыха, препараты и уход.', '7–14 days rest, medication and care.'), details: [L('3–6 oyda natija ko\'rinadi', 'Результат через 3–6 месяцев', 'Results in 3–6 months')] }] },
    clinicAdvantagesSection(L('FUE transplantatsiya', 'FUE трансплантация', 'FUE transplant'), [L('Tajribali jarroh va trixolog jamoasi.', 'Опытная команда хирурга и трихолога.', 'Experienced surgeon and trichologist team.')], [L('Individual graft rejalashtirish', 'Индивидуальное планирование графтов', 'Individual graft planning')]),
    { id: 'pricing', title: L('Narxlar', 'Цены', 'Pricing'), tiers: [{ label: L('Soch ekish (FUE)', 'Пересадка волос (FUE)', 'Hair transplant (FUE)'), value: L('7 000 000 – 12 000 000 so\'m', '7 000 000 – 12 000 000 сум', '7,000,000 – 12,000,000 UZS'), note: L('Graft soni va zona hajmiga bog\'liq', 'Зависит от числа графтов и зоны', 'Depends on graft count and zone') }] },
    recoverySection([L('Birinchi 10 kun ehtiyotkor yuvish', 'Осторожное мытьё первые 10 дней', 'Gentle washing first 10 days'), L('Sport va og\'ir ish 2 hafta cheklash', 'Ограничение спорта 2 недели', 'Limit sports 2 weeks')], [L('Faol infeksiya', 'Активная инфекция', 'Active infection'), L('Qon ivish buzilishi', 'Нарушения свёртываемости', 'Coagulation disorders')]),
    { id: 'faq', title: L('Tez-tez so\'raladigan savollar', 'Часто задаваемые вопросы', 'Frequently asked questions'), faq: [{ question: L('Natija qachon?', 'Когда результат?', 'When results?'), answer: L('3–6 oyda o\'sish, 12 oyda to\'liq natija.', 'Рост через 3–6 месяцев, полный результат за 12 месяцев.', 'Growth at 3–6 months, full result at 12 months.') }, { question: L('Og\'riqlimi?', 'Болезненно?', 'Painful?'), answer: L('Mahalliy behushlik bilan og\'riq minimal.', 'При местной анестезии боль минимальна.', 'Minimal pain with local anesthesia.') }] },
  ],
};

export const PROMO_PAGE_CATALOG: Record<string, PromoPageContent> = {
  'promo-dermataskopiya': PROMO_DERMATASKOPIYA,
  'promo-ipl': PROMO_IPL,
  'promo-podologiya': PROMO_PODOLOGIYA,
  'promo-karbon-peeling': PROMO_KARBON_PEELING,
  'promo-co2-lazer': PROMO_CO2_LAZER,
  'promo-qosh-tatu': PROMO_QOSH_TATU,
  'promo-lazer-epilyatsiya': PROMO_LAZER_EPILYATSIYA,
  'promo-soch-mezoterapiya': PROMO_SOCH_MEZOTERAPIYA,
  'promo-fototerapiya': PROMO_FOTOTERAPIYA,
  'promo-soch-ekish': PROMO_SOCH_EKISH,
};

/** Batafsil sahifada ko'rsatish uchun ortiqcha bo'limlarni qisqartiradi */
export function streamlinePromoSections(sections: PromoSection[]): PromoSection[] {
  return sections
    .filter((section) => section.id !== 'pricing')
    .map((section) => {
      if (section.id === 'overview' && section.paragraphs && section.paragraphs.length > 2) {
        return { ...section, paragraphs: section.paragraphs.slice(0, 2) };
      }

      if (section.id === 'indications' && section.subsections && section.subsections.length > 1) {
        const mergedBullets = section.subsections.flatMap((sub) => sub.bullets ?? []);
        return {
          ...section,
          subsections: [
            {
              title: section.subsections[0].title,
              bullets: mergedBullets.slice(0, 8),
            },
          ],
        };
      }

      if (section.id === 'faq' && section.faq && section.faq.length > 4) {
        return { ...section, faq: section.faq.slice(0, 4) };
      }

      return section;
    });
}

export function getPromoPageContent(promoId: string): PromoPageContent | null {
  const raw = PROMO_PAGE_CATALOG[promoId];
  if (!raw) return null;
  return { sections: streamlinePromoSections(raw.sections) };
}

export function getPromoLocalizedText(text: PromoLocalizedText, locale: 'uz' | 'ru' | 'en'): string {
  return text[locale] || text.uz;
}
