import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()
const database = new DatabaseMemory()

server.post('/livros', (request, reply) => {
    const { titulo, autor, ano, lido, nota } = request.body

    database.create({
        titulo,
        autor,
        ano,
        nota,
        lido
    })


    return reply.status(204).send()
})

server.listen({ port: 3333 })