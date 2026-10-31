import AppError from "../../errors/AppError.js";

async function createUser(data, dao) {
    if(await dao.getByEmail(data.email)) {
        throw new AppError("EMAIL_DUPLICATED", "A user with this email already exists", 409);
    }
    return await dao.save(data);
}

export default createUser;
