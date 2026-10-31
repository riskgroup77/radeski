import type { Article, ArticleRichContent, Locale } from '../types';
import { SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG } from './articles/sochTokilishiTahlillarRadeskiArticle';
import { PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG } from './articles/psoriazTashxisDavolashRadeskiArticle';
import { ACNE_ARTICLE_CATALOG } from './articles/acneArticle';
import { POST_ACNE_ARTICLE_CATALOG } from './articles/postAcneArticle';
import { ROSACEA_ARTICLE_CATALOG } from './articles/rosaceaArticle';
import { PRP_HAIR_ARTICLE_CATALOG } from './articles/prpHairArticle';
import { PRP_LAB_TESTS_ARTICLE_CATALOG } from './articles/prpLabTestsArticle';
import { TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG } from './articles/trichologistTrichoscopyArticle';
import { TONGUE_SCC_ARTICLE_CATALOG } from './articles/tongueSccArticle';
import { PENILE_SCC_ARTICLE_CATALOG } from './articles/penileSccArticle';
import { BASAL_CELL_CARCINOMA_ARTICLE_CATALOG } from './articles/basalCellCarcinomaArticle';
import { PLASMAPHERESIS_ARTICLE_CATALOG } from './articles/plasmapheresisArticle';
import { DEKA_CO2_ARTICLE_CATALOG } from './articles/dekaCo2LaserArticle';
import { DEKA_MOVEO_ARTICLE_CATALOG } from './articles/dekaMoveoEpilationArticle';
import { DEKA_MOVEO_FERGANA_FAQ_ARTICLE_CATALOG } from './articles/dekaMoveoFerganaFaqArticle';
import { HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG } from './articles/hairTransplantContraindicationsArticle';
import { VITILIGO_DAAVLIN_ARTICLE_CATALOG } from './articles/vitiligoDaavlinArticle';
import { PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG } from './articles/psoriasisDaavlinKokandArticle';
import { IPL_THERAPY_ARTICLE_CATALOG } from './articles/iplTherapyArticle';
import { IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG } from './articles/iplPhototherapyRadeskiArticle';
import { PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG } from './articles/pediatricWartsCo2DekaArticle';
import { ADULT_ACNE_ARTICLE_CATALOG } from './articles/adultAcneArticle';
import { ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG } from './articles/adultAcneDermatologistArticle';
import { SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG } from './articles/seborrheicDermatitisArticle';
import { ECZEMA_ARTICLE_CATALOG } from './articles/eczemaArticle';
import { SKIN_ITCHING_ARTICLE_CATALOG } from './articles/skinItchingArticle';
import { URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG } from './articles/urticariaSkinAllergyArticle';
import { NAIL_FUNGUS_ARTICLE_CATALOG } from './articles/nailFungusArticle';
import { LASER_SCAR_RESURFACING_ARTICLE_CATALOG } from './articles/laserScarResurfacingArticle';
import { ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG } from './articles/acneDermatologistVsCosmetologistArticle';
import { ROSACEA_RADESKI_ARTICLE_CATALOG } from './articles/rosaceaRadeskiArticle';
import { MOLLUSCUM_CONTAGIOSUM_ARTICLE_CATALOG } from './articles/molluscumContagiosumArticle';
import { PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG } from './articles/pediatricWartsLaserRadeskiArticle';
import { HOLLYWOOD_SPECTRA_PIGMENTATION_ARTICLE_CATALOG } from './articles/hollywoodSpectraPigmentationArticle';
import { DERMA_V_VASCULAR_ARTICLE_CATALOG } from './articles/dermaVVascularArticle';
import { ATOPIC_DERMATITIS_ARTICLE_CATALOG } from './articles/atopicDermatitisArticle';
import { HOLLYWOOD_SPECTRA_EYEBROW_TATTOO_ARTICLE_CATALOG } from './articles/hollywoodSpectraEyebrowTattooArticle';
import { LASEMD_ULTRA_KOKAND_ARTICLE_CATALOG } from './articles/lasemdUltraKokandArticle';
import { THULIUM_LASER_HAIR_KOKAND_ARTICLE_CATALOG } from './articles/thuliumLaserHairKokandArticle';
import { ONYCHOCRYPTOSIS_KOKAND_ARTICLE_CATALOG } from './articles/onychocryptosisKokandArticle';
import { IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG } from './articles/iplLumeccaPigmentationArticle';
import { DERMA_V_REDNESS_ARTICLE_CATALOG } from './articles/dermaVRednessArticle';
import { TETRA_PRO_LIFTING_ARTICLE_CATALOG } from './articles/tetraProLiftingArticle';
import { HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG } from './articles/hollywoodSpectraPoresArticle';
import { MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG } from './articles/morpheus8RfLiftingArticle';
import { DEKA_CO2_SCARS_ARTICLE_CATALOG } from './articles/dekaCo2ScarsArticle';
import { LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG } from './articles/lazerEpilyatsiyaMistakesArticle';
import { ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG } from './articles/alopeciaAreataKlinikHolatArticle';
import { FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG } from './articles/fizioterapiyaDermatovenereologiyaArticle';
import { BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG } from './articles/biorevitalizatsiyaRadeskiArticle';
import { BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG } from './articles/botulinoterapiyaRadeskiArticle';
import { DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG } from './articles/dermatopatologiyaRadeskiArticle';
import { PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG } from './articles/photoFinderDiagnostikaRadeskiArticle';
import { DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG } from './articles/dnevnojStacionarRadeskiArticle';
import { IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG } from './articles/immunobiologiyaTerapiyaRadeskiArticle';
import { KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG } from './articles/konturnayaGubyRadeskiArticle';
import { SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG } from './articles/sochTokilishiProfilaktikaRadeskiArticle';
import { PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG } from './articles/psoriazKlinikKeysBahridinovRadeskiArticle';
import { KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG } from './articles/klinikaPatologiiNogtejRadeskiArticle';
import { KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG } from './articles/klinicheskoeIssledovanieRadeskiArticle';
import { KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG } from './articles/konturPlastikaRadeskiArticle';
import { LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG } from './articles/lazerBiorevitalizatsiyaRadeskiArticle';
import { NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG } from './articles/normalVsPathologicalHairLossRadeskiArticle';

