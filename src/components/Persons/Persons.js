import React from 'react'
import Person from './Person/Person';
import './Persons.scss'

const Persons = (props) => {
    return props.persons.map((person, index) => {
        return(
            <div className="Persons">
                <Person
                    clicked = {() => props.clicked(index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    changed = {event => props.changed(event, person.id)}
                />
            </div>
        )
    })
}

export default Persons;