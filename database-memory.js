import { randomUUID } from "node:crypto"
import { truncateSync } from "node:fs"

export class DatabaseMemory {
    #livros = new Map()

}