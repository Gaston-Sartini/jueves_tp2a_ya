import AppError from "../../errors/AppError.js";
import { create } from "../../dao/booksDao.js";

async function createBook(bookData) {
//   const { isbn } = bookData;
//   if (isbn && books.some((b) => b.isbn === isbn)) {
//     throw new AppError(
//       "ISBN_DUPLICATE",
//       `A book with ISBN ${isbn} already exists`,
//       409,
//     );
//   }
  const newBook = await create(bookData);
  return newBook;
}

export default createBook;
