import type { Locale } from '../types';

/**
 * Short patient guides under the doctors list and the branches list ("which specialist do I
 * need", "how to prepare for the first visit"). Rendered by Doctors.tsx / BranchesPage.tsx and
 * by the prerender, so crawlers and visitors read the same text.
 */
export interface ListPageGuide {
  title: string;
  sections: { title: string; text: string }[];
}

export const DOCTORS_PAGE_GUIDE: Record<Locale, ListPageGuide> = {
  uz: {
    title: 'Qaysi shifokorga yozilish kerak?',
    sections: [
      {
        title: 'Dermatovenerolog',
        text: "Toshma, qichishish, akne, psoriaz, ekzema, atopik dermatit, zamburug' va boshqa teri kasalliklarida birinchi navbatda dermatovenerologga yoziling. Shifokor terini ko'rikdan o'tkazadi, kerak bo'lsa tahlillar tayinlaydi va davolash rejasini tuzadi.",
      },
      {
        title: 'Dermatoonkolog va dermatoxirurg',
        text: "Yangi paydo bo'lgan yoki o'zgarayotgan xol, tez o'sayotgan hosila yoki bitmaydigan yara — dermatoonkolog ko'rigi uchun sabab. Dermatoskopiya, kerak bo'lsa biopsiya va gistologik tekshiruvdan so'ng hosilani olib tashlash usuli tanlanadi.",
      },
      {
        title: 'Trixolog, podolog va kosmetolog',
        text: "Soch to'kilishi va bosh terisi muammolarida trixolog, tirnoq va oyoq kasalliklarida podolog yordam beradi. Estetik muolajalar (inyeksiyalar, lazer va apparat muolajalari) ham dermatolog-kosmetolog ko'rigidan boshlanadi.",
      },
      {
        title: 'Qanday yozilish mumkin',
        text: "Qaysi mutaxassis kerakligini bilmasangiz, qo'ng'iroq qiling: administrator shikoyatingizga qarab shifokor va filialni tanlashga yordam beradi. Onlayn yozilish tugmasi orqali ham qulay vaqtni tanlash mumkin.",
      },
    ],
  },
  ru: {
    title: 'К какому врачу записаться?',
    sections: [
      {
        title: 'Дерматовенеролог',
        text: 'При сыпи, зуде, акне, псориазе, экземе, атопическом дерматите, грибковых и других заболеваниях кожи в первую очередь запишитесь к дерматовенерологу. Врач осмотрит кожу, при необходимости назначит анализы и составит план лечения.',
      },
      {
        title: 'Дерматоонколог и дерматохирург',
        text: 'Новая или меняющаяся родинка, быстро растущее образование или незаживающая ранка — повод для осмотра дерматоонколога. После дерматоскопии, а при необходимости биопсии и гистологического исследования, врач выбирает способ удаления образования.',
      },
      {
        title: 'Трихолог, подолог и косметолог',
        text: 'При выпадении волос и проблемах кожи головы поможет трихолог, при заболеваниях ногтей и стоп — подолог. Эстетические процедуры (инъекции, лазерные и аппаратные методики) тоже начинаются с осмотра дерматолога-косметолога.',
      },
      {
        title: 'Как записаться',
        text: 'Если вы не знаете, какой специалист нужен, позвоните нам: администратор по вашей жалобе поможет выбрать врача и филиал. Удобное время можно выбрать и через кнопку онлайн-записи.',
      },
    ],
  },
  en: {
    title: 'Which doctor should I book?',
    sections: [
      {
        title: 'Dermatovenereologist',
        text: 'For a rash, itching, acne, psoriasis, eczema, atopic dermatitis, fungal or other skin conditions, start with a dermatovenereologist. The doctor examines your skin, orders tests if needed and draws up a treatment plan.',
      },
      {
        title: 'Dermato-oncologist and dermatologic surgeon',
        text: 'A new or changing mole, a fast-growing lesion or a sore that does not heal is a reason to see a dermato-oncologist. After dermatoscopy, and a biopsy with histology when needed, the doctor chooses how to remove the lesion.',
      },
      {
        title: 'Trichologist, podiatrist and cosmetologist',
        text: 'A trichologist helps with hair loss and scalp problems, a podiatrist with nail and foot conditions. Aesthetic treatments (injections, laser and device procedures) also begin with an examination by a dermatologist-cosmetologist.',
      },
      {
        title: 'How to book',
        text: 'If you are not sure which specialist you need, call us: the administrator will help you choose a doctor and a branch based on your complaint. You can also pick a convenient time with the online booking button.',
      },
    ],
  },
};

export const BRANCHES_PAGE_GUIDE: Record<Locale, ListPageGuide> = {
  uz: {
    title: 'Birinchi qabulga qanday tayyorlanish kerak',
    sections: [
      {
        title: 'Filialni tanlash',
        text: "Farg'ona va Qo'qon filiallarida dermatolog qabuli mavjud. Ayrim muolajalar va apparatlar faqat bitta filialda bo'lishi mumkin, shuning uchun yozilishda kerakli xizmatni administratorga ayting — u mos filial va vaqtni taklif qiladi.",
      },
      {
        title: "O'zingiz bilan olib keling",
        text: "Avvalgi tahlil natijalari, shifokor xulosalari va hozir qabul qilayotgan dori-darmonlar ro'yxatini olib keling. Yuz terisi ko'rigiga pardozsiz kelgan ma'qul, tirnoq ko'rigi oldidan esa lak surtmang.",
      },
      {
        title: 'Qabulgacha nima qilmaslik kerak',
        text: "Toshma yoki dog'larni qabulgacha o'zingiz kuydirmang, siqmang va yangi kremlar bilan davolashni boshlamang: bu ko'rinishni o'zgartirib, tashxisni qiyinlashtiradi. Holat tez yomonlashsa, yaqin filialga qo'ng'iroq qiling.",
      },
    ],
  },
  ru: {
    title: 'Как подготовиться к первому приёму',
    sections: [
      {
        title: 'Выбор филиала',
        text: 'Приём дерматолога ведётся в филиалах в Фергане и Коканде. Некоторые процедуры и аппараты могут быть только в одном филиале, поэтому при записи назовите администратору нужную услугу — он предложит подходящий филиал и время.',
      },
      {
        title: 'Что взять с собой',
        text: 'Возьмите результаты прежних анализов, заключения врачей и список лекарств, которые вы сейчас принимаете. На осмотр кожи лица лучше прийти без макияжа, а перед осмотром ногтей не наносить лак.',
      },
      {
        title: 'Чего не делать до приёма',
        text: 'Не прижигайте и не выдавливайте высыпания и пятна и не начинайте лечение новыми кремами до осмотра: это меняет картину и затрудняет диагностику. Если состояние быстро ухудшается, позвоните в ближайший филиал.',
      },
    ],
  },
  en: {
    title: 'How to prepare for your first visit',
    sections: [
      {
        title: 'Choosing a branch',
        text: 'Dermatologist consultations are available at the branches in Fergana and Kokand. Some treatments and devices may be at one branch only, so tell the administrator which service you need when booking and they will suggest the right branch and time.',
      },
      {
        title: 'What to bring',
        text: 'Bring previous test results, doctors’ reports and a list of the medicines you are taking now. Come without make-up for a facial skin examination and without nail polish for a nail examination.',
      },
      {
        title: 'What not to do before the visit',
        text: 'Do not cauterise or squeeze rashes and spots, and do not start new creams before the examination: it changes how the skin looks and makes diagnosis harder. If things get worse quickly, call the nearest branch.',
      },
    ],
  },
};
