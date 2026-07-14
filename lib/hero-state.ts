// Tiny module-level store so the hero can tell the background when the
// intro countdown/reveal has finished. Decoupled (no context provider needed).

let _done = false;
const listeners = new Set<() => void>();

export const heroState = {
  getSnapshot: () => _done,
  setDone: (v: boolean) => {
    if (_done === v) return;
    _done = v;
    listeners.forEach((l) => l());
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
};
