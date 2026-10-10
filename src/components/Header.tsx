import { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, MapPin, ChevronDown, ChevronRight, Clock } from 'lucide-react';
import { Locale, ServiceCategory, type Article } from '../types';
import { DICTIONARY, SERVICE_CATEGORIES, ARTICLES } from '../data';
import {
  BRAND_NAV_OVERVIEW,
  BRAND_NAV_TITLE,
} from '../data/brandContent';
import { DAAVLIN_NAV_LINEUP } from '../data/daavlinFotoKabinalariContent';
import {
  DAAVLIN_MODELS_NAV_ALL,
  DAAVLIN_MODELS_NAV_TITLE,
} from '../data/daavlinModelDeepContent';
import SiteLogo from './SiteLogo';
import NavSideFlyout from './NavSideFlyout';
import NavDropdownPanel from './NavDropdownPanel';
import AppointmentBookingLink from './AppointmentBookingLink';
import {
  getInstitutionalNavSection,
  institutionalTopicHref,
  type InstitutionalNavId,
  type InstitutionalNavSection,
} from '../data/institutionalNavContent';
import {
  PageId,
  pagePath,
  serviceCategoryPath,
  servicesListPath,
  articlesListPath,
  articlePath,
  brandPath,
  daavlinModelPath,
  daavlinSectionPath,
  getServiceCategoryIdFromPathname,
  getServiceSubIdFromPathname,
  getConditionSlugFromPathname,
  getArticleIdFromPathname,
  getDaavlinModelIdFromPathname,
  type DaavlinModelId,
} from '../routing/paths';
import {
  categoryHasServiceNavFlyout,
  getServiceNavFlyoutContent,
  isServiceNavFlyoutItemActive,
  type ServiceNavFlyoutItem,
} from '../utils/serviceNavFlyout';
import { buildArticleNavGroups } from '../utils/articleNavGroups';
import { resolveArticleRouteKey } from '../utils/articles';
import { getHeaderTopBarContacts } from '../config/clinicContacts';
import { getClinicMapOpenUrl, KOKAND_BRANCH_MAP_OPEN_URL } from '../config/links';
import { handleHomeLogoClick } from '../utils/scrollToTop';
import {
  NAV_SIDE_FLYOUT_SELECTOR,
  useNavDropdownHoverZone,
  useNavSideFlyoutController,
} from '../utils/navDropdownHover';
import { usePriorityNav } from '../hooks/usePriorityNav';

interface HeaderProps {
  currentPage: PageId;
  locale: Locale;
  onNavigate: (page: PageId) => void;
  onChangeLocale: (locale: Locale) => void;
  onOpenAppointment: () => void;
  serviceCategories?: ServiceCategory[];
  articles?: Article[];
  onOpenServiceCategory?: (categoryId: string) => void;
  /** DICTIONARY merged with admin-edited clinic texts (working hours…). */
  dictionary?: Record<string, string>;
}

/** Scroll distance after which the contact rows collapse and the header turns compact. */
const SCROLL_COLLAPSE_PX = 24;

/** Two-line nav labels (brand subtitles) only on very wide screens; elsewhere single line. */
const NAV_SUBTITLE_CLASS = 'hidden min-[1800px]:block';

