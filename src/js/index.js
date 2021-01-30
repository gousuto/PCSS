import modal from "./_modal";
import Dashboard from './views/dashboard';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = () => {
    const routes = [
        { path: "/nofound", view: () => console.log("") },
        { path: "/", view: () => Dashboard },
        { path: "/products", view: () => console.log("Viewing Products") },
    ];

    const viewPage = routes.find(route => route.path === location.pathname)

    if(!viewPage) {
        viewPage = routes[0]
    }

    const View = new viewPage.view();
    document.querySelector('.main-container').innerHTML = View.prototype.getHTML();
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
