// Get all cards below header
const sections = document.querySelectorAll("section");
// Get the service section
const service = document.getElementById("service");

// Check if the section top of each section is within half of the window
function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight / 2) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
};

// Initial check when the page loads
checkScroll();

// Check when scrolling
window.addEventListener("scroll", checkScroll);

function scrollToId(id, product) {

    // Scrolling Edits since scrollIntoView method is terrible
    const target = document.getElementById(`${id}`);
    const yOffset = -40;
    const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top : y, behavior : 'smooth'});

    // If the product parameter is passed, set the value of the service element
    if (product) {
        service.value = product;
    }
};