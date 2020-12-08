import './styles.css';
import * as loader from './page-load.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadLocations from './locations.js';
import loadAboutUs from './about-us.js';
import loadContactUs from './contact-us.js';
import loadCareers from './careers.js';



loader.loadPage();

console.log('HIIII!!!');

const tabs = document.querySelectorAll('.tablink');
const contents = document.querySelectorAll('.tabcontent');

function switchTab(e) {



    let tabPos = Array.prototype.indexOf.call(tabs, e.target);

    //clears each tab until callled

    contents.forEach((content) => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    });

    //removes active class from every tab

    tabs.forEach((tab) => {
        tab.classList.remove('active');
    })

    contents.forEach((content) => {
        content.style.display = "none";
    })

    
    function loadTab(loader) {
        tabs[tabPos].classList.add('active');
        loader();
        contents[tabPos].style.display = 'block';

    }

    switch (contents[tabPos].id) {
        case 'Home':
            loadTab(loadHome);
            break;
        case 'Menu':
            loadTab(loadMenu);
            break;
        case 'Locations':
            loadTab(loadLocations);
            break;
        case 'about-us':
            loadTab(loadAboutUs);
            break;
        case 'contact-us':
            loadTab(loadContactUs);
            break;
        case 'Careers':
            loadTab(loadCareers);
            break;
    }
}


tabs.forEach((tab) => {
    tab.addEventListener('click', switchTab);
})

document.getElementById('defaultOpen').click();
 


