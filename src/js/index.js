import router from './router';

//Configuration for SPA
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

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
