import type { Article, ArticleRichContent, Locale } from '../../types';

type LocalizedArticleCatalog = Record<
  Locale,
  {
    summary: string;
    body: string;
    keyTakeaways: string[];
    faq: ArticleRichContent['faq'];
    tags: string[];
    whenToSeeDoctor: string[];
  }
>;

function uzBody(): string {
  return `## Soch ekish nima va qachon foydali bo'ladi?

Soch ekish — donor zonadagi sog'lom follikulalarni siyraklashgan yoki kal bo'lib qolgan joylarga ko'chirishga asoslangan mikrojarrohlik muolaja. Ko'pincha androgenetik alopetsiyada yaxshi natija beradi, ayrim boshqa holatlarda ham ko'rib chiqilishi mumkin.

Zamonaviy usullar tabiiy ko'rinishga erishish imkonini beradi. Lekin muolajaning muvaffaqiyati nafaqat texnikaga, balki bemorni to'g'ri tanlashga ham bog'liq. Shuning uchun har bir holatda avval soch to'kilishi sababi, donor zona sifati va umumiy sog'liq holati baholanadi.

## Soch ekishni qachon qilish mumkin emas?

Ba'zi holatlarda operatsiya odatda tavsiya etilmaydi yoki umuman o'tkazilmaydi.

### 1. Qon ivishining buzilishi

Qon ketish xavfi yuqori bo'lgan kasalliklarda operatsiya vaqtida va undan keyin asoratlar ehtimoli oshadi. Bunday bemorlarda qaror faqat chuqur tekshiruvdan keyin qabul qilinadi.

### 2. Nazoratsiz qandli diabet

Qand miqdori yaxshi boshqarilmasa, yara bitishi sekinlashadi va infeksiya xavfi ortadi. Avval glyukoza nazoratga olinadi, keyin soch ekish masalasi qayta ko'rib chiqilishi mumkin.

### 3. O'tkir infeksiyalar

Gripp, O'RVI, isitma, bakterial infeksiya yoki o'tkir umumiy kasallik fonida muolajani o'tkazish to'g'ri emas. Operatsiya to'liq sog'aygandan keyin rejalashtiriladi.

### 4. Bosh terisidagi faol yallig'lanish

Agar bosh terisida kuchli seboreyali dermatit, zamburug'li zararlanish, yiringchalar yoki faol yallig'lanish bo'lsa, avval shu holat davolanadi. Yallig'langan teriga ekilgan follikulalar kutilgan natijani bermasligi mumkin.

### 5. Ayrim autoimmun alopetsiya turlari

Faol o'choqli alopetsiyada kasallik jarayoni ekilgan follikulalarga ham ta'sir qilishi mumkin. Shu sababli bunday holatlarda avval kasallikni nazorat qilish muhim.

### 6. Onkologik kasalliklarning faol bosqichi

Saraton kasalligi faol davolanish bosqichida bo'lsa, soch ekish odatda tavsiya etilmaydi. Qaror onkolog va davolovchi shifokor bilan birga qabul qilinadi.

### 7. Operatsiyaga nisbatan noto'g'ri kutishlar

Ba'zan muammo texnik emas, psixologik bo'ladi. Agar bemor natijani noto'g'ri tasavvur qilsa yoki shifokor bilan to'liq hamkorlik qila olmasa, avval qo'shimcha tushuntirish va zarur bo'lsa profil mutaxassis konsultatsiyasi kerak bo'ladi.

## Qachon operatsiyani keyinga qoldirish kerak?

Ba'zi holatlarda soch ekish mumkin, ammo eng to'g'ri yo'l uni vaqtincha kechiktirish bo'ladi.

Bunday vaziyatlarga quyidagilar kiradi:

- homiladorlik va emizish davri;
- yaqinda o'tkazilgan operatsiyalar;
- qon ivishiga ta'sir qiluvchi ayrim dorilarni qabul qilish;
- kuchli stress;
- kasallik yoki tug'ruqdan keyingi vaqtinchalik soch to'kilishi;
- nazoratsiz arterial bosim.

Bu holatlarda shifokor xavflarni kamaytirib, muolaja uchun xavfsizroq vaqtni tanlaydi.

## Avval davolanishi kerak bo'lgan holatlar

Har bir soch to'kilishi darrov soch ekishni anglatmaydi. Ba'zan asosiy sabab bartaraf etilsa, vaziyat sezilarli yaxshilanadi.

Ko'pincha tekshirish kerak bo'ladigan sabablar:

- temir tanqisligi;
- qalqonsimon bez kasalliklari;
- D vitamini, B12 va boshqa mikroelementlar yetishmovchiligi;
- gormonal o'zgarishlar;
- bosh terisining surunkali yallig'lanish kasalliklari.

Shu sababli soch ekishdan oldin faqat "jarrohlik qilish mumkinmi?" degan savol emas, balki "nega soch to'kilyapti?" degan savolga ham aniq javob topish kerak.

## Kimlarda natija yaxshiroq bo'ladi?

Odatda eng yaxshi natijalar quyidagi bemorlarda kuzatiladi:

- androgenetik alopetsiyada;
- donor zonasi yetarli bo'lsa;
- soch to'kilishi nisbatan barqaror bosqichda bo'lsa;
- bemorning kutishlari real bo'lsa.

Ya'ni soch ekish har doim ham "qanchalik ko'p xohlash" masalasi emas — biologik imkoniyat va tibbiy ko'rsatmaga ham bog'liq.

## Soch ekishdan oldin qaysi tekshiruvlar kerak bo'ladi?

Shifokor odatda quyidagilarni tavsiya qiladi:

- umumiy qon tahlili;
- koagulogramma;
- biokimyoviy qon tahlili;
- glyukoza darajasi;
- zarurat bo'lsa virusli infeksiyalar bo'yicha tekshiruvlar;
- dermatolog-trixolog konsultatsiyasi.

Ba'zi bemorlarda qo'shimcha laborator va instrumental tekshiruvlar ham kerak bo'lishi mumkin.

## Nega trixolog konsultatsiyasi shart?

Soch to'kilishining har bir turi transplantatsiyani talab qilmaydi. Ayrim hollarda dori bilan davolash, tanqisliklarni to'g'rilash, PRP, mezoterapiya yoki boshqa zamonaviy usullar birinchi bosqich sifatida to'g'riroq bo'ladi.

Shuning uchun soch ekish haqida o'ylayotgan har bir bemor avvalo soch to'kilishining asl sababini aniqlashi kerak. To'g'ri tashxis bo'lmasa, operatsiyadan keyingi natija ham uzoq muddatli bo'lmasligi mumkin.

## Radeski Skin Clinic'da yondashuv

Radeski Skin Clinic'da har bir bemor bilan individual ishlanadi. Shifokor bosh terisi holatini, donor zonani, soch to'kilishi turini va umumiy sog'liqni baholaydi. Maqsad shunchaki operatsiya qilish emas, balki bemor uchun haqiqatan foydali va uzoq muddatli yechimni tanlashdir.

Agar sizni soch to'kilishi bezovta qilsa yoki soch ekish sizga mos keladimi-yo'qmi degan savol bo'lsa, avval to'liq konsultatsiyadan o'tish eng to'g'ri qadam bo'ladi.`;
}

