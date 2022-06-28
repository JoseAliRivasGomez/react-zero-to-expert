import {memo} from 'react';

export const Small = memo(({value}) => { //Memoriza todo el componente, solo lo vuelve a ejecutar cuando los props cambian

    console.log("Me volvi a dibujar :(")

    return (
    <small>{value}</small>
    )
})
