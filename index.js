const {listContacts, getContactById, removeContact, addContact} = require('./db/contacts.js');
const { Command } = require('commander');
const app = require('./app')
app.listen(5000,()=>{
    console.log('Server started');
  })

// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();


// // TODO: рефакторить
// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//         console.table(await listContacts());
//       break;

//     case 'get':
//         getContactById(id);
//       break;

//     case 'add':
//       addContact(name,email,phone)
//       break;

//     case 'remove':
//         removeContact(id)
//       break;
  
  
//   default:
//     console.log('Not found');
//     break;
// }
// }

// invokeAction(argv);

