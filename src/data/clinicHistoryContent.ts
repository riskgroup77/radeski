import type { Locale } from '../types';

type L = Record<Locale, string>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export const CLINIC_HISTORY = {
  eyebrow: L(
    'Tarix va strategik evolyutsiya',
    'История и стратегическая эволюция',
    'History and strategic evolution',
  ),
  title: L('Radeski Skin Clinic', 'Radeski Skin Clinic', 'Radeski Skin Clinic'),
  subtitle: L(
    'Yevropa klinikasidan milliy dermatologik ekotizmgacha',
    'От европейской клиники к национальной дерматологической экосистеме',
    'From a European clinic to a national dermatology ecosystem',
  ),
  intro: L(
    'Radeski Skin Clinic yo‘li — professional dermatologiya, texnologiya va bemor bilan uzoq muddatli hamkorlikka qurilgan. Quyida loyihaning asosiy bosqichlari.',
    'Путь Radeski Skin Clinic — это профессиональная дерматология, технологичность и долгосрочное сопровождение пациента. Ниже — ключевые этапы развития проекта.',
    'The Radeski Skin Clinic journey is built on professional dermatology, technology, and long-term patient partnership. Below are the main stages of the project.',
  ),
  evolutionLabel: L('Rivojlanish yo‘li', 'Путь развития', 'Growth path'),
  evolutionSteps: [
    L('Belgiya', 'Бельгия', 'Belgium'),
    L('Farg‘ona', 'Фергана', 'Fergana'),
    L('Qo‘qon', 'Коканд', 'Kokand'),
    L('O‘zbekiston tarmog‘i', 'Национальная сеть Узбекистана', 'Uzbekistan network'),
    L('Markaziy Osiyo', 'Центральная Азия', 'Central Asia'),
  ],
  stats: [
    {
      value: '2020',
      label: L('Belgiyada boshlanish', 'Старт в Бельгии', 'Founded in Belgium'),
    },
    {
      value: '3',
      label: L('Klinik maydon', 'Клинические площадки', 'Clinical sites'),
    },
    {
      value: '5',
      label: L('Rivojlanish bosqichi', 'Этапов развития', 'Development stages'),
    },
  ],
  stages: [
    {
      id: 'belgium',
      year: L('2020', '2020', '2020'),
      place: L('Belgiya', 'Бельгия', 'Belgium'),
      title: L('Yevropa bosqichi', 'Европейский этап', 'European foundation'),
      paragraphs: [
        L(
          'Radeski Skin Clinic tarixi 2020-yilda Belgiyada boshlangan: Rossiyadan kelgan ikki dermatolog shifokor teri kasalliklari bo‘yicha zamonaviy yordam beradigan ixtisoslashtirilgan klinika ochgan.',
          'История Radeski Skin Clinic началась в 2020 году в Бельгии, где два врача-дерматолога из России создали специализированную дерматологическую клинику, ориентированную на оказание современной медицинской помощи пациентам с заболеваниями кожи.',
          'Radeski Skin Clinic began in 2020 in Belgium, where two dermatologists from Russia opened a specialized clinic focused on modern medical care for patients with skin disease.',
        ),
        L(
          'Yevropa bosqichi loyihaning poydevori bo‘ldi: shifokorlar ekspertizasi, maxsus diagnostika va davolash yondashuvi hamda yuqori sifatli tibbiy yordamga yo‘naltirilgan klinik model shakllandi.',
          'Европейский этап стал фундаментом проекта: была сформирована первоначальная клиническая модель, основанная на профессиональной экспертизе врачей, специализированном подходе к диагностике и лечению заболеваний кожи и ориентации на высокое качество медицинской помощи.',
          'The European stage became the project’s foundation: a clinical model built on physician expertise, specialized diagnosis and treatment, and a commitment to high-quality care.',
        ),
        L(
          'Belgiyadagi klinika muvaffaqiyatli faoliyatda davom etadi — bu dastlabki konsepsiyaning barqarorligini va brendning xalqaro asosini tasdiqlaydi.',
          'Клиника в Бельгии продолжает успешно функционировать, что подтверждает жизнеспособность первоначальной концепции и создает международную основу для дальнейшего развития бренда.',
          'The Belgium clinic continues to operate successfully — confirming the original concept and providing an international base for brand growth.',
        ),
      ],
      highlight: L(
        'Rade Skin Clinic — Belgiya filiali hozir ham ochiq',
        'Филиал Rade Skin Clinic в Бельгии работает и сегодня',
        'Rade Skin Clinic — Belgium branch still open today',
      ),
    },
    {
      id: 'fergana',
      year: L('Keyingi bosqich', 'Следующий этап', 'Next chapter'),
      place: L('Farg‘ona, O‘zbekiston', 'Фергана, Узбекистан', 'Fergana, Uzbekistan'),
      title: L('O‘zbekiston bozoriga chiqish', 'Выход на рынок Узбекистана', 'Entering the Uzbek market'),
      paragraphs: [
        L(
          'Keyingi bosqich — asoschilaridan biri kasbiy faoliyatini kelib chiqish shahri Farg‘onada davom ettirish qaroriga keldi.',
          'Следующим этапом развития проекта стало решение одного из основателей продолжить профессionalную деятельность в Узбекистане, в городе Фергана — регионе, с которым он связан своим происхождением.',
          'The next step was a founder’s decision to continue practice in Fergana, Uzbekistan — the region of his origin.',
        ),
        L(
          'Mahalliy bozorni o‘rganishda Farg‘ona vodiysida katta bo‘shliq aniqlandi: aholiga zamonaviy dermatologiya, dermato-onkologiya, trixologiya va yuqori texnologiyali davolashga qulay va ixtisoslashtirilgan yordam kerak edi.',
          'При изучении местного рынка было выявлено значительное неудовлетворенное потребительское и медицинское пространство: население Ферганской долины нуждалось в доступной специализированной помощи в области современной дерматологии, дерматоонкологии, трихологии и высокотехнологичных методов лечения.',
          'Market analysis showed a major gap: the Fergana Valley needed accessible specialized care in modern dermatology, dermato-oncology, trichology, and high-tech treatment.',
        ),
        L(
          'Shu asosda yevropa konsepsiyasi O‘zbekiston sharoitiga moslashtirildi: tibbiy sifat, texnologiya, ixtisoslashtirilgan yordamning ochiqligi va bemor bilan uzoq muddatli hamkorlik birlashtirildi.',
          'На этой основе европейская концепция Radeski Skin Clinic была адаптирована к условиям и потребностям рынка Узбекистана. В результате была сформирована модель клиники, ориентированная одновременно на медицинское качество, технологичность, доступность специализированной помощи и долгосрочное сопровождение пациента.',
          'The European concept was adapted to Uzbekistan: a clinic model combining medical quality, technology, accessible specialist care, and long-term patient follow-up.',
        ),
      ],
    },
    {
      id: 'kokand',
      year: L('Kengayish', 'Расширение', 'Expansion'),
      place: L('Qo‘qon, O‘zbekiston', 'Коканд, Узбекистан', 'Kokand, Uzbekistan'),
      title: L('Mintaqaviy tarmoq shakllanishi', 'Формирование региональной сети', 'Building a regional network'),
      paragraphs: [
        L(
          'Keyingi mantiqiy qadam — Farg‘ona chegarasidan tashqariga chiqish: Farg‘ona vodiysining g‘arbiy qismida yuqori aholi zichligi va tibbiy talab borligi sababli Qo‘qonda filial ochish qaror qilindi.',
          'Следующим логичным шагом стало расширение присутствия за пределами Ферганы. С учетом высокой концентрации населения и медицинского спроса в западной части Ферганской долины было принято решение о создании клиники в городе Коканд.',
          'The logical next step was expansion beyond Fergana. Given population density and medical demand in the western valley, a Kokand clinic was opened.',
        ),
        L(
          'Qo‘qon geografik joylashuvi va Kokand zonasi hamda atrofdagi hududlarga ixtisoslashtirilgan yordam yetkazish imkoniyati tufayli strategik nuqta sifatida tanlandi.',
          'Коканд был выбран как стратегическая точка развития благодаря своему географическому положению и возможности обеспечить специализированной медицинской помощью население Кокандской зоны и прилегающих территорий.',
          'Kokand was chosen as a strategic hub to serve the Kokand zone and surrounding areas with specialized care.',
        ),
      ],
    },
    {
      id: 'today',
      year: L('Bugun', 'Сегодня', 'Today'),
      place: L('O‘zbekiston va Markaziy Osiyo', 'Узбекистан и Центральная Азия', 'Uzbekistan & Central Asia'),
      title: L('Milliy ekotizmgacha', 'К национальной экосистеме', 'Toward a national ecosystem'),
      paragraphs: [
        L(
          'Radeski Skin Clinic rivoji ketma-ket bosqichlardan o‘tdi: Belgiya → Farg‘ona → Qo‘qon → O‘zbekiston milliy tarmog‘i → Markaziy Osiyo yo‘nalishi.',
          'Таким образом, развитие Radeski Skin Clinic прошло несколько последовательных этапов: Бельгия → Фергана → Коканд → национальная сеть Узбекистана → Центральная Азия.',
          'Radeski Skin Clinic evolved in clear stages: Belgium → Fergana → Kokand → a national Uzbek network → Central Asia.',
        ),
        L(
          'Loyiha davomida uchta klinik maydon yaratildi, mutaxassislar jamoasi shakllandi va mintaqaviy bozorda bemorlar bilan amaliy tajriba to‘plandi.',
          'За период развития проекта были созданы три клинические площадки, сформирована команда специалистов и накоплен практический опыт работы с пациентами в условиях регионального рынка.',
          'Over this period three clinical sites were established, a specialist team was built, and deep practical experience was gained in regional patient care.',
        ),
      ],
    },
  ],
};
