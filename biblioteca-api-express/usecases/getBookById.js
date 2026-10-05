async function getBookById(id, dao) {
    return await dao.getById(id);
}

export default getBookById;