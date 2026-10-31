import {z} from "zod";

const fields = {
    name: z.string().min(2),
    email: z.email(),
    role: z.enum(["reader", "admin"])
}


const createUserSchema = z.object({
    name: fields.name,
    email: fields.email,
    role: fields.role.default("reader")
});

const updateUserSchema = z.object({
    name: fields.name.optional(),
    email: fields.email.optional(),
    role: fields.role.optional()
}); 

const userIdParamSchema = z.object({
    id: z.coerce.number().int().positive(),
});

export { createUserSchema, updateUserSchema, userIdParamSchema };