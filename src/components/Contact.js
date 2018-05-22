//creatig functional components for the contact list
import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
    return (
        <div className="contact">
          <span>{props.name}</span>         
          <span>{props.username}</span> 
        </div>
      );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired               //making the name prop mandatory 
};

export default Contact;