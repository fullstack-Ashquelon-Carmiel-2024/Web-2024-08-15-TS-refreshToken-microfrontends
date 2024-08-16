import {jwtDecode} from 'jwt-decode';

const userReducer = (state, action) => {

    switch(action.type) {
        case "LOGIN": {
            sessionStorage.setItem('olymp-user',action.user);
            sessionStorage.setItem('olymp-user-refresh',action.refreshToken);
            sessionStorage.setItem('olymp-token-family',String(1));
            let decoded = jwtDecode(action.user);

            return {user: {...decoded,role: decoded.role.userType}, tokenFamily: 1};
        }
        case "LOGOUT": {
            sessionStorage.removeItem('olymp-user');
            sessionStorage.removeItem('olymp-user-refresh');
            return {
                user: {role: 'guest', tokenFamily: 0}
            };
        }
        case "SET_REFRESHED_TOKENS": {
            console.log(`setting the new tokens ...`)
            sessionStorage.setItem('olymp-user',action.accessToken);
            sessionStorage.setItem('olymp-user-refresh',action.refreshToken);
            let tf = +sessionStorage.getItem('olymp-token-family');
            sessionStorage.setItem('olymp-token-family',String(tf+1));
        }
        case "CHECK_STORAGE_FOR_USER": {

            if (sessionStorage.getItem('olymp-user')) {

                let decoded = jwtDecode(sessionStorage.getItem('olymp-user'));
                let tokenFamily = +sessionStorage.getItem('olymp-token-family')
                return {user: {...decoded,role: decoded.role.userType},
                        tokenFamily};

            } else {
                return {user: {role: 'guest'}, tokenFamily: 0};
            };
        }
        default: {
            return state;
        }
    }

}

export default userReducer;