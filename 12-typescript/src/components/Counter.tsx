import { useState } from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementar = (numero: number = 1):void => { //number, string, boolean, any
        setCounter(counter+numero);
    }

    return (
        <div className="mt-5">
            <h3>Counter: </h3>
            <span>{counter}</span>
            <br />
            <button className='btn btn-outline-primary mt-2 mx-2' onClick={() => incrementar()}>
                +1
            </button>
            <button className='btn btn-outline-primary mt-2 mx-2' onClick={() => incrementar(2)}>
                +2
            </button>
            <button className='btn btn-outline-danger mt-2 mx-2' onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    )
}
