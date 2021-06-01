import {useState} from "react";

const State = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
            <h1>useState</h1>
            <dl>
                <dt>useState is a unique feature to Functional Components</dt>
                <dd>Class components have a separate means of using and changing state.</dd>
                <dt>useState uses array destructuring</dt>
                <dd>useState provides a state variable and a setState function</dd>
                <dt>useState is a Hook</dt>
                <dd>useState is a hook baked into React</dd>
                <dt>Trigger re-renders</dt>
                <dd>Like with props changes, changing the state of a component re-renders the whole component</dd>
            </dl>
            <StateExample />
            </div>
        </div>
    );
};


export default State;

function StateExample() {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    return(
        <div>
            <input value = {text} onChange={e => setText(e.target.value)}/>
            <br />
            <br />
            <img
                style={{width: '100px', height: '100px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
                onClick={() => setLikeNum(likeNum + 1)} />
            <span>{likeNum}</span>    
        </div>
    );
};