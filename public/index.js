// Add a class to the navigation menu when the user scrolls down
window.onscroll = function () {
    addStickyClass();
};

function addStickyClass() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

