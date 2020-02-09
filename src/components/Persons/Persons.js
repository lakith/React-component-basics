import React from 'react'
import Person from './Person/Person';
import './Persons.scss'

const Persons = (props) => {
    console.log('[Persons.js] - rendering... - 04')
    return props.persons.map((person, index) => {
        return(
            <div className="Persons" key = {person.id}>
                <Person
                    clicked = {() => props.clicked(index)}
                    name = {person.name}
                    age = {person.age}
                    changed = {event => props.changed(event, person.id)}
                />
            </div>
        )
    })
}

export default Persons;