import AppError from "../../errors/AppError.js";

async function createBook(data, dao) {
    if(data.isbn && await dao.getByIsbn(data.isbn)) {
        throw new AppError("ISBN_DUPLICATE", "A book with this ISBN already exists", 409);
    }
    return await dao.save(data);
}

export default createBook;
