import {useState} from 'react';
import PropTypes from 'prop-types';

const sumar3 = (e, a, x) => {
    a=a+x;
    console.log(e);
    console.log(a);
}

export const CounterApp = ({value}) => {

    const [valor, setValor] = useState(value);

    const sumar = (e) => {
        setValor(valor+1);
        console.log(e);
        console.log(valor);
    }

    const restar = (e) => {
        setValor(valor-1);
        console.log(e);
        console.log(valor);
    }

    const reset = (e) => {
        setValor(value);
        console.log(e);
        console.log(valor);
    }



    const sumar2 = (e, x) => {
        setValor((v) => v+x);
        console.log(e);
        console.log(valor);
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2>{valor}</h2>
        <button onClick={sumar}>+1</button>
        <button onClick={restar}>-1</button>
        <button aria-label="btn-reset" onClick={reset}>Reset</button>
        <button onClick={(e) => sumar2(e, 2)}>+2</button>
        <button onClick={(e) => sumar3(e, 1, 2)}>1+2</button>
    </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}