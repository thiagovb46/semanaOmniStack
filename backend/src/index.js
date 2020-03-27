/*Metódos HTTP
GET : Busca Informação no back-end
POST Criar uma informação no back-end
PUT : ALTERAR UMA INFORMAÇÃO NO BACK-END
DELETE :  Deletar uma informação no  back-end


Tipos de Parâmetros 
Query -> ?NomeParametro  -> sao parametros nomeados enviados  
na rota apos interrogação 

Routes Params  : Parametros utilizados para identificar recursos
Request Body:Corpo da requisição , utilizado para criar  
ou alterar recursos
*/

const express = require('express'); /*Criar a variavel express com todas as funcionalidades implementadas no express*/
const routes = require('./routes');
const cors = require('cors');
const app = express(); 
app.use(cors());    
app.use(express.json());/*Converte os  json que recebe em objetos JS */
app.use(routes);
app.listen(3333);