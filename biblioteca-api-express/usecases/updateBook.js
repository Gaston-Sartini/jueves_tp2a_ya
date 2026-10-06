import AppError from "../errors/AppError.js";

async function updateBook(id, changes, dao) {
    if(changes.stock !== undefined && changes.stock < 0){
        throw new AppError("INVALID_STOCK", "Stock cannot be negative", 400);
    }
    return await dao.update(id, changes);
}

export default updateBook;