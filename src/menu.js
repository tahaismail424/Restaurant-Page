import * as loader from './page-load.js';
import coffeePic from './assets/coffee-mug.png';
import pancakePic from './assets/Furniture_Pancakes.png';
import honeycombPic from './assets/Honeycomb_Tart.png';
import honeylemonPic from './assets/Honey-Lemon_Tart.png';
import chocolatePic from './assets/chocolate tart.png';
import applePic from './assets/apple_pie.png';
import donutPic from './assets/donut_box.png';
import pumpkinPic from './assets/pumpkin_pie.png';
import mochiPic from './assets/mochi.png';
import cupcakePic from './assets/strawberry_cupcake.png';
import juicePic from './assets/vacation_juice.png';
import sodaPic from './assets/cream_soda.png';
import mintPic from './assets/mint_tea.png';
import jasminePic from './assets/jasmine_tea.png';
import blackPic from './assets/black_tea.png';
import bellPic from './assets/bell_bag.png';

let pics = [coffeePic, pancakePic, honeycombPic, honeylemonPic, chocolatePic,
applePic, donutPic, pumpkinPic, mochiPic, cupcakePic, juicePic, sodaPic,
mintPic, jasminePic, blackPic];

function loadMenu() {

    function makeMenuItem (item, image, b) {

        let prices = ['200', '240', '400', '400',
        '400', '800', '800', '800', '350', '50',
        '100', '100', '100', '100', '100'];

        let tmp = loader.createElement('div', item, menuBox)
        tmp.classList.add('menu-item');
        tmp.classList.add(`${item}-menu`);
        let tmpPic = loader.createElement('img', '', tmp, image);
        tmpPic.classList.add(`${menuList[b]}-pic`)
        if (b !== 0) {
            let bell = loader.createElement('img', '', tmp, bellPic);
            bell.classList.add('bell-bag');
            let bellPrice = loader.createElement('p', '', tmp);
            bellPrice.textContent = prices[b];
            bellPrice.classList.add('bell-price');
        };
        return tmp;

    }


    const homeTab = document.querySelector('#Menu');
    console.log("menu");
    const menuBox = loader.createElement('div', "", homeTab);
    menuBox.classList.add('menubox')

    let menuList = ['coffee', 'pancake', 'honeycomb', 'honeylemon',
    'chocolate', 'apple', 'donut', 'pumpkin', 'mochi', 'cupcake',
    'juice', 'soda', 'mint', 'jasmine', 'black']

    let menuTabs = [];

    for (let i = 0, n = menuList.length; i < n; i++) {
        menuTabs[i] = makeMenuItem(menuList[i], pics[i], i);
    }
   

    let milkNoList = loader.createElement('ul',
    'Amount of Milk', menuTabs[menuList.indexOf('coffee')]);
    milkNoList.classList.add('milk-list');

    for (let i = 0; i < 3; i++) {
        let tmp = loader.createElement('li', '', milkNoList);
        tmp.classList.add('coffee-list-item');
        switch (i) {
            case 0:
                tmp.textContent = 'none';
                break;
            case 1:
                tmp.textContent = 'a little bit';
                break;
            case 2:
                tmp.textContent = 'regular';
                break;
            case 3:
                tmp.textContent = 'lots';
        }
    }

    let sugarList = loader.createElement('ul',
    'Sugar Spoons', menuTabs[menuList.indexOf('coffee')]);
    sugarList.classList.add('sugar-list');

    for (let i = 0; i < 3; i++) {
        let tmp = loader.createElement('li', '', sugarList);
        tmp.classList.add('coffee-list-item');
        switch (i) {
            case 0:
                tmp.textContent = 'none';
                break;
            case 1:
                tmp.textContent = 'one spoon';
                break;
            case 2:
                tmp.textContent = 'two spoons';
                break;
            case 3:
                tmp.textContent = 'three spoons';
        }
    }


    let beansList = loader.createElement('ul',
    'Bean Type', menuTabs[menuList.indexOf('coffee')]);
    beansList.classList.add('beans-list');

    for (let i = 0; i < 3; i++) {
        let tmp = loader.createElement('li', '', beansList);
        tmp.classList.add('coffee-list-item');
        switch (i) {
            case 0:
                tmp.textContent = 'Blend';
                break;
            case 1:
                tmp.textContent = 'Blue Mountain';
                break;
            case 2:
                tmp.textContent = 'Kilimanjaro';
                break;
            case 3:
                tmp.textContent = 'Mocha';
        }
    }


}

export default loadMenu;


