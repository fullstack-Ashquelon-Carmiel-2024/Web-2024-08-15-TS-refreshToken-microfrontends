import { createContext, useReducer } from "react";
import userReducer from "./userReducer";

const INITIAL_STATE = {
    user: {role: 'guest'}
}

export const userContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({children}) => {

    const [state,dispatchUser] = useReducer(userReducer,INITIAL_STATE);

    return (
        <userContext.Provider value={{user:state.user,dispatchUser}}>
            {children}
        </userContext.Provider>
    )
    
}