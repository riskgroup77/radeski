/** Bosh sahifa yoki boshqa sahifada yuqoriga scroll */
export function scrollToPageTop(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({ top: 0, left: 0, behavior });
}

/** Logo bosilganda: boshqa sahifada — home ga; allaqachon home da — tepaga scroll */
export function handleHomeLogoClick(
  event: { preventDefault: () => void },
  isOnHome: boolean,
): void {
  if (isOnHome) {
    event.preventDefault();
    scrollToPageTop('smooth');
  }
}
