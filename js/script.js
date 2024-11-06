const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll(".nav-item");

const handleMenuOpen = () => {
  document.querySelector(".nav").classList.toggle("open");
};

const handleMenuClose = () => {
  document.querySelector(".nav").classList.remove("open");
};

const handleSectionChange = (sec, btn) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  handleMenuClose();

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

const collapsedContentElements =
  document.querySelectorAll("#collapsed-content");
const arrows = document.querySelectorAll("#arrow");

const handleCollapse = (content) => {
  if (collapsedContentElements[content].classList.contains("collapsed")) {
    collapsedContentElements[content].classList.remove("collapsed");
    arrows[content].classList.add("rotate");
  } else {
    collapsedContentElements[content].classList.add("collapsed");
    arrows[content].classList.remove("rotate");
  }
};

const form = document.querySelector("#contactForm");

// Event listener that displays a successful message when the form is submitted
form.addEventListener(
  "submit",
  (handleSubmit = (e) => {
    e.preventDefault();
    form.reset();
    Swal.fire({
      title: "Done!",
      text: "Message sent successfuly!",
      icon: "OK",
      color: "#fff",
      background: "#000",
      customClass: {
        container: "...",
        popup: "popup-container",
        header: "...",
        title: "...",
        closeButton: "...",
        icon: "...",
        image: "...",
        htmlContainer: "...",
        confirmButton: "button",
      },
    });
  })
);

const backdrop = document.querySelector(".backdrop");

function closeResumePreview(event) {
  if (event.target.classList.contains("backdrop")) {
    toggleResumePreview();
  }
}
function toggleResumePreview() {
  backdrop.classList.toggle("hidden");
}
