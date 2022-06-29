const express = require('express')
const app = express()
const volleyball = require('volleyball')
const {nanoid} = require('nanoid')
app.use(volleyball)
app.use(express.json()) 
const contactsRouter = require('./routes/allRoutes');
app.use('/api/contacts', contactsRouter);
module.exports=app;