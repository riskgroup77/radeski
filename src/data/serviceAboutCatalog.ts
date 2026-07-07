import type { Locale, ServiceConditionTopic } from '../types';

export interface ServiceAboutContent {
  aboutTitle: string;
  overview: string;
  aboutSections: ServiceConditionTopic[];
  aboutFooter?: string;
}

type LocalizedServiceAbout = Record<Locale, ServiceAboutContent>;

function L(uz: ServiceAboutContent, ru: ServiceAboutContent, en: ServiceAboutContent): LocalizedServiceAbout {
  return { uz, ru, en };
}

/** «Xizmat haqida» — Radeski afzalliklari matnlari */
export const SERVICE_ABOUT_CATALOG: Record<string, LocalizedServiceAbout> = {
  dermatologiya: L(
    {
      aboutTitle: "Nima uchun dermatolog ko'rigi va dermatoskopiyadan aynan Radeski Skin Clinic'da o'tish kerak?",
      overview:
        "Radeski Skin Clinic'da dermatolog shifokor konsultatsiyasi — bu oddiy ko'rik emas, balki zamonaviy diagnostika usullari yordamida teri holatini kompleks baholashdir.",
      aboutSections: [
        {
          title: 'Aniq diagnostika',
          description:
            "Shifokorlarimiz terini sinchkovlik bilan ko'rib chiqadi va kerak bo'lganda raqamli dermatoskopiya o'tkazadi — yangi hosilalar va boshqa o'zgarishlarni ko'p baravar kattalashtirilgan holda ko'rish imkonini beruvchi zamonaviy, og'riqsiz va xavfsiz usul. Bu ko'plab kasalliklarni erta bosqichda aniqlash va optimal davolash taktikasini belgilashga yordam beradi.",
        },
        {
          title: 'Tajribali mutaxassislar',
          description:
            "Qabulni malakali dermatolog shifokorlar olib boradi. Ular muntazam malaka oshiradi, xalqaro konferensiyalarda qatnashadi va zamonaviy klinik tavsiyalarni kundalik amaliyotda qo'llaydi.",
        },
        {
          title: 'Zamonaviy uskunalar',
          description:
            "Oddiy ko'rikda ko'rinmaydigan o'zgarishlarni aniqlashga va maksimal aniq tashxis qo'yishga yordam beradigan professional diagnostika uskunalaridan foydalanamiz.",
        },
        {
          title: 'Individual yondashuv',
          description:
            "Har bir bemor shaxsiy tavsiyalar oladi. Biz keraksiz protseduralarni tayinlamaymiz — faqat sizning holatingizda haqiqatan zarur bo'lgan tekshiruv va davolash usullarini tanlaymiz.",
        },
        {
          title: "To'liq yordam bir joyda",
          description:
            "Konsultatsiyadan so'ng kerak bo'lsa, qo'shimcha tekshiruvlardan o'tishingiz, xavfsiz yangi hosilalarni olib tashlashingiz, teri kasalliklarini davolashni boshlashingiz yoki estetik muammolarni hal qilish uchun samarali apparatli protseduralarni tanlashingiz mumkin.",
        },
      ],
      aboutFooter:
        "Radeski Skin Clinic'da biz o'z vaqtida diagnostika qilish — teri salomatligini saqlashning eng yaxshi usuli, deb hisoblaymiz. Zamonaviy uskunalar, tajribali mutaxassislar va har bir bemorga g'amxo'rlik bilan yondashish yuqori professional darajada tekshiruv o'tkazish va kuzatuv yoki davolashni talab qiladigan o'zgarishlarni o'z vaqtida aniqlash imkonini beradi.",
    },
    {
      aboutTitle: 'Почему осмотр дерматолога и дерматоскопию нужно пройти именно в Radeski Skin Clinic?',
      overview:
        'В Radeski Skin Clinic консультация врача-дерматолога — это не просто осмотр, а комплексная оценка состояния кожи с использованием современных методов диагностики.',
      aboutSections: [
        {
          title: 'Точная диагностика',
          description:
            'Наши врачи проводят тщательный осмотр кожи и при необходимости выполняют цифровую дерматоскопию — современный, безболезненный и безопасный метод исследования новообразований и других изменений кожи под многократным увеличением. Это позволяет выявлять многие заболевания на ранних стадиях и определить оптимальную тактику лечения.',
        },
        {
          title: 'Опытные специалисты',
          description:
            'Прием ведут квалифицированные врачи-дерматологи, которые регулярно повышают свою квалификацию, участвуют в международных конференциях и применяют современные клинические рекомендации в ежедневной практике.',
        },
        {
          title: 'Современное оборудование',
          description:
            'Мы используем профессиональное диагностическое оборудование, которое помогает обнаружить изменения, незаметные при обычном осмотре, и поставить максимально точный диагноз.',
        },
        {
          title: 'Индивидуальный подход',
          description:
            'Каждый пациент получает персональные рекомендации. Мы не назначаем лишних процедур — только те обследования и методы лечения, которые действительно необходимы именно в вашем случае.',
        },
        {
          title: 'Полный спектр помощи в одном месте',
          description:
            'После консультации при необходимости вы можете сразу пройти дополнительные обследования, удалить доброкачественные новообразования, начать лечение кожных заболеваний или подобрать эффективные аппаратные процедуры для решения эстетических проблем.',
        },
      ],
      aboutFooter:
        'В Radeski Skin Clinic мы убеждены, что своевременная диагностика — лучший способ сохранить здоровье кожи. Современное оборудование, опытные специалисты и внимательное отношение к каждому пациенту позволяют нам проводить обследование на высоком профессиональном уровне и своевременно выявлять изменения, требующие наблюдения или лечения.',
    },
    {
      aboutTitle: 'Why should a dermatologist examination and dermatoscopy be done at Radeski Skin Clinic?',
      overview:
        'At Radeski Skin Clinic, a dermatologist consultation is not just a routine exam — it is a comprehensive skin assessment using modern diagnostic methods.',
      aboutSections: [
        {
          title: 'Accurate diagnosis',
          description:
            'Our physicians perform a thorough skin examination and, when needed, digital dermatoscopy — a modern, painless and safe method to evaluate lesions and other skin changes under high magnification. This helps detect many conditions at early stages and define the optimal treatment plan.',
        },
        {
          title: 'Experienced specialists',
          description:
            'Consultations are provided by qualified dermatologists who regularly advance their training, attend international conferences, and apply up-to-date clinical guidelines in daily practice.',
        },
        {
          title: 'Modern equipment',
          description:
            'We use professional diagnostic equipment that helps reveal changes invisible during a standard exam and establish the most accurate diagnosis.',
        },
        {
          title: 'Individual approach',
          description:
            'Every patient receives personal recommendations. We do not prescribe unnecessary procedures — only the examinations and treatments that are truly needed in your case.',
        },
        {
          title: 'Full range of care in one place',
          description:
            'After consultation, you can, if needed, undergo additional tests, remove benign lesions, start treatment for skin diseases, or choose effective device-based procedures for aesthetic concerns.',
        },
      ],
      aboutFooter:
        'At Radeski Skin Clinic we believe timely diagnosis is the best way to protect skin health. Modern equipment, experienced specialists, and attentive care allow us to examine patients at a high professional level and detect changes that require monitoring or treatment in time.',
    },
  ),

  'ipl-inmode': L(
    {
      aboutTitle: "Nima uchun IPL-terapiyani aynan Radeski Skin Clinic'da o'tkazish kerak?",
      overview:
        "Radeski Skin Clinic'da muolaja zamonaviy sertifikatlangan IPL apparatida o'tkaziladi — Farg'ona viloyatida bunday darajadagi yagona uskuna.",
      aboutSections: [
        {
          title: "Farg'ona viloyatidagi yagona sertifikatlangan IPL",
          description:
            "Bemorlarimizga zamonaviy xalqaro standartlarga mos texnologiyalarni taklif etamiz.",
        },
        {
          title: 'Tajribali dermatolog shifokorlar',
          description:
            "Har bir muolajani malakali mutaxassis individual konsultatsiya va teri holatini baholagandan keyin o'tkazadi.",
        },
        {
          title: 'Individual yondashuv',
          description:
            "Teri fototipi, yosh va muammo xususiyatlarini hisobga olgan holda parametrlarni tanlaymiz — bu maksimal samaradorlik va xavfsizlikni ta'minlaydi.",
        },
        {
          title: 'Zamonaviy xalqaro protokollar',
          description: "Faqat tasdiqlangan davolash va terini yoshartirish metodikasidan foydalanamiz.",
        },
        {
          title: 'Qulaylik va xavfsizlik',
          description:
            "Muolajalar tez, deyarli og'riqsiz o'tadi va uzoq tiklanish talab qilmaydi. Seansdan tez orada shifokor tavsiyalariga rioya qilgan holda odatiy hayotga qaytish mumkin.",
        },
        {
          title: 'IPL qanday muammolarni hal qiladi?',
          description:
            "IPL (Intense Pulsed Light) — intensiv impulsli yorug'lik texnologiyasi bo'lib, turli estetik teri muammolariga qarshi samarali kurashadi: qon tomir yulduzchalari va qizarish; kuperoza; pigment dog'lar; fotoeskirish; yuz rangining xiraligi; kengaytirilgan poralar; post-akne; akne paytidagi yallig'lanish elementlari; mayda ajinlar va teri tonusining pasayishi. Kursdan keyin teri tekisroq, yangiroq va parvarishlangan ko'rinishga ega bo'ladi, qon tomir va pigment o'zgarishlari kamayadi, tekstura va umumiy ton yaxshilanadi.",
        },
      ],
      aboutFooter:
        "Teri salomatligini professionallarga ishoning. Radeski Skin Clinic'da biz zamonaviy texnologiyalar, shifokorlar tajribasi va har bir bemorga individual yondashuvni birlashtiramiz. Agar qon tomir o'zgarishlari, pigmentatsiya, post-akne izlari yoki terining sog'lom yorqinligini qaytarishni xohlasangiz, IPL-terapiya optimal yechim bo'lishi mumkin.",
    },
    {
      aboutTitle: 'Почему IPL-терапию нужно получить в Radeski Skin Clinic?',
      overview:
        'В Radeski Skin Clinic процедура проводится на современном сертифицированном IPL-аппарате, который является единственным аппаратом такого уровня в Ферганской области.',
      aboutSections: [
        {
          title: 'Единственный сертифицированный IPL-аппарат такого уровня в Ферганской области',
          description:
            'Мы предлагаем нашим пациентам технологии, соответствующие современным международным стандартам.',
        },
        {
          title: 'Опытные врачи-дерматологи',
          description:
            'Каждую процедуру проводит квалифицированный специалист после индивидуальной консультации и оценки состояния кожи.',
        },
        {
          title: 'Индивидуальный подход',
          description:
            'Мы подбираем параметры процедуры с учетом фототипа кожи, возраста и особенностей каждой проблемы, что позволяет добиться максимальной эффективности и безопасности.',
        },
        {
          title: 'Современные международные протоколы',
          description: 'Мы используем только проверенные методики лечения и омоложения кожи.',
        },
        {
          title: 'Комфорт и безопасность',
          description:
            'Процедуры проходят быстро, практически безболезненно и не требуют длительного периода восстановления. Уже вскоре после сеанса можно вернуться к привычному образу жизни, соблюдая рекомендации врача.',
        },
        {
          title: 'Какие проблемы решает IPL?',
          description:
            'IPL (Intense Pulsed Light) — это технология интенсивного импульсного света, которая позволяет эффективно бороться с различными эстетическими проблемами кожи: сосудистыми звездочками и покраснениями; куперозом; пигментными пятнами; фотостарением; тусклым цветом лица; расширенными порами; постакне; воспалительными элементами при акне; мелкими морщинами и снижением тонуса кожи. После курса процедур кожа становится более ровной, свежей и ухоженной, уменьшается выраженность сосудистых и пигментных изменений, улучшается текстура и общий тон лица.',
        },
      ],
      aboutFooter:
        'Доверьте свою кожу профессионалам. В Radeski Skin Clinic мы объединяем современные технологии, опыт врачей и индивидуальный подход к каждому пациенту. Если вы хотите избавиться от сосудистых изменений, пигментации, следов постакне или вернуть коже здоровое сияние, IPL-терапия может стать оптимальным решением.',
    },
    {
      aboutTitle: 'Why receive IPL therapy at Radeski Skin Clinic?',
      overview:
        'At Radeski Skin Clinic, the procedure is performed on a modern certified IPL device — the only system of this level in Fergana Region.',
      aboutSections: [
        {
          title: 'The only certified IPL device of this level in Fergana Region',
          description: 'We offer technologies that meet modern international standards.',
        },
        {
          title: 'Experienced dermatologists',
          description:
            'Every session is performed by a qualified specialist after individual consultation and skin assessment.',
        },
        {
          title: 'Individual approach',
          description:
            'We select treatment parameters based on skin phototype, age, and the specifics of each concern for maximum efficacy and safety.',
        },
        {
          title: 'Modern international protocols',
          description: 'We use only proven skin treatment and rejuvenation techniques.',
        },
        {
          title: 'Comfort and safety',
          description:
            'Sessions are quick, virtually painless, and require minimal downtime. You can return to normal activities soon after treatment while following physician recommendations.',
        },
        {
          title: 'What concerns does IPL address?',
          description:
            'IPL (Intense Pulsed Light) effectively treats vascular spider veins and redness; couperose; pigment spots; photoaging; dull complexion; enlarged pores; post-acne marks; inflammatory acne lesions; fine wrinkles and reduced skin tone. After a course, skin looks smoother, fresher and more cared-for, with improved texture and overall facial tone.',
        },
      ],
      aboutFooter:
        'Trust your skin to professionals. At Radeski Skin Clinic we combine modern technology, physician expertise, and individualized care. If you want to reduce vascular changes, pigmentation, post-acne marks, or restore a healthy glow, IPL therapy may be the optimal solution.',
    },
  ),

  dermatoonkologiya: L(
    {
      aboutTitle: "Nima uchun dermatoonkolog ko'rigini aynan Radeski Skin Clinic'da o'tkazish kerak?",
      overview:
        "Teri yangi hosilalarini o'z vaqtida diagnostika qilish salomatlikni saqlashda hal qiluvchi ahamiyatga ega bo'lishi mumkin. Radeski Skin Clinic'da siz oddiy konsultatsiya emas, balki teri kasalliklarini diagnostika va davolashga kompleks yondashuvni olasiz.",
      aboutSections: [
        {
          title: "Hududda yagona dermatoonkolog shifokor",
          description:
            "Radeski Skin Clinic — Farg'ona viloyatida dermatoonkolog shifokor qabul olib boradigan yagona klinika. U yaxshi va yomon xavfli teri yangi hosilalarini diagnostika qiladi va xavfli o'zgarishlarni eng erta bosqichlarda aniqlashga yordam beradi.",
        },
        {
          title: 'Zamonaviy dermatoskopiya',
          description:
            "Qabul vaqtida raqamli dermatoskopiya o'tkaziladi — terini ko'p baravar kattalashtirilgan holda og'riqsiz tekshirish. Usul xollar va boshqa hosilalarning tuzilishini batafsil baholash, ko'z bilan ko'rinmaydigan o'zgarishlarni aniqlash va keyingi kuzatuv yoki davolash zarurligini belgilash imkonini beradi.",
        },
        {
          title: 'Biopsiya imkoniyati',
          description:
            "Tekshiruv paytida ko'rsatmalar bo'lsa, klinikamizda darhol teri biopsiyasi va keyingi gistologik tekshiruvni o'tkazish mumkin. Bu tashxisni tasdiqlashning eng ma'lumotli usullaridan biri bo'lib, boshqa tibbiy muassasalarga murojaat qilmasdan davolash taktikasini belgilashga yordam beradi.",
        },
        {
          title: 'Barcha diagnostika bosqichlari bir klinikada',
          description:
            "Radeski Skin Clinic'da bemor butun yo'lni bir joyda bosib o'tishi mumkin: dermatoonkolog konsultatsiyasi; dermatoskopik tekshiruv; ko'rsatmalar bo'yicha biopsiya; yaxshi xavfli hosilalarni zamonaviy usullar bilan olib tashlash; keyingi kuzatuv va davolash.",
        },
        {
          title: 'Dermatoonkologga qachon murojaat qilish kerak?',
          description:
            "Konsultatsiya tavsiya etiladi, agar: yangi xol yoki hosila paydo bo'lsa; mavjud xolning shakli, o'lchami yoki rangi o'zgarsa; qichish, og'riq, qon ketish yoki yallig'lanish bo'lsa; terida uzoq davom etayotgan yara yoki yaracha bo'lsa; profilaktik ko'rikdan o'tib, xollaringiz xavfsizligiga ishonch hosil qilmoqchi bo'lsangiz.",
        },
      ],
      aboutFooter:
        "Radeski Skin Clinic — zamonaviy diagnostika usullari, yuqori malakali mutaxassislar va teri salomatligiga kompleks yondashuv. Biz kasalliklarni erta bosqichda aniqlashga va har bir bemor uchun eng samarali davolash taktikasini tanlashga yordam beramiz.",
    },
    {
      aboutTitle: 'Почему осмотр дерматоонколога лучше пройти именно в Radeski Skin Clinic?',
      overview:
        'Своевременная диагностика новообразований кожи может иметь решающее значение для сохранения здоровья. В Radeski Skin Clinic вы получаете не просто консультацию, а комплексный подход к диагностике и лечению заболеваний кожи.',
      aboutSections: [
        {
          title: 'Единственный врач-дерматоонколог в регионе',
          description:
            'Radeski Skin Clinic — единственная клиника в Ферганской области, где ведет прием врач-дерматоонколог. Это специалист, который профессионально занимается диагностикой доброкачественных и злокачественных новообразований кожи, помогая выявлять опасные изменения на самых ранних этапах.',
        },
        {
          title: 'Современная дерматоскопия',
          description:
            'Во время приема проводится цифровая дерматоскопия — безболезненное исследование кожи с многократным увеличением. Метод позволяет детально оценить структуру родинок и других новообразований, обнаружить изменения, которые невозможно увидеть невооруженным глазом, и определить необходимость дальнейшего наблюдения или лечения.',
        },
        {
          title: 'Возможность биопсии',
          description:
            'Если во время обследования возникают показания, в нашей клинике можно сразу выполнить биопсию кожи с последующим гистологическим исследованием. Это один из наиболее информативных методов подтверждения диагноза, позволяющий определить дальнейшую тактику лечения без необходимости обращаться в другие медицинские учреждения.',
        },
        {
          title: 'Все этапы диагностики в одной клинике',
          description:
            'В Radeski Skin Clinic пациент может пройти весь путь в одном месте: консультацию врача-дерматоонколога; дерматоскопическое обследование; биопсию при наличии показаний; удаление доброкачественных новообразований современными методами; дальнейшее наблюдение и лечение.',
        },
        {
          title: 'Когда необходимо обратиться к дерматоонкологу?',
          description:
            'Консультация рекомендуется, если: появилась новая родинка или новообразование; изменилась форма, размер или цвет существующей родинки; появились зуд, боль, кровоточивость или воспаление; на коже долго не заживает ранка или язвочка; вы хотите пройти профилактический осмотр и убедиться в безопасности своих родинок.',
        },
      ],
      aboutFooter:
        'Radeski Skin Clinic — это современные методы диагностики, высокая квалификация специалистов и комплексный подход к здоровью кожи. Мы помогаем выявлять заболевания на ранних стадиях и выбирать наиболее эффективную тактику лечения для каждого пациента.',
    },
    {
      aboutTitle: 'Why have a dermato-oncologist consultation at Radeski Skin Clinic?',
      overview:
        'Timely diagnosis of skin lesions can be crucial for your health. At Radeski Skin Clinic you receive not just a consultation, but a comprehensive approach to diagnosing and treating skin conditions.',
      aboutSections: [
        {
          title: 'The only dermato-oncologist in the region',
          description:
            'Radeski Skin Clinic is the only clinic in Fergana Region where a dermato-oncologist consults. This specialist diagnoses benign and malignant skin lesions and helps detect dangerous changes at the earliest stages.',
        },
        {
          title: 'Modern dermatoscopy',
          description:
            'Digital dermatoscopy is performed during the visit — a painless magnified skin examination that reveals structural details of moles and lesions invisible to the naked eye and guides further monitoring or treatment.',
        },
        {
          title: 'Biopsy when indicated',
          description:
            'If indicated during examination, skin biopsy with histology can be performed immediately in our clinic — one of the most informative methods to confirm diagnosis without visiting other facilities.',
        },
        {
          title: 'All diagnostic steps in one clinic',
          description:
            'At Radeski Skin Clinic patients can complete the full pathway in one place: dermato-oncologist consultation; dermatoscopic examination; biopsy when needed; removal of benign lesions with modern methods; follow-up and treatment.',
        },
        {
          title: 'When should you see a dermato-oncologist?',
          description:
            'Consultation is recommended if: a new mole or lesion appears; an existing mole changes in shape, size or color; itching, pain, bleeding or inflammation occurs; a sore or ulcer does not heal; you want a preventive check to ensure your moles are safe.',
        },
      ],
      aboutFooter:
        'Radeski Skin Clinic offers modern diagnostics, highly qualified specialists, and a comprehensive approach to skin health. We help detect disease early and choose the most effective treatment plan for each patient.',
    },
  ),

  biopsiya: L(
    {
      aboutTitle: "Nima uchun teri biopsiyasini aynan Radeski Skin Clinic'da o'tkazish kerak?",
      overview:
        "Teri biopsiyasi — zamonaviy dermatologiyada diagnostikaning oltin standarti. Klinik ko'rik va dermatoskopiya aniq tashxis uchun yetarli bo'lmaganda, aynan biopsiya kasallik tabiati haqida eng ishonchli ma'lumot beradi.",
      aboutSections: [
        {
          title: "Farg'ona viloyatidagi yagona imkoniyat",
          description:
            "Radeski Skin Clinic — Farg'ona viloyatida teri biopsiyasi o'tkaziladigan yagona klinika. Endi bemorlar bu muhim tekshiruv uchun boshqa shaharlarga chiqishlari shart emas.",
        },
        {
          title: 'Maksimal diagnostika aniqligi',
          description:
            "Muolaja paytida shifokor terining kichik namunasini oladi, u gistologik tekshiruvga yuboriladi. Aynan to'qimalarni mikroskop ostida o'rganish ko'plab teri kasalliklarini tasdiqlash yoki istisno qilish va murakkab holatlarda yakuniy tashxis qo'yish imkonini beradi.",
        },
        {
          title: "Biopsiya qachon kerak bo'ladi?",
          description:
            "Biopsiya tavsiya etilishi mumkin: terining yomon xavfli va oldindan saraton holatlariga shubha bo'lganda; noaniq teri toshmalari bo'lganda; surunkali dermatozlarda; autoimmun teri kasalliklarida; klinik ko'rik va dermatoskopiya bo'yicha aniq tashxis qo'yib bo'lmaganda.",
        },
        {
          title: 'Kompleks yondashuv bir joyda',
          description:
            "Radeski Skin Clinic'da bemor boshqa tibbiy muassasalarga murojaat qilmasdan barcha diagnostika bosqichlaridan o'tadi: dermatoonkolog konsultatsiyasi; dermatoskopiya; ko'rsatmalar bo'yicha teri biopsiyasi; materialni gistologik tekshiruvga yo'naltirish; xulosa olish va samarali davolashni tayinlash.",
        },
      ],
      aboutFooter:
        "To'g'ri davolash to'g'ri tashxisdan boshlanadi, deb hisoblaymiz. Shu sababli murakkab holatlarda dunyo bo'ylab eng ma'lumotli va ishonchli deb tan olingan diagnostika usullaridan foydalanamiz.",
    },
    {
      aboutTitle: 'Почему биопсию кожи лучше выполнить в Radeski Skin Clinic?',
      overview:
        'Биопсия кожи — это золотой стандарт диагностики в современной дерматологии. Когда клинического осмотра и дерматоскопии недостаточно для постановки точного диагноза, именно биопсия позволяет получить максимально достоверную информацию о характере заболевания.',
      aboutSections: [
        {
          title: 'Единственная возможность в Ферганской области',
          description:
            'Radeski Skin Clinic — единственная клиника в Ферганской области, где выполняется биопсия кожи. Теперь пациентам не нужно выезжать в другие города, чтобы пройти это важное диагностическое исследование.',
        },
        {
          title: 'Максимальная точность диагностики',
          description:
            'Во время процедуры врач получает небольшой образец кожи, который направляется на гистологическое исследование. Именно микроскопическое изучение тканей позволяет подтвердить или исключить многие заболевания кожи и установить окончательный диагноз в сложных клинических случаях.',
        },
        {
          title: 'Когда необходима биопсия?',
          description:
            'Биопсия может быть рекомендована при: подозрении на злокачественные и предраковые заболевания кожи; неясных кожных высыпаниях; хронических дерматозах; аутоиммунных заболеваниях кожи; заболеваниях, когда клиническая картина не позволяет установить точный диагноз только по осмотру и дерматоскопии.',
        },
        {
          title: 'Комплексный подход в одном месте',
          description:
            'В Radeski Skin Clinic пациент проходит все этапы диагностики без необходимости обращаться в другие медицинские учреждения: консультацию врача-дерматоонколога; дерматоскопию; биопсию кожи при наличии показаний; направление материала на гистологическое исследование; получение заключения и назначение эффективного лечения.',
        },
      ],
      aboutFooter:
        'Мы убеждены, что правильное лечение начинается с правильного диагноза. Именно поэтому в сложных случаях мы используем методы диагностики, признанные во всем мире как наиболее информативные и надежные.',
    },
    {
      aboutTitle: 'Why have a skin biopsy at Radeski Skin Clinic?',
      overview:
        'Skin biopsy is the gold standard of diagnosis in modern dermatology. When clinical examination and dermatoscopy are not enough for an accurate diagnosis, biopsy provides the most reliable information about the nature of the disease.',
      aboutSections: [
        {
          title: 'The only option in Fergana Region',
          description:
            'Radeski Skin Clinic is the only clinic in Fergana Region where skin biopsy is performed. Patients no longer need to travel to other cities for this essential diagnostic procedure.',
        },
        {
          title: 'Maximum diagnostic accuracy',
          description:
            'During the procedure the physician obtains a small skin sample for histology. Microscopic tissue examination confirms or rules out many skin diseases and establishes a final diagnosis in complex cases.',
        },
        {
          title: 'When is biopsy needed?',
          description:
            'Biopsy may be recommended for suspected malignant or precancerous skin conditions; unclear skin eruptions; chronic dermatoses; autoimmune skin diseases; cases where clinical and dermatoscopic findings are insufficient for a definitive diagnosis.',
        },
        {
          title: 'Comprehensive care in one place',
          description:
            'At Radeski Skin Clinic patients complete all diagnostic steps without visiting other facilities: dermato-oncologist consultation; dermatoscopy; skin biopsy when indicated; histology referral; report and effective treatment plan.',
        },
      ],
      aboutFooter:
        'We believe proper treatment begins with proper diagnosis. That is why in complex cases we use globally recognized, highly informative and reliable diagnostic methods.',
    },
  ),

  trixoskop: L(
    {
      aboutTitle: "Nima uchun trixolog ko'rigi va trixoskopiyani aynan Radeski Skin Clinic'da o'tkazish kerak?",
      overview:
        "Radeski Skin Clinic trixologiya markazida soch va bosh terisi muammolarini kompleks yondashuv bilan hal qilamiz — trixolog konsultatsiyasi va kompyuter trixoskopiyasi aniq tashxis va samarali davolash rejasining asosi.",
      aboutSections: [
        {
          title: 'Trixolog va trixoskopiya bir joyda',
          description:
            "Mutaxassis soch va bosh terisini ko'rib chiqadi, shikoyatlaringizni tinglaydi va trixoskop yordamida follikulalar holatini kattalashtirilgan holda baholaydi.",
        },
        {
          title: 'Aniq diagnostika',
          description:
            "Raqamli trixoskopiya soch to'kilishi, seboreya, alopeciya va boshqa muammolarning sababini aniqlashga yordam beradi — taxmin emas, balki obyektiv ma'lumot.",
        },
        {
          title: 'Individual davolash rejasi',
          description:
            "Tashxis asosida mezoterapiya, dori-darmonlar va parvarish bo'yicha shaxsiy reja tuziladi.",
        },
        {
          title: 'Kuzatuv va natija',
          description:
            "Davolash samaradorligini trixoskop orqali qayta baholash va kerak bo'lsa rejani tuzatish mumkin.",
        },
      ],
      aboutFooter:
        "Soch to'kilishi sababini aniqlash va to'g'ri davolanish uchun Radeski trixologiya markaziga murojaat qiling — zamonaviy diagnostika va tajribali mutaxassislar siz bilan.",
    },
    {
      aboutTitle: 'Почему осмотр трихолога и трихоскопию лучше всего сделать в Radeski Skin Clinic?',
      overview:
        'В трихологическом центре Radeski Skin Clinic мы комплексно решаем проблемы волос и кожи головы — консультация трихолога и компьютерная трихоскопия являются основой точного диагноза и эффективного плана лечения.',
      aboutSections: [
        {
          title: 'Трихолог и трихоскопия в одном месте',
          description:
            'Специалист осматривает волосы и кожу головы, выслушивает жалобы и с помощью трихоскопа оценивает состояние фолликулов под увеличением.',
        },
        {
          title: 'Точная диагностика',
          description:
            'Цифровая трихоскопия помогает определить причину выпадения волос, себореи, алопеции и других проблем — не предположения, а объективные данные.',
        },
        {
          title: 'Индивидуальный план лечения',
          description:
            'На основе диагноза составляется персональный план: мезотерапия, медикаментозная терапия и уход.',
        },
        {
          title: 'Контроль результата',
          description:
            'Эффективность лечения можно повторно оценить с помощью трихоскопии и при необходимости скорректировать план.',
        },
      ],
      aboutFooter:
        'Чтобы выяснить причину выпадения волос и получить правильное лечение, обратитесь в трихологический центр Radeski — современная диагностика и опытные специалисты.',
    },
    {
      aboutTitle: 'Why have a trichologist consultation and trichoscopy at Radeski Skin Clinic?',
      overview:
        'At Radeski Skin Clinic Trichology Center we address hair and scalp concerns comprehensively — trichologist consultation and computerized trichoscopy are the foundation of accurate diagnosis and effective treatment.',
      aboutSections: [
        {
          title: 'Trichologist and trichoscopy in one place',
          description:
            'A specialist examines hair and scalp, listens to your concerns, and uses trichoscopy to assess follicle condition under magnification.',
        },
        {
          title: 'Accurate diagnosis',
          description:
            'Digital trichoscopy helps determine the cause of hair loss, seborrhea, alopecia and other issues — objective data, not guesswork.',
        },
        {
          title: 'Individual treatment plan',
          description:
            'Based on diagnosis, a personal plan is created including mesotherapy, medications, and care.',
        },
        {
          title: 'Result monitoring',
          description:
            'Treatment effectiveness can be reassessed with trichoscopy and the plan adjusted when needed.',
        },
      ],
      aboutFooter:
        'To find the cause of hair loss and receive proper treatment, visit Radeski Trichology Center — modern diagnostics and experienced specialists.',
    },
  ),

  'trihologiya-centr-lechenie-volos': L(
    {
      aboutTitle: "Nima uchun trixolog ko'rigi va trixoskopiyani aynan Radeski Skin Clinic'da o'tkazish kerak?",
      overview:
        "Radeski Skin Clinic trixologiya markazida soch va bosh terisi muammolarini kompleks yondashuv bilan hal qilamiz — trixolog konsultatsiyasi va kompyuter trixoskopiyasi aniq tashxis va samarali davolash rejasining asosi.",
      aboutSections: [
        {
          title: 'Trixolog va trixoskopiya bir joyda',
          description:
            "Mutaxassis soch va bosh terisini ko'rib chiqadi, shikoyatlaringizni tinglaydi va trixoskop yordamida follikulalar holatini kattalashtirilgan holda baholaydi.",
        },
        {
          title: 'Aniq diagnostika',
          description:
            "Raqamli trixoskopiya soch to'kilishi, seboreya, alopeciya va boshqa muammolarning sababini aniqlashga yordam beradi — taxmin emas, balki obyektiv ma'lumot.",
        },
        {
          title: 'Individual davolash rejasi',
          description:
            "Tashxis asosida mezoterapiya, dori-darmonlar va parvarish bo'yicha shaxsiy reja tuziladi.",
        },
        {
          title: 'Kuzatuv va natija',
          description:
            "Davolash samaradorligini trixoskop orqali qayta baholash va kerak bo'lsa rejani tuzatish mumkin.",
        },
      ],
      aboutFooter:
        "Soch to'kilishi sababini aniqlash va to'g'ri davolanish uchun Radeski trixologiya markaziga murojaat qiling — zamonaviy diagnostika va tajribali mutaxassislar siz bilan.",
    },
    {
      aboutTitle: 'Почему осмотр трихолога и трихоскопию лучше всего сделать в Radeski Skin Clinic?',
      overview:
        'В трихологическом центре Radeski Skin Clinic мы комплексно решаем проблемы волос и кожи головы — консультация трихолога и компьютерная трихоскопия являются основой точного диагноза и эффективного плана лечения.',
      aboutSections: [
        {
          title: 'Трихолог и трихоскопия в одном месте',
          description:
            'Специалист осматривает волосы и кожу головы, выслушивает жалобы и с помощью трихоскопа оценивает состояние фолликулов под увеличением.',
        },
        {
          title: 'Точная диагностика',
          description:
            'Цифровая трихоскопия помогает определить причину выпадения волос, себореи, алопеции и других проблем — не предположения, а объективные данные.',
        },
        {
          title: 'Индивидуальный план лечения',
          description:
            'На основе диагноза составляется персональный план: мезотерапия, медикаментозная терапия и уход.',
        },
        {
          title: 'Контроль результата',
          description:
            'Эффективность лечения можно повторно оценить с помощью трихоскопии и при необходимости скорректировать план.',
        },
      ],
      aboutFooter:
        'Чтобы выяснить причину выпадения волос и получить правильное лечение, обратитесь в трихологический центр Radeski — современная диагностика и опытные специалисты.',
    },
    {
      aboutTitle: 'Why have a trichologist consultation and trichoscopy at Radeski Skin Clinic?',
      overview:
        'At Radeski Skin Clinic Trichology Center we address hair and scalp concerns comprehensively — trichologist consultation and computerized trichoscopy are the foundation of accurate diagnosis and effective treatment.',
      aboutSections: [
        {
          title: 'Trichologist and trichoscopy in one place',
          description:
            'A specialist examines hair and scalp, listens to your concerns, and uses trichoscopy to assess follicle condition under magnification.',
        },
        {
          title: 'Accurate diagnosis',
          description:
            'Digital trichoscopy helps determine the cause of hair loss, seborrhea, alopecia and other issues — objective data, not guesswork.',
        },
        {
          title: 'Individual treatment plan',
          description:
            'Based on diagnosis, a personal plan is created including mesotherapy, medications, and care.',
        },
        {
          title: 'Result monitoring',
          description:
            'Treatment effectiveness can be reassessed with trichoscopy and the plan adjusted when needed.',
        },
      ],
      aboutFooter:
        'To find the cause of hair loss and receive proper treatment, visit Radeski Trichology Center — modern diagnostics and experienced specialists.',
    },
  ),

  'hollywood-spectra': L(
    {
      aboutTitle: "Nima uchun Hollywood Spectra apparatida pigmentatsiya davolashini aynan Radeski Skin Clinic'da o'tkazish kerak?",
      overview:
        "Hollywood Spectra — Lutronic ishlab chiqaruvchisining Q-switch lazer tizimi bo'lib, pigmentatsiya, post-akne va teri matligini davolashda samarali protokollarni taqdim etadi.",
      aboutSections: [
        {
          title: 'Professional Lutronic uskunasi',
          description:
            "Klinikamizda xalqaro standartlarga mos Hollywood Spectra lazer apparati qo'llaniladi — karbon piling, gold toning va pigmentatsiyani davolash protokollari.",
        },
        {
          title: 'Dermatolog nazorati',
          description:
            "Har bir seansdan oldin teri holati baholanadi va shifokor individual protokol tanlaydi.",
        },
        {
          title: 'Aniq ko\'rsatmalar',
          description:
            "Pigment dog'lar, melasma, post-akne qizarishi va teri teksturasidagi muammolar uchun maqsadli davolash.",
        },
        {
          title: 'Qisqa tiklanish',
          description:
            "Muolaja jarrohliksiz o'tadi, reabilitatsiya qisqa va shifokor tavsiyalariga rioya qilgan holda tezda odatiy hayotga qaytish mumkin.",
        },
      ],
      aboutFooter:
        "Pigmentatsiyadan xalos bo'lish va terini yangilash uchun Radeski Skin Clinic'da Hollywood Spectra protokollariga ishoning — zamonaviy texnologiya va tajribali mutaxassislar.",
    },
    {
      aboutTitle: 'Почему лечение пигментации на аппарате Hollywood Spectra лучше всего сделать в Radeski Skin Clinic?',
      overview:
        'Hollywood Spectra — лазерная система Lutronic на базе Q-switch, обеспечивающая эффективные протоколы при пигментации, постакне и тусклости кожи.',
      aboutSections: [
        {
          title: 'Профессиональное оборудование Lutronic',
          description:
            'В нашей клинике используется аппарат Hollywood Spectra, соответствующий международным стандартам — протоколы карбонового пилинга, gold toning и лечения пигментации.',
        },
        {
          title: 'Контроль дерматолога',
          description:
            'Перед каждым сеансом оценивается состояние кожи, и врач подбирает индивидуальный протокол.',
        },
        {
          title: 'Четкие показания',
          description:
            'Целенаправленное лечение пигментных пятен, мелазмы, постакне покраснения и проблем текстуры кожи.',
        },
        {
          title: 'Короткое восстановление',
          description:
            'Процедура неинвазивна, реабилитация короткая, и при соблюдении рекомендаций врача можно быстро вернуться к обычной жизни.',
        },
      ],
      aboutFooter:
        'Чтобы избавиться от пигментации и обновить кожу, доверьтесь протоколам Hollywood Spectra в Radeski Skin Clinic — современные технологии и опытные специалисты.',
    },
    {
      aboutTitle: 'Why have Hollywood Spectra pigmentation treatment at Radeski Skin Clinic?',
      overview:
        'Hollywood Spectra is Lutronic\'s Q-switch laser system offering effective protocols for pigmentation, post-acne marks, and dull skin.',
      aboutSections: [
        {
          title: 'Professional Lutronic equipment',
          description:
            'Our clinic uses a Hollywood Spectra device meeting international standards — carbon peel, gold toning, and pigmentation treatment protocols.',
        },
        {
          title: 'Dermatologist supervision',
          description:
            'Skin condition is assessed before each session and the physician selects an individualized protocol.',
        },
        {
          title: 'Clear indications',
          description:
            'Targeted treatment for pigment spots, melasma, post-acne redness, and skin texture concerns.',
        },
        {
          title: 'Short recovery',
          description:
            'The procedure is non-invasive with short downtime; you can return to normal activities quickly while following physician advice.',
        },
      ],
      aboutFooter:
        'To reduce pigmentation and renew your skin, trust Hollywood Spectra protocols at Radeski Skin Clinic — modern technology and experienced specialists.',
    },
  ),

  biorev: L(
    {
      aboutTitle: "Nima uchun mezoterapiya va biorevitalizatsiyani aynan Radeski Skin Clinic'da o'tkazish kerak?",
      overview:
        "Radeski Skin Clinic'da mezoterapiya va biorevitalizatsiya sertifikatlangan preparatlar, aniq dozalar va dermatolog nazoratida xavfsiz o'tkaziladi.",
      aboutSections: [
        {
          title: 'Sertifikatlangan preparatlar',
          description:
            "Faqat ishonchli ishlab chiqaruvchilarning original gialuron kislotasi va vitamin komplekslari qo'llaniladi.",
        },
        {
          title: 'Individual protokol',
          description:
            "Teri turi, yosh va muammoga qarab preparat tanlanadi, seanslar soni va chuqurligi belgilanadi.",
        },
        {
          title: 'Tajribali mutaxassislar',
          description:
            "Inyeksiyalarni malakali shifokorlar va kosmetologlar aniq texnika bilan amalga oshiradi.",
        },
        {
          title: 'Tabiiy natija',
          description:
            "Teri chuqur namlanadi, elastikligi va yorqinligi tiklanadi, yuz ifodasi tabiiy saqlanadi.",
        },
        {
          title: 'Xavfsizlik va steril sharoit',
          description:
            "Barcha muolajalar steril sharoitda, bir martalik asboblar va xalqaro xavfsizlik standartlariga rioya qilgan holda o'tkaziladi.",
        },
      ],
      aboutFooter:
        "Terini chuqur namlantirish, yangilash va yoshartirish uchun Radeski Skin Clinic'da mezoterapiya va biorevitalizatsiyaga ishoning — professional yondashuv va sifatli preparatlar.",
    },
    {
      aboutTitle: 'Почему мезотерапию и биоревитализацию лучше всего сделать в Radeski Skin Clinic?',
      overview:
        'В Radeski Skin Clinic мезотерапия и биоревитализация проводятся с использованием сертифицированных препаратов, точных доз и под контролем дерматолога.',
      aboutSections: [
        {
          title: 'Сертифицированные препараты',
          description:
            'Мы используем только оригинальную гиалуроновую кислоту и витаминные комплексы проверенных производителей.',
        },
        {
          title: 'Индивидуальный протокол',
          description:
            'Препарат, количество сеансов и глубина воздействия подбираются с учетом типа кожи, возраста и решаемой проблемы.',
        },
        {
          title: 'Опытные специалисты',
          description:
            'Инъекции выполняют квалифицированные врачи и косметологи с точной техникой введения.',
        },
        {
          title: 'Естественный результат',
          description:
            'Кожа глубоко увлажняется, восстанавливаются эластичность и сияние, мимика остается естественной.',
        },
        {
          title: 'Безопасность и стерильность',
          description:
            'Все процедуры проводятся в стерильных условиях с одноразовыми инструментами и соблюдением международных стандартов безопасности.',
        },
      ],
      aboutFooter:
        'Для глубокого увлажнения, обновления и омоложения кожи доверьтесь мезотерапии и биоревитализации в Radeski Skin Clinic — профессиональный подход и качественные препараты.',
    },
    {
      aboutTitle: 'Why have mesotherapy and biorevitalization at Radeski Skin Clinic?',
      overview:
        'At Radeski Skin Clinic mesotherapy and biorevitalization are performed with certified products, precise dosing, and dermatologist supervision.',
      aboutSections: [
        {
          title: 'Certified products',
          description:
            'We use only original hyaluronic acid and vitamin complexes from trusted manufacturers.',
        },
        {
          title: 'Individual protocol',
          description:
            'Product choice, session count, and injection depth are tailored to skin type, age, and your specific concern.',
        },
        {
          title: 'Experienced specialists',
          description:
            'Injections are performed by qualified physicians and cosmetologists using precise technique.',
        },
        {
          title: 'Natural-looking results',
          description:
            'Skin is deeply hydrated; elasticity and radiance are restored while facial expression remains natural.',
        },
        {
          title: 'Safety and sterility',
          description:
            'All procedures are performed in sterile conditions with disposable instruments and international safety standards.',
        },
      ],
      aboutFooter:
        'For deep hydration, renewal, and rejuvenation, trust mesotherapy and biorevitalization at Radeski Skin Clinic — professional care and quality products.',
    },
  ),
};

