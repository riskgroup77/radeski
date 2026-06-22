const DB_NAME = 'radeski_local_media_v1';
const STORE_NAME = 'files';
const MEDIA_REF_PREFIX = 'radeski-media://';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('IndexedDB open failed'));
  });
}

export function isLocalMediaRef(value: string | null | undefined): value is string {
  return Boolean(value?.startsWith(MEDIA_REF_PREFIX));
}

export function createLocalMediaRef(key: string): string {
  return `${MEDIA_REF_PREFIX}${key}`;
}

export async function saveLocalMedia(key: string, file: File | Blob): Promise<string> {
  const ref = createLocalMediaRef(key);
  const db = await openDb();

  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(file, ref);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB write failed'));
  });

  db.close();
  return ref;
}

export async function getLocalMediaBlob(ref: string): Promise<Blob | null> {
  if (!isLocalMediaRef(ref)) return null;

  const db = await openDb();
  const blob = await new Promise<Blob | null>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).get(ref);
    request.onsuccess = () => resolve((request.result as Blob | undefined) ?? null);
    request.onerror = () => reject(request.error ?? new Error('IndexedDB read failed'));
  });

  db.close();
  return blob;
}

export async function resolveMediaUrl(source: string | null | undefined): Promise<string | null> {
  if (!source) return null;
  if (!isLocalMediaRef(source)) return source;

  const blob = await getLocalMediaBlob(source);
  if (!blob) return null;
  return URL.createObjectURL(blob);
}

export async function deleteLocalMedia(ref: string | null | undefined): Promise<void> {
  if (!isLocalMediaRef(ref)) return;

  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(ref);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB delete failed'));
  });
  db.close();
}

export function isBlobUrl(url: string | null | undefined): boolean {
  return Boolean(url?.startsWith('blob:'));
}

export async function clearAllLocalMedia(): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB clear failed'));
  });
  db.close();
}
