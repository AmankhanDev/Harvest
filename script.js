
const menuList = document.querySelector('.menuList');
const hamIcon = document.querySelector('.icon_container');

// Toggle menu when the hamburger icon is clicked
hamIcon.addEventListener('click', function (event) {
    menuList.classList.toggle('active');
    event.stopPropagation(); // Prevent click event from bubbling to the window
});

// Close the menu when clicking outside
window.addEventListener('click', function (event) {
    // Check if the click happened outside the menuList and hamIcon
    if (!menuList.contains(event.target) && !hamIcon.contains(event.target)) {
        menuList.classList.remove('active'); // Close the menu
    }
});



const navLinks = document.querySelectorAll(".menuList a");
const navbar = document.querySelector('.logo_text');
const hamburger = document.querySelector('.menu_btn');

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Check if scroll position is greater than or equal to 100vh
    if (scrollPosition >= viewportHeight) {
        navLinks.forEach(link => link.style.color = "black");
        navbar.style.color = 'black';
        hamburger.style.color = 'black';
    } else {
        navLinks.forEach(link => link.style.color = "black");
        navbar.style.color = 'black';
        hamburger.style.color = 'black';
    }
});