function ruBody(): string {
  return `## Что такое пересадка волос и когда она помогает?

Пересадка волос — это микрохирургическая процедура, при которой здоровые фолликулы из донорской зоны переносятся в участки поредения или облысения. Наиболее часто метод применяется при андрогенетической алопеции, но в отдельных случаях может рассматриваться и при других формах выпадения волос.

Современные технологии позволяют добиться естественного результата, однако успех зависит не только от техники, но и от правильного отбора пациентов. Поэтому перед процедурой важно оценить причину выпадения, состояние донорской зоны и общее здоровье пациента.

## Когда пересадку волос делать нельзя?

Есть состояния, при которых операция обычно не проводится или требует очень осторожного подхода.

### 1. Нарушения свертываемости крови

Заболевания, сопровождающиеся риском кровотечений, повышают вероятность осложнений во время и после операции. Решение принимается только после тщательной оценки рисков.

### 2. Неконтролируемый сахарный диабет

Если уровень глюкозы плохо контролируется, ткани заживают медленнее, а риск инфекций возрастает. Сначала нужно стабилизировать диабет, и только потом возвращаться к вопросу пересадки.

### 3. Острые инфекционные заболевания

Грипп, ОРВИ, высокая температура, бактериальные инфекции и другие острые состояния — повод перенести процедуру до полного выздоровления.

### 4. Активное воспаление кожи головы

Выраженный себорейный дерматит, грибковая инфекция, гнойничковые высыпания и другие воспалительные процессы требуют лечения до операции. На воспаленной коже результат пересадки может быть хуже ожидаемого.

### 5. Некоторые аутоиммунные формы алопеции

При активной очаговой алопеции заболевание может затронуть и пересаженные фолликулы. Поэтому сначала важно добиться контроля над основным процессом.

### 6. Онкологические заболевания в активной стадии

Во время активного лечения онкологических заболеваний пересадка волос обычно не рекомендуется. Решение принимается совместно с лечащим врачом и онкологом.

### 7. Нереалистичные ожидания от операции

Иногда основной риск связан не с техникой, а с ожиданиями пациента. Если человек неправильно представляет возможный результат или не готов к сотрудничеству с врачом, сначала требуется дополнительная консультация и разъяснение.

## Когда процедуру лучше отложить?

Иногда пересадка волос возможна, но проводить ее прямо сейчас не стоит.

К таким ситуациям относятся:

- беременность и грудное вскармливание;
- недавно перенесенные операции;
- прием препаратов, влияющих на свертываемость крови;
- выраженный стресс;
- временное выпадение волос после болезни или родов;
- повышенное артериальное давление без контроля лечения.

В таких случаях врач помогает выбрать более безопасный момент для процедуры.

## Какие состояния нужно сначала пролечить?

Не каждое выпадение волос означает необходимость операции. Иногда после устранения причины ситуация заметно улучшается.

Часто до пересадки важно проверить и скорректировать:

- дефицит железа;
- заболевания щитовидной железы;
- дефицит витамина D, B12 и других микроэлементов;
- гормональные нарушения;
- хронические воспалительные заболевания кожи головы.

Поэтому перед пересадкой важно ответить не только на вопрос "можно ли делать операцию?", но и на вопрос "почему выпадают волосы?".

## Кому пересадка подходит лучше всего?

Наиболее хорошие результаты обычно получают пациенты:

- с андрогенетической алопецией;
- с достаточным объемом волос в донорской зоне;
- со стабильным процессом выпадения;
- с реалистичными ожиданиями.

То есть пересадка волос — это не только желание пациента, но и медицинские показания, и биологические возможности.

## Какие обследования нужны перед пересадкой?

Перед процедурой врач обычно рекомендует:

- общий анализ крови;
- коагулограмму;
- биохимический анализ крови;
- анализ уровня глюкозы;
- исследования на вирусные инфекции по показаниям;
- консультацию дерматолога-трихолога.

При необходимости могут понадобиться дополнительные обследования.

## Почему консультация трихолога обязательна?

Не каждое выпадение волос требует пересадки. В ряде случаев первым этапом правильнее будут медикаментозное лечение, коррекция дефицитов, PRP, мезотерапия или другие современные методы.

Именно поэтому перед операцией важно понять истинную причину облысения. Без точной диагностики даже технически успешная пересадка не всегда дает устойчивый результат в долгосрочной перспективе.

## Подход в Radeski Skin Clinic

В Radeski Skin Clinic к каждому пациенту подходят индивидуально. Врач оценивает состояние кожи головы, донорскую зону, тип выпадения волос и общее здоровье. Наша цель — не просто выполнить процедуру, а подобрать действительно разумную и долговременную тактику лечения.

Если вас беспокоит выпадение волос и вы хотите понять, подходит ли вам пересадка волос, первым шагом должна стать полноценная консультация с диагностикой.`;
}

