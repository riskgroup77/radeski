/**
 * Starts downloading the code of the page being opened as soon as the app boots.
 *
 * Route pages are lazy (App.tsx), and most of them render only after the site data has loaded,
 * so without this their code would start downloading only after the data — one more round trip
 * before the main content shows. The import paths are the same as in App.tsx, so the module is
 * fetched once and React.lazy reuses it.
 */
export function prefetchRouteChunk(pathname: string): void {
  const [, section, first, second] = pathname.split('/').filter(Boolean);
  const load = (() => {
    switch (section) {
      case 'services':
        if (!first) return () => import('../components/Services');
        if (!second) return () => import('../components/ServiceCategoryPage');
        return first === 'apparatnaya-kosmetologiya'
          ? () =>
              Promise.all([
                import('../components/ClinicEquipmentPage'),
                import('../components/ServiceSubPage'),
                import('../data/equipment/equipmentDetails').then((m) => m.loadEquipmentDetails(second)),
              ])
          : () => import('../components/ServiceSubPage');
      case 'doctors':
        return first ? () => import('../components/DoctorPage') : () => import('../components/Doctors');
      case 'articles':
        return first ? () => import('../components/ArticlePage') : () => import('../components/Articles');
      case 'conditions':
        return () => import('../components/DermatologyConditionPage');
      case 'fargona':
      case 'qoqon':
        return first ? () => import('../components/LocalCommercialLandingPage') : null;
      case 'prices':
        return () => import('../components/Prices');
      case 'results':
        return () => import('../components/ResultsPage');
      default:
        return null;
    }
  })();
  if (load) void load().catch(() => {});
}
