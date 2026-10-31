import AppError from "../../errors/AppError.js";

async function updateUser(id, changes, dao) {
    if (changes.email) {
        const existing = await dao.getByEmail(changes.email);
        if (existing && existing.id !== id) {
            throw new AppError("EMAIL_DUPLICATED", "A user with this email already exists", 409);
        }
    }
    return await dao.update(id, changes);
}

export default updateUser;