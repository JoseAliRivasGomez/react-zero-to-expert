import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
        //console.log('Message Mounted');

        const onMouseMove = ({x,y}) => {
            // const coords = {x,y}
            // console.log(coords);
            setCoords({x,y});
        }
        window.addEventListener('mousemove', onMouseMove);


        // window.addEventListener('mousemove', (e) => {
        //     //console.log(e);
        //     //console.log(" :) ");
        //     console.log(e.x, e.y);
        // });
    
        return () => {
            //console.log('Message UnMounted');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])
    

    return (
        <>

            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