function DaavlinNavLabel({
  locale,
  size = 'nav',
}: {
  locale: Locale;
  size?: 'nav' | 'mobile';
}) {
  const d = DICTIONARY[locale];

  if (size === 'mobile') {
    return (
      <span className="inline-flex flex-col items-start text-left leading-[1.15]">
        <span className="font-semibold">{d.navDaavlinShort}</span>
        <span className="text-xs font-medium leading-snug">{d.navDaavlinSubtitle}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex flex-col items-start text-left leading-[1.12] min-[1800px]:max-w-[7rem]">
      <span className="whitespace-nowrap">{d.navDaavlinShort}</span>
      <span className={`${NAV_SUBTITLE_CLASS} text-[10px] font-medium leading-snug whitespace-normal`}>
        {d.navDaavlinSubtitle}
      </span>
    </span>
  );
}

function getCompactAppointmentLabel(locale: Locale): string {
  if (locale === 'uz') return 'Qabul';
  if (locale === 'ru') return 'Запись';
  return 'Book';
}

function getMoreLabel(locale: Locale): string {
  if (locale === 'uz') return 'Yana';
  if (locale === 'ru') return 'Ещё';
  return 'More';
}

function getCityLabels(locale: Locale) {
  if (locale === 'ru') return { fergana: 'Фергана', kokand: 'Коканд' };
  if (locale === 'en') return { fergana: 'Fergana', kokand: 'Kokand' };
  return { fergana: "Farg'ona", kokand: "Qo'qon" };
}

const INSTITUTIONAL_NAV_ORDER: InstitutionalNavId[] = [
  'skin-pathology-center',
  'obrazovaniya',
  'malaka-oshirish',
  'science',
  'tele-dermatology',
];

/** Page nav items whose desktop trigger opens a dropdown (and shows a chevron). */
const DROPDOWN_PAGE_IDS = new Set<PageId>(['about', 'services', 'daavlin-foto-kabinalari', 'articles']);

type DesktopNavEntry =
  | { key: string; kind: 'page'; item: { id: PageId; label: string } }
  | { key: string; kind: 'institutional'; sectionId: InstitutionalNavId };

function InstitutionalNavLabel({
  section,
  locale,
  size = 'nav',
}: {
  section: InstitutionalNavSection;
  locale: Locale;
  size?: 'nav' | 'mobile';
}) {
  const title = section.navShort?.[locale] ?? section.label[locale];
  const subtitle = section.navSubtitle?.[locale];

  if (!subtitle) {
    return <span className={size === 'nav' ? 'whitespace-nowrap' : ''}>{title}</span>;
  }

  if (size === 'mobile') {
    return (
      <span className="inline-flex flex-col items-start text-left leading-[1.15]">
        <span className="font-semibold">{title}</span>
        <span className="text-xs font-medium leading-snug">{subtitle}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex flex-col items-start text-left leading-[1.12] min-[1800px]:max-w-[7.25rem]">
      <span className="whitespace-nowrap">{title}</span>
      <span className={`${NAV_SUBTITLE_CLASS} text-[10px] font-medium leading-snug whitespace-normal`}>
        {subtitle}
      </span>
    </span>
  );
}

function ServiceCategoryDropdownRow({
  locale,
  category,
  isFlyoutOpen,
  onRowEnter,
  onRowLeave,
  onNavigateCategory,
  onNavigateFlyoutItem,
  itemClass,
  flyoutItemClass,
  onKeepParentOpen,
}: {
  locale: Locale;
  category: ServiceCategory;
  isFlyoutOpen: boolean;
  onRowEnter: () => void;
  onRowLeave: (event: React.MouseEvent) => void;
  onNavigateCategory: () => void;
  onNavigateFlyoutItem: () => void;
  itemClass: string;
  flyoutItemClass: (item: ServiceNavFlyoutItem) => string;
  onKeepParentOpen?: () => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const flyoutContent = getServiceNavFlyoutContent(category, locale);

  const handleRowEnter = () => {
    onKeepParentOpen?.();
    onRowEnter();
  };

  if (!flyoutContent) {
    return (
      <Link
        to={serviceCategoryPath(locale, category.id)}
        role="menuitem"
        onClick={onNavigateCategory}
        className={itemClass}
      >
        {category.title[locale] || category.title.uz}
      </Link>
    );
  }

  return (
    <div
      ref={rowRef}
      data-nav-service-row={category.id}
      className="relative overflow-visible"
      onMouseEnter={handleRowEnter}
      onMouseLeave={onRowLeave}
    >
      <Link
        to={serviceCategoryPath(locale, category.id)}
        role="menuitem"
        onClick={onNavigateCategory}
        className={`${itemClass} flex items-center justify-between gap-2`}
      >
        <span className="min-w-0 break-words">{category.title[locale] || category.title.uz}</span>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-brand-gold/80" />
      </Link>

      <NavSideFlyout
        isOpen={isFlyoutOpen}
        anchorRef={rowRef}
        title={flyoutContent.title}
        onMouseEnter={handleRowEnter}
        onMouseLeave={onRowLeave}
      >
        {flyoutContent.items.map((item) => (
          <Link
            key={item.key}
            to={item.href}
            role="menuitem"
            onClick={onNavigateFlyoutItem}
            className={flyoutItemClass(item)}
          >
            {item.label}
          </Link>
        ))}
      </NavSideFlyout>
    </div>
  );
}

function ArticleCategoryDropdownRow({
  locale,
  group,
  isFlyoutOpen,
  onRowEnter,
  onRowLeave,
  onNavigateCategory,
  onNavigateArticle,
  itemClass,
  articleItemClass,
  flyoutTitle,
  onKeepParentOpen,
}: {
  locale: Locale;
  group: ReturnType<typeof buildArticleNavGroups>[number];
  isFlyoutOpen: boolean;
  onRowEnter: () => void;
  onRowLeave: (event: React.MouseEvent) => void;
  onNavigateCategory: () => void;
  onNavigateArticle: () => void;
  itemClass: string;
  articleItemClass: (routeKey: string) => string;
  flyoutTitle: string;
  onKeepParentOpen?: () => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { category, articles: categoryArticles } = group;

  const handleRowEnter = () => {
    onKeepParentOpen?.();
    onRowEnter();
  };

  return (
    <div
      ref={rowRef}
      data-nav-article-row={category.id}
      className="relative overflow-visible"
      onMouseEnter={handleRowEnter}
      onMouseLeave={onRowLeave}
    >
      <Link
        to={serviceCategoryPath(locale, category.id)}
        role="menuitem"
        onClick={onNavigateCategory}
        className={`${itemClass} flex items-center justify-between gap-2`}
      >
        <span className="min-w-0 break-words">{category.title[locale] || category.title.uz}</span>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-brand-gold/80" />
      </Link>

      <NavSideFlyout
        isOpen={isFlyoutOpen}
        anchorRef={rowRef}
        title={flyoutTitle}
        onMouseEnter={handleRowEnter}
        onMouseLeave={onRowLeave}
      >
        {categoryArticles.map((article) => {
          const routeKey = resolveArticleRouteKey(article);
          return (
            <Link
              key={article.id}
              to={articlePath(locale, routeKey)}
              role="menuitem"
              onClick={onNavigateArticle}
              className={articleItemClass(routeKey)}
              title={article.title[locale] || article.title.uz}
            >
              {article.title[locale] || article.title.uz}
            </Link>
          );
        })}
      </NavSideFlyout>
    </div>
  );
}

export default function Header({
  currentPage,
  locale,
  onNavigate,
  onChangeLocale,
  serviceCategories = [],
  articles = [],
  onOpenServiceCategory,
  dictionary,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDaavlinDropdownOpen, setIsDaavlinDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileArticlesOpen, setIsMobileArticlesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileDaavlinOpen, setIsMobileDaavlinOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<InstitutionalNavId | null>(null);
  const [isMobileInstitutionalOpen, setIsMobileInstitutionalOpen] = useState<InstitutionalNavId | null>(
    null,
  );
  const [activeServiceCategoryFlyout, setActiveServiceCategoryFlyout] = useState<string | null>(null);
  const [activeArticleCategoryFlyout, setActiveArticleCategoryFlyout] = useState<string | null>(null);
  const [isMobileServiceFlyoutOpen, setIsMobileServiceFlyoutOpen] = useState<string | null>(null);
  const [isMobileArticleCategoryOpen, setIsMobileArticleCategoryOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mainRowRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const moreCloseTimerRef = useRef<number | null>(null);
  const articlesMenuRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const d = { ...DICTIONARY[locale], ...dictionary };
  const topBar = getHeaderTopBarContacts(locale);
  const cityLabels = getCityLabels(locale);
  const ferganaMapUrl = topBar.ferganaMapUrl || getClinicMapOpenUrl();
  const kokandMapUrl = topBar.kokandMapUrl || KOKAND_BRANCH_MAP_OPEN_URL;
  const mapOpenLabel =
    locale === 'ru' ? 'Открыть на карте' : locale === 'en' ? 'Open in map' : 'Xaritada ochish';
  const callLabel = locale === 'ru' ? 'Позвонить' : locale === 'en' ? 'Call' : 'Telefon';
  const activeServiceCategoryId = getServiceCategoryIdFromPathname(location.pathname);
  const activeServiceSubId = getServiceSubIdFromPathname(location.pathname);
  const activeConditionSlug = getConditionSlugFromPathname(location.pathname);
  const activeArticleRouteKey = getArticleIdFromPathname(location.pathname);
  const activeDaavlinModelId = getDaavlinModelIdFromPathname(location.pathname);
  const daavlinModels = DAAVLIN_NAV_LINEUP;

  const branchContacts = [
    {
      key: 'fergana',
      city: cityLabels.fergana,
      address: topBar.ferganaAddress,
      mapUrl: ferganaMapUrl,
      phone: topBar.primaryPhone,
    },
    {
      key: 'kokand',
      city: cityLabels.kokand,
      address: topBar.kokandAddress,
      mapUrl: kokandMapUrl,
      phone: topBar.kokandPhone,
    },
  ];

  const navServiceCategories = useMemo(
    () => (serviceCategories.length > 0 ? serviceCategories : SERVICE_CATEGORIES),
    [serviceCategories],
  );

  const navArticles = useMemo(
    () => (articles.length > 0 ? articles : ARTICLES),
    [articles],
  );

  const articleNavGroups = useMemo(
    () => buildArticleNavGroups(navArticles, navServiceCategories),
    [navArticles, navServiceCategories],
  );

  const articleCategoryFlyout = useNavSideFlyoutController(
    articlesMenuRef,
    setActiveArticleCategoryFlyout,
    300,
  );

  const closeArticlesMenu = () => {
    articleCategoryFlyout.cancelClose();
    setIsArticlesDropdownOpen(false);
    setActiveArticleCategoryFlyout(null);
  };

  const serviceCategoryFlyout = useNavSideFlyoutController(
    servicesMenuRef,
    setActiveServiceCategoryFlyout,
    300,
  );

  const closeServicesMenu = () => {
    serviceCategoryFlyout.cancelClose();
    setIsServicesDropdownOpen(false);
    setActiveServiceCategoryFlyout(null);
  };

  const servicesMenuHover = useNavDropdownHoverZone(
    () => {
      setIsServicesDropdownOpen(true);
      setIsArticlesDropdownOpen(false);
      setActiveMegaMenu(null);
      setIsMoreDropdownOpen(false);
    },
    closeServicesMenu,
    servicesMenuRef,
    isServicesDropdownOpen,
    560,
  );

  const articlesMenuHover = useNavDropdownHoverZone(
    () => {
      setIsArticlesDropdownOpen(true);
      setActiveMegaMenu(null);
      setIsMoreDropdownOpen(false);
    },
    closeArticlesMenu,
    articlesMenuRef,
    isArticlesDropdownOpen,
    560,
  );

  const servicesDropdownTitle =
    locale === 'uz' ? 'Asosiy sohalar' : locale === 'ru' ? 'Основные направления' : 'Main areas';

  const allServicesLabel =
    locale === 'uz' ? "Barcha xizmatlar ro'yxati" : locale === 'ru' ? 'Все услуги' : 'All services';

  const articlesDropdownTitle =
    locale === 'uz'
      ? "Maqola yo'nalishlari"
      : locale === 'ru'
        ? 'Направления статей'
        : 'Article topics';

  const allArticlesLabel =
    locale === 'uz' ? "Barcha maqolalar ro'yxati" : locale === 'ru' ? 'Все статьи' : 'All articles';

  const articlesInCategoryTitle =
    locale === 'uz' ? 'Maqolalar' : locale === 'ru' ? 'Статьи' : 'Articles';

  const closeAllDesktopMenus = () => {
    closeServicesMenu();
    closeArticlesMenu();
    setIsAboutDropdownOpen(false);
    setIsDaavlinDropdownOpen(false);
    setIsMoreDropdownOpen(false);
    setActiveMegaMenu(null);
    setIsLangDropdownOpen(false);
  };

  // Compact header after scrolling (rAF-throttled, passive).
  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled(window.scrollY > SCROLL_COLLAPSE_PX);
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Publish real header heights as CSS variables so page offsets, sticky elements and
  // anchor scrolling follow the header on every device instead of hard-coded pixels.
  //   --app-header-h          expanded height (page top padding) — measured at the top only
  //   --app-header-live-h     current height (mobile menu panel)
  //   --app-header-compact-h  main row only (sticky offsets / scroll padding while scrolled)
  useLayoutEffect(() => {
    const header = headerRef.current;
    const mainRow = mainRowRef.current;
    if (!header || !mainRow) return;

    const root = document.documentElement;
    // Writing a variable on <html> restyles the whole page, so only write real changes.
    const written = new Map<string, string>();
    const setVar = (name: string, value: string) => {
      if (written.get(name) === value) return;
      written.set(name, value);
      root.style.setProperty(name, value);
    };
    // Heights come from the ResizeObserver entries (measured by the browser after layout),
    // never from getBoundingClientRect, which forced a full-page layout on every call. The
    // first notification arrives before the first paint, so there is no visible jump.
    const heights = new Map<Element, number>();
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        heights.set(entry.target, entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height);
      }
      const liveHeight = Math.ceil(heights.get(header) ?? 0);
      const compactHeight = Math.ceil(heights.get(mainRow) ?? 0);
      if (liveHeight) setVar('--app-header-live-h', `${liveHeight}px`);
      if (compactHeight) setVar('--app-header-compact-h', `${compactHeight}px`);
      if (liveHeight && window.scrollY <= SCROLL_COLLAPSE_PX) {
        setVar('--app-header-h', `${liveHeight}px`);
      }
    });
    observer.observe(header);
    observer.observe(mainRow);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isArticlesDropdownOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (articlesMenuRef.current?.contains(target)) return;
      if (target instanceof Element && target.closest(NAV_SIDE_FLYOUT_SELECTOR)) return;
      closeArticlesMenu();
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isArticlesDropdownOpen]);

  useEffect(() => {
    if (!isServicesDropdownOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (servicesMenuRef.current?.contains(target)) return;
      if (target instanceof Element && target.closest(NAV_SIDE_FLYOUT_SELECTOR)) return;
      closeServicesMenu();
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isServicesDropdownOpen]);

  useEffect(() => {
    if (!isMoreDropdownOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && moreMenuRef.current?.contains(target)) return;
      setIsMoreDropdownOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isMoreDropdownOpen]);

  // Escape closes every open menu.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      closeAllDesktopMenus();
      setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    // Floating widgets (AI chat) hide themselves while the drawer is open.
    root.setAttribute('data-mobile-nav-open', '');
    return () => {
      root.style.overflow = previous;
      root.removeAttribute('data-mobile-nav-open');
    };
  }, [isMobileMenuOpen]);

  // The desktop nav is hidden below lg — make sure the drawer never stays open after rotating
  // a tablet or resizing a window up to desktop width.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (query.matches) setIsMobileMenuOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileDaavlinOpen(false);
    setIsMobileInstitutionalOpen(null);
    setIsMobileArticlesOpen(false);
    setIsServicesDropdownOpen(false);
    setIsArticlesDropdownOpen(false);
    setActiveServiceCategoryFlyout(null);
    setActiveArticleCategoryFlyout(null);
    setIsMobileServiceFlyoutOpen(null);
    setIsMobileArticleCategoryOpen(null);
    setIsAboutDropdownOpen(false);
    setIsDaavlinDropdownOpen(false);
    setIsMoreDropdownOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  const navItems = useMemo<{ id: PageId; label: string }[]>(
    () => [
      { id: 'home', label: d.navHome },
      { id: 'about', label: d.navAbout },
      { id: 'services', label: d.navServices },
      { id: 'daavlin-foto-kabinalari', label: d.navDaavlinFotoKabinalari },
      { id: 'doctors', label: d.navDoctors },
      { id: 'prices', label: d.navPrices },
      { id: 'articles', label: d.navArticles },
      { id: 'videos', label: d.navVideos },
      { id: 'branches', label: d.navBranches },
      { id: 'results', label: d.navResults },
      { id: 'dermoscan', label: d.navDermoScan },
    ],
    [d],
  );

  const desktopNavEntries = useMemo<DesktopNavEntry[]>(
    () => [
      ...navItems.map((item) => ({ key: item.id, kind: 'page' as const, item })),
      ...INSTITUTIONAL_NAV_ORDER.map((sectionId) => ({
        key: sectionId,
        kind: 'institutional' as const,
        sectionId,
      })),
    ],
    [navItems],
  );

  const priorityNav = usePriorityNav(desktopNavEntries.length);
  const visibleDesktopEntries = desktopNavEntries.slice(0, priorityNav.visibleCount);
  const overflowDesktopEntries = desktopNavEntries.slice(priorityNav.visibleCount);

  const getLanguageLabel = (l: Locale) => {
    switch (l) {
      case 'uz':
        return "O'zbekcha";
      case 'ru':
        return 'Русский';
      case 'en':
        return 'English';
    }
  };

  const renderLanguageSwitcher = (variant: 'topbar' | 'main' = 'main') => {
    const buttonClass =
      variant === 'topbar'
        ? 'flex items-center gap-1 px-2 py-1 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer'
        : 'flex items-center justify-center gap-1 h-10 px-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-sm font-bold text-slate-700 transition-colors cursor-pointer';

    return (
      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          className={buttonClass}
          aria-expanded={isLangDropdownOpen}
          aria-haspopup="menu"
          aria-label={`${locale.toUpperCase()} — ${getLanguageLabel(locale)}`}
        >
          <Globe className={variant === 'topbar' ? 'w-3.5 h-3.5 text-slate-500' : 'w-4 h-4 text-slate-500'} />
          <span>{locale.toUpperCase()}</span>
        </button>

        {isLangDropdownOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsLangDropdownOpen(false)} />
            <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-150 rounded-xl shadow-xl z-20 py-1 overflow-hidden">
              {(['uz', 'ru', 'en'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => {
                    onChangeLocale(lang);
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-brand-offwhite flex items-center gap-2 cursor-pointer ${
                    locale === lang
                      ? 'text-brand-gold-dark font-bold bg-brand-gold-light/10'
                      : 'text-brand-text-secondary'
                  }`}
                >
                  <span className="w-5 text-center text-[10px] leading-none px-1 py-0.5 rounded bg-slate-100 text-slate-500 uppercase font-mono font-bold">
                    {lang}
                  </span>
                  {getLanguageLabel(lang)}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const isPageActive = (page: PageId) =>
    currentPage === page || (page === 'about' && currentPage === 'brend');

  const isDesktopEntryActive = (entry: DesktopNavEntry) =>
    entry.kind === 'page'
      ? isPageActive(entry.item.id)
      : currentPage === getInstitutionalNavSection(entry.sectionId).pageId;

  // Active/open states only change colour — never weight or padding — so the measured
  // widths used by the priority+ nav stay exact.
  const navTriggerClass = (highlighted: boolean) =>
    `inline-flex items-center gap-1 px-2 xl:px-2.5 py-2 rounded-lg text-[13px] 2xl:text-sm font-medium leading-tight whitespace-nowrap transition-colors cursor-pointer ${
      highlighted
        ? 'bg-brand-gold-light/15 text-brand-gold-dark'
        : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-offwhite'
    }`;

  const mobileNavClass = (highlighted: boolean) =>
    `rounded-lg font-medium transition-colors ${
      highlighted
        ? 'bg-brand-gold-light/15 text-brand-gold-dark font-semibold'
        : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-offwhite'
    }`;

  const navChevron = (isOpen: boolean) => (
    <ChevronDown
      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      aria-hidden="true"
    />
  );

  const renderDesktopTriggerContent = (entry: DesktopNavEntry, isOpen = false) => {
    if (entry.kind === 'institutional') {
      const section = getInstitutionalNavSection(entry.sectionId);
      return (
        <>
          <InstitutionalNavLabel section={section} locale={locale} />
          {navChevron(isOpen)}
        </>
      );
    }

    const { id, label } = entry.item;
    if (id === 'daavlin-foto-kabinalari') {
      return (
        <>
          <DaavlinNavLabel locale={locale} />
          {navChevron(isOpen)}
        </>
      );
    }
    if (DROPDOWN_PAGE_IDS.has(id)) {
      return (
        <>
          {label}
          {navChevron(isOpen)}
        </>
      );
    }
    return label;
  };

  const serviceDropdownItemClass = (categoryId: string) =>
    `block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
      activeServiceCategoryId === categoryId
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const serviceFlyoutItemClass = (categoryId: string, item: ServiceNavFlyoutItem) =>
    `block px-4 py-2 text-[12px] font-medium leading-snug break-words transition-colors hover:bg-brand-offwhite ${
      isServiceNavFlyoutItemActive(
        item,
        categoryId,
        activeServiceCategoryId,
        activeConditionSlug,
        activeServiceSubId,
        location.hash,
      )
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const articleDropdownItemClass = (routeKey: string) =>
    `block px-4 py-2 text-[12px] font-medium leading-snug break-words transition-colors hover:bg-brand-offwhite ${
      activeArticleRouteKey === routeKey
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const navDropdownShellClass =
    'w-max min-w-[260px] max-w-[min(340px,calc(100vw-1.5rem))] overflow-visible bg-white border border-slate-150 rounded-xl shadow-2xl py-2';

  const navDropdownScrollClass =
    'max-h-[min(calc(100dvh-var(--app-header-live-h)-7rem),520px)] overflow-y-auto overscroll-contain';

  const articleCategoryDropdownItemClass = (categoryId: string) =>
    `block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
      activeServiceCategoryId === categoryId && currentPage === 'services'
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const renderServiceDropdownItem = (category: ServiceCategory) => {
    const hasFlyout = categoryHasServiceNavFlyout(category, locale);
    const isFlyoutOpen = activeServiceCategoryFlyout === category.id;

    if (!hasFlyout) {
      return (
        <Link
          key={category.id}
          to={serviceCategoryPath(locale, category.id)}
          role="menuitem"
          onClick={() => {
            onOpenServiceCategory?.(category.id);
            setIsServicesDropdownOpen(false);
          }}
          className={serviceDropdownItemClass(category.id)}
        >
          {category.title[locale] || category.title.uz}
        </Link>
      );
    }

    return (
      <ServiceCategoryDropdownRow
        key={category.id}
        locale={locale}
        category={category}
        isFlyoutOpen={isFlyoutOpen}
        onRowEnter={() => {
          servicesMenuHover.keepOpen();
          serviceCategoryFlyout.enter(category.id);
        }}
        onRowLeave={(event) => serviceCategoryFlyout.leave(category.id, event)}
        onNavigateCategory={() => {
          onOpenServiceCategory?.(category.id);
          setIsServicesDropdownOpen(false);
          setActiveServiceCategoryFlyout(null);
        }}
        onNavigateFlyoutItem={() => {
          setIsServicesDropdownOpen(false);
          setActiveServiceCategoryFlyout(null);
        }}
        itemClass={serviceDropdownItemClass(category.id)}
        flyoutItemClass={(item) => serviceFlyoutItemClass(category.id, item)}
        onKeepParentOpen={servicesMenuHover.keepOpen}
      />
    );
  };

  const renderArticleDropdownItem = (group: ReturnType<typeof buildArticleNavGroups>[number]) => {
    const { category } = group;
    const isFlyoutOpen = activeArticleCategoryFlyout === category.id;

    return (
      <ArticleCategoryDropdownRow
        key={category.id}
        locale={locale}
        group={group}
        isFlyoutOpen={isFlyoutOpen}
        onRowEnter={() => {
          articlesMenuHover.keepOpen();
          articleCategoryFlyout.enter(category.id);
        }}
        onRowLeave={(event) => articleCategoryFlyout.leave(category.id, event)}
        onNavigateCategory={() => {
          onOpenServiceCategory?.(category.id);
          setIsArticlesDropdownOpen(false);
          setActiveArticleCategoryFlyout(null);
        }}
        onNavigateArticle={() => {
          setIsArticlesDropdownOpen(false);
          setActiveArticleCategoryFlyout(null);
        }}
        itemClass={articleCategoryDropdownItemClass(category.id)}
        articleItemClass={articleDropdownItemClass}
        flyoutTitle={articlesInCategoryTitle}
        onKeepParentOpen={articlesMenuHover.keepOpen}
      />
    );
  };

  const renderMobileArticleCategoryItem = (group: ReturnType<typeof buildArticleNavGroups>[number]) => {
    const { category, articles: categoryArticles } = group;
    const isOpen = isMobileArticleCategoryOpen === category.id;

    return (
      <div key={category.id} className="rounded-lg overflow-hidden">
        <div className="flex items-stretch min-h-[44px]">
          <Link
            to={serviceCategoryPath(locale, category.id)}
            onClick={() => {
              onOpenServiceCategory?.(category.id);
              setIsMobileArticlesOpen(false);
              setIsMobileArticleCategoryOpen(null);
              setIsMobileMenuOpen(false);
            }}
            className={`flex-1 min-w-0 px-3 py-2.5 rounded-lg text-sm leading-snug break-words transition-colors touch-manipulation ${articleCategoryDropdownItemClass(category.id)}`}
          >
            {category.title[locale] || category.title.uz}
          </Link>
          <button
            type="button"
            onClick={() =>
              setIsMobileArticleCategoryOpen((current) =>
                current === category.id ? null : category.id,
              )
            }
            className="mr-1 shrink-0 rounded-lg px-3 py-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-brand-text-secondary hover:bg-brand-offwhite touch-manipulation"
            aria-expanded={isOpen}
            aria-label={`${articlesInCategoryTitle}: ${category.title[locale] || category.title.uz}`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        {isOpen && (
          <div className="ml-3 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5 pb-1 max-h-[min(45vh,360px)] overflow-y-auto overscroll-contain">
            {categoryArticles.map((article) => {
              const routeKey = resolveArticleRouteKey(article);
              const title = article.title[locale] || article.title.uz;
              return (
                <Link
                  key={article.id}
                  to={articlePath(locale, routeKey)}
                  onClick={() => {
                    setIsMobileArticleCategoryOpen(null);
                    setIsMobileArticlesOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2.5 min-h-[44px] rounded-lg text-xs leading-snug break-words transition-colors touch-manipulation ${articleDropdownItemClass(routeKey)}`}
                  title={title}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderMobileServiceCategoryItem = (category: ServiceCategory) => {
    const flyoutContent = getServiceNavFlyoutContent(category, locale);

    if (!flyoutContent) {
      return (
        <Link
          key={category.id}
          to={serviceCategoryPath(locale, category.id)}
          onClick={() => {
            onOpenServiceCategory?.(category.id);
            setIsMobileServicesOpen(false);
            setIsMobileMenuOpen(false);
          }}
          className={`px-3 py-2.5 min-h-[44px] rounded-lg text-sm transition-colors ${serviceDropdownItemClass(category.id)}`}
        >
          {category.title[locale] || category.title.uz}
        </Link>
      );
    }

    const isOpen = isMobileServiceFlyoutOpen === category.id;

    return (
      <div key={category.id} className="rounded-lg overflow-hidden">
        <div className="flex items-stretch min-h-[44px]">
          <Link
            to={serviceCategoryPath(locale, category.id)}
            onClick={() => {
              onOpenServiceCategory?.(category.id);
              setIsMobileServicesOpen(false);
              setIsMobileServiceFlyoutOpen(null);
              setIsMobileMenuOpen(false);
            }}
            className={`flex-1 min-w-0 px-3 py-2.5 rounded-lg text-sm leading-snug break-words transition-colors touch-manipulation ${serviceDropdownItemClass(category.id)}`}
          >
            {category.title[locale] || category.title.uz}
          </Link>
          <button
            type="button"
            onClick={() =>
              setIsMobileServiceFlyoutOpen((current) =>
                current === category.id ? null : category.id,
              )
            }
            className="mr-1 shrink-0 rounded-lg px-3 py-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-brand-text-secondary hover:bg-brand-offwhite touch-manipulation"
            aria-expanded={isOpen}
            aria-label={`${flyoutContent.title}: ${category.title[locale] || category.title.uz}`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        {isOpen && (
          <div className="ml-3 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5 pb-1 max-h-[min(45vh,360px)] overflow-y-auto overscroll-contain">
            {flyoutContent.items.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => {
                  setIsMobileServiceFlyoutOpen(null);
                  setIsMobileServicesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-2.5 min-h-[44px] rounded-lg text-xs leading-snug break-words transition-colors touch-manipulation ${serviceFlyoutItemClass(category.id, item)}`}
                title={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const daavlinModelItemClass = (modelId: string) =>
    `block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
      activeDaavlinModelId === modelId
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const institutionalDropdownItemClass = () =>
    `block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite text-brand-text-secondary hover:text-brand-text-primary`;

  const institutionalOverviewLabel =
    locale === 'uz' ? "Bo'lim haqida" : locale === 'ru' ? 'О разделе' : 'Section overview';

  const renderInstitutionalDesktopNav = (entry: Extract<DesktopNavEntry, { kind: 'institutional' }>) => {
    const { sectionId } = entry;
    const section = getInstitutionalNavSection(sectionId);
    const isOpen = activeMegaMenu === sectionId;

    return (
      <div
        key={sectionId}
        className="relative shrink-0"
        onMouseEnter={() => {
          setActiveMegaMenu(sectionId);
          setIsServicesDropdownOpen(false);
          setIsArticlesDropdownOpen(false);
          setIsAboutDropdownOpen(false);
          setIsDaavlinDropdownOpen(false);
          setIsMoreDropdownOpen(false);
        }}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <button
          type="button"
          onClick={() => onNavigate(section.pageId)}
          className={navTriggerClass(isDesktopEntryActive(entry) || isOpen)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          title={section.label[locale]}
        >
          {renderDesktopTriggerContent(entry, isOpen)}
        </button>

        {isOpen && (
          <NavDropdownPanel align="right">
            <div
              className="w-max min-w-[260px] max-w-[320px] bg-white border border-slate-150 rounded-xl shadow-2xl py-2"
              role="menu"
            >
              <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1">
                {section.dropdownTitle[locale]}
              </p>

              <div className={navDropdownScrollClass}>
                {section.topics.length > 0 ? (
                  section.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      to={institutionalTopicHref(locale, section, topic)}
                      role="menuitem"
                      onClick={() => setActiveMegaMenu(null)}
                      className={institutionalDropdownItemClass()}
                    >
                      {topic.label[locale]}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-2.5 text-[12px] font-light leading-relaxed text-brand-text-secondary">
                    {section.dropdownHint[locale]}
                  </p>
                )}
              </div>

              <div className="border-t border-brand-sectiongray/60 mt-1 pt-1">
                <Link
                  to={pagePath(locale, section.pageId)}
                  role="menuitem"
                  onClick={() => setActiveMegaMenu(null)}
                  className="block px-4 py-2.5 text-[12px] font-semibold text-brand-gold hover:bg-brand-gold-light/10"
                >
                  {institutionalOverviewLabel}
                </Link>
              </div>
            </div>
          </NavDropdownPanel>
        )}
      </div>
    );
  };

  const renderInstitutionalMobileNav = (sectionId: InstitutionalNavId) => {
    const section = getInstitutionalNavSection(sectionId);
    const isOpen = isMobileInstitutionalOpen === sectionId;
    const highlighted = currentPage === section.pageId;

    return (
      <div key={sectionId} className="rounded-lg overflow-hidden">
        <div className="flex items-center">
          <Link
            to={pagePath(locale, section.pageId)}
            className={`flex-1 min-w-0 text-left px-4 py-3 text-base ${mobileNavClass(highlighted)}`}
          >
            <InstitutionalNavLabel section={section} locale={locale} size="mobile" />
          </Link>
          <button
            type="button"
            onClick={() =>
              setIsMobileInstitutionalOpen((current) => (current === sectionId ? null : sectionId))
            }
            className={`mr-1 shrink-0 p-3 min-w-[44px] min-h-[44px] inline-flex items-center justify-center ${mobileNavClass(highlighted)}`}
            aria-expanded={isOpen}
            aria-label={section.dropdownTitle[locale]}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        {isOpen && (
          <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5">
            <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
              {section.dropdownTitle[locale]}
            </p>
            <p className="px-3 pb-1 text-xs font-light leading-relaxed text-brand-text-secondary">
              {section.dropdownHint[locale]}
            </p>
            {section.topics.length > 0 ? (
              section.topics.map((topic) => (
                <Link
                  key={topic.id}
                  to={institutionalTopicHref(locale, section, topic)}
                  onClick={() => {
                    setIsMobileInstitutionalOpen(null);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-3 py-2.5 min-h-[44px] rounded-lg text-sm text-brand-text-secondary hover:bg-brand-offwhite"
                >
                  {topic.label[locale]}
                </Link>
              ))
            ) : (
              <p className="px-3 py-2 text-xs font-light text-brand-text-secondary">
                {locale === 'uz'
                  ? "Mavzular tez orada qo'shiladi."
                  : locale === 'ru'
                    ? 'Темы будут добавлены в ближайшее время.'
                    : 'Topics will be added soon.'}
              </p>
            )}
            <Link
              to={pagePath(locale, section.pageId)}
              onClick={() => {
                setIsMobileInstitutionalOpen(null);
                setIsMobileMenuOpen(false);
              }}
              className="px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold text-brand-gold hover:bg-brand-gold-light/10"
            >
              {institutionalOverviewLabel}
            </Link>
          </div>
        )}
      </div>
    );
  };

  const renderDesktopPageNav = (entry: Extract<DesktopNavEntry, { kind: 'page' }>) => {
    const { item } = entry;
    const highlighted = isDesktopEntryActive(entry);

    if (item.id === 'about') {
      return (
        <div
          key={item.id}
          className="relative shrink-0"
          onMouseEnter={() => {
            setIsAboutDropdownOpen(true);
            setActiveMegaMenu(null);
            setIsArticlesDropdownOpen(false);
            setIsMoreDropdownOpen(false);
          }}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className={navTriggerClass(highlighted || isAboutDropdownOpen)}
            aria-haspopup="menu"
            aria-expanded={isAboutDropdownOpen}
          >
            {renderDesktopTriggerContent(entry, isAboutDropdownOpen)}
          </button>

          {isAboutDropdownOpen && (
            <NavDropdownPanel>
              <div
                className="w-max min-w-[260px] max-w-[340px] bg-white border border-slate-150 rounded-xl shadow-2xl py-2"
                role="menu"
              >
                <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1">
                  {BRAND_NAV_TITLE[locale]}
                </p>
                <Link
                  to={brandPath(locale)}
                  role="menuitem"
                  onClick={() => setIsAboutDropdownOpen(false)}
                  className={`block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
                    currentPage === 'brend'
                      ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
                      : 'text-brand-text-secondary hover:text-brand-text-primary'
                  }`}
                >
                  {BRAND_NAV_OVERVIEW[locale]}
                </Link>
              </div>
            </NavDropdownPanel>
          )}
        </div>
      );
    }

    if (item.id === 'daavlin-foto-kabinalari') {
      return (
        <div
          key={item.id}
          className="relative shrink-0"
          onMouseEnter={() => {
            setIsDaavlinDropdownOpen(true);
            setActiveMegaMenu(null);
            setIsArticlesDropdownOpen(false);
            setIsMoreDropdownOpen(false);
          }}
          onMouseLeave={() => setIsDaavlinDropdownOpen(false)}
        >
          <button
            type="button"
            onClick={() => onNavigate('daavlin-foto-kabinalari')}
            className={navTriggerClass(highlighted || isDaavlinDropdownOpen)}
            aria-haspopup="menu"
            aria-expanded={isDaavlinDropdownOpen}
            title={d.navDaavlinFotoKabinalari}
          >
            {renderDesktopTriggerContent(entry, isDaavlinDropdownOpen)}
          </button>

          {isDaavlinDropdownOpen && (
            <NavDropdownPanel>
              <div
                className="w-max min-w-[260px] max-w-[360px] bg-white border border-slate-150 rounded-xl shadow-2xl py-2"
                role="menu"
              >
                <p className="px-4 py-2 text-[10px] font-semibold leading-snug text-brand-gold border-b border-brand-sectiongray/60 mb-1">
                  {d.navDaavlinFotoKabinalari}
                </p>
                <p className="px-4 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold/80">
                  {DAAVLIN_MODELS_NAV_TITLE[locale]}
                </p>
                <div className={navDropdownScrollClass}>
                  {daavlinModels.map((model) => (
                    <Link
                      key={model.id}
                      to={daavlinModelPath(locale, model.id as DaavlinModelId)}
                      role="menuitem"
                      onClick={() => setIsDaavlinDropdownOpen(false)}
                      className={daavlinModelItemClass(model.id)}
                    >
                      {model.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-brand-sectiongray/60 mt-1 pt-1">
                  <Link
                    to={daavlinSectionPath(locale, 'cabins')}
                    onClick={() => setIsDaavlinDropdownOpen(false)}
                    className="block px-4 py-2.5 text-[12px] font-semibold text-brand-gold hover:bg-brand-gold-light/10"
                  >
                    {DAAVLIN_MODELS_NAV_ALL[locale]}
                  </Link>
                </div>
              </div>
            </NavDropdownPanel>
          )}
        </div>
      );
    }

    if (item.id === 'articles') {
      return (
        <div
          key={item.id}
          ref={articlesMenuRef}
          className="relative shrink-0"
          onMouseEnter={articlesMenuHover.keepOpen}
          onMouseLeave={(event) => articlesMenuHover.scheduleClose(event)}
        >
          <button
            type="button"
            onClick={() => onNavigate('articles')}
            className={navTriggerClass(highlighted || isArticlesDropdownOpen)}
            aria-haspopup="menu"
            aria-expanded={isArticlesDropdownOpen}
          >
            {renderDesktopTriggerContent(entry, isArticlesDropdownOpen)}
          </button>

          {isArticlesDropdownOpen && articleNavGroups.length > 0 && (
            <NavDropdownPanel className="-mt-1 pt-1">
              <div className={navDropdownShellClass} role="menu">
                <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1 bg-white">
                  {articlesDropdownTitle}
                </p>
                <div className={navDropdownScrollClass}>
                  {articleNavGroups.map((group) => renderArticleDropdownItem(group))}
                </div>
                <div className="border-t border-brand-sectiongray/60 mt-1 pt-1 bg-white">
                  <Link
                    to={articlesListPath(locale)}
                    onClick={() => setIsArticlesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-[12px] font-semibold text-brand-gold hover:bg-brand-gold-light/10"
                  >
                    {allArticlesLabel}
                  </Link>
                </div>
              </div>
            </NavDropdownPanel>
          )}
        </div>
      );
    }

    if (item.id === 'services') {
      return (
        <div
          key={item.id}
          ref={servicesMenuRef}
          className="relative shrink-0"
          onMouseEnter={servicesMenuHover.keepOpen}
          onMouseLeave={(event) => servicesMenuHover.scheduleClose(event)}
        >
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className={navTriggerClass(highlighted || isServicesDropdownOpen)}
            aria-haspopup="menu"
            aria-expanded={isServicesDropdownOpen}
          >
            {renderDesktopTriggerContent(entry, isServicesDropdownOpen)}
          </button>

          {isServicesDropdownOpen && (
            <NavDropdownPanel className="-mt-1 pt-1">
              <div className={navDropdownShellClass} role="menu">
                <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1 bg-white">
                  {servicesDropdownTitle}
                </p>
                <div className={navDropdownScrollClass}>
                  {navServiceCategories.map((category) => renderServiceDropdownItem(category))}
                </div>
                <div className="border-t border-brand-sectiongray/60 mt-1 pt-1 bg-white">
                  <Link
                    to={servicesListPath(locale)}
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-[12px] font-semibold text-brand-gold hover:bg-brand-gold-light/10"
                  >
                    {allServicesLabel}
                  </Link>
                </div>
              </div>
            </NavDropdownPanel>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.id}
        to={pagePath(locale, item.id)}
        className={`${navTriggerClass(highlighted)} shrink-0`}
        onMouseEnter={() => setActiveMegaMenu(null)}
        onClick={
          item.id === 'home' ? (event) => handleHomeLogoClick(event, currentPage === 'home') : undefined
        }
      >
        {item.label}
      </Link>
    );
  };

  const renderDesktopNavEntry = (entry: DesktopNavEntry) =>
    entry.kind === 'page' ? renderDesktopPageNav(entry) : renderInstitutionalDesktopNav(entry);

  const openMoreMenu = () => {
    if (moreCloseTimerRef.current) window.clearTimeout(moreCloseTimerRef.current);
    moreCloseTimerRef.current = null;
    setIsMoreDropdownOpen(true);
    setIsServicesDropdownOpen(false);
    setIsArticlesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsDaavlinDropdownOpen(false);
    setActiveMegaMenu(null);
  };

  const scheduleMoreMenuClose = () => {
    if (moreCloseTimerRef.current) window.clearTimeout(moreCloseTimerRef.current);
    moreCloseTimerRef.current = window.setTimeout(() => setIsMoreDropdownOpen(false), 220);
  };

  const getDesktopEntryLink = (entry: DesktopNavEntry) => {
    if (entry.kind === 'institutional') {
      const section = getInstitutionalNavSection(entry.sectionId);
      return {
        href: pagePath(locale, section.pageId),
        title: section.navShort?.[locale] ?? section.label[locale],
        subtitle: section.navSubtitle?.[locale],
      };
    }
    if (entry.item.id === 'daavlin-foto-kabinalari') {
      return {
        href: pagePath(locale, entry.item.id),
        title: d.navDaavlinShort,
        subtitle: d.navDaavlinSubtitle,
      };
    }
    return { href: pagePath(locale, entry.item.id), title: entry.item.label, subtitle: undefined };
  };

  const moreHighlighted = overflowDesktopEntries.some(isDesktopEntryActive) || isMoreDropdownOpen;

  const renderMoreMenu = () => (
    <div
      ref={moreMenuRef}
      className="relative shrink-0"
      onMouseEnter={openMoreMenu}
      onMouseLeave={scheduleMoreMenuClose}
    >
      <button
        type="button"
        onClick={() => (isMoreDropdownOpen ? setIsMoreDropdownOpen(false) : openMoreMenu())}
        className={navTriggerClass(moreHighlighted)}
        aria-haspopup="menu"
        aria-expanded={isMoreDropdownOpen}
      >
        {getMoreLabel(locale)}
        {navChevron(isMoreDropdownOpen)}
      </button>

      {isMoreDropdownOpen && (
        <NavDropdownPanel align="right">
          <div
            className="w-max min-w-[240px] max-w-[min(320px,calc(100vw-1.5rem))] bg-white border border-slate-150 rounded-xl shadow-2xl py-2"
            role="menu"
          >
            <div className={navDropdownScrollClass}>
              {overflowDesktopEntries.map((entry) => {
                const link = getDesktopEntryLink(entry);
                const active = isDesktopEntryActive(entry);
                return (
                  <Link
                    key={entry.key}
                    to={link.href}
                    role="menuitem"
                    onClick={() => setIsMoreDropdownOpen(false)}
                    className={`block px-4 py-2.5 transition-colors hover:bg-brand-offwhite ${
                      active ? 'bg-brand-gold-light/10' : ''
                    }`}
                  >
                    <span
                      className={`block text-[13px] font-semibold leading-snug ${
                        active ? 'text-brand-gold-dark' : 'text-brand-text-primary'
                      }`}
                    >
                      {link.title}
                    </span>
                    {link.subtitle && (
                      <span className="block text-[11px] font-medium leading-snug text-brand-text-muted mt-0.5">
                        {link.subtitle}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </NavDropdownPanel>
      )}
    </div>
  );

  const renderMobileNavItem = (item: { id: PageId; label: string }) => {
    const highlighted = isPageActive(item.id);

    if (item.id === 'about') {
      return (
        <div key={item.id} className="rounded-lg overflow-hidden">
          <div className="flex items-center">
            <Link
              to={pagePath(locale, 'about')}
              className={`flex-1 min-w-0 text-left px-4 py-3 text-base ${mobileNavClass(highlighted)}`}
            >
              {item.label}
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileAboutOpen((open) => !open)}
              className={`mr-1 shrink-0 p-3 min-w-[44px] min-h-[44px] inline-flex items-center justify-center ${mobileNavClass(highlighted)}`}
              aria-expanded={isMobileAboutOpen}
              aria-label={BRAND_NAV_TITLE[locale]}
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileAboutOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
          {isMobileAboutOpen && (
            <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                {BRAND_NAV_TITLE[locale]}
              </p>
              <Link
                to={brandPath(locale)}
                onClick={() => {
                  setIsMobileAboutOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 min-h-[44px] rounded-lg text-sm text-brand-text-secondary hover:bg-brand-offwhite"
              >
                {BRAND_NAV_OVERVIEW[locale]}
              </Link>
            </div>
          )}
        </div>
      );
    }

    if (item.id === 'daavlin-foto-kabinalari') {
      return (
        <div key={item.id} className="rounded-lg overflow-hidden">
          <div className="flex items-center">
            <Link
              to={pagePath(locale, 'daavlin-foto-kabinalari')}
              className={`flex-1 min-w-0 text-left px-4 py-3 text-base ${mobileNavClass(highlighted)}`}
            >
              <DaavlinNavLabel locale={locale} size="mobile" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileDaavlinOpen((open) => !open)}
              className={`mr-1 shrink-0 p-3 min-w-[44px] min-h-[44px] inline-flex items-center justify-center ${mobileNavClass(highlighted)}`}
              aria-expanded={isMobileDaavlinOpen}
              aria-label={DAAVLIN_MODELS_NAV_TITLE[locale]}
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileDaavlinOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
          {isMobileDaavlinOpen && (
            <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                {DAAVLIN_MODELS_NAV_TITLE[locale]}
              </p>
              {daavlinModels.map((model) => (
                <Link
                  key={model.id}
                  to={daavlinModelPath(locale, model.id as DaavlinModelId)}
                  onClick={() => {
                    setIsMobileDaavlinOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2.5 min-h-[44px] rounded-lg text-sm hover:bg-brand-offwhite ${
                    activeDaavlinModelId === model.id
                      ? 'font-semibold text-brand-gold-dark bg-brand-gold-light/10'
                      : 'text-brand-text-secondary'
                  }`}
                >
                  {model.name}
                </Link>
              ))}
              <Link
                to={daavlinSectionPath(locale, 'cabins')}
                onClick={() => {
                  setIsMobileDaavlinOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold text-brand-gold hover:bg-brand-gold-light/10"
              >
                {DAAVLIN_MODELS_NAV_ALL[locale]}
              </Link>
            </div>
          )}
        </div>
      );
    }

    if (item.id !== 'services' && item.id !== 'articles') {
      return (
        <Link
          key={item.id}
          to={pagePath(locale, item.id)}
          className={`w-full text-left px-4 py-3 text-base ${mobileNavClass(highlighted)}`}
        >
          {item.label}
        </Link>
      );
    }

    if (item.id === 'articles') {
      return (
        <div key={item.id} className="rounded-lg overflow-hidden">
          <div className="flex items-stretch min-h-[48px]">
            <Link
              to={articlesListPath(locale)}
              className={`flex-1 min-w-0 text-left px-4 py-3 text-base touch-manipulation ${mobileNavClass(highlighted)}`}
            >
              {item.label}
            </Link>
            <button
              type="button"
              onClick={() => {
                setIsMobileArticlesOpen((open) => !open);
                if (isMobileArticlesOpen) {
                  setIsMobileArticleCategoryOpen(null);
                }
              }}
              className={`mr-1 shrink-0 px-3 py-3 min-w-[48px] min-h-[48px] inline-flex items-center justify-center touch-manipulation ${mobileNavClass(highlighted)}`}
              aria-expanded={isMobileArticlesOpen}
              aria-label={articlesDropdownTitle}
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileArticlesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          {isMobileArticlesOpen && (
            <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5 pb-1">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                {articlesDropdownTitle}
              </p>
              {articleNavGroups.map((group) => renderMobileArticleCategoryItem(group))}
              <Link
                to={articlesListPath(locale)}
                onClick={() => {
                  setIsMobileArticlesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold text-brand-gold hover:bg-brand-gold-light/10 touch-manipulation"
              >
                {allArticlesLabel}
              </Link>
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={item.id} className="rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileServicesOpen((open) => !open)}
          className={`w-full text-left px-4 py-3 text-base inline-flex items-center justify-between ${mobileNavClass(highlighted)}`}
          aria-expanded={isMobileServicesOpen}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isMobileServicesOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isMobileServicesOpen && (
          <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5">
            <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
              {servicesDropdownTitle}
            </p>
            {navServiceCategories.map((category) => renderMobileServiceCategoryItem(category))}
            <Link
              to={servicesListPath(locale)}
              onClick={() => {
                setIsMobileServicesOpen(false);
                setIsMobileMenuOpen(false);
              }}
              className="px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold text-brand-gold hover:bg-brand-gold-light/10"
            >
              {allServicesLabel}
            </Link>
          </div>
        )}
      </div>
    );
  };

  const renderPhoneLink = (phone: { display: string; tel: string }, className = '') => (
    <a
      href={`tel:${phone.tel}`}
      className={`phone-call-link shrink-0 cursor-pointer ${className}`}
      aria-label={`${callLabel}: ${phone.display}`}
    >
      <span className="phone-call-link__wrap">
        <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span className="phone-call-link__number phone-call-link__number--topbar whitespace-nowrap">
          {phone.display}
        </span>
      </span>
    </a>
  );

  return (
    <header
      id="main-app-header"
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'border-b border-slate-100'
      }`}
    >
      {/* Tablet & desktop contact bar — collapses once the page is scrolled. */}
      <div className={`header-collapse hidden md:grid ${isScrolled ? 'is-collapsed' : ''}`} aria-hidden={isScrolled}>
        <div className="header-collapse__inner">
          <div className="site-container flex items-center gap-4 xl:gap-6 py-2 border-b border-slate-100 header-topbar">
            {branchContacts.map((branch) => (
              <div key={branch.key} className="flex items-center gap-2 xl:gap-3 min-w-0">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${branch.address} — ${mapOpenLabel}`}
                  className="header-address-link min-w-0 text-slate-600 font-medium"
                  tabIndex={isScrolled ? -1 : undefined}
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" aria-hidden="true" />
                  <span className="shrink-0 font-semibold text-slate-700 xl:hidden">{branch.city}</span>
                  <span className="hidden xl:block min-w-0 truncate">{branch.address}</span>
                </a>
                {renderPhoneLink(branch.phone)}
              </div>
            ))}

            <div className="ml-auto shrink-0 flex items-center gap-3">
              <span className="hidden lg:inline-flex items-center gap-1.5 text-brand-gold font-semibold whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span className="2xl:hidden">{d.workingHoursShort ?? d.workingHoursValue}</span>
                <span className="hidden 2xl:inline">{d.workingHoursValue}</span>
              </span>
              {renderLanguageSwitcher('topbar')}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={mainRowRef}
        className="site-container flex items-center gap-1.5 min-[360px]:gap-2 lg:gap-3 h-[60px] lg:h-[68px]"
      >
        <Link
          to={pagePath(locale, 'home')}
          onClick={(event) => {
            if (currentPage === 'home') {
              handleHomeLogoClick(event, true);
            } else {
              onNavigate('home');
            }
          }}
          onMouseEnter={() => setActiveMegaMenu(null)}
          className="relative flex items-center cursor-pointer group shrink-0"
          aria-label="Radeski Skin Clinic"
        >
          <SiteLogo variant="header" className="group-hover:opacity-90 transition-opacity" />
        </Link>

        <nav
          ref={priorityNav.containerRef}
          className="relative hidden lg:flex flex-1 min-w-0 items-center justify-center"
          aria-label={locale === 'ru' ? 'Основное меню' : locale === 'en' ? 'Main menu' : 'Asosiy menyu'}
        >
          <div className="flex items-center gap-0.5 xl:gap-1">
            {visibleDesktopEntries.map(renderDesktopNavEntry)}
            {overflowDesktopEntries.length > 0 && renderMoreMenu()}
          </div>

          {/* Invisible measuring row for the priority+ nav (same markup and classes as the triggers). */}
          <div className="absolute inset-0 overflow-hidden invisible pointer-events-none" aria-hidden="true">
            <div ref={priorityNav.measureRef} className="flex w-max items-center gap-0.5 xl:gap-1">
              {desktopNavEntries.map((entry) => (
                <span key={entry.key} className={`${navTriggerClass(isDesktopEntryActive(entry))} shrink-0`}>
                  {renderDesktopTriggerContent(entry)}
                </span>
              ))}
              <span data-nav-more="" className={`${navTriggerClass(false)} shrink-0`}>
                {getMoreLabel(locale)}
                {navChevron(false)}
              </span>
            </div>
          </div>
        </nav>

        <div
          className="ml-auto lg:ml-0 flex items-center gap-1.5 min-[360px]:gap-2 shrink-0"
          onMouseEnter={() => setActiveMegaMenu(null)}
        >
          <div className="hidden min-[360px]:block md:hidden">{renderLanguageSwitcher('main')}</div>

          <AppointmentBookingLink className="sm:hidden header-appointment-btn header-appointment-btn--compact bg-brand-gold hover:bg-brand-gold-dark text-white rounded-lg active:scale-[0.98] transition-colors cursor-pointer no-underline">
            {getCompactAppointmentLabel(locale)}
          </AppointmentBookingLink>

          {/* Wrapper owns visibility: .cta-pulse-ring sets display and would override `hidden`. */}
          <div className="hidden sm:block">
            <AppointmentBookingLink className="cta-pulse-ring cta-pulse-ring--button header-appointment-btn header-appointment-btn--nav bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl active:scale-[0.98] transition-colors cursor-pointer no-underline">
              {d.appointmentBtn}
            </AppointmentBookingLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Phone contact strip — one compact row, collapses once the page is scrolled. */}
      <div
        className={`header-collapse grid md:hidden ${isScrolled || isMobileMenuOpen ? 'is-collapsed' : ''}`}
        aria-hidden={isScrolled}
      >
        <div className="header-collapse__inner">
          <div className="site-container grid grid-cols-2 gap-2 pb-2">
            {branchContacts.map((branch) => (
              <a
                key={branch.key}
                href={`tel:${branch.phone.tel}`}
                className="flex flex-col items-center justify-center min-w-0 rounded-lg border border-brand-gold/20 bg-brand-gold-light/5 px-1 py-1.5 leading-tight no-underline"
                aria-label={`${callLabel} ${branch.city}: ${branch.phone.display}`}
                tabIndex={isScrolled ? -1 : undefined}
              >
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  <Phone className="w-3 h-3 text-brand-gold" aria-hidden="true" />
                  {branch.city}
                </span>
                <span className="phone-call-link__number text-[11px] min-[380px]:text-[12px] tracking-normal whitespace-nowrap">
                  {branch.phone.display}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-x-0 bottom-0 top-(--app-header-live-h) bg-slate-900/30"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-panel"
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl max-h-[calc(100dvh-var(--app-header-live-h))] overflow-y-auto overscroll-contain header-mobile-nav-panel"
          >
            <div className="site-container py-4">
              <div className="flex items-center justify-between gap-3 mb-3 min-[360px]:hidden">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Globe className="inline w-3.5 h-3.5 mr-1 -mt-0.5" aria-hidden="true" />
                  {getLanguageLabel(locale)}
                </span>
                <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
                  {(['uz', 'ru', 'en'] as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => onChangeLocale(lang)}
                      className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase ${
                        lang === locale ? 'bg-white text-brand-gold-dark shadow-sm' : 'text-slate-600'
                      }`}
                      aria-pressed={lang === locale}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <nav className="flex flex-col gap-1 mb-4">
                {navItems.map((item) => renderMobileNavItem(item))}
                {INSTITUTIONAL_NAV_ORDER.map((sectionId) => renderInstitutionalMobileNav(sectionId))}
              </nav>

              <div className="border-t border-brand-sectiongray pt-4 flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {branchContacts.map((branch) => (
                    <div
                      key={branch.key}
                      className="rounded-xl border border-brand-gold/25 bg-brand-gold-light/5 p-3 flex flex-col gap-2 min-w-0"
                    >
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-address-link items-start text-[13px] text-slate-700 leading-snug"
                        title={mapOpenLabel}
                      >
                        <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="min-w-0 break-words">{branch.address}</span>
                      </a>
                      {renderPhoneLink(branch.phone, 'self-start')}
                    </div>
                  ))}
                </div>
                <p className="flex items-start gap-1.5 text-xs text-slate-600 leading-snug">
                  <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{d.workingHoursValue}</span>
                </p>
                <AppointmentBookingLink
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cta-pulse-ring cta-pulse-ring--button header-appointment-btn header-appointment-btn--mobile w-full bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl text-center transition-colors no-underline"
                >
                  {d.appointmentBtn}
                </AppointmentBookingLink>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
