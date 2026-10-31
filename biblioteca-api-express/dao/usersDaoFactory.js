import usersMemoryDao from "./usersMemoryDao.js"
import usersSequelizeDao from "./usersSequelizeDao.js"

function getUsersDao() {
    if (process.env.PERSISTENCE_TYPE === "sequelize") {
        return usersSequelizeDao;
    }
    return usersMemoryDao;
}

export default getUsersDao;