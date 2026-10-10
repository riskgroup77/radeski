import type { Locale } from '../types';

/** UI labels of the equipment sections (no data dependencies). */
export function getEquipmentSectionLabels(locale: Locale) {
  return locale === 'uz'
    ? {
        sectionTitle: 'Klinikadagi apparatlar',
        hint: 'Apparat nomini bosing — to\'liq ma\'lumot, qo\'llanish va narxlar ochiladi.',
        manufacturer: 'Ishlab chiqaruvchi',
        directions: 'Qaysi yo\'nalishlarda qo\'llaniladi',
        indications: 'Ko\'rsatmalar',
        clinicUsage: 'Radeski klinikasida qanday ishlatiladi',
        process: 'Muolaja bosqichlari',
        prices: 'Narxlar (preyskurant)',
        priceNote: 'Narx haqida',
        relatedService: 'Bog\'liq muolaja',
        allPrices: 'Barcha narxlar',
        book: 'Qabulga yozilish',
        noPrices: 'Aniq narx shifokor konsultatsiyasida belgilanadi.',
      }
    : locale === 'ru'
      ? {
          sectionTitle: 'Оборудование клиники',
          hint: 'Нажмите на название аппарата — откроется полная информация, применение и цены.',
          manufacturer: 'Производитель',
          directions: 'Направления применения',
          indications: 'Показания',
          clinicUsage: 'Как используется в клинике Radeski',
          process: 'Этапы процедуры',
          prices: 'Цены (прейскурант)',
          priceNote: 'О стоимости',
          relatedService: 'Связанная процедура',
          allPrices: 'Все цены',
          book: 'Записаться',
          noPrices: 'Точная стоимость определяется на консультации врача.',
        }
      : {
          sectionTitle: 'Clinic equipment',
          hint: 'Click a device name to view full details, usage, and prices.',
          manufacturer: 'Manufacturer',
          directions: 'Used in these specialties',
          indications: 'Indications',
          clinicUsage: 'How we use it at Radeski Clinic',
          process: 'Procedure steps',
          prices: 'Prices (price list)',
          priceNote: 'Pricing note',
          relatedService: 'Related procedure',
          allPrices: 'All prices',
          book: 'Book appointment',
          noPrices: 'Exact pricing is confirmed at physician consultation.',
        };
}
