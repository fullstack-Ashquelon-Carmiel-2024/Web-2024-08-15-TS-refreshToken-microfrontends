import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const baseAPIURL = 'http://localhost:3333/api';

export const login = async (formData,dispatchUser) => {

    try {

        const result = await axios.post(`${baseAPIURL}/auth/login`,formData);
        dispatchUser({type:'LOGIN',user:result.data.accessToken, 
                                   refreshToken: result.data.refreshToken})

        return {status: true, msg: 'The login is successful'}

    }catch(err) {

        console.log(err.message)
        return {status: false, msg: err.message}

    }

}

export const forgotPassword = async (formData) => {

    try {

        const result = await axios.post(`${baseAPIURL}/auth/forgot-password`,formData);
        return {status: true, message: 'The mail have been sent successfully'}

    }catch(err) {

        console.log(err)
        return {status: false, message: err.response.data.message}

    }

}

export const resetPassword = async (formData, userId, resetToken) => {

    try {

        const result = await axios.patch(`${baseAPIURL}/auth/reset-password`,
                  {newpassword:formData.newpassword,userId,resetToken});
        return {status: true, message: 'The password was updated successfully'}

    }catch(err) {

        console.log(err)
        return {status: false, message: err.response.data.message}

    }

}

export const refresh = async (dispatchUser) => {

    let refreshToken = sessionStorage.getItem('olymp-user-refresh'); // tbd: check if we have it
    let userId = jwtDecode(sessionStorage.getItem('olymp-user')).id;

    try {

        console.log(`One second, and refreshing ...`)
        const result = await axios.post(`${baseAPIURL}/auth/refresh`,{userId, refreshToken});
        dispatchUser({type: 'SET_REFRESHED_TOKENS',
            accessToken: result.data.accessToken, 
            refreshToken: result.data.refreshToken 
        })
        return result.data;

    } catch (err) {

        console.log(`ERROR: \n`,err)
        return await logout(dispatchUser);

    }

}

export const logout = async (dispatchUser) => {

    try {

        const result = await axios.post(`${baseAPIURL}/auth/logout`);
        dispatchUser({type:'LOGOUT'})
        return {status: true, msg: 'Logged out successfully'}

    }catch(err) {

        console.log(err.message)
        return {status: false, msg: err.message}

    }

}