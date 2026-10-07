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

const COVER = '/articles/alopecia-areata-klinik-oldin.jpeg';
const IMG1 = '/articles/alopecia-areata-klinik-oldin.jpeg';
const IMG2 = '/articles/alopecia-areata-trixoskopiya-oldin.jpeg';
const IMG3 = '/articles/alopecia-areata-davolash-keyin.jpeg';

function uzBody(): string {
  return `## Annotatsiya

Soch to'kilishi bemorlar orasida keng uchraydigan dermatologik muammolardan biri bo'lib, bemorlar ko'pincha muammoni noto'g'ri ravishda shampun yoki boshqa kosmetik vositalar bilan bog'laydilar. Ushbu maqolada **o'choqli alopetsiya** tashxisi qo'yilgan bemorning klinik holati misolida diagnostik yondashuv, trixoskopik tekshiruv, davolash taktikasini tanlash va davolash natijalari yoritiladi.

**Muallif:** Turg'unov Shohruz Ilxomjon o'g'li · **Mutaxassislik:** dermatovenerolog-trixolog · **Klinika:** Radeski Skin Clinic, Qo'qon filiali

![Davolashdan oldingi klinik ko'rinish — o'choqli alopetsiya](/articles/alopecia-areata-klinik-oldin.jpeg)

## Kirish: o'choqli alopetsiya nima?

O'choqli alopetsiya (alopecia areata) — soch follikulalarining **immunologik mexanizmlar** bilan zararlanishi natijasida rivojlanadigan, odatda **chandiqsiz** soch to'kilishi bilan kechuvchi kasallikdir. Kasallik bosh terisida bitta yoki bir nechta aniq chegaralangan sochsiz o'choqlar paydo bo'lishi bilan namoyon bo'lishi mumkin.

Tashxis klinik ko'rik va trixoskopik belgilar asosida qo'yiladi. Trixoskopiya tashxisni qo'llab-quvvatlash va davolash jarayonidagi o'zgarishlarni kuzatishda muhim ahamiyatga ega.

## Klinik holat

25 yoshli erkak bemor bosh terisida to'satdan boshlangan soch to'kilishi shikoyati bilan Radeski Skin Clinic, **Qo'qon filialiga** murojaat qildi.

## Anamnez: nima uchun shampun yordam bermadi?

Anamnez ma'lumotlariga ko'ra, bemorda soch to'kilishi murojaatdan taxminan **2 oy oldin** boshlangan. Dastlab boshning ensa sohasida kichik, yumaloq shakldagi sochsiz o'choq paydo bo'lgan. Keyingi haftalar davomida o'choq asta-sekin kattalashgan.

Bemor soch to'kilishini dastlab qo'llayotgan **shampuni bilan bog'lagan** va uy sharoitida turli xil shampunlarni almashtirib ko'rgan. Biroq shampunlarni almashtirishga qaramay, soch to'kilishi davom etgan.

Bemor o'choq sohasida qichishish, og'riq yoki achishish kabi subyektiv belgilar kuzatilmaganini bildirgan.

Anamnez yig'ish jarayonida bemorda so'nggi oylar davomida **kuchli psixoemotsional zo'riqish** kuzatilgani aniqlandi. Oilaviy anamnezida o'choqli alopetsiya bilan kasallanish holatlari qayd etilmagan.

## Klinik ko'rik va trixoskopiya

Dermatologik ko'rikda bosh terisining ensa-parietal sohasida taxminan **5 × 6 sm** o'lchamdagi, aniq chegaralangan, yumaloq shaklli, chandiqsiz alopetsiya o'chog'i aniqlandi. O'choq yuzasida yaqqol yallig'lanish, infiltratsiya yoki atrofiya kuzatilmadi.

Trixoskopik tekshiruvda alopetsiya o'chog'i sohasida quyidagilar aniqlandi:

- sochlarning zichligi kamaygani;
- ayrim follikulyar teshikchalarning bo'shligi;
- **sariq nuqtalar** (yellow dots);
- **qora nuqtalar** (black dots);
- **singan sochlar** (broken hairs);
- proksimal qismi ingichkalashgan, distal qismi nisbatan qalinroq ko'rinadigan **konussimon sochlar** (tapering hairs);
- ayrim follikulyar birliklarda qisqa, ingichka vellus tipidagi sochlar.

Aniqlangan trixoskopik belgilar klinik ko'rinish bilan birgalikda o'choqli alopetsiyaga xos bo'lib, tashxisni qo'llab-quvvatladi.

### 1-rasm. Davolashdan oldingi klinik ko'rinish

![Davolashdan oldingi klinik ko'rinish: bosh terisining ensa-parietal sohasida aniq chegaralangan chandiqsiz alopetsiya o'chog'i](${IMG1})

*Bosh terisining ensa-parietal sohasida aniq chegaralangan chandiqsiz alopetsiya o'chog'i.*

### 2-rasm. Davolashdan oldingi trixoskopik ko'rinish

![Davolashdan oldingi trixoskopiya: sariq nuqtalar, qora nuqtalar, singan va tapering tipidagi sochlar](${IMG2})

*O'choq sohasida sariq nuqtalar, qora nuqtalar, singan va tapering tipidagi sochlar hamda qisqa vellus sochlarning mavjudligi.*

## Qo'llab-quvvatlovchi laborator tekshiruvlar

Klinik ko'rik va trixoskopik tekshiruv natijalariga asoslanib, bemorga **o'choqli alopetsiya (alopecia areata)** tashxisi qo'yildi. Kasallikning autoimmun xususiyatini hamda o'choqli alopetsiya bilan assotsiatsiyalanishi mumkin bo'lgan autoimmun va metabolik holatlarni baholash maqsadida qo'shimcha laborator tekshiruvlar tavsiya qilindi.

Bemorda quyidagilar o'tkazildi:

- umumiy qon tahlili;
- ferritin;
- TSH, erkin T4 (fT4);
- anti-TPO, anti-TG;
- ANA;
- 25-OH vitamin D;
- jigar va buyrak faoliyatini baholovchi biokimyoviy ko'rsatkichlar (klinik zarurat bo'yicha).

Ushbu tekshiruvlar o'choqli alopetsiyaning o'ziga xos laborator biomarkerini aniqlash uchun emas, balki bemorda kasallik bilan birga kechishi mumkin bo'lgan **qalqonsimon bez autoimmun kasalliklari** va boshqa autoimmun holatlarni aniqlash yoki istisno qilish, shuningdek, davolash taktikasini individual belgilash maqsadida amalga oshirildi.

## Davolash taktikasini tanlash

Bemorning klinik va trixoskopik tekshiruv natijalari, alopetsiya o'choqlarining soni va o'lchami, kasallikning davomiyligi, yangi o'choqlarning paydo bo'lishi hamda trixoskopik faollik belgilari hisobga olinib, **individual davolash rejasi** ishlab chiqildi.

### Mahalliy (lokal) davolash

1. **Intralezional triamtsinolon asetonid** — alopetsiya o'choqlari va ularning chetlari bo'ylab intradermal tarzda yuborildi. Cheklangan o'choqli alopetsiyada bu kattalarda birinchi qator davolash usullaridan biri; bemorga har **4–6 haftada** muolaja tavsiya etildi.

2. **Topikal glyukokortikosteroid maz** — dastlabki bosqichda 20 kun qo'llandi (yallig'lanish va mahalliy immunologik faollikni kamaytirish).

3. **Kalsinevrin ingibitori** — 20 kunlik GKS terapiyasidan keyin GKS yuklamasini kamaytirish va immunomodulyator ta'sirni davom ettirish uchun almashtirildi.

4. **Minoksidil** — yordamchi terapiya sifatida: anagen fazasini qo'llab-quvvatlash, qayta o'sayotgan sochlarning zichligi va diametrini oshirish. Bu o'choqli alopetsiyaning asosiy immunologik mexanizmini bartaraf etuvchi dori emas.

### Tizimli va qo'shimcha davolash

- **Metotreksat** — bir nechta o'choqlar va faol kechish sababli tizimli immunomodulyator sifatida ko'rib chiqildi; klinik holat va laborator ko'rsatkichlar muntazam nazorat qilindi.
- **Sink (50 mg) va vitamin D** — laborator tekshiruvlarda aniqlangan yetishmovchiliklarni korreksiya qilish uchun (asosiy davolashni almashtirmaydi).
- **PRP (platelet-rich plasma)** — o'sish omillari orqali follikul faoliyatini qo'llab-quvvatlash.
- **Xelayt apparati** — yordamchi fizioterapevtik usul sifatida.

Bemorga o'choqli alopetsiya **immunologik mexanizmga ega kasallik** ekanligi tushuntirildi: kosmetik vositalarni o'zgartirish kasallikning asosiy patogenetik mexanizmiga ta'sir qilmaydi. Shampunlar bosh terisi gigiyenasida yordamchi bo'lishi mumkin, lekin **asosiy davolash usuli emas**.

## Davolash dinamikasi: 6 oylik kuzatuv

Davolash samaradorligi klinik ko'rik va takroriy trixoskopik tekshiruvlar orqali dinamik baholandi. Alopetsiya o'choqlarining o'lchami, yangi sochlarning paydo bo'lishi, soch zichligi va trixoskopik faollik belgilaridagi o'zgarishlar dastlabki ko'rsatkichlar bilan taqqoslandi.

**6 oylik kuzatuv yakunida** alopetsiya o'choqlarida soch qayta o'sishining yaqqol ijobiy dinamikasi kuzatildi:

- o'choqlar sohasining sochlar bilan qoplanishi sezilarli darajada yaxshilandi;
- trixoskopiyada yangi o'sayotgan sochlar soni ortdi, soch zichligi yaxshilandi;
- dastlab aniqlangan faol trixoskopik belgilar intensivligi kamaydi.

### 3-rasm. Davolashdan keyingi natija

![6 oylik davolashdan keyin — o'choq sohasida soch qayta o'sishi](${IMG3})

*6 oylik kompleks davolash va dinamik kuzatuv natijasida o'choq sohasida soch qayta o'sishi.*

## Xulosa

Mazkur klinik holat o'choqli alopetsiyada **to'g'ri va o'z vaqtida tashxis** qo'yish hamda davolash taktikasini individual tanlash muhimligini ko'rsatadi. Klinik ko'rik bilan bir qatorda trixoskopik tekshiruv o'choqli alopetsiyaga xos belgilarni aniqlash, tashxisni qo'llab-quvvatlash va davolash jarayonidagi dinamikani obyektiv baholash imkonini berdi.

Ushbu klinik holat soch to'kilishini faqat kosmetik muammo sifatida baholamaslik, turli shampunlarni almashtirish bilan cheklanib qolmaslik va soch to'kilishining sababini aniqlash uchun **dermatolog yoki trixologga o'z vaqtida murojaat qilish** zarurligini ko'rsatadi.

## Radeski Skin Clinic'da keyingi qadam

1. **Trixolog konsultatsiyasi** — soch to'kilishi sababini aniqlash.
2. **Trixoskopiya** — follikula holati va kasallik belgilarini baholash.
3. **Individual davolash rejasi** — klinik holatga mos kompleks yondashuv.
4. **Dinamik kuzatuv** — klinik va trixoskopik nazorat.

Qo'shimcha ma'lumot: [Trixolog va trixoskopiya](/uz/articles/art-trixolog-trixoskopiya) va [PRP soch uchun](/uz/articles/art-plazmotorapiya-soch-prp).

## Foydalanilgan ilmiy adabiyotlar

1. Al-Dhubaibi MS, et al. Trichoscopy pattern in alopecia areata: A systematic review and meta-analysis. *Skin Research and Technology*. 2023;29(6):e13378.
2. Darwin E, et al. Alopecia Areata: Review of Epidemiology, Clinical Features, Pathogenesis, and New Treatment Options. *International Journal of Trichology*. 2018;10(2):51–60.
3. Harries MJ, et al. British Association of Dermatologists living guideline for managing people with alopecia areata 2025. *British Journal of Dermatology*. 2026;194(2):e56–e73.`;
}

