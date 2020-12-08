import * as loader from './page-load.js';
import coffeeCup from './assets/coffee-cup.png';


function loadHome() {
    const homeTab = document.querySelector('#Home');
    homeTab.classList.add('hometab');
    let homeBox = loader.createElement('div', '', homeTab);
    homeBox.classList.add('homebox');
    let title = loader.createElement('h1', 'The Roost...', homeBox);
    title.classList.add('home-title');
    let brandList = loader.createElement('ul', '', homeBox);
    brandList.classList.add('home-list');
    for (let i = 0; i < 3; i++) {
        let tmp = loader.createElement('li', '', brandList);
        tmp.classList.add('listed-item');
        switch (i) {
            case 0:
                tmp.textContent = 'Coffee';
                break;
            case 1:
                tmp.textContent = 'Sweets';
                break;
            case 2:
                tmp.textContent = 'Café';
                break;
        }
    }
    let coffee = loader.createElement('img', '', homeBox, coffeeCup);
    coffee.classList.add('coffeeimg');
    let text = loader.createElement('p', "Need a break from village life,\
    a refreshing start to the day, or want cakes and coffee for any reason?\
    Come to the Roost", homeBox);
    text.classList.add('home-info');


   
}


export default loadHome;
