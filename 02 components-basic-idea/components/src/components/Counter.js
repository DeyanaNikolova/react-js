import { useState } from 'react';

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'First Blood';
        case 2:
            return 'Double Kill';
        case 3:
            return 'Tripple Kill';
        case 4:
            return 'Multi Kill';
        case 5:
            return 'Unstoppable'

        default:
            return 'Counter';
    }
};

const Counter = (props) => {

    const [counter, setCounter] = useState(0);

    const onIncrementCounter = (e) => {
        setCounter(state => state + 1)
    };

    const onDectrementCounter = (e) => {
        setCounter(state => state - 1);
    };

    const onClearCounter = (e) => {
        setCounter(0);
    };

    //let title = 'Counter';
    // if(counter == 1){
    //     title = 'First Blood'
    // } else if(counter == 2){
    //     title = 'Double Kill'
    // }

    return (
        <div>
            <p style={{ fontSize: Math.max(counter, 1) / 2 + 'em' }}>
                {counter > 5 ? 'Godlike' : getTitle(counter)}: {counter}
            </p>
            <button onClick={onDectrementCounter} >-</button>
            {props.canReset && <button onClick={onClearCounter} >0</button>}
            {counter < 10
                ? <button onClick={onIncrementCounter} >+</button>
                : null
            }
        </div>
    );
};

export default Counter;