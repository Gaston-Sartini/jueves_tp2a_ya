import express from 'express';

const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
     res.send("server ok")
})
app.get("/libros",(req, res)=>{
     res.send("todos los libros")
})
app.post("/libros",(req, res)=>{
     console.log(`🚀 ~ req:`, req.body)
     res.send(`crear un libro ${req.body.nombre}`)
})



app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