function ruBody(): string {
  return `## Аннотация

Выпадение волос — одна из самых частых жалоб в дерматологии. Многие пациенты ошибочно связывают проблему со **шампунем** или другой косметикой. В этой статье на примере реального клинического случая **очаговой алопеции** описаны диагностический подход, **трихоскопия**, выбор тактики лечения и результаты наблюдения.

**Автор:** Тургунов Шохруз Илхомжон угли · **Специальность:** дерматовенеролог-трихолог · **Клиника:** Radeski Skin Clinic, филиал в Коканде

![Клинический вид до лечения — очаговая алопеция](/articles/alopecia-areata-klinik-oldin.jpeg)

## Введение: что такое очаговая алопеция?

Очаговая алопеция (alopecia areata) — заболевание, при котором из‑за **иммунологического повреждения** волосяных фолликулов на коже головы появляются **безрубцовые** участки выпадения волос. Может быть один или несколько чётко очерченных «лысых» очагов.

Диагноз ставится на основании клинического осмотра и трихоскопии. Трихоскопия помогает подтвердить диагноз и объективно оценивать динамику лечения.

## Клинический случай

К Radeski Skin Clinic, **филиал в Коканде**, обратился 25‑летний мужчина с жалобой на **внезапное выпадение волос** на голове.

## Анамнез: почему смена шампуня не помогла

По словам пациента, выпадение началось примерно **за 2 месяца** до визита. Сначала в затылочной области появился небольшой круглый участок без волос, который постепенно увеличивался.

Пациент **связывал проблему с шампунем** и дома пробовал разные средства, но выпадение продолжалось.

Субъективных жалоб — зуд, боль, жжение — не было.

При сборе анамнеза выявлен **выраженный психоэмоциональный стресс** в последние месяцы. Семейный анамнез по очаговой алопеции отрицательный.

## Клинический осмотр и трихоскопия

При осмотре в затылочно‑теменной области определялся **безрубцовый очаг** размером около **5 × 6 см** с чёткими границами. Выраженного воспаления, инфильтрации или атрофии не было.

На трихоскопии в зоне алопеции отмечались:

- снижение плотности волос;
- пустые фолликулярные отверстия;
- **жёлтые точки** (yellow dots);
- **чёрные точки** (black dots);
- **обломанные волосы** (broken hairs);
- **сужающиеся к проксимальной части волосы** (tapering hairs);
- короткие vellus‑волосы.

Эти трихоскопические признаки типичны для очаговой алопеции и подтвердили диагноз.

### Рис. 1. Клинический вид до лечения

![Клинический вид до лечения: безрубцовый очаг очаговой алопеции в затылочно-теменной области](${IMG1})

*Чётко очерченный безрубцовый очаг в затылочно‑теменной области.*

### Рис. 2. Трихоскопия до лечения

![Трихоскопия до лечения: жёлтые и чёрные точки, обломанные и сужающиеся волосы](${IMG2})

*Жёлтые и чёрные точки, обломанные и tapering‑волосы, короткие vellus‑волосы.*

## Дополнительные лабораторные исследования

На основании клиники и трихоскопии поставлен диагноз **очаговая алопеция**. Для оценки возможных ассоциированных аутоиммунных и метаболических состояний назначены:

- общий анализ крови;
- ферритин;
- ТТГ, свободный Т4;
- anti‑TPO, anti‑TG;
- ANA;
- 25‑OH витамин D;
- биохимия печени и почек при необходимости.

Эти анализы не являются специфическим «маркером» очаговой алопеции, а помогают **исключить или выявить** сопутствующие состояния (например, аутоиммунные заболевания щитовидной железы) и скорректировать тактику лечения индивидуально.

## Выбор тактики лечения

С учётом клиники, трихоскопии, размеров и активности очагов составлен **индивидуальный план**.

### Местное лечение

1. **Инталезиональный триамcinolone acetonide** — в очаги и по периферии каждые **4–6 недель** (один из методов первой линии при ограниченной форме).
2. **Топический глюкокортикостероид** — 20 дней на начальном этапе.
3. **Ингибитор кальцineurina** — после курса ГКС для продолжения иммуномодулирующего эффекта и снижения нагрузки стероидами.
4. **Миноксидил** — как **вспомогательная** терапия для поддержки фазы роста; не устраняет основной иммунный механизм.

### Системная и дополнительная терапия

- **Метотрексат** — при нескольких активных очагах, под контролем клиники и анализов.
- **Цинк (50 мг) и витамин D** — при выявленных дефицитах.
- **PRP (обогащённая тромboцитами плазма)** — для стимуляции роста.
- **Аппарат Xelayt** — вспомогательная физиотерапия.

Пациенту объяснено, что смена шампуня **не влияет** на основной патогенез. Шампунь может лишь поддерживать гигиену кожи головы, но **не является лечением** очаговой алопеции.

## Динамика лечения: 6 месяцев наблюдения

Эффективность оценивалась клинически и трихоскопически. Сравнивались размер очагов, появление новых волос, плотность и активность трихоскопических признаков.

**Через 6 месяцев** отмечена выраженная положительная динамика:

- заметное увеличение покрытия очагов волосами;
- рост числа новых волос и улучшение плотности на трихоскопии;
- снижение активности трихоскопических маркеров.

### Рис. 3. Результат после лечения

![После 6 месяцев комплексного лечения — regrowth в зоне очага](${IMG3})

*Восстановление волос в зоне алопеции после 6 месяцев комплексного лечения и наблюдения.*

## Заключение

Этот случай показывает, насколько важны **своевременная диагностика**, трихоскопия и **индивидуальный** план лечения при очаговой алопеции. Нельзя сводить выпадение волос к «проблеме шампуня» — нужна консультация **дерматолога или трихолога**.

## Следующий шаг в Radeski Skin Clinic

1. Консультация трихолога.
2. Компьютерная трихоскопия.
3. Индивидуальный план лечения.
4. Динамическое наблюдение.

Дополнительно: [Трихолог и трихоскопия](/ru/articles/art-trixolog-trixoskopiya) и [PRP для волос](/ru/articles/art-plazmotorapiya-soch-prp).

## Литература

1. Al-Dhubaibi MS, et al. Trichoscopy pattern in alopecia areata. *Skin Research and Technology*. 2023.
2. Darwin E, et al. Alopecia Areata: Review and Treatment Options. *Int J Trichology*. 2018.
3. Harries MJ, et al. BAD living guideline for alopecia areata 2025. *Br J Dermatol*. 2026.`;
}

