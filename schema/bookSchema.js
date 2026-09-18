import { z } from "zod";

const fields = {
  isbn: z.string().length(13),
  titulo: z.string().min(1).max(100),
  autor: z.string().min(1).max(100),
  stock: z.coerce.number().int().nonnegative(),
};

// post
const bookCreateSchema = z.object({
  isbn: fields.isbn,
  titulo: fields.titulo,
  autor: fields.autor,
  stock: fields.stock.optional().default(0),
});


export  { bookCreateSchema };