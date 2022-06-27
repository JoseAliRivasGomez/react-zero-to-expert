import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'kim',
        email: 'kim@gmail.com'
    });

    const {username,email} = formState;

    const inputChange = ({target}) => {
        const {name,value} = target;
        //console.log({name,target});
        setFormState({
            ...formState,
            [name]:value
        })
    }

    //Efectos secundarios
    useEffect(() => {
        //console.log('Global state changed');
    });

    useEffect(() => {
        //console.log('SimpleForm component was created');
    }, []);

    useEffect(() => {
        //console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        //console.log('email state changed');
    }, [email]);
    

    return (
    <>

        <h1>Simple Form</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={inputChange}
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="email@email.com"
            name="email"
            value={email}
            onChange={inputChange}
        />

        {
            (username === 'kim') && <Message />
        }
       
    </>
    )
}
