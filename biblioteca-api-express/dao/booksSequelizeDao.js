import Book from "./models/Book.js"
async function init() {
  await Book.sync();
}


async function getAll() {
    const libros = await Book.findAll({ raw: true });
    return libros;
}

async function getById(id) {
    const libro = await Book.findByPk(id, { raw: true });
    return libro;
}

async function getByIsbn(isbn) {
    const libro = await Book.findOne({raw: true, where: { isbn }});
    return libro;
}

async function save(book) {
    const { id: _ignored, ...data } = book;
    const libro = await Book.create(data);
    return libro.toJSON();
}

async function update(id, changes) {
    const libro = await Book.findByPk(id);
    if (!libro) {
        return null;
    }
    const libroActualizado = await libro.update(changes);
    return libroActualizado.toJSON();
}

async function remove(id) {
    const libroDestruido = await Book.destroy({ where: { id }});
    return libroDestruido > 0;
}

export default { getAll, getById, getByIsbn, save, update, delete: remove, init };
