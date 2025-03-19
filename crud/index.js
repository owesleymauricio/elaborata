import sqlite3 from "sqlite3"
import { open } from "sqlite"


export function cadastrar() {

}

export function atualizar() {

}

export function deletar() {

}

/**
 * retorna um ID
 * @returns {number} id
 * @returns {json}
 * 
 */
export async function pesquisar(id) {
   let query = `SELECT * FROM cliente WHERE id = ${id}`

   const db = await open({
      filename: 'clientes.db',
      driver: sqlite3.Database
   })

   return await db.get(query);

}


/**
 * traz os select do meu banco
 * @returns {JSON}
 */
export async function getAll() {
   let query = `SELECT * FROM cliente`;

   const db = await open({
      filename: 'clientes.db',
      driver: sqlite3.Database
   });

   return await db.all(query);

   
}