"use strict"
var express = require('express');

var cellphoneController = require('../controllers/cellphone.controller.js');

var api = express.Router();

api.get("/phones", cellphoneController.getPhones);
api.get("/phones/:id", cellphoneController.getPhoneById);

module.exports = api;
