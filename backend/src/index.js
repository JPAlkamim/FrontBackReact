/** 
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação do backend
 * 
*/

/**
 * Tipos de parâmentros:
 * 
 * Query Params: Parâmmetros nomeados enviados na rota após "?" (Filtros, paginação).
 * Route Params: Parâmetros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  * 
  */

  /**
   * 
   * Driver: SELECT * From users
   * Query Builder: table('users').select('*').where()
   * 
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); /**Fazer com que o código consiga entender */
app.use(routes);


app.listen(3333);