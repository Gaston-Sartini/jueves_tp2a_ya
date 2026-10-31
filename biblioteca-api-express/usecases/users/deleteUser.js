async function deleteUser(id, dao) {
    return await dao.delete(id);
}

export default deleteUser;