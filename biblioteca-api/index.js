import express from 'express';

const app = express();

app.use(express.json());

const libros = [
  {
    id: 1,
    isbn: "978-0140283334",
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    stock: 5
  },
  {
    id: 2,
    isbn: "978-8420412146",
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    stock: 3
  },
  {
    id: 3,
    isbn: "978-8437604947",
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    stock: 0
  },
  {
    id: 4,
    isbn: "978-0451524935",
    titulo: "1984",
    autor: "George Orwell",
    stock: 8
  },
  {
    id: 5,
    isbn: "978-8420664293",
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    stock: 2
  }
];

/*
- **`GET /libros`** — devolver la lista completa con status `200`.
  - **Filtro por query param**: si la URL trae `?autor=nombre` (ej: `/libros?autor=orwell`),
   devolver solo los libros cuyo autor contenga ese texto, sin importar mayúsculas/minúsculas.
*/
app.get("/libros", (req, res) => {
  const { autor } = req.query;

  let librosFiltrados = libros;

  if (autor) {
    librosFiltrados = libros.filter((libro) =>
      libro.autor.toLowerCase().includes(autor.toLowerCase())
    );
  }

  res.status(200).json(librosFiltrados);
});

/*
- **`GET /libros/:id`** — buscar el libro por `:id`.
  - Si existe → `200` + el objeto.
  - Si no existe → `404` + `{ "error": "Libro no encontrado" }`.
*/
app.get("/libros/:id", (req, res) => {
  const { id } = req.params;
  const libro = libros.find((libro) => libro.id === parseInt(id));

  if (!libro) {
    return res.status(404).json({ "error": "Libro no encontrado" });
  }

  res.status(200).json(libro);
});

/*
- **`POST /libros`** — crear un libro con los datos de `req.body`.
  - **Validación**: si falta `titulo` o `autor` → `400` + `{ "error": "El título y el autor son obligatorios" }`.
  - Asignar un `id` autoincremental (`Math.max(...ids) + 1`, o `1` si el array está vacío).
  - Agregar al array y responder `201` + el libro creado.
*/
app.post("/libros", (req, res) => {
  const { titulo, autor, isbn, stock } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({ "error": "El título y el autor son obligatorios" });
  }

  const nuevoId = libros.length > 0 ? Math.max(...libros.map((l) => l.id)) + 1 : 1;

  const nuevoLibro = {
    id: nuevoId,
    titulo,
    autor,
    isbn,
    stock
  };

  libros.push(nuevoLibro);

  res.status(201).json(nuevoLibro);
});


/*
- **`PUT /libros/:id`** — reemplazar un libro.
  - Si no existe → `404`.
  - Si existe → actualizar sus campos con lo que venga en `req.body`, **manteniendo el `id` original**, y responder `200` + el libro actualizado.

- **`DELETE /libros/:id`** — borrar un libro.
  - Si no existe → `404`.
  - Si existe → sacarlo del array y responder `200` + `{ "mensaje": "Libro eliminado correctamente" }`.

*/
app.put("/libros/:id", (req, res) => {
  const { id } = req.params;
  const libroIndex = libros.findIndex((libro) => libro.id === parseInt(id));

  if (libroIndex === -1) {
    return res.status(404).json({ "error": "Libro no encontrado" });
  }

  const { titulo, autor, isbn, stock } = req.body;

  libros[libroIndex] = {
    id: parseInt(id),
    titulo,
    autor,
    isbn,
    stock
  };

  res.status(200).json(libros[libroIndex]);
});

app.delete("/libros/:id", (req, res) => {
  const { id } = req.params;
  const libroIndex = libros.findIndex((libro) => libro.id === parseInt(id));

  if (libroIndex === -1) {
    return res.status(404).json({ "error": "Libro no encontrado" });
  }

  libros.splice(libroIndex, 1);

  res.status(200).json({ "mensaje": "Libro eliminado correctamente" });
});

/*
### 2.3 — Levantar el servidor

Escuchar en el puerto `3000` con `app.listen(8000, ...)` y loguear la URL al arrancar.

**Cuidá dos cosas** que vimos en la teoría:
- Después de responder dentro de un `if` (ej: el `404`), cortá el flujo con `return`.
- El orden de las rutas: `/libros/:id` no puede taparle el paso a otra ruta más específica.

---
*/
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});


app.get("/",(req, res)=>{
     res.send("server ok")
})
app.post("/libros",(req, res)=>{
     console.log(`🚀 ~ req:`, req.body)
     res.send(`crear un libro ${req.body.nombre}`)
})




