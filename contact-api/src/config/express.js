const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const allowCors = require('./cors');
const contactResource = require('../app/resources/contact-resource'); // Rotas referente a lista de contatos
const userResource = require('../app/resources/user-resource')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allowCors);

contactResource(app);
userResource(app)


module.exports = app;
