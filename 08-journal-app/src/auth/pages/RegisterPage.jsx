import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'The email must have a @'],
    password: [ (value) => value.length >= 8, 'The password must be at least 8 characters long'],
    displayName: [ (value) => value.length >= 1, 'The full name is required'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const {status, errorMessage} = useSelector(state => state.auth);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const {formState, displayName, email, password, onInputChange,
            isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (

        <AuthLayout title="Register">
            {/* <h1>{isFormValid ? 'Valido' : 'Incorrecto'}</h1> */}

            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Full name" type="text" placeholder="Your name" fullWidth 
                        name="displayName" value={displayName} onChange={onInputChange} error={!!displayNameValid && formSubmitted} helperText={formSubmitted && displayNameValid} />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Email" type="email" placeholder="correo@google.com" fullWidth 
                        name="email" value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={formSubmitted && emailValid} />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Password" type="password" placeholder="password" fullWidth 
                        name="password" value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={formSubmitted && passwordValid} />
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>
                                Create account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                    <Typography sx={{mr: 1}}>Already have an account?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Login
                        </Link>
                        
                    </Grid>
                </Grid>
            </form>

        </AuthLayout>

    )
}
