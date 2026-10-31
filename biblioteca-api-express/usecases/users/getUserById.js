async function getUserById(id, dao) {
    return await dao.getById(id);
}

export default getUserById;