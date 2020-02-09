import React,{Component} from 'react'
import Person from './Person/Person';
import './Persons.scss'

class Persons extends Component {
    
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
        // you can perform any clean up work here. like removing event listners.
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("[Persons.js] - shouldComponentUpdate")
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    render(){
        return this.props.persons.map((person, index) => {
            return(
                <div className="Persons" key = {person.id}>
                    <Person
                        clicked = {() => this.props.clicked(index)}
                        name = {person.name}
                        age = {person.age}
                        changed = {event => this.props.changed(event, person.id)}
                    />
                </div>
            ) 
        })
    } 
}

export default Persons;