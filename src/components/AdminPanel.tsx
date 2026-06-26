import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Locale, Doctor, ServiceCategory, ServiceDetail, PriceItem, Article } from '../types';
import { getPriceCategoryOptions, toPriceSectionCategory } from '../data/priceCategoryLabels';
import {
  Lock, LayoutDashboard, Building, Users, Activity, CreditCard, FileText,
  Save, RefreshCw, Plus, Edit2, Trash2, Check, ArrowLeft, LogOut, Info, AlertTriangle, PhoneCall,
  Film, Sparkles, Handshake, MessageSquareQuote
} from 'lucide-react';
import {
  adminLogin,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  createServiceCategory,
  updateServiceCategory,
  deleteServiceCategory,
  createPrice,
  updatePrice,
  deletePrice,
  createArticle,
  updateArticle,
  deleteArticle,
  getAppointments,
  updateAppointmentStatus,
  importPrices,
  getAdminDoctors,
  getAdminServices,
  getAdminPrices,
  getAdminArticles,
  createPartner,
  updatePartner,
  deletePartner,
  patchReview,
  deleteReview,
  getAdminReviews,
  createAdminReview,
  createTreatmentResult,
  updateTreatmentResult,
  deleteTreatmentResult,
  createVideo,
  updateVideo,
  deleteVideo,
  getAdminVideos,
  createClinicRating,
  updateClinicRating,
} from '../api/adminApi';
import {
  mapDoctorToCreatePayload,
  mapDoctorFromApi,
  mapServiceCategoryToPayload,
  mapServiceCategoryFromApi,
  mapSubServiceToPayload,
  mapPriceToCreatePayload,
  mapPriceFromApi,
  mapArticleToCreatePayload,
  mapArticleFromApi,
  parsePriceValue,
} from '../api/mappers';
import {
  mapPartnerToCreatePayload,
  mapTreatmentResultToCreatePayload,
  mapClinicVideoToCreatePayload,
  mapClinicRatingToCreatePayload,
  mapReviewFromApi,
  mapReviewToAdminCreatePayload,
  mapClinicVideoFromApi,
  type ClinicRatingDisplay,
} from '../api/cmsMappers';
import { ApiError, clearAuthToken, getAuthToken, setAuthToken, isUnauthorizedError, isAuthTokenExpired, ADMIN_SESSION_EXPIRED_EVENT } from '../api/client';
import { ApiAppointment, AppointmentStatus } from '../api/types';
import ImageUploadField from './ImageUploadField';
import ResolvedVideo from './ResolvedVideo';
import VideoUploadField from './VideoUploadField';
import MediaImage from './MediaImage';
import { deleteLocalMedia, isLocalMediaRef, saveLocalMedia } from '../utils/localMediaStorage';
import { getLocalizedImage } from '../utils/localizedImage';
import { normalizeArticleViews } from '../utils/articleViews';
import { getCatalogPrices, enrichPrices } from '../utils/enrichPrices';
import { enrichServiceCategories } from '../utils/enrichServices';
import { enrichArticles } from '../utils/enrichArticles';
import { sortDoctorsFeaturedFirst } from '../utils/doctors';
import { getNextSortOrderInCategory } from '../utils/priceSortOrderStorage';
import { getPlatformLogo } from '../utils/platformLogo';
import LocalizedFieldGroup, { isLocalizedFilled, emptyLocalized } from './LocalizedFieldGroup';
import { DICTIONARY } from '../data';
import type { ClinicVideo, TreatmentResult, ClinicPartner, CustomerReview } from '../data/sitePagesContent';

function compareAdminPriceRows(a: PriceItem, b: PriceItem): number {
  const categoryCompare = a.category.localeCompare(b.category);
  if (categoryCompare !== 0) return categoryCompare;

  const orderA = a.sortOrder ?? Number.MAX_SAFE_INTEGER;
  const orderB = b.sortOrder ?? Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) return orderA - orderB;

  return (a.name.uz || a.name.ru || '').localeCompare(b.name.uz || b.name.ru || '', 'uz');
}

interface AdminPanelProps {
  locale: Locale;
  dictionary: Record<string, string>;
  fullDictionary?: typeof DICTIONARY;
  doctors: Doctor[];
  serviceCategories: ServiceCategory[];
  prices: PriceItem[];
  articles: Article[];
  clinicRatings: ClinicRatingDisplay[];
  clinicVideos: ClinicVideo[];
  treatmentResults: TreatmentResult[];
  clinicPartners: ClinicPartner[];
  customerReviews: CustomerReview[];
  onSaveLocalData: (type: string, data: unknown) => void;
  onResetLocalData: () => void;
  onRefresh: () => Promise<void>;
  onRefreshCms: () => Promise<void>;
  onClose: () => void;
}

