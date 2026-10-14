import type { DoctorProfileContent } from '../../types';

export const KAMOLOVA_BARNO_PROFILE: {
  uz: DoctorProfileContent;
  ru: DoctorProfileContent;
  en: DoctorProfileContent;
} = {
  uz: {
    aboutTitle: 'Mutaxassis haqida',
    about: [
      "Kamolova Barno — shifokor-dermatokosmetolog va anatomiya o'qituvchisi. Dermatologiya va estetik tibbiyot sohasida 3 yillik amaliy tajribaga ega.",
      "Radeski Skin Clinic klinikasida dermatokosmetolog sifatida faoliyat yuritadi. Amaliyot bilan bir qatorda oliy ta'lim muassasasida anatomiya fanidan dars beradi.",
      "Zamonaviy, ilmiy asoslangan va individual yondashuvni o'z faoliyatining asosiy tamoyili deb biladi.",
    ],
    sections: [
      {
        title: 'Tajriba',
        items: [
          "Dermatologiya va kosmetologiya yo'nalishida 3 yillik ish tajribasi",
          'Anatomiya fanidan 2 yillik pedagogik tajriba',
          'Radeski Skin Clinic — dermatokosmetolog',
          "Universitetda anatomiya o'qituvchisi",
        ],
      },
      {
        title: "Ta'lim va xalqaro tajriba",
        paragraphs: [
          "Ta'lim olgan joyi: Praga, Chexiya Respublikasi.",
          "Xalqaro tajriba almashish va malaka oshirish maqsadida Dubay hamda Turkiyaning Istanbul va Izmir shaharlarida professional amaliyot va treninglarda qatnashgan.",
        ],
      },
      {
        title: 'Ilmiy va pedagogik faoliyat',
        paragraphs: [
          "2 yildan buyon talabalarga anatomiya fanidan dars berib kelmoqda.",
          "Ilmiy faoliyat bilan shug'ullanadi, tibbiyot sohasiga oid bir nechta ilmiy maqolalar muallifi.",
        ],
      },
    ],
  },
  ru: {
    aboutTitle: 'О специалисте',
    about: [
      'Камолова Барно — врач-дерматокосметолог и преподаватель анатомии. Имеет 3 года практического опыта в дерматологии и эстетической медицине.',
      'Работает дерматокосметологом в клинике Radeski Skin Clinic. Наряду с практикой преподаёт анатомию в высшем учебном заведении.',
      'Основным принципом своей работы считает современный, научно обоснованный и индивидуальный подход.',
    ],
    sections: [
      {
        title: 'Опыт',
        items: [
          '3 года работы в дерматологии и косметологии',
          '2 года преподавания анатомии',
          'Radeski Skin Clinic — дерматокосметолог',
          'Преподаватель анатомии в университете',
        ],
      },
      {
        title: 'Образование и международный опыт',
        paragraphs: [
          'Место обучения: Прага, Чешская Республика.',
          'Для обмена международным опытом и повышения квалификации проходила профессиональную практику и тренинги в Дубае, а также в Стамбуле и Измире (Турция).',
        ],
      },
      {
        title: 'Научная и педагогическая деятельность',
        paragraphs: [
          'Более 2 лет преподаёт анатомию студентам.',
          'Занимается научной деятельностью, автор нескольких научных статей по медицине.',
        ],
      },
    ],
  },
  en: {
    aboutTitle: 'About the specialist',
    about: [
      'Barno Kamolova is a dermatocosmetologist and anatomy lecturer with 3 years of hands-on experience in dermatology and aesthetic medicine.',
      'She practices as a dermatocosmetologist at Radeski Skin Clinic and, alongside her clinical work, teaches anatomy at a university.',
      'A modern, evidence-based and individual approach is the core principle of her work.',
    ],
    sections: [
      {
        title: 'Experience',
        items: [
          '3 years in dermatology and cosmetology',
          '2 years teaching anatomy',
          'Radeski Skin Clinic — dermatocosmetologist',
          'Anatomy lecturer at a university',
        ],
      },
      {
        title: 'Education and international experience',
        paragraphs: [
          'Studied in Prague, Czech Republic.',
          'Completed professional practice and training in Dubai and in Istanbul and Izmir (Turkey) to exchange international experience and advance her skills.',
        ],
      },
      {
        title: 'Research and teaching',
        paragraphs: [
          'Has taught anatomy to students for over 2 years.',
          'Engaged in research and the author of several medical scientific papers.',
        ],
      },
    ],
  },
};
