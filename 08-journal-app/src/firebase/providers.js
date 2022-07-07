import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credentials);

        //const user = result.user;
        //console.log(user);

        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    }catch (error){
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const signUpWithEmailPassword = async({email, password, displayName}) => {
    try{

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        //console.log(resp);
        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    }catch (error){
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try{

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user;
        //console.log(resp);

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    }catch (error){
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}