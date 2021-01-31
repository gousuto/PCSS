import operator from './operator'

const viewProducts = {
    title: 'Productos',
    getHTML: () => {

        let dataProductList = operator.getData('products');
        let productList = ``

        dataProductList.forEach(product => {
            productList += `    
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><span class="edit"></span><span class="delete"></span></td>
            </tr>`
        })

        


        return `  <h1>Productos</h1>
        <button id="btnAddProduct">+ Nuevo producto</button>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th> <th>Precio</th> <th>Operaciones</th>
                </tr>
            </thead>
            <tbody>
                ${productList}
            </tbody>
        </table>`;
    }
}


export default viewProducts;