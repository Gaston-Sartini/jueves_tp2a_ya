const books = [
  { id: 1, isbn: "9780307474728", title: "Cien años de soledad", author: "Gabriel García Márquez", stock: 3, createdAt: "2024-01-10" },
  { id: 2, isbn: "9780345391803", title: "Guía del autoestopista galáctico", author: "Douglas Adams", stock: 0, createdAt: "2024-02-15" },
  { id: 3, isbn: "9780140449136", title: "La Odisea", author: "Homero", stock: 5, createdAt: "2024-03-01" },
  { id: 4, isbn: "9780061120084", title: "Matar a un ruiseñor", author: "Harper Lee", stock: 2, createdAt: "2024-03-20" },
  { id: 5, isbn: "9780393312838", title: "1984", author: "George Orwell", stock: 1, createdAt: "2024-04-05" },
];
let nextId = 6;

async function getAll() {
    return [...books];
}

async function getById(id) {
    return books.find((book) => book.id === id) ?? null;
}

async function getByIsbn(isbn) {
    return books.find((book) => book.isbn === isbn) ?? null;
}

async function save(data) {
    const newBook = { id: nextId, ...data };
    books.push(newBook);
    nextId++;
    return newBook;
}

async function update(id, changes) {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
        return null;
    }
    const updatedBook = { ...books[index], ...changes, id };
    books[index] = updatedBook;
    return updatedBook;
}

async function remove(id) {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
        return false;
    }
    books.splice(index, 1);
    return true;
}

export default { getAll, getById, getByIsbn, save, update, delete: remove };