export default function AdminPanel({
  locale,
  dictionary,
  fullDictionary = DICTIONARY,
  doctors,
  serviceCategories,
  prices,
  articles,
  clinicRatings,
  clinicVideos,
  treatmentResults,
  clinicPartners,
  customerReviews,
  onSaveLocalData,
  onResetLocalData,
  onRefresh,
  onRefreshCms,
  onClose
}: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = getAuthToken();
    return Boolean(token && !isAuthTokenExpired(token));
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Admin Section state
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'clinic' | 'doctors' | 'services' | 'prices' | 'articles' | 'videos' | 'results' | 'partners' | 'testimonials' | 'appointments'
  >('dashboard');
  
  // Notification States
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  // Editing Sub-states
  // 1. Clinic ratings & basic details
  const [editedRatings, setEditedRatings] = useState<ClinicRatingDisplay[]>(() =>
    JSON.parse(JSON.stringify(clinicRatings)),
  );
  const [editedFullDict, setEditedFullDict] = useState<typeof DICTIONARY>(() =>
    JSON.parse(JSON.stringify(fullDictionary))
  );

  // 2. Doctors
  const [editedDoctors, setEditedDoctors] = useState<Doctor[]>(() => JSON.parse(JSON.stringify(doctors)));
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [isAddingDoctor, setIsAddingDoctor] = useState(false);
  const [doctorForm, setDoctorForm] = useState<Partial<Doctor>>({});

  // 3. Services
  const [editedCategories, setEditedCategories] = useState<ServiceCategory[]>(() => JSON.parse(JSON.stringify(serviceCategories)));
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [categoryForm, setCategoryForm] = useState<Partial<ServiceCategory>>({});
  
  // Sub-services editing state
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);
  const [isAddingSubService, setIsAddingSubService] = useState(false);
  const [subServiceForm, setSubServiceForm] = useState<{
    id: string;
    name: { uz: string; ru: string; en: string };
    description: { uz: string; ru: string; en: string };
    image?: string | null;
    images?: ServiceDetail['images'];
  }>({
    id: '',
    name: { uz: '', ru: '', en: '' },
    description: { uz: '', ru: '', en: '' },
  });

  // 4. Prices
  const [editedPrices, setEditedPrices] = useState<PriceItem[]>(() =>
    JSON.parse(JSON.stringify(prices)),
  );
  const [selectedPriceId, setSelectedPriceId] = useState<string | null>(null);
  const [isAddingPrice, setIsAddingPrice] = useState(false);
  const [priceForm, setPriceForm] = useState<Partial<PriceItem>>({});

  // 5. Articles
  const [editedArticles, setEditedArticles] = useState<Article[]>(() => JSON.parse(JSON.stringify(articles)));
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [articleForm, setArticleForm] = useState<Partial<Article>>({});

  const [editedVideos, setEditedVideos] = useState<ClinicVideo[]>(() => JSON.parse(JSON.stringify(clinicVideos)));
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const [videoForm, setVideoForm] = useState<Partial<ClinicVideo>>({});

  const [editedResults, setEditedResults] = useState<TreatmentResult[]>(() =>
    JSON.parse(JSON.stringify(treatmentResults)),
  );
  const [selectedResultId, setSelectedResultId] = useState<string | null>(null);
  const [isAddingResult, setIsAddingResult] = useState(false);
  const [resultForm, setResultForm] = useState<Partial<TreatmentResult>>({});

  const [editedPartners, setEditedPartners] = useState<ClinicPartner[]>(() =>
    JSON.parse(JSON.stringify(clinicPartners)),
  );
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);
  const [isAddingPartner, setIsAddingPartner] = useState(false);
  const [partnerForm, setPartnerForm] = useState<Partial<ClinicPartner>>({});
  const [partnerLogoFile, setPartnerLogoFile] = useState<File | null>(null);

  const [editedCustomerReviews, setEditedCustomerReviews] = useState<CustomerReview[]>(() =>
    JSON.parse(JSON.stringify(customerReviews)),
  );
  const [selectedCustomerReviewId, setSelectedCustomerReviewId] = useState<string | null>(null);
  const [isAddingCustomerReview, setIsAddingCustomerReview] = useState(false);
  const [customerReviewForm, setCustomerReviewForm] = useState<Partial<CustomerReview>>({});

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoThumbnailFile, setVideoThumbnailFile] = useState<File | null>(null);
  const [beforeImageFile, setBeforeImageFile] = useState<File | null>(null);
  const [afterImageFile, setAfterImageFile] = useState<File | null>(null);

  const [doctorPhotoFile, setDoctorPhotoFile] = useState<File | null>(null);
  const [categoryImageFile, setCategoryImageFile] = useState<File | null>(null);
  const [subServiceImageFile, setSubServiceImageFile] = useState<File | null>(null);
  const [articleImageFile, setArticleImageFile] = useState<File | null>(null);

  const [appointments, setAppointments] = useState<ApiAppointment[]>([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(false);
  const [appointmentStatusFilter, setAppointmentStatusFilter] = useState<AppointmentStatus | ''>('');
  const [priceImportLoading, setPriceImportLoading] = useState(false);

  const sessionExpiredMessage =
    locale === 'uz'
      ? "Sessiya muddati tugadi. Ma'lumotlarni saqlash uchun qayta kiring."
      : locale === 'ru'
        ? 'Сессия истекла. Войдите снова, чтобы продолжить работу.'
        : 'Your session has expired. Please sign in again to continue.';

  const handleSessionExpired = useCallback(() => {
    clearAuthToken();
    setIsAuthenticated(false);
    setAuthError(sessionExpiredMessage);
  }, [sessionExpiredMessage]);

  const reportAdminError = useCallback((err: unknown, fallback: string) => {
    if (isUnauthorizedError(err)) return;
    alert(err instanceof ApiError ? err.message : fallback);
  }, []);

  // Synchronize internal states if props change (e.g. after resetting)
  useEffect(() => {
    setEditedRatings(JSON.parse(JSON.stringify(clinicRatings)));
    setEditedFullDict(JSON.parse(JSON.stringify(fullDictionary)));
    setEditedDoctors(JSON.parse(JSON.stringify(doctors)));
    setEditedCategories(JSON.parse(JSON.stringify(serviceCategories)));
    setEditedPrices(JSON.parse(JSON.stringify(prices)));
    setEditedArticles(JSON.parse(JSON.stringify(articles)));
    setEditedVideos(JSON.parse(JSON.stringify(clinicVideos)));
    setEditedResults(JSON.parse(JSON.stringify(treatmentResults)));
    setEditedPartners(JSON.parse(JSON.stringify(clinicPartners)));
    setEditedCustomerReviews(JSON.parse(JSON.stringify(customerReviews)));
  }, [doctors, serviceCategories, prices, articles, clinicRatings, fullDictionary, clinicVideos, treatmentResults, clinicPartners, customerReviews]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'testimonials') return;
    getAdminReviews()
      .then((items) => setEditedCustomerReviews(items.map(mapReviewFromApi)))
      .catch((err) => {
        if (!isUnauthorizedError(err)) setEditedCustomerReviews([]);
      });
  }, [isAuthenticated, activeTab, saveSuccess]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'videos') return;
    getAdminVideos()
      .then((items) => setEditedVideos(items.map(mapClinicVideoFromApi)))
      .catch((err) => {
        if (!isUnauthorizedError(err)) setEditedVideos([]);
      });
  }, [isAuthenticated, activeTab, saveSuccess]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'doctors') return;
    getAdminDoctors()
      .then((items) => setEditedDoctors(sortDoctorsFeaturedFirst(items.map(mapDoctorFromApi))))
      .catch((err) => {
        if (!isUnauthorizedError(err)) reportAdminError(err, 'Load failed');
      });
  }, [isAuthenticated, activeTab, saveSuccess, reportAdminError]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'services') return;
    getAdminServices()
      .then((items) => {
        const mapped = items
          .map(mapServiceCategoryFromApi)
          .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
        setEditedCategories(enrichServiceCategories(mapped));
      })
      .catch((err) => {
        if (!isUnauthorizedError(err)) reportAdminError(err, 'Load failed');
      });
  }, [isAuthenticated, activeTab, saveSuccess, reportAdminError]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'prices') return;
    getAdminPrices()
      .then((items) => setEditedPrices(enrichPrices(items.map(mapPriceFromApi))))
      .catch((err) => {
        if (!isUnauthorizedError(err)) reportAdminError(err, 'Load failed');
      });
  }, [isAuthenticated, activeTab, saveSuccess, reportAdminError]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'articles') return;
    getAdminArticles()
      .then((items) => setEditedArticles(enrichArticles(items.map(mapArticleFromApi))))
      .catch((err) => {
        if (!isUnauthorizedError(err)) reportAdminError(err, 'Load failed');
      });
  }, [isAuthenticated, activeTab, saveSuccess, reportAdminError]);

  useEffect(() => {
    const onSessionExpired = () => handleSessionExpired();
    window.addEventListener(ADMIN_SESSION_EXPIRED_EVENT, onSessionExpired);
    return () => window.removeEventListener(ADMIN_SESSION_EXPIRED_EVENT, onSessionExpired);
  }, [handleSessionExpired]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const checkSession = () => {
      if (isAuthTokenExpired()) {
        handleSessionExpired();
      }
    };

    checkSession();
    const intervalId = window.setInterval(checkSession, 60_000);
    const onFocus = () => checkSession();
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkSession();
      }
    };

    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isAuthenticated, handleSessionExpired]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'appointments') return;

    setAppointmentsLoading(true);
    getAppointments(appointmentStatusFilter ? { status: appointmentStatusFilter } : undefined)
      .then(setAppointments)
      .catch((err) => {
        if (!isUnauthorizedError(err)) {
          setAppointments([]);
        }
      })
      .finally(() => setAppointmentsLoading(false));
  }, [isAuthenticated, activeTab, saveSuccess, appointmentStatusFilter]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { access_token } = await adminLogin({ username: username.trim(), password });
      setAuthToken(access_token);
      setIsAuthenticated(true);
      setAuthError('');
    } catch {
      setAuthError(
        locale === 'uz' ? "Noto'g'ri foydalanuvchi nomi yoki parol!" :
        locale === 'ru' ? "Неверное имя пользователя или пароль!" :
                          "Incorrect username or password!"
      );
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    clearAuthToken();
    setAuthError('');
  };

  // Helper trigger save notification
  const triggerSaveNotification = (message: string) => {
    setSaveSuccess(message);
    setTimeout(() => setSaveSuccess(null), 3000);
  };

  // 1. SAVE CLINIC DETAILS
  const handleSaveClinic = async () => {
    onSaveLocalData('dictionary', editedFullDict);

    try {
      for (const rating of editedRatings) {
        const payload = mapClinicRatingToCreatePayload(rating);
        const isApiRecord = /^[0-9a-f-]{36}$/i.test(rating.id);
        if (isApiRecord) {
          await updateClinicRating(rating.id, payload);
        } else {
          await createClinicRating(payload);
        }
      }
      await onRefreshCms();
      triggerSaveNotification(
        locale === 'uz' ? "Klinika ma'lumotlari muvaffaqiyatli saqlandi!" :
        locale === 'ru' ? "Информация о клинике успешно сохранена!" :
                          "Clinic information saved successfully!"
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? 'Saqlashda xatolik' : 'Save failed');
    }
  };

  // 2. SAVE/UPDATE DOCTORS
  const handleSelectDoctorForEdit = (doc: Doctor) => {
    setSelectedDoctorId(doc.id);
    setDoctorForm(doc);
    setDoctorPhotoFile(null);
    setIsAddingDoctor(false);
  };

  const handleCreateNewDoctorButton = () => {
    setSelectedDoctorId(null);
    setDoctorForm({
      id: `doc-${Date.now()}`,
      name: { uz: '', ru: '', en: '' },
      role: { uz: '', ru: '', en: '' },
      bio: { uz: '', ru: '', en: '' },
      experience: { uz: '5', ru: '5', en: '5' },
      education: { uz: '', ru: '', en: '' },
      photo: null,
    });
    setDoctorPhotoFile(null);
    setIsAddingDoctor(true);
  };

  const handleSaveDoctor = async () => {
    if (!isLocalizedFilled(doctorForm.name, 'uz') || !isLocalizedFilled(doctorForm.role, 'uz')) {
      alert(
        locale === 'uz'
          ? "Kamida o'zbek tilida ism va mutaxassislik to'ldirilishi shart."
          : locale === 'ru'
            ? 'Обязательно заполните имя и специализацию хотя бы на узбекском.'
            : 'Name and role in Uzbek are required at minimum.'
      );
      return;
    }

    try {
      if (isAddingDoctor) {
        const payload = mapDoctorToCreatePayload(doctorForm);
        await createDoctor(payload, doctorPhotoFile);
      } else if (doctorForm.id) {
        const payload = mapDoctorToCreatePayload(doctorForm, {
          preservePhoto: !doctorPhotoFile,
        });
        await updateDoctor(doctorForm.id, payload, doctorPhotoFile);
      }

      await onRefresh();
      setSelectedDoctorId(null);
      setIsAddingDoctor(false);
      setDoctorPhotoFile(null);
      triggerSaveNotification(
        locale === 'uz' ? "Shifokor ma'lumotlari muvaffaqiyatli saqlandi!" :
        locale === 'ru' ? "Резюме врача успешно сохранено!" :
                          "Physician profile saved successfully!"
      );
    } catch (err) {
      reportAdminError(err, 'Save failed');
    }
  };

  const handleDeleteDoctor = async (docId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu shifokor reestrini o'chirmoqchimisiz?" : "Удалить профиль данного врача?")) return;

    try {
      await deleteDoctor(docId);
      await onRefresh();
      if (selectedDoctorId === docId) setSelectedDoctorId(null);
      triggerSaveNotification(locale === 'uz' ? "Muvaffaqiyatli o'chirildi!" : "Профиль удален!");
    } catch (err) {
      reportAdminError(err, 'Delete failed');
    }
  };

  // 3. EDIT SERVICES & CATEGORIES
  const handleSelectCategoryForEdit = (cat: ServiceCategory) => {
    setSelectedCategoryId(cat.id);
    setCategoryForm(cat);
    setCategoryImageFile(null);
    setIsAddingCategory(false);
    setSelectedSubServiceId(null);
    setIsAddingSubService(false);
    setSubServiceImageFile(null);
  };

  const handleCreateCategoryButton = () => {
    setSelectedCategoryId(null);
    setCategoryForm({
      id: `cat-${Date.now()}`,
      title: { uz: '', ru: '', en: '' },
      description: { uz: '', ru: '', en: '' },
      icon: 'Activity',
      image: null,
      subServices: []
    });
    setCategoryImageFile(null);
    setIsAddingCategory(true);
    setSelectedSubServiceId(null);
    setIsAddingSubService(false);
    setSubServiceImageFile(null);
  };

  const handleSaveCategory = async () => {
    if (!isLocalizedFilled(categoryForm.title, 'uz') || !categoryForm.id) return;

    try {
      const categoryData: ServiceCategory = {
        id: categoryForm.id,
        title: {
          uz: categoryForm.title?.uz?.trim() || '',
          ru: categoryForm.title?.ru?.trim() || '',
          en: categoryForm.title?.en?.trim() || '',
        },
        description: {
          uz: categoryForm.description?.uz?.trim() || '',
          ru: categoryForm.description?.ru?.trim() || '',
          en: categoryForm.description?.en?.trim() || '',
        },
        icon: categoryForm.icon || 'Activity',
        image: categoryForm.image ?? null,
        images: categoryForm.images,
        subServices: categoryForm.subServices || [],
      };

      const payload = mapServiceCategoryToPayload(categoryData, {
        preserveImage: !categoryImageFile,
      });

      if (isAddingCategory) {
        await createServiceCategory(payload, categoryImageFile);
      } else {
        await updateServiceCategory(categoryForm.id, payload, categoryImageFile);
      }

      await onRefresh();
      setSelectedCategoryId(null);
      setIsAddingCategory(false);
      setCategoryImageFile(null);
      triggerSaveNotification(locale === 'uz' ? "Kategoriya saqlandi!" : "Категория сохранена!");
    } catch (err) {
      reportAdminError(err, 'Save failed');
    }
  };

  const handleDeleteCategory = async (catId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu kategoriyani barcha ichki xizmatlari bilan o'chirmoqchimisiz?" : "Удалить категорию со всеми услугами?")) return;

    try {
      await deleteServiceCategory(catId);
      await onRefresh();
      if (selectedCategoryId === catId) setSelectedCategoryId(null);
      triggerSaveNotification(locale === 'uz' ? "Kategoriya o'chirildi!" : "Категория удалена!");
    } catch (err) {
      reportAdminError(err, 'Delete failed');
    }
  };

  const handleEditSubService = (sub: ServiceDetail) => {
    setSelectedSubServiceId(sub.id);
    setSubServiceForm(JSON.parse(JSON.stringify(sub)));
    setSubServiceImageFile(null);
    setIsAddingSubService(false);
  };

  const handleCreateSubServiceButton = () => {
    setSelectedSubServiceId(null);
    setSubServiceForm({
      id: `sub-${Date.now()}`,
      name: { uz: '', ru: '', en: '' },
      description: { uz: '', ru: '', en: '' },
      image: null,
    });
    setSubServiceImageFile(null);
    setIsAddingSubService(true);
  };

  const handleSaveSubService = async () => {
    if (!selectedCategoryId || !subServiceForm.id || !isLocalizedFilled(subServiceForm.name, 'uz')) return;

    const targetCat = editedCategories.find(c => c.id === selectedCategoryId);
    if (!targetCat) return;

    let updatedSubs = [...targetCat.subServices];
    const mappedSub: ServiceDetail = {
      id: subServiceForm.id,
      name: subServiceForm.name,
      description: subServiceForm.description,
      image: subServiceForm.image ?? null,
      images: subServiceForm.images,
    };

    if (isAddingSubService) {
      updatedSubs.push(mappedSub);
    } else {
      updatedSubs = updatedSubs.map(s => s.id === subServiceForm.id ? mappedSub : s);
    }

    const editedIndex = updatedSubs.findIndex(s => s.id === subServiceForm.id);
    const subImages = subServiceImageFile ? [subServiceImageFile] : [];

    const subPayloads = updatedSubs.map((sub, index) => {
      const isEdited = index === editedIndex;
      return mapSubServiceToPayload(sub, {
        preserveImage: !isEdited || !subServiceImageFile,
      });
    });

    const updatedCatObj = { ...targetCat, subServices: updatedSubs };

    try {
      await updateServiceCategory(
        selectedCategoryId,
        { sub_services: subPayloads },
        null,
        subImages,
      );
      await onRefresh();
      setCategoryForm(updatedCatObj);
      setIsAddingSubService(false);
      setSelectedSubServiceId(null);
      setSubServiceImageFile(null);
      triggerSaveNotification(locale === 'uz' ? "Xizmat saqlandi!" : "Услуга сохранена!");
    } catch (err) {
      reportAdminError(err, 'Save failed');
    }
  };

  const handleDeleteSubService = async (subId: string) => {
    if (!selectedCategoryId) return;
    if (!confirm(locale === 'uz' ? "Ushbu xizmatni o'chirib tashlamoqchimisiz?" : "Удалить эту услугу?")) return;

    const targetCat = editedCategories.find(c => c.id === selectedCategoryId);
    if (!targetCat) return;

    const updatedCatObj = {
      ...targetCat,
      subServices: targetCat.subServices.filter(s => s.id !== subId),
    };

    try {
      await updateServiceCategory(selectedCategoryId, {
        sub_services: updatedCatObj.subServices.map((sub) =>
          mapSubServiceToPayload(sub, { preserveImages: true })
        ),
      });
      await onRefresh();
      setCategoryForm(updatedCatObj);
      if (selectedSubServiceId === subId) {
        setSelectedSubServiceId(null);
        setIsAddingSubService(false);
      }
      triggerSaveNotification(locale === 'uz' ? "Xizmat o'chirildi!" : "Услуга удалена!");
    } catch (err) {
      reportAdminError(err, 'Delete failed');
    }
  };

  // 4. PRICE ITEM CRUD
  const handleEditPrice = (pr: PriceItem) => {
    setSelectedPriceId(pr.id);
    setPriceForm({
      ...pr,
      category: toPriceSectionCategory(pr.category),
      priceValue: pr.priceValue ?? parsePriceValue(pr.price),
    });
    setIsAddingPrice(false);
  };

  const handleCreatePriceBtn = () => {
    const category = getPriceCategoryOptions(locale)[0]?.id || 'dermatologiya';
    setSelectedPriceId(null);
    setPriceForm({
      id: `pr-${Date.now()}`,
      name: { uz: '', ru: '', en: '' },
      price: '100,000 UZS',
      priceValue: 100000,
      category,
      sortOrder: getNextSortOrderInCategory(category, editedPrices),
    });
    setIsAddingPrice(true);
  };

  const handleSavePriceItem = async () => {
    if (!isLocalizedFilled(priceForm.name, 'uz') || !priceForm.price || !priceForm.id) return;

    if (
      priceForm.sortOrder === undefined ||
      !Number.isFinite(priceForm.sortOrder) ||
      priceForm.sortOrder < 1
    ) {
      alert(
        locale === 'uz'
          ? "Tartib raqamini kiriting (1 dan boshlab, masalan: 5)."
          : locale === 'ru'
            ? 'Укажите порядковый номер (от 1, например: 5).'
            : 'Enter a sort order number (from 1, e.g. 5).',
      );
      return;
    }

    try {
      const serviceCategoryIds = serviceCategories.map((cat) => cat.id);
      const payload = mapPriceToCreatePayload(
        {
          ...priceForm,
          priceValue: priceForm.priceValue ?? parsePriceValue(priceForm.price || '0'),
          sortOrder: Math.round(priceForm.sortOrder),
        },
        serviceCategoryIds,
      );

      if (isAddingPrice) {
        await createPrice(payload);
      } else {
        await updatePrice(priceForm.id, payload);
      }

      await onRefresh();
      setSelectedPriceId(null);
      setIsAddingPrice(false);
      triggerSaveNotification(locale === 'uz' ? "Narx saqlandi!" : "Цена сохранена!");
    } catch (err) {
      reportAdminError(err, 'Save failed');
    }
  };

  const handleDeletePrice = async (prId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu narx bandini o'chirmoqchimisiz?" : "Удалить эту позицию в ценах?")) return;

    try {
      await deletePrice(prId);
      await onRefresh();
      if (selectedPriceId === prId) setSelectedPriceId(null);
      triggerSaveNotification(locale === 'uz' ? "Narx o'chirildi!" : "Позиция удалена!");
    } catch (err) {
      reportAdminError(err, 'Delete failed');
    }
  };

  // 5. ARTICLES CRUD
  const handleEditArticle = (art: Article) => {
    setSelectedArticleId(art.id);
    setArticleForm(art);
    setArticleImageFile(null);
    setIsAddingArticle(false);
  };

  const handleCreateArticleBtn = () => {
    setSelectedArticleId(null);
    setArticleForm({
      id: `art-${Date.now()}`,
      slug: `blog-${Date.now()}`,
      title: { uz: '', ru: '', en: '' },
      summary: { uz: '', ru: '', en: '' },
      content: { uz: '', ru: '', en: '' },
      author: {
        uz: 'Ashurov D.D.',
        ru: 'Ашуров Д.Д.',
        en: 'Dr. Ashurov'
      },
      date: new Date().toLocaleDateString('en-GB'),
      image: null,
      views: 0
    });
    setArticleImageFile(null);
    setIsAddingArticle(true);
  };

  const handleSaveArticle = async () => {
    if (!isLocalizedFilled(articleForm.title, 'uz') || !articleForm.id) return;

    try {
      if (isAddingArticle) {
        const payload = mapArticleToCreatePayload(articleForm);
        await createArticle(payload, articleImageFile);
      } else {
        const payload = mapArticleToCreatePayload(articleForm, {
          preserveImage: !articleImageFile,
        });
        await updateArticle(articleForm.id, payload, articleImageFile);
      }

      await onRefresh();
      setSelectedArticleId(null);
      setIsAddingArticle(false);
      setArticleImageFile(null);
      triggerSaveNotification(locale === 'uz' ? "Maqola saqlandi!" : "Статья сохранена!");
    } catch (err) {
      reportAdminError(err, 'Save failed');
    }
  };

  const handleDeleteArticle = async (artId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu maqolani o'chirmoqchimisiz?" : "Удалить эту статью?")) return;

    try {
      await deleteArticle(artId);
      await onRefresh();
      if (selectedArticleId === artId) setSelectedArticleId(null);
      triggerSaveNotification(locale === 'uz' ? "Maqola o'chirildi!" : "Статья удалена!");
    } catch (err) {
      reportAdminError(err, 'Delete failed');
    }
  };

  const handleCreateVideoBtn = () => {
    setSelectedVideoId(null);
    setVideoForm({
      id: `video-${Date.now()}`,
      title: emptyLocalized(),
      description: emptyLocalized(),
      category: emptyLocalized(),
      src: '',
      duration: '0:00',
    });
    setVideoFile(null);
    setVideoThumbnailFile(null);
    setIsAddingVideo(true);
  };

  const handleEditVideo = (video: ClinicVideo) => {
    setSelectedVideoId(video.id);
    setVideoForm(JSON.parse(JSON.stringify(video)));
    setVideoFile(null);
    setVideoThumbnailFile(null);
    setIsAddingVideo(false);
  };

  const handleSaveVideo = async () => {
    if (!isLocalizedFilled(videoForm.title, 'uz')) {
      alert(
        locale === 'uz'
          ? "Kamida o'zbek tilida sarlavha to'ldirilishi shart."
          : locale === 'ru'
            ? 'Обязательно заполните заголовок на узбекском.'
            : 'Uzbek title is required.',
      );
      return;
    }

    const hasExistingSrc = Boolean(videoForm.src?.trim());
    if (isAddingVideo && !videoFile) {
      alert(
        locale === 'uz'
          ? 'Video faylini qurilmadan yuklang (MP4, WebM yoki MOV).'
          : locale === 'ru'
            ? 'Загрузите видеофайл с устройства (MP4, WebM или MOV).'
            : 'Upload a video file from your device (MP4, WebM, or MOV).',
      );
      return;
    }

    if (!isAddingVideo && !videoFile && !hasExistingSrc) {
      alert(
        locale === 'uz'
          ? 'Video faylini yuklang yoki mavjud video saqlangan bo\'lishi kerak.'
          : locale === 'ru'
            ? 'Загрузите видеофайл или сохраните существующее видео.'
            : 'Upload a video file or keep the existing uploaded video.',
      );
      return;
    }

    try {
      const payload = mapClinicVideoToCreatePayload({
        ...(videoForm as ClinicVideo),
        src: videoForm.src?.trim() || '',
      });

      const files = { video: videoFile, thumbnail: videoThumbnailFile };

      if (isAddingVideo) {
        await createVideo(payload, files);
      } else if (videoForm.id) {
        await updateVideo(videoForm.id, payload, files);
      }

      await onRefreshCms();
      setSelectedVideoId(null);
      setIsAddingVideo(false);
      setVideoFile(null);
      setVideoThumbnailFile(null);
      triggerSaveNotification(
        locale === 'uz' ? 'Video saqlandi!' : locale === 'ru' ? 'Видео сохранено!' : 'Video saved!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? 'Videoni saqlashda xatolik' : 'Failed to save video');
    }
  };

  const handleDeleteVideo = async (videoId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu videoni o'chirmoqchimisiz?" : 'Удалить это видео?')) return;

    try {
      await deleteVideo(videoId);
      await onRefreshCms();
      if (selectedVideoId === videoId) setSelectedVideoId(null);
      triggerSaveNotification(
        locale === 'uz' ? "Video o'chirildi!" : locale === 'ru' ? 'Видео удалено!' : 'Video deleted!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? "Videoni o'chirishda xatolik" : 'Delete failed');
    }
  };

  const handleCreateResultBtn = () => {
    setSelectedResultId(null);
    setResultForm({
      id: `result-${Date.now()}`,
      title: emptyLocalized(),
      description: emptyLocalized(),
      service: emptyLocalized(),
      sessions: emptyLocalized(),
      beforeImage: '',
      afterImage: '',
    });
    setBeforeImageFile(null);
    setAfterImageFile(null);
    setIsAddingResult(true);
  };

  const handleEditResult = (result: TreatmentResult) => {
    setSelectedResultId(result.id);
    setResultForm(JSON.parse(JSON.stringify(result)));
    setBeforeImageFile(null);
    setAfterImageFile(null);
    setIsAddingResult(false);
  };

  const handleSaveResult = async () => {
    if (!isLocalizedFilled(resultForm.title, 'uz')) {
      alert(
        locale === 'uz'
          ? "Kamida o'zbek tilida sarlavha to'ldirilishi shart."
          : locale === 'ru'
            ? 'Обязательно заполните заголовок на узбекском.'
            : 'Uzbek title is required.',
      );
      return;
    }

    try {
      if (isAddingResult && (!beforeImageFile && !resultForm.beforeImage?.trim())) {
        alert(
          locale === 'uz'
            ? 'Oldin va keyin rasmlarini yuklang.'
            : locale === 'ru'
              ? 'Загрузите фото «до» и «после».'
              : 'Please upload before and after images.',
        );
        return;
      }

      const payload = mapTreatmentResultToCreatePayload(resultForm as TreatmentResult);
      const files = {
        before_image: beforeImageFile,
        after_image: afterImageFile,
      };

      if (isAddingResult) {
        await createTreatmentResult(payload, files);
      } else if (resultForm.id) {
        await updateTreatmentResult(resultForm.id, payload, files);
      }

      await onRefreshCms();
      setSelectedResultId(null);
      setIsAddingResult(false);
      setBeforeImageFile(null);
      setAfterImageFile(null);
      triggerSaveNotification(
        locale === 'uz' ? 'Natija saqlandi!' : locale === 'ru' ? 'Результат сохранен!' : 'Result saved!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? 'Natijani saqlashda xatolik' : 'Failed to save result');
    }
  };

  const handleDeleteResult = async (resultId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu natijani o'chirmoqchimisiz?" : 'Удалить этот результат?')) return;

    try {
      await deleteTreatmentResult(resultId);
      await onRefreshCms();
      if (selectedResultId === resultId) setSelectedResultId(null);
      triggerSaveNotification(
        locale === 'uz' ? "Natija o'chirildi!" : locale === 'ru' ? 'Результат удален!' : 'Result deleted!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? "Natijani o'chirishda xatolik" : 'Delete failed');
    }
  };

  const handleCreatePartnerBtn = () => {
    setSelectedPartnerId(null);
    setPartnerForm({
      id: `partner-${Date.now()}`,
      name: emptyLocalized(),
      logo: '',
    });
    setPartnerLogoFile(null);
    setIsAddingPartner(true);
  };

  const handleEditPartner = (partner: ClinicPartner) => {
    setSelectedPartnerId(partner.id);
    setPartnerForm(JSON.parse(JSON.stringify(partner)));
    setPartnerLogoFile(null);
    setIsAddingPartner(false);
  };

  const handleSavePartner = async () => {
    if (!isLocalizedFilled(partnerForm.name, 'uz')) {
      alert(
        locale === 'uz'
          ? "Kamida o'zbek tilida hamkor nomi to'ldirilishi shart."
          : locale === 'ru'
            ? 'Обязательно заполните название партнера на узбекском.'
            : 'Partner name in Uzbek is required.',
      );
      return;
    }

    try {
      if (isAddingPartner && !partnerLogoFile && !partnerForm.logo?.trim()) {
        alert(
          locale === 'uz'
            ? 'Hamkor logosini yuklang.'
            : locale === 'ru'
              ? 'Загрузите логотип партнера.'
              : 'Please upload a partner logo.',
        );
        return;
      }

      const payload = mapPartnerToCreatePayload(partnerForm as ClinicPartner);

      if (isAddingPartner) {
        await createPartner(payload, partnerLogoFile);
      } else if (partnerForm.id) {
        await updatePartner(partnerForm.id, payload, partnerLogoFile);
      }

      await onRefreshCms();
      setSelectedPartnerId(null);
      setIsAddingPartner(false);
      setPartnerLogoFile(null);
      triggerSaveNotification(
        locale === 'uz' ? 'Hamkor saqlandi!' : locale === 'ru' ? 'Партнер сохранен!' : 'Partner saved!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? 'Hamkorni saqlashda xatolik' : 'Failed to save partner');
    }
  };

  const handleDeletePartner = async (partnerId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu hamkorni o'chirmoqchimisiz?" : 'Удалить этого партнера?')) return;

    try {
      await deletePartner(partnerId);
      await onRefreshCms();
      if (selectedPartnerId === partnerId) setSelectedPartnerId(null);
      triggerSaveNotification(
        locale === 'uz' ? "Hamkor o'chirildi!" : locale === 'ru' ? 'Партнер удален!' : 'Partner deleted!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? "Hamkorni o'chirishda xatolik" : 'Delete failed');
    }
  };

  const handleCreateCustomerReviewBtn = () => {
    setSelectedCustomerReviewId(null);
    setCustomerReviewForm({
      id: `review-${Date.now()}`,
      authorName: '',
      rating: 5,
      comment: emptyLocalized(),
      service: emptyLocalized(),
      date: new Date().toISOString().slice(0, 10),
      published: true,
    });
    setIsAddingCustomerReview(true);
  };

  const handleEditCustomerReview = (review: CustomerReview) => {
    setSelectedCustomerReviewId(review.id);
    setCustomerReviewForm(JSON.parse(JSON.stringify(review)));
    setIsAddingCustomerReview(false);
  };

  const handleSaveCustomerReview = async () => {
    if (!customerReviewForm.authorName?.trim() || !isLocalizedFilled(customerReviewForm.comment, 'uz')) {
      alert(
        locale === 'uz'
          ? "Ism va kamida o'zbek tilida fikr matni to'ldirilishi shart."
          : locale === 'ru'
            ? 'Укажите имя и текст отзыва хотя бы на узбекском.'
            : 'Name and review text in Uzbek are required.',
      );
      return;
    }

    const review: CustomerReview = {
      id: customerReviewForm.id || `review-${Date.now()}`,
      authorName: customerReviewForm.authorName.trim(),
      rating: Math.min(5, Math.max(1, customerReviewForm.rating ?? 5)),
      comment: customerReviewForm.comment as CustomerReview['comment'],
      service: isLocalizedFilled(customerReviewForm.service, 'uz') ||
        isLocalizedFilled(customerReviewForm.service, 'ru') ||
        isLocalizedFilled(customerReviewForm.service, 'en')
        ? (customerReviewForm.service as CustomerReview['service'])
        : undefined,
      date: customerReviewForm.date || new Date().toISOString().slice(0, 10),
      published: Boolean(customerReviewForm.published),
    };

    try {
      if (isAddingCustomerReview) {
        await createAdminReview(mapReviewToAdminCreatePayload(review));
      } else if (review.id) {
        await patchReview(review.id, { published: review.published });
      }

      const updated = await getAdminReviews();
      setEditedCustomerReviews(updated.map(mapReviewFromApi));
      setSelectedCustomerReviewId(null);
      setIsAddingCustomerReview(false);
      triggerSaveNotification(
        locale === 'uz' ? 'Fikr saqlandi!' : locale === 'ru' ? 'Отзыв сохранен!' : 'Review saved!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? 'Fikrni saqlashda xatolik' : 'Save failed');
    }
  };

  const handleDeleteCustomerReview = async (reviewId: string) => {
    if (!confirm(locale === 'uz' ? "Ushbu fikrni o'chirmoqchimisiz?" : 'Удалить этот отзыв?')) return;

    try {
      await deleteReview(reviewId);
      const updated = await getAdminReviews();
      setEditedCustomerReviews(updated.map(mapReviewFromApi));
      if (selectedCustomerReviewId === reviewId) setSelectedCustomerReviewId(null);
      triggerSaveNotification(
        locale === 'uz' ? "Fikr o'chirildi!" : locale === 'ru' ? 'Отзыв удален!' : 'Review deleted!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? "Fikrni o'chirishda xatolik" : 'Delete failed');
    }
  };

  const handleToggleCustomerReviewPublished = async (reviewId: string) => {
    const target = editedCustomerReviews.find((item) => item.id === reviewId);
    if (!target) return;

    try {
      await patchReview(reviewId, { published: !target.published });
      const updated = await getAdminReviews();
      setEditedCustomerReviews(updated.map(mapReviewFromApi));
      triggerSaveNotification(
        locale === 'uz' ? 'Holat yangilandi!' : locale === 'ru' ? 'Статус обновлен!' : 'Status updated!',
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? 'Holatni yangilashda xatolik' : 'Update failed');
    }
  };

  const handleAppointmentStatusChange = async (appointmentId: string, status: AppointmentStatus) => {
    try {
      await updateAppointmentStatus(appointmentId, status);
      const updated = await getAppointments(
        appointmentStatusFilter ? { status: appointmentStatusFilter } : undefined,
      );
      setAppointments(updated);
      triggerSaveNotification(locale === 'uz' ? 'Status yangilandi!' : 'Статус обновлен!');
    } catch (err) {
      reportAdminError(err, 'Update failed');
    }
  };

  const handleImportCatalogPrices = async () => {
    const catalogItems = getCatalogPrices();
    if (!catalogItems.length) return;

    const confirmed = confirm(
      locale === 'uz'
        ? `${catalogItems.length} ta narxni API ga yuklashni tasdiqlaysizmi?`
        : locale === 'ru'
          ? `Загрузить ${catalogItems.length} цен в API?`
          : `Import ${catalogItems.length} prices to the API?`,
    );
    if (!confirmed) return;

    setPriceImportLoading(true);
    try {
      const result = await importPrices({
        items: catalogItems.map((item) =>
          mapPriceToCreatePayload(item, serviceCategories.map((cat) => cat.id)),
        ),
      });
      await onRefresh();
      triggerSaveNotification(
        locale === 'uz'
          ? `Narxlar yuklandi: ${result.imported}`
          : `Импортировано: ${result.imported}`,
      );
    } catch (err) {
      reportAdminError(err, locale === 'uz' ? 'Narx importida xatolik' : 'Price import failed');
    } finally {
      setPriceImportLoading(false);
    }
  };


  // LOGIN SECURITY SCREEN
  if (!isAuthenticated) {
    return (
      <div className="py-20 max-w-md mx-auto px-4 text-center min-h-[70vh] flex flex-col justify-center">
        <div className="bg-brand-white p-8 rounded-3xl border border-brand-sectiongray shadow-2xl relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-brand-dark-navy rounded-full flex items-center justify-center border-4 border-brand-white text-brand-gold shadow-lg">
            <Lock className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-brand-text-primary mt-6 mb-1">
            Radeski Clinical Locksmith
          </h3>
          <span className="text-[10px] text-brand-gold tracking-widest uppercase font-mono block mb-6">
             {locale === 'uz' ? "Faqat ma'muriyat uchun kirish" : "Административный замок"}
          </span>

          <form onSubmit={handleLogin} className="space-y-4.5">
            <div>
              <label className="block text-left text-[11px] font-bold text-brand-text-muted uppercase tracking-wider mb-1">
                {locale === 'uz' ? "Foydalanuvchi:" : "Имя пользователя:"}
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full px-4 py-2.5 bg-brand-offwhite border border-brand-sectiongray rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold-light focus:bg-brand-white text-xs text-brand-text-primary font-medium"
              />
            </div>

            <div>
              <label className="block text-left text-[11px] font-bold text-brand-text-muted uppercase tracking-wider mb-1">
                {locale === 'uz' ? "Maxfiy Kalit parol:" : "Пароль доступа:"}
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-brand-offwhite border border-brand-sectiongray rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold-light focus:bg-brand-white text-xs text-brand-text-primary font-medium"
              />
            </div>

            {authError && (
              <p className="text-[11px] text-red-600 font-bold bg-red-50 py-1.5 px-3 rounded-lg border border-red-100 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-brand-dark-navy hover:bg-brand-gold hover:text-white text-brand-gold font-bold text-xs rounded-xl tracking-wider uppercase transition-all shadow-md mt-6 cursor-pointer"
            >
              {locale === 'uz' ? "Tizimga kirish" : "Войти в панель"}
            </button>
          </form>

          <p className="text-[10px] text-brand-text-muted font-light mt-6 leading-relaxed">
            {locale === 'uz' ? "Birlamchi ma'lumotlar: login: admin, parol: radeski2026" : 
                               "Стандартный вход: имя: admin, пароль: radeski2026"}
          </p>

          <button onClick={onClose} className="mt-4 text-[10px] text-brand-gold hover:underline flex items-center gap-1 justify-center mx-auto cursor-pointer">
            <ArrowLeft className="w-3 h-3" />
            {locale === 'uz' ? "Saytga qaytish" : "Назад на сайт"}
          </button>
        </div>
      </div>
    );
  }

  // LOGGED IN PORTAL VIEW WITH ADMIN CONTROLS
  return (
    <div className="py-8 max-w-7xl mx-auto px-4" id="radeski-admin-root">
      {/* Save Toast Status Banner */}
      <AnimatePresence>
        {saveSuccess && (
          <div className="fixed bottom-10 right-10 bg-emerald-600 text-white font-bold text-xs px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-50 border border-emerald-500">
            <Check className="w-4 h-4 bg-white/20 p-0.5 rounded-full" />
            <span>{saveSuccess}</span>
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-brand-sectiongray pb-5 mb-8">
        <div>
          <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono">
            Radeski Clinical Administration Studio v2.0
          </span>
          <h2 className="text-2xl font-black text-brand-text-primary tracking-tight mt-1">
            {locale === 'uz' ? "Boshqaruv paneli" : "Административный пульт"}
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => { onResetLocalData(); void onRefresh(); void onRefreshCms(); }}
            className="px-3.5 py-2 hover:bg-red-50 border border-brand-sectiongray text-red-600 hover:border-red-200 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Reset local clinic settings and reload API data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{locale === 'uz' ? "Arxivni tozalash (Asliga qaytarish)" : "Сбросить на исходные"}</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3.5 py-2 bg-brand-offwhite text-brand-text-muted hover:bg-brand-sectiongray/50 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{locale === 'uz' ? "Chiqish" : "Выйти"}</span>
          </button>
        </div>
      </div>

      {/* Grid container with tabs and editing layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left selector menu column */}
        <div className="lg:col-span-3 space-y-1.5 bg-brand-white p-4.5 rounded-2xl border border-brand-sectiongray">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'dashboard' 
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm' 
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Umumiy tahlillar" : "Аналитика"}</span>
          </button>

          <button
            onClick={() => setActiveTab('clinic')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'clinic' 
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm' 
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <Building className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Klinika sozlamalari" : "Инфо & Рейтинги"}</span>
          </button>

          <button
            onClick={() => setActiveTab('doctors')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'doctors' 
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm' 
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Shifokorlar reestri" : "Реестр врачей"}</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'services' 
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm' 
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <Activity className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Xizmatlar katalogi" : "Услуги / Категории"}</span>
          </button>

          <button
            onClick={() => setActiveTab('prices')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'prices' 
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm' 
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <CreditCard className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Preyskurant (Narxlar)" : "Прейскурант цен"}</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'articles' 
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm' 
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Maqolalar / Blog" : "Статьи / Новости"}</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'videos'
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm'
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <Film className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Klinika videolari" : "Видео клиники"}</span>
          </button>

          <button
            onClick={() => setActiveTab('results')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'results'
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm'
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Davolash natijalari" : "Результаты лечения"}</span>
          </button>

          <button
            onClick={() => setActiveTab('partners')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'partners'
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm'
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <Handshake className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? 'Hamkorlar' : locale === 'ru' ? 'Партнеры' : 'Partners'}</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'testimonials'
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm'
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <MessageSquareQuote className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? 'Mijozlar fikri' : locale === 'ru' ? 'Отзывы клиентов' : 'Client reviews'}</span>
          </button>

          <button
            onClick={() => setActiveTab('appointments')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold flex items-center gap-3 transition-colors cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-brand-dark-navy text-[#A6843F] shadow-sm'
                : 'text-brand-text-muted hover:bg-brand-offwhite hover:text-brand-text-primary'
            }`}
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>{locale === 'uz' ? "Onlayn arizalar" : "Заявки CRM"}</span>
          </button>
        </div>


        {/* Right workspace interactive module */}
        <div className="lg:col-span-9 min-w-0 bg-brand-white p-6 sm:p-8 rounded-2xl border border-brand-sectiongray min-h-[500px]">
          
          {/* TAB 1: OVERVIEW/DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h3 className="text-base font-bold text-brand-text-primary pb-3 border-b border-brand-sectiongray">
                {locale === 'uz' ? "Klinik ma'lumotlar tahlili" : "Общая аналитика клиники"}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-8 gap-4">
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Shifokorlar" : "Врачи"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedDoctors.length}</span>
                </div>
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Kategoriyalar" : "Категории услуг"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedCategories.length}</span>
                </div>
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Narxlar bandi" : "Позиций цен"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedPrices.length}</span>
                </div>
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Maqolalar" : "Статей блога"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedArticles.length}</span>
                </div>
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Videolar" : "Видео"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedVideos.length}</span>
                </div>
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Natijalar" : "Результаты"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedResults.length}</span>
                </div>
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Hamkorlar" : "Партнеры"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedPartners.length}</span>
                </div>
                <div className="p-5 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                  <span className="text-[10px] uppercase text-brand-text-muted font-bold block">{locale === 'uz' ? "Mijoz fikrlari" : "Отзывы"}</span>
                  <span className="text-3xl font-black text-brand-gold mt-1 block">{editedCustomerReviews.length}</span>
                </div>
              </div>

              <div className="p-4 bg-brand-gold-light/5 border border-brand-gold-light/20 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="text-xs text-brand-text-secondary leading-relaxed">
                  <p className="font-bold text-brand-gold-dark mb-1">
                    {locale === 'uz' ? "Tizim qanday ishlaydi?" : "Как работает система?"}
                  </p>
                  <p>
                    {locale === 'uz' ? "Ushbu ma'muriy pult yordamida o'zgartirilgan barcha ma'lumotlar drayverga daxldor bo'lib, darhol foydalanuvchi interfeysida (bosh sahifa, shifokorlar sahifasi, akkreditatsiya gridi, narxlar jadvali va xizmatlar) real vaqtda aks ettiriladi. Ma'lumotlarni bemalol o'zgartiring va saqlab oling." : 
                                       "Все данные, сохраненные через эту панель, мгновенно заменяют статический контент на живом сайте. Изменения сохраняются и не теряются при следующих сессиях."}
                  </p>
                </div>
              </div>

              {/* Patient review preview edits block */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold text-brand-text-primary uppercase tracking-wider">{locale === 'uz' ? "Tezkor havola" : "Адресный замок"}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button onClick={() => setActiveTab('clinic')} className="p-4 bg-brand-white hover:bg-brand-offwhite transition-colors border border-brand-sectiongray rounded-xl text-left flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-text-primary">{locale === 'uz' ? "Klinika manzili va raqamini o'zgartirish" : "Изменить адрес и контакты"}</span>
                    <Plus className="w-4 h-4 text-brand-gold" />
                  </button>
                  <button onClick={() => setActiveTab('doctors')} className="p-4 bg-brand-white hover:bg-brand-offwhite transition-colors border border-brand-sectiongray rounded-xl text-left flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-text-primary">{locale === 'uz' ? "Yangi shifokor jalb etish profili" : "Добавить врача в реестр"}</span>
                    <Plus className="w-4 h-4 text-brand-gold" />
                  </button>
                </div>
              </div>
            </div>
          )}


          {/* TAB 2: CLINIC RATINGS & INFO */}
          {activeTab === 'clinic' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? "Klinika Reytinglari va Manzil ma'lumotlari" : "Редактирование контактов и отзывов"}
                </h3>
                <button
                  onClick={handleSaveClinic}
                  className="px-4 py-2 bg-brand-dark-navy text-[#A6843F] font-bold text-xs rounded-lg flex items-center gap-1.5 hover:bg-brand-gold hover:text-white transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{locale === 'uz' ? "Muvaffaqiyatli saqlash" : "Сохранить всё"}</span>
                </button>
              </div>

              {/* Contact numbers edit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-brand-text-muted uppercase tracking-wider mb-1">
                    {locale === 'uz' ? "Yagona Telefon Raqami:" : "Единый телефон:"}
                  </label>
                  <input
                    type="text"
                    value="+998 (73) 200-73-73"
                    readOnly
                    className="w-full px-4.5 py-2.5 bg-brand-offwhite/60 border border-brand-sectiongray rounded-xl text-xs font-mono opacity-70"
                  />
                  <p className="text-[10px] text-brand-text-muted mt-1">
                    {locale === 'uz' ? 'Telefon raqami barcha tillarda bir xil.' : 'Номер телефона одинаков для всех языков.'}
                  </p>
                </div>
              </div>

              <LocalizedFieldGroup
                label={locale === 'uz' ? 'Ish vaqti' : locale === 'ru' ? 'Часы работы' : 'Working hours'}
                values={{
                  uz: editedFullDict.uz.workingHoursValue,
                  ru: editedFullDict.ru.workingHoursValue,
                  en: editedFullDict.en.workingHoursValue,
                }}
                onChange={(values) =>
                  setEditedFullDict((prev) => ({
                    ...prev,
                    uz: { ...prev.uz, workingHoursValue: values.uz },
                    ru: { ...prev.ru, workingHoursValue: values.ru },
                    en: { ...prev.en, workingHoursValue: values.en },
                  }))
                }
              />

              <LocalizedFieldGroup
                label={locale === 'uz' ? 'Klinika manzili' : locale === 'ru' ? 'Адрес клиники' : 'Clinic address'}
                values={{
                  uz: editedFullDict.uz.addressValue,
                  ru: editedFullDict.ru.addressValue,
                  en: editedFullDict.en.addressValue,
                }}
                onChange={(values) =>
                  setEditedFullDict((prev) => ({
                    ...prev,
                    uz: { ...prev.uz, addressValue: values.uz },
                    ru: { ...prev.ru, addressValue: values.ru },
                    en: { ...prev.en, addressValue: values.en },
                  }))
                }
              />

              {/* Platform ratings edit */}
              <div className="space-y-4 pt-4 border-t border-brand-sectiongray">
                <h4 className="text-xs font-bold text-brand-text-primary uppercase tracking-wider">
                  {locale === 'uz' ? "Ijtimoiy & Xarita reytinglari" : "Рейтинги клиники на картах"}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {editedRatings.map((rating, idx) => (
                    <div key={rating.id} className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-brand-text-primary">{rating.platform}</span>
                        <span>{getPlatformLogo(rating.platform)}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] text-brand-text-muted uppercase">Ball (1-5):</label>
                          <input
                            type="text"
                            value={rating.rating}
                            onChange={(e) => {
                              const val = e.target.value;
                              setEditedRatings(prev => {
                                const next = [...prev];
                                next[idx].rating = val;
                                return next;
                              });
                            }}
                            className="w-full px-2 py-1 bg-brand-white border border-brand-sectiongray rounded-lg text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-brand-text-muted uppercase">Fikrlar soni:</label>
                          <input
                            type="number"
                            value={rating.count}
                            onChange={(e) => {
                              const val = parseInt(e.target.value) || 0;
                              setEditedRatings(prev => {
                                const next = [...prev];
                                next[idx].count = val;
                                return next;
                              });
                            }}
                            className="w-full px-2 py-1 bg-brand-white border border-brand-sectiongray rounded-lg text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {/* TAB 3: DOCTORS REGISTRY */}
          {activeTab === 'doctors' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? "Shifokorlar jamoasini boshqarish" : "Редактирование профилей медперсонала"}
                </h3>
                
                {!isAddingDoctor && selectedDoctorId === null && (
                  <button
                    onClick={handleCreateNewDoctorButton}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 transition-all hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? "Yangi shifokor" : "Добавить врача"}</span>
                  </button>
                )}
              </div>

              {/* LIST / DETAIL SPLIT AREA */}
              {selectedDoctorId === null && !isAddingDoctor ? (
                // DOCTOR DIRECTORY ROSTER
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editedDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray flex gap-3 items-start overflow-hidden"
                    >
                      <div className="flex gap-3 flex-1 min-w-0">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-brand-sectiongray bg-brand-white shrink-0">
                          {doc.photo ? (
                            <img src={doc.photo} alt={doc.name[locale]} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                          ) : (
                            <div className="w-full h-full bg-brand-offwhite flex items-center justify-center text-[8px] text-brand-text-muted">—</div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1 overflow-hidden">
                          <h4
                            className="font-bold text-xs sm:text-sm text-brand-text-primary truncate"
                            title={doc.name[locale]}
                          >
                            {doc.name[locale]}
                          </h4>
                          <p
                            className="text-[10px] text-brand-gold font-medium leading-normal block mt-0.5 truncate"
                            title={doc.role[locale]}
                          >
                            {doc.role[locale]}
                          </p>
                          <span className="text-[9px] text-brand-text-muted font-mono block truncate">
                            {doc.experience[locale]} {locale === 'uz' ? 'yil amaliyot' : 'лет стажа'}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-1 shrink-0">
                        <button
                          onClick={() => handleSelectDoctorForEdit(doc)}
                          className="p-1.5 bg-brand-white hover:bg-brand-gold-light/20 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteDoctor(doc.id)}
                          className="p-1.5 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // EDIT / ADD SINGLE PHYSICIAN PROFILE FORM
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-sectiongray">
                    <div>
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest font-mono">
                        {isAddingDoctor ? 'New Specialist Portfolio' : 'Modifying Specialist Portfolio'}
                      </span>
                      <h4 className="text-sm font-bold text-brand-text-primary mt-1">
                        {locale === 'uz'
                          ? isAddingDoctor
                            ? "Yangi shifokor profilini yaratish"
                            : "Shifokor profilini tahrirlash"
                          : isAddingDoctor
                            ? 'Создание профиля врача'
                            : 'Редактирование профиля врача'}
                      </h4>
                    </div>
                    <button
                      onClick={() => { setSelectedDoctorId(null); setIsAddingDoctor(false); }}
                      className="self-start sm:self-auto px-3 py-2 text-xs text-brand-text-muted hover:text-brand-text-primary hover:bg-brand-offwhite flex items-center gap-1.5 font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Orqaga reestrga" : "Назад к списку"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_260px] gap-6 items-start">
                    <div className="space-y-4 min-w-0">
                      <LocalizedFieldGroup
                        label={locale === 'uz' ? 'F.I.SH.' : locale === 'ru' ? 'Ф.И.О.' : 'Full name'}
                        hint={locale === 'uz' ? "Shifokorning to'liq ism familiyasi" : undefined}
                        values={{
                          uz: doctorForm.name?.uz || '',
                          ru: doctorForm.name?.ru || '',
                          en: doctorForm.name?.en || '',
                        }}
                        onChange={(values) => setDoctorForm((prev) => ({ ...prev, name: values }))}
                      />

                      <LocalizedFieldGroup
                        label={locale === 'uz' ? 'Mutaxassisligi' : locale === 'ru' ? 'Специализация' : 'Specialty / role'}
                        values={{
                          uz: doctorForm.role?.uz || '',
                          ru: doctorForm.role?.ru || '',
                          en: doctorForm.role?.en || '',
                        }}
                        onChange={(values) => setDoctorForm((prev) => ({ ...prev, role: values }))}
                      />

                      <LocalizedFieldGroup
                        label={locale === 'uz' ? 'Ish joyi' : locale === 'ru' ? 'Место работы' : 'Workplace'}
                        values={{
                          uz: doctorForm.education?.uz || '',
                          ru: doctorForm.education?.ru || '',
                          en: doctorForm.education?.en || '',
                        }}
                        onChange={(values) => setDoctorForm((prev) => ({ ...prev, education: values }))}
                        multiline
                        rows={2}
                      />

                      <LocalizedFieldGroup
                        label={locale === 'uz' ? 'Tajriba' : locale === 'ru' ? 'Стаж' : 'Experience'}
                        hint={locale === 'uz' ? "Masalan: 10+ yil" : locale === 'ru' ? 'Например: 10+ лет' : 'e.g. 10+ years'}
                        values={{
                          uz: doctorForm.experience?.uz || '',
                          ru: doctorForm.experience?.ru || '',
                          en: doctorForm.experience?.en || '',
                        }}
                        onChange={(values) => setDoctorForm((prev) => ({ ...prev, experience: values }))}
                      />
                    </div>

                    <div className="xl:sticky xl:top-4 rounded-xl border border-brand-sectiongray bg-brand-offwhite/40 p-4 space-y-3">
                      <p className="text-xs font-bold text-brand-text-primary">
                        {locale === 'uz' ? "Shifokor surati" : locale === 'ru' ? 'Фото врача' : "Doctor's photo"}
                      </p>
                      <ImageUploadField
                        label=""
                        currentImageUrl={doctorForm.photo}
                        file={doctorPhotoFile}
                        onFileChange={setDoctorPhotoFile}
                        helperText={locale === 'uz' ? "JPG, PNG, WebP yoki GIF — maks. 5 MB" : "JPG, PNG, WebP или GIF — макс. 5 МБ"}
                      />
                    </div>
                  </div>

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Biografiya / professional rezyume' : locale === 'ru' ? 'Биография / резюме' : 'Biography / professional summary'}
                    hint={locale === 'uz' ? "Shifokor haqida batafsil ma'lumot" : undefined}
                    values={{
                      uz: doctorForm.bio?.uz || '',
                      ru: doctorForm.bio?.ru || '',
                      en: doctorForm.bio?.en || '',
                    }}
                    onChange={(values) => setDoctorForm((prev) => ({ ...prev, bio: values }))}
                    multiline
                    rows={5}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1.5">
                        {locale === 'uz' ? 'Tartib raqami' : locale === 'ru' ? 'Порядок' : 'Sort order'}
                      </label>
                      <input
                        type="number"
                        min={0}
                        value={doctorForm.sortOrder ?? 0}
                        onChange={(e) =>
                          setDoctorForm((prev) => ({
                            ...prev,
                            sortOrder: Number.parseInt(e.target.value, 10) || 0,
                          }))
                        }
                        className="w-full max-w-xs px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                      />
                    </div>
                    <label className="flex items-center gap-2 text-xs font-bold text-brand-text-primary pt-5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Boolean(doctorForm.isFeatured)}
                        onChange={(e) =>
                          setDoctorForm((prev) => ({ ...prev, isFeatured: e.target.checked }))
                        }
                        className="rounded border-brand-sectiongray text-brand-gold focus:ring-brand-gold/30"
                      />
                      {locale === 'uz' ? 'Tavsiya etilgan (bosh sahifa)' : locale === 'ru' ? 'Рекомендуемый (главная)' : 'Featured (homepage)'}
                    </label>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-brand-sectiongray">
                    <button
                      onClick={() => { setSelectedDoctorId(null); setIsAddingDoctor(false); }}
                      className="px-4 py-2 hover:bg-brand-offwhite text-brand-text-muted text-xs font-bold rounded-lg cursor-pointer"
                    >
                      {locale === 'uz' ? "Bekor qilish" : "Отмена"}
                    </button>
                    <button
                      onClick={handleSaveDoctor}
                      className="px-5 py-2.5 bg-brand-dark-navy text-[#A6843F] hover:bg-brand-gold hover:text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Klinik reestrga qo'shish" : "Сохранить профиль"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}


          {/* TAB 4: SERVICE CATEGORIES & SUB-SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? "Xizmat turlarini tahrirlash" : "Управление категорями услуг"}
                </h3>
                
                {!isAddingCategory && selectedCategoryId === null && (
                  <button
                    onClick={handleCreateCategoryButton}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? "Yangi Kategoriya" : "Добавить категорию"}</span>
                  </button>
                )}
              </div>

              {selectedCategoryId === null && !isAddingCategory ? (
                // 1. SERVICES CATEGORIES LIST
                <div className="space-y-3">
                  {editedCategories.map((cat, index) => (
                    <div key={cat.id} className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-brand-gold/10 text-brand-gold text-xs font-mono font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-xs sm:text-sm text-brand-text-primary">{cat.title[locale]}</h4>
                          <span className="text-[10px] text-brand-text-muted mt-0.5 block">{cat.subServices.length} {locale === 'uz' ? "ta amaliyot xizmati kiritilgan" : "процедур уже добавлено"}</span>
                        </div>
                      </div>

                      <div className="flex gap-1.5">
                        <button
                          onClick={() => handleSelectCategoryForEdit(cat)}
                          className="px-3 py-1.5 bg-brand-white hover:bg-brand-gold-light/15 text-brand-gold-dark border border-brand-sectiongray text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
                        >
                          {locale === 'uz' ? "Tuzatish (Yangi xizmat qo'shish)" : "Изменить / Добавить услуги"}
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(cat.id)}
                          className="p-1.5 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // 2. DETAILED CATEGORY FORM WITH NESTED SUB-SERVICES CRUD
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      Category & Sub-services Manager
                    </span>
                    <button
                      onClick={() => { setSelectedCategoryId(null); setIsAddingCategory(false); }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Kategoriyalar ro'yxatiga" : "Назад к списку категорий"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Id Kadi (Unikal kalit, masalan: dermatologiya):</label>
                      <input
                        type="text"
                        disabled={!isAddingCategory}
                        value={categoryForm.id || ''}
                        onChange={(e) => setCategoryForm(prev => ({ ...prev, id: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono disabled:opacity-55"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <LocalizedFieldGroup
                        label={locale === 'uz' ? 'Kategoriya nomi' : locale === 'ru' ? 'Название категории' : 'Category title'}
                        values={{
                          uz: categoryForm.title?.uz || '',
                          ru: categoryForm.title?.ru || '',
                          en: categoryForm.title?.en || '',
                        }}
                        onChange={(values) => setCategoryForm((prev) => ({ ...prev, title: values }))}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <LocalizedFieldGroup
                        label={locale === 'uz' ? 'Asosiy tavsif' : locale === 'ru' ? 'Описание категории' : 'Category description'}
                        values={{
                          uz: categoryForm.description?.uz || '',
                          ru: categoryForm.description?.ru || '',
                          en: categoryForm.description?.en || '',
                        }}
                        onChange={(values) => setCategoryForm((prev) => ({ ...prev, description: values }))}
                        multiline
                        rows={2}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <ImageUploadField
                        label={locale === 'uz' ? 'Kategoriya rasmi' : locale === 'ru' ? 'Изображение категории' : 'Category image'}
                        currentImageUrl={getLocalizedImage(categoryForm.images, locale) ?? categoryForm.image}
                        file={categoryImageFile}
                        onFileChange={setCategoryImageFile}
                        helperText={locale === 'uz' ? 'JPG, PNG, WebP yoki GIF — maks. 5 MB. Barcha tillar uchun bir xil rasm.' : 'JPG, PNG, WebP or GIF — max 5 MB. Same image for all languages.'}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-brand-sectiongray">
                    <button
                      onClick={handleSaveCategory}
                      className="px-4 py-2 bg-brand-dark-navy hover:bg-brand-gold hover:text-white text-brand-gold font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      {locale === 'uz' ? "Kategoriya sarlavhasini saqlash" : "Сохранить параметры категории"}
                    </button>
                  </div>

                  {/* NESTED SUB-SERVICES LIST INDEX INSIDE SELECTED CATEGORY */}
                  {!isAddingCategory && (
                    <div className="pt-6 border-t border-brand-sectiongray space-y-4">
                      
                      <div className="flex justify-between items-center bg-brand-offwhite p-3 rounded-xl">
                        <span className="text-xs font-extrabold text-brand-text-primary uppercase tracking-wide">
                          {locale === 'uz' ? "Ushbu kategoriyadagi barcha xizmatlar (Muolajalar)" : "Перечень процедур этой категории"}
                        </span>
                        
                        {!isAddingSubService && selectedSubServiceId === null && (
                          <button
                            onClick={handleCreateSubServiceButton}
                            className="px-3.5 py-1 bg-brand-gold text-white font-bold text-[10px] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer hover:bg-brand-gold-dark"
                          >
                            <Plus className="w-3 h-3" />
                            <span>{locale === 'uz' ? "Yangi xizmat kiritish" : "Добавить процедуру"}</span>
                          </button>
                        )}
                      </div>

                      {/* Display subservices list or edit single subservice */}
                      {selectedSubServiceId === null && !isAddingSubService ? (
                        <div className="space-y-3.5">
                          {categoryForm.subServices && categoryForm.subServices.length > 0 ? (
                            categoryForm.subServices.map(sub => (
                              <div key={sub.id} className="p-3.5 bg-brand-white border border-brand-sectiongray rounded-xl flex justify-between items-start">
                                <div>
                                  <h5 className="text-xs font-extrabold text-brand-text-primary">{sub.name[locale] || sub.name['uz']}</h5>
                                  <p className="text-[11px] text-brand-text-muted mt-1 leading-relaxed font-light">{sub.description[locale] || sub.description['uz']}</p>
                                </div>
                                
                                <div className="flex gap-1.5 ml-4 shrink-0">
                                  <button
                                    onClick={() => handleEditSubService(sub)}
                                    className="p-1 bgColor-white hover:bg-brand-gold-light/10 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                                  >
                                    <Edit2 className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteSubService(sub.id)}
                                    className="p-1 bg-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs text-brand-text-muted italic text-center py-4 bg-brand-offwhite/50 rounded-lg">
                              {locale === 'uz' ? "Ushbu xizmat ostida muolajalar kiritilmagan. Yuqoridagi tugma orqali osongina kiritishingiz mumkin." : "В этой категории пока нет процедур."}
                            </p>
                          )}
                        </div>
                      ) : (
                        // NEW / EDIT SUB SERVICE ENCOUNTER FORM
                        <div className="p-4.5 bg-brand-offwhite rounded-xl border border-brand-sectiongray space-y-4">
                          <h5 className="text-xs font-extrabold text-brand-gold">
                            {isAddingSubService ? "Yangi ichki muolajani ro'yxatga olish" : "Tuzatish amali"}
                          </h5>

                          <div className="grid grid-cols-1 gap-3.5">
                            <LocalizedFieldGroup
                              label={locale === 'uz' ? 'Xizmat nomi' : locale === 'ru' ? 'Название услуги' : 'Service name'}
                              values={{
                                uz: subServiceForm.name.uz,
                                ru: subServiceForm.name.ru,
                                en: subServiceForm.name.en,
                              }}
                              onChange={(values) => setSubServiceForm((prev) => ({ ...prev, name: values }))}
                            />

                            <LocalizedFieldGroup
                              label={locale === 'uz' ? 'Tavsif' : locale === 'ru' ? 'Описание' : 'Description'}
                              values={{
                                uz: subServiceForm.description.uz,
                                ru: subServiceForm.description.ru,
                                en: subServiceForm.description.en,
                              }}
                              onChange={(values) => setSubServiceForm((prev) => ({ ...prev, description: values }))}
                              multiline
                              rows={2}
                            />

                            <ImageUploadField
                              label={locale === 'uz' ? 'Xizmat rasmi' : locale === 'ru' ? 'Изображение услуги' : 'Service image'}
                              currentImageUrl={getLocalizedImage(subServiceForm.images, locale) ?? subServiceForm.image}
                              file={subServiceImageFile}
                              onFileChange={setSubServiceImageFile}
                              helperText={locale === 'uz' ? 'JPG, PNG, WebP yoki GIF — maks. 5 MB' : 'JPG, PNG, WebP or GIF — max 5 MB'}
                            />
                          </div>

                          <div className="flex justify-end gap-2 text-xs">
                            <button
                              onClick={() => { setSelectedSubServiceId(null); setIsAddingSubService(false); }}
                              className="px-3 py-1 bg-brand-white border border-brand-sectiongray rounded-lg text-brand-text-muted cursor-pointer"
                            >
                              Bekor qilish
                            </button>
                            <button
                              onClick={handleSaveSubService}
                              className="px-4 py-1.5 bg-brand-gold text-white font-bold rounded-lg cursor-pointer"
                            >
                              Muvaffaqiyatli saqlash
                            </button>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              )}
            </div>
          )}


          {/* TAB 5: PRICES PREYSKURANT */}
          {activeTab === 'prices' && (
            <div className="space-y-6">
              <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? "Klinika xizmatlari narxnomasi" : "Прейскурант цен на все медицинские услуги"}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                  {!isAddingPrice && selectedPriceId === null && (
                    <>
                      <button
                        onClick={handleImportCatalogPrices}
                        disabled={priceImportLoading}
                        className="px-3 py-1.5 bg-brand-dark-navy text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-dark-navy/90 cursor-pointer shadow-xs disabled:opacity-60"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${priceImportLoading ? 'animate-spin' : ''}`} />
                        <span>{locale === 'uz' ? 'Katalog import' : 'Импорт каталога'}</span>
                      </button>
                      <button
                        onClick={handleCreatePriceBtn}
                        className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{locale === 'uz' ? "Yangi narx qo'shish" : "Добавить цену"}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {selectedPriceId === null && !isAddingPrice ? (
                // 1. PRICE LISTING INDEX TABLE
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-brand-offwhite text-brand-text-muted uppercase text-[10px] border-b border-brand-sectiongray">
                        <th className="p-3 font-bold">{locale === 'uz' ? "Xizmat Nomi" : "Процедура"}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? "Kategoriya" : "Раздел"}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Tartib' : 'Порядок'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? "Narxi" : "Цена"}</th>
                        <th className="p-3 text-right font-bold">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...editedPrices].sort(compareAdminPriceRows).map((pr) => (
                        <tr key={pr.id} className="border-b border-brand-sectiongray hover:bg-brand-offwhite/50 transition-colors">
                          <td className="p-3 font-semibold text-brand-text-primary">
                            {pr.name[locale] || pr.name['uz']}
                          </td>
                          <td className="p-3 text-brand-gold font-mono uppercase text-[9px] font-bold">
                            {pr.category}
                          </td>
                          <td className="p-3 font-mono text-brand-text-secondary text-[11px]">
                            {pr.sortOrder ?? '—'}
                          </td>
                          <td className="p-3 font-extrabold text-brand-text-primary font-sans">
                            {pr.price}
                          </td>
                          <td className="p-3 text-right space-x-1.5">
                            <button
                              onClick={() => handleEditPrice(pr)}
                              className="inline-block p-1 bg-brand-white hover:bg-brand-gold-light/10 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                              title="Tahrirlash"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeletePrice(pr.id)}
                              className="inline-block p-1 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                              title="O'chirish"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                // 2. PRICE DETAILS ENTRY FORM
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      Price Sheet Entry Form
                    </span>
                    <button
                      onClick={() => { setSelectedPriceId(null); setIsAddingPrice(false); }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Narxlar ro'yxatiga" : "Назад к прейскуранту"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <LocalizedFieldGroup
                      label={locale === 'uz' ? 'Xizmat nomi' : locale === 'ru' ? 'Название услуги' : 'Service name'}
                      values={{
                        uz: priceForm.name?.uz || '',
                        ru: priceForm.name?.ru || '',
                        en: priceForm.name?.en || '',
                      }}
                      onChange={(values) => setPriceForm((prev) => ({ ...prev, name: values }))}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Tarif narxi (UZS, masalan: 150000):</label>
                      <input
                        type="number"
                        min={0}
                        value={priceForm.priceValue ?? parsePriceValue(priceForm.price || '0')}
                        onChange={(e) => setPriceForm(prev => ({
                          ...prev,
                          priceValue: Number(e.target.value),
                          price: `${Number(e.target.value).toLocaleString('uz-UZ')} UZS`,
                        }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Kategoriya burchagi (Id kod):</label>
                      <select
                        value={toPriceSectionCategory(priceForm.category || 'dermatologiya')}
                        onChange={(e) => {
                          const category = e.target.value;
                          setPriceForm((prev) => ({
                            ...prev,
                            category,
                            ...(isAddingPrice
                              ? { sortOrder: getNextSortOrderInCategory(category, editedPrices) }
                              : {}),
                          }));
                        }}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs cursor-pointer"
                      >
                        {getPriceCategoryOptions(locale).map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">
                        {locale === 'uz'
                          ? "Tartib raqami (bo'lim ichida):"
                          : locale === 'ru'
                            ? 'Порядковый номер (в разделе):'
                            : 'Sort order (within section):'}
                      </label>
                      <input
                        type="number"
                        min={1}
                        step={1}
                        value={priceForm.sortOrder ?? ''}
                        onChange={(e) =>
                          setPriceForm((prev) => ({
                            ...prev,
                            sortOrder:
                              e.target.value === ''
                                ? undefined
                                : Math.max(1, Math.round(Number(e.target.value))),
                          }))
                        }
                        placeholder={locale === 'uz' ? 'Masalan: 3' : 'e.g. 3'}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                      <p className="mt-1 text-[10px] text-brand-text-muted leading-relaxed">
                        {locale === 'uz'
                          ? "Kichik raqam yuqorida turadi. Har bir bo'limda alohida tartib."
                          : locale === 'ru'
                            ? 'Меньший номер выше в списке. Порядок задаётся отдельно для каждого раздела.'
                            : 'Lower numbers appear first within each section.'}
                      </p>
                    </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-brand-sectiongray">
                    <button
                      onClick={() => { setSelectedPriceId(null); setIsAddingPrice(false); }}
                      className="px-4 py-2 hover:bg-brand-offwhite text-brand-text-muted text-xs font-bold rounded-lg cursor-pointer"
                    >
                      Bekor qilish
                    </button>
                    <button
                      onClick={handleSavePriceItem}
                      className="px-5 py-2 bg-brand-dark-navy text-[#A6843F] hover:bg-brand-gold hover:text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Narxlar ruxsatnomasiga kiritish" : "Сохранить позицию"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}


          {/* TAB 6: MEDICAL ARTICLES & BLOG */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? "Ilmiy va ommabop maqolalar tizimi" : "Управление базой знаний и статьями"}
                </h3>
                
                {!isAddingArticle && selectedArticleId === null && (
                  <button
                    onClick={handleCreateArticleBtn}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? "Yangi Maqola" : "Добавить статью"}</span>
                  </button>
                )}
              </div>

              {selectedArticleId === null && !isAddingArticle ? (
                // 1. ARTICLES INDEX
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editedArticles.map((art) => (
                    <div key={art.id} className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray flex gap-4 justify-between items-start">
                      <div className="flex gap-3 min-w-0">
                        <div className="w-16 h-16 rounded-lg overflow-hidden border border-brand-sectiongray bg-brand-white shrink-0">
                          {(() => {
                            const thumb = getLocalizedImage(art.images, locale) ?? art.image;
                            return thumb ? (
                            <img src={thumb} alt={art.title[locale]} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-brand-offwhite flex items-center justify-center text-[8px] text-brand-text-muted">—</div>
                          );
                          })()}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-xs sm:text-sm text-brand-text-primary truncate">{art.title[locale] || art.title['uz']}</h4>
                          <p className="text-[10px] text-brand-text-muted mt-1 leading-relaxed line-clamp-2">{art.summary[locale] || art.summary['uz']}</p>
                          <span className="text-[9px] text-[#A6843F] block mt-1.5 font-mono">
                            {art.date} | {normalizeArticleViews(art.views).toLocaleString('uz-UZ')}{' '}
                            {locale === 'uz' ? "ko'rish" : locale === 'ru' ? 'просм.' : 'views'}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-1 ml-3 shrink-0">
                        <button
                          onClick={() => handleEditArticle(art)}
                          className="p-1.5 bg-brand-white hover:bg-brand-gold-light/20 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(art.id)}
                          className="p-1.5 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // 2. DETAILED ARTICLES FORM
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      Article Composer Studio
                    </span>
                    <button
                      onClick={() => { setSelectedArticleId(null); setIsAddingArticle(false); }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Maqolalar katalogiga" : "Назад к списку статей"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Slug (SEO URL):</label>
                      <input
                        type="text"
                        value={articleForm.slug || ''}
                        onChange={(e) => setArticleForm(prev => ({ ...prev, slug: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                      />
                    </div>

                    <LocalizedFieldGroup
                      label={locale === 'uz' ? 'Maqola sarlavhasi' : locale === 'ru' ? 'Заголовок статьи' : 'Article title'}
                      values={{
                        uz: articleForm.title?.uz || '',
                        ru: articleForm.title?.ru || '',
                        en: articleForm.title?.en || '',
                      }}
                      onChange={(values) => setArticleForm((prev) => ({ ...prev, title: values }))}
                    />

                    <LocalizedFieldGroup
                      label={locale === 'uz' ? 'Muallif' : locale === 'ru' ? 'Автор' : 'Author'}
                      values={{
                        uz: articleForm.author?.uz || '',
                        ru: articleForm.author?.ru || '',
                        en: articleForm.author?.en || '',
                      }}
                      onChange={(values) => setArticleForm((prev) => ({ ...prev, author: values }))}
                    />

                    <LocalizedFieldGroup
                      label={locale === 'uz' ? 'Qisqa tavsif (summary)' : locale === 'ru' ? 'Краткое описание' : 'Summary'}
                      values={{
                        uz: articleForm.summary?.uz || '',
                        ru: articleForm.summary?.ru || '',
                        en: articleForm.summary?.en || '',
                      }}
                      onChange={(values) => setArticleForm((prev) => ({ ...prev, summary: values }))}
                    />

                    <div>
                      <ImageUploadField
                        label={locale === 'uz' ? 'Maqola rasmi' : locale === 'ru' ? 'Изображение статьи' : 'Article cover image'}
                        currentImageUrl={getLocalizedImage(articleForm.images, locale) ?? articleForm.image}
                        file={articleImageFile}
                        onFileChange={setArticleImageFile}
                        helperText={locale === 'uz' ? "JPG, PNG, WebP yoki GIF — maks. 5 MB" : 'JPG, PNG, WebP or GIF — max 5 MB'}
                      />
                    </div>

                    <LocalizedFieldGroup
                      label={locale === 'uz' ? "Maqola to'liq matni" : locale === 'ru' ? 'Полный текст статьи' : 'Full article content'}
                      values={{
                        uz: articleForm.content?.uz || '',
                        ru: articleForm.content?.ru || '',
                        en: articleForm.content?.en || '',
                      }}
                      onChange={(values) => setArticleForm((prev) => ({ ...prev, content: values }))}
                      multiline
                      rows={10}
                    />
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-brand-sectiongray">
                    <button
                      onClick={() => { setSelectedArticleId(null); setIsAddingArticle(false); }}
                      className="px-4 py-2 hover:bg-brand-offwhite text-brand-text-muted text-xs font-bold rounded-lg cursor-pointer"
                    >
                      Bekor qilish
                    </button>
                    <button
                      onClick={handleSaveArticle}
                      className="px-5 py-2 bg-brand-dark-navy text-[#A6843F] hover:bg-brand-gold hover:text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Tahrirni maqolaga kiritish" : "Опубликовать статью"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: CLINIC VIDEOS */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? 'Klinika videolari boshqaruvi' : locale === 'ru' ? 'Управление видео клиники' : 'Clinic videos management'}
                </h3>

                {!isAddingVideo && selectedVideoId === null && (
                  <button
                    onClick={handleCreateVideoBtn}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? 'Yangi video' : locale === 'ru' ? 'Добавить видео' : 'Add video'}</span>
                  </button>
                )}
              </div>

              {selectedVideoId === null && !isAddingVideo ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editedVideos.map((video) => (
                    <div key={video.id} className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray flex gap-4 justify-between items-start">
                      <div className="flex gap-3 min-w-0">
                        <div className="w-24 h-16 rounded-lg overflow-hidden border border-brand-sectiongray bg-brand-dark-navy shrink-0">
                          {video.src ? (
                            <ResolvedVideo src={video.src} className="w-full h-full object-cover" muted playsInline preload="metadata" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[8px] text-brand-text-muted">—</div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-xs sm:text-sm text-brand-text-primary truncate">
                            {video.title[locale] || video.title.uz}
                          </h4>
                          <p className="text-[10px] text-brand-text-muted mt-1 leading-relaxed line-clamp-2">
                            {video.description[locale] || video.description.uz}
                          </p>
                          <span className="text-[9px] text-[#A6843F] block mt-1.5 font-mono">
                            {video.duration} | {video.category[locale] || video.category.uz}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-1 ml-3 shrink-0">
                        <button
                          onClick={() => handleEditVideo(video)}
                          className="p-1.5 bg-brand-white hover:bg-brand-gold-light/20 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteVideo(video.id)}
                          className="p-1.5 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      Video Studio
                    </span>
                    <button
                      onClick={() => { setSelectedVideoId(null); setIsAddingVideo(false); setVideoFile(null); setVideoThumbnailFile(null); }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Videolar ro\'yxati' : locale === 'ru' ? 'К списку видео' : 'Back to list'}</span>
                    </button>
                  </div>

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Video sarlavhasi' : locale === 'ru' ? 'Заголовок видео' : 'Video title'}
                    values={{
                      uz: videoForm.title?.uz || '',
                      ru: videoForm.title?.ru || '',
                      en: videoForm.title?.en || '',
                    }}
                    onChange={(values) => setVideoForm((prev) => ({ ...prev, title: values }))}
                  />

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Video tavsifi' : locale === 'ru' ? 'Описание видео' : 'Video description'}
                    values={{
                      uz: videoForm.description?.uz || '',
                      ru: videoForm.description?.ru || '',
                      en: videoForm.description?.en || '',
                    }}
                    onChange={(values) => setVideoForm((prev) => ({ ...prev, description: values }))}
                    multiline
                    rows={4}
                  />

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Kategoriya' : locale === 'ru' ? 'Категория' : 'Category'}
                    values={{
                      uz: videoForm.category?.uz || '',
                      ru: videoForm.category?.ru || '',
                      en: videoForm.category?.en || '',
                    }}
                    onChange={(values) => setVideoForm((prev) => ({ ...prev, category: values }))}
                  />

                  <VideoUploadField
                    label={locale === 'uz' ? 'Video fayli' : locale === 'ru' ? 'Видеофайл' : 'Video file'}
                    currentVideoUrl={videoForm.src}
                    file={videoFile}
                    onFileChange={setVideoFile}
                    helperText={
                      locale === 'uz'
                        ? 'MP4, WebM yoki MOV formatida video yuklang. URL kiritish shart emas.'
                        : locale === 'ru'
                          ? 'Загрузите видео MP4, WebM или MOV. URL не требуется.'
                          : 'Upload MP4, WebM, or MOV. No URL required.'
                    }
                  />

                  <ImageUploadField
                    label={locale === 'uz' ? 'Miniatura (ixtiyoriy)' : locale === 'ru' ? 'Миниатюра (необяз.)' : 'Thumbnail (optional)'}
                    currentImageUrl={videoForm.thumbnail}
                    file={videoThumbnailFile}
                    onFileChange={setVideoThumbnailFile}
                    helperText={
                      locale === 'uz'
                        ? 'Video kartochkasi uchun rasm (ixtiyoriy).'
                        : 'Optional preview image for the video card.'
                    }
                  />

                  <div>
                    <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">
                      {locale === 'uz' ? 'Davomiyligi' : locale === 'ru' ? 'Длительность' : 'Duration'}
                    </label>
                    <input
                      type="text"
                      value={videoForm.duration || ''}
                      onChange={(e) => setVideoForm((prev) => ({ ...prev, duration: e.target.value }))}
                      placeholder="2:15"
                      className="w-full max-w-xs px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                    />
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-brand-sectiongray">
                    <button
                      onClick={() => { setSelectedVideoId(null); setIsAddingVideo(false); setVideoFile(null); setVideoThumbnailFile(null); }}
                      className="px-4 py-2 hover:bg-brand-offwhite text-brand-text-muted text-xs font-bold rounded-lg cursor-pointer"
                    >
                      {locale === 'uz' ? 'Bekor qilish' : locale === 'ru' ? 'Отмена' : 'Cancel'}
                    </button>
                    <button
                      onClick={handleSaveVideo}
                      className="px-5 py-2 bg-brand-dark-navy text-[#A6843F] hover:bg-brand-gold hover:text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Videoni saqlash' : locale === 'ru' ? 'Сохранить видео' : 'Save video'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: TREATMENT RESULTS */}
          {activeTab === 'results' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? 'Davolash natijalari boshqaruvi' : locale === 'ru' ? 'Управление результатами лечения' : 'Treatment results management'}
                </h3>

                {!isAddingResult && selectedResultId === null && (
                  <button
                    onClick={handleCreateResultBtn}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? 'Yangi natija' : locale === 'ru' ? 'Добавить результат' : 'Add result'}</span>
                  </button>
                )}
              </div>

              {selectedResultId === null && !isAddingResult ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editedResults.map((result) => (
                    <div key={result.id} className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray flex gap-4 justify-between items-start">
                      <div className="flex gap-3 min-w-0">
                        <div className="flex gap-1 shrink-0">
                          <div className="w-14 h-16 rounded-lg overflow-hidden border border-brand-sectiongray bg-brand-white">
                            <MediaImage src={result.beforeImage} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="w-14 h-16 rounded-lg overflow-hidden border border-brand-sectiongray bg-brand-white">
                            <MediaImage src={result.afterImage} alt="" className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-xs sm:text-sm text-brand-text-primary truncate">
                            {result.title[locale] || result.title.uz}
                          </h4>
                          <p className="text-[10px] text-brand-text-muted mt-1 leading-relaxed line-clamp-2">
                            {result.description[locale] || result.description.uz}
                          </p>
                          <span className="text-[9px] text-[#A6843F] block mt-1.5 font-mono">
                            {result.service[locale] || result.service.uz} | {result.sessions[locale] || result.sessions.uz}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-1 ml-3 shrink-0">
                        <button
                          onClick={() => handleEditResult(result)}
                          className="p-1.5 bg-brand-white hover:bg-brand-gold-light/20 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteResult(result.id)}
                          className="p-1.5 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      Results Studio
                    </span>
                    <button
                      onClick={() => { setSelectedResultId(null); setIsAddingResult(false); setBeforeImageFile(null); setAfterImageFile(null); }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Natijalar ro\'yxati' : locale === 'ru' ? 'К списку результатов' : 'Back to list'}</span>
                    </button>
                  </div>

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Natija sarlavhasi' : locale === 'ru' ? 'Заголовок результата' : 'Result title'}
                    values={{
                      uz: resultForm.title?.uz || '',
                      ru: resultForm.title?.ru || '',
                      en: resultForm.title?.en || '',
                    }}
                    onChange={(values) => setResultForm((prev) => ({ ...prev, title: values }))}
                  />

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Tavsif' : locale === 'ru' ? 'Описание' : 'Description'}
                    values={{
                      uz: resultForm.description?.uz || '',
                      ru: resultForm.description?.ru || '',
                      en: resultForm.description?.en || '',
                    }}
                    onChange={(values) => setResultForm((prev) => ({ ...prev, description: values }))}
                    multiline
                    rows={4}
                  />

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Xizmat turi' : locale === 'ru' ? 'Тип услуги' : 'Service type'}
                    values={{
                      uz: resultForm.service?.uz || '',
                      ru: resultForm.service?.ru || '',
                      en: resultForm.service?.en || '',
                    }}
                    onChange={(values) => setResultForm((prev) => ({ ...prev, service: values }))}
                  />

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Seanslar soni' : locale === 'ru' ? 'Количество сеансов' : 'Session count'}
                    values={{
                      uz: resultForm.sessions?.uz || '',
                      ru: resultForm.sessions?.ru || '',
                      en: resultForm.sessions?.en || '',
                    }}
                    onChange={(values) => setResultForm((prev) => ({ ...prev, sessions: values }))}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ImageUploadField
                      label={locale === 'uz' ? 'Oldin rasm' : locale === 'ru' ? 'Фото «до»' : 'Before image'}
                      currentImageUrl={resultForm.beforeImage}
                      file={beforeImageFile}
                      onFileChange={setBeforeImageFile}
                      helperText={
                        locale === 'uz'
                          ? 'JPG, PNG yoki WebP formatida rasm yuklang.'
                          : locale === 'ru'
                            ? 'Загрузите изображение JPG, PNG или WebP.'
                            : 'Upload JPG, PNG, or WebP image.'
                      }
                    />
                    <ImageUploadField
                      label={locale === 'uz' ? 'Keyin rasm' : locale === 'ru' ? 'Фото «после»' : 'After image'}
                      currentImageUrl={resultForm.afterImage}
                      file={afterImageFile}
                      onFileChange={setAfterImageFile}
                      helperText={
                        locale === 'uz'
                          ? 'JPG, PNG yoki WebP formatida rasm yuklang.'
                          : locale === 'ru'
                            ? 'Загрузите изображение JPG, PNG или WebP.'
                            : 'Upload JPG, PNG, or WebP image.'
                      }
                    />
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-brand-sectiongray">
                    <button
                      onClick={() => { setSelectedResultId(null); setIsAddingResult(false); setBeforeImageFile(null); setAfterImageFile(null); }}
                      className="px-4 py-2 hover:bg-brand-offwhite text-brand-text-muted text-xs font-bold rounded-lg cursor-pointer"
                    >
                      {locale === 'uz' ? 'Bekor qilish' : locale === 'ru' ? 'Отмена' : 'Cancel'}
                    </button>
                    <button
                      onClick={handleSaveResult}
                      className="px-5 py-2 bg-brand-dark-navy text-[#A6843F] hover:bg-brand-gold hover:text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Natijani saqlash' : locale === 'ru' ? 'Сохранить результат' : 'Save result'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: PARTNERS */}
          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? 'Hamkorlar boshqaruvi' : locale === 'ru' ? 'Управление партнерами' : 'Partners management'}
                </h3>

                {!isAddingPartner && selectedPartnerId === null && (
                  <button
                    onClick={handleCreatePartnerBtn}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? 'Yangi hamkor' : locale === 'ru' ? 'Добавить партнера' : 'Add partner'}</span>
                  </button>
                )}
              </div>

              {selectedPartnerId === null && !isAddingPartner ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {editedPartners.map((partner) => (
                    <div
                      key={partner.id}
                      className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray flex gap-4 justify-between items-center"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-16 h-12 rounded-lg overflow-hidden border border-brand-sectiongray bg-brand-white shrink-0 flex items-center justify-center p-1">
                          {partner.logo ? (
                            <MediaImage src={partner.logo} alt="" className="max-w-full max-h-full object-contain" />
                          ) : (
                            <span className="text-[8px] text-brand-text-muted">—</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-xs sm:text-sm text-brand-text-primary truncate">
                            {partner.name[locale] || partner.name.uz}
                          </h4>
                        </div>
                      </div>

                      <div className="flex gap-1 ml-3 shrink-0">
                        <button
                          onClick={() => handleEditPartner(partner)}
                          className="p-1.5 bg-brand-white hover:bg-brand-gold-light/20 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeletePartner(partner.id)}
                          className="p-1.5 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      Partner Studio
                    </span>
                    <button
                      onClick={() => {
                        setSelectedPartnerId(null);
                        setIsAddingPartner(false);
                        setPartnerLogoFile(null);
                      }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Hamkorlar ro\'yxati' : locale === 'ru' ? 'К списку партнеров' : 'Back to list'}</span>
                    </button>
                  </div>

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Hamkor nomi' : locale === 'ru' ? 'Название партнера' : 'Partner name'}
                    values={{
                      uz: partnerForm.name?.uz || '',
                      ru: partnerForm.name?.ru || '',
                      en: partnerForm.name?.en || '',
                    }}
                    onChange={(values) => setPartnerForm((prev) => ({ ...prev, name: values }))}
                  />

                  <ImageUploadField
                    label={locale === 'uz' ? 'Hamkor logotipi' : locale === 'ru' ? 'Логотип партнера' : 'Partner logo'}
                    currentImageUrl={partnerForm.logo}
                    file={partnerLogoFile}
                    onFileChange={setPartnerLogoFile}
                    helperText={
                      locale === 'uz'
                        ? 'JPG, PNG yoki WebP formatida logo yuklang.'
                        : locale === 'ru'
                          ? 'Загрузите логотип в формате JPG, PNG или WebP.'
                          : 'Upload logo in JPG, PNG, or WebP format.'
                    }
                  />

                  <div className="flex gap-3 justify-end pt-4 border-t border-brand-sectiongray">
                    <button
                      onClick={() => {
                        setSelectedPartnerId(null);
                        setIsAddingPartner(false);
                        setPartnerLogoFile(null);
                      }}
                      className="px-4 py-2 hover:bg-brand-offwhite text-brand-text-muted text-xs font-bold rounded-lg cursor-pointer"
                    >
                      {locale === 'uz' ? 'Bekor qilish' : locale === 'ru' ? 'Отмена' : 'Cancel'}
                    </button>
                    <button
                      onClick={handleSavePartner}
                      className="px-5 py-2 bg-brand-dark-navy text-[#A6843F] hover:bg-brand-gold hover:text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Hamkorni saqlash' : locale === 'ru' ? 'Сохранить партнера' : 'Save partner'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: CUSTOMER TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <div>
                  <h3 className="text-base font-bold text-brand-text-primary">
                    {locale === 'uz' ? 'Mijozlar fikrlari boshqaruvi' : locale === 'ru' ? 'Управление отзывами' : 'Customer reviews management'}
                  </h3>
                  <p className="text-[10px] text-brand-text-muted mt-1">
                    {locale === 'uz'
                      ? `${editedCustomerReviews.filter((r) => !r.published).length} ta yangi fikr moderatsiyada`
                      : `${editedCustomerReviews.filter((r) => !r.published).length} pending reviews`}
                  </p>
                </div>

                {!isAddingCustomerReview && selectedCustomerReviewId === null && (
                  <button
                    onClick={handleCreateCustomerReviewBtn}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? 'Yangi fikr' : locale === 'ru' ? 'Добавить отзыв' : 'Add review'}</span>
                  </button>
                )}
              </div>

              {selectedCustomerReviewId === null && !isAddingCustomerReview ? (
                <div className="space-y-3">
                  {editedCustomerReviews.map((review) => (
                    <div
                      key={review.id}
                      className={`p-4 rounded-xl border flex flex-col sm:flex-row gap-4 justify-between items-start ${
                        review.published
                          ? 'bg-brand-offwhite border-brand-sectiongray'
                          : 'bg-amber-50/80 border-amber-200'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-extrabold text-sm text-brand-text-primary">{review.authorName}</span>
                          <span className="text-[10px] font-mono text-brand-gold">{review.rating}/5</span>
                          <span className="text-[10px] text-brand-text-muted font-mono">{review.date}</span>
                          {!review.published && (
                            <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">
                              {locale === 'uz' ? 'Kutilmoqda' : locale === 'ru' ? 'Ожидает' : 'Pending'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-brand-text-secondary leading-relaxed line-clamp-3 italic">
                          "{review.comment[locale] || review.comment.uz || review.comment.ru || review.comment.en}"
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 shrink-0">
                        <button
                          onClick={() => handleToggleCustomerReviewPublished(review.id)}
                          className={`px-2.5 py-1.5 text-[10px] font-bold rounded-lg border cursor-pointer ${
                            review.published
                              ? 'bg-brand-white border-brand-sectiongray text-brand-text-muted'
                              : 'bg-brand-gold text-white border-brand-gold'
                          }`}
                        >
                          {review.published
                            ? (locale === 'uz' ? 'Yashirish' : locale === 'ru' ? 'Скрыть' : 'Unpublish')
                            : (locale === 'uz' ? 'Chop etish' : locale === 'ru' ? 'Опубликовать' : 'Publish')}
                        </button>
                        <button
                          onClick={() => handleEditCustomerReview(review)}
                          className="p-1.5 bg-brand-white hover:bg-brand-gold-light/20 text-brand-gold-dark border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteCustomerReview(review.id)}
                          className="p-1.5 bg-brand-white hover:bg-red-50 text-red-600 border border-brand-sectiongray rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      Review Studio
                    </span>
                    <button
                      onClick={() => {
                        setSelectedCustomerReviewId(null);
                        setIsAddingCustomerReview(false);
                      }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Fikrlar ro\'yxati' : locale === 'ru' ? 'К списку отзывов' : 'Back to list'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">
                        {locale === 'uz' ? 'Ism' : locale === 'ru' ? 'Имя' : 'Name'}
                      </label>
                      <input
                        type="text"
                        value={customerReviewForm.authorName || ''}
                        onChange={(e) => setCustomerReviewForm((prev) => ({ ...prev, authorName: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">
                        {locale === 'uz' ? 'Baholash (1-5)' : locale === 'ru' ? 'Оценка (1-5)' : 'Rating (1-5)'}
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={customerReviewForm.rating ?? 5}
                        onChange={(e) =>
                          setCustomerReviewForm((prev) => ({
                            ...prev,
                            rating: Math.min(5, Math.max(1, Number(e.target.value) || 5)),
                          }))
                        }
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Fikr matni' : locale === 'ru' ? 'Текст отзыва' : 'Review text'}
                    values={{
                      uz: customerReviewForm.comment?.uz || '',
                      ru: customerReviewForm.comment?.ru || '',
                      en: customerReviewForm.comment?.en || '',
                    }}
                    onChange={(values) => setCustomerReviewForm((prev) => ({ ...prev, comment: values }))}
                    multiline
                    rows={4}
                  />

                  <LocalizedFieldGroup
                    label={locale === 'uz' ? 'Xizmat turi (ixtiyoriy)' : locale === 'ru' ? 'Услуга (необязательно)' : 'Service (optional)'}
                    values={{
                      uz: customerReviewForm.service?.uz || '',
                      ru: customerReviewForm.service?.ru || '',
                      en: customerReviewForm.service?.en || '',
                    }}
                    onChange={(values) => setCustomerReviewForm((prev) => ({ ...prev, service: values }))}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">
                        {locale === 'uz' ? 'Sana' : locale === 'ru' ? 'Дата' : 'Date'}
                      </label>
                      <input
                        type="date"
                        value={customerReviewForm.date || ''}
                        onChange={(e) => setCustomerReviewForm((prev) => ({ ...prev, date: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                      />
                    </div>
                    <label className="flex items-center gap-2 pt-6 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Boolean(customerReviewForm.published)}
                        onChange={(e) =>
                          setCustomerReviewForm((prev) => ({ ...prev, published: e.target.checked }))
                        }
                        className="rounded border-brand-sectiongray text-brand-gold focus:ring-brand-gold/30"
                      />
                      <span className="text-xs font-semibold text-brand-text-primary">
                        {locale === 'uz' ? 'Saytda ko\'rsatish' : locale === 'ru' ? 'Показывать на сайте' : 'Show on website'}
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-brand-sectiongray">
                    <button
                      onClick={() => {
                        setSelectedCustomerReviewId(null);
                        setIsAddingCustomerReview(false);
                      }}
                      className="px-4 py-2 hover:bg-brand-offwhite text-brand-text-muted text-xs font-bold rounded-lg cursor-pointer"
                    >
                      {locale === 'uz' ? 'Bekor qilish' : locale === 'ru' ? 'Отмена' : 'Cancel'}
                    </button>
                    <button
                      onClick={handleSaveCustomerReview}
                      className="px-5 py-2 bg-brand-dark-navy text-[#A6843F] hover:bg-brand-gold hover:text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{locale === 'uz' ? 'Fikrni saqlash' : locale === 'ru' ? 'Сохранить отзыв' : 'Save review'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 7: APPOINTMENTS CRM */}
          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? 'Onlayn arizalar va qo\'ng\'iroq buyurtmalari' : 'Онлайн заявки и обратные звонки'}
                </h3>
                <select
                  value={appointmentStatusFilter}
                  onChange={(e) => setAppointmentStatusFilter(e.target.value as AppointmentStatus | '')}
                  className="px-3 py-1.5 bg-brand-white border border-brand-sectiongray rounded-lg text-xs cursor-pointer"
                >
                  <option value="">{locale === 'uz' ? 'Barcha statuslar' : 'Все статусы'}</option>
                  <option value="new">{locale === 'uz' ? 'Yangi' : 'Новая'}</option>
                  <option value="contacted">{locale === 'uz' ? 'Bog\'lanildi' : 'Связались'}</option>
                  <option value="completed">{locale === 'uz' ? 'Yakunlandi' : 'Завершена'}</option>
                  <option value="canceled">{locale === 'uz' ? 'Bekor' : 'Отменена'}</option>
                </select>
              </div>

              {appointmentsLoading ? (
                <p className="text-sm text-brand-text-muted">{locale === 'uz' ? 'Yuklanmoqda...' : 'Загрузка...'}</p>
              ) : appointments.length === 0 ? (
                <p className="text-sm text-brand-text-muted italic">{locale === 'uz' ? 'Hozircha arizalar yo\'q.' : 'Заявок пока нет.'}</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-brand-offwhite text-brand-text-muted uppercase text-[10px] border-b border-brand-sectiongray">
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Telefon' : 'Телефон'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Mijoz' : 'Клиент'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Xizmat' : 'Услуга'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Qulay sana' : 'Удобная дата'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Izoh' : 'Комментарий'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Yuborilgan' : 'Отправлено'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Status' : 'Статус'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((item) => (
                        <tr key={item.id} className="border-b border-brand-sectiongray hover:bg-brand-offwhite/50">
                          <td className="p-3 font-mono font-semibold text-brand-text-primary">{item.phone_number}</td>
                          <td className="p-3 text-brand-text-secondary">{item.client_name || '—'}</td>
                          <td className="p-3 text-brand-text-secondary">
                            {(locale === 'uz' ? item.service_name_uz : locale === 'ru' ? item.service_name_ru : item.service_name_en) ||
                              item.service_name_uz ||
                              (locale === 'uz' ? 'Umumiy konsultatsiya' : locale === 'ru' ? 'Общая консультация' : 'General consultation')}
                          </td>
                          <td className="p-3 text-brand-text-muted font-mono">
                            {item.preferred_date ? item.preferred_date.slice(0, 10) : '—'}
                          </td>
                          <td className="p-3 text-brand-text-muted max-w-[200px] truncate" title={item.comment || ''}>
                            {item.comment || '—'}
                          </td>
                          <td className="p-3 text-brand-text-muted font-mono">{new Date(item.created_at).toLocaleString()}</td>
                          <td className="p-3">
                            <select
                              value={item.status}
                              onChange={(e) => handleAppointmentStatusChange(item.id, e.target.value as AppointmentStatus)}
                              className="px-2 py-1 bg-brand-white border border-brand-sectiongray rounded-lg text-xs cursor-pointer"
                            >
                              <option value="new">{locale === 'uz' ? 'Yangi' : 'Новая'}</option>
                              <option value="contacted">{locale === 'uz' ? 'Bog\'lanildi' : 'Связались'}</option>
                              <option value="completed">{locale === 'uz' ? 'Yakunlandi' : 'Завершена'}</option>
                              <option value="canceled">{locale === 'uz' ? 'Bekor' : 'Отменена'}</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
