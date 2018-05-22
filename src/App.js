import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


import ContactList from "./components/ContactList";

const contacts = [ ];

//fetching from the database
import axios from "axios";


class App extends Component {

  // default State object
  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {

        // create an array of contacts only with relevant data
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name,
            userName: c.username
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contacts</h1>
        </header>
        
        <button type="submit" className="btn btn-default">Get Contacts</button>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
  
} 

export default App;