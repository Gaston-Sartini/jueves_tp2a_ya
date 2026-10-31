const users = [ 
    { id: 1, name: "Gaston", email: "gaston.sartini@gmail.com", role: "admin" },
    { id: 2, name: "Yamila", email: "yamilavanesa95@gmail.com", role: "reader" },
    { id: 3, name: "Pepe", email: "Peterpan@gmail.com", role: "reader" },
];
let nextId = 4;

async function getAll() {
    return [...users];
}

async function getById(id) {
    return users.find((user) => user.id === id) ?? null;
}

async function getByEmail(email) {
    return users.find((user) => user.email === email) ?? null;
}

async function save(user) {
    const { id: _ignored, ...data } = user;
    const newUser = { id: nextId, ...data };
    users.push(newUser);
    nextId++;
    return newUser;
}

async function update(id, changes) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return null;
    }
    const updatedUser = { ...users[index], ...changes, id };
    users[index] = updatedUser;
    return updatedUser;
}

async function remove(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return false;
    }
    users.splice(index, 1);
    return true;
}

async function init() {}

export default { getAll, getById, getByEmail, save, update, delete: remove, init };