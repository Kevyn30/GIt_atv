import { randomUUID } from "node:crypto"
import { truncateSync } from "node:fs"

export class DatabaseMemory {
    #livros = new Map()
    list(autor, lido, ano, nota, titulo, anoInicial, anoFinal, notaInicial, notaFinal) {
        return Array.from(this.#livros.entries()).map((livroArray) => {
            const id = livroArray[0]
            const data = livroArray[1]

            return {
                id,
                ...data,
            }
        })
            .filter(livro => {
                if (autor || titulo || ano|| nota || lido || anoInicial ||anoFinal||notaInicial||notaFinal) {
                    
                    return(
                    
                    (autor ? (livro.autor.toLowerCase().includes(autor.toLowerCase())): true) &&
                    (titulo ? (livro.titulo.toLowerCase().includes(titulo.toLowerCase())): true)&&
                    (ano ? livro.ano == ano:true)&&
                    (anoInicial ? livro.ano >= anoInicial:true)&&
                    (anoFinal ? livro.ano <= anoFinal:true)&&
                    (notaFinal ? livro.nota<= notaFinal:true)&&
                    (notaInicial ? livro.nota >= notaInicial:true)&&
                    (nota ? livro.nota == nota:true)&&
                    (lido ? livro.lido ==(lido == "false"? false:true):true)
                    )
                }
            
//                if (titulo) {
//                    return livro.titulo.toLowerCase().includes(titulo.toLowerCase())
//                }
                
                return true
            })
    }

    create(livro) {
        const livroID = randomUUID()

        this.#livros.set(livroID,livro)
    }
}