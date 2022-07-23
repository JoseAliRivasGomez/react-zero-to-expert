export const getEnvironments = () => {

    //import.meta.env;

    return {
        //...import.meta.env
        VITE_APIKEY: import.meta.env.VITE_APIKEY,
        VITE_AUTHDOMAIN: import.meta.env.VITE_AUTHDOMAIN,
        VITE_PROJECTID: import.meta.env.VITE_PROJECTID,
        VITE_STORAGEBUCKET: import.meta.env.VITE_STORAGEBUCKET,
        VITE_MESSAGINGSENDERID: import.meta.env.VITE_MESSAGINGSENDERID,
        VITE_APPID: import.meta.env.VITE_APPID,
    }


}