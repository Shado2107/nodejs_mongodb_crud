const express = require('express');
const app = express();
const route = express.Router();

const services= require('../services/render');

/**
 * @description Root Route
 * @method GET /
 */

app.get('/', services.homeRoutes);

/**
 * @description add users
 * @method GET /add_user
 */

app.get('/add_user', services.add_user)

/**
 * @description for update users
 * @method GET /update_user
 */

app.get('/update_user', services.update_user)

module.exports = route