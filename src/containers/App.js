import React, { Component } from 'react';
import './App.scss';
import Persons from '../components/Persons/Persons';
import PersonController from '../components/PersonsContoller/PersonController';

class App extends Component {

  constructor(props){
    super(props)
    console.log('[App.js] constructor - 01')
  }

  state = {
    persons: [
      { id: '53c3ae8f-2ca2-45cd-963d-f291cee3ac34', name: 'Lakith Muthugala', age: 25 },
      { id: '4115378e-0f0a-4461-b9cf-89724e76e9b5', name: 'Sachin Nanayakkara', age: 25 },
      { id: '6ef0f808-aad0-4d26-bd7d-f16ee5887bd9', name: 'Chalana Kalpitha', age: 26 }
    ],
    showPersons: false,
    personControllerHandler: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps - 02',props)
    return state;
  }

  displayHandler = () => {
    let showPersons = this.state.showPersons;

    showPersons = showPersons ? false : true;

    this.setState({
      showPersons : showPersons
    })
  }

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

  personControllerhandler = () => {
    let personController = this.state.personControllerHandler;
    personController = personController ? false : true;
    this.setState({
      personControllerHandler : personController
    })
  }

  componentDidMount(){
    console.log('[App.js] - componentDidMount - 06')
  }

  render(){
    console.log("[App.js] - render - 03")
    let persons = null
    if(this.state.showPersons) {
       persons = (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.removePerson}
          changed = {this.nameChangeHandler}
        />
      )
    }

    return (
      <div className="App">
        <button onClick={this.personControllerhandler}>Toggle Person Controller</button>
        {this.state.personControllerHandler ? (
          <PersonController 
          click = {this.displayHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          />
        ) : null}

        {persons}
      </div>
    );
  }

}

export default App;
