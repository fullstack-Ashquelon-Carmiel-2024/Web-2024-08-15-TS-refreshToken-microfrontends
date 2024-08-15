import axios from 'axios';
import { refresh, logout } from './auth';
axios.defaults.withCredentials = true;

const baseAPIURL = 'http://localhost:3333/api';

const config = {
    headers:{
      "content-type": 'application/json;charset=utf-8'
    }
};

const getAuthConfig = () => {
    // return authorization header with jwt token
    let accessToken = sessionStorage.getItem('olymp-user');
    
    if (accessToken) {
        return { ...config, headers: {...config.headers,
                                         authorization: `Bearer ${accessToken}` }}
    } else {
        return config;
    };
    
}

export const getSportsmen = async (dispatchUser) => {

    try {

        const result = await axios.get(`${baseAPIURL}/users`,getAuthConfig());
        
        return result.data;
        
    }catch(err) {
        
        console.log(err.message)
        
        if (err.response.status === 403) {
            
            try {

                console.log('going to refresh access and refresh tokens')
                
                const result = await refresh(dispatchUser);
                console.log(result)
                //const result = await axios.get(`${baseAPIURL}/users`,getAuthConfig());
        
                //return result.data;
                return []

            } catch(err) {

                console.log(err.message);

                return [];
            }

        } else {

            logout(dspatchUser);
            return [];
        }

    }

}

