/**
 * Yangi shifokorlar ma'lumotini API ga qo'shadi / mavjudini yangilaydi.
 * Nom (name_uz) bo'yicha moslashtiradi.
 *
 * Usage:
 *   set ADMIN_USERNAME=admin
 *   set ADMIN_PASSWORD=radeski2026
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
    role_uz: 'Shifokor-dermatolog, dermatokosmetolog',
    role_ru: 'Врач-дерматолог, дерматокосметолог',
    role_en: 'Dermatologist, Dermatocosmetologist',
    experience_uz: '3',
    experience_ru: '3',
    experience_en: '3',
    education_uz: "Farg'ona jamoat salomatligi tibbiyot instituti (FJSTI)",
    education_ru: 'Ферганский медицинский институт общественного здоровья (ФМИОЗ)',
    education_en: 'Fergana Medical Institute of Public Health',
    bio_uz:
      "Usmanova Mohinabonu — shifokor-dermatolog va dermatokosmetolog. U dermatologiya sohasida 3 yillik amaliy tajribaga ega bo'lib, teri, soch va tirnoq kasalliklarini tashxislash, davolash hamda profilaktika qilish yo'nalishlarida faoliyat yuritadi. Hozirda Radeski Skin Clinic klinikasida dermatokosmetolog sifatida ishlaydi. Kasbiy faoliyati davomida dermatologiya va dermatokosmetologiyaning zamonaviy diagnostika va davolash usullarini puxta o'zlashtirgan hamda bemorlarga individual yondashuv asosida malakali tibbiy yordam ko'rsatib kelmoqda. Shuningdek, teri parvarishi, akne va post-akne holatlari, pigmentatsiya buzilishlari hamda estetik dermatologik muolajalar bo'yicha amaliy tajribaga ega. U o'z kasbiy malakasini muntazam oshirib boradi, zamonaviy ilmiy tadqiqotlar natijalari va klinik tavsiyalarni amaliyotiga tatbiq etishga alohida e'tibor qaratadi. Bir yildan buyon dermatologiya fanidan talabalarga dars berib kelmoqda. Kasbiy faoliyatida ilmiy asoslangan tibbiyot tamoyillariga qat'iy amal qiladi hamda bemor xavfsizligi, tibbiy etika va individual yondashuvni ustuvor yo'nalishlar sifatida e'tirof etadi.",
    bio_ru:
      'Усманова Мохинабону — врач-дерматолог и дерматокосметолог. Имеет 3-летний практический опыт в области дерматологии, занимается диагностикой, лечением и профилактикой заболеваний кожи, волос и ногтей. В настоящее время работает дерматокосметологом в клинике Radeski Skin Clinic. За время профессиональной деятельности в совершенстве освоила современные методы диагностики и лечения в дерматологии и дерматокосметологии и оказывает квалифицированную медицинскую помощь на основе индивидуального подхода к каждому пациенту. Также обладает практическим опытом в уходе за кожей, лечении акне и постакне, коррекции нарушений пигментации и проведении эстетических дерматологических процедур. Регулярно повышает квалификацию, уделяя особое внимание внедрению результатов современных научных исследований и клинических рекомендаций в практику. Более года преподаёт дерматологию студентам. В работе строго придерживается принципов доказательной медицины, а безопасность пациента, медицинскую этику и индивидуальный подход считает приоритетными направлениями.',
    bio_en:
      'Mohinabonu Usmanova is a dermatologist and dermatocosmetologist with 3 years of practical experience in dermatology, specializing in the diagnosis, treatment and prevention of skin, hair and nail conditions. She currently works as a dermatocosmetologist at Radeski Skin Clinic. Throughout her career she has mastered modern diagnostic and treatment methods in dermatology and dermatocosmetology, providing qualified medical care based on an individual approach to each patient. She also has hands-on experience in skin care, treatment of acne and post-acne, correction of pigmentation disorders and aesthetic dermatological procedures. She regularly upgrades her qualifications, paying particular attention to applying the results of modern research and clinical guidelines in practice. For over a year she has been teaching dermatology to students. In her work she strictly follows the principles of evidence-based medicine and regards patient safety, medical ethics and an individualized approach as her top priorities.',
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
