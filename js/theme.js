// Scripts for light or dark theme
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

const favicon = document.getElementById('favicon');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('footer');

// Check if the user has selected a dark color scheme
if (systemSettingDark.matches) {
    // Apply the dark theme
    navbar.classList.add('navbar-dark', 'bg-dark');
    footer.classList.add('bg-dark', 'text-light');
    favicon.href = "./assets/favicon.ico";
} else {
    // Apply the light theme
    navbar.classList.add('navbar-light', 'bg-light');
    footer.classList.add('bg-light', 'text-dark');
    favicon.href = "./assets/favicon-light.ico";
}
  
// Add an event listener to the systemSettingLight media query
// to detect changes in the user's theme preference
systemSettingDark.addEventListener("change", (event) => {
    if (event.matches) {
        // Apply the dark theme
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');   

        footer.classList.remove('bg-light', 'text-dark');
        footer.classList.add('bg-dark', 'text-light');

        favicon.href = "./assets/favicon.ico";
    } else {
        // Apply the light theme
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');

        footer.classList.remove('bg-dark', 'text-light');
        footer.classList.add('bg-light', 'text-dark');

        favicon.href = "./assets/favicon-light.ico";
    }
});

systemSettingLight.addEventListener("change", (event) => {
    if (event.matches) {
        // Apply the light theme
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');

        footer.classList.remove('bg-dark', 'text-light');
        footer.classList.add('bg-light', 'text-dark');

        favicon.href = "./assets/favicon-light.ico";
    } else {
        // Apply the dark theme
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');

        footer.classList.remove('bg-light', 'text-dark');
        footer.classList.add('bg-dark', 'text-light');

        favicon.href = "./assets/favicon.ico";
    }
});
