import User from "./models/User.js"
async function init() {
    await User.sync();
}

async function getAll() {
    const users = await User.findAll({ raw: true });
    return users;
}

async function getById(id) {
    const user = await User.findByPk(id, { raw: true });
    return user;
}

async function getByEmail(email) {
    const user = await User.findOne({ raw: true, where: { email } });
    return user;
}

async function save(user) {
    const { id: _ignored, ...data } = user;
    const newUser = await User.create(data);
    return newUser.toJSON();
}

async function update(id, changes) {
    const user = await User.findByPk(id);
    if (!user) {
        return null;
    }
    const userUpdated = await user.update(changes);
    return userUpdated.toJSON();
}

async function remove(id) {
    const userDeleted = await User.destroy({ where: { id } });
    return userDeleted > 0;
}

export default { getAll, getById, getByEmail, save, update, delete: remove, init };