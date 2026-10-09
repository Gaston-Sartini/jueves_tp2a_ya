import { z } from "zod";

const createUserSchema = z.object({
    nombre: z.string({ error: "El nombre es obligatorio" }).min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string({ error: "El email es obligatorio" }).email("El email debe ser válido"),
    rol: z.enum(["lector", "admin", "editor"]).optional().default("lector"),
});

const updateUserSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").optional(),
    email: z.string().email("El email debe ser válido").optional(),
    rol: z.enum(["lector", "admin", "editor"]).optional(),
});

const userIdParamSchema = z.object({
    id: z.string().uuid("El ID debe ser un UUID válido"),
});