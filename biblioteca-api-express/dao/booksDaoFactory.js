import booksMemoryDao from "./booksMemoryDao.js"
import booksSequelizeDao from "./booksSequelizeDao.js"

function getBooksDao() {
    if(process.env.PERSISTENCE_TYPE === "sequelize") {
        return booksSequelizeDao;
    }
    return booksMemoryDao;
}

export default getBooksDao;