import { randomUUID } from "node:crypto"
import { truncateSync } from "node:fs"

export class DatabaseMemory {
    #livros = new Map()
    create(livro) {
        const livroID = randomUUID()

        this.#livros.set(livroID,livro)
    }
}