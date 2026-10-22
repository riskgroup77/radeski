import type { Locale } from '../types';
import { getServiceAboutOverride, type ServiceAboutContent } from './serviceAboutOverrides';

export type { ServiceAboutContent };
export { hydrateServiceAboutFromSiteTexts } from './serviceAboutOverrides';

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
            "Radeski Skin Clinic — Farg'ona viloyatida dermatoonkolog shifokor qabul olib boradigan yagona klinika. U xavfsiz va xavfli teri o'smalarini diagnostika qiladi va xavfli o'zgarishlarni eng erta bosqichlarda aniqlashga yordam beradi.",
        },
        {
          title: 'Zamonaviy dermatoskopiya',
          description:
            "Qabul vaqtida raqamli dermatoskopiya o'tkaziladi — terini ko'p baravar kattalashtirilgan holda og'riqsiz tekshirish. Usul xollar (nevus) va boshqa hosilalarning tuzilishini batafsil baholash, ko'z bilan ko'rinmaydigan o'zgarishlarni aniqlash va keyingi kuzatuv yoki davolash zarurligini belgilash imkonini beradi.",
        },
        {
          title: 'Biopsiya imkoniyati',
          description:
            "Tekshiruv paytida ko'rsatmalar bo'lsa, klinikamizda darhol teri biopsiyasi va keyingi gistologik tekshiruvni o'tkazish mumkin. Bu tashxisni tasdiqlashning eng ma'lumotli usullaridan biri bo'lib, boshqa tibbiy muassasalarga murojaat qilmasdan davolash taktikasini belgilashga yordam beradi.",
        },
        {
          title: 'Barcha diagnostika bosqichlari bir klinikada',
          description:
            "Radeski Skin Clinic'da bemor butun yo'lni bir joyda bosib o'tishi mumkin: dermatoonkolog konsultatsiyasi; dermatoskopik tekshiruv; ko'rsatmalar bo'yicha biopsiya; xavfsiz o'smalarni zamonaviy usullar bilan olib tashlash; keyingi kuzatuv va davolash.",
        },
        {
          title: 'Dermatoonkologga qachon murojaat qilish kerak?',
          description:
            "Konsultatsiya tavsiya etiladi, agar: yangi xol (nevus) yoki hosila paydo bo'lsa; mavjud xol (nevus)ning shakli, o'lchami yoki rangi o'zgarsa; qichish, og'riq, qon ketish yoki yallig'lanish bo'lsa; terida uzoq davom etayotgan yara yoki yaracha bo'lsa; profilaktik ko'rikdan o'tib, xollar (nevus)ingiz xavfsizligiga ishonch hosil qilmoqchi bo'lsangiz.",
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
  'clinika-patologii-nogtej': L(
    {
      aboutTitle: "Tirnoq va oyoq muammolari: Radeski Skin Clinic'da nimalar davolanadi?",
      overview:
        "Tirnoq va oyoq patologiyasi — oyoq panjasi, tovon va tirnoqlar kasalliklarini tibbiy usullar bilan davolash yo'nalishi. Radeski Skin Clinic'da qabulni podolog va dermatolog olib boradi: muolajalar apparat yordamida, steril asboblarda bajariladi, kerak bo'lsa laborator tahlil bilan tasdiqlanadi. Farg'ona va Qo'qon filiallarida kattalar va bolalar qabul qilinadi.",
      aboutSections: [
        {
          title: "Ichiga o'sgan tirnoq (onixokriptoz)",
          description:
            "Tirnoq cheti barmoq terisiga botib o'sadi — og'riq, qizarish, shish, ba'zan yiringlash paydo bo'ladi. Ko'pincha oyoq bosh barmog'ida uchraydi; sabablari — tirnoqni juda qisqa yoki burchaklarini chuqur kesish, tor poyabzal va jarohatlar. Podolog teriga botgan qismni mahalliy og'riqsizlantirish bilan olib tashlaydi va kerak bo'lsa titan ip o'rnatadi: ip tirnoq chetlarini ko'tarib, uning o'sish yo'nalishini asta-sekin to'g'rilaydi. Ko'p hollarda tirnoqni to'liq olib tashlash shart emas, operatsiyadan keyin qaytgan holatlarda esa aynan korreksiya muammoning sababini bartaraf qiladi.",
        },
        {
          title: "Tirnoq zamburug'i (onixomikoz)",
          description:
            "Tirnoq sarg'ayadi, qalinlashadi, mo'rtlashadi va ko'chadi. Zamburug' o'z-o'zidan o'tmaydi va boshqa tirnoqlarga hamda oila a'zolariga yuqishi mumkin. Tashxis laborator tahlil bilan tasdiqlanadi; davolashda tirnoqni apparat bilan tozalash, lazer terapiyasi va dori vositalari birga qo'llaniladi. Sog'lom tirnoq o'sib chiqquncha kuzatiladi: qo'l tirnoqlari 4–6 oyda, oyoq tirnoqlari 9–12 oyda to'liq yangilanadi.",
        },
        {
          title: 'Qalinlashgan va shakli o\'zgargan tirnoqlar',
          description:
            "Yosh, jarohat, zamburug' yoki poyabzal bosimi tufayli tirnoq qalinlashib, egilib qolishi mumkin. Bunday tirnoqni oddiy qaychi bilan kesish qiyin va og'riqli. Podolog tirnoq plastinkasini maxsus apparat bilan qatlam-qatlam ingichkalashtiradi va shaklini to'g'rilaydi — og'riq va bosim kamayadi, tirnoqni keyin parvarish qilish osonlashadi.",
        },
        {
          title: 'Qadoq, mozol va natoptish',
          description:
            "Noqulay poyabzal va oyoqqa notekis yuklama teri qalinlashuviga olib keladi. Yadrosiz mozol va natoptish apparat bilan og'riqsiz olib tashlanadi; yadroli mozolda yadro ham olib tashlanadi, aks holda u qayta paydo bo'ladi. Shifokor sababni ham tushuntiradi: poyabzal, yurish va uy parvarishi bo'yicha tavsiya beradi.",
        },
        {
          title: 'Tovon yoriqlari va quruq teri',
          description:
            "Quruq, qalinlashgan tovon terisi yoriladi, yurganda og'riydi va infeksiya kirishi uchun eshik ochadi. Apparat bilan tibbiy ishlov qalinlashgan qatlamni yo'qotadi, yoriqlar parvarish vositalari bilan bitkaziladi. Yoriqlar tez-tez qaytsa, zamburug' yoki boshqa teri kasalligi bor-yo'qligi tekshiriladi.",
        },
        {
          title: 'Qandli diabet va sezgir oyoqlar',
          description:
            "Qandli diabetda oyoq terisi va tirnoqlarga alohida ehtiyot kerak: kichik jarohat ham uzoq bitishi mumkin. Bunday bemorlarga tibbiy pedikyur va tirnoq muolajalari ehtiyotkorlik bilan, shifokor nazoratida bajariladi.",
        },
        {
          title: 'Dermatologik yondashuv',
          description:
            "Tirnoq va tovondagi o'zgarishlar ba'zan psoriaz, ekzema yoki boshqa teri kasalligi belgisi bo'ladi. Klinikada podolog, dermatolog va laboratoriya bir joyda ishlaydi, shuning uchun tashxis va davolash boshqa joyga yo'naltirmasdan, bitta rejada olib boriladi.",
        },
        {
          title: "Profilaktika: tirnoq va oyoqni qanday asrash kerak?",
          description:
            "Oyoq tirnoqlarini to'g'ri chiziq bo'ylab, burchaklarini chuqur kesmasdan qisqartiring. Barmoqlarni siqmaydigan, nafas oladigan poyabzal kiying, paypoqni har kuni almashtiring va oyoqni yuvgandan keyin barmoqlar orasini yaxshilab quriting. Hovuz, sauna va sport zalida shaxsiy shippak ishlating, boshqalarning sochiq va poyabzalidan foydalanmang. Tovon terisini muntazam namlantiring. Tirnoq rangi o'zgarsa, og'riq yoki qizarish paydo bo'lsa, muammo chuqurlashmasdan podologga murojaat qiling — erta bosqichda davolash ancha oson va tez.",
        },
      ],
      aboutFooter:
        "Og'riq, qizarish yoki tirnoq rangining o'zgarishini uyda o'zingiz davolashga urinmang — ichiga o'sgan tirnoqni kesish yoki zamburug'ni bir xil krem bilan davolash muammoni chuqurlashtirishi mumkin. Podolog ko'rigi sababni aniqlaydi va eng yumshoq usulni tanlaydi.",
    },
    {
      aboutTitle: 'Проблемы ногтей и стоп: что лечат в Radeski Skin Clinic?',
      overview:
        'Патология ногтей и стопы — медицинское лечение заболеваний стоп, пяток и ногтей. В Radeski Skin Clinic приём ведут подолог и дерматолог: процедуры выполняются аппаратом и стерильными инструментами, при необходимости диагноз подтверждается лабораторным анализом. В филиалах в Фергане и Коканде принимают взрослых и детей.',
      aboutSections: [
        {
          title: 'Вросший ноготь (онихокриптоз)',
          description:
            'Край ногтя врастает в кожу пальца — появляются боль, покраснение, отёк, иногда нагноение. Чаще страдает большой палец стопы; причины — слишком короткая стрижка или глубоко срезанные уголки, тесная обувь и травмы. Подолог удаляет вросшую часть под местной анестезией и при необходимости устанавливает титановую нить: она приподнимает края ногтя и постепенно исправляет направление его роста. Во многих случаях удалять ноготь полностью не нужно, а при рецидиве после операции именно коррекция устраняет причину.',
        },
        {
          title: 'Грибок ногтей (онихомикоз)',
          description:
            'Ноготь желтеет, утолщается, крошится и отслаивается. Грибок не проходит сам и может передаться на другие ногти и членам семьи. Диагноз подтверждается лабораторным анализом; в лечении сочетаются аппаратная обработка ногтя, лазерная терапия и препараты. Наблюдение продолжается, пока не отрастёт здоровый ноготь: на руках ногти обновляются за 4–6 месяцев, на ногах — за 9–12 месяцев.',
        },
        {
          title: 'Утолщённые и деформированные ногти',
          description:
            'Из-за возраста, травмы, грибка или давления обуви ноготь может утолщаться и искривляться. Обычными ножницами его трудно и больно стричь. Подолог послойно истончает ногтевую пластину специальным аппаратом и выравнивает форму — боль и давление уменьшаются, ухаживать за ногтем становится проще.',
        },
        {
          title: 'Мозоли и натоптыши',
          description:
            'Неудобная обувь и неравномерная нагрузка на стопу приводят к утолщению кожи. Мозоли без стержня и натоптыши безболезненно удаляются аппаратом; у стержневой мозоли удаляется и стержень, иначе она появится снова. Врач объясняет и причину — даёт рекомендации по обуви, ходьбе и домашнему уходу.',
        },
        {
          title: 'Трещины пяток и сухая кожа',
          description:
            'Сухая утолщённая кожа пяток трескается, болит при ходьбе и открывает путь инфекции. Медицинская аппаратная обработка убирает утолщённый слой, трещины заживают с помощью средств ухода. Если трещины возвращаются, проверяют, нет ли грибка или другого заболевания кожи.',
        },
        {
          title: 'Сахарный диабет и чувствительные стопы',
          description:
            'При сахарном диабете кожа стоп и ногти требуют особой осторожности: даже небольшая ранка может долго заживать. Медицинский педикюр и процедуры на ногтях у таких пациентов выполняются бережно, под контролем врача.',
        },
        {
          title: 'Дерматологический подход',
          description:
            'Изменения ногтей и пяток иногда оказываются признаком псориаза, экземы или другого заболевания кожи. Подолог, дерматолог и лаборатория работают в одной клинике, поэтому диагностика и лечение проходят по одному плану, без направлений в другие места.',
        },
        {
          title: 'Профилактика: как сохранить здоровье ногтей и стоп',
          description:
            'Подстригайте ногти на ногах по прямой линии, не срезая уголки глубоко. Носите обувь, которая не сдавливает пальцы и пропускает воздух, меняйте носки ежедневно и тщательно просушивайте кожу между пальцами после мытья. В бассейне, сауне и спортзале пользуйтесь своими тапочками, не берите чужие полотенца и обувь. Регулярно увлажняйте кожу пяток. Если цвет ногтя изменился, появились боль или покраснение, обратитесь к подологу, пока проблема не стала глубже: на ранней стадии лечение проще и быстрее.',
        },
      ],
      aboutFooter:
        'Не пытайтесь лечить боль, покраснение или изменение цвета ногтя самостоятельно — подрезание вросшего ногтя или лечение грибка случайным кремом может усугубить проблему. Осмотр подолога выявит причину и подберёт самый щадящий метод.',
    },
    {
      aboutTitle: 'Nail and foot problems: what is treated at Radeski Skin Clinic?',
      overview:
        'Nail and foot pathology is the medical treatment of foot, heel and nail conditions. At Radeski Skin Clinic patients are seen by a podiatrist and a dermatologist: procedures are done with a device and sterile instruments, and the diagnosis is confirmed by a lab test when needed. Adults and children are seen at the Fergana and Kokand branches.',
      aboutSections: [
        {
          title: 'Ingrown toenail (onychocryptosis)',
          description:
            'The nail edge grows into the skin of the toe, causing pain, redness, swelling and sometimes infection. The big toe is affected most often; causes include cutting nails too short or the corners too deep, tight shoes and injuries. The podiatrist removes the ingrown part under local anaesthesia and, when needed, fits a titanium wire that lifts the nail edges and gradually corrects the growth direction. In many cases the whole nail does not need removing, and when the problem returns after surgery, correction is what addresses the cause.',
        },
        {
          title: 'Nail fungus (onychomycosis)',
          description:
            'The nail turns yellow, thickens, crumbles and lifts. Fungus does not go away on its own and can spread to other nails and family members. The diagnosis is confirmed by a lab test; treatment combines device cleaning of the nail, laser therapy and medication. Follow-up continues until a healthy nail grows out: fingernails renew in 4–6 months, toenails in 9–12 months.',
        },
        {
          title: 'Thickened and deformed nails',
          description:
            'Age, injury, fungus or shoe pressure can make a nail thick and curved, which is hard and painful to cut with ordinary scissors. The podiatrist thins the nail plate layer by layer with a special device and corrects its shape, relieving pain and pressure and making the nail easier to care for.',
        },
        {
          title: 'Calluses and corns',
          description:
            'Uncomfortable shoes and uneven load on the foot thicken the skin. Calluses without a core are removed painlessly with a device; for a corn with a core, the core is removed too, otherwise it comes back. The doctor also explains the cause and advises on footwear, walking and home care.',
        },
        {
          title: 'Cracked heels and dry skin',
          description:
            'Dry, thickened heel skin cracks, hurts when walking and lets infection in. Medical device treatment removes the thickened layer, and the cracks heal with care products. If cracks keep coming back, the skin is checked for fungus or another skin condition.',
        },
        {
          title: 'Diabetes and sensitive feet',
          description:
            'With diabetes, the skin of the feet and the nails need extra care, because even a small wound can heal slowly. Medical pedicure and nail procedures for these patients are done gently, under a doctor’s supervision.',
        },
        {
          title: 'A dermatological approach',
          description:
            'Changes in nails and heels are sometimes a sign of psoriasis, eczema or another skin disease. The podiatrist, dermatologist and lab work in one clinic, so diagnosis and treatment follow a single plan without referrals elsewhere.',
        },
        {
          title: 'Prevention: how to keep nails and feet healthy',
          description:
            'Cut toenails straight across without trimming the corners deeply. Wear shoes that do not squeeze the toes and let the feet breathe, change socks daily and dry carefully between the toes after washing. Use your own slippers at pools, saunas and gyms, and do not share towels or shoes. Moisturise the heels regularly. If a nail changes colour or pain or redness appears, see a podiatrist before the problem gets deeper: early treatment is easier and faster.',
        },
      ],
      aboutFooter:
        'Do not try to treat pain, redness or nail discoloration on your own — cutting an ingrown nail or treating fungus with a random cream can make things worse. A podiatrist visit finds the cause and picks the gentlest method.',
    },
  ),
};

export function getServiceAboutContent(
  key: string,
  locale: Locale,
): ServiceAboutContent | null {
  const apiEntry = getServiceAboutOverride(key);
  if (apiEntry) {
    return apiEntry[locale] ?? apiEntry.uz ?? null;
  }
  const entry = SERVICE_ABOUT_CATALOG[key];
  if (!entry) return null;
  return entry[locale] ?? entry.uz ?? null;
}
