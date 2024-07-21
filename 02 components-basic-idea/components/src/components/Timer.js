import { useState } from 'react';

const Timer = (props) => {

   const [seconds, setSeconds ] = useState(props.start);
   // returns array where:
   // seconds == (array[0]) -> value
   // setSeconds ==(array[1]) -> function


   // Not good practice (useEffect is better)
    setTimeout(() => {
       // setSeconds(20);  for setting a new state regardless of the old state
       setSeconds(state => state + 1); // for update the old state
    }, 1000);

    return (
        <div>
            <h2>Timer</h2>
            Time: {seconds}s
        </div>
    );
};

export default Timer;