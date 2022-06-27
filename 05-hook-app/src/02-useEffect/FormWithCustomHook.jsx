import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const {formState, inputChange, resetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    return (
    <>

        <h1>Form with Custom Hook</h1>
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

        <input
            type="password"
            className="form-control mt-2"
            placeholder="password"
            name="password"
            value={password}
            onChange={inputChange}
        />

        <button onClick={resetForm} className="btn btn-primary mt-2">Borrar</button>
       
    </>
    )
}
