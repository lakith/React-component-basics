import React, { Component } from 'react';
import './App.scss';
import Persons from '../components/Persons/Persons';

class App extends Component {

  state = {
    persons: [
      { id: '53c3ae8f-2ca2-45cd-963d-f291cee3ac34', name: 'Lakith Muthugala', age: 25 },
      { id: '4115378e-0f0a-4461-b9cf-89724e76e9b5', name: 'Sachin Nanayakkara', age: 25 },
      { id: '6ef0f808-aad0-4d26-bd7d-f16ee5887bd9', name: 'Chalana Kalpitha', age: 26 }
    ],
    showPersons: false
  };

  removePerson = (index) => {
    let persons = [...this.state.persons]
    persons.splice(index,1)
    
    this.setState({
      persons : persons
    })

  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons : persons
    })
  }

  render(){
    return (
      <div className="App">
        <Persons 
          persons = {this.state.persons}
          clicked = {this.removePerson}
          changed = {this.nameChangeHandler}
        />
      </div>
    );
  }

}

export default App;
