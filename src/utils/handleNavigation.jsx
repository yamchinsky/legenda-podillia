export const handleNavigation = (navigate, section) => {
  navigate('/');

  setTimeout(() => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID "${section}" not found.`);
    }
  }, 200);
};
