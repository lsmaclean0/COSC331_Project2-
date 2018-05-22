import mongoose from "mongoose";
import { ContactSchema } from "../models/model";

const Contact = mongoose.model("Contact", ContactSchema);

var MongoClient = require("mongodb").MongoClient

//Move the connection into a function to avoid a "Pyramid of doom" (callback hell)
/*functions allow us to use callbacks, avoiding getting "undefined" when 
Processing a request that would otherwise be synchronus and proces*/
function getConnection(dat) {
    //connecting to database at home page should make it easier to build a simple front end?
    MongoClient.connect("mongodb://localhost:27017", function(err, db) {
        if(err) return dat(error);
        var contacts = db.collection("contact");
    })

    
}
