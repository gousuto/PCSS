import controller from "./controller";
import {msg, msgYesNo} from "../messages";


function printNewProduct(type, products){
    const container = document.querySelector("tbody.products-list");
    let tr;

    switch (type){
        case 'new':
            
            tr = document.createElement('tr');
            tr.classList.add('table__row');
            
            products.forEach((product) => {
                tr.id = 'product_' + product._id;
                tr.innerHTML = `<td class="table__row__item txt-left">${product.name}</td>`;
                tr.innerHTML += `<td class="table__row__item txt-right">${product.price}</td>`;
                tr.innerHTML += `<td class="table__row__item txt-center"><div id="${product._id}" class="table__row__item__btn-mini btn-edit"></div><div class="table__row__item__btn-mini btn-delete"></div></td>`;

                tr.querySelector("div.btn-edit").addEventListener("click", updateProduct); 
                tr.querySelector("div.btn-delete").addEventListener("click", deleteProduct);

                container.appendChild(tr);
            });
        break;
        case 'update':
            tr = document.querySelector('#product_' + products[0]._id)
            tr.children[0].textContent = products[0].name;
            tr.children[1].textContent = products[0].price;
        break;
        case 'delete':
            tr = document.querySelector('#product_' + products[0]._id);
            container.removeChild(tr);
        break;
        default:
            console.log('NO se pudo hacer ninguna operacion al table');
        
    }
}

function showView() {
    const view = document.createElement("div");
    view.innerHTML = document.views.products;

    // Print everything in the DOM
    document.title = "Productos";
    document.querySelector(".main-container").innerHTML = "";
    document.querySelector(".main-container").appendChild(view);
    
    const dataProductList = controller.get("products");
    printNewProduct('new', dataProductList);
    
    // Add functionality to the buttons
    
    // Show the modal form to add NEW PRODUCT.
    view.querySelector("button")?.addEventListener("click", newProduct); 
    // Show the modal with the product data TO UPDATE.
    view.querySelectorAll("div.btn-edit")?.forEach( (ele) => ele.addEventListener("click", updateProduct) ); 
    // REMOVE the product selected.
    view.querySelectorAll("div.btn-delete")?.forEach( (ele) => ele.addEventListener("click", deleteProduct) );


}

function newProduct() {
    const container = document.querySelector("div.modal");
    const view = document.createElement("div");
    
    view.classList.add("modal-content");
    view.innerHTML = document.views.editProduct;
    
    const $form = view.querySelector("form.form");
    const btnCancelar = view.querySelector( "button.btn-secondary-simple-negative" );
    
    
    btnCancelar?.addEventListener("click", () => document.querySelector(".modal").style.visibility = "hidden" ); // Close the modal.

    $form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        controller.insert(data)
        .then( (res) => {
            printNewProduct('new', [res.newProduct]);
            msg(res.msg, res.title, 'success');
            container.style.visibility = 'hidden';
        })
        .catch( rej => {
            msg(rej.msg, rej.title, 'critical')
        });

    });

    if (container) {
        container.innerHTML = "";
        container.appendChild(view);
        container.style.visibility = "visible";
    }
}

function updateProduct(event){
    const id = event.currentTarget.id;
    const container = document.querySelector("div.modal");
    const view = document.createElement("div");
    
    view.classList.add("modal-content");
    view.innerHTML = document.views.editProduct;
    
    const $name = view.querySelector('input[name="name"]');
    const $price = view.querySelector('input[name="price"]');


    $name.value = document.querySelector('#product_' + id)?.children[0].textContent;
    $price.value = document.getElementById('product_' + id)?.children[1].textContent;
    
    // Añadimos funcionalidad 
    const $form = view.querySelector("form.form");

    const btnCancelar = view.querySelector( "button.btn-secondary-simple-negative" );
    btnCancelar?.addEventListener("click", () => document.querySelector(".modal").style.visibility = "hidden" ); // Close the modal.

    $form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        controller.update(id, data)
        .then( (res) => {
            printNewProduct('update', [res.newProduct]);
            msg(res.msg, res.title, 'success');
            container.style.visibility = 'hidden';
        })
        .catch( rej => {
            msg(rej.msg, rej.title, 'critical')
        });

    });

    if (container) {
        container.innerHTML = "";
        container.appendChild(view);
        container.style.visibility = "visible";
    }

}


function deleteProduct(event){
    const id = event.currentTarget.id;
    msgYesNo('Eliminar producto', 'Usted está a punto de eliminar el producto', 'none', () => {
        controller.remove(id).then( res => {
            printNewProduct('delete', res.newProduct);
            msg(res.message, res.title, 'success');
        })
        .catch( rej => {
            msg(rej.message, rej.title, 'critical')
        });
    });
    
}

export default {
    showView,
};
