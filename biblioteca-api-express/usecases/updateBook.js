async function updateBook(id, changes, dao) {
    return await dao.update(id, changes);
}

export default updateBook;