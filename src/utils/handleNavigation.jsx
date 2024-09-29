export const handleNavigation = (navigate, section) => {
  navigate("/");

  setTimeout(() => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      const headerOffset = 200;
      const elementPosition =
        targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Section with ID "${section}" not found.`);
    }
  }, 200);
};
