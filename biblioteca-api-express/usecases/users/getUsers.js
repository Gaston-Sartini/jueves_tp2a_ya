async function getUsers(dao) {
    let result = await dao.getAll();
    return result;
};

export default getUsers;