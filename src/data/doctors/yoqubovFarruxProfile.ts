import type { DoctorProfileContent } from '../../types';

export const YOQUBOV_FARRUX_PROFILE: {
  uz: DoctorProfileContent;
  ru: DoctorProfileContent;
  en: DoctorProfileContent;
} = {
  uz: {
    aboutTitle: 'Mutaxassis haqida',
    about: [
      "Yoqubov Farrux Farxodjon o'g'li — dermatolog-trixolog. Teri va soch bilan bog'liq muammolarni aniqlash, ularning sabablarini o'rganish va bemorga mos davolash rejasini ishlab chiqish bilan shug'ullanadi.",
      "Har bir bemorning holatiga individual yondashadi, tashxis va tavsiyalarni tushunarli tilda izohlashga intiladi.",
    ],
    quote:
      "Maqsadim — bemorga nafaqat davolanish yo'lini ko'rsatish, balki o'z salomatligi haqida ongli qaror qabul qilishida ham yordam berish.",
    sections: [
      {
        title: "Murojaat qilish mumkin bo'lgan holatlar",
        paragraphs: [
          "Teri va soch holatini baholash, muammoning ehtimoliy sabablarini aniqlash hamda keyingi tekshiruv va davolash yo'lini belgilash bo'yicha maslahat beradi. Quyidagi shikoyatlar bilan murojaat qilishingiz mumkin:",
        ],
        items: [
          "Soch to'kilishi, siyraklashishi yoki o'sishining sekinlashishi",
          "Bosh terisining qichishishi, qipiqlanishi va yog'lanishi",
          "Husnbuzar va teridagi yallig'lanishlar",
          'Terining qurishi, qizarishi yoki toshma toshishi',
          'Pigmentatsiya va boshqa dermatologik muammolar',
        ],
      },
      {
        title: 'Ish uslubi',
        paragraphs: [
          "Davolash bemorni tinglash va muammoni sinchiklab baholashdan boshlanadi. Teri yoki sochdagi o'zgarishlar sababini aniqlash uchun bemorning shikoyatlari, salomatlik tarixi va zarur hollarda tekshiruvlar hisobga olinadi, so'ng individual tavsiyalar va davolash rejasi tuziladi.",
          "Bemor bilan ochiq muloqot, tashxis va tavsiyalarni sodda tushuntirish hamda davolash jarayonidagi savollarga e'tibor bilan yondashish uning uchun muhim.",
        ],
      },
      {
        title: "Ta'lim va tajriba",
        paragraphs: [
          "2020-yilda Toshkent pediatriya tibbiyot institutini tamomlagan, dermatovenerologiya bo'yicha tahsil olib, dermatologiya va trixologiya yo'nalishida faoliyatini davom ettirgan.",
          "2022–2024-yillarda Farg'ona viloyati teri-tanosil kasalliklari dispanserida ishlagan. Hozirda Radeski Skin Clinic klinikasida dermatolog-trixolog sifatida bemorlarni qabul qiladi.",
        ],
      },
      {
        title: 'Kasbiy rivojlanish va pedagogik faoliyat',
        paragraphs: [
          "Dubay (BAA) va Tbilisi (Gruziya) shaharlarida malaka oshirgan. 2023-yildan buyon Farg'ona jamoat salomatligi tibbiyot institutida talabalarga dars beradi.",
          "Kasbiy qiziqishlari: dermatologik va trixologik muammolar sabablarini chuqur o'rganish, zamonaviy diagnostika va davolash yondashuvlarini amaliyotda qo'llash hamda har bir bemor uchun individual yechim topish.",
        ],
      },
      {
        title: 'Qabul',
        paragraphs: [
          "Radeski Skin Clinic — Farg'ona filiali",
          "Teri va soch bilan bog'liq muammolar bo'yicha qabul qiladi.",
        ],
      },
    ],
  },
  ru: {
    aboutTitle: 'О специалисте',
    about: [
      'Якубов Фаррух Фарходжон угли — дерматолог-трихолог. Выявляет проблемы кожи и волос, изучает их причины и составляет план лечения, подходящий конкретному пациенту.',
      'Подходит к каждому пациенту индивидуально и старается объяснять диагноз и рекомендации понятным языком.',
    ],
    quote:
      'Моя цель — не только показать пациенту путь лечения, но и помочь ему принять осознанное решение о своём здоровье.',
    sections: [
      {
        title: 'С чем можно обратиться',
        paragraphs: [
          'Консультирует по оценке состояния кожи и волос, выявлению возможных причин проблемы и выбору дальнейшего обследования и лечения. Можно обратиться с такими жалобами:',
        ],
        items: [
          'Выпадение, поредение или замедленный рост волос',
          'Зуд, шелушение и жирность кожи головы',
          'Акне и воспалительные высыпания на коже',
          'Сухость, покраснение кожи или высыпания',
          'Пигментация и другие дерматологические проблемы',
        ],
      },
      {
        title: 'Стиль работы',
        paragraphs: [
          'Лечение начинается с того, чтобы выслушать пациента и тщательно оценить проблему. Чтобы найти причину изменений кожи или волос, учитываются жалобы, анамнез и при необходимости результаты обследований — после этого составляются индивидуальные рекомендации и план лечения.',
          'Для него важны открытое общение с пациентом, простое объяснение диагноза и рекомендаций и внимательное отношение к вопросам, возникающим в ходе лечения.',
        ],
      },
      {
        title: 'Образование и опыт',
        paragraphs: [
          'В 2020 году окончил Ташкентский педиатрический медицинский институт, получил подготовку по дерматовенерологии и продолжил работу в дерматологии и трихологии.',
          'В 2022–2024 годах работал в Ферганском областном кожно-венерологическом диспансере. Сейчас ведёт приём как дерматолог-трихолог в Radeski Skin Clinic.',
        ],
      },
      {
        title: 'Профессиональное развитие и преподавание',
        paragraphs: [
          'Повышал квалификацию в Дубае (ОАЭ) и Тбилиси (Грузия). С 2023 года преподаёт студентам в Ферганском медицинском институте общественного здоровья.',
          'Профессиональные интересы: глубокое изучение причин дерматологических и трихологических проблем, применение современных подходов к диагностике и лечению и поиск индивидуального решения для каждого пациента.',
        ],
      },
      {
        title: 'Приём',
        paragraphs: [
          'Radeski Skin Clinic — филиал в Фергане',
          'Принимает пациентов с проблемами кожи и волос.',
        ],
      },
    ],
  },
  en: {
    aboutTitle: 'About the specialist',
    about: [
      'Farrukh Farkhodjon ugli Yoqubov is a dermatologist-trichologist. He identifies skin and hair problems, studies their causes and builds a treatment plan that suits each patient.',
      'He takes an individual approach to every patient and explains the diagnosis and recommendations in plain language.',
    ],
    quote:
      'My goal is not only to show the patient the path to treatment, but also to help them make informed decisions about their own health.',
    sections: [
      {
        title: 'When to book a visit',
        paragraphs: [
          'He assesses skin and hair condition, identifies likely causes and plans further tests and treatment. You can come with concerns such as:',
        ],
        items: [
          'Hair loss, thinning or slow hair growth',
          'Itchy, flaky or oily scalp',
          'Acne and skin inflammation',
          'Dry or red skin, or rashes',
          'Pigmentation and other skin concerns',
        ],
      },
      {
        title: 'How he works',
        paragraphs: [
          "Treatment starts with listening to the patient and carefully assessing the problem. To find the cause of skin or hair changes, he considers the patient's complaints, health history and, when needed, test results — then builds individual recommendations and a treatment plan.",
          "He values open communication, simple explanations of the diagnosis and recommendations, and careful attention to patients' questions during treatment.",
        ],
      },
      {
        title: 'Education and experience',
        paragraphs: [
          'Graduated from Tashkent Pediatric Medical Institute in 2020, then trained in dermatovenerology and went on to work in dermatology and trichology.',
          'Worked at the Fergana Regional Skin and Venereal Diseases Dispensary in 2022–2024. He now sees patients as a dermatologist-trichologist at Radeski Skin Clinic.',
        ],
      },
      {
        title: 'Professional development and teaching',
        paragraphs: [
          'Completed advanced training in Dubai (UAE) and Tbilisi (Georgia). Since 2023 he has taught students at the Fergana Medical Institute of Public Health.',
          'Professional interests: studying the causes of skin and hair problems in depth, applying modern diagnostic and treatment approaches, and finding an individual solution for every patient.',
        ],
      },
      {
        title: 'Appointments',
        paragraphs: [
          'Radeski Skin Clinic — Fergana branch',
          'Sees patients with skin and hair concerns.',
        ],
      },
    ],
  },
};
