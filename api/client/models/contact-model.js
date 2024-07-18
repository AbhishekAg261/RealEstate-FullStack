const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  desc: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Contact = new mongoose.model("CONTACT", contactSchema);

module.exports = Contact;
