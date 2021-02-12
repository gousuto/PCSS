import controller from "./controller";
import message from "../messages";

function showView() {
    const view = document.createElement("div");

    view.innerHTML = document.views.products;

    const dataProductList = controller.get("products");
    
    printNewProduct(dataProductList, view.querySelector("tbody.products-list"));

    
    // Add functionality to the buttons
    view.querySelector("button")?.addEventListener("click", newProduct); // Show the modal form to add new prodcut.
    view.querySelectorAll("div.edit")?.forEach( (ele) => ele.addEventListener("click", controller.update) ); // Show the modal with the product data to update.
    view.querySelectorAll("div.delete")?.forEach( (ele) => ele.addEventListener("click", controller.remove) ); // Remove the product selected.

    // Print everything in the DOM
    document.title = "Productos";
    document.querySelector(".main-container").innerHTML = "";
    document.querySelector(".main-container").appendChild(view);
}




function printNewProduct(products, container){
    const tr = document.createElement('tr');
    tr.classList.add('table__row');

    products.forEach((product) => {
        tr.innerHTML = `<td class="table__row__item txt-left">${product.name}</td>`;
        tr.innerHTML += `<td class="table__row__item txt-right">${product.price}</td>`;
        tr.innerHTML += `<td class="table__row__item txt-center"><div id="${product._id}" class="btn-icon-mini btn-icon-edit"></div><div class="btn-icon-mini btn-icon-delete"></div></td>`;
        container.appendChild(tr);
    });
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
        .then((res) => {
            printNewProduct([res.newProduct], document.querySelector("tbody.products-list"));
            message(res.message, res.title, 'success');
            container.style.visibility = 'hidden';
        })
        .catch(rej => {
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