function enBody(): string {
  return `## Abstract

Hair loss is one of the most common dermatologic complaints. Many patients wrongly blame **shampoo** or cosmetics. This article presents a real **alopecia areata** case from Radeski Skin Clinic (Kokand): diagnostic work‑up, **trichoscopy**, treatment strategy, and six‑month follow‑up.

**Author:** Shohruz Ilkhomjon Turgunov · **Specialty:** dermatovenereologist-trichologist · **Clinic:** Radeski Skin Clinic, Kokand branch

![Clinical appearance before treatment — alopecia areata](/articles/alopecia-areata-klinik-oldin.jpeg)

## Introduction: what is alopecia areata?

Alopecia areata is an **immune‑mediated** condition that causes **non‑scarring**, well‑defined patches of hair loss on the scalp. One or several patches may appear.

Diagnosis relies on clinical examination and trichoscopy. Trichoscopy supports the diagnosis and allows objective monitoring during treatment.

## Clinical case

A **25‑year‑old man** presented to Radeski Skin Clinic, **Kokand branch**, with **sudden hair loss** on the scalp.

## History: why changing shampoo did not help

Hair loss began about **two months** before the visit. A small round bald patch appeared in the occipital area and gradually enlarged.

The patient **attributed the problem to shampoo** and tried several products at home without improvement.

There was no itch, pain, or burning in the patch.

Recent **significant emotional stress** was noted. No family history of alopecia areata.

## Examination and trichoscopy

A **non‑scarring patch** measuring approximately **5 × 6 cm** was seen in the occipito‑parietal area with sharp borders. No marked inflammation, infiltration, or atrophy.

Trichoscopy showed:

- reduced hair density;
- empty follicular openings;
- **yellow dots**;
- **black dots**;
- **broken hairs**;
- **tapering (pencil‑point) hairs**;
- short vellus hairs.

These findings are characteristic of alopecia areata and confirmed the diagnosis.

### Fig. 1. Clinical appearance before treatment

![Before treatment: well-defined non-scarring alopecia areata patch](${IMG1})

*Well‑defined non‑scarring patch in the occipito‑parietal area.*

### Fig. 2. Trichoscopy before treatment

![Trichoscopy before treatment: yellow dots, black dots, broken and tapering hairs](${IMG2})

*Yellow dots, black dots, broken and tapering hairs, and short vellus hairs.*

## Supportive laboratory tests

The diagnosis of **alopecia areata** was made clinically and trichoscopically. Additional tests were ordered to assess possible associated autoimmune/metabolic conditions:

- complete blood count;
- ferritin;
- TSH, free T4;
- anti‑TPO, anti‑TG;
- ANA;
- 25‑OH vitamin D;
- liver/kidney biochemistry when indicated.

These tests are not a specific biomarker for alopecia areata; they help **rule in or out** coexisting conditions (e.g., thyroid autoimmunity) and tailor treatment.

## Treatment strategy

An **individualized plan** was built from clinical and trichoscopic activity, patch size, and duration.

### Local therapy

1. **Intralesional triamcinolone acetonide** into patches and margins every **4–6 weeks** (first‑line for limited disease).
2. **Topical corticosteroid** for 20 days initially.
3. **Calcineurin inhibitor** after the steroid course to continue immunomodulation with less steroid burden.
4. **Minoxidil** as **adjunct** therapy to support the anagen phase—not a primary immunologic treatment.

### Systemic and adjunct care

- **Methotrexate** considered for multiple active patches, with clinical and lab monitoring.
- **Zinc (50 mg) and vitamin D** for documented deficiencies.
- **PRP (platelet‑rich plasma)** to support follicular recovery.
- **Xelayt device** as adjunct physiotherapy.

The patient was counseled that shampoo changes **do not treat** the underlying immune mechanism. Shampoo may support scalp hygiene but is **not primary therapy**.

## Treatment course: six‑month follow‑up

Response was tracked clinically and with repeat trichoscopy—patch size, new hair growth, density, and trichoscopic activity.

After **six months**, clear improvement was documented:

- marked regrowth covering the patches;
- increased new hairs and improved density on trichoscopy;
- reduced activity of trichoscopic markers.

### Fig. 3. Result after treatment

![After six months of combined therapy — hair regrowth in the patch](${IMG3})

*Hair regrowth in the alopecia patch after six months of combined treatment and follow‑up.*

## Conclusion

This case highlights timely diagnosis, trichoscopy, and **individualized** combined therapy in alopecia areata. Hair loss should not be dismissed as a “shampoo problem”—see a **dermatologist or trichologist** early.

## Next steps at Radeski Skin Clinic

1. Trichologist consultation.
2. Computer trichoscopy.
3. Personalized treatment plan.
4. Ongoing clinical and trichoscopic follow‑up.

Related: [Trichologist and trichoscopy](/en/articles/art-trixolog-trixoskopiya) and [PRP for hair](/en/articles/art-plazmotorapiya-soch-prp).

## References

1. Al-Dhubaibi MS, et al. Trichoscopy pattern in alopecia areata. *Skin Research and Technology*. 2023.
2. Darwin E, et al. Alopecia Areata: Review and Treatment Options. *Int J Trichology*. 2018.
3. Harries MJ, et al. BAD living guideline for alopecia areata 2025. *Br J Dermatol*. 2026.`;
}

