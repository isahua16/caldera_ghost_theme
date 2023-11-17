// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import infiniteScroll from "./infiniteScroll";

// Call the menu and infinite scroll functions
infiniteScroll();

function open_nav() {
    let nav = document.querySelector(`#mobile_nav`);
    nav.classList.toggle(`opened_menu`);
    if (nav.classList.contains(`opened_menu`)) {
        menu.setAttribute(`src`, `/assets/images/x.svg`);
    } else {
        menu.setAttribute(`src`, `/assets/images/menu.svg`);
    }
}

function scroll_to_top() {
    window.scrollTo({
        top: 0,
    });
}

let menu = document.querySelector(`#menu_icon`);
menu.addEventListener(`click`, open_nav);

let mobile_links = document.querySelectorAll(`.anchor_link`);
for (let i = 0; i < mobile_links.length; i++) {
    mobile_links[i].addEventListener(`click`, open_nav);
}

let scroll_top_btn = document.querySelector(`#arrow_icon`);
scroll_top_btn.addEventListener(`click`, scroll_to_top);
