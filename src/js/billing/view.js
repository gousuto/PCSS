export default {
    showView: () => {
        document.title = 'Billing';
        const container = document.querySelector('.main-container');

        container.innerHTML = '<h1>Facturación</h1>'
    }
};