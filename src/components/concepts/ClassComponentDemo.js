import React, {Component} from 'react';
import {FiThumbsDown, FiThumbsUp, } from 'react-icons/fi';

export default class ClassComponentDemo extends Component {
    constructor(props){
        super(props);
        this.state = {incrementCount: 0, decrementCount: 0};
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            {incrementCount: this.state.incrementCount +1}
        )
    }
    decrementCount = () => {
        console.log("decrement called");
        this.setState(
            {decrementCount: this.state.decrementCount -1}
        )
    }


render() {
    console.log("render called");
    return (
        <div className="main">
            <div className="mainDiv">
                <ClassComponentNotes/>
                <hr />
                <h1>Like it!!!</h1>
                <button onClick={this.incrementCount}>
                    <FiThumbsUp /> {this.state.incrementCount}
                </button>
                <h1>Dislike it!!!</h1>
                <button onClick={this.decrementCount}>
                   <FiThumbsDown /> {this.state.decrementCount}
                </button>
            </div>
        </div>
    );
}

}

const ClassComponentNotes = function () {
    return(
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Classes</dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component per file.</dd>
            </dl>
        </div>
    )
}


/**
 * Must extend React Component.
 * Must always have a render method.
 * Will often have a constructor.
 * Class components are considered the "React way" of writing components.
 * Known as intelligent components.
 * Built with ES6 JS Classes.
 * Have lifecycle hooks/methods, different phases in the lifecycle of the component where different events can/should happen.
 * Use export, like Functional Components.
 * Multiple class components can be in one file, but only one class component should be exported for each file.
 */