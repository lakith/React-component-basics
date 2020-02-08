import React from 'react'
import './Person.scss'
const Person = props => {
    return(
        <div className="Person">
            <div className="Person-internal">
                <p>
                    I'm {props.name} and I'm {props.age} years old.
                </p>
                <p>
                    {props.children}
                </p>
                <div className="Person-controller">
                    <input clas type="text" onChange={props.changed} value={props.name} />
                    <button onClick={props.clicked} >Delete Person</button> 
                </div>
            </div>
        </div>
    )
}

export default Person