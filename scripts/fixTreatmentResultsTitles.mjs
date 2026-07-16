/**
 * Natijalar (treatment-results) matnlarini API da yangilaydi.
 * ADMIN_USERNAME / ADMIN_PASSWORD kerak.
 */
import 'dotenv/config';
import { adminLogin, updateTreatmentResult } from '../src/api/adminApi.ts';

const UPDATES = [
  {
    id: 'b68c66fa-19bb-4704-809b-03095dc5ec0c',
    payload: {
      title_uz: 'Psoriaz (tirsak) — davolash natijasi',
      title_ru: 'Псориаз (локоть) — результат лечения',
      title_en: 'Psoriasis (elbow) — treatment result',
      description_uz:
        'Bemor tirsak sohasidagi psoriaz plakalari (qalinlashgan, quruq va po‘st tashlaydigan teri) bilan murojaat qildi. Individual dermatologik davolashdan so‘ng yallig‘lanish va qalinlashish sezilarli kamaydi, teri silliqlandi va sog‘lom ko‘rinish tiklandi.',
      description_ru:
        'Пациент обратился с псориатическими бляшками в области локтя (утолщённая, сухая и шелушащаяся кожа). После индивидуальной дерматологической терапии воспаление и уплотнение заметно уменьшились, кожа стала гладкой и здоровее.',
      description_en:
        'The patient presented with psoriatic plaques on the elbow (thickened, dry, flaky skin). After individualized dermatological treatment, inflammation and thickening were significantly reduced, and the skin became smoother and healthier.',
      service_uz: 'Dermatologiya',
      service_ru: 'Дерматология',
      service_en: 'Dermatology',
      sessions: '6 seans',
      sort_order: 0,
      published: true,
    },
  },
  {
    id: '94723604-404b-463d-901f-405bd29237af',
    payload: {
      title_uz: 'Soch ekish',
      title_ru: 'Пересадка волос',
      title_en: 'Hair transplant',
      description_uz:
        'Tepa va cho‘kka soch to‘kilishi (androgenetik alopeciya). Soch ekish natijasida zich, tabiiy ko‘rinishdagi soch qoplami tiklandi.',
      description_ru:
        'Выпадение волос на макушке и темени (андрогенетическая алопеция). После пересадки волос восстановлена густая, естественная шевелюра.',
      description_en:
        'Crown and vertex hair loss (androgenetic alopecia). Hair transplant restored dense, natural-looking hair coverage.',
      service_uz: 'Trixologiya',
      service_ru: 'Трихология',
      service_en: 'Trichology',
      sessions: '1 operatsiya + nazorat',
      sort_order: 3,
      published: true,
    },
  },
];

async function main() {
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'radeski2026';
  const tokenRes = await adminLogin({ username, password });
  const token = tokenRes.access_token;

  for (const item of UPDATES) {
    const updated = await updateTreatmentResult(item.id, item.payload, undefined, token);
    console.log('OK', item.id, '->', updated.title_uz || item.payload.title_uz);
  }
  console.log('Done:', UPDATES.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
