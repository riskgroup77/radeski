/**
 * Yangi shifokorlar ma'lumotini API ga qo'shadi / mavjudini yangilaydi.
 * Nom (name_uz) bo'yicha moslashtiradi.
 *
 * Usage:
 *   set ADMIN_USERNAME=admin
 *   set ADMIN_PASSWORD=<admin parol>
 *   npx tsx scripts/seedDoctorsToApi.ts
 */
import 'dotenv/config';
import { adminLogin, createDoctor, getAdminDoctors, updateDoctor } from '../src/api/adminApi';
import type { DoctorCreatePayload } from '../src/api/types';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 400);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      const msg = error instanceof Error ? error.message : String(error);
      if (!/too many requests|429/i.test(msg) || attempt > 5) throw error;
      const wait = REQUEST_DELAY_MS * 2 ** attempt;
      console.warn(`Rate limited "${label}", retry ${attempt}/5 in ${wait}ms`);
      await sleep(wait);
    }
  }
}

const DOCTORS: DoctorCreatePayload[] = [
  {
    name_uz: 'Kamolova Barno',
    name_ru: 'Камолова Барно',
    name_en: 'Barno Kamolova',
    role_uz: "Shifokor-dermatokosmetolog, anatomiya o'qituvchisi",
    role_ru: 'Врач-дерматокосметолог, преподаватель анатомии',
    role_en: 'Dermatocosmetologist, Anatomy Lecturer',
    experience_uz: '3',
    experience_ru: '3',
    experience_en: '3',
    education_uz: 'Praga, Chexiya Respublikasi',
    education_ru: 'Прага, Чешская Республика',
    education_en: 'Prague, Czech Republic',
    bio_uz:
      "Shifokor-dermatokosmetolog va anatomiya o'qituvchisi. Dermatologiya va estetik tibbiyot sohasida 3 yillik amaliy tajribaga ega. Shuningdek, anatomiya fanidan 2 yildan buyon talabalarga dars berib kelmoqda. Xalqaro tajriba almashish va malaka oshirish maqsadida Dubay hamda Turkiyaning Istanbul va Izmir shaharlarida professional amaliyot va treninglarda qatnashgan. Radeski Skin Clinic klinikasida dermatokosmetolog sifatida faoliyat yuritadi. Hozirda dermatokosmetologiya amaliyoti bilan bir qatorda oliy ta'lim muassasasida anatomiya fanidan dars beradi. Ilmiy faoliyat bilan ham shug'ullanib, tibbiyot sohasiga oid bir nechta ilmiy maqolalar muallifi hisoblanadi. Zamonaviy, ilmiy asoslangan va individual yondashuvni o'z faoliyatining asosiy tamoyili deb biladi.",
    bio_ru:
      'Врач-дерматокосметолог и преподаватель анатомии. Имеет 3-летний практический опыт в области дерматологии и эстетической медицины. Более 2 лет преподаёт анатомию студентам. С целью обмена международным опытом и повышения квалификации проходила профессиональную практику и тренинги в Дубае, а также в Стамбуле и Измире (Турция). Работает дерматокосметологом в клинике Radeski Skin Clinic. В настоящее время наряду с практикой дерматокосметолога преподаёт анатомию в высшем учебном заведении. Занимается научной деятельностью, является автором нескольких научных статей по медицине. Основными принципами своей работы считает современный, научно обоснованный и индивидуальный подход.',
    bio_en:
      'Dermatocosmetologist and anatomy lecturer with 3 years of hands-on experience in dermatology and aesthetic medicine. She has also been teaching anatomy to students for over 2 years. To exchange international experience and advance her qualifications, she completed professional practice and training in Dubai as well as in Istanbul and Izmir (Turkey). She practices as a dermatocosmetologist at Radeski Skin Clinic and currently teaches anatomy at a higher education institution alongside her clinical work. Actively engaged in research, she is the author of several medical scientific papers. A modern, evidence-based and individualized approach is the core principle of her practice.',
    sort_order: 10,
    is_featured: false,
  },
  {
    name_uz: 'Usmanova Mohinabonu Anvarovna',
    name_ru: 'Усманова Мохинабону Анваровна',
    name_en: 'Mohinabonu Anvarovna Usmanova',
    role_uz: 'Dermatovenerolog · Dermatokosmetolog · Trixolog · Podolog',
    role_ru: 'Дерматовенеролог · Дерматокосметолог · Трихолог · Подолог',
    role_en: 'Dermatovenerologist · Dermatocosmetologist · Trichologist · Podiatrist',
    experience_uz: '3',
    experience_ru: '3',
    experience_en: '3',
    education_uz: "Farg'ona jamoat salomatligi tibbiyot instituti (FJSTI)",
    education_ru: 'Ферганский медицинский институт общественного здоровья (ФМИОЗ)',
    education_en: 'Fergana Medical Institute of Public Health',
    bio_uz:
      "Usmonova Mohinabonu — dermatovenerolog, dermatokosmetolog, trixolog va podolog. 3+ yillik amaliy tajribaga ega. Teri, soch, tirnoq va oyoq terisi kasalliklarini diagnostika qilish, davolash va korreksiya qilish bilan shug'ullanadi. Radeski Skin Clinic da individual yondashuv va zamonaviy davolash protokollari asosida qabul qiladi.",
    bio_ru:
      'Усманова Мохинабону — дерматовенеролог, дерматокосметолог, трихолог и подолог с более чем 3-летним практическим опытом. Занимается диагностикой, лечением и коррекцией заболеваний кожи, волос, ногтей и стоп. Принимает пациентов в Radeski Skin Clinic с индивидуальным подходом и современными протоколами лечения.',
    bio_en:
      'Mohinabonu Usmonova is a dermatovenerologist, dermatocosmetologist, trichologist and podiatrist with 3+ years of clinical experience. She diagnoses, treats and corrects skin, hair, nail and foot conditions at Radeski Skin Clinic using individualized care and modern treatment protocols.',
    sort_order: 11,
    is_featured: false,
  },
  {
    name_uz: 'Karimova Iroda',
    name_ru: 'Каримова Ирода',
    name_en: 'Iroda Karimova',
    role_uz: 'Shifokor-dermatovenerolog, podolog',
    role_ru: 'Врач-дерматовенеролог, подолог',
    role_en: 'Dermatovenerologist, Podiatrist',
    experience_uz: '3',
    experience_ru: '3',
    experience_en: '3',
    education_uz: "Farg'ona jamoat salomatligi tibbiyot instituti",
    education_ru: 'Ферганский медицинский институт общественного здоровья',
    education_en: 'Fergana Medical Institute of Public Health',
    bio_uz:
      "Shifokor-dermatovenerolog va podolog. Dermatologiya sohasida 3 yillik amaliy tajribaga ega. Teri, soch va tirnoq kasalliklarini diagnostika qilish, davolash va profilaktikasi bilan shug'ullanadi. Shuningdek, podologiya hamda kosmetologiya yo'nalishlarida ham faoliyat yuritadi. Hozirda Farg'ona jamoat salomatligi tibbiyot institutida klinik ordinator sifatida faoliyat olib boradi. Zamonaviy, ilmiy asoslangan va individual yondashuvni o'z faoliyatining asosiy tamoyili deb biladi.",
    bio_ru:
      'Врач-дерматовенеролог и подолог. Имеет 3-летний практический опыт в области дерматологии. Занимается диагностикой, лечением и профилактикой заболеваний кожи, волос и ногтей. Также ведёт деятельность в направлениях подологии и косметологии. В настоящее время работает клиническим ординатором в Ферганском медицинском институте общественного здоровья. Основным принципом своей работы считает современный, научно обоснованный и индивидуальный подход.',
    bio_en:
      'Dermatovenerologist and podiatrist with 3 years of practical experience in dermatology. She handles the diagnosis, treatment and prevention of skin, hair and nail conditions, and also works in podiatry and cosmetology. She is currently a clinical resident at the Fergana Medical Institute of Public Health. A modern, evidence-based and individualized approach is the core principle of her work.',
    sort_order: 12,
    is_featured: false,
  },
  {
    name_uz: 'Baxriddinov Zuxriddin Muxiddinovich',
    name_ru: 'Бахриддинов Зухриддин Мухиддинович',
    name_en: 'Zuxriddin Muxiddinovich Baxriddinov',
    role_uz: 'Shifokor-dermatovenerolog',
    role_ru: 'Врач-дерматовенеролог',
    role_en: 'Dermatovenerologist',
    experience_uz: '3',
    experience_ru: '3',
    experience_en: '3',
    education_uz: "Farg'ona jamoat salomatligi tibbiyot instituti",
    education_ru: 'Ферганский медицинский институт общественного здоровья',
    education_en: 'Fergana Medical Institute of Public Health',
    bio_uz:
      "Shifokor-dermatolog. Dermatologiya va estetik tibbiyot sohasida 3 yillik amaliy tajribaga ega. Radeski Skin Clinic klinikasida dermatolog sifatida faoliyat yuritadi. Shuningdek, dermatologiya fanidan 1 yildan buyon talabalarga dars berib kelmoqda. Ilmiy faoliyat bilan ham shug'ullanib, tibbiyot sohasiga oid bir nechta ilmiy maqolalar muallifi hisoblanadi. Zamonaviy, ilmiy asoslangan va individual yondashuvni o'z faoliyatining asosiy tamoyili deb biladi.",
    bio_ru:
      'Врач-дерматолог. Имеет 3-летний практический опыт в области дерматологии и эстетической медицины. Работает дерматологом в клинике Radeski Skin Clinic. Кроме того, более года преподаёт дерматологию студентам. Занимается научной деятельностью, является автором нескольких научных статей по медицине. Основным принципом своей работы считает современный, научно обоснованный и индивидуальный подход.',
    bio_en:
      'Dermatologist with 3 years of practical experience in dermatology and aesthetic medicine. He works as a dermatologist at Radeski Skin Clinic and has also been teaching dermatology to students for over a year. Engaged in research, he is the author of several medical scientific papers. A modern, evidence-based and individualized approach is the core principle of his work.',
    sort_order: 13,
    is_featured: false,
  },
  {
    name_uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    name_ru: 'Тургунов Шохруз Илхомжон угли',
    name_en: 'Shohruz Ilxomjon ugli Turgunov',
    role_uz: 'Dermatovenerolog · Trixolog',
    role_ru: 'Дерматовенеролог · Трихолог',
    role_en: 'Dermatovenerologist · Trichologist',
    experience_uz: '3',
    experience_ru: '3',
    experience_en: '3',
    education_uz: "Farg'ona jamoat salomatligi tibbiyot instituti",
    education_ru: 'Ферганский медицинский институт общественного здоровья',
    education_en: 'Fergana Medical Institute of Public Health',
    bio_uz:
      "Turg'unov Shohruz Ilxomjon o'g'li — teri, soch va tirnoq kasalliklarini tashxislash va davolash bilan shug'ullanuvchi dermatovenerolog-trixolog. Dermatologiya sohasida 3+ yildan ortiq amaliy tajribaga ega.",
    bio_ru:
      'Тургунов Шохруз Илхомжон угли — дерматовенеролог-трихолог, занимающийся диагностикой и лечением заболеваний кожи, волос и ногтей. Имеет более 3 лет практического опыта в дерматологии.',
    bio_en:
      'Shohruz Ilxomjon ugli Turgunov is a dermatovenerologist and trichologist specializing in skin, hair and nail conditions. He has more than 3 years of hands-on experience in dermatology.',
    sort_order: 14,
    is_featured: false,
  },
  {
    name_uz: "Murodov Muhammadsolih Azamat o'g'li",
    name_ru: 'Муродов Мухаммадсолих Азамат угли',
    name_en: 'Muhammadsolih Azamat ugli Murodov',
    role_uz: 'Shifokor-dermatovenerolog, trixolog',
    role_ru: 'Врач-дерматовенеролог, трихолог',
    role_en: 'Dermatovenerologist, Trichologist',
    experience_uz: '3',
    experience_ru: '3',
    experience_en: '3',
    education_uz: "Farg'ona jamoat salomatligi tibbiyot instituti",
    education_ru: 'Ферганский медицинский институт общественного здоровья',
    education_en: 'Fergana Medical Institute of Public Health',
    bio_uz:
      "Shifokor-dermatovenerolog va trixolog. Dermatologiya hamda trixologiya yo'nalishlarida 3 yillik amaliy tajribaga ega. Radeski Skin Clinic klinikasida dermatolog va trixolog sifatida faoliyat yuritadi. Shuningdek, dermatologiya fanidan 3 yildan buyon talabalarga dars berib kelmoqda. Ilmiy faoliyat bilan ham shug'ullanib, tibbiyot sohasiga oid bir nechta ilmiy maqolalar muallifi hisoblanadi. Zamonaviy, ilmiy asoslangan va individual yondashuvni o'z faoliyatining asosiy tamoyili deb biladi.",
    bio_ru:
      'Врач-дерматовенеролог и трихолог. Имеет 3-летний практический опыт в области дерматологии и трихологии. Работает дерматологом и трихологом в клинике Radeski Skin Clinic. Кроме того, более 3 лет преподаёт дерматологию студентам. Занимается научной деятельностью, является автором нескольких научных статей по медицине. Основным принципом своей работы считает современный, научно обоснованный и индивидуальный подход.',
    bio_en:
      'Dermatovenerologist and trichologist with 3 years of practical experience in dermatology and trichology. He works as a dermatologist and trichologist at Radeski Skin Clinic and has been teaching dermatology to students for over 3 years. Engaged in research, he is the author of several medical scientific papers. A modern, evidence-based and individualized approach is the core principle of his work.',
    sort_order: 15,
    is_featured: false,
  },
];

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!username || !password) {
    console.error('ADMIN_USERNAME and ADMIN_PASSWORD env vars are required.');
    process.exit(1);
  }

  const tokenRes = await adminLogin({ username, password });
  const token = tokenRes.access_token;

  const existing = await getAdminDoctors(token);
  const byName = new Map(existing.map((d) => [d.name_uz.trim().toLowerCase(), d]));

  let created = 0;
  let updated = 0;

  for (const doc of DOCTORS) {
    const match = byName.get(doc.name_uz.trim().toLowerCase());
    if (match) {
      await withRetry(doc.name_uz, () => updateDoctor(match.id, doc, null, token));
      updated++;
      console.log(`  updated: ${doc.name_uz}`);
    } else {
      await withRetry(doc.name_uz, () => createDoctor(doc, null, token));
      created++;
      console.log(`  created: ${doc.name_uz}`);
    }
    await sleep(REQUEST_DELAY_MS);
  }

  console.log(`\nDone. Created: ${created}, Updated: ${updated}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