function enBody(): string {
  return `## What is hair transplantation and when does it help?

Hair transplantation is a microsurgical procedure in which healthy follicles are moved from a donor area to zones of thinning or baldness. It is most commonly used for androgenetic alopecia, but in selected cases it may also be considered for other patterns of hair loss.

Modern techniques can deliver natural-looking results, but success depends not only on surgical skill. Proper patient selection is just as important. That is why the cause of hair loss, the quality of the donor area, and the patient’s general health must be assessed first.

## When should hair transplantation not be performed?

Some conditions make the procedure inappropriate or require extreme caution.

### 1. Blood clotting disorders

Conditions associated with an increased bleeding risk raise the chance of complications during and after surgery. Careful medical evaluation is required before any decision is made.

### 2. Uncontrolled diabetes

Poor glucose control slows healing and increases the risk of infection. Diabetes should be stabilized before hair transplantation is reconsidered.

### 3. Acute infections

Flu, viral illness, fever, bacterial infections, and other acute conditions are reasons to postpone the procedure until full recovery.

### 4. Active inflammatory scalp disease

Severe seborrheic dermatitis, fungal infection, pustules, or other active inflammation should be treated first. Transplanted follicles may not perform well in an unstable scalp environment.

### 5. Some autoimmune forms of hair loss

In active alopecia areata, the disease process may also affect transplanted follicles. In such cases, control of the underlying condition comes first.

### 6. Active cancer treatment

Hair transplantation is generally not recommended during active cancer treatment. Decisions should be made together with the treating physician.

### 7. Unrealistic expectations

Sometimes the problem is not technical but psychological. If expectations are unrealistic or the patient is unable to cooperate with the treatment plan, further counselling is needed before proceeding.

## When is it better to postpone the procedure?

In some situations hair transplantation may still be possible, but the timing is not right.

Examples include:

- pregnancy and breastfeeding;
- recent surgery;
- medications that affect blood clotting;
- severe stress;
- temporary shedding after illness or childbirth;
- poorly controlled high blood pressure.

In these cases, the doctor helps choose a safer and more appropriate time.

## What should be treated first?

Not every case of hair loss means surgery is needed. In many patients, correcting the underlying cause can noticeably improve the situation.

Common issues that may need attention before transplantation include:

- iron deficiency;
- thyroid disease;
- low vitamin D, vitamin B12, or other micronutrients;
- hormonal imbalance;
- chronic inflammatory scalp disease.

So before asking whether transplantation can be done, it is equally important to ask why the hair loss developed in the first place.

## Who tends to get the best results?

The strongest outcomes are usually seen in patients:

- with androgenetic alopecia;
- with sufficient donor hair;
- with a relatively stable pattern of loss;
- with realistic expectations.

Hair transplantation is therefore not only about desire, but also about medical indication and biological suitability.

## What tests are usually needed beforehand?

Before surgery, a doctor commonly recommends:

- a complete blood count;
- a coagulation profile;
- blood biochemistry;
- glucose testing;
- viral infection screening when indicated;
- consultation with a dermatologist-trichologist.

Additional tests may be required depending on the patient’s history.

## Why is trichologist consultation essential?

Not every type of hair loss should be treated with transplantation. In some patients, the better first step is medication, correction of deficiencies, PRP, mesotherapy, or other modern options.

That is why the first priority is to identify the true cause of hair loss. Without a clear diagnosis, even technically successful transplantation may not provide a durable long-term result.

## Approach at Radeski Skin Clinic

At Radeski Skin Clinic, every patient is evaluated individually. The doctor reviews scalp condition, donor area quality, the type of hair loss, and overall health status. Our goal is not simply to perform a procedure, but to choose the most sensible and long-lasting treatment strategy for each person.

If hair loss worries you and you want to know whether transplantation is right for you, the correct first step is a full consultation with proper diagnostic assessment.`;
}

