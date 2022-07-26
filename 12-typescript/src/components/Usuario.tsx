import { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: 'XYZ789',
    name: 'Jimmy McGill'
}

export const Usuario = () => {

    const [user, setUser] = useState<User>();
    const [user2, setUser2] = useState<User>({
        uid: '',
        name: ''
    });

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Kim Wexler'
        })
    }

    return (
        <div className='mt-5'>
            <h3>Usuario: </h3>
            <button className='btn btn-outline-primary' onClick={() => login()}>
                Login
            </button>
            {
                (!user)
                ? <pre>No hay usuario</pre>
                : <pre>{JSON.stringify(user)}</pre>
            }
            
        </div>
    )
}
