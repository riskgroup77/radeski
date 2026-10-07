import { lazy, type ComponentType } from 'react';

const RELOAD_FLAG = 'radeski_chunk_reload_v1';

/**
 * `React.lazy` for route-level pages, so each page's code downloads only when visited.
 *
 * After a deploy the old hashed chunks are gone; a tab opened before the deploy would then
 * fail to load the next page ("Failed to fetch dynamically imported module"). In that case
 * reload once to pick up the new build instead of showing a blank page.
 */
export function lazyPage<T extends ComponentType<any>>(load: () => Promise<{ default: T }>) {
  return lazy(async () => {
    try {
      const module = await load();
      try {
        sessionStorage.removeItem(RELOAD_FLAG);
      } catch {
        // ignore
      }
      return module;
    } catch (error) {
      let alreadyReloaded = false;
      try {
        alreadyReloaded = sessionStorage.getItem(RELOAD_FLAG) === '1';
        if (!alreadyReloaded) sessionStorage.setItem(RELOAD_FLAG, '1');
      } catch {
        alreadyReloaded = true; // no storage — avoid a reload loop
      }
      if (!alreadyReloaded) {
        window.location.reload();
        return new Promise<never>(() => {}); // the page is reloading
      }
      throw error;
    }
  });
}
