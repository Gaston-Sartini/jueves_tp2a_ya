const { listarLibros, buscarPorId, buscarPorAutor, contarConStock, agregarLibro } = require("./libroService");

async function main(){
    try {
        console.log("Todos los libros:", await listarLibros());
        console.log("Libro con id 3:", await buscarPorId(3));
        console.log("Libros de Orwell:", await buscarPorAutor("orwell"));
        console.log("Libros con stock:", await contarConStock());
        console.log("Agregando Libro", await agregarLibro({titulo: "El día de ayer", autor: "Yamilse Seisdesdos", stock: 7}));
        console.log("Cantidad de libros", (await listarLibros()).length);
    } catch (error) {
        console.log(error);   
    }
}

main();
