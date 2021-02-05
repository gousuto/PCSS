import products from './products/view';
import nofound from './other/nofound.view'
import dashboard from './dashboard/view';
import view from './products/view';

function router(){

    // All the routes specify on a list
    const routes = [
        { path: "/nofound", view: nofound.showView },
        { path: "/", view: dashboard }, 
        { path: "/products", view: products.showView },
        //{ path: "/products/:id", view: products.showModal }
        // { path: "/billing", view: billing },
        // { path: "/reports", view: reports },
        // { path: "/purchases", view: purchases },
    ];


    let descPath = location.pathname.split('/')
    // If a route match with the location.pathname 
    let viewPage = routes.find(route => {
        let descPathRef = route.path.split('/');

        if(descPath.length !== descPath.length) return false;

        const isCorrectly = !descPathRef.some((pathRef, pathRefIndex) => {
            if(pathRef === descPath[pathRefIndex] && pathRef[0] !== ':') return false;

            return true;
        });

        return isCorrectly;
        
    })

    if(!viewPage) {
        viewPage = routes[0]
    }

    
    viewPage.view();

};

export default router;