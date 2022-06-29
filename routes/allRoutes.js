const{allContacts,createNewContact,findContact,removeContacts,changeContact} = require("../functions/allFunctions.js")
const express = require('express')
const router = express.Router();
const schemaValidate = require('../functions/schemaValidate');
const contactsSchema = require('../validationSchemas/contactsValidation');
router.get('/', allContacts);
router.post('/', schemaValidate(contactsSchema.verifyDataCreate),createNewContact);
router.delete('/:id', removeContacts);
router.get('/:id', findContact);
router.put('/:id',schemaValidate(contactsSchema.verifyUpdate), changeContact);
module.exports = router;


