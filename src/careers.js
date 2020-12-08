import * as loader from './page-load.js';


function loadCareers() {
    const homeTab = document.querySelector('#Careers');
    let careerbox = loader.createElement('div', '', homeTab);
    careerbox.classList.add('careerbox');
    let careerinfo = loader.createElement('p', "We're hiring! If you're interested in being a barista, \
    please send a letter along with your Animal Bio to The Roost, Oakville", careerbox);
    careerinfo.classList.add('career-info');
}


export default loadCareers;
