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
    let tokenFamily = sessionStorage.getItem('olymp-token-family');

    console.log(`The token ends by ${accessToken.slice(-3)}`)
    console.log(`The token family is ${tokenFamily}`)
    
    if (accessToken) {
        return { ...config, headers: {...config.headers,
                                         authorization: `Bearer ${accessToken}`,
                                         tokenFamily }}
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
                
                let result = await refresh(dispatchUser);

                if (result.accessToken) {
                    console.log("the second chance")

                   

                    const oldConfig = getAuthConfig()
                    const newConfig = { ...oldConfig, headers: {...oldConfig.headers,
                        authorization: `Bearer ${result.accessToken}`,
                        tokenFamily:'?' }}
                    
                    

                    result = await axios.get(`${baseAPIURL}/users`,newConfig);
        
                    return result.data;
                }

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

