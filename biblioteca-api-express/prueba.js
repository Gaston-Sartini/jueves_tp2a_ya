import Book from "./dao/models/Book.js";

await Book.sync();
const libro = await Book.create({title: "Rayuela", author: "Julio Cortázar", stock: 4});
console.log(libro.toJSON());