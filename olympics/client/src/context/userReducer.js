import {jwtDecode} from 'jwt-decode';

const userReducer = (state, action) => {

    switch(action.type) {
        case "LOGIN": {
            sessionStorage.setItem('olymp-user',action.user);
            sessionStorage.setItem('olymp-user-refresh',action.refreshToken);
            let decoded = jwtDecode(action.user);

            return {user: {...decoded,role: decoded.role.userType}};
        }
        case "LOGOUT": {
            sessionStorage.removeItem('olymp-user');
            sessionStorage.removeItem('olymp-user-refresh');
            return {
                user: {role: 'guest'}
            };
        }
        case "SET_REFRESHED_TOKENS": {
            sessionStorage.setItem('olymp-user',action.actionToken);
            sessionStorage.setItem('olymp-user-refresh',action.refreshToken);
        }
        case "CHECK_STORAGE_FOR_USER": {

            if (sessionStorage.getItem('olymp-user')) {

                let decoded = jwtDecode(sessionStorage.getItem('olymp-user'));
                return {user: {...decoded,role: decoded.role.userType}};

            } else {
                return {user: {role: 'guest'}};
            };
        }
        default: {
            return state;
        }
    }

}

export default userReducer;