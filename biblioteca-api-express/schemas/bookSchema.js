import { z } from "zod";

const fields = {
    title: z.string().min(1),
    author: z.string().min(1),
    isbn: z.string(),
    stock: z.number().int().nonnegative()
};

const createBookSchema = z.object({
    title: fields.title,
    author: fields.author,
    isbn: fields.isbn.optional(),
    stock: fields.stock.default(0)
});

const updateBookSchema = z.object({
    title: fields.title.optional(),
    author: fields.author.optional(),
    isbn: fields.isbn.optional(),
    stock: fields.stock.optional()
});

export { createBookSchema, updateBookSchema };