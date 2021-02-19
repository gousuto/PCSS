import storage from './data'

function get(filter){
    return storage.getData(filter)
}

function insert(data){
    const name = data.get('name');
    const price = data.get('price');
    const id = name + price;

    return storage.insertData({id, name, price})
}

function update(id, newData){
    const name = newData.get('name');
    const price = newData.get('price');
    
    return storage.updateData(id, {name, price})
}

function remove(e){

}

export default {
    get,
    insert,
    update,
    remove
}