export function getServiceAboutContent(
  key: string,
  locale: Locale,
): ServiceAboutContent | null {
  const apiEntry = apiAboutOverrides[key];
  if (apiEntry) {
    return apiEntry[locale] ?? apiEntry.uz ?? null;
  }
  const entry = SERVICE_ABOUT_CATALOG[key];
  if (!entry) return null;
  return entry[locale] ?? entry.uz ?? null;
}

const apiAboutOverrides: Record<string, Partial<Record<Locale, ServiceAboutContent>>> = {};

export function hydrateServiceAboutFromSiteTexts(
  entries: { key: string; value_uz?: string | null; value_ru?: string | null; value_en?: string | null }[],
): void {
  for (const entry of entries) {
    if (!entry.key.startsWith('catalog.service-about.')) continue;
    const catalogKey = entry.key.slice('catalog.service-about.'.length);
    const parse = (value: string | null | undefined): ServiceAboutContent | undefined => {
      if (!value?.trim()) return undefined;
      try {
        return JSON.parse(value) as ServiceAboutContent;
      } catch {
        return undefined;
      }
    };
    apiAboutOverrides[catalogKey] = {
      uz: parse(entry.value_uz),
      ru: parse(entry.value_ru),
      en: parse(entry.value_en),
    };
  }
}
