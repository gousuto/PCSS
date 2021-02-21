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
    const {_id, name, price} = data;
    return new Promise((resolve, reject) => {
        try{
            products.push( {_id, name, price} )
            resolve({
                message: 'El producto se a creado con exito',
                title: 'Producto creado con exito',
                newProduct: {
                    _id,
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




function removeData(id){
    return new Promise((res, rej) => {
        try{
            const productoEliminado = products.splice(products.indexOf(products.find( product => product._id === id)), 1)
            res({
                message: 'El producto fue eliminado exitosamente',
                title: 'Producto eliminado con exito',
                newProduct: productoEliminado
            })
        }catch(err){
            rej({
                message: 'Error en el servidor al eliminar el producto',
                title: 'Error al eliminar el producto'
            })
        }
    })
}

export default {
    getData,
    insertData,
    updateData,
    removeData
}