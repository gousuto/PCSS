
function showView(){
    const view = document.createElement('div');
    view.innerHTML = `
    <h1>Page no Found</h1>
    <p>La pagina que usted buscaba no se ha encontrado, se ha eliminado o no tiene permisos para acceder a ella.</p>
    
    <a href="/" data-link>Voler a inicio</a>
    `

    document.title = 'Page no Found'
    document.querySelector('.main-container').innerHTML = '';
    document.querySelector('.main-container').appendChild(view);

}

export default {
    showView
}