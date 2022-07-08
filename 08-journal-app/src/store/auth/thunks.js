import { signUpWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout({errorMessage: result.errorMessage}));

        //delete result.ok;
        dispatch(login(result));

    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await signUpWithEmailPassword({email, password, displayName});
        //console.log(result);
        if (!result.ok) return dispatch(logout({errorMessage: result.errorMessage}));

        //delete result.ok;
        dispatch(login(result));

    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({email, password});
        //console.log(result);
        if (!result.ok) return dispatch(logout({errorMessage: result.errorMessage}));

        //delete result.ok;
        dispatch(login(result));

    }
}

export const startLogoutFirebase = () => {
    return async(dispatch) => {

        await logoutFirebase();

        dispatch(clearNotesLogout());
        dispatch(logout());

    }
}