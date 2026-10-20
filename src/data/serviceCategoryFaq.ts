import type { Locale } from '../types';

export interface CategoryFaqItem {
  question: string;
  answer: string;
}

type LocalizedFaq = Record<Locale, CategoryFaqItem[]>;

/**
 * Questions patients ask about a whole specialty, shown on its category page and sent as
 * FAQPage JSON-LD. Answers stick to what the clinic actually offers (equipment from
 * clinicEquipmentCatalog, branches from doctorBranches) and avoid prices, which change.
 */
export const SERVICE_CATEGORY_FAQ: Record<string, LocalizedFaq> = {
  dermatologiya: {
    uz: [
      {
        question: 'Dermatolog qanday kasalliklarni davolaydi?',
        answer:
          "Dermatolog teri, soch va tirnoq kasalliklarini davolaydi: akne va post-akne, psoriaz, vitiligo, ekzema va dermatitlar, rozasea, teri zamburug'i, toshmalar, so'gal va papillomalar. Xol va teri o'smalarini tekshirish ham dermatolog vazifasiga kiradi.",
      },
      {
        question: 'Dermatolog qabuli qanday o\'tadi?',
        answer:
          "Shifokor shikoyatlarni so'raydi, terini ko'zdan kechiradi, kerak bo'lsa dermatoskop bilan tekshiradi yoki laborator tahlil tayinlaydi. Qabul oxirida tashxis tushuntiriladi va davolash rejasi — dorilar, muolajalar va uy parvarishi — yoziladi.",
      },
      {
        question: 'Qabulga qanday tayyorlanish kerak?',
        answer:
          "Muammoli joyga qabuldan oldin krem va makiyaj surtmang, hozir ichayotgan va surtayotgan dorilaringiz ro'yxatini, avvalgi tahlil natijalarini olib keling. Bu shifokorga aniq tashxis qo'yishga yordam beradi.",
      },
      {
        question: 'Psoriaz va vitiligoni davolash mumkinmi?',
        answer:
          "Ha. Bu surunkali kasalliklar, ularni nazorat ostida ushlash va uzoq remissiyaga erishish mumkin. Klinikada dori bilan davolashdan tashqari Daavlin kabinalarida tor polosali UVB fototerapiya o'tkaziladi.",
      },
      {
        question: 'Bolalarni ham qabul qilasizlarmi?',
        answer: "Ha, bolalar va o'smirlar teri, soch va tirnoq muammolari bilan qabul qilinadi.",
      },
      {
        question: 'Dermatolog qayerda qabul qiladi?',
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida. Qabulga sayt orqali yoki +998 73 200-73-73 raqamiga qo'ng'iroq qilib yozilish mumkin.",
      },
    ],
    ru: [
      {
        question: 'Какие заболевания лечит дерматолог?',
        answer:
          'Дерматолог лечит заболевания кожи, волос и ногтей: акне и постакне, псориаз, витилиго, экзему и дерматиты, розацеа, грибковые поражения кожи, сыпь, бородавки и папилломы. Осмотр родинок и новообразований кожи тоже входит в его работу.',
      },
      {
        question: 'Как проходит приём дерматолога?',
        answer:
          'Врач расспрашивает о жалобах, осматривает кожу, при необходимости проводит дерматоскопию или назначает анализы. В конце приёма объясняет диагноз и составляет план лечения — препараты, процедуры и домашний уход.',
      },
      {
        question: 'Как подготовиться к приёму?',
        answer:
          'Не наносите крем и макияж на проблемную зону перед приёмом, возьмите список препаратов, которые принимаете или наносите сейчас, и результаты прошлых анализов. Это помогает врачу точнее поставить диагноз.',
      },
      {
        question: 'Можно ли вылечить псориаз и витилиго?',
        answer:
          'Это хронические заболевания: их можно держать под контролем и добиться длительной ремиссии. Помимо медикаментозного лечения, в клинике проводится узкополосная UVB-фототерапия в кабинах Daavlin.',
      },
      {
        question: 'Вы принимаете детей?',
        answer: 'Да, детей и подростков принимаем с проблемами кожи, волос и ногтей.',
      },
      {
        question: 'Где принимает дерматолог?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
    en: [
      {
        question: 'What conditions does a dermatologist treat?',
        answer:
          'A dermatologist treats skin, hair and nail conditions: acne and post-acne marks, psoriasis, vitiligo, eczema and dermatitis, rosacea, fungal skin infections, rashes, warts and papillomas. Checking moles and skin growths is part of the job too.',
      },
      {
        question: 'What happens at a dermatology visit?',
        answer:
          'The doctor asks about your symptoms, examines the skin, and uses dermoscopy or orders lab tests when needed. At the end you get the diagnosis explained and a treatment plan covering medication, procedures and home care.',
      },
      {
        question: 'How should I prepare for the visit?',
        answer:
          'Do not apply cream or make-up to the problem area beforehand, and bring a list of the medicines you take or apply and any previous test results. This helps the doctor make an accurate diagnosis.',
      },
      {
        question: 'Can psoriasis and vitiligo be treated?',
        answer:
          'Yes. They are chronic conditions that can be kept under control with long remissions. Besides medication, the clinic offers narrowband UVB phototherapy in Daavlin cabins.',
      },
      {
        question: 'Do you see children?',
        answer: 'Yes, children and teenagers are seen for skin, hair and nail problems.',
      },
      {
        question: 'Where does the dermatologist see patients?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand. You can book on the website or by calling +998 73 200-73-73.',
      },
    ],
  },

  'apparatnaya-kosmetologiya': {
    uz: [
      {
        question: 'Klinikada qanday apparatlar bor?',
        answer:
          "IPL InMode, Lutronic Derma V qon tomir lazeri, Hollywood Spectra Q-switch lazeri, LaseMD Ultra 1927 nm tuliy lazeri, DEKA CO2 va aleksandrit lazerlari hamda Surgitron radiochastota apparati. Har bir apparat bo'yicha batafsil sahifa saytda bor.",
      },
      {
        question: 'Apparat muolajasidan oldin konsultatsiya kerakmi?',
        answer:
          "Ha. Dermatokosmetolog teri turini, muammoni va qarshi ko'rsatmalarni baholaydi, keyin apparat va seanslar sonini tanlaydi. Noto'g'ri tanlangan apparat yoki rejim kutilgan natijani bermaydi.",
      },
      {
        question: 'Muolajalar og\'riqlimi?',
        answer:
          "Ko'pchilik muolajalarda faqat issiqlik yoki yengil chimchilash seziladi. Sezgir sohalarda sovutish va kerak bo'lsa og'riqsizlantiruvchi krem qo'llaniladi.",
      },
      {
        question: 'Nechta seans kerak bo\'ladi?',
        answer:
          "Bu muammo va apparatga bog'liq: tomir yulduzchalari va pigment ko'pincha 1–3 seansda kamayadi, akne, post-akne va teri teksturasi uchun odatda kurs kerak bo'ladi. Aniq son konsultatsiyada aytiladi.",
      },
      {
        question: 'Muolajadan keyin qanday parvarish kerak?',
        answer:
          "Bir necha kun yengil qizarish bo'lishi mumkin. Terini quyoshdan himoya qilish (SPF 50), solyariy va issiq hammomdan saqlanish, shifokor tavsiya qilgan vositalarni ishlatish kerak.",
      },
      {
        question: 'Yozda lazer muolajasi qilsa bo\'ladimi?',
        answer:
          "Ko'p muolajalarni yil davomida qilish mumkin, lekin yozda quyoshdan himoyaga ayniqsa qat'iy rioya qilinadi. Ba'zi muolajalar uchun shifokor kuz-qishni tavsiya qiladi — bu konsultatsiyada hal qilinadi.",
      },
    ],
    ru: [
      {
        question: 'Какие аппараты есть в клинике?',
        answer:
          'IPL InMode, сосудистый лазер Lutronic Derma V, Q-switch лазер Hollywood Spectra, тулиевый лазер LaseMD Ultra 1927 нм, CO2 и александритовый лазеры DEKA, радиочастотный аппарат Surgitron. На сайте есть подробная страница по каждому аппарату.',
      },
      {
        question: 'Нужна ли консультация перед аппаратной процедурой?',
        answer:
          'Да. Дерматокосметолог оценивает тип кожи, проблему и противопоказания, затем подбирает аппарат и количество сеансов. Неверно выбранный аппарат или режим не даст ожидаемого результата.',
      },
      {
        question: 'Больно ли делать процедуры?',
        answer:
          'В большинстве процедур ощущается только тепло или лёгкое покалывание. На чувствительных зонах используется охлаждение и при необходимости анестезирующий крем.',
      },
      {
        question: 'Сколько сеансов понадобится?',
        answer:
          'Зависит от проблемы и аппарата: сосудистые звёздочки и пигмент часто уменьшаются за 1–3 сеанса, для акне, постакне и текстуры кожи обычно нужен курс. Точное число врач назовёт на консультации.',
      },
      {
        question: 'Какой уход нужен после процедуры?',
        answer:
          'Несколько дней возможно лёгкое покраснение. Нужно защищать кожу от солнца (SPF 50), избегать солярия и горячей бани, использовать средства, рекомендованные врачом.',
      },
      {
        question: 'Можно ли делать лазер летом?',
        answer:
          'Многие процедуры можно делать круглый год, но летом особенно строго соблюдается защита от солнца. Для некоторых процедур врач рекомендует осень и зиму — это решается на консультации.',
      },
    ],
    en: [
      {
        question: 'What devices does the clinic have?',
        answer:
          'IPL InMode, the Lutronic Derma V vascular laser, the Hollywood Spectra Q-switch laser, the LaseMD Ultra 1927 nm thulium laser, DEKA CO2 and alexandrite lasers, and the Surgitron radiofrequency device. Each device has its own detailed page on the site.',
      },
      {
        question: 'Do I need a consultation before a device treatment?',
        answer:
          'Yes. The dermatocosmetologist assesses your skin type, the problem and any contraindications, then picks the device and number of sessions. The wrong device or settings will not give the expected result.',
      },
      {
        question: 'Are the treatments painful?',
        answer:
          'Most treatments feel like warmth or a light snapping sensation. Cooling, and numbing cream when needed, are used on sensitive areas.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'It depends on the problem and the device: spider veins and pigmentation often fade in 1–3 sessions, while acne, post-acne marks and skin texture usually need a course. The doctor gives the exact number at the consultation.',
      },
      {
        question: 'What aftercare is needed?',
        answer:
          'Mild redness may last a few days. Protect the skin from the sun (SPF 50), avoid tanning beds and hot saunas, and use the products your doctor recommends.',
      },
      {
        question: 'Can I have laser treatment in summer?',
        answer:
          'Many treatments can be done all year round, but sun protection is especially strict in summer. For some treatments the doctor recommends autumn or winter; this is decided at the consultation.',
      },
    ],
  },

  'clinika-patologii-nogtej': {
    uz: [
      {
        question: "Ichiga o'sgan tirnoqni olib tashlash og'riqlimi?",
        answer:
          "Yo'q, muolaja mahalliy og'riqsizlantirish bilan bajariladi. Keyingi kunlarda yengil noqulaylik bo'lishi mumkin, podolog bog'lash va parvarish bo'yicha tushuntirib beradi.",
      },
      {
        question: 'Titan ip nima va u qachon qo\'yiladi?',
        answer:
          "Titan ip — tirnoq chetiga o'rnatiladigan ingichka korreksiya simi. U tirnoq chetlarini ko'tarib, o'sish yo'nalishini asta-sekin to'g'rilaydi. Tirnoq qayta-qayta ichiga o'sganda yoki operatsiyadan keyin muammo qaytganda qo'llaniladi.",
      },
      {
        question: "Tirnoq zamburug'i qancha vaqtda davolanadi?",
        answer:
          "Davolash sog'lom tirnoq to'liq o'sib chiqquncha davom etadi: qo'l tirnoqlari uchun 4–6 oy, oyoq tirnoqlari uchun 9–12 oy. Tashxis laborator tahlil bilan tasdiqlanadi, davolashda apparat bilan tozalash, lazer va dorilar birga qo'llaniladi.",
      },
      {
        question: 'Tibbiy pedikyur oddiy pedikyurdan nimasi bilan farq qiladi?',
        answer:
          "Tibbiy pedikyurni podolog bajaradi: ishlov apparat bilan, steril asboblarda o'tkaziladi, qadoq, yoriq, qalinlashgan va ichiga o'sgan tirnoqlar davolanadi. Maqsad — chiroy emas, oyoq salomatligi.",
      },
      {
        question: 'Qandli diabeti bor bemorlarga muolaja qilinadimi?',
        answer:
          "Ha, lekin alohida ehtiyotkorlik bilan va shifokor nazoratida. Diabetda oyoqdagi kichik jarohat ham uzoq bitishi mumkin, shuning uchun oyoq parvarishini mutaxassisga topshirgan ma'qul.",
      },
      {
        question: 'Podolog qayerda qabul qiladi?',
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida kattalar va bolalar qabul qilinadi. Qabulga sayt orqali yoki +998 73 200-73-73 raqami orqali yozilish mumkin.",
      },
    ],
    ru: [
      {
        question: 'Больно ли удалять вросший ноготь?',
        answer:
          'Нет, процедура проводится под местной анестезией. В следующие дни возможен лёгкий дискомфорт; подолог объяснит, как делать перевязки и ухаживать за пальцем.',
      },
      {
        question: 'Что такое титановая нить и когда её ставят?',
        answer:
          'Титановая нить — тонкая корректирующая проволока, которая устанавливается на край ногтя. Она приподнимает края и постепенно исправляет направление роста. Её применяют, когда ноготь врастает повторно или проблема вернулась после операции.',
      },
      {
        question: 'Сколько лечится грибок ногтей?',
        answer:
          'Лечение продолжается, пока полностью не отрастёт здоровый ноготь: 4–6 месяцев на руках и 9–12 месяцев на ногах. Диагноз подтверждается лабораторным анализом, в лечении сочетаются аппаратная обработка, лазер и препараты.',
      },
      {
        question: 'Чем медицинский педикюр отличается от обычного?',
        answer:
          'Медицинский педикюр выполняет подолог: обработка проводится аппаратом и стерильными инструментами, лечатся мозоли, трещины, утолщённые и вросшие ногти. Цель — не красота, а здоровье стоп.',
      },
      {
        question: 'Делаете ли вы процедуры пациентам с диабетом?',
        answer:
          'Да, но с особой осторожностью и под контролем врача. При диабете даже небольшая ранка на стопе может долго заживать, поэтому уход за стопами лучше доверить специалисту.',
      },
      {
        question: 'Где принимает подолог?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде, взрослых и детей. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
    en: [
      {
        question: 'Is ingrown toenail removal painful?',
        answer:
          'No, the procedure is done under local anaesthesia. Some mild discomfort is possible over the next few days, and the podiatrist explains dressing and aftercare.',
      },
      {
        question: 'What is a titanium wire and when is it used?',
        answer:
          'A titanium wire is a thin corrective wire fitted to the nail edge. It lifts the edges and gradually corrects the growth direction. It is used when the nail keeps growing in or the problem returns after surgery.',
      },
      {
        question: 'How long does nail fungus treatment take?',
        answer:
          'Treatment continues until a healthy nail fully grows out: 4–6 months for fingernails and 9–12 months for toenails. The diagnosis is confirmed by a lab test, and treatment combines device cleaning, laser and medication.',
      },
      {
        question: 'How is a medical pedicure different from a regular one?',
        answer:
          'A medical pedicure is done by a podiatrist with a device and sterile instruments, treating calluses, cracks, thickened and ingrown nails. The goal is foot health, not looks.',
      },
      {
        question: 'Do you treat patients with diabetes?',
        answer:
          'Yes, with extra care and under a doctor’s supervision. With diabetes even a small foot wound can heal slowly, so foot care is best left to a specialist.',
      },
      {
        question: 'Where does the podiatrist see patients?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand, for adults and children. You can book on the website or by calling +998 73 200-73-73.',
      },
    ],
  },
};

export function getCategoryFaq(categoryId: string, locale: Locale): CategoryFaqItem[] {
  return SERVICE_CATEGORY_FAQ[categoryId]?.[locale] ?? [];
}
