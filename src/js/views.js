import dater from './dater';



const billing = {
    title: 'Facturación',
    getHTML: () => {
        return '<h1>Facturación</h1>';
    }
}

const dashboard = {
    title: 'Dashboard',
    getHTML: () => {
        return '<h1>Dashboard</h1>';
    }
}

const purchases = {
    title: 'Compras',
    getHTML: () => {
        return '<h1>Compras</h1>';
    }
}

const reports = {
    title: 'Reportes',
    getHTML: () => {
        return '<h1>Reportes</h1>';
    }
}

const nofound = {
    title: 'Page no found',
    getHTML: () => {
        return '<h1>Page no found</h1>';
    }
}

let hola = 'gola';

export { dashboard, billing, purchases, reports, nofound};