type LocalizedArticleCatalog = Record<
  Locale,
  {
    summary?: string;
    body: string;
    keyTakeaways: string[];
    faq: ArticleRichContent['faq'];
    tags: string[];
    whenToSeeDoctor: string[];
  }
>;


export { DISCLAIMER, ARTICLE_CATALOG_KEYWORDS, findArticleCatalogKey } from './articleCatalogKeys';
import { CORE_ARTICLE_CATALOGS } from './articles/coreArticleCatalogs';

export const ARTICLE_RICH_CATALOG: Record<string, LocalizedArticleCatalog> = {
  acne: ACNE_ARTICLE_CATALOG,
  'post-acne': POST_ACNE_ARTICLE_CATALOG,
  rosacea: ROSACEA_ARTICLE_CATALOG,
  'prp-hair': PRP_HAIR_ARTICLE_CATALOG,
  'prp-lab-tests': PRP_LAB_TESTS_ARTICLE_CATALOG,
  'trichologist-trichoscopy': TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG,
  'tongue-scc': TONGUE_SCC_ARTICLE_CATALOG,
  'penile-scc': PENILE_SCC_ARTICLE_CATALOG,
  'basal-cell-carcinoma': BASAL_CELL_CARCINOMA_ARTICLE_CATALOG,
  plasmapheresis: PLASMAPHERESIS_ARTICLE_CATALOG,
  'deka-co2': DEKA_CO2_ARTICLE_CATALOG,
  'deka-moveo': DEKA_MOVEO_ARTICLE_CATALOG,
  'deka-moveo-fergana-faq': DEKA_MOVEO_FERGANA_FAQ_ARTICLE_CATALOG,
  'hair-transplant-contraindications': HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE_CATALOG,
  vitiligo: VITILIGO_DAAVLIN_ARTICLE_CATALOG,
  'psoriasis-daavlin-kokand': PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG,
  'ipl-therapy': IPL_THERAPY_ARTICLE_CATALOG,
  'ipl-radeski': IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG,
  'pediatric-warts-co2-deka': PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG,
  'adult-acne': ADULT_ACNE_ARTICLE_CATALOG,
  'adult-acne-dermatologist': ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG,
  'seborrheic-dermatitis': SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG,
  eczema: ECZEMA_ARTICLE_CATALOG,
  'skin-itching': SKIN_ITCHING_ARTICLE_CATALOG,
  'urticaria-skin-allergy': URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG,
  'nail-fungus': NAIL_FUNGUS_ARTICLE_CATALOG,
  'laser-scar-resurfacing': LASER_SCAR_RESURFACING_ARTICLE_CATALOG,
  'acne-dermatologist-vs-cosmetologist': ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG,
  'rosacea-radeski': ROSACEA_RADESKI_ARTICLE_CATALOG,
  'molluscum-radeski': MOLLUSCUM_CONTAGIOSUM_ARTICLE_CATALOG,
  'pediatric-warts-laser-radeski': PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG,
  'hollywood-spectra-pigmentation': HOLLYWOOD_SPECTRA_PIGMENTATION_ARTICLE_CATALOG,
  'derma-v-vascular': DERMA_V_VASCULAR_ARTICLE_CATALOG,
  'atopic-dermatitis': ATOPIC_DERMATITIS_ARTICLE_CATALOG,
  'hollywood-spectra-eyebrow-tattoo': HOLLYWOOD_SPECTRA_EYEBROW_TATTOO_ARTICLE_CATALOG,
  'lasemd-ultra-kokand': LASEMD_ULTRA_KOKAND_ARTICLE_CATALOG,
  'thulium-laser-hair-kokand': THULIUM_LASER_HAIR_KOKAND_ARTICLE_CATALOG,
  'onychocryptosis-kokand': ONYCHOCRYPTOSIS_KOKAND_ARTICLE_CATALOG,
  'ipl-lumecca-pigmentation-radeski': IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG,
  'derma-v-redness-radeski': DERMA_V_REDNESS_ARTICLE_CATALOG,
  'tetra-pro-lifting-radeski': TETRA_PRO_LIFTING_ARTICLE_CATALOG,
  'hollywood-spectra-pores-radeski': HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG,
  'morpheus8-rf-lifting-radeski': MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG,
  'deka-co2-scars-radeski': DEKA_CO2_SCARS_ARTICLE_CATALOG,
  'lazer-epilyatsiya-samara-xatolar': LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG,
  'alopecia-areata-klinik-holat': ALOPECIA_AREATA_KLINIK_HOLAT_ARTICLE_CATALOG,
  'fizioterapiya-dermatovenereologiya': FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG,
  'biorevitalizatsiya-radeski': BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG,
  'botulinoterapiya-radeski': BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG,
  'dermatopatologiya-radeski': DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG,
  'photofinder-diagnostika-radeski': PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG,
  'dnevnoj-stacionar-radeski': DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG,
  'immunobiologiya-radeski': IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG,
  'konturnaya-guby-radeski': KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG,
  'soch-profilaktika-inyeksii-radeski': SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG,
  'psoriaz-klinik-keys-bahridinov-radeski': PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG,
  'klinika-patologii-nogtej-stopy-radeski': KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG,
  'klinicheskoe-issledovanie-radeski': KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG,
  'kontur-plastika-radeski': KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG,
  'lazer-biorevitalizatsiya-radeski': LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG,
  'soch-tokilishi-normal-patologiya-radeski': NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG,
  'psoriaz-tashxis-davolash-radeski': PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG,
  'soch-tokilishi-tahlillar-radeski': SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG,
  ...CORE_ARTICLE_CATALOGS,
};
