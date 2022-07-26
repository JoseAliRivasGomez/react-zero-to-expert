import { useForm } from '../hooks/useForm';

const initialState = {
    email: 'kim@gmail.com',
    nombre: 'Kim Wexler',
    edad: 47
}

interface formData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {

    const {formulario, email, nombre, edad, onInputChange} = useForm<formData>(initialState);

    return (
        <form className="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" name="nombre" value={nombre} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="number" className="form-control" name="edad" value={edad} onChange={onInputChange} />
            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
