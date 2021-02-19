import controller from "./controller";
import message from "../messages";


function printNewProduct(type, products){
    const container = document.querySelector("tbody.products-list");
    const tr = document.createElement('tr');
    tr.classList.add('table__row');


    if(type)
    products.forEach((product) => {
        tr.id = 'product_' + product._id;
        tr.innerHTML = `<td class="table__row__item txt-left">${product.name}</td>`;
        tr.innerHTML += `<td class="table__row__item txt-right">${product.price}</td>`;
        tr.innerHTML += `<td class="table__row__item txt-center"><div id="${product._id}" class="table__row__item__btn-mini btn-edit"></div><div class="table__row__item__btn-mini btn-delete"></div></td>`;
        container.appendChild(tr);
    });

}

function showView() {
    const view = document.createElement("div");

    view.innerHTML = document.views.products;

    const dataProductList = controller.get("products");
    printNewProduct(dataProductList, view.querySelector("tbody.products-list"));
    
    // Add functionality to the buttons
    
    // Show the modal form to add NEW PRODUCT.
    view.querySelector("button")?.addEventListener("click", newProduct); 
    // Show the modal with the product data TO UPDATE.
    view.querySelectorAll("div.btn-edit")?.forEach( (ele) => ele.addEventListener("click", updateProduct) ); 
    // REMOVE the product selected.
    view.querySelectorAll("div.btn-delete")?.forEach( (ele) => ele.addEventListener("click", controller.remove) );

    console.log(view.querySelectorAll("div.btn-delete"))

    // Print everything in the DOM
    document.title = "Productos";
    document.querySelector(".main-container").innerHTML = "";
    document.querySelector(".main-container").appendChild(view);
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
            printNewProduct([res.newProduct]);
            message(res.message, res.title, 'success');
            container.style.visibility = 'hidden';
        })
        .catch( rej => {
            message(rej.message, rej.title, 'critical')
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

    console.log($name)
    
    // Añadimos funcionalidad 
    const $form = view.querySelector("form.form");

    const btnCancelar = view.querySelector( "button.btn-secondary-simple-negative" );
    btnCancelar?.addEventListener("click", () => document.querySelector(".modal").style.visibility = "hidden" ); // Close the modal.

    $form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        controller.update(id, data)
        .then( (res) => {
            console.log(res)
            printNewProduct([res.newProduct]);
            message(res.message, res.title, 'success');
            container.style.visibility = 'hidden';
        })
        .catch( rej => {
            message(rej.message, rej.title, 'critical')
        });

    });

    if (container) {
        container.innerHTML = "";
        container.appendChild(view);
        container.style.visibility = "visible";
    }

}

export default {
    showView,
};
