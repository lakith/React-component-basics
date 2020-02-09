##  In here I have currently compiled three methods of Data Handling methods in React

1. From Parent to Child using Props
1. From Child to Parent using Callbacks
1. Between Siblings
    * Combine above two methods.
    * Using Redux
    * Using React’s Context API
  

### From Parent to Child Using Props

This is the easiest direction of data flow in React and the most basic one.

```javascript
class Parent extends React.Component {
state = { data : "Hello World" } 
render() {
        
        return (
            <div>
                 <Child1/>            //no data to send             
                 <Child2 dataFromParent = {this.state.data} />
            </div>
        );
    }
}
//It is no compulsion to use the data to send as a state, simple vars or const variables could also be used to send data from Parent to Child.
```
Simply, use this.props.dataFromParent (just a variable used for sending props) to access the data sent from Parent to Child

```javascript
class Child2 extends React.Component {
render() {
        
        return (
            <div>
                The data from parent is:{this.props.dataFromParent}
            </div>
        );
    }
}
```

### From Child to Parent Using Callbacks

* **Step 1:** Define a callback function that takes in a parameter which we consider having accessed from the child in the Parent.js
* **Step 2:** Also, send the defined callback function as a props to the Child1.js

```javascript
class Parent extends React.Component {
 state = { message: "" }
 callbackFunction = (childData) => {
       this.setState({message: childData})
 },
 render() {
         return (
             <div>
                  <Child1 parentCallback = {this.callbackFunction}/>
                  <p> {this.state.message} </p>
             </div>
         );
 }
}
```

* **Step 3:** In Child1.js send the data using this.props.callback(dataToParent)

```javascript
class Child1 extends React.Component{
sendData = () => {
         this.props.parentCallback("Hey Popsie, How’s it going?");
    },
render() { 
//you can call function sendData whenever you'd like to send data from child component to Parent component.
    }
};
```

### Between Siblings

This will be discussed in later
