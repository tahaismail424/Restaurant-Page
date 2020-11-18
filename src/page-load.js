import brewLogo from './assets/brewster-logo.jpg';

function createElement(type, text, parent, img) {
    let ele = document.createElement(type);
    let eleText = document.createTextNode(text);
    ele.appendChild(eleText);
    parent.appendChild(ele);
    if (img) ele.src = img;
    return ele;
}
function loadPage () {

    const webPage = document.querySelector('#content');
    console.log("You smell like beef");    

    //title

    let titleBox = createElement('div', "The Roost", webPage);
    titleBox.setAttribute('id', 'title-box');

    //logo
    let logo = createElement('img', '', titleBox, brewLogo);
    logo.setAttribute('id', 'logo');

    let tabs = createElement('div', '', webPage);
    tabs.classList.add('tabsy');

    function makeTab(num) {
        let tab = createElement('input', '', tabs);
        tab.setAttribute('type', 'radio');
        tab.setAttribute('id', `tab${num + 1}`);
        tab.setAttribute('name','tab');
        
    
        let tabbutton = createElement('label', `Tab ${num + 1}`, tabs);
        tabbutton.classList.add('tabButton');
        tabbutton.setAttribute('for', `tab${num + 1}`);
    
        let tabContentHolder = createElement('div', '', tabs);
        tabContentHolder.classList.add('tab');
    
        let tabContent = createElement('div', `Content ${num + 1}`, tabContentHolder);
        tabContent.classList.add('content');

        return tabContent;
    
    }

    //tab1
    let tabbies = [];
    for (let i = 0; i < 6; i++) {
        tabbies[i] = makeTab(i)
    }
    tabbies[0].setAttribute('id', 'home');
    tabbies[0].setAttribute('id', 'menu');
    tabbies[0].setAttribute('id', 'locations');
    tabbies[0].setAttribute('id', 'about-us');
    tabbies[0].setAttribute('id', 'contact-us');
    tabbies[0].setAttribute('id', 'careers');
}



export default loadPage;
export {createElement as newNode};




