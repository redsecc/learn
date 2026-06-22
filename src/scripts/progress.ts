// Learner progress — localStorage only, no server calls.
// Key: redsec:progress → JSON array of completed lesson slugs.
// Everything degrades gracefully when storage is unavailable.

export const KEY = 'redsec:progress';
const EVENT = 'redsec:progress-change';

export function storageAvailable(): boolean {
  try {
    const t = '__redsec_probe__';
    localStorage.setItem(t, '1');
    localStorage.removeItem(t);
    return true;
  } catch {
    return false;
  }
}

export function getCompleted(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export function isComplete(slug: string): boolean {
  return getCompleted().includes(slug);
}

export function setComplete(slug: string, complete: boolean): void {
  let list = getCompleted();
  if (complete) {
    if (!list.includes(slug)) list = [...list, slug];
  } else {
    list = list.filter((s) => s !== slug);
  }
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable — no-op, UI handles the fallback */
  }
  emit();
}

export function resetProgress(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* no-op */
  }
  emit();
}

function emit(): void {
  window.dispatchEvent(new CustomEvent(EVENT));
}

// Subscribe to progress changes from this tab and from other tabs.
export function onChange(cb: () => void): void {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', (e) => {
    if (e.key === KEY || e.key === null) cb();
  });
}
