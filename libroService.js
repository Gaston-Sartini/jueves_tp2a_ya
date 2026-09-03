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



/*
3. Agregar una función nueva `async function agregarLibro(libro)` que:
   - Lea el archivo actual.
   - Le agregue el libro nuevo (con un `id` que sea `Math.max(...ids) + 1`, o `1` si está vacío).
   - Escriba el array completo de vuelta al archivo con `fs.writeFile` (usando `JSON.stringify(libros, null, 2)` para que quede legible).
   - Devuelva el libro creado.
*/

async function agregarLibro(libro){
    const libros = await listarLibros();
    let nuevoId = 1;
    if(libros.length > 0){
        const ids = libros.map((uLibro)=>uLibro.id);
        nuevoId = Math.max(...ids) + 1;     
    }
    libro.id = nuevoId;
    const libroCompleto = { id: nuevoId, ...libro };
    libros.push(libroCompleto);
    await fs.writeFile(rutaArchivo, JSON.stringify(libros, null, 2));
    return libro;
};



module.exports = {
    listarLibros,
    buscarPorId,
    buscarLibrosPorAutor,
    librosEnStock,
    agregarLibro
};


/*
async function main(){
    console.log(await listarLibros());
    console.log(await buscarPorId(3));
    console.log(await buscarLibrosPorAutor("Antoine de Saint-Exupery"));
    console.log(await librosEnStock());
    const libro = {
        "titulo": "Volver al futuro",
        "autor": "Peter Parket",
        "stock": 4
    };
    console.log(await agregarLibro(libro));
}
*/