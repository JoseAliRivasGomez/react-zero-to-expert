import { useSelector, useDispatch } from "react-redux"
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { onLogoutCalendar } from "../store/calendar/calendarSlice";

export const useAuthStore = () => {
  
    const dispatch = useDispatch();
  
    const {status, user, errorMessage} = useSelector(state => state.auth);

    const startLogin = async ({email, password}) => {
        dispatch(onChecking());
        try {
            
            const {data} = await calendarApi.post('/auth', {email, password});

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({name: data.name, uid: data.uid}));

        } catch (error) {
            //console.log(error);
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async ({email, password, name}) => {
        dispatch(onChecking());
        try {
            
            const {data} = await calendarApi.post('/auth/new', {name, email, password});

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({name: data.name, uid: data.uid}));

        } catch (error) {
            //console.log(error);
            dispatch(onLogout(error.response.data?.msg || 'Error'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async() => {

        const token = localStorage.getItem('token');

        if (!token) return dispatch(onLogout());

        try { //Si no ha expirado el token, crea otro

            const {data} = await calendarApi.get('/auth/renew');
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({name: data.name, uid: data.uid}));
            
        } catch (error) { //Si ya expiro el token, cierra sesion
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutCalendar());
        dispatch(onLogout());
    }

    return {
        status, 
        user, 
        errorMessage,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }

}
