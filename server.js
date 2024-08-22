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

    server.get('/livros', (request) => {
        const {autor, titulo, nota, lido, ano, anoInicial, anoFinal,notaInicial,notaFinal} = request.query
    
        const livro = database.list(autor, lido, ano, nota, titulo, anoInicial, anoFinal,notaInicial,notaFinal)
    
    
        return livro
    })
    return reply.status(204).send()
})

server.put('/livros/:id', (request, reply) => {
    const livroID = request.params.id
    const { titulo, autor, ano, lido, nota } = request.body
    database.update(livroID, {
        titulo,
        autor,
        ano,
        nota,
        lido
    })
    return reply.status(204).send()
})






server.delete('/livros/:id',(request, reply) => {
    const livroID = request.params.id
    
    database.delete(livroID)

    return reply.status(204).send()
})


server.listen({ port: 3333 })