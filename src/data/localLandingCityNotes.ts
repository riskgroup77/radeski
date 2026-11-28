import type { LocalCommercialFaq, LocalizedCopy, LocalSeoCity } from './localCommercialSeoCatalog';

/**
 * What differs between the Fergana and Kokand pages of the same specialist (/uz/fargona/trixolog
 * vs /uz/qoqon/trixolog): the branch, its hours, what is done on site and the nearby districts.
 * Without it the two pages repeated each other word for word apart from the city name.
 *
 * Only facts from the clinic's own materials: branch hours and addresses (clinicNap.ts), which
 * doctors see patients where (doctorBranches.ts), the Kokand Daavlin, thulium-laser and
 * ingrown-nail cases published on the site. {address}, {hours}, {phone} are this branch's,
 * {otherHours} the other branch's — filled in from the branch data so they never drift.
 */
export interface LocalLandingCityNote {
  title: LocalizedCopy;
  about: LocalizedCopy[];
  faqs: LocalCommercialFaq[];
}

function L(uz: string, ru: string, en: string): LocalizedCopy {
  return { uz, ru, en };
}

function Q(question: LocalizedCopy, answer: LocalizedCopy): LocalCommercialFaq {
  return { question, answer };
}

const FERGANA_AREA = L(
  'Klinikaga Farg‘ona shahridan, shuningdek Marg‘ilon, Quvasoy, Toshloq, Oltiariq va Qo‘shtepa tomondan kelish qulay.',
  'В клинику удобно добираться из Ферганы, а также из Маргилана, Кувасая, Ташлака, Алтыарыка и Куштепы.',
  'The clinic is easy to reach from Fergana city and from Margilan, Kuvasay, Tashlak, Oltiariq and Qoshtepa.',
);

const KOKAND_AREA = L(
  'Klinikaga Qo‘qon shahridan, shuningdek O‘zbekiston, Dang‘ara, Furqat, Buvayda, Uchko‘prik va Beshariq tumanlaridan kelish qulay.',
  'В клинику удобно добираться из Коканда, а также из Узбекистанского, Дангаринского, Фуркатского, Бувайдинского, Учкуприкского и Бешарыкского районов.',
  'The clinic is easy to reach from Kokand city and from the Uzbekistan, Dangara, Furqat, Buvayda, Uchkuprik and Beshariq districts.',
);

const FERGANA_SUNDAY = Q(
  L('Farg‘ona filiali yakshanba kuni ishlaydimi?', 'Работает ли ферганский филиал в воскресенье?', 'Is the Fergana branch open on Sunday?'),
  L(
    'Yo‘q. Farg‘ona filialining ish vaqti: {hours}. Yakshanba kuni qabul kerak bo‘lsa, Qo‘qon filiali ochiq ({otherHours}).',
    'Нет. Ферганский филиал работает: {hours}. Если приём нужен в воскресенье, открыт филиал в Коканде ({otherHours}).',
    'No. The Fergana branch hours are {hours}. If you need a Sunday visit, the Kokand branch is open ({otherHours}).',
  ),
);

const KOKAND_SUNDAY = Q(
  L('Qo‘qon filiali yakshanba kuni ishlaydimi?', 'Работает ли кокандский филиал в воскресенье?', 'Is the Kokand branch open on Sunday?'),
  L(
    'Ha. Ish vaqti: {hours}. Qulay vaqtga oldindan {phone} raqami orqali yozilishingiz mumkin.',
    'Да. Время работы: {hours}. Записаться на удобное время можно заранее по номеру {phone}.',
    'Yes. Opening hours: {hours}. You can book a convenient time in advance on {phone}.',
  ),
);

