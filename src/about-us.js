import * as loader from './page-load.js';
import brewster from './assets/Brewster_-_Animal_Crossing_New_Leaf.png';
import villager from './assets/villager.png';
import zucker from './assets/takoyakidood.png';
import poppy from './assets/maidgirl.png';


function loadAboutUs() {
    const homeTab = document.querySelector('#about-us');
    let aboutBox = loader.createElement('div', '', homeTab);
    aboutBox.classList.add('aboutbox');

    function makeProfile (name, image, desc) {
        let tmp = loader.createElement('div', '', aboutBox);
        tmp.classList.add('profile');
        let tmpName = loader.createElement('h2', name, tmp);
        tmpName.classList.add('prof-name');
        let tmpImg = loader.createElement('img', '', tmp, image);
        tmpImg.classList.add('prof-img');
        let tmpDesc = loader.createElement('p', desc, tmp);
        tmpDesc.classList.add('prof-desc');
        return tmp;
    }


    let brewsterProf = makeProfile('Owner: Brewster', brewster, 'Hello, my \
    name is Brewster and I am the owner of all of "The Roost" locations \
    around the Animal Crossing World. I enjoy having close connections with \
    my customers, so you will often find me working as the barista at this location');

    let hodgekinsProf = makeProfile('Manager: Hodgekins', villager, 
    'Hello! My name is Hodgekins and I am the manager of the Oakville \
    location!')

    let zuckerProf = makeProfile('Barista: Zucker', zucker, "Heyo! I'm Zucker \
    and I'm a barista at The Roost, Oakville, bloop!");

    let poppyProf = makeProfile('Barista: Poppy', poppy, "Hi there! My name \
    is Poppy. I also work as a barista at Oakville, nutty!");

}

export default loadAboutUs;

