/*
2. En `libroService.js`, reemplazar el `require("./data/libros")` por lectura desde el archivo, 
usando `fs/promises`:
   - `async function listarLibros()`: lee `data/libros.json`, hace `JSON.parse` y devuelve el array.
   - Las demás funciones de la clase 1 (`buscarPorId`, `buscarPorAutor`, `contarConStock`) ahora 
   también van a ser `async`, porque internamente llaman a `listarLibros()`.
*/

const fs = require('node:fs/promises');
const path = require('node:path');

const rutaArchivo = path.join(__dirname, 'data', 'libros.json');

async function listarLibros(){
    const data = await fs.readFile(rutaArchivo, 'utf-8');
    return JSON.parse(data);
}


async function buscarPorId(id){
    const libros = await listarLibros();
    return libros.find((libro)=> libro.id === parseInt(id));
}

async function buscarLibrosPorAutor(autor){
    const libros = await listarLibros();
    return libros.filter((libro)=>libro.autor.toLowerCase().includes(autor.toLowerCase()));
}

async function librosEnStock(){
    const libros = await listarLibros();
    return libros.filter((libro)=>libro.stock > 0);
}

async function main(){
    console.log(await listarLibros());
    console.log(await buscarPorId(3));
    console.log(await buscarLibrosPorAutor("Antoine de Saint-Exupery"));
    console.log(await librosEnStock());
}

main();

