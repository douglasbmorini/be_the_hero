const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros;
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" que servem para filtros, paginação
   * app.GET('/users, (request, response) => {
   * const params: request.query;
   * console.log(params);
   * Insomnia -> http://localhost:3333/users?name=Douglas
   *  
   * Route Params: Parâmetros utilizados para identificar recursos
   * app.get('/users/:id', (request, response) => {
   * const params = request.params;
   * console.log(params);
   * Insomnia -> http://localhost:3333/users/1
   * 
   * Resquest Body: Corpo da requisição utilizado para criar ou alterar recursos
   * 
   * app.use(express.json());
   * 
   * app.post('/users', (request, response) => {
   * const body = request.body;
   * console.log(params);
   * 
   * Insomnia -> POST http://localhost:3333/users
   * JSON ->
   * {
	"name": "Douglas Bonato Morini",
    "idade": 29
   * }
   */

   /**
    * SQL(Linguagem Universal - mercado): MySQL, SQLLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL(Linguagem Própria): MongoDB(muito legal, veloz), CouchDB etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder (JAVASCRIPT): table('users').select('*').where()
     */

app.listen(3333);

