import type { Article } from '../types';
import { SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE } from './articles/sochTokilishiTahlillarRadeskiArticle';
import { PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE } from './articles/psoriazTashxisDavolashRadeskiArticle';
import { ACNE_ARTICLE } from './articles/acneArticle';
import { POST_ACNE_ARTICLE } from './articles/postAcneArticle';
import { ROSACEA_ARTICLE } from './articles/rosaceaArticle';
import { PRP_HAIR_ARTICLE } from './articles/prpHairArticle';
import { PRP_LAB_TESTS_ARTICLE } from './articles/prpLabTestsArticle';
import { TRICHOLOGIST_TRICHOSCOPY_ARTICLE } from './articles/trichologistTrichoscopyArticle';
import { TONGUE_SCC_ARTICLE } from './articles/tongueSccArticle';
import { PENILE_SCC_ARTICLE } from './articles/penileSccArticle';
import { BASAL_CELL_CARCINOMA_ARTICLE } from './articles/basalCellCarcinomaArticle';
import { PLASMAPHERESIS_ARTICLE } from './articles/plasmapheresisArticle';
import { DEKA_CO2_ARTICLE } from './articles/dekaCo2LaserArticle';
import { DEKA_MOVEO_ARTICLE } from './articles/dekaMoveoEpilationArticle';
import { DEKA_MOVEO_FERGANA_FAQ_ARTICLE } from './articles/dekaMoveoFerganaFaqArticle';
import { HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE } from './articles/hairTransplantContraindicationsArticle';
import { VITILIGO_DAAVLIN_ARTICLE } from './articles/vitiligoDaavlinArticle';
import { PSORIASIS_DAAVLIN_KOKAND_ARTICLE } from './articles/psoriasisDaavlinKokandArticle';
import { IPL_THERAPY_ARTICLE } from './articles/iplTherapyArticle';
import { IPL_PHOTOTHERAPY_RADESKI_ARTICLE } from './articles/iplPhototherapyRadeskiArticle';
import { PEDIATRIC_WARTS_CO2_DEKA_ARTICLE } from './articles/pediatricWartsCo2DekaArticle';
import { ADULT_ACNE_ARTICLE } from './articles/adultAcneArticle';
import { LASER_SCAR_RESURFACING_ARTICLE } from './articles/laserScarResurfacingArticle';
import { ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE } from './articles/acneDermatologistVsCosmetologistArticle';
import { ROSACEA_RADESKI_ARTICLE } from './articles/rosaceaRadeskiArticle';
import { MOLLUSCUM_CONTAGIOSUM_ARTICLE } from './articles/molluscumContagiosumArticle';
import { PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE } from './articles/pediatricWartsLaserRadeskiArticle';
import { HOLLYWOOD_SPECTRA_PIGMENTATION_ARTICLE } from './articles/hollywoodSpectraPigmentationArticle';
import { DERMA_V_VASCULAR_ARTICLE } from './articles/dermaVVascularArticle';
import { ATOPIC_DERMATITIS_ARTICLE } from './articles/atopicDermatitisArticle';
import { HOLLYWOOD_SPECTRA_EYEBROW_TATTOO_ARTICLE } from './articles/hollywoodSpectraEyebrowTattooArticle';
import { LASEMD_ULTRA_KOKAND_ARTICLE } from './articles/lasemdUltraKokandArticle';
import { THULIUM_LASER_HAIR_KOKAND_ARTICLE } from './articles/thuliumLaserHairKokandArticle';
import { ONYCHOCRYPTOSIS_KOKAND_ARTICLE } from './articles/onychocryptosisKokandArticle';
import { IPL_LUMECCA_PIGMENTATION_ARTICLE } from './articles/iplLumeccaPigmentationArticle';
import { DERMA_V_REDNESS_ARTICLE } from './articles/dermaVRednessArticle';
import { TETRA_PRO_LIFTING_ARTICLE } from './articles/tetraProLiftingArticle';
import { HOLLYWOOD_SPECTRA_PORES_ARTICLE } from './articles/hollywoodSpectraPoresArticle';
import { MORPHEUS8_RF_LIFTING_ARTICLE } from './articles/morpheus8RfLiftingArticle';
import { DEKA_CO2_SCARS_ARTICLE } from './articles/dekaCo2ScarsArticle';
import { LAZER_EPILYATSIYA_MISTAKES_ARTICLE } from './articles/lazerEpilyatsiyaMistakesArticle';
import { ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE } from './articles/alopeciaAreataKlinikHolatArticle';
import { FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE } from './articles/fizioterapiyaDermatovenereologiyaArticle';
import { BIOREVITALIZATSIYA_RADESKI_ARTICLE } from './articles/biorevitalizatsiyaRadeskiArticle';
import { BOTULINOTERAPIYA_RADESKI_ARTICLE } from './articles/botulinoterapiyaRadeskiArticle';
import { DERMATOPATOLOGIYA_RADESKI_ARTICLE } from './articles/dermatopatologiyaRadeskiArticle';
import { PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE } from './articles/photoFinderDiagnostikaRadeskiArticle';
import { DNEVNOJ_STACIONAR_RADESKI_ARTICLE } from './articles/dnevnojStacionarRadeskiArticle';
import { IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE } from './articles/immunobiologiyaTerapiyaRadeskiArticle';
import { KONTURnaya_GUBY_RADESKI_ARTICLE } from './articles/konturnayaGubyRadeskiArticle';
import { SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE } from './articles/sochTokilishiProfilaktikaRadeskiArticle';
import { PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE } from './articles/psoriazKlinikKeysBahridinovRadeskiArticle';
import { KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE } from './articles/klinikaPatologiiNogtejRadeskiArticle';
import { KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE } from './articles/klinicheskoeIssledovanieRadeskiArticle';
import { KONTUR_PLASTIKA_RADESKI_ARTICLE } from './articles/konturPlastikaRadeskiArticle';
import { LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE } from './articles/lazerBiorevitalizatsiyaRadeskiArticle';
import { NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE } from './articles/normalVsPathologicalHairLossRadeskiArticle';

