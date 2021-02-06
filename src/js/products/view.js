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
    
    view.querySelector('button')?.addEventListener('click', newProduct);

    view.querySelectorAll('span.edit')?.forEach( ele => {
        ele.addEventListener('click', editProduct);
    })
    view.querySelectorAll('span.delete')?.forEach( ele => {
        ele.addEventListener('click', deleteProduct)
    })
    
    document.title = title;
    document.querySelector('.main-container').innerHTML = '';
    document.querySelector('.main-container').appendChild(view);

}


function newProduct(){
    console.log('entra')
    const container = document.querySelector('div.modal');
    const view = document.createElement('div')
    view.classList = 'content'
    view.innerHTML = document.views.editProduct;
    
    if(container){
        container.innerHTML = ''
        container.appendChild(view) 
        container.style.visibility = 'visible';
    }

}

function editProduct(e){
    console.log(e.target.id)
}

function deleteProduct(e){

}


export default{
    showView
};