const express = require('express');
const connection = require('./database/connection');  
const OngController = require ('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController ');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/*Post/get/ ONGS*/
routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

/*Post/get/delete Incidents*/
routes.post('/incidents',IncidentController.create); 
routes.get('/incidents',IncidentController.index); 
routes.delete('/incidents/:id', IncidentController.delete);

/*Profile*/
routes.get('/profile',ProfileController.index);

/*Sessions*/

routes.post('/session',SessionController.create);


module.exports = routes;