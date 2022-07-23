import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogoutFirebase } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => { 

    const dispatch = jest.fn();
    beforeEach(()=>jest.clearAllMocks());
    
    test('Debe de invocar el checkingCredentials', async () => { 

        // const valor = checkingCredentials();
        // console.log(valor);
        
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

    })

    test('startGoogleSignIn debe llamar checkingCredentials y login - Exito', async () => { 
        
        const loginData = {ok:true, ...demoUser};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    })

    test('startGoogleSignIn debe llamar checkingCredentials y logout - Error', async () => { 
        
        const loginData = {ok:false, errorMessage: 'Un error en Google'};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout({errorMessage: loginData.errorMessage}));

    })

    test('startLoginWithEmailPassword debe llamar checkingCredentials y login - Exito', async () => { 
        
        const loginData = {ok:true, ...demoUser};
        const formData = {email:demoUser.email, password: '12345678'};
        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    })

    test('startLogout debe llamar logoutFirebase, clearNotes y logout', async () => { 

        await startLogoutFirebase()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());

    })



})