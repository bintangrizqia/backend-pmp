import { JWT } from '@fastify/jwt'

declare module 'fastify' {
    interface FastifyRequest {
        jwt: JWT
         user: {
                id: number;
                email: string;
                name: string;
                };
    }
     export interface FastifyInstance {
        authenticate: any
    }
}


