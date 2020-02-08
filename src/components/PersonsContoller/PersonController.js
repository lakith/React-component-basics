import React from 'react'
import './PersonsController.scss'

const PersonController = (props) => {

    const assignedClasses = [];

    if(props.showPersons) {
        assignedClasses.push("red")
    } else {
        assignedClasses.push('green')
    }

    if(props.persons.length >= 2) {
        assignedClasses.push("bold")
    }
    return(
        <div className="PersonController">
            <h3>Persons Controller.</h3>
            <form>
                <input type="text" name="name" placeholder="Person name"/>
                <input type="number" name="age" placeholder="Person age"/>
                <button type="submit">Add Person</button>
            </form>
            <button className={assignedClasses.join(' ')} onClick={props.click}> {props.showPersons ? 'Hide Persons.' : 'Display Persons.' } </button>
        </div>
    )
}

/****
 * 
 * use event.preventDefault()
 * 
 * In this case,
 * a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
 * You can try the code yourself with and without the "prevent default
 * 
 *  ****/
export default PersonController