export const HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Soch ekishni qachon qilish mumkin emas: Farg‘ona va Qo‘qonda transplantatsiyadan oldin nimalarni tekshirish lozimligi haqida Radeski Skin Clinic qo‘llanmasi.",
    body: uzBody(),
    keyTakeaways: [
      "Har bir soch to'kilishi darrov soch ekish degani emas",
      "Qon ivishi, nazoratsiz diabet, infeksiya va faol yallig'lanish muhim qarshi ko'rsatmalar hisoblanadi",
      "Ba'zi holatlarda operatsiya mumkin, lekin uni vaqtincha kechiktirish to'g'ri bo'ladi",
      "Trixolog konsultatsiyasi va sababni aniqlash muvaffaqiyatli natijaning asosi",
    ],
    tags: ['Soch ekish', 'Trixologiya', 'Alopetsiya', 'Qarshi ko\'rsatmalar', 'Fargona', 'Qoqon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Soch to'kilishi tez kuchaysa",
      "Donor zona siyrak bo'lib qolgan bo'lsa",
      "Bosh terisida yallig'lanish, qichishish yoki qizarish bo'lsa",
      "Operatsiya haqida o'ylayotgan bo'lsangiz, lekin sabab aniq bo'lmasa",
      "Vaqtinchalik to'kilishmi yoki doimiy alopetsiyami bilmoqchi bo'lsangiz",
    ],
    faq: [
      {
        question: "Har bir kal joyga soch ekish mumkinmi?",
        answer:
          "Yo'q. Natija donor zona sifati, soch to'kilishi turi va umumiy sog'liq holatiga bog'liq. Avval trixolog bahosi kerak bo'ladi.",
      },
      {
        question: "Qandli diabet bo'lsa, soch ekish mumkinmi?",
        answer:
          "Agar diabet yaxshi nazorat qilinsa, ba'zi holatlarda muolaja ko'rib chiqilishi mumkin. Nazoratsiz diabetda esa xavf yuqori bo'ladi.",
      },
      {
        question: "O'choqli alopetsiyada transplantatsiya yordam beradimi?",
        answer:
          "Faol o'choqli alopetsiyada odatda avval kasallikni nazorat qilish kerak, chunki jarayon ekilgan follikulalarga ham ta'sir qilishi mumkin.",
      },
      {
        question: "Soch ekishdan oldin qanday tahlillar topshiriladi?",
        answer:
          "Ko'pincha umumiy qon tahlili, koagulogramma, biokimyo, glyukoza va kerak bo'lsa qo'shimcha laborator tekshiruvlar tavsiya etiladi.",
      },
    ],
  },
  ru: {
    summary:
      'Когда пересадка волос противопоказана: что проверить перед операцией в Фергане и Коканде — практическое руководство Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Не каждое выпадение волос означает необходимость пересадки',
      'Нарушения свертываемости, неконтролируемый диабет, инфекции и активное воспаление кожи головы — важные противопоказания',
      'Иногда операцию можно провести позже, когда состояние станет стабильным',
      'Консультация трихолога и поиск причины выпадения — основа хорошего результата',
    ],
    tags: ['Пересадка волос', 'Трихология', 'Алопеция', 'Противопоказания', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Выпадение волос быстро усиливается',
      'Донорская зона выглядит слабой или редкой',
      'Есть воспаление, зуд или покраснение кожи головы',
      'Вы думаете о пересадке, но причина выпадения неясна',
      'Нужно отличить временное выпадение от устойчивой алопеции',
    ],
    faq: [
      {
        question: 'Можно ли пересадить волосы при любом облысении?',
        answer:
          'Нет. Всё зависит от типа выпадения, качества донорской зоны и общего состояния здоровья. Сначала нужна очная оценка специалиста.',
      },
      {
        question: 'Можно ли делать пересадку при диабете?',
        answer:
          'При хорошо контролируемом диабете процедура иногда возможна, но при нестабильном сахаре риски значительно выше.',
      },
      {
        question: 'Помогает ли пересадка при очаговой алопеции?',
        answer:
          'При активной очаговой алопеции сначала важно добиться контроля заболевания, потому что процесс может затронуть и пересаженные фолликулы.',
      },
      {
        question: 'Какие анализы обычно нужны перед операцией?',
        answer:
          'Обычно назначают общий анализ крови, коагулограмму, биохимию, глюкозу и при необходимости дополнительные обследования.',
      },
    ],
  },
  en: {
    summary:
      'When hair transplantation is contraindicated: what to check before surgery in Fergana and Kokand — a practical Radeski Skin Clinic guide.',
    body: enBody(),
    keyTakeaways: [
      'Not every kind of hair loss should be treated with transplantation',
      'Clotting disorders, uncontrolled diabetes, acute infections, and active scalp inflammation are major concerns',
      'Some patients may still be candidates, but only after the condition is stabilized',
      'Trichologist evaluation and diagnosis of the underlying cause are central to long-term success',
    ],
    tags: ['Hair transplant', 'Trichology', 'Alopecia', 'Contraindications', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Hair shedding is progressing quickly',
      'The donor area seems weak or sparse',
      'There is scalp inflammation, redness, or itching',
      'You are considering transplantation but the cause is unclear',
      'You need to distinguish temporary shedding from lasting alopecia',
    ],
    faq: [
      {
        question: 'Can hair be transplanted in every type of baldness?',
        answer:
          'No. Suitability depends on the pattern of hair loss, donor reserve, and overall health. Specialist assessment comes first.',
      },
      {
        question: 'Is transplantation possible with diabetes?',
        answer:
          'It may be considered when diabetes is well controlled. Poor control significantly increases healing and infection risks.',
      },
      {
        question: 'Does transplantation work in alopecia areata?',
        answer:
          'In active alopecia areata, disease control usually comes first because the process may also affect transplanted follicles.',
      },
      {
        question: 'Which tests are commonly required before surgery?',
        answer:
          'Common tests include a complete blood count, coagulation profile, biochemistry, glucose testing, and additional workup when indicated.',
      },
    ],
  },
};

export const HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE: Article = {
  id: 'art-hair-transplant-contraindications',
  slug: 'soch-ekish-mumkin-bolmagan-holatlar',
  title: {
    uz: "Soch ekishni qachon qilish mumkin emas? Har bir bemor bilishi kerak bo'lgan qarshi ko'rsatmalar",
    ru: 'Когда нельзя делать пересадку волос? Противопоказания, о которых должен знать каждый',
    en: 'When Should Hair Transplantation Be Avoided? Contraindications Every Patient Should Know',
  },
  summary: {
    uz: HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG.uz.summary,
    ru: HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG.ru.summary,
    en: HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-07-28',
  image: null,
  images: {
    uz: null,
    ru: null,
    en: null,
  },
  views: 0,
};