/**
 * Full static article objects. Only the article index generator and full-content helpers
 * import this module — app code should use ARTICLES from src/data.ts (light index).
 */
export const STATIC_ARTICLE_SOURCES: Article[] = [
  ACNE_ARTICLE,
  POST_ACNE_ARTICLE,
  ROSACEA_ARTICLE,
  PRP_HAIR_ARTICLE,
  PRP_LAB_TESTS_ARTICLE,
  TRICHOLOGIST_TRICHOSCOPY_ARTICLE,
  TONGUE_SCC_ARTICLE,
  PENILE_SCC_ARTICLE,
  BASAL_CELL_CARCINOMA_ARTICLE,
  PLASMAPHERESIS_ARTICLE,
  DEKA_CO2_ARTICLE,
  DEKA_MOVEO_ARTICLE,
  DEKA_MOVEO_FERGANA_FAQ_ARTICLE,
  HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE,
  VITILIGO_DAAVLIN_ARTICLE,
  PSORIASIS_DAAVLIN_KOKAND_ARTICLE,
  IPL_THERAPY_ARTICLE,
  IPL_PHOTOTHERAPY_RADESKI_ARTICLE,
  PEDIATRIC_WARTS_CO2_DEKA_ARTICLE,
  ADULT_ACNE_ARTICLE,
  LASER_SCAR_RESURFACING_ARTICLE,
  ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE,
  ROSACEA_RADESKI_ARTICLE,
  MOLLUSCUM_CONTAGIOSUM_ARTICLE,
  PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE,
  HOLLYWOOD_SPECTRA_PIGMENTATION_ARTICLE,
  DERMA_V_VASCULAR_ARTICLE,
  ATOPIC_DERMATITIS_ARTICLE,
  HOLLYWOOD_SPECTRA_EYEBROW_TATTOO_ARTICLE,
  LASEMD_ULTRA_KOKAND_ARTICLE,
  THULIUM_LASER_HAIR_KOKAND_ARTICLE,
  ONYCHOCRYPTOSIS_KOKAND_ARTICLE,
  IPL_LUMECCA_PIGMENTATION_ARTICLE,
  DERMA_V_REDNESS_ARTICLE,
  TETRA_PRO_LIFTING_ARTICLE,
  HOLLYWOOD_SPECTRA_PORES_ARTICLE,
  MORPHEUS8_RF_LIFTING_ARTICLE,
  DEKA_CO2_SCARS_ARTICLE,
  LAZER_EPILYATSIYA_MISTAKES_ARTICLE,
  ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE,
  FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE,
  BIOREVITALIZATSIYA_RADESKI_ARTICLE,
  BOTULINOTERAPIYA_RADESKI_ARTICLE,
  DERMATOPATOLOGIYA_RADESKI_ARTICLE,
  PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE,
  DNEVNOJ_STACIONAR_RADESKI_ARTICLE,
  IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE,
  KONTURnaya_GUBY_RADESKI_ARTICLE,
  SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE,
  PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE,
  KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE,
  KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE,
  KONTUR_PLASTIKA_RADESKI_ARTICLE,
  LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE,
  NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE,
  PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE,
  SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE,
];
