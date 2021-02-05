
export default () => {
    const view = document.createElement('div');
    view.innerHTML = `<h1>Dashboard</h1>`;

    document.title = "Dashboard"
    document.querySelector('.main-container').innerHTML = '';
    document.querySelector('.main-container').appendChild(view);
}