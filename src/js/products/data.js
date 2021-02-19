const products = [{
    _id: 'asdfasinasdfaisfnsa',
    name: 'Limpieza de area de juegos grande',
    price: 3500
},
{
    _id: 'asdfinegawgansdgfn',
    name: 'Limpieza de area de juegos mediana',
    price: 2800
},
{
    _id: 'assdfsdfwwnegawgansdgfn',
    name: 'Limpieza de area de juegos pequeña',
    price: 2300
}
];

const getData = (collection, filter) => {
    return products;
}

const insertData = (data, filter) => {
    const {id, name, price} = data;
    return new Promise((resolve, reject) => {
        try{
            products.push( {id, name, price} )
            resolve({
                message: 'El producto se a creado con exito',
                title: 'Producto creado con exito',
                newProduct: {
                    id,
                    name,
                    price
                }
            });
        }catch(ex){
            reject({
                message: 'El producto no se pudo crear',
                title: 'Error al crear producto'
            })
        }
    })
}

function updateData(id, data){
    return new Promise( (res, rej) => {
        try{
            products.map( product =>{
                if(product._id === id){
                    product.name = data.name;
                    product.price = data.name
                }

                return product;
            })
            
            res({
                message: 'El producto actualizado exitosamente',
                title: 'Producto actualizado con exito',
                newProduct: {...data, _id: id}
            });

        }catch(err){
            rej({
                    message: 'Error en el servidor al crear el producto',
                    title: 'Error al crear el producto'
                });

        }
    })
}
export default {
    getData,
    insertData,
    updateData
}