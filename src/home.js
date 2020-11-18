import newNode from './page-load.js';


function loadHome() {
    const homeTab = document.querySelector('#home');
    console.log("HIII");
    newNode('h1', "HOW ARE YOU???", homeTab);

}


export default loadHome;
