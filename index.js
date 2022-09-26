const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.table(newContact);
      break;
    case "remove":
      const deleteBook = await contacts.removeContact(id);
      console.table(deleteBook);
      break;
    case "update":
      const updateBook = await contacts.updateById(id, name, email, phone);
      console.table(updateBook);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
