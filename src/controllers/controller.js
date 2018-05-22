import mongoose from "mongoose";
import { ContactSchema } from "../models/model";

const Contact = mongoose.model("Contact", ContactSchema);

//adds new contact
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

//gets all contacts from database
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err); 
    }
    res.json(contact);

  });
};

//gets a contact by _id
export const getSpecificContact = (req, res) => {
  Contact.find({_id: req.params.id}/*req.params.Contactid*/ ,(err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
    
  });
  console.log(res.name);
};

//update a contact in the database
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.id }, req.body, /*{ new: true },*/ (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

//delete a contact from the database
export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.id }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "You have deleted a contact" });
  });
};
