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

app.get("/",(req, res)=>{
     res.send("server ok")
})
app.post("/libros",(req, res)=>{
     console.log(`🚀 ~ req:`, req.body)
     res.send(`crear un libro ${req.body.nombre}`)
})



app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
