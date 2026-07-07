interface LocalizedConditionText {
  uz: string;
  ru: string;
  en: string;
}

interface LocalizedConditionSection {
  title: LocalizedConditionText;
  description: LocalizedConditionText;
}

function L(uz: string, ru: string, en: string): LocalizedConditionText {
  return { uz, ru, en };
}

function S(
  titleUz: string,
  titleRu: string,
  titleEn: string,
  descUz: string,
  descRu: string,
  descEn: string,
): LocalizedConditionSection {
  return { title: L(titleUz, titleRu, titleEn), description: L(descUz, descRu, descEn) };
}

type WhyRadeskiBlock = {
  aboutTitle: LocalizedConditionText;
  aboutOverview: LocalizedConditionText;
  aboutSections: LocalizedConditionSection[];
  aboutFooter: LocalizedConditionText;
};

export const CONDITION_WHY_RADESKI: Record<string, WhyRadeskiBlock> = {
  'cat-dermatologiya-psoriaz': {
    aboutTitle: L(
      "Nima uchun psoriaz davolanishini Radeski Skin Clinic'ga ishonish kerak?",
      'Почему лечение псориаза стоит доверить Radeski Skin Clinic?',
      'Why trust Radeski Skin Clinic for psoriasis treatment?',
    ),
    aboutOverview: L(
      "Psoriaz — bu faqat belgilarni yo'qotish emas, balki o'qilgan, kompleks va zamonaviy yondashuvni talab qiladigan surunkali kasallik. Radeski Skin Clinic'da aynan shunday yondashuvni taklif qilamiz.",
      'Псориаз — это хроническое заболевание, которое требует не просто снятия симптомов, а грамотного, комплексного и современного подхода. Именно такой подход мы предлагаем в Radeski Skin Clinic.',
      'Psoriasis is a chronic condition that needs more than symptom relief — it requires a skilled, comprehensive, modern approach. That is exactly what we offer at Radeski Skin Clinic.',
    ),
    aboutSections: [
      S(
        'Eksklyuziv Daavlin uskunasi',
        'Эксклюзивное оборудование Daavlin',
        'Exclusive Daavlin equipment',
        "Klinikamizda professional Daavlin apparatlari o'rnatilgan — psoriazni davolashda fototerapiyaning dunyo bo'ylab tan olingan standarti. Zamonaviy texnologiyalar kasallik o'choqlariga samarali ta'sir qilish, yallig'lanishni kamaytirish va uzoq muddatli remissiyaga erishish imkonini beradi.",
        'В нашей клинике установлены профессиональные аппараты Daavlin — признанный мировой стандарт фототерапии для лечения псориаза. Современные технологии позволяют эффективно воздействовать на очаги заболевания, уменьшать воспаление и добиваться длительной ремиссии.',
        'Our clinic is equipped with professional Daavlin phototherapy systems — a globally recognized standard for psoriasis care. Advanced technology effectively targets lesions, reduces inflammation and supports long-lasting remission.',
      ),
      S(
        'Zamonaviy xalqaro davolash protokollari',
        'Современные международные протоколы лечения',
        'Modern international treatment protocols',
        "Biz ishonchli terapiya usullaridan foydalanamiz va har bir bemor uchun kasallik shakli, og'irligi va hamroh omillarni hisobga olgan holda individual davolash dasturini tanlaymiz.",
        'Мы используем доказательные методы терапии и подбираем программу лечения индивидуально для каждого пациента с учетом формы, тяжести заболевания и сопутствующих факторов.',
        'We apply evidence-based therapies and tailor each treatment program to disease form, severity and accompanying factors.',
      ),
      S(
        'Katta amaliy tajriba',
        'Большой практический опыт',
        'Extensive clinical experience',
        "Yillar davomida biz ko'plab bemorlarga barqaror remissiyaga erishish va hayot sifatini sezilarli darajada yaxshilashda yordam berdik.",
        'За годы работы мы помогли большому количеству пациентов добиться стойкой ремиссии и значительно улучшить качество жизни.',
        'Over the years we have helped many patients achieve stable remission and significantly improve quality of life.',
      ),
      S(
        'Shifokorlarning yuqori malakasi',
        'Высокая квалификация врачей',
        'Highly qualified physicians',
        "Dermatologlarimiz muntazam o'qishdan o'tadi, xalqaro stajirovkalar va malaka oshirish kurslarida qatnashadi hamda psoriazni diagnostika qilish va davolashning eng zamonaviy usullarini qo'llaydi.",
        'Наши дерматологи регулярно проходят обучение, международные стажировки и повышают свою квалификацию, чтобы применять самые современные методы диагностики и лечения псориаза.',
        'Our dermatologists train continuously, complete international placements and apply the latest methods in psoriasis diagnosis and treatment.',
      ),
      S(
        'Kompleks yondashuv',
        'Комплексный подход',
        'Comprehensive approach',
        "Biz faqat fototerapiya bilan cheklanmaymiz. Davolash mahalliy terapiya, sistemli preparatlar, teri parvarishi va turmush tarzi bo'yicha tavsiyalar bilan to'ldiriladi.",
        'Мы не ограничиваемся только фототерапией. Лечение дополняется наружной терапией, системными препаратами, рекомендациями по уходу за кожей и образу жизни.',
        'Treatment goes beyond phototherapy alone — it includes topical therapy, systemic medications when needed, skin-care guidance and lifestyle recommendations.',
      ),
      S(
        'Doimiy kuzatuv',
        'Постоянное наблюдение',
        'Ongoing follow-up',
        "Biz bemorni davolashning barcha bosqichlarida kuzatamiz, kasallik dinamikasini nazorat qilamiz va maksimal natijaga erishish uchun terapiyani tuzatamiz.",
        'Мы сопровождаем пациента на всех этапах лечения, контролируем динамику заболевания и корректируем терапию для достижения максимально возможного результата.',
        'We support patients through every stage of care, monitor disease dynamics and adjust therapy to achieve the best possible outcome.',
      ),
    ],
    aboutFooter: L(
      "Radeski Skin Clinic'da biz psoriaz belgilarini kamaytirish bilan cheklanmaymiz — bemorga maksimal uzoq remissiyaga erishish, teri salomatligini saqlash va o'ziga ishonchni qaytarishga yordam berishga intilamiz.",
      'В Radeski Skin Clinic мы стремимся не просто уменьшить проявления псориаза, а помочь пациенту достичь максимально длительной ремиссии, сохранить здоровье кожи и вернуть уверенность в себе.',
      'At Radeski Skin Clinic we aim not only to reduce psoriasis symptoms, but to help patients achieve the longest possible remission, protect skin health and restore confidence.',
    ),
  },
  'cat-dermatologiya-vitiligo': {
    aboutTitle: L(
      "Nima uchun vitiligo davolanishini Radeski Skin Clinic'ga ishonish kerak?",
      'Почему лечение витилиго стоит доверить Radeski Skin Clinic?',
      'Why trust Radeski Skin Clinic for vitiligo treatment?',
    ),
    aboutOverview: L(
      "Vitiligo — aniq diagnostika, zamonaviy davolash usullari va shifokorning katta tajribasini talab qiladigan surunkali kasallik. Radeski Skin Clinic'da biz xalqaro terapiya standartlaridan foydalanamiz va bemorlarga pigmentatsiyani tiklash hamda kasallikning uzoq muddatli barqarorligiga erishishda yordam beramiz.",
      'Витилиго — это хроническое заболевание, требующее точной диагностики, современных методов лечения и большого опыта врача. В Radeski Skin Clinic мы используем международные стандарты терапии и помогаем пациентам добиться восстановления пигментации и длительной стабилизации заболевания.',
      'Vitiligo is a chronic disease that requires accurate diagnosis, modern treatment and substantial physician experience. At Radeski Skin Clinic we follow international therapy standards and help patients restore pigmentation and achieve long-term disease stability.',
    ),
    aboutSections: [
      S(
        'Eksklyuziv Daavlin uskunasi',
        'Эксклюзивное оборудование Daavlin',
        'Exclusive Daavlin equipment',
        "Klinikamizda vitiligo davolash asl Daavlin apparatlarida o'tkaziladi — tibbiy fototerapiya sohasidagi dunyo yetakchilaridan biri. Tor to'lqinli UVB fototerapiyasi (311 nm) vitiligo davolashning dunyo bo'ylab eng samarali va tan olingan usullaridan biridir.",
        'В нашей клинике лечение витилиго проводится на оригинальных аппаратах Daavlin — одного из мировых лидеров в области медицинской фототерапии. Узкополосная UVB-фототерапия (311 нм) является одним из наиболее эффективных и признанных во всем мире методов лечения витилиго.',
        'Vitiligo treatment at our clinic uses original Daavlin systems — a world leader in medical phototherapy. Narrow-band UVB phototherapy (311 nm) is one of the most effective and globally recognized vitiligo treatments.',
      ),
      S(
        'Zamonaviy xalqaro davolash protokollari',
        'Современные международные протоколы лечения',
        'Modern international treatment protocols',
        "Biz ishonchli terapiya usullarini qo'llaymiz, fototerapiyani mahalliy davolash va boshqa zamonaviy yondashuvlar bilan birlashtiramiz. Har bir bemor uchun kasallik shakli, davomiyligi va o'choqlar joylashuvini hisobga olgan holda individual dastur tuziladi.",
        'Мы применяем доказательные методы терапии, сочетая фототерапию с наружным лечением и другими современными подходами. Для каждого пациента разрабатывается индивидуальная программа лечения с учетом формы, длительности заболевания и локализации очагов.',
        'We use evidence-based methods, combining phototherapy with topical treatment and other modern approaches. Each patient receives an individualized program based on disease form, duration and lesion location.',
      ),
      S(
        'Muvaffaqiyatli davolashning katta tajribasi',
        'Большой успешный опыт лечения',
        'Proven treatment success',
        "Yillar davomida biz ko'plab bemorlarga teri pigmentatsiyasini tiklash, kasallikning rivojlanishini to'xtatish va hayot sifatini sezilarli yaxshilashda yordam berdik.",
        'За годы работы мы помогли большому количеству пациентов добиться восстановления пигментации кожи, остановить прогрессирование заболевания и значительно улучшить качество жизни.',
        'Over the years we have helped many patients restore skin pigmentation, halt disease progression and significantly improve quality of life.',
      ),
      S(
        'Shifokorlarning doimiy malaka oshirishi',
        'Постоянное обучение врачей',
        'Continuous physician education',
        "Dermatologlarimiz muntazam xalqaro stajirovkalardan o'tadi, yetakchi mutaxassislardan o'rganadi va vitiligo davolashning eng zamonaviy usullarini amaliyotga joriy etadi.",
        'Наши дерматологи регулярно проходят международные стажировки, обучаются у ведущих специалистов и внедряют в практику самые современные методы лечения витилиго.',
        'Our dermatologists regularly complete international placements, learn from leading specialists and implement the latest vitiligo treatment methods.',
      ),
      S(
        'Kompleks yondashuv',
        'Комплексный подход',
        'Comprehensive approach',
        "Biz faqat fototerapiya bilan cheklanmaymiz. Kerak bo'lsa qo'shimcha tekshiruvlar o'tkaziladi, hamroh kasalliklar va vitiligo kechishiga ta'sir qiluvchi omillar aniqlanadi — bu davolash samaradorligini oshiradi.",
        'Мы не ограничиваемся только фототерапией. При необходимости проводится дополнительное обследование, выявляются возможные сопутствующие заболевания и факторы, влияющие на течение витилиго, что позволяет повысить эффективность лечения.',
        'We go beyond phototherapy alone. When needed, additional evaluation identifies comorbidities and factors affecting vitiligo course, improving treatment effectiveness.',
      ),
      S(
        'Har bir bemorga individual kuzatuv',
        'Индивидуальное сопровождение каждого пациента',
        'Individual patient support',
        "Terapiya kursi davomida shifokor davolash natijalarini baholaydi, pigment tiklanish jarayonini nazorat qiladi va maksimal effekt uchun davolash sxemasini tuzatadi.",
        'На протяжении всего курса терапии врач оценивает результаты лечения, контролирует процесс восстановления пигментации и при необходимости корректирует схему лечения для достижения максимально возможного эффекта.',
        'Throughout the course, the physician evaluates results, monitors repigmentation and adjusts the treatment plan when needed for maximum effect.',
      ),
    ],
    aboutFooter: L(
      "Radeski Skin Clinic — ilg'or texnologiyalar, zamonaviy Daavlin uskunalari, xalqaro davolash protokollari va yuqori malakali shifokorlar uyg'unligi. Biz bemorlarimizga tabiiy teri rangini qaytarish, kasallik rivojlanishini to'xtatish va hayot sifatini oshirish uchun barcha imkoniyatlarni ishga solamiz.",
      'Radeski Skin Clinic — это сочетание передовых технологий, современного оборудования Daavlin, международных протоколов лечения и высокой квалификации врачей. Мы делаем все возможное, чтобы помочь нашим пациентам вернуть естественный цвет кожи, остановить развитие заболевания и повысить качество жизни.',
      'Radeski Skin Clinic combines advanced technology, modern Daavlin equipment, international protocols and highly qualified physicians. We do everything possible to help patients restore natural skin color, stop disease progression and improve quality of life.',
    ),
  },
  'cat-dermatologiya-ekzema-va-atopik-dermatit': {
    aboutTitle: L(
      "Nima uchun ekzema va atopik dermatit davolanishini Radeski Skin Clinic'ga ishonish kerak?",
      'Почему лечение экземы и атопического дерматита стоит доверить Radeski Skin Clinic?',
      'Why trust Radeski Skin Clinic for eczema and atopic dermatitis treatment?',
    ),
    aboutOverview: L(
      "Ekzema va atopik dermatit — faqat belgilarni yo'qotish emas, balki kasallikni kompleks nazorat qilishni talab qiladigan surunkali yallig'lanish kasalliklari. Radeski Skin Clinic'da biz zamonaviy xalqaro diagnostika va davolash yondashuvlarini qo'llaymiz, bemorlarga uzoq muddatli remissiya va hayot sifatini yaxshilashda yordam beramiz.",
      'Экзема и атопический дерматит — это хронические воспалительные заболевания кожи, которые требуют не только устранения симптомов, но и комплексного контроля заболевания. В Radeski Skin Clinic мы применяем современные международные подходы к диагностике и лечению, помогая пациентам добиться длительной ремиссии и значительно улучшить качество жизни.',
      'Eczema and atopic dermatitis are chronic inflammatory skin diseases requiring comprehensive disease control, not just symptom relief. At Radeski Skin Clinic we apply modern international diagnostic and treatment approaches to help patients achieve lasting remission and better quality of life.',
    ),
    aboutSections: [
      S(
        'Zamonaviy xalqaro davolash protokollari',
        'Современные международные протоколы лечения',
        'Modern international treatment protocols',
        "Shifokorlarimiz ishonchli tibbiyot tamoyillariga muvofiq ishlaydi va ekzema hamda atopik dermatitni davolash bo'yicha dolzarb xalqaro tavsiyalardan foydalanadi.",
        'Наши врачи работают в соответствии с принципами доказательной медицины и используют актуальные международные рекомендации по лечению экземы и атопического дерматита.',
        'Our physicians follow evidence-based medicine and current international guidelines for eczema and atopic dermatitis care.',
      ),
      S(
        'Tajribali dermatologlar',
        'Опытные дерматологи',
        'Experienced dermatologists',
        "Klinika mutaxassislari muntazam xalqaro stajirovka va o'quv kurslarida qatnashadi, professional konferensiyalarda ishtirok etadi hamda bilim va ko'nikmalarini doimiy ravishda rivojlantiradi.",
        'Специалисты клиники регулярно проходят международные стажировки, обучения и участвуют в профессиональных конференциях, постоянно совершенствуя свои знания и навыки.',
        'Clinic specialists regularly attend international training and conferences, continuously advancing their knowledge and skills.',
      ),
      S(
        'Aniq diagnostika',
        'Точная диагностика',
        'Accurate diagnosis',
        "Biz nafaqat tashxisni, balki kuchayish sabablarini ham aniqlaymiz: teri to'siqining buzilishi, allergik omillar, infeksiyalar, kontakt tirnashuvchilar va kasallik kechishiga ta'sir qiluvchi boshqa holatlar.",
        'Мы определяем не только диагноз, но и возможные причины обострений: нарушения кожного барьера, аллергические факторы, инфекции, контактные раздражители и другие сопутствующие состояния, влияющие на течение заболевания.',
        'We identify not only the diagnosis but also flare triggers: skin barrier impairment, allergic factors, infections, contact irritants and other conditions affecting disease course.',
      ),
      S(
        'Har bir bemorga individual yondashuv',
        'Индивидуальный подход к каждому пациенту',
        'Individual approach for every patient',
        "Davolash sxemasi yosh, kasallik og'irligi, toshma joylashuvi, turmush tarzi va oldingi davolashni hisobga olgan holda shaxsan tuziladi.",
        'Схема лечения составляется персонально с учетом возраста, тяжести заболевания, локализации высыпаний, образа жизни и предыдущего лечения.',
        'Treatment plans are personalized based on age, severity, lesion location, lifestyle and prior therapy.',
      ),
      S(
        'Kompleks terapiya',
        'Комплексная терапия',
        'Comprehensive therapy',
        "Davolash zamonaviy mahalliy preparatlar, kerak bo'lsa sistemli terapiya, kundalik teri parvarishi, himoya to'siqini tiklash va qaytalanishning oldini olish bo'yicha tavsiyalarni o'z ichiga olishi mumkin.",
        'Лечение может включать современные наружные препараты, системную терапию при необходимости, рекомендации по ежедневному уходу за кожей, восстановлению защитного барьера и профилактике рецидивов.',
        'Care may include modern topical agents, systemic therapy when needed, daily skin-care guidance, barrier restoration and relapse prevention.',
      ),
      S(
        'Bemorni kasallikni boshqarishga o\'rgatish',
        'Обучение пациента контролю заболевания',
        'Patient education for disease control',
        "Biz terini qanday to'g'ri parvarish qilish, kuchayishga sabab bo'ladigan omillardan qochish va uzoq muddatli remissiyani saqlash haqida batafsil tushuntiramiz.",
        'Мы подробно объясняем, как правильно ухаживать за кожей, избегать факторов, провоцирующих обострение, и поддерживать длительную ремиссию.',
        'We explain how to care for skin properly, avoid flare triggers and maintain long-term remission.',
      ),
      S(
        'Yuqori davolash natijalari',
        'Высокие результаты лечения',
        'Strong treatment outcomes',
        "Zamonaviy terapiya usullari, doimiy kuzatuv va individual yondashuv tufayli ko'plab bemorlarimiz uzoq remissiyaga erishadi, kuchayishlar chastotasini kamaytiradi va qichish va noqulayliksiz to'liq hayotga qaytadi.",
        'Благодаря современным методам терапии, постоянному наблюдению и индивидуальному подходу многие наши пациенты достигают длительной ремиссии, уменьшают частоту обострений и возвращаются к полноценной жизни без постоянного зуда и дискомфорта.',
        'With modern therapy, ongoing follow-up and individualized care, many patients achieve long remission, fewer flares and return to full life without constant itch and discomfort.',
      ),
    ],
    aboutFooter: L(
      "Radeski Skin Clinic — tajribali dermatologlar jamoasi, zamonaviy davolash usullari va har bir bemorga kompleks yondashuv. Bizning maqsadimiz — faqat belgilarni yo'qotish emas, balki kasallikni uzoq muddat nazorat qilish va teri salomatligini saqlash.",
      'Radeski Skin Clinic — это команда опытных дерматологов, современные методы лечения и комплексный подход к каждому пациенту. Наша цель — не просто снять симптомы, а добиться длительного контроля заболевания и сохранить здоровье вашей кожи.',
      'Radeski Skin Clinic is a team of experienced dermatologists, modern treatment methods and a comprehensive approach for every patient. Our goal is not only to relieve symptoms, but to achieve long-term disease control and protect your skin health.',
    ),
  },
  'cat-dermatologiya-allergik-toshma-va-kontakt-dermatit': {
    aboutTitle: L(
      "Nima uchun allergik toshma va kontakt dermatitni Radeski Skin Clinic'da davolash kerak?",
      'Почему аллергическую сыпь и контактный дерматит нужно лечить в Radeski Skin Clinic?',
      'Why treat allergic rash and contact dermatitis at Radeski Skin Clinic?',
    ),
    aboutOverview: L(
      "Allergik toshma, krapivnitsa va kontakt dermatit — bu oddiy teri qichishishi emas, balki immun tizimining reaksiyasi bo'lib, to'g'ri davolanmasa kuchayishi mumkin. Klinikamizda bunday holatlarning kompleks diagnostikasi va davolashi o'tkaziladi.",
      'Аллергическая сыпь, крапивница и контактный дерматит — это не просто кожное раздражение, а реакция иммунной системы, которая может усиливаться при отсутствии правильного лечения. В нашей клинике проводится комплексная диагностика и лечение таких состояний.',
      'Allergic rash, urticaria and contact dermatitis are not mere skin irritation — they are immune-system reactions that can worsen without proper treatment. Our clinic provides comprehensive diagnosis and care for these conditions.',
    ),
    aboutSections: [
      S(
        'Tajribali allergolog va dermatolog konsultatsiyasi',
        'Консультация опытного врача-аллерголога и дерматолога',
        'Consultation with an experienced allergist and dermatologist',
        "Mutaxassis teri holatini baholaydi, reaksiya xarakterini aniqlaydi va keyingi tekshiruv hamda davolash taktikasini belgilaydi.",
        'Специалист оценивает состояние кожи, определяет характер реакции и назначает дальнейшее обследование и тактику лечения.',
        'The specialist assesses skin condition, determines the nature of the reaction and defines further examination and treatment strategy.',
      ),
      S(
        'Aniq allergenni aniqlash uchun allergoproba',
        'Проведение аллергопроб для выявления точного аллергена',
        'Allergy testing to identify the exact allergen',
        "Allergoproba yordamida kontakt, oziq-ovqat yoki muhit allergenlarini aniqlash mumkin — bu triggerlardan qochish va maqsadli terapiyani tanlash uchun muhim.",
        'Аллергопробы помогают выявить контактные, пищевые или бытовые аллергены — это важно для исключения триггеров и выбора целенаправленной терапии.',
        'Allergy tests help identify contact, food or environmental allergens — essential for trigger avoidance and targeted therapy.',
      ),
      S(
        'Murakkab holatlarda teri dermatoskopiyasi',
        'Дерматоскопия кожи при сложных случаях',
        'Skin dermatoscopy in complex cases',
        "Noaniq yoki aralash toshmalarda dermatoskopiya teri o'zgarishlarini chuqurroq baholash va boshqa kasalliklarni istisno qilish imkonini beradi.",
        'При неясных или смешанных высыпаниях дерматоскопия позволяет детальнее оценить изменения кожи и исключить другие заболевания.',
        'In unclear or mixed rashes, dermatoscopy enables deeper assessment of skin changes and rules out other conditions.',
      ),
      S(
        'Individual terapiya tanlash',
        'Индивидуальный подбор терапии',
        'Individual therapy selection',
        "Har bir bemor uchun reaksiya og'irligi, davomiyligi va oldingi davolashni hisobga olgan holda shaxsiy dori-darmonlar va parvarish rejasi tuziladi.",
        'Для каждого пациента составляется персональный план медикаментозной терапии и ухода с учетом тяжести реакции, длительности и предыдущего лечения.',
        'Each patient receives a personalized medication and care plan based on reaction severity, duration and prior treatment.',
      ),
      S(
        "O'tkir va surunkali dermatit shakllarini davolash",
        'Лечение острых и хронических форм дерматита',
        'Treatment of acute and chronic dermatitis forms',
        "Klinikamizda o'tkir yallig'lanishni tez bartaraf etishdan tortib, surunkali allergik kasalliklarni uzoq muddat nazorat qilishgacha bo'lgan to'liq yondashuv qo'llaniladi.",
        'В клинике применяется полный подход — от купирования острого воспаления до длительного контроля хронических аллергических заболеваний.',
        'Our clinic applies a full approach — from rapid control of acute inflammation to long-term management of chronic allergic disease.',
      ),
      S(
        "Og'ir allergik reaktsiyalarda plazmaforez",
        'Плазмофорез при тяжёлых аллергических реакциях',
        'Plasmapheresis for severe allergic reactions',
        "Og'ir va surunkali allergik reaktsiyalarda samarali usullardan biri — plazmaforez: qonni tozalash protsedurasi bo'lib, aylanma immun komplekslari darajasini pasaytirish va yallig'lanish hamda qichishni kamaytirishga yordam beradi. Plazmaforez kompleks terapiyada qo'llanilishi mumkin: surunkali krapivnitsa; og'ir atopik dermatit; surunkali allergik reaktsiyalar; dori allergiyasi.",
        'Одним из эффективных методов при тяжёлых и затяжных аллергических реакциях является плазмофорез — процедура очищения крови, которая помогает снизить уровень циркулирующих иммунных комплексов и уменьшить выраженность воспаления и зуда. Плазмофорез может применяться в комплексной терапии при: хронической крапивнице; тяжёлом атопическом дерматите; затяжных аллергических реакциях; лекарственной аллергии.',
        'One effective method for severe and persistent allergic reactions is plasmapheresis — a blood-cleansing procedure that helps reduce circulating immune complexes and lessen inflammation and itching. It may be used in comprehensive therapy for: chronic urticaria; severe atopic dermatitis; prolonged allergic reactions; drug allergy.',
      ),
    ],
    aboutFooter: L(
      "Bunday yondashuv nafaqat belgilarni yo'qotish, balki organizmning immun yuklanishi sababiga ta'sir qilish imkonini beradi.",
      'Такой подход позволяет не только снять симптомы, но и воздействовать на причину иммунной перегрузки организма.',
      'This approach not only relieves symptoms but also addresses the underlying immune overload in the body.',
    ),
  },
  'cat-dermatologiya-seborreya-va-teri-zamburugi': {
    aboutTitle: L(
      "Nima uchun seboreya va teri zamburug'ini Radeski Skin Clinic'da davolash muhim?",
      'Почему себорею и грибок кожи важно лечить в Radeski Skin Clinic?',
      'Why is it important to treat seborrhea and skin fungus at Radeski Skin Clinic?',
    ),
    aboutOverview: L(
      "Seborey dermatit va terining zamburug' kasalliklari (dermatomikozlar) — surunkali holatlar bo'lib, faqat belgilarni bartaraf etish bilan tez-tez qaytib keladi. Qichish, po'stloq tushishi, qizarish va soch to'kilishi vaqtincha kamayishi mumkin, lekin aniq diagnostika qilinmasa sabab qoladi. Klinikamizda davolash kasallik sababi va shaklini aniq aniqlashga asoslanadi.",
      'Себорейный дерматит и грибковые поражения кожи (дерматомикозы) — это хронические состояния, которые часто возвращаются, если лечить их только симптоматически. Зуд, шелушение, покраснение и выпадение волос могут временно уменьшаться, но без точной диагностики причина остаётся. В нашей клинике лечение строится на точном определении причины и формы заболевания.',
      'Seborrheic dermatitis and fungal skin infections (dermatomycoses) are chronic conditions that often recur when treated only symptomatically. Itch, scaling, redness and hair loss may temporarily improve, but without accurate diagnosis the cause remains. At our clinic, treatment is based on precise identification of the cause and form of disease.',
    ),
    aboutSections: [
      S(
        'Dermatolog ko\'rigi: teri va bosh terisi holati',
        'Осмотр врача-дерматолога с оценкой состояния кожи и волосистой части головы',
        'Dermatologist examination of skin and scalp',
        "Shifokor teri va bosh terisini baholaydi, qichish, qoplama va soch to'kilishi xarakterini aniqlaydi hamda keyingi tekshiruv rejasini tuzadi.",
        'Врач оценивает кожу и кожу головы, определяет характер зуда, шелушения и выпадения волос, составляет план дальнейшего обследования.',
        'The physician assesses skin and scalp, characterizes itching, scaling and hair loss, and plans further examination.',
      ),
      S(
        'Bosh terisi va sochlarni dermatoskopiya',
        'Дерматоскопия при поражении кожи головы и волос',
        'Dermatoscopy of scalp and hair',
        "Bosh terisi va sochlar zararlanganda dermatoskopiya o'zgarishlarni batafsil ko'rish va boshqa kasalliklarni istisno qilish imkonini beradi.",
        'При поражении кожи головы и волос дерматоскопия позволяет детально оценить изменения и исключить другие заболевания.',
        'When scalp and hair are affected, dermatoscopy enables detailed assessment and rules out other conditions.',
      ),
      S(
        'Zamburug\' infeksiyasini aniqlash uchun laboratoriya',
        'Лабораторная диагностика для выявления грибковой инфекции',
        'Laboratory diagnostics for fungal infection',
        "Laboratoriya tekshiruvlari zamburug' mavjudligini tasdiqlash va davolashni to'g'ri boshlash uchun zarur ma'lumot beradi.",
        'Лабораторные исследования подтверждают наличие грибковой инфекции и дают данные для правильного начала лечения.',
        'Laboratory tests confirm fungal infection and provide data needed to start treatment correctly.',
      ),
      S(
        'Zamburug\' turini aniqlash',
        'Определение вида грибка для правильного подбора терапии',
        'Fungal species identification for therapy selection',
        "Turli zamburug' turlari turli dori-darmonlarga javob beradi — sababni aniq bilish terapiyani to'g'ri tanlash uchun muhim.",
        'Разные виды грибков требуют разных препаратов — точное определение возбудителя важно для правильного выбора терапии.',
        'Different fungi respond to different medications — precise pathogen identification is essential for correct therapy.',
      ),
      S(
        'Mahalliy va sistemli davolashni tanlash',
        'Подбор наружного и системного лечения при необходимости',
        'Selection of topical and systemic treatment when needed',
        "Kasallik tarqalishi va og'irligiga qarab mahalliy kremlar, shampunlar yoki ichki qabul qilinadigan preparatlar belgilanadi.",
        'В зависимости от распространённости и тяжести назначаются местные средства, шампуни или системные препараты.',
        'Depending on extent and severity, topical agents, shampoos or systemic medications are prescribed.',
      ),
      S(
        'Aniq tashxisning ahamiyati',
        'Особенность таких заболеваний',
        'Why these conditions need precise diagnosis',
        "Turli zamburug' turlari va seboreya shakllari turli yondashuvni talab qiladi. Tashxisdagi xato ko'pincha kasallikning qayta-qayt kuchayishiga olib keladi.",
        'Разные виды грибков и формы себореи требуют разного подхода. Ошибка в диагнозе часто приводит к повторным обострениям.',
        'Different fungi and seborrhea forms require different approaches. Diagnostic errors often lead to recurrent flares.',
      ),
      S(
        'Sababi turiga qarab antifungal terapiya',
        'Противогрибковая терапия с учётом типа возбудителя',
        'Antifungal therapy matched to pathogen type',
        "Aniqlangan zamburug' turiga mos antifungal preparatlar tanlanadi — bu samaradorlikni oshiradi va qayta paydo bo'lish xavfini kamaytiradi.",
        'Подбираются противогрибковые препараты с учётом выявленного возбудителя — это повышает эффективность и снижает риск рецидива.',
        'Antifungal agents are selected for the identified pathogen — improving effectiveness and reducing relapse risk.',
      ),
      S(
        'Seborey dermatitda yallig\'lanishga qarshi terapiya',
        'Противовоспалительные препараты при себорейном дерматите',
        'Anti-inflammatory therapy for seborrheic dermatitis',
        "Seborey dermatitda yallig'lanish va qichishni kamaytirish uchun maxsus mahalliy va zarur bo'lsa sistemli preparatlar qo'llaniladi.",
        'При себорейном дерматите применяются специальные местные и при необходимости системные средства для снижения воспаления и зуда.',
        'For seborrheic dermatitis, targeted topical and when needed systemic agents reduce inflammation and itching.',
      ),
      S(
        'Teri to\'sig\'ini tiklash uchun parvarish terapiyasi',
        'Уходовая терапия для восстановления кожного барьера',
        'Skincare to restore the skin barrier',
        "Teri himoya qavatini tiklash va quruqlik hamda sezgirlikni kamaytirish uchun parvarish mahsulotlari va shifokor tavsiyalari beriladi.",
        'Назначаются средства ухода и рекомендации врача для восстановления защитного барьера кожи и снижения сухости и чувствительности.',
        'Care products and physician guidance restore the skin barrier and reduce dryness and sensitivity.',
      ),
      S(
        'Qaytalanishning oldini olish bo\'yicha tavsiyalar',
        'Профилактические рекомендации для предотвращения рецидивов',
        'Preventive recommendations against relapse',
        "Bemorga kundalik parvarish, gigiena va kuchayish omillaridan qochish bo'yicha aniq ko'rsatmalar beriladi — bu uzoq remissiyani saqlashga yordam beradi.",
        'Пациент получает чёткие рекомендации по ежедневному уходу, гигиене и избеганию провоцирующих факторов — это помогает поддерживать длительную ремиссию.',
        'Patients receive clear guidance on daily care, hygiene and avoiding triggers — supporting long-term remission.',
      ),
    ],
    aboutFooter: L(
      "Bunday yondashuv nafaqat belgilarni yo'qotish, balki uzoq muddatli remissiyaga erishish va qayta kuchayish xavfini kamaytirishga yordam beradi.",
      'Такой подход помогает не просто убрать симптомы, а добиться длительной ремиссии и снизить риск повторных обострений.',
      'This approach helps not only remove symptoms but achieve long remission and reduce the risk of recurrent flares.',
    ),
  },
};
