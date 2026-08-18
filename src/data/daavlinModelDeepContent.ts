import type { Locale } from '../types';
import type { DaavlinModelId } from '../routing/paths';

type L = Record<Locale, string>;

const t = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export type DaavlinModelDeep = {
  id: DaavlinModelId;
  seoTitle: L;
  seoDesc: L;
  roleTitle: L;
  roleBody: L;
  clinicTitle: L;
  clinicBody: L;
  featuresTitle: L;
  features: L[];
  pathwayTitle: L;
  pathway: L[];
};

export const DAAVLIN_MODEL_DEEP: Record<DaavlinModelId, DaavlinModelDeep> = {
  '7-series': {
    id: '7-series',
    seoTitle: t(
      'Daavlin 7 Series — to‘liq tana fototerapiyasi | Radeski',
      'Daavlin 7 Series — фототерапия всего тела | Radeski',
      'Daavlin 7 Series — full-body phototherapy | Radeski',
    ),
    seoDesc: t(
      '7 Series: 4–12 lampa, ~0,3 m², ClearLink™. Uy va tor klinikalar uchun to‘liq tana NB-UVB / UVA fototerapiyasi. O‘zbekiston Milliy Fototerapiya Markazi — Radeski.',
      '7 Series: 4–12 ламп, ~0,3 м², ClearLink™. Фототерапия всего тела NB-UVB / UVA для дома и компактных кабинетов. Национальный центр фототерапии — Radeski.',
      '7 Series: 4–12 lamps, ~0.3 m², ClearLink™. Full-body NB-UVB / UVA phototherapy for home and compact clinics. National Phototherapy Center — Radeski.',
    ),
    roleTitle: t('Modelning klinik roli', 'Клиническая роль модели', 'Clinical role of the model'),
    roleBody: t(
      '7 Series — to‘liq tana kurslari uchun “joy tejovchi” panel: uy sharoiti yoki kichik kabinetda ham to‘liq yoritishni saqlab qoladi. Shifokor UVA yoki tor diapazonli UVB (NB-UVB) belgilasa, konfiguratsiya 4 dan 12 tagacha lampaga moslashadi. Qo‘shimcha eshik panellari doza yetkazishni tezlashtiradi — seans qisqaradi, bemor yuklamasi kamayadi.',
      '7 Series — «экономичная по площади» панель для курсов на всё тело: сохраняет полноценное облучение дома или в небольшом кабинете. При назначении UVA или узкополосного UVB (NB-UVB) конфигурация подстраивается от 4 до 12 ламп. Дополнительные дверные панели ускоряют доставку дозы — сеанс короче, нагрузка на пациента ниже.',
      '7 Series is a space-efficient full-body panel: it keeps proper coverage at home or in a small room. Whether UVA or narrowband UVB (NB-UVB) is prescribed, kits scale from 4 to 12 lamps. Extra door panels speed dose delivery — shorter sessions, less patient burden.',
    ),
    clinicTitle: t('Radeski / distributor yo‘nalishi', 'Направление Radeski / дистрибьютора', 'Radeski / distributor focus'),
    clinicBody: t(
      'Markazda va hamkor klinikalarida 7 Series ko‘pincha uy kursi yoki joyi cheklangan kabinet uchun tanlanadi. ClearLink™ sensorli boshqaruv seansni standartlashtirishga yordam beradi: vaqt, xavfsizlik va takrorlanuvchanlik. Distributor sifatida tanlash, o‘rnatish va bemorga uyda foydalanishni tushuntirishni birga yuritamiz.',
      'В центре и у партнёров 7 Series чаще выбирают для домашнего курса или кабинета с ограниченной площадью. Сенсорный ClearLink™ помогает стандартизировать сеанс: время, безопасность и повторяемость. Как дистрибьютор сопровождаем подбор, установку и обучение пациента домашнему использованию.',
      'At the center and partner clinics, 7 Series is often chosen for home courses or tight rooms. ClearLink™ helps standardize sessions: timing, safety and repeatability. As distributor we support selection, install and patient guidance for home use.',
    ),
    featuresTitle: t('Texnik va foydalanish nuqtalari', 'Технические и практические моменты', 'Technical and practical points'),
    features: [
      t(
        'UVA yoki NB-UVB — 4–12 lampalik komplektlar bilan barqaror ishlash.',
        'UVA или NB-UVB — стабильная работа с комплектами от 4 до 12 ламп.',
        'UVA or NB-UVB — reliable operation with 4–12 lamp kits.',
      ),
      t(
        'Eshiklar bilan yoki usiz taxminan 0,3 m² pol maydonida joylashadi — uy uchun mos ergonomika.',
        'С дверями или без них занимает около 0,3 м² пола — эргономика для дома.',
        'With or without doors it fits on about 0.3 m² — ergonomics suited to home.',
      ),
      t(
        'Qo‘shimcha eshiklar gacha 6 ta qo‘shimcha lampani yashirib, samaradorlikni oshiradi va muolaja vaqtini qisqartiradi.',
        'Дополнительные двери вмещают до 6 ламп, повышая эффективность и сокращая время процедуры.',
        'Extra doors can hold up to 6 more lamps, raising efficiency and shortening treatment time.',
      ),
      t(
        'ClearLink™ sensorli boshqaruv — har bir seansni sodda, xavfsiz va nazoratli o‘tkazish uchun.',
        'Сенсорный ClearLink™ — чтобы каждый сеанс был простым, безопасным и контролируемым.',
        'ClearLink™ touch control — to keep each session simple, safe and controlled.',
      ),
    ],
    pathwayTitle: t('Qanday tanlanadi', 'Как обычно выбирают', 'How it is typically selected'),
    pathway: [
      t(
        'Dermatolog to‘liq tana fototerapiya kursini belgilaydi (masalan psoriaz, vitiligo yoki boshqa fotosezgir jarayon).',
        'Дерматолог назначает курс фототерапии всего тела (например при псориазе, витилиго или другом фоточувствительном процессе).',
        'A dermatologist orders a full-body phototherapy course (e.g. psoriasis, vitiligo or another photoresponsive condition).',
      ),
      t(
        'Joy, uy/klinika rejimi va lampa soni bo‘yicha 7 Series konfiguratsiyasi tanlanadi.',
        'По площади, режиму дом/клиника и числу ламп подбирается конфигурация 7 Series.',
        'Configuration is chosen by space, home/clinic plan and lamp count.',
      ),
      t(
        'O‘qitish + ClearLink™ bilan seans protokoli; kerak bo‘lsa uyga yetkazib berish va kuzatuv.',
        'Обучение + протокол сеанса с ClearLink™; при необходимости доставка домой и сопровождение.',
        'Training plus a ClearLink™ session protocol; home delivery and follow-up when needed.',
      ),
    ],
  },
  dermapal: {
    id: 'dermapal',
    seoTitle: t(
      'Daavlin DermaPal — bosh terisi va lokal zonalar | Radeski',
      'Daavlin DermaPal — кожа головы и локальные зоны | Radeski',
      'Daavlin DermaPal — scalp and spot areas | Radeski',
    ),
    seoDesc: t(
      'DermaPal: portativ yuqori intensivlikli fototerapiya — bosh terisi, kichik o‘choqlar, sayohatda ham kursni uzmaslik. Milliy Fototerapiya Markazi — Radeski.',
      'DermaPal: портативная высокоинтенсивная фототерапия — кожа головы, локальные очаги, курс без перерывов в поездках. Национальный центр фототерапии — Radeski.',
      'DermaPal: portable high-intensity phototherapy — scalp, local spots, stay on course while travelling. National Phototherapy Center — Radeski.',
    ),
    roleTitle: t('Modelning klinik roli', 'Клиническая роль модели', 'Clinical role of the model'),
    roleBody: t(
      'DermaPal — nishonli zonalar uchun qo‘lda ushlanadigan tizim: bosh terisi va kichik maydonlarda klinik kuchli qurilmalarga yaqin intensivlikni beradi, lekin portativ qulaylikni saqlaydi. Taroq-nasadka sochni ajratib, yorug‘likning teriga yetishini yaxshilaydi; ichki boshqaruv alohida taymerni keraksiz qiladi.',
      'DermaPal — ручная система для точечных зон: на коже головы и малых участках даёт интенсивность, близкую к мощным клиническим аппаратам, сохраняя портативность. Насадной гребень раздвигает волосы и улучшает доставку света; встроенный контроллер убирает отдельный таймер.',
      'DermaPal is a handheld system for targeted areas: on scalp and small fields it approaches clinic-grade intensity while staying portable. The comb attachment parts hair for better light delivery; built-in control removes a separate timer.',
    ),
    clinicTitle: t('Radeski / distributor yo‘nalishi', 'Направление Radeski / дистрибьютора', 'Radeski / distributor focus'),
    clinicBody: t(
      'Lokal o‘choqlar, bosh terisi psoriazi yoki sayohatda kursni uzmaslik kerak bo‘lganda DermaPal tez tanlanadi. Chexol bilan olib yurish oson; engil dastak uzoq seanslarda ham qo‘lni kam charchatadi. Markazda bemorga to‘g‘ri texnika va xavfsizlik oralig‘ini tushuntiramiz.',
      'При локальных очагах, псориазе кожи головы или необходимости не прерывать курс в поездке DermaPal выбирают часто. С чехлом его удобно носить; лёгкая рукоятка меньше утомляет руку при длинных сеансах. В центре объясняем технику и безопасные интервалы.',
      'For local plaques, scalp psoriasis or staying on course while travelling, DermaPal is a frequent pick. The carry case travels easily; the light handle reduces fatigue on longer sessions. At the center we teach technique and safe intervals.',
    ),
    featuresTitle: t('Texnik va foydalanish nuqtalari', 'Технические и практические моменты', 'Technical and practical points'),
    features: [
      t(
        'Yuqori intensivlikli lampalar — klinik Daavlin tizimlariga yaqin samaradorlik potensiali.',
        'Лампы высокой интенсивности — потенциал эффективности, близкий к клиническим системам Daavlin.',
        'High-intensity lamps — effectiveness potential close to clinical Daavlin systems.',
      ),
      t(
        'Mustahkam taroq-nasadka: sochni ajratadi, yo‘naltiruvchi sifatida tekis o‘tishga yordam beradi.',
        'Прочный гребень: раздвигает волосы и служит направляющей для равномерных проходов.',
        'Sturdy comb attachment: parts hair and guides even treatment passes.',
      ),
      t(
        'Ichki boshqaruv — alohida noqulay taymer kerak emas.',
        'Встроенный контроллер — отдельный неудобный таймер не нужен.',
        'Built-in control — no separate awkward timer required.',
      ),
      t(
        'Engil dastak + sayohat chexoli — uy, klinika va yo‘l uchun bir xil qulaylik.',
        'Лёгкая рукоятка + чехол — одинаково удобно дома, в клинике и в дороге.',
        'Light handle + carry case — equally practical at home, clinic and on the road.',
      ),
    ],
    pathwayTitle: t('Qanday tanlanadi', 'Как обычно выбирают', 'How it is typically selected'),
    pathway: [
      t(
        'Lokal yoki bosh terisi zonasiga nishonli fototerapiya kerakligi aniqlanadi.',
        'Определяется потребность в точечной фототерапии локальной зоны или кожи головы.',
        'Need for targeted phototherapy of a local area or scalp is confirmed.',
      ),
      t(
        'Portativlik (uy/sayohat) va bemor mustaqil ishlatishi mumkinligi baholanadi.',
        'Оценивается портативность (дом/поездки) и возможность самостоятельного использования.',
        'Portability (home/travel) and patient self-use ability are assessed.',
      ),
      t(
        'Texnika, doza oralig‘i va kuzatuv rejasi bilan bemor o‘qitiladi.',
        'Пациента обучают технике, интервалам дозы и плану наблюдения.',
        'The patient is trained on technique, dose intervals and follow-up plan.',
      ),
    ],
  },
  'm-series': {
    id: 'm-series',
    seoTitle: t(
      'Daavlin M Series — qo‘l va oyoq fototerapiyasi | Radeski',
      'Daavlin M Series — фототерапия кистей и стоп | Radeski',
      'Daavlin M Series — hand and foot phototherapy | Radeski',
    ),
    seoDesc: t(
      'M Series: NB-UVB / BB-UVB / UVA, ClearLink™, qisqa seanslar. Palmar-plantar va boshqa qo‘l-oyoq fotosezgir jarayonlar. Radeski Milliy Fototerapiya Markazi.',
      'M Series: NB-UVB / BB-UVB / UVA, ClearLink™, короткие сеансы. Ладонно-подошвенные и другие фоточувствительные процессы кистей и стоп. Национальный центр фототерапии Radeski.',
      'M Series: NB-UVB / BB-UVB / UVA, ClearLink™, short sessions. Palmoplantar and other photoresponsive hand/foot disease. Radeski National Phototherapy Center.',
    ),
    roleTitle: t('Modelning klinik roli', 'Клиническая роль модели', 'Clinical role of the model'),
    roleBody: t(
      'M Series qo‘l va oyoq fotosezgir kasalliklari uchun universal qurilma: klinikada ham, uyda ham. Futlyarni yechib vertikal qo‘yish orqali kichik lokal zonani ham ishlash mumkin. U-shaklli lampalar va kuchaytirilgan komponentlar seansni sezilarli qisqartirishi mumkin.',
      'M Series — универсальный аппарат для фоточувствительных заболеваний кистей и стоп: и в клинике, и дома. Сняв футляр и поставив прибор вертикально, можно обрабатывать небольшие локальные зоны. U-образные лампы и усиленные компоненты могут заметно сократить сеанс.',
      'M Series is a versatile unit for photoresponsive hand and foot disease — clinic and home. Remove the case and stand it upright to treat small local areas. U-shaped lamps and reinforced parts can markedly shorten sessions.',
    ),
    clinicTitle: t('Radeski / distributor yo‘nalishi', 'Направление Radeski / дистрибьютора', 'Radeski / distributor focus'),
    clinicBody: t(
      'Palmar/plantar psoriaz va shunga o‘xshash jarayonlarda M Series tez-tez tavsiya etiladi. NB-UVB, broadband UVB, UVA va kombinatsiyalar mavjud; ClearLink™ seansni nazorat qiladi. Kerak bo‘lsa qo‘l va oyoqni birga ishlash tizimi alohida qo‘shiladi.',
      'При ладонно-подошвенном псориазе и сходных процессах M Series рекомендуют часто. Доступны NB-UVB, broadband UVB, UVA и комбинации; ClearLink™ контролирует сеанс. При необходимости отдельно добавляют систему одновременной обработки рук и ног.',
      'For palmoplantar psoriasis and similar processes, M Series is often recommended. NB-UVB, broadband UVB, UVA and combinations are available; ClearLink™ controls the session. A hands-and-feet co-treatment system can be added separately when needed.',
    ),
    featuresTitle: t('Texnik va foydalanish nuqtalari', 'Технические и практические моменты', 'Technical and practical points'),
    features: [
      t(
        'NB-UVB, broadband UVB, UVA va kombinatsiyalangan o‘rnatmalar.',
        'NB-UVB, broadband UVB, UVA и комбинированные установки.',
        'NB-UVB, broadband UVB, UVA and combination setups.',
      ),
      t(
        'ClearLink™ sensorli boshqaruv — xavfsiz va tushunarli seanslar.',
        'Сенсорный ClearLink™ — безопасные и понятные сеансы.',
        'ClearLink™ touch control — safe, clear sessions.',
      ),
      t(
        'U-lampalar: bir o‘lchamda ikki lampa quvvatiga yaqin chiqish — qisqa muolaja.',
        'U-лампы: мощность двух ламп при размере одной — короткая процедура.',
        'U-lamps: near two-lamp power in one-lamp size — short procedures.',
      ),
      t(
        'Futlyarsiz vertikal rejim — kichik lokal maydonlar uchun moslashuvchanlik.',
        'Вертикальный режим без футляра — гибкость для малых локальных зон.',
        'Upright mode without case — flexibility for small local fields.',
      ),
    ],
    pathwayTitle: t('Qanday tanlanadi', 'Как обычно выбирают', 'How it is typically selected'),
    pathway: [
      t(
        'Qo‘l/oyoq zonasidagi fotosezgir jarayon tasdiqlanadi.',
        'Подтверждается фоточувствительный процесс в зоне кистей/стоп.',
        'A photoresponsive process on hands/feet is confirmed.',
      ),
      t(
        'Spektr (NB-UVB / BB-UVB / UVA) va uy yoki klinika rejimi tanlanadi.',
        'Выбираются спектр (NB-UVB / BB-UVB / UVA) и режим дом или клиника.',
        'Spectrum (NB-UVB / BB-UVB / UVA) and home vs clinic plan are chosen.',
      ),
      t(
        'Aksessuarlar (qo‘l+oyoq) va bemor o‘qitishi bilan start beriladi.',
        'Старт с аксессуарами (руки+ноги) и обучением пациента.',
        'Start with accessories (hands+feet) and patient training.',
      ),
    ],
  },
  'deka-co2-laser': {
    id: 'deka-co2-laser',
    seoTitle: t(
      'DEKA CO₂ Laser SmartXide Punto | Radeski Skin Clinic',
      'Лазер DEKA CO₂ SmartXide Punto | Radeski Skin Clinic',
      'DEKA CO₂ Laser SmartXide Punto | Radeski Skin Clinic',
    ),
    seoDesc: t(
      'DEKA SmartXide Punto CO₂-lazer: fraksion teri yangilanishi, postakne chandiqlari, PinPoint rejimi. Farg‘ona va Qo‘qon — Radeski Skin Clinic.',
      'Лазер DEKA SmartXide Punto CO₂: фракционное обновление кожи, рубцы постакне, режим PinPoint. Фергана и Коканд — Radeski Skin Clinic.',
      'DEKA SmartXide Punto CO₂ laser: fractional renewal, post-acne scars, PinPoint mode. Fergana and Kokand — Radeski Skin Clinic.',
    ),
    roleTitle: t('Qurilmaning klinik roli', 'Клиническая роль аппарата', 'Clinical role of the system'),
    roleBody: t(
      'DEKA CO₂-lazer fraksion mikrozonalar orqali kollagen yangilanishini rag‘batlantiradi, teri relefini tekislaydi va shifokor ko‘rsatmasi bo‘yicha xavfsiz o‘smalarni nazoratli olib tashlaydi. PinPoint rejimi so‘g‘al va papillomalar uchun minimal travma bilan ishlash imkonini beradi.',
      'Лазер DEKA CO₂ стимулирует обновление коллагена через фракционные микрозоны, выравнивает рельеф и по показаниям удаляет доброкачественные образования. Режим PinPoint позволяет работать с бородavками и папилломами с минимальной травмой.',
      'DEKA CO₂ laser stimulates collagen renewal through fractional micro-zones, smooths skin texture and removes benign lesions when indicated. PinPoint mode supports warts and papillomas with minimal trauma.',
    ),
    clinicTitle: t('Radeski Skin Clinic yo‘nalishi', 'Направление Radeski Skin Clinic', 'Radeski Skin Clinic focus'),
    clinicBody: t(
      'Farg‘ona va Qo‘qon filiallarida muolajalar dermatolog nazoratida, individual energiya va chuqurlik bilan o‘tkaziladi. Oldin ko‘rik va kerak bo‘lsa dermatoskopiya qilinadi; bemor parvarishi va quyosh himoyasi bo‘yicha aniq tavsiyalar beriladi.',
      'В филиалах Ферганы и Коканда процедуры проводятся под контролем дерматолога с индивидуальной энергией и глубиной. Предварительный осмотр и при необходимости дерматоскопия; чёткие рекомендации по уходу и солнцезащите.',
      'At Fergana and Kokand branches, treatment is dermatologist-led with individual energy and depth. Examination and dermoscopy when needed; clear aftercare and sun-protection guidance.',
    ),
    featuresTitle: t('Asosiy imkoniyatlar', 'Ключевые возможности', 'Key capabilities'),
    features: [
      t('Fraksion CO₂ — teri yangilanishi va chandiqlar', 'Фракционный CO₂ — обновление кожи и рубцы', 'Fractional CO₂ — renewal and scars'),
      t('PinPoint — so‘g‘al, papilloma, tanlangan nevuslar', 'PinPoint — бородavки, папилломы, отдельные невусы', 'PinPoint — warts, papillomas, selected nevi'),
      t('Individual parametrlar — har bir bemor uchun alohida', 'Индивидуальные параметры — для каждого пациента', 'Individual parameters — per patient'),
      t('Dermatolog nazorati — xavfsizlik va natija kuzatuvi', 'Контроль дерматologa — безопасность и наблюдение', 'Dermatologist oversight — safety and follow-up'),
    ],
    pathwayTitle: t('Qanday boshlanadi', 'Как обычно начинают', 'How treatment usually starts'),
    pathway: [
      t('Dermatolog ko‘rigi va muammo bahosi', 'Осмотр дерматologа и оценка задачи', 'Dermatologist exam and goal assessment'),
      t('CO₂ yoki PinPoint rejimi tanlanadi', 'Выбор режима CO₂ или PinPoint', 'CO₂ or PinPoint mode is chosen'),
      t('Seanslar rejasi, parvarish va kuzatuv belgilanadi', 'План сеансов, уход и наблюдение', 'Session plan, aftercare and follow-up'),
    ],
  },
  'deka-alexandrite-laser': {
    id: 'deka-alexandrite-laser',
    seoTitle: t(
      'DEKA Alexandrite Laser 755 nm | Radeski Skin Clinic',
      'Александритовый лазер DEKA 755 нм | Radeski Skin Clinic',
      'DEKA Alexandrite Laser 755 nm | Radeski Skin Clinic',
    ),
    seoDesc: t(
      'DEKA aleksandrit lazer 755 nm: lazerniy epilyatsiya, pigment dog‘lari, shifokor protokoli. Farg‘ona va Qo‘qon — Radeski Skin Clinic.',
      'Александритовый лазер DEKA 755 нм: лазерная эпиляция, пигментные пятна, протокол врача. Фергана и Коканд — Radeski Skin Clinic.',
      'DEKA alexandrite laser 755 nm: hair removal, pigmented spots, medical protocol. Fergana and Kokand — Radeski Skin Clinic.',
    ),
    roleTitle: t('Qurilmaning klinik roli', 'Клиническая роль аппарата', 'Clinical role of the system'),
    roleBody: t(
      '755 nm aleksandrit lazer melanin va soch folikulasiga selektiv ta’sir qiladi — ortiqcha tuk, pigment dog‘lari va ayrim vascular ko‘rinishlar uchun mos. Eneriya va interval bemor teri turi va muammosiga qarab sozlanadi.',
      'Александритовый лазер 755 нм селективно воздействует на меланин и волосяной фолликул — подходит для нежелательных волос, пигментации и отдельных сосудистых проявлений. Энергия и интервалы настраиваются под тип кожи и задачу.',
      '755 nm alexandrite laser selectively targets melanin and hair follicles — suited to unwanted hair, pigmentation and selected vascular signs. Energy and intervals are tailored to skin type and indication.',
    ),
    clinicTitle: t('Radeski Skin Clinic yo‘nalishi', 'Направление Radeski Skin Clinic', 'Radeski Skin Clinic focus'),
    clinicBody: t(
      'Epilyatsiya va pigment muolajalari faqat shifokor ko‘rsatmasi va contraindikatsiyalar tekshirilgandan keyin boshlanadi. Bemorga seanslar soni, oralig‘i va uy parvarishi aniq tushuntiriladi.',
      'Эпиляция и работа с пигментом начинаются только после оценки показаний и противопоказаний врачом. Пациенту объясняют число сеансов, интервалы и домашний уход.',
      'Hair removal and pigment care start only after the physician confirms indications and rules out contraindications. Session count, spacing and home care are explained clearly.',
    ),
    featuresTitle: t('Asosiy imkoniyatlar', 'Ключевые возможности', 'Key capabilities'),
    features: [
      t('755 nm — yuqori selektivlik', '755 нм — высокая селективность', '755 nm — high selectivity'),
      t('Lazerniy epilyatsiya protokollari', 'Протоколы лазерной эпиляции', 'Laser hair removal protocols'),
      t('Pigment va vascular yondashuvlar', 'Подходы к пигменту и сосудам', 'Pigment and vascular approaches'),
      t('Individual reja va kuzatuv', 'Индивидуальный план и наблюдение', 'Individual plan and follow-up'),
    ],
    pathwayTitle: t('Qanday boshlanadi', 'Как обычно начинают', 'How treatment usually starts'),
    pathway: [
      t('Teri va soch turi baholanadi', 'Оцениваются кожа и тип волос', 'Skin and hair type are assessed'),
      t('Test yoki to‘liq seans rejimi tanlanadi', 'Выбирают тест или полный курс', 'Test spot or full course is chosen'),
      t('Oraliq va quyosh himoyasi tavsiya etiladi', 'Рекомендуют интервалы и SPF', 'Intervals and sun protection are advised'),
    ],
  },
  'surgitron-radiofrequency': {
    id: 'surgitron-radiofrequency',
    seoTitle: t(
      'Surgitron Radiofrequency | Radeski Skin Clinic',
      'Радиоволновая хирургия Surgitron | Radeski Skin Clinic',
      'Surgitron Radiofrequency | Radeski Skin Clinic',
    ),
    seoDesc: t(
      'Surgitron radioto‘lqin: papillomalar, mollyusk, keratoma va xol olib tashlash minimal iz bilan. Farg‘ona va Qo‘qon — Radeski Skin Clinic.',
      'Surgitron: удаление папиллом, моллюска, кератом и родинок с минимальным рубцом. Фергана и Коканд — Radeski Skin Clinic.',
      'Surgitron RF: papillomas, molluscum, keratomas and moles with minimal scarring. Fergana and Kokand — Radeski Skin Clinic.',
    ),
    roleTitle: t('Qurilmaning klinik roli', 'Клиническая роль аппарата', 'Clinical role of the system'),
    roleBody: t(
      'Surgitron radioto‘lqin ignasi yumshoq kesish va koagulyatsiya beradi — atrofdagi sog‘lom to‘qimagaga minimal issiqlik tarqalishi bilan. Murakkab anatomik zonalar va yumshoq papillomalar uchun mos.',
      'Радиоволновая игла Surgitron обеспечивает мягкий разрез и коagulyatsiyu с минимальным нагревом соседних тканей. Подходит для деликатных зон и мягких пapillom.',
      'Surgitron RF provides gentle cutting and coagulation with minimal heat spread to surrounding tissue — suited to delicate areas and soft papillomas.',
    ),
    clinicTitle: t('Radeski Skin Clinic yo‘nalishi', 'Направление Radeski Skin Clinic', 'Radeski Skin Clinic focus'),
    clinicBody: t(
      'Har bir o‘sma oldin dermatoskopik baholanadi; faqat shifokor tasdiqlagan holatlarda olib tashlanadi. Kerak bo‘lsa lokal anesteziya qo‘llanadi; keyingi parvarish va kuzatuv tavsiya etiladi.',
      'Каждое образование предварительно оценивают дерматоскопически; удаляют только при подтверждённых показаниях. При необходимости — местная анестезия; далее уход и наблюдение.',
      'Each lesion is assessed dermoscopically first; removal only when medically indicated. Local anaesthesia when needed; aftercare and follow-up are advised.',
    ),
    featuresTitle: t('Asosiy imkoniyatlar', 'Ключевые возможности', 'Key capabilities'),
    features: [
      t('Minimal issiqlik tarqalishi', 'Минимальное распространение тепла', 'Minimal heat spread'),
      t('Murakkab zonalar — ko‘z qovoqlari, inguinal hudud', 'Сложные зоны — веки, пах', 'Complex areas — eyelids, groin'),
      t('Papilloma, mollyusk, keratoma protokollari', 'Протоколы для papillom, molluscum, keratoma', 'Protocols for papillomas, molluscum, keratomas'),
      t('Anesteziya va kuzatuv bilan xavfsizlik', 'Безопасность с анестезией и наблюдением', 'Safety with anaesthesia and follow-up'),
    ],
    pathwayTitle: t('Qanday boshlanadi', 'Как обычно начинают', 'How treatment usually starts'),
    pathway: [
      t('Dermatoskopik ko‘rik va ko‘rsatmalar', 'Дерматоскопия и показания', 'Dermoscopy and indications'),
      t('RF olib tashlash yoki koagulyatsiya', 'RF-удаление или коagulyatsiya', 'RF removal or coagulation'),
      t('Parvarish va kuzatuv tavsiyalari', 'Рекомendatsii по уходу и наблюдению', 'Aftercare and follow-up advice'),
    ],
  },
  neolux: {
    id: 'neolux',
    seoTitle: t(
      'Daavlin NeoLux — klinik to‘liq tana kabina | Radeski',
      'Daavlin NeoLux — клиническая кабина на всё тело | Radeski',
      'Daavlin NeoLux — clinical full-body cabin | Radeski',
    ),
    seoDesc: t(
      'NeoLux: ikki eshik ixcham kabina, ClearLink™, UV himoya ekranlari, nogironlar aravachasiga mos ichki makon. Milliy Fototerapiya Markazi — Radeski.',
      'NeoLux: компактная двухдверная кабина, ClearLink™, UV-экраны ламп, интерьер с местом для инвалидного кресла. Национальный центр фототерапии — Radeski.',
      'NeoLux: compact two-door cabin, ClearLink™, UV lamp shields, wheelchair-capable interior. National Phototherapy Center — Radeski.',
    ),
    roleTitle: t('Modelning klinik roli', 'Клиническая роль модели', 'Clinical role of the model'),
    roleBody: t(
      'NeoLux zamonaviy klinik kabinet kutgan funksiyalarni birlashtiradi: ko‘p mashinali konfiguratsiya, sozlanadigan lampa joylashuvi va kuchaytirilgan xavfsizlik. Ikki eshik konstruksiyasi sinfidagi eng ixcham yechimlardan biri bo‘lib, ichki makon har qanday bemor o‘lchamiga qulay qoladi.',
      'NeoLux объединяет функции, которых ждёт современный кабинет: многомашинная конфигурация, настраиваемое размещение ламп и усиленная безопасность. Двухдверная конструкция — одно из самых компактных решений в классе, при этом интерьер остаётся комфортным для пациентов любого размера.',
      'NeoLux combines what a modern clinic room expects: multi-machine configuration, adjustable lamp placement and reinforced safety. The two-door design is among the most compact in class while the interior stays comfortable for patients of any size.',
    ),
    clinicTitle: t('Radeski / distributor yo‘nalishi', 'Направление Radeski / дистрибьютора', 'Radeski / distributor focus'),
    clinicBody: t(
      'Klinik to‘liq tana kabina kerak bo‘lganda NeoLux bemor qulayligi va joy tejashni birga beradi. Ochiq yuqori qism klaustrofobiya hissini kamaytiradi; ichki tutqichlar barqarorlikni oshiradi. UV o‘tkazuvchi ekranlar changni kamaytiradi, bemorni lampadan himoya qiladi va xizmat muddatini uzaytiradi.',
      'Когда нужна клиническая кабина на всё тело, NeoLux даёт комфорт пациента и экономию площади вместе. Открытый верх снижает ощущение клаустрофобии; внутренние поручни повышают устойчивость. UV-пропускающие экраны уменьшают пыль, защищают пациента от контакта с лампами и продлевают срок службы.',
      'When a clinical full-body cabin is needed, NeoLux delivers patient comfort and space efficiency together. An open top eases claustrophobia; interior handrails improve stability. UV-transmitting shields cut dust, protect patients from lamp contact and help lamp life.',
    ),
    featuresTitle: t('Texnik va foydalanish nuqtalari', 'Технические и практические моменты', 'Technical and practical points'),
    features: [
      t(
        'Ochiq yuqori + keng ichki makon — klaustrofobiya va nogironlar aravachasi uchun qulayroq.',
        'Открытый верх + просторный интерьер — комфортнее при клаустрофобии и для инвалидного кресла.',
        'Open top + roomy interior — easier with claustrophobia and for wheelchairs.',
      ),
      t(
        'Katta ichki tutqichlar — bemor barqarorligi va xavfsizligi.',
        'Большие внутренние поручни — устойчивость и безопасность пациента.',
        'Large interior handrails — patient stability and safety.',
      ),
      t(
        'UV himoya ekranlari — chang kamayadi, kontakt oldini oladi, lampa umri uzayadi.',
        'UV-защитные экраны — меньше пыли, нет контакта с лампами, дольше срок службы.',
        'UV protective shields — less dust, no lamp contact, longer lamp life.',
      ),
      t(
        'ClearLink™ — har bir klinik seansni xavfsiz va samarali o‘tkazish.',
        'ClearLink™ — безопасное и эффективное проведение каждого клинического сеанса.',
        'ClearLink™ — safe, effective delivery of each clinical session.',
      ),
    ],
    pathwayTitle: t('Qanday tanlanadi', 'Как обычно выбирают', 'How it is typically selected'),
    pathway: [
      t(
        'Klinikada to‘liq tana kabina va bemor oqimi ehtiyoji aniqlanadi.',
        'Определяется потребность клиники в кабине на всё тело и в потоке пациентов.',
        'Clinic need for a full-body cabin and patient flow is defined.',
      ),
      t(
        'Xona o‘lchami, kirish/chiqish va nogironlar aravachasi talablari tekshiriladi.',
        'Проверяются размер кабинета, вход/выход и требования к инвалидному креслу.',
        'Room size, access and wheelchair requirements are checked.',
      ),
      t(
        'O‘rnatish, ClearLink™ protokoli va xodimlar tayyorlovi bilan ishga tushiriladi.',
        'Запуск с установкой, протоколом ClearLink™ и обучением персонала.',
        'Go-live with install, ClearLink™ protocol and staff training.',
      ),
    ],
  },
  aquex: {
    id: 'aquex',
    seoTitle: t(
      'Daavlin Aquex — giperhidroza uchun TWI | Radeski',
      'Daavlin Aquex — TWI при гипергидрозе | Radeski',
      'Daavlin Aquex — TWI for hyperhidrosis | Radeski',
    ),
    seoDesc: t(
      'Aquex: musluk suvi ionoforezi (TWI) — dori-darmonsiz giperhidroza yechimi. Portativ futlyar, raqamli modul, ASE©. Radeski Milliy Fototerapiya Markazi.',
      'Aquex: ионофорез водой (TWI) — безлекарственное решение при гипергидрозе. Портативный футляр, цифровой модуль, ASE©. Национальный центр фототерапии Radeski.',
      'Aquex: tap-water iontophoresis (TWI) — drug-free hyperhidrosis care. Portable case, digital module, ASE©. Radeski National Phototherapy Center.',
    ),
    roleTitle: t('Modelning klinik roli', 'Клиническая роль модели', 'Clinical role of the model'),
    roleBody: t(
      'Aquex giperhidrozni musluk suvi ionoforezi (TWI) bilan dori-darmonsiz, xavfsiz va sinovdan o‘tgan usulda davolaydi. TWI samaradorlik, xavfsizlik va iqtisodiy jihatdan kuchli variantlardan biri hisoblanadi — ayniqsa kaft va tovon zonalarida.',
      'Aquex лечит гипергидроз безлекарственным, безопасным и проверенным методом ионофореза водой (TWI). TWI считают одним из сильных вариантов по эффективности, безопасности и стоимости — особенно для ладоней и стоп.',
      'Aquex treats hyperhidrosis with drug-free, safe, proven tap-water iontophoresis (TWI). TWI is among the stronger options for effectiveness, safety and cost — especially for palms and soles.',
    ),
    clinicTitle: t('Radeski / distributor yo‘nalishi', 'Направление Radeski / дистрибьютора', 'Radeski / distributor focus'),
    clinicBody: t(
      'Kaft/tovon giperhidrozasi yoki tegishli zonalarda Aquex tez tanlanadi. Futlyar ikki vannacha vazifasini bajaradi; raqamli modul taymer, 3 gacha profil, ortiqcha terapiyadan himoya va ASE© antishok elektronikasini beradi. Qo‘ltiq kabi qiyin zonalar uchun aksessuarlar qo‘shilishi mumkin.',
      'При гипергидрозе ладоней/стоп и связанных зон Aquex выбирают часто. Футляр служит двумя лотками; цифровой модуль даёт таймер, до 3 профилей, защиту от избыточной терапии и антишоковую электронику ASE©. Для трудных зон, например подмышек, можно добавить аксессуары.',
      'For palm/sole hyperhidrosis and related areas, Aquex is often chosen. The case doubles as two trays; the digital module adds timer, up to 3 profiles, over-treatment protection and ASE© anti-shock electronics. Accessories can help harder areas such as the axilla.',
    ),
    featuresTitle: t('Texnik va foydalanish nuqtalari', 'Технические и практические моменты', 'Technical and practical points'),
    features: [
      t(
        'TWI — dori-darmonsiz, klinikada keng qo‘llaniladigan yondashuv.',
        'TWI — безлекарственный подход, широко применяемый в клинике.',
        'TWI — a drug-free approach widely used in clinic.',
      ),
      t(
        'Engil portativ futlyar = saqlash + ikki vannacha, qo‘shimcha aksessuarsiz.',
        'Лёгкий портативный футляр = хранение + два лотка без лишних аксессуаров.',
        'Light portable case = storage + two trays without extra tray accessories.',
      ),
      t(
        'Raqamli modul: taymer, 3 gacha profil, ortiqcha terapiyadan himoya, ASE©.',
        'Цифровой модуль: таймер, до 3 профилей, защита от избыточной терапии, ASE©.',
        'Digital module: timer, up to 3 profiles, over-treatment protection, ASE©.',
      ),
      t(
        'Ixtiyoriy aksessuarlar — qo‘ltiq kabi qiyin zonalarni ishlashga yordam.',
        'Опциональные аксессуары — помощь для трудных зон, например подмышек.',
        'Optional accessories — help for harder areas such as the axilla.',
      ),
    ],
    pathwayTitle: t('Qanday tanlanadi', 'Как обычно выбирают', 'How it is typically selected'),
    pathway: [
      t(
        'Giperhidroza diagnosti va TWI uchun ko‘rsatmalar baholanadi.',
        'Оцениваются диагноз гипергидроза и показания к TWI.',
        'Hyperhidrosis diagnosis and indications for TWI are assessed.',
      ),
      t(
        'Uy yoki klinika rejimi, zonalar (kaft/tovon/aksessuar) tanlanadi.',
        'Выбираются режим дом/клиника и зоны (ладони/стопы/аксессуары).',
        'Home vs clinic plan and zones (palms/soles/accessories) are chosen.',
      ),
      t(
        'Profil sozlamalari, xavfsizlik va kuzatuv bilan bemor o‘qitiladi.',
        'Пациента обучают профилям, безопасности и наблюдению.',
        'The patient is trained on profiles, safety and follow-up.',
      ),
    ],
  },
};

export const DAAVLIN_MODELS_NAV_TITLE: L = t(
  'Asosiy modelllar va uskunalar',
  'Основные модели и аппараты',
  'Core models & devices',
);

export const DAAVLIN_MODELS_NAV_ALL: L = t(
  'Barcha modelllar qatori',
  'Весь модельный ряд',
  'Full model range',
);
