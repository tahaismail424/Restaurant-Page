import './styles.css';
require('tabsy-css/dist/tabsy.css');
import pageLoad from './page-load.js';
import loadHome from './home.js';
import loadMenu from './home.js';
import loadLocation from './home.js';
import loadAboutUs from './home.js';
import loadContactUs from './home.js';
import loadCareers from './home.js';

pageLoad();
document.getElementById('tab1').checked = true;
console.log('HIIII!!!');

const tabs= document.querySelectorAll('input[name="tab"]');
const contents = document.querySelectorAll('.content');

function switchTab(e) {

    let tabPos = Array.prototype.indexOf.call(tabs, e.target);

    //clears each tab until callled

    contents.forEach((content) => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    });

    switch (contents[tabPos].id) {
        case 'home':
            loadHome();
            break;
        case 'menu':
            loadMenu();
            break;
        case 'location':
            loadLocation();
            break;
        case 'about-us':
            loadAboutUs();
            break;
        case 'contact-us':
            loadContactUs();
            break;
        case 'careers':
            loadCareers();
            break;
    }
}


tabs.forEach((tab) => {
    tab.addEventListener('click', switchTab);
})
 


