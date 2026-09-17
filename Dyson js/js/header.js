export function headerIndent() {
  const headerSection = document.querySelector("header");
  const mainSection = document.querySelector("main");

  const updateHeaderHeight = () => {
    if (!headerSection || !mainSection) return;
    const height = headerSection.offsetHeight;
    mainSection.style.marginTop = `${height}px`;
  };

  const hendleHeaderScroll = () => {
    if (!headerSection) return;

    if (window.scrollY > 0) {
      headerSection.classList.add("header--fixed");
    } else {
      headerSection.classList.remove("header--fixed");
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    updateHeaderHeight();
    hendleHeaderScroll();
  });
  window.addEventListener("resize", updateHeaderHeight);
  window.addEventListener("scroll", hendleHeaderScroll);
}
