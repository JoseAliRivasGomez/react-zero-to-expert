import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const {status, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {email, password, onInputChange, formState} = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginWithEmailPassword({email, password}));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (

        <AuthLayout title="Login">

            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Email" type="email" placeholder="correo@google.com" fullWidth name="email" value={email} onChange={onInputChange} />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Password" type="password" placeholder="password" fullWidth name="password" value={password} onChange={onInputChange}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}} display={!!errorMessage ? '' : 'none'}>
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                                <Google />
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Create an account
                        </Link>
                        
                    </Grid>
                </Grid>
            </form>

        </AuthLayout>

    )
}
