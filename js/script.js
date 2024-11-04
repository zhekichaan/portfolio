const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll(".nav-item");

const handleSectionChange = (sec, btn) => {
  navButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });

  navButtons[btn].classList.add("selected");
  sections.forEach((section) => {
    if (section.id.includes(sec)) {
      section.classList.add("selected");
    } else {
      section.classList.remove("selected");
    }
  });
};
