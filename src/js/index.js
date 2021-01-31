import modal from "./_modal";
import views from './views.js'

import { purchases, billing, reports, nofound, dashboard, products } from './views.js'

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = () => {

    const routes = [
        { path: "/nofound", view: nofound },
        { path: "/", view: dashboard },
        { path: "/products", view: products },
        { path: "/billing", view: billing },
        { path: "/reports", view: reports },
        { path: "/purchases", view: purchases },
    ];

    let viewPage = routes.find(route => route.path === location.pathname)

    if(!viewPage) {
        viewPage = routes[0]
    }

    document.title = viewPage.view.title;
    document.querySelector('.main-container').innerHTML = viewPage.view.getHTML();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    
    document.body.addEventListener('click', e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();
});
