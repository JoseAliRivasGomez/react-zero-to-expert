import { useState } from "react";

export const CounterApp = () => {

    const [counters, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const {counter1, counter2, counter3} = counters;

    return (
    <>

        <h1>Counter 1: {counter1}</h1>
        <h1>Counter 2: {counter2}</h1>
        <h1>Counter 3: {counter3}</h1>

        <hr />

        <button className="btn" onClick={() => setCounter({...counters, counter1: counter1+1})}>+1</button>
        <button className="btn" onClick={() => setCounter({...counters, counter2: counter2+1})}>+1</button>
        <button className="btn" onClick={() => setCounter({...counters, counter3: counter3+1})}>+1</button>

    </>
    )
}
