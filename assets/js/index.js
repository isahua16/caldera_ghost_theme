// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import infiniteScroll from "./infiniteScroll";

// Call the menu and infinite scroll functions
infiniteScroll();

function open_nav() {
    let nav = document.querySelector(`#mobile_nav`);
    nav.style.paddingBottom = `40px`;
    nav.style.visibility = `visible`;
    nav.style.opacity = `1`;
    nav.style.height = `200px`;
}

let menu = document.querySelector(`#menu_icon`);
menu.addEventListener(`click`, open_nav);