export const ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Soch to'kilishini shampun bilan bog'lamang: o'choqli alopetsiya bo'yicha haqiqiy klinik holat — trixoskopiya, laborator tekshiruvlar, kompleks davolash va 6 oylik ijobiy natija. Turg'unov Shohruz Ilxomjon o'g'li, Radeski Skin Clinic Qo'qon.",
    body: uzBody(),
    keyTakeaways: [
      "Soch to'kilishi ko'pincha shampundan emas, kasallik sababidan kelib chiqadi",
      "O'choqli alopetsiyada trixoskopiya tashxis va kuzatuvda muhim",
      "Sariq/qora nuqtalar, singan va tapering sochlar — tipik belgilar",
      "Kompleks individual davolash 6 oyda ijobiy dinamika berishi mumkin",
      "Dermatolog yoki trixologga o'z vaqtida murojaat qiling",
    ],
    tags: [
      "Soch to'kilishi",
      "O'choqli alopetsiya",
      "Alopecia areata",
      'Trixoskopiya',
      'Trixolog',
      'PRP',
      "Qo'qon",
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      "Bosh terisida to'satdan sochsiz o'choq paydo bo'lsa",
      "Shampun almashtirish yordam bermasa",
      "Soch to'kilishi tez kuchaysa yoki bir nechta o'choq bo'lsa",
      "Stressdan keyin soch to'kilishi boshlansa",
      "Trixoskopik tekshiruv va individual reja kerak bo'lsa",
    ],
    faq: [
      {
        question: "Soch to'kilishi shampundan bo'ladimi?",
        answer:
          "Ba'zan bosh terisi gigiyenasi muhim, lekin o'choqli alopetsiya immunologik kasallik. Shampun almashtirish asosiy sababni bartaraf etmaydi — trixolog ko'rigini kechiktirmang.",
      },
      {
        question: 'Trixoskopiya nima uchun kerak?',
        answer:
          "Trixoskopiya o'choqli alopetsiyaga xos belgilarni (sariq nuqtalar, qora nuqtalar, singan sochlar) ko'rish va davolash dinamikasini obyektiv baholash imkonini beradi.",
      },
      {
        question: 'Qanday tahlillar topshiriladi?',
        answer:
          "Anamnez va klinik holatga qarab ferritin, TSH, vitamin D, autoimmun markerlar va boshqalar individual tanlanadi — kasallikning yon holatlarini istisno qilish uchun.",
      },
      {
        question: '6 oyda natija kutish mumkinmi?',
        answer:
          "Har bir holat individual. Ushbu bemorda kompleks davolash va muntazam kuzatuv 6 oyda sezilarli soch qayta o'sishini berdi; natija sabab va faollikka bog'liq.",
      },
    ],
  },
  ru: {
    summary:
      'Не сводите выпадение волос к шампуню: реальный случай очаговой алопеции — трихоскопия, анализы, комплексное лечение и положительный результат через 6 месяцев. Тургунов Ш., Radeski Skin Clinic Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'Выпадение волос редко решается сменой шампуня',
      'При очаговой алопеции трихоскопия важна для диагноза и контроля',
      'Жёлтые/чёрные точки, обломанные и сужающиеся волосы — типичные признаки',
      'Индивидуальная комплексная терапия может дать результат за 6 месяцев',
      'Обратитесь к дерматологу или трихологу своевременно',
    ],
    tags: [
      'Выпадение волос',
      'Очаговая алопеция',
      'Alopecia areata',
      'Трихоскопия',
      'Трихолог',
      'PRP',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Внезапно появился участок без волос',
      'Смена шампуня не помогла',
      'Выпадение усиливается или несколько очагов',
      'Выпадение началось после стресса',
      'Нужна трихоскопия и индивидуальный план',
    ],
    faq: [
      {
        question: 'Может ли выпадение быть из‑за шампуня?',
        answer:
          'Иногда важна гигиена кожи головы, но очаговая алопеция — иммунное заболевание. Смена шампуня не устраняет причину; не откладывайте визит к трихологу.',
      },
      {
        question: 'Зачем нужна трихоскопия?',
        answer:
          'Она позволяет увидеть характерные признаки (жёлтые/чёрные точки, обломанные волосы) и объективно оценивать динамику лечения.',
      },
      {
        question: 'Какие анализы сдают?',
        answer:
          'По показаниям — ферритин, ТТГ, витамин D, аутоиммунные маркеры и др., чтобы исключить сопутствующие состояния.',
      },
      {
        question: 'Можно ли ждать результат за 6 месяцев?',
        answer:
          'Каждый случай индивидуален. В этом пациенте комплексная терапия и наблюдение дали заметное regrowth за 6 месяцев; прогноз зависит от активности и причины.',
      },
    ],
  },
  en: {
    summary:
      'Hair loss is not just a shampoo issue: a real alopecia areata case with trichoscopy, labs, combined therapy, and positive six‑month outcome. Dr. Shohruz Turgunov, Radeski Skin Clinic Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Hair loss is rarely fixed by switching shampoo alone',
      'Trichoscopy is key for diagnosing and monitoring alopecia areata',
      'Yellow/black dots and broken/tapering hairs are typical signs',
      'Individual combined therapy can show improvement within six months',
      'See a dermatologist or trichologist early',
    ],
    tags: [
      'Hair loss',
      'Alopecia areata',
      'Trichoscopy',
      'Trichologist',
      'PRP',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'A sudden bald patch appears',
      'Changing shampoo does not help',
      'Shedding worsens or multiple patches develop',
      'Hair loss follows major stress',
      'You need trichoscopy and a personalized plan',
    ],
    faq: [
      {
        question: 'Can hair loss be caused by shampoo?',
        answer:
          'Scalp hygiene matters, but alopecia areata is immune‑mediated. Shampoo changes do not treat the cause—do not delay a trichologist visit.',
      },
      {
        question: 'Why is trichoscopy needed?',
        answer:
          'It reveals characteristic signs (yellow/black dots, broken hairs) and objectively tracks treatment response.',
      },
      {
        question: 'Which blood tests are ordered?',
        answer:
          'As indicated—ferritin, TSH, vitamin D, autoimmune markers, etc.—to rule out associated conditions.',
      },
      {
        question: 'Can results appear in six months?',
        answer:
          'Outcomes vary. In this patient, combined therapy and follow‑up produced noticeable regrowth in six months; prognosis depends on activity and cause.',
      },
    ],
  },
};

export const ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE: Article = {
  id: 'art-alopecia-areata-klinik-holat',
  slug: 'soch-tokilishi-diagnostika-shampun-yetarli-emas',
  title: {
    uz: "Soch to'kilishi: diagnostika qanday o'tkaziladi va nima uchun faqat shampun yetarli emas",
    ru: 'Выпадение волос: как проходит диагностика и почему одного шампуня недостаточно',
    en: 'Hair Loss: How Diagnosis Works and Why Shampoo Alone Is Not Enough',
  },
  summary: {
    uz: ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG.uz.summary,
    ru: ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG.ru.summary,
    en: ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    ru: 'Тургунов Шохруз Илхомжон угли',
    en: 'Dr. Shohruz Ilkhomjon Turgunov',
  },
  date: '2026-09-07',
  image: COVER,
  images: {
    uz: COVER,
    ru: COVER,
    en: COVER,
  },
  views: 0,
};
