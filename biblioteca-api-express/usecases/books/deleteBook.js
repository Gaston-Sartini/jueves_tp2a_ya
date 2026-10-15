async function deleteBook(id, dao) {
    return await dao.delete(id);
}

export default deleteBook;