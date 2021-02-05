import operator from './operator'

const title = 'Productos';
function showView() {
    
    const view = document.createElement('div');
    
    view.innerHTML = document.views.products;

    let dataProductList = operator.getData('products');
    let productList = ``

    dataProductList.forEach(product => {
        productList += `    
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><span id="${product._id}" class="edit">ddfd</span><span class="delete"></span></td>
        </tr>`
    });

    view.querySelector('tbody.products-list').innerHTML = productList;
    
    view.querySelectorAll('span.edit').forEach( ele => {
        ele.addEventListener('click', (e) =>{
            console.log('Hola', e.target.id);
        });
    })
    
    document.title = title;
    document.querySelector('.main-container').innerHTML = '';
    document.querySelector('.main-container').appendChild(view);

}


function showModal(){
    
}

export default{
    showView
};