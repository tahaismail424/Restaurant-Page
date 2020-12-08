import brewLogo from './assets/brewster-logo.jpg';
import peach from './assets/peach.png'
import leaf from './assets/leaf.png'
import home from './assets/house.png'

export function createElement(type, text, parent, img) {
    let ele = document.createElement(type);
    let eleText = document.createTextNode(text);
    ele.appendChild(eleText);
    parent.appendChild(ele);
    if (img) ele.src = img;
    return ele;
}
export function loadPage () {

    const webPage = document.querySelector('#content');
    console.log("You smell like beef");  
    
    let peachPic = createElement('img', '', webPage, peach);
    peachPic.classList.add('peach');
    let leafPic = createElement('img', '', webPage, leaf);
    leafPic.classList.add('leaf');
    let homePic = createElement('img', '', webPage, home);
    homePic.classList.add('home');

    //title

    let titleBox = createElement('div', "The Roost", webPage);
    titleBox.setAttribute('id', 'title-box');

    //logo
    let logo = createElement('img', '', titleBox, brewLogo);
    logo.setAttribute('id', 'logo');

    let tabs = createElement('div', '', webPage);
    tabs.classList.add('tab');

    function makeTab(name) {
        let tab;
        if (name === 'about-us') tab = createElement('button', "About Us", tabs);
        else if (name === 'contact-us') tab = createElement('button', "Contact Us", tabs);
        else tab = createElement('button', name, tabs);
        tab.classList.add(name);
        tab.classList.add('tablink');

        if (name === 'about-us') tab.setAttribute('id', 'defaultOpen');

        return tab;
    }

    function makeTabContent(name) {
        let tabContent = createElement('div', name, tabs);
        tabContent.setAttribute('id', name);
        tabContent.classList.add('tabcontent');

        return tabContent;

    }

    let tabNames = ['Home', 'Menu', 'Locations',
'about-us', 'contact-us', 'Careers'];
    for (let i = 0; i < 6; i++) {
        makeTab(tabNames[i]);
    }
    for (let i = 0; i < 6; i++) {
        makeTabContent(tabNames[i]);
    }
    
}







