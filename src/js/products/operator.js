import data from './data'

function getData(filter){
    return data.getData(filter)
}



function insertData(data, filter) {
    const btnEditar = document.querySelector('.btnEditar');

    console.log(btnEditar)

}


export default {
    getData,
    insertData
}