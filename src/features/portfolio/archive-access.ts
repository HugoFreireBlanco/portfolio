const key = 'hugo-backup-access-v1';
const mobileUserAgent = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let unlocked = mobileUserAgent;
try { unlocked ||= sessionStorage.getItem(key) === 'true'; } catch { /* Session storage is optional. */ }

export const hasArchiveAccess = () => unlocked;
export function unlockArchive() {
  unlocked = true;
  try { sessionStorage.setItem(key, 'true'); } catch { /* Keep the in-memory choice. */ }
  window.dispatchEvent(new Event('archiveaccess'));
}
