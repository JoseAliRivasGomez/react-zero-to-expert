import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos: number
}

export const Timer = ({milisegundos}: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<number>();

    //console.log(milisegundos);
    

    useEffect(() => {

      ref.current && clearInterval(ref.current);
      ref.current = setInterval(() => setSegundos(state => state + (milisegundos/1000)), milisegundos);
    
    }, [milisegundos])
    

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}
