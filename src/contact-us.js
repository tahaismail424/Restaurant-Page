import * as loader from './page-load.js';


function loadContactUs() {
    const homeTab = document.querySelector('#contact-us');
    console.log("HIII");
    let contactbox = loader.createElement('div', '', homeTab);
    contactbox.classList.add('contactbox');
    let method1 = loader.createElement('p', "We check the Oakville billboard every morning, \
    so if you have any general, anonymous requests please feel free to post there.", contactbox);
    method1.classList.add('contact-info');
    let method2 = loader.createElement('p', "Also, if you have any specific inquiries, \
    please feel free to send us letters at The Roost, Oakville.", contactbox);
    method2.classList.add('contact-info');
}


export default loadContactUs;

