const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

/**
 * conecction
 * @returns {database}
 */
const conn = async () => {
   const db = await open({
      filename: 'clientes.db',
      driver: sqlite3.Database
   })
   return db
}

/**
 * cadastra usuario
 * @param {string} nome 
 * @param {string} cidade 
 * @param {string} email 
 * @param {number} idade 
 * @param {string} telefone 
 * @returns 
 */
export async function cadastrar(nome, cidade, email, idade, telefone) {
   let query = `
   INSERT 
   INTO CLIENTE
   (nome, cidade, email, idade, telefone)
   VALUES
   ($1, $2, $3, $4, $5)
   `

   try {
      const db = await conn()

      let req = await db.run(query, nome, cidade, email, idade, telefone);
      return (req.changes === 1) ? true : false;

   } catch (error) {
      console.log("deu xabu: ",error);
 
      return false
   }

}

/**
 * 
 * @param {number} id 
 * @param {json} colunas 
 */
export async function atualizar(id, colunas) {

 
   let set = [];

   if(colunas.telefone){
     set.push("telefone = '"+ colunas.telefone + "'")
   }
   if(colunas.nome){
     set.push("nome = '"+ colunas.nome + "'")
   }
   if(colunas.idade){
     set.push("idade = '"+ colunas.idade + "'")
   }
   let query = `UPDATE cliente SET ${set.join(", ")} WHERE id = $1;`

   const db = await conn();

   const req = await db.run(query, id)

   console.log(req)
   return (req.changes == 1) ? true : false;
}

/**
 * deleta o usuario
 * @param {number} id 
 * @returns {boolean}
 */
export async function deletar(id) {
   let query = `DELETE FROM cliente WHERE id = $1;`

   const db = await conn(query);

   const req = await db.run(query, id)

   console.log(req)
   return (req.changes == 1) ? true : false;
   

}

/**
 * retorna um ID
 * @returns {number} id
 * @returns {json}
 * 
 */
export async function pesquisar(id) {
   let query = `SELECT * FROM cliente WHERE id = ${id}`

   const db = await conn();

   await db.get(query);

}


/**
 * traz os select do meu banco
 * @returns {JSON}
 */
export async function getAll() {
   let query = `SELECT * FROM cliente`;

   const db = await conn();

   return await db.all(query);


}