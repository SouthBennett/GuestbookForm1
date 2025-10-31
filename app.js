// Import the express module
import express from 'express';

//Create an instance of an Express application
const app = express();

// Set ejs as our view
app.set('view engine', 'ejs');

// Enable static file serving
app.use(express.static('public'));

// Allow the app to parse form data
app.use(express.urlencoded({extended: true }));

// Create an array to store contacts
const contacts = [];

//Define the port number where our serve will listen
const PORT = 3003;

//Define a default "route" ('/')
//req: contains information about the incoming request
//res: allows us to send back a response to the client
app.get('/', (req, res) => {
  // res.sendFile(`${import.meta.dirname}/views/home.html`);
  res.render('home');
});

//Confirmation route
app.get("/confirmation", (req, res) => {
  // res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
  res.render('confirmation');
});

// app.get("/admin", (req, res) => {
//   res.render("admin", { contacts });
// });

// Handle POST requests sent to the "/submit" route
app.post("/submit", (req, res) => {
  // Create a new object called "contact" to store the form data
  const contact = {
    fname: req.body.fname,
    lname: req.body.lname,
    jtitle: req.body.jtitle,
    company: req.body.company,
    linkedin: req.body["linkedin-url"],
    email: req.body.email,
    connection: req.body.connection,
    other: req.body.other,
    message: req.body.message,
    timestamp: new Date().toLocaleString(),
  };

  // Push contact into the array
  contacts.push(contact);
  console.log("New contact:", contact);

  // Redirect to confirmation page
  //res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
  res.render('confirmation', { contact });
});

//Start the server and make it listen on the port
//specified above
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
