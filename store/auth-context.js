import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext=createContext({
    token:'',
    isAuthenticated:'',
    authenticate:()=>{},
    logout:()=>{},
});
 function AuthContextProvider({children}){
    const [authToken,setAuthToken]=useState();
   
   
    function authenticate(token){
        //console.log(!!authToken)
        setAuthToken(token);
        //here after token the thing should be either string or json means if number convert to string if object convert to json.stringify
        //AsyncStorage.setItem('key',value(in string));
        AsyncStorage.setItem('token',token);
    }
     function logout(){
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }
    const value={
        //passed to  all user there we can set token key or call function
        //! operator is the logical NOT operator. It's used to invert the boolean value of an expression now ifisauth hasvalue true means !true is false so !!true is true 
        token:authToken,
        isAuthenticated:!!authToken,
        authenticate:authenticate,
        logout:logout
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthContextProvider;