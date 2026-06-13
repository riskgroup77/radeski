import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Locale, Doctor, ServiceCategory, PriceItem, Article } from '../types';
import {
  Lock, LayoutDashboard, Building, Users, Activity, CreditCard, FileText,
  Save, RefreshCw, Plus, Edit2, Trash2, Check, ArrowLeft, LogOut, Info, AlertTriangle, PhoneCall
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
} from '../api/adminApi';
import {
  mapDoctorToCreatePayload,
  mapServiceCategoryToPayload,
  mapSubServiceToPayload,
  mapPriceToCreatePayload,
  mapArticleToCreatePayload,
  parsePriceValue,
} from '../api/mappers';
import { ApiError, clearAuthToken, getAuthToken, setAuthToken } from '../api/client';
import { ApiAppointment, AppointmentStatus } from '../api/types';

interface AdminPanelProps {
  locale: Locale;
  dictionary: Record<string, string>;
  doctors: Doctor[];
  serviceCategories: ServiceCategory[];
  prices: PriceItem[];
  articles: Article[];
  clinicRatings: Array<{ platform: string; rating: string; count: number; logo: string }>;
  onSaveLocalData: (type: string, data: unknown) => void;
  onResetLocalData: () => void;
  onRefresh: () => Promise<void>;
  onClose: () => void;
}

export default function AdminPanel({
  locale,
  dictionary,
  doctors,
  serviceCategories,
  prices,
  articles,
  clinicRatings,
  onSaveLocalData,
  onResetLocalData,
  onRefresh,
  onClose
}: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!getAuthToken());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Admin Section state
  const [activeTab, setActiveTab] = useState<'dashboard' | 'clinic' | 'doctors' | 'services' | 'prices' | 'articles' | 'appointments'>('dashboard');
  
  // Notification States
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  // Editing Sub-states
  // 1. Clinic ratings & basic details
  const [editedRatings, setEditedRatings] = useState<any[]>(() => JSON.parse(JSON.stringify(clinicRatings)));
  const [editedDict, setEditedDict] = useState<any>(() => JSON.parse(JSON.stringify(dictionary)));

  // 2. Doctors
  const [editedDoctors, setEditedDoctors] = useState<Doctor[]>(() => JSON.parse(JSON.stringify(doctors)));
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [isAddingDoctor, setIsAddingDoctor] = useState(false);
  const [doctorForm, setDoctorForm] = useState<Partial<Doctor>>({});
  // Dr credentials subform
  const [doctorFormCreds, setDoctorFormCreds] = useState({
    licenseId: '',
    yearsActive: 5,
    certificatesCount: 3,
    researchCount: 2
  });

  // 3. Services
  const [editedCategories, setEditedCategories] = useState<ServiceCategory[]>(() => JSON.parse(JSON.stringify(serviceCategories)));
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [categoryForm, setCategoryForm] = useState<Partial<ServiceCategory>>({});
  
  // Sub-services editing state
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);
  const [isAddingSubService, setIsAddingSubService] = useState(false);
  const [subServiceForm, setSubServiceForm] = useState({
    id: '',
    name: { uz: '', ru: '', en: '' },
    description: { uz: '', ru: '', en: '' }
  });

  // 4. Prices
  const [editedPrices, setEditedPrices] = useState<PriceItem[]>(() => JSON.parse(JSON.stringify(prices)));
  const [selectedPriceId, setSelectedPriceId] = useState<string | null>(null);
  const [isAddingPrice, setIsAddingPrice] = useState(false);
  const [priceForm, setPriceForm] = useState<Partial<PriceItem>>({});

  // 5. Articles
  const [editedArticles, setEditedArticles] = useState<Article[]>(() => JSON.parse(JSON.stringify(articles)));
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [articleForm, setArticleForm] = useState<Partial<Article>>({});

  const [appointments, setAppointments] = useState<ApiAppointment[]>([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(false);

  // Synchronize internal states if props change (e.g. after resetting)
  useEffect(() => {
    setEditedRatings(JSON.parse(JSON.stringify(clinicRatings)));
    setEditedDict(JSON.parse(JSON.stringify(dictionary)));
    setEditedDoctors(JSON.parse(JSON.stringify(doctors)));
    setEditedCategories(JSON.parse(JSON.stringify(serviceCategories)));
    setEditedPrices(JSON.parse(JSON.stringify(prices)));
    setEditedArticles(JSON.parse(JSON.stringify(articles)));
  }, [doctors, serviceCategories, prices, articles, clinicRatings, dictionary]);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'appointments') return;

    setAppointmentsLoading(true);
    getAppointments()
      .then(setAppointments)
      .catch(() => setAppointments([]))
      .finally(() => setAppointmentsLoading(false));
  }, [isAuthenticated, activeTab, saveSuccess]);

  useEffect(() => {
    if (selectedDoctorId) {
      const selectedDoctor = editedDoctors.find((doc) => doc.id === selectedDoctorId);
      if (selectedDoctor?.credentials) {
        setDoctorFormCreds({
          licenseId: selectedDoctor.credentials.licenseId,
          yearsActive: selectedDoctor.credentials.yearsActive,
          certificatesCount: selectedDoctor.credentials.certificatesCount,
          researchCount: selectedDoctor.credentials.researchCount,
        });
      } else {
        setDoctorFormCreds({
          licenseId: `LN-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000) + 10000}`,
          yearsActive: 5,
          certificatesCount: 3,
          researchCount: 2,
        });
      }
    }
  }, [selectedDoctorId, editedDoctors]);

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
  };

  // Helper trigger save notification
  const triggerSaveNotification = (message: string) => {
    setSaveSuccess(message);
    setTimeout(() => setSaveSuccess(null), 3000);
  };

  // 1. SAVE CLINIC DETAILS
  const handleSaveClinic = () => {
    onSaveLocalData('clinicRatings', editedRatings);
    onSaveLocalData('dictionary', editedDict);
    triggerSaveNotification(
      locale === 'uz' ? "Klinika ma'lumotlari muvaffaqiyatli saqlandi!" :
      locale === 'ru' ? "Информация о клинике успешно сохранена!" :
                        "Clinic information saved successfully!"
    );
  };

  // 2. SAVE/UPDATE DOCTORS
  const handleSelectDoctorForEdit = (doc: Doctor) => {
    setSelectedDoctorId(doc.id);
    setDoctorForm(doc);
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
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
    });
    setDoctorFormCreds({
      licenseId: `LN-${new Date().getFullYear()}-${Math.floor(Math.random() * 900000) + 10000}`,
      yearsActive: 5,
      certificatesCount: 3,
      researchCount: 1
    });
    setIsAddingDoctor(true);
  };

  const handleSaveDoctor = async () => {
    if (!doctorForm.name?.uz || !doctorForm.role?.uz) {
      alert("Please fill at least the Uzbek name and role of the doctor.");
      return;
    }

    try {
      const payload = mapDoctorToCreatePayload(doctorForm, {
        licenseId: doctorFormCreds.licenseId,
        yearsActive: doctorFormCreds.yearsActive,
        certificatesCount: doctorFormCreds.certificatesCount,
        researchCount: doctorFormCreds.researchCount,
      });

      if (isAddingDoctor) {
        await createDoctor(payload);
      } else if (doctorForm.id) {
        await updateDoctor(doctorForm.id, payload);
      }

      await onRefresh();
      setSelectedDoctorId(null);
      setIsAddingDoctor(false);
      triggerSaveNotification(
        locale === 'uz' ? "Shifokor ma'lumotlari muvaffaqiyatli saqlandi!" :
        locale === 'ru' ? "Резюме врача успешно сохранено!" :
                          "Physician profile saved successfully!"
      );
    } catch (err) {
      alert(err instanceof ApiError ? err.message : 'Save failed');
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
      alert(err instanceof ApiError ? err.message : 'Delete failed');
    }
  };

  // 3. EDIT SERVICES & CATEGORIES
  const handleSelectCategoryForEdit = (cat: ServiceCategory) => {
    setSelectedCategoryId(cat.id);
    setCategoryForm(cat);
    setIsAddingCategory(false);
    setSelectedSubServiceId(null);
    setIsAddingSubService(false);
  };

  const handleCreateCategoryButton = () => {
    setSelectedCategoryId(null);
    setCategoryForm({
      id: `cat-${Date.now()}`,
      title: { uz: '', ru: '', en: '' },
      description: { uz: '', ru: '', en: '' },
      icon: 'Activity',
      subServices: []
    });
    setIsAddingCategory(true);
    setSelectedSubServiceId(null);
    setIsAddingSubService(false);
  };

  const handleSaveCategory = async () => {
    if (!categoryForm.title?.uz || !categoryForm.id) return;

    try {
      const payload = mapServiceCategoryToPayload({
        id: categoryForm.id,
        title: {
          uz: categoryForm.title?.uz || '',
          ru: categoryForm.title?.ru || categoryForm.title?.uz || '',
          en: categoryForm.title?.en || categoryForm.title?.uz || '',
        },
        description: {
          uz: categoryForm.description?.uz || '',
          ru: categoryForm.description?.ru || categoryForm.description?.uz || '',
          en: categoryForm.description?.en || categoryForm.description?.uz || '',
        },
        icon: categoryForm.icon || 'Activity',
        subServices: categoryForm.subServices || [],
      });

      if (isAddingCategory) {
        await createServiceCategory(payload);
      } else {
        await updateServiceCategory(categoryForm.id, payload);
      }

      await onRefresh();
      setSelectedCategoryId(null);
      setIsAddingCategory(false);
      triggerSaveNotification(locale === 'uz' ? "Kategoriya saqlandi!" : "Категория сохранена!");
    } catch (err) {
      alert(err instanceof ApiError ? err.message : 'Save failed');
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
      alert(err instanceof ApiError ? err.message : 'Delete failed');
    }
  };

  // SUB SERVICES (nested inside categories)
  const handleEditSubService = (sub: any) => {
    setSelectedSubServiceId(sub.id);
    setSubServiceForm(JSON.parse(JSON.stringify(sub)));
    setIsAddingSubService(false);
  };

  const handleCreateSubServiceButton = () => {
    setSelectedSubServiceId(null);
    setSubServiceForm({
      id: `sub-${Date.now()}`,
      name: { uz: '', ru: '', en: '' },
      description: { uz: '', ru: '', en: '' }
    });
    setIsAddingSubService(true);
  };

  const handleSaveSubService = async () => {
    if (!selectedCategoryId || !subServiceForm.id || !subServiceForm.name.uz) return;

    const targetCat = editedCategories.find(c => c.id === selectedCategoryId);
    if (!targetCat) return;

    let updatedSubs = [...targetCat.subServices];
    const mappedSub = {
      id: subServiceForm.id,
      name: subServiceForm.name,
      description: subServiceForm.description,
    };

    if (isAddingSubService) {
      updatedSubs.push(mappedSub);
    } else {
      updatedSubs = updatedSubs.map(s => s.id === subServiceForm.id ? mappedSub : s);
    }

    const updatedCatObj = { ...targetCat, subServices: updatedSubs };

    try {
      await updateServiceCategory(selectedCategoryId, {
        sub_services: updatedCatObj.subServices.map(mapSubServiceToPayload),
      });
      await onRefresh();
      setCategoryForm(updatedCatObj);
      setIsAddingSubService(false);
      setSelectedSubServiceId(null);
      triggerSaveNotification(locale === 'uz' ? "Xizmat saqlandi!" : "Услуга сохранена!");
    } catch (err) {
      alert(err instanceof ApiError ? err.message : 'Save failed');
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
        sub_services: updatedCatObj.subServices.map(mapSubServiceToPayload),
      });
      await onRefresh();
      setCategoryForm(updatedCatObj);
      if (selectedSubServiceId === subId) {
        setSelectedSubServiceId(null);
        setIsAddingSubService(false);
      }
      triggerSaveNotification(locale === 'uz' ? "Xizmat o'chirildi!" : "Услуга удалена!");
    } catch (err) {
      alert(err instanceof ApiError ? err.message : 'Delete failed');
    }
  };

  // 4. PRICE ITEM CRUD
  const handleEditPrice = (pr: PriceItem) => {
    setSelectedPriceId(pr.id);
    setPriceForm({
      ...pr,
      priceValue: pr.priceValue ?? parsePriceValue(pr.price),
    });
    setIsAddingPrice(false);
  };

  const handleCreatePriceBtn = () => {
    setSelectedPriceId(null);
    setPriceForm({
      id: `pr-${Date.now()}`,
      name: { uz: '', ru: '', en: '' },
      price: '100,000 UZS',
      priceValue: 100000,
      category: serviceCategories[0]?.id || 'dermatologiya'
    });
    setIsAddingPrice(true);
  };

  const handleSavePriceItem = async () => {
    if (!priceForm.name?.uz || !priceForm.price || !priceForm.id) return;

    try {
      const payload = mapPriceToCreatePayload({
        ...priceForm,
        priceValue: priceForm.priceValue ?? parsePriceValue(priceForm.price || '0'),
      });

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
      alert(err instanceof ApiError ? err.message : 'Save failed');
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
      alert(err instanceof ApiError ? err.message : 'Delete failed');
    }
  };

  // 5. ARTICLES CRUD
  const handleEditArticle = (art: Article) => {
    setSelectedArticleId(art.id);
    setArticleForm(art);
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
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      views: 12
    });
    setIsAddingArticle(true);
  };

  const handleSaveArticle = async () => {
    if (!articleForm.title?.uz || !articleForm.id) return;

    try {
      const payload = mapArticleToCreatePayload(articleForm);

      if (isAddingArticle) {
        await createArticle(payload);
      } else {
        await updateArticle(articleForm.id, payload);
      }

      await onRefresh();
      setSelectedArticleId(null);
      setIsAddingArticle(false);
      triggerSaveNotification(locale === 'uz' ? "Maqola saqlandi!" : "Статья сохранена!");
    } catch (err) {
      alert(err instanceof ApiError ? err.message : 'Save failed');
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
      alert(err instanceof ApiError ? err.message : 'Delete failed');
    }
  };

  const handleAppointmentStatusChange = async (appointmentId: string, status: AppointmentStatus) => {
    try {
      await updateAppointmentStatus(appointmentId, status);
      const updated = await getAppointments();
      setAppointments(updated);
      triggerSaveNotification(locale === 'uz' ? 'Status yangilandi!' : 'Статус обновлен!');
    } catch (err) {
      alert(err instanceof ApiError ? err.message : 'Update failed');
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
            onClick={() => { onResetLocalData(); onRefresh(); }}
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
        <div className="lg:col-span-9 bg-brand-white p-6 sm:p-8 rounded-2xl border border-brand-sectiongray min-h-[500px]">
          
          {/* TAB 1: OVERVIEW/DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h3 className="text-base font-bold text-brand-text-primary pb-3 border-b border-brand-sectiongray">
                {locale === 'uz' ? "Klinik ma'lumotlar tahlili" : "Общая аналитика клиники"}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    value={editedDict.phoneTitleValue || '+998 (73) 200-73-73'}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditedDict((prev: any) => ({ ...prev, phoneTitleValue: val }));
                    }}
                    placeholder="+998 (73) 200-73-73"
                    className="w-full px-4.5 py-2.5 bg-brand-offwhite border border-brand-sectiongray rounded-xl text-xs font-mono focus:bg-brand-white"
                  />
                </div>
                
                <div>
                  <label className="block text-[11px] font-bold text-brand-text-muted uppercase tracking-wider mb-1">
                    {locale === 'uz' ? "Ish vaqti:" : "Часы работы:"}
                  </label>
                  <input
                    type="text"
                    value={editedDict.workingHoursValue}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditedDict((prev: any) => {
                        const next = { ...prev };
                        next.workingHoursValue = val;
                        return next;
                      });
                    }}
                    placeholder="Dushanba - Shanba: 08:00 - 18:00"
                    className="w-full px-4.5 py-2.5 bg-brand-offwhite border border-brand-sectiongray rounded-xl text-xs focus:bg-brand-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-brand-text-muted uppercase tracking-wider mb-1">
                    {locale === 'uz' ? "Manzil (beposhta ko'rinishi) - UZ:" : "Адрес (выводится на сайте на узбекском):"}
                  </label>
                  <input
                    type="text"
                    value={editedDict.addressValue}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditedDict((prev: any) => {
                        const next = { ...prev };
                        next.addressValue = val;
                        return next;
                      });
                    }}
                    className="w-full px-4.5 py-2.5 bg-brand-offwhite border border-brand-sectiongray rounded-xl text-xs focus:bg-brand-white"
                  />
                </div>
              </div>

              {/* Platform ratings edit */}
              <div className="space-y-4 pt-4 border-t border-brand-sectiongray">
                <h4 className="text-xs font-bold text-brand-text-primary uppercase tracking-wider">
                  {locale === 'uz' ? "Ijtimoiy & Xarita reytinglari" : "Рейтинги клиники на картах"}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {editedRatings.map((rating, idx) => (
                    <div key={rating.platform} className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-brand-text-primary">{rating.platform}</span>
                        <span>{rating.logo}</span>
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
                    <div key={doc.id} className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray flex gap-4 justify-between items-start">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-brand-sectiongray bg-brand-white shrink-0">
                          <img src={doc.photo} alt={doc.name[locale]} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-xs sm:text-sm text-brand-text-primary truncate">{doc.name[locale]}</h4>
                          <p className="text-[10px] text-brand-gold font-medium leading-normal block mt-0.5 truncate">{doc.role[locale]}</p>
                          <span className="text-[9px] text-brand-text-muted font-mono">{doc.experience[locale]} {locale === 'uz' ? 'yil amaliyot' : 'лет стажа'}</span>
                        </div>
                      </div>

                      <div className="flex gap-1">
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
                  <div className="flex items-center justify-between pb-3 border-b border-brand-sectiongray">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">
                      {isAddingDoctor ? "New Specialist Portfolio" : "Modifying Specialist Portfolio"}
                    </span>
                    <button
                      onClick={() => { setSelectedDoctorId(null); setIsAddingDoctor(false); }}
                      className="text-xs text-brand-text-muted hover:text-brand-text-primary flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{locale === 'uz' ? "Orqaga reestrga" : "Назад к списку"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Multilingual names */}
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">F.I.SH. (O'zbekcha):</label>
                      <input
                        type="text"
                        value={doctorForm.name?.uz || ''}
                        onChange={(e) => setDoctorForm(prev => ({ ...prev, name: { ...prev.name!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Ф.И.О. (Русский):</label>
                      <input
                        type="text"
                        value={doctorForm.name?.ru || ''}
                        onChange={(e) => setDoctorForm(prev => ({ ...prev, name: { ...prev.name!, ru: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>
                    
                    {/* Multilingual Roles */}
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Mutaxassisligi (O'zbekcha):</label>
                      <input
                        type="text"
                        value={doctorForm.role?.uz || ''}
                        onChange={(e) => setDoctorForm(prev => ({ ...prev, role: { ...prev.role!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Специализация (Русский):</label>
                      <input
                        type="text"
                        value={doctorForm.role?.ru || ''}
                        onChange={(e) => setDoctorForm(prev => ({ ...prev, role: { ...prev.role!, ru: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

                    {/* Educational institution */}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">O'qish / Taxsil Maskani (UZ):</label>
                      <textarea
                        rows={2}
                        value={doctorForm.education?.uz || ''}
                        onChange={(e) => setDoctorForm(prev => ({ ...prev, education: { ...prev.education!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

                    {/* Doctor portrait URL */}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Shifokor surati URL manzili:</label>
                      <input
                        type="text"
                        value={doctorForm.photo || ''}
                        onChange={(e) => setDoctorForm(prev => ({ ...prev, photo: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                      />
                    </div>

                    {/* Brief bio in Uzbek */}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Biografiya / Professional rezyume (UZ):</label>
                      <textarea
                        rows={3}
                        value={doctorForm.bio?.uz || ''}
                        onChange={(e) => setDoctorForm(prev => ({ ...prev, bio: { ...prev.bio!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* CREDENTIALS GRID SUB-FORM */}
                  <div className="p-5 bg-brand-offwhite/50 border border-brand-sectiongray rounded-2xl mt-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-brand-gold shrink-0" />
                      <h4 className="text-xs font-bold text-brand-text-primary uppercase tracking-wider">
                        {locale === 'uz' ? "Kafolatlangan Davlat litsenziyasi & Nashrlar" : "Лицензирование и Аккредитация"}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-brand-text-muted uppercase mb-1">License ID:</label>
                        <input
                          type="text"
                          value={doctorFormCreds.licenseId}
                          onChange={(e) => setDoctorFormCreds(prev => ({ ...prev, licenseId: e.target.value }))}
                          className="w-full px-3 py-2 bg-brand-white border border-brand-sectiongray rounded-lg text-xs font-mono font-extrabold text-brand-text-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-brand-text-muted uppercase mb-1">Tajriba yillari:</label>
                        <input
                          type="number"
                          value={doctorFormCreds.yearsActive}
                          onChange={(e) => setDoctorFormCreds(prev => ({ ...prev, yearsActive: parseInt(e.target.value) || 0 }))}
                          className="w-full px-3 py-2 bg-brand-white border border-brand-sectiongray rounded-lg text-xs font-mono font-extrabold text-brand-text-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-brand-text-muted uppercase mb-1">Sertifikatlar soni:</label>
                        <input
                          type="number"
                          value={doctorFormCreds.certificatesCount}
                          onChange={(e) => setDoctorFormCreds(prev => ({ ...prev, certificatesCount: parseInt(e.target.value) || 0 }))}
                          className="w-full px-3 py-2 bg-brand-white border border-brand-sectiongray rounded-lg text-xs font-mono font-extrabold text-brand-text-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-brand-text-muted uppercase mb-1">PubMed loyihalari:</label>
                        <input
                          type="number"
                          value={doctorFormCreds.researchCount}
                          onChange={(e) => setDoctorFormCreds(prev => ({ ...prev, researchCount: parseInt(e.target.value) || 0 }))}
                          className="w-full px-3 py-2 bg-brand-white border border-brand-sectiongray rounded-lg text-xs font-mono font-extrabold text-brand-text-primary"
                        />
                      </div>
                    </div>
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

                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Kategoriya nomi (UZ):</label>
                      <input
                        type="text"
                        value={categoryForm.title?.uz || ''}
                        onChange={(e) => setCategoryForm(prev => ({ ...prev, title: { ...prev.title!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Asosiy Tavsifi (UZ):</label>
                      <textarea
                        rows={2}
                        value={categoryForm.description?.uz || ''}
                        onChange={(e) => setCategoryForm(prev => ({ ...prev, description: { ...prev.description!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
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
                            <div>
                              <label className="block text-[9px] font-bold text-brand-text-muted uppercase">Nomi / Sarlavha (UZ):</label>
                              <input
                                type="text"
                                value={subServiceForm.name.uz}
                                onChange={(e) => setSubServiceForm(prev => ({ ...prev, name: { ...prev.name, uz: e.target.value } }))}
                                className="w-full px-2.5 py-1.5 bg-brand-white border border-brand-sectiongray rounded-lg text-xs"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-[9px] font-bold text-brand-text-muted uppercase">Tavsif (Batafsil tushuntirish) - UZ:</label>
                              <textarea
                                rows={2}
                                value={subServiceForm.description.uz}
                                onChange={(e) => setSubServiceForm(prev => ({ ...prev, description: { ...prev.description, uz: e.target.value } }))}
                                className="w-full px-2.5 py-1.5 bg-brand-white border border-brand-sectiongray rounded-lg text-xs"
                              />
                            </div>
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
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? "Klinika xizmatlari narxnomasi" : "Прейскурант цен на все медицинские услуги"}
                </h3>
                
                {!isAddingPrice && selectedPriceId === null && (
                  <button
                    onClick={handleCreatePriceBtn}
                    className="px-3 py-1.5 bg-brand-gold text-white font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-brand-gold-dark cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{locale === 'uz' ? "Yangi narx qo'shish" : "Добавить цену"}</span>
                  </button>
                )}
              </div>

              {selectedPriceId === null && !isAddingPrice ? (
                // 1. PRICE LISTING INDEX TABLE
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-brand-offwhite text-brand-text-muted uppercase text-[10px] border-b border-brand-sectiongray">
                        <th className="p-3 font-bold">{locale === 'uz' ? "Xizmat Nomi" : "Процедура"}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? "Kategoriya" : "Раздел"}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? "Narxi" : "Цена"}</th>
                        <th className="p-3 text-right font-bold">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {editedPrices.map((pr) => (
                        <tr key={pr.id} className="border-b border-brand-sectiongray hover:bg-brand-offwhite/50 transition-colors">
                          <td className="p-3 font-semibold text-brand-text-primary">
                            {pr.name[locale] || pr.name['uz']}
                          </td>
                          <td className="p-3 text-brand-gold font-mono uppercase text-[9px] font-bold">
                            {pr.category}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Xizmat nomi (UZ):</label>
                      <input
                        type="text"
                        value={priceForm.name?.uz || ''}
                        onChange={(e) => setPriceForm(prev => ({ ...prev, name: { ...prev.name!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

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
                        value={priceForm.category || 'dermatologiya'}
                        onChange={(e) => setPriceForm(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs cursor-pointer"
                      >
                        {serviceCategories.map(cat => (
                          <option key={cat.id} value={cat.id}>{cat.title[locale] || cat.title['uz']}</option>
                        ))}
                      </select>
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
                          <img src={art.image} alt={art.title[locale]} className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-xs sm:text-sm text-brand-text-primary truncate">{art.title[locale] || art.title['uz']}</h4>
                          <p className="text-[10px] text-brand-text-muted mt-1 leading-relaxed line-clamp-2">{art.summary[locale] || art.summary['uz']}</p>
                          <span className="text-[9px] text-[#A6843F] block mt-1.5 font-mono">{art.date} | {art.views} reads</span>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Slug (SEO URL):</label>
                      <input
                        type="text"
                        value={articleForm.slug || ''}
                        onChange={(e) => setArticleForm(prev => ({ ...prev, slug: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Maqola sarlavhasi (UZ):</label>
                      <input
                        type="text"
                        value={articleForm.title?.uz || ''}
                        onChange={(e) => setArticleForm(prev => ({ ...prev, title: { ...prev.title!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Muallif (Masalan: Ashurov D.D.):</label>
                      <input
                        type="text"
                        value={articleForm.author?.uz || ''}
                        onChange={(e) => setArticleForm(prev => ({ ...prev, author: { ...prev.author!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Mualliflik sarlavhasi / Muallifning qisqa tavsifi (UZ):</label>
                      <input
                        type="text"
                        value={articleForm.summary?.uz || ''}
                        onChange={(e) => setArticleForm(prev => ({ ...prev, summary: { ...prev.summary!, uz: e.target.value } }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Rasm muallifi / Unsplash rasm manzili (URL):</label>
                      <input
                        type="text"
                        value={articleForm.image || ''}
                        onChange={(e) => setArticleForm(prev => ({ ...prev, image: e.target.value }))}
                        className="w-full px-3 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs font-mono"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1">Maqola to'liq matni (Tahrirlash UZ):</label>
                      <textarea
                        rows={10}
                        value={articleForm.content?.uz || ''}
                        onChange={(e) => setArticleForm(prev => ({ ...prev, content: { ...prev.content!, uz: e.target.value } }))}
                        className="w-full px-3.5 py-2 bg-brand-offwhite border border-brand-sectiongray rounded-lg text-xs leading-relaxed"
                      />
                    </div>
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

          {/* TAB 7: APPOINTMENTS CRM */}
          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-brand-sectiongray">
                <h3 className="text-base font-bold text-brand-text-primary">
                  {locale === 'uz' ? 'Onlayn arizalar va qo\'ng\'iroq buyurtmalari' : 'Онлайн заявки и обратные звонки'}
                </h3>
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
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Xizmat' : 'Услуга'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Sana' : 'Дата'}</th>
                        <th className="p-3 font-bold">{locale === 'uz' ? 'Status' : 'Статус'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((item) => (
                        <tr key={item.id} className="border-b border-brand-sectiongray hover:bg-brand-offwhite/50">
                          <td className="p-3 font-mono font-semibold text-brand-text-primary">{item.phone_number}</td>
                          <td className="p-3 text-brand-text-secondary">
                            {(locale === 'uz' ? item.service_name_uz : locale === 'ru' ? item.service_name_ru : item.service_name_en) ||
                              item.service_name_uz ||
                              (locale === 'uz' ? 'Umumiy konsultatsiya' : locale === 'ru' ? 'Общая консультация' : 'General consultation')}
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
