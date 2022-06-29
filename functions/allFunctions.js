const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact
  } = require("../db/contacts.js");
  
  const allContacts = async (req, res)=>{
    try {
        const contacts = await listContacts();
        res.json(contacts);
      } catch (error) {
        res.status(404).json({ message: "Not found" });
      }
  }
  const findContact = async (req, res)=>{
    const {id} = req.params;
    const contactFind = await getContactById(id);
 
    try {
          if (!contactFind) {
      return res
        .status(404)
        .json({ message: `Not found id ${id}` });
    }
        res.json(contactFind);
      } catch (error) {
        res.status(404).json({ message: "Not found" });

      }
  }
  
  const createNewContact = async (req, res)=>{
    try {
        const newContactCreate = await addContact( req.body.name, req.body.email, req.body.phone );
        res.status(201).json(newContactCreate);
      } catch (error) {
        res.status(404).json({ message: "Not found" });
        console.log(error)
      }
  }

  const removeContacts = async (req, res)=>{
    const { id } = req.params;
      const deleted = await getContactById(id);
      if (!deleted) {

        res.status(404).json({
        
        message:`Contact with id ${id} not found`
        
        })}
        try {
            const deletedContact = await removeContact(id);
            res.json({
              message: "contact deleted",
              deletedContact,
            });
            res.status(201).json(deleted);
          } catch (error) {
            res.status(404).json({ message: "Not found" });
          }
    
  }
  const changeContact = async (req, res) => {
    const { id } = req.params;
    const contact = await getContactById(id);
    if (!contact) {
      return res
        .status(404)
        .json({ message: `Contact with id ${id} not found` });
    }
    if (!req.body) {
      return res.status(400).json({ message: "missing required name field" });
    }
    try {
      const updatedContact = await updateContact(id, req.body);
      res.json(updatedContact);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong, Not found" });}
  };
module.exports = {
    allContacts,
    createNewContact,
    findContact,
    removeContacts,
    changeContact
  }