const CITY_NOTES: Record<string, Partial<Record<LocalSeoCity, LocalLandingCityNote>>> = {
  dermatolog: {
    fargona: {
      title: L('Farg‘ona filialida dermatolog', 'Дерматолог в ферганском филиале', 'Dermatologist at the Fergana branch'),
      about: [
        L(
          'Farg‘onada dermatolog Radeski bosh klinikasida qabul qiladi: {address}. Ish vaqti: {hours}. Shu binoda laboratoriya va dermatoskopiya bor. Tahlil topshirish va natija bilan shifokorga qaytish uchun boshqa joyga borish shart emas.',
          'В Фергане дерматолог принимает в главной клинике Radeski: {address}. Время работы: {hours}. В этом же здании есть лаборатория и дерматоскопия, поэтому сдать анализы и вернуться с результатом к врачу можно на месте.',
          'In Fergana the dermatologist sees patients at Radeski’s main clinic: {address}. Hours: {hours}. The lab and dermatoscopy are in the same building, so tests and the follow-up with results happen on site.',
        ),
        L(
          'Farg‘ona filialida dermatoonkologlar ham qabul qiladi. Ko‘rikda shubhali xol yoki o‘sma topilsa, dermatolog sizni shu klinikaning o‘zida ularga yo‘naltiradi.',
          'В ферганском филиале принимают и дерматоонкологи: если на осмотре найдена подозрительная родинка или образование, дерматолог направит к ним в этой же клинике.',
          'Dermato-oncologists also see patients at the Fergana branch: if the exam finds a suspicious mole or growth, the dermatologist refers you to them in the same clinic.',
        ),
        FERGANA_AREA,
      ],
      faqs: [
        FERGANA_SUNDAY,
        Q(
          L('Farg‘onada xolni dermatoonkologga ko‘rsatsa bo‘ladimi?', 'Можно ли в Фергане показать родинку дерматоонкологу?', 'Can I see a dermato-oncologist about a mole in Fergana?'),
          L(
            'Ha. Farg‘ona filialida dermatoonkolog qabul qiladi, birinchi ko‘rikda dermatoskopiya ham qilinadi. Xol shubhali bo‘lsa, shifokor biopsiya va keyingi rejani aytadi.',
            'Да. В ферганском филиале принимает дерматоонколог, первичный осмотр включает дерматоскопию. Если родинка подозрительная, врач объяснит, нужна ли биопсия и что делать дальше.',
            'Yes. A dermato-oncologist sees patients at the Fergana branch, and the first visit includes dermatoscopy. If a mole looks suspicious, the doctor explains whether a biopsy is needed and what comes next.',
          ),
        ),
      ],
    },
    qoqon: {
      title: L('Qo‘qon filialida dermatolog', 'Дерматолог в кокандском филиале', 'Dermatologist at the Kokand branch'),
      about: [
        L(
          'Qo‘qonda dermatolog Radeski Skin Clinic Qo‘qon filialida qabul qiladi: {address}. Ish vaqti: {hours}. Yakshanba kuni ham ochiq, ishdan yoki o‘qishdan keyin kechki soatlarda ham kelishingiz mumkin.',
          'В Коканде дерматолог принимает в кокандском филиале Radeski Skin Clinic: {address}. Время работы: {hours}. Филиал открыт и в воскресенье, прийти можно и вечером после работы или учёбы.',
          'In Kokand the dermatologist sees patients at the Radeski Skin Clinic Kokand branch: {address}. Hours: {hours}. It is open on Sunday too, and you can come in the evening after work or classes.',
        ),
        L(
          'Qo‘qon filialida dermatovenerologlar akne, ekzema, psoriaz, zamburug‘ infeksiyalari va allergik toshmalar bilan qabul qiladi. Psoriazni Daavlin fototerapiyasi bilan davolash Qo‘qonning o‘zida o‘tkaziladi, buning uchun Farg‘onaga qatnash shart emas.',
          'В кокандском филиале дерматовенерологи принимают с акне, экземой, псориазом, грибковыми инфекциями и аллергическими высыпаниями. Фототерапия псориаза на аппаратах Daavlin проводится прямо в Коканде, ездить в Фергану не нужно.',
          'Dermatovenerologists at the Kokand branch see acne, eczema, psoriasis, fungal infections and allergic rashes. Psoriasis phototherapy on Daavlin units is done in Kokand itself, with no trips to Fergana.',
        ),
        KOKAND_AREA,
      ],
      faqs: [
        KOKAND_SUNDAY,
        Q(
          L('Qo‘qonda psoriazni fototerapiya bilan davolash mumkinmi?', 'Можно ли в Коканде лечить псориаз фототерапией?', 'Can psoriasis be treated with phototherapy in Kokand?'),
          L(
            'Ha. Qo‘qon filialida Daavlin tor polosali UVB fototerapiyasi (311 nm) bor. Seanslar soni va oralig‘ini dermatolog ko‘rikdan keyin belgilaydi.',
            'Да. В кокандском филиале есть узкополосная UVB-фототерапия Daavlin (311 нм). Количество и частоту сеансов дерматолог назначает после осмотра.',
            'Yes. The Kokand branch has Daavlin narrowband UVB phototherapy (311 nm). The dermatologist sets the number and frequency of sessions after the exam.',
          ),
        ),
      ],
    },
  },

  trixolog: {
    fargona: {
      title: L('Farg‘ona filialida trixolog', 'Трихолог в ферганском филиале', 'Trichologist at the Fergana branch'),
      about: [
        L(
          'Farg‘onada trixolog Radeski bosh klinikasida qabul qiladi: {address}. Ish vaqti: {hours}. Raqamli trixoskopiya birinchi ko‘rikning o‘zida qilinadi. Kerakli qon tahlillarini klinika laboratoriyasida topshirish mumkin.',
          'В Фергане трихолог принимает в главной клинике Radeski: {address}. Время работы: {hours}. Цифровая трихоскопия проводится прямо на первом приёме, нужные анализы крови можно сдать в лаборатории клиники.',
          'In Fergana the trichologist sees patients at Radeski’s main clinic: {address}. Hours: {hours}. Digital trichoscopy is done at the first visit, and the blood tests you need can be taken at the clinic lab.',
        ),
        L(
          'Soch to‘kilishini davolash odatda bir necha oy davom etadi: PRP yoki mezoterapiya seanslari 2–4 hafta oralig‘ida o‘tadi. Shuning uchun uyingizga yaqin filialni tanlang. Trixologlar Farg‘onada ham, Qo‘qonda ham qabul qiladi.',
          'Лечение выпадения волос обычно длится несколько месяцев: сеансы PRP или мезотерапии идут с интервалом 2–4 недели. Поэтому выбирайте филиал ближе к дому — трихологи принимают и в Фергане, и в Коканде.',
          'Hair-loss treatment usually runs for several months, with PRP or mesotherapy sessions 2–4 weeks apart, so choose the branch closer to home: trichologists see patients in both Fergana and Kokand.',
        ),
        FERGANA_AREA,
      ],
      faqs: [
        FERGANA_SUNDAY,
        Q(
          L('Farg‘onada soch ekish bo‘yicha maslahat olsa bo‘ladimi?', 'Можно ли в Фергане получить консультацию по пересадке волос?', 'Can I get a hair transplant consultation in Fergana?'),
          L(
            'Ha. Soch ekish bo‘yicha konsultatsiyani dermatolog-trixolog Abduvaliyev Begali o‘tkazadi. U Farg‘ona va Qo‘qon filiallarida qabul qiladi. Avval to‘kilish sababi aniqlanadi va donor zona baholanadi.',
            'Да. Консультацию по пересадке волос проводит дерматолог-трихолог Абдувалиев Бегали, он принимает в ферганском и кокандском филиалах. Сначала выясняется причина выпадения и оценивается донорская зона.',
            'Yes. Hair transplant consultations are done by dermatologist-trichologist Begali Abduvaliyev, who sees patients at both the Fergana and Kokand branches. The cause of hair loss is checked and the donor area assessed first.',
          ),
        ),
      ],
    },
    qoqon: {
      title: L('Qo‘qon filialida trixolog', 'Трихолог в кокандском филиале', 'Trichologist at the Kokand branch'),
      about: [
        L(
          'Qo‘qonda trixolog Qo‘qon filialida qabul qiladi: {address}. Ish vaqti: {hours}. PRP va mezoterapiya kursidagi seanslarni ishdan keyin yoki dam olish kunida o‘tkazish qulay.',
          'В Коканде трихолог принимает в кокандском филиале: {address}. Время работы: {hours}, поэтому сеансы курса PRP и мезотерапии удобно проходить после работы или в выходной.',
          'In Kokand the trichologist sees patients at the Kokand branch: {address}. Hours: {hours}, so PRP and mesotherapy sessions fit after work or at the weekend.',
        ),
        L(
          'Birinchi qabulda raqamli trixoskopiya qilinadi, qon tahlillari klinika laboratoriyasida olinadi. Qo‘qon filialida soch to‘kilishini kompleks davolash uchun 1927 nm tuliy lazer (LaseMD Ultra) ham bor.',
          'На первом приёме проводится цифровая трихоскопия, анализы крови берут в лаборатории клиники. В кокандском филиале есть и тулиевый лазер 1927 нм (LaseMD Ultra) для комплексного лечения выпадения волос.',
          'The first visit includes digital trichoscopy, and blood tests are taken at the clinic lab. The Kokand branch also has a 1927 nm thulium laser (LaseMD Ultra) for combined hair-loss treatment.',
        ),
        KOKAND_AREA,
      ],
      faqs: [
        KOKAND_SUNDAY,
        Q(
          L('Qo‘qonda soch uchun tuliy lazer bormi?', 'Есть ли в Коканде тулиевый лазер для волос?', 'Is there a thulium laser for hair in Kokand?'),
          L(
            'Ha. Qo‘qon filialida LaseMD Ultra (1927 nm) tuliy lazeri bor. Trixolog uni ko‘rsatma bo‘lsa, trixoskopiyadan keyin soch to‘kilishini davolash kursiga qo‘shadi. Lazer yakka o‘zi emas, boshqa usullar bilan birga qo‘llanadi.',
            'Да. В кокандском филиале есть тулиевый лазер LaseMD Ultra (1927 нм). Трихолог включает его в курс лечения выпадения волос по показаниям, после трихоскопии, — как часть комплекса, а не отдельно.',
            'Yes. The Kokand branch has a LaseMD Ultra (1927 nm) thulium laser. When indicated, the trichologist adds it to the hair-loss course after trichoscopy, as part of a combined plan rather than on its own.',
          ),
        ),
      ],
    },
  },

  podolog: {
    fargona: {
      title: L('Farg‘ona filialida podolog', 'Подолог в ферганском филиале', 'Podiatrist at the Fergana branch'),
      about: [
        L(
          'Farg‘onada podolog Radeski bosh klinikasida qabul qiladi: {address}. Ish vaqti: {hours}. Tibbiy pedikyur, o‘sib ketgan tirnoqni tuzatish va tirnoq zamburug‘ini davolash shu yerda bajariladi.',
          'В Фергане подолог принимает в главной клинике Radeski: {address}. Время работы: {hours}. Медицинский педикюр, коррекция вросшего ногтя и лечение грибка ногтей проводятся здесь же.',
          'In Fergana the podiatrist sees patients at Radeski’s main clinic: {address}. Hours: {hours}. Medical pedicure, ingrown-nail correction and nail-fungus treatment are all done here.',
        ),
        L(
          'Zamburug‘ga shubha bo‘lsa, tirnoqdan tahlil klinika laboratoriyasida olinadi. Davolash taxmin bilan emas, tahlil natijasi bilan boshlanadi.',
          'При подозрении на грибок анализ с ногтя берут в лаборатории клиники — лечение начинается по результату, а не наугад.',
          'If fungus is suspected, a nail sample is tested at the clinic lab, so treatment starts from a result rather than a guess.',
        ),
        FERGANA_AREA,
      ],
      faqs: [
        FERGANA_SUNDAY,
        Q(
          L('Qaysi filialga borganim yaxshi?', 'В какой филиал лучше идти?', 'Which branch should I go to?'),
          L(
            'Podolog Farg‘onada ham, Qo‘qonda ham qabul qiladi. Uyingizga yaqin filialni tanlang: o‘sib ketgan tirnoq yoki zamburug‘ni davolashda bir necha nazorat ko‘rigi kerak bo‘ladi.',
            'Подолог принимает и в Фергане, и в Коканде. Выбирайте филиал ближе к дому: при вросшем ногте или грибке понадобится несколько контрольных визитов.',
            'A podiatrist sees patients in both Fergana and Kokand. Choose the branch closer to home: an ingrown nail or fungus needs several follow-up visits.',
          ),
        ),
      ],
    },
    qoqon: {
      title: L('Qo‘qon filialida podolog', 'Подолог в кокандском филиале', 'Podiatrist at the Kokand branch'),
      about: [
        L(
          'Qo‘qonda podolog Qo‘qon filialida qabul qiladi: {address}. Ish vaqti: {hours}, yakshanba kuni ham qabul bor.',
          'В Коканде подолог принимает в кокандском филиале: {address}. Время работы: {hours}, приём есть и в воскресенье.',
          'In Kokand the podiatrist sees patients at the Kokand branch: {address}. Hours: {hours}, with visits on Sunday too.',
        ),
        L(
          'Qo‘qon filialida shifokor-dermatovenerolog va podolog Karimova Iroda o‘sib ketgan tirnoq (onixokriptoz) bilan kelgan bemorlarni qabul qiladi. Uning bemor kelishidan 6 oylik kuzatuvgacha yozilgan klinik holati saytdagi maqolada bor.',
          'В кокандском филиале врач-дерматовенеролог и подолог Каримова Ирода принимает пациентов с вросшим ногтем (онихокриптозом). Её клинический случай — от первого визита до наблюдения через 6 месяцев — опубликован на сайте.',
          'At the Kokand branch, dermatovenerologist and podiatrist Iroda Karimova treats ingrown nails (onychocryptosis). Her clinical case, from the first visit to the 6-month follow-up, is published on the site.',
        ),
        KOKAND_AREA,
      ],
      faqs: [
        KOKAND_SUNDAY,
        Q(
          L('Qaysi filialga borganim yaxshi?', 'В какой филиал лучше идти?', 'Which branch should I go to?'),
          L(
            'Podolog Qo‘qonda ham, Farg‘onada ham qabul qiladi. Uyingizga yaqin filialni tanlang: o‘sib ketgan tirnoq yoki zamburug‘ni davolashda bir necha nazorat ko‘rigi kerak bo‘ladi.',
            'Подолог принимает и в Коканде, и в Фергане. Выбирайте филиал ближе к дому: при вросшем ногте или грибке понадобится несколько контрольных визитов.',
            'A podiatrist sees patients in both Kokand and Fergana. Choose the branch closer to home: an ingrown nail or fungus needs several follow-up visits.',
          ),
        ),
      ],
    },
  },
};

export function getLocalLandingCityNote(slug: string, city: LocalSeoCity): LocalLandingCityNote | undefined {
  return CITY_NOTES[slug]?.[city];
}
