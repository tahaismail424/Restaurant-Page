import * as loader from './page-load.js';
import cafeScene from './assets/roost_cafe.png';


function loadLocations() {
    const homeTab = document.querySelector('#Locations');
    let locationBox = loader.createElement('div', '', homeTab);
    let thisLoc = loader.createElement('div', 'Located in: Oakville', locationBox);
    locationBox.classList.add('locationbox');
    thisLoc.classList.add('oakville');
    let cafePic = loader.createElement('img', '', locationBox, cafeScene);
    cafePic.classList.add('cafe-pic');
    let otherLoc = loader.createElement('div', '', locationBox);
    otherLoc.innerHTML = 'Other Locations: <br> - Ricecake - \
    Delfino - Midorimachi -';
    otherLoc.classList.add('other-loc');
    let info = loader.createElement('p', 'We are looking to expand our locations! \
    If you are interested in opening a "Roost" location in your town:', locationBox)
    info.classList.add('info');
    let reqList = ('ul', '', info);
    for (let i = 0; i < 3; i++) {
        let tmp = loader.createElement('li', '', reqList);
        tmp.classList.add('req-content');
        switch (i) {
            case 0:
                tmp.textContent = 'Donate 50 unique items to your local museum';
                break;
            case 1:
                tmp.textContent = 'Talk to me when I visit my friend Blathers at the museum';
                break;
            case 2:
                tmp.textContent = 'Set up a public works project to build the café and collect enough funds!';
                break;
            }
        }
    }


export default loadLocations;

