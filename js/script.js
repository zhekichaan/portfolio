// Select all section and navigation button elements
const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll(".nav-item");

// Function to toggle the mobile menu open or closed
const handleMenuOpen = () => {
  document.querySelector(".nav").classList.toggle("open");
};

// Function to close the mobile menu
const handleMenuClose = () => {
  document.querySelector(".nav").classList.remove("open");
};

// Function to handle section changes when navigation buttons are clicked
const handleSectionChange = (sec, btn) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  // Close the menu if open (especially useful for mobile view)
  handleMenuClose();

  // Update navigation button styles
  navButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });

  // Show the selected section and hide others
  navButtons[btn].classList.add("selected");
  sections.forEach((section) => {
    if (section.id.includes(sec)) {
      section.classList.add("selected");
    } else {
      section.classList.remove("selected");
    }
  });
};

// Select elements that contain collapsible content and their associated arrows
const collapsedContentElements =
  document.querySelectorAll("#collapsed-content");
const arrows = document.querySelectorAll("#arrow");

// Function to handle the collapse/expand of content sections
const handleCollapse = (content) => {
  if (collapsedContentElements[content].classList.contains("collapsed")) {
    collapsedContentElements[content].classList.remove("collapsed");
    arrows[content].classList.add("rotate");
  } else {
    collapsedContentElements[content].classList.add("collapsed");
    arrows[content].classList.remove("rotate");
  }
};

// Form submission handling
const form = document.querySelector("#contactForm");

// Event listener for form submission to display a success message
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

// Backdrop element for resume preview
const backdrop = document.querySelector(".backdrop");

// Close resume preview if the backdrop is clicked
function closeResumePreview(event) {
  if (event.target.classList.contains("backdrop")) {
    toggleResumePreview();
  }
}

// Toggle function to show or hide the resume preview
function toggleResumePreview() {
  backdrop.classList.toggle("hidden");
}
