import AbstactView from "./abstractView";

export default class extends AbstactView{
    constructor(){
        super();
        this.setTitle('Dashboard');
    }

    getHTML(productList) {
        return `  <h1>Productos</h1>
        <button id="btnAddProduct">+ Nuevo producto</button>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th> <th>Precio</th> <th>Operaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Limpieza de area de juegos grande</td>
                    <td>Lps. 3,500.00</td>
                    <td><span class="edit"></span><span class="delete"></span></td>
                </tr>
                <tr>
                    <td>Limpieza de area de juegos mediana</td>
                    <td>Lps. 2,800.00</td>
                    <td><span class="edit"></span><span class="delete"></span></td>
                </tr>
            </tbody>
        </table>`;
    }
}