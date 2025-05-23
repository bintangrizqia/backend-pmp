import * as z from "zod";

import { buildJsonSchemas } from 'fastify-zod';

const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email is not valid"
    }).email(),
    password: z.string(),
});

const loginResponseSchema = z.object({
    accessToken: z.string(),
});

const userCore = {          // define the common user schema
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email is not valid"
    }).email(),
    name: z.string()
}

const createUserSchema = z.object({
    ...userCore,        // re-use the userCore object
    password: z.string({
        required_error: "Password is required"
    })
});

const createUserResponseSchema = z.object({
    id: z.number(),
    ...userCore,
});

export type LoginInput = z.infer<typeof loginSchema>

export type CreateUserInput = z.infer<typeof createUserSchema>

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
});


