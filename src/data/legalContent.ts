import { Locale } from '../types';

export type LegalPageType = 'terms' | 'privacy';

export interface LegalSection {
  title: Record<Locale, string>;
  paragraphs: Record<Locale, string>[];
}

export interface LegalDocument {
  pageTitle: Record<Locale, string>;
  pageSubtitle: Record<Locale, string>;
  lastUpdated: string;
  intro: Record<Locale, string>;
  sections: LegalSection[];
}

export const LEGAL_DOCUMENTS: Record<LegalPageType, LegalDocument> = {
  terms: {
    pageTitle: {
      uz: "Foydalanish shartlari",
      ru: "Пользовательское соглашение",
      en: "Terms of Use",
    },
    pageSubtitle: {
      uz: "Radeski Skin & Aesthetic Clinic veb-saytidan foydalanish qoidalari",
      ru: "Правила использования официального сайта Radeski Skin & Aesthetic Clinic",
      en: "Rules for using the official Radeski Skin & Aesthetic Clinic website",
    },
    lastUpdated: "2026-06-15",
    intro: {
      uz: "Ushbu Foydalanish shartlari (keyingi o'rinlarda — «Shartlar») Radeski Skin & Aesthetic Clinic (keyingi o'rinlarda — «Klinika», «biz») rasmiy veb-sayti — radeski.uz va uning barcha til versiyalaridan foydalanish tartibini belgilaydi. Saytga kirish yoki undan foydalanish orqali siz ushbu Shartlarga to'liq rozilik bildirgan hisoblanasiz.",
      ru: "Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует порядок использования официального сайта Radeski Skin & Aesthetic Clinic (далее — «Клиника», «мы») — radeski.uz и всех его языковых версий. Посещая или используя сайт, вы подтверждаете полное согласие с условиями Соглашения.",
      en: "These Terms of Use (the «Terms») govern your access to and use of the official website of Radeski Skin & Aesthetic Clinic (the «Clinic», «we») — radeski.uz and all its language versions. By accessing or using the site, you agree to be bound by these Terms in full.",
    },
    sections: [
      {
        title: {
          uz: "1. Saytning maqsadi va xizmatlar",
          ru: "1. Назначение сайта и услуги",
          en: "1. Purpose of the site and services",
        },
        paragraphs: [
          {
            uz: "Sayt Klinika haqida ma'lumot berish, xizmatlar va narxlar bilan tanishtirish, shifokorlar profili, tibbiy maqolalar, onlayn qabulga yozilish va aloqa formalarini taqdim etish uchun yaratilgan.",
            ru: "Сайт предназначен для информирования о Клинике, ознакомления с услугами и ценами, профилями врачей, медицинскими статьями, онлайн-записью на приём и формами обратной связи.",
            en: "The site is designed to provide information about the Clinic, services and prices, physician profiles, medical articles, online appointment booking, and contact forms.",
          },
          {
            uz: "Saytdagi barcha tibbiy ma'lumotlar faqat umumiy tanishuv xarakteriga ega va shifokor ko'rigini almashtirmaydi. Aniq tashxis va davolash rejasi faqat shaxsan mutaxassis qabulida belgilanadi.",
            ru: "Вся медицинская информация на сайте носит ознакомительный характер и не заменяет очный осмотр врача. Точный диагноз и план лечения определяются только на личном приёме специалиста.",
            en: "All medical information on the site is for general informational purposes only and does not replace an in-person physician consultation. Diagnosis and treatment plans are determined only during a personal visit.",
          },
        ],
      },
      {
        title: {
          uz: "2. Foydalanuvchi majburiyatlari",
          ru: "2. Обязанности пользователя",
          en: "2. User obligations",
        },
        paragraphs: [
          {
            uz: "Foydalanuvchi to'g'ri va haqqoniy ma'lumotlarni taqdim etishi, saytdan qonuniy maqsadlarda foydalanishi, uchinchi shaxslarning huquqlarini buzmasligi shart.",
            ru: "Пользователь обязан предоставлять достоверные сведения, использовать сайт в законных целях и не нарушать права третьих лиц.",
            en: "Users must provide accurate information, use the site for lawful purposes, and not infringe the rights of third parties.",
          },
          {
            uz: "Sayt tizimiga ruxsatsiz kirish, zararli dasturlar yuborish, ma'lumotlarni o'zgartirish yoki buzish taqiqlanadi.",
            ru: "Запрещается несанкционированный доступ к системе сайта, отправка вредоносного ПО, изменение или нарушение целостности данных.",
            en: "Unauthorized access, malware, or tampering with site data is prohibited.",
          },
        ],
      },
      {
        title: {
          uz: "3. Onlayn qabul va aloqa",
          ru: "3. Онлайн-запись и обратная связь",
          en: "3. Online appointments and contact",
        },
        paragraphs: [
          {
            uz: "Sayt orqali yuborilgan qabul so'rovi Klinika operatori tomonidan tasdiqlangandan keyin kuchga kiradi. Saytda ko'rsatilgan narxlar tanishuv xarakterida bo'lib, yakuniy summa shifokor ko'rigidan so'ng aniqlanishi mumkin.",
            ru: "Заявка на приём, отправленная через сайт, считается принятой после подтверждения оператором Клиники. Цены на сайте носят ознакомительный характер; окончательная стоимость может быть определена после осмотра врача.",
            en: "Appointment requests submitted via the site take effect after confirmation by the Clinic operator. Prices shown are indicative; final costs may be determined after a physician consultation.",
          },
        ],
      },
      {
        title: {
          uz: "4. Intellektual mulk",
          ru: "4. Интеллектуальная собственность",
          en: "4. Intellectual property",
        },
        paragraphs: [
          {
            uz: "Saytdagi matnlar, logotip, dizayn, fotosuratlar, maqolalar va boshqa materiallar Klinikaga yoki litsenziya beruvchilarga tegishli va mualliflik huquqi bilan himoyalangan. Ruxsatsiz nusxa ko'chirish va tijorat maqsadida foydalanish taqiqlanadi.",
            ru: "Тексты, логотип, дизайн, фотографии, статьи и иные материалы сайта принадлежат Клинике или лицензиарам и защищены авторским правом. Несанкционированное копирование и коммерческое использование запрещены.",
            en: "Texts, logos, design, photos, articles, and other materials belong to the Clinic or licensors and are protected by copyright. Unauthorized copying or commercial use is prohibited.",
          },
        ],
      },
      {
        title: {
          uz: "5. Mas'uliyat cheklovi",
          ru: "5. Ограничение ответственности",
          en: "5. Limitation of liability",
        },
        paragraphs: [
          {
            uz: "Klinika saytning uzluksiz va xatosiz ishlashini ta'minlashga intiladi, biroq texnik uzilishlar yoki ma'lumotlar yangilanishidagi kechikishlar uchun javobgar emas. Saytdagi ma'lumotlarga tayanib o'z-o'zini davolash natijasida yuzaga kelgan oqibatlar uchun Klinika javobgar emas.",
            ru: "Клиника стремится обеспечить бесперебойную работу сайта, однако не несёт ответственности за технические сбои или задержки обновления информации. Клиника не отвечает за последствия самолечения на основе данных сайта.",
            en: "The Clinic strives to keep the site available and accurate but is not liable for technical outages or update delays. The Clinic is not responsible for outcomes of self-treatment based on site content.",
          },
        ],
      },
      {
        title: {
          uz: "6. Shartlarni o'zgartirish",
          ru: "6. Изменение условий",
          en: "6. Changes to the Terms",
        },
        paragraphs: [
          {
            uz: "Klinika ushbu Shartlarni istalgan vaqtda yangilashi mumkin. Yangi versiya saytda e'lon qilingan paytdan kuchga kiradi. Saytdan foydalanishni davom ettirish yangi shartlarga rozilik hisoblanadi.",
            ru: "Клиника вправе обновлять Соглашение в любое время. Новая редакция вступает в силу с момента публикации на сайте. Продолжение использования сайта означает согласие с обновлёнными условиями.",
            en: "The Clinic may update these Terms at any time. The new version takes effect upon publication on the site. Continued use constitutes acceptance of the updated Terms.",
          },
        ],
      },
      {
        title: {
          uz: "7. Aloqa",
          ru: "7. Контакты",
          en: "7. Contact",
        },
        paragraphs: [
          {
            uz: "Shartlar bo'yicha savollar uchun: Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1A; tel: +998 (73) 200-73-73; e-mail: info@radeski.uz.",
            ru: "По вопросам Соглашения: г. Фергана, ул. Узбекистон Овози, 1А; тел.: +998 (73) 200-73-73; e-mail: info@radeski.uz.",
            en: "For questions about these Terms: 1A Uzbekiston Ovozi Street, Fergana; phone: +998 (73) 200-73-73; email: info@radeski.uz.",
          },
        ],
      },
    ],
  },
  privacy: {
    pageTitle: {
      uz: "Maxfiylik siyosati",
      ru: "Политика конфиденциальности",
      en: "Privacy Policy",
    },
    pageSubtitle: {
      uz: "Shaxsiy ma'lumotlaringizni qanday to'plash, saqlash va himoya qilishimiz",
      ru: "Как мы собираем, храним и защищаем ваши персональные данные",
      en: "How we collect, store, and protect your personal data",
    },
    lastUpdated: "2026-06-15",
    intro: {
      uz: "Radeski Skin & Aesthetic Clinic (keyingi o'rinlarda — «Klinika», «biz») foydalanuvchilarning shaxsiy ma'lumotlarini hurmat qiladi va O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq ularni himoya qiladi. Ushbu Maxfiylik siyosati radeski.uz sayti va onlayn xizmatlarimiz orqali qanday ma'lumotlar to'planishi va qanday ishlatilishini tushuntiradi.",
      ru: "Radeski Skin & Aesthetic Clinic (далее — «Клиника», «мы») уважает персональные данные пользователей и защищает их в соответствии с действующим законодательством Республики Узбекистан. Настоящая Политика конфиденциальности объясняет, какие данные собираются через сайт radeski.uz и как они используются.",
      en: "Radeski Skin & Aesthetic Clinic (the «Clinic», «we») respects user privacy and protects personal data in accordance with applicable law in the Republic of Uzbekistan. This Privacy Policy explains what data is collected through radeski.uz and how it is used.",
    },
    sections: [
      {
        title: {
          uz: "1. Qanday ma'lumotlar to'planadi",
          ru: "1. Какие данные собираются",
          en: "1. What data we collect",
        },
        paragraphs: [
          {
            uz: "Biz quyidagi ma'lumotlarni to'plashimiz mumkin: ism, telefon raqami, qabul sanasi, tanlangan xizmat turi, veb-sayt orqali yuborilgan xabar matni, shuningdek texnik ma'lumotlar (IP-manzil, brauzer turi, cookie fayllari, tashrif vaqti).",
            ru: "Мы можем собирать: имя, номер телефона, дату приёма, выбранный тип услуги, текст сообщения с сайта, а также технические данные (IP-адрес, тип браузера, cookie, время посещения).",
            en: "We may collect: name, phone number, appointment date, selected service, message text submitted via the site, and technical data (IP address, browser type, cookies, visit time).",
          },
        ],
      },
      {
        title: {
          uz: "2. Ma'lumotlardan foydalanish maqsadlari",
          ru: "2. Цели использования данных",
          en: "2. Purposes of data use",
        },
        paragraphs: [
          {
            uz: "Ma'lumotlar qabulga yozishni tasdiqlash, siz bilan bog'lanish, xizmat ko'rsatish, savollaringizga javob berish, sayt ishlashini yaxshilash va qonuniy talablarga rioya qilish uchun ishlatiladi.",
            ru: "Данные используются для подтверждения записи, связи с вами, оказания услуг, ответов на запросы, улучшения работы сайта и соблюдения требований законодательства.",
            en: "Data is used to confirm appointments, contact you, deliver services, respond to inquiries, improve the site, and comply with legal requirements.",
          },
        ],
      },
      {
        title: {
          uz: "3. Cookie fayllar",
          ru: "3. Файлы cookie",
          en: "3. Cookies",
        },
        paragraphs: [
          {
            uz: "Sayt tanlangan til (uz/ru/en) kabi sozlamalarni saqlash va foydalanuvchi tajribasini yaxshilash uchun brauzer cookie va localStorage dan foydalanishi mumkin. Brauzer sozlamalarida cookie ni o'chirib qo'yishingiz mumkin, biroq ba'zi funksiyalar cheklanishi mumkin.",
            ru: "Сайт может использовать cookie и localStorage для сохранения выбранного языка (uz/ru/en) и улучшения пользовательского опыта. Вы можете отключить cookie в настройках браузера, однако часть функций может быть ограничена.",
            en: "The site may use cookies and localStorage to save language preference (uz/ru/en) and improve user experience. You may disable cookies in your browser, though some features may be limited.",
          },
        ],
      },
      {
        title: {
          uz: "4. Ma'lumotlarni uchinchi shaxslarga uzatish",
          ru: "4. Передача данных третьим лицам",
          en: "4. Sharing with third parties",
        },
        paragraphs: [
          {
            uz: "Biz shaxsiy ma'lumotlaringizni sotmaymiz. Ma'lumotlar faqat xizmat ko'rsatish uchun zarur bo'lgan hollarda — masalan, hosting provayderi yoki qonun talab qilgan organlarga — uzatilishi mumkin.",
            ru: "Мы не продаём персональные данные. Передача возможна только при необходимости для оказания услуг — например, хостинг-провайдеру — или по требованию уполномоченных органов.",
            en: "We do not sell personal data. Data may be shared only when necessary to deliver services — e.g., hosting providers — or when required by authorized authorities.",
          },
        ],
      },
      {
        title: {
          uz: "5. Ma'lumotlarni saqlash va xavfsizlik",
          ru: "5. Хранение и безопасность",
          en: "5. Storage and security",
        },
        paragraphs: [
          {
            uz: "Ma'lumotlar faqat zarur muddat davomida saqlanadi va ruxsatsiz kirishdan himoya qilish uchun texnik va tashkiliy choralar qo'llaniladi.",
            ru: "Данные хранятся только необходимый срок и защищаются техническими и организационными мерами от несанкционированного доступа.",
            en: "Data is retained only as long as necessary and protected by technical and organizational measures against unauthorized access.",
          },
        ],
      },
      {
        title: {
          uz: "6. Foydalanuvchi huquqlari",
          ru: "6. Права пользователя",
          en: "6. Your rights",
        },
        paragraphs: [
          {
            uz: "Siz o'z ma'lumotlaringiz haqida ma'lumot olish, ularni tuzatish yoki o'chirishni so'rash, qayta ishlashga roziligingizni qaytarib olish huquqiga egasiz. Buning uchun info@radeski.uz manziliga yoki +998 (73) 200-73-73 raqamiga murojaat qiling.",
            ru: "Вы вправе запросить сведения о своих данных, их исправление или удаление, а также отозвать согласие на обработку. Для этого обратитесь на info@radeski.uz или по телефону +998 (73) 200-73-73.",
            en: "You may request access to, correction or deletion of your data, or withdraw consent to processing. Contact info@radeski.uz or +998 (73) 200-73-73.",
          },
        ],
      },
      {
        title: {
          uz: "7. Voyaga yetmaganlar",
          ru: "7. Несовершеннолетние",
          en: "7. Minors",
        },
        paragraphs: [
          {
            uz: "Sayt 18 yoshdan kichik foydalanuvchilardan mustaqil ravishda shaxsiy ma'lumot to'plamaydi. Voyaga yetmagan bemorlar uchun ma'lumot ota-ona yoki qonuniy vakil orqali taqdim etiladi.",
            ru: "Сайт не собирает персональные данные от пользователей младше 18 лет самостоятельно. Данные несовершеннолетних пациентов предоставляются родителем или законным представителем.",
            en: "The site does not independently collect personal data from users under 18. Data for minor patients is provided by a parent or legal guardian.",
          },
        ],
      },
      {
        title: {
          uz: "8. Siyosatdagi o'zgarishlar",
          ru: "8. Изменения политики",
          en: "8. Policy changes",
        },
        paragraphs: [
          {
            uz: "Maxfiylik siyosati vaqti-vaqti bilan yangilanishi mumkin. Yangilangan versiya ushbu sahifada e'lon qilinadi. Saytdan foydalanishni davom ettirish yangi shartlarga rozilik bildiradi.",
            ru: "Политика конфиденциальности может периодически обновляться. Актуальная версия публикуется на этой странице. Продолжение использования сайта означает согласие с обновлениями.",
            en: "This Privacy Policy may be updated periodically. The current version is published on this page. Continued use of the site indicates acceptance of updates.",
          },
        ],
      },
    ],
  },
};
