import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [loginUser,setLoginUser]=useState(false);
  const authctx=useContext(AuthContext);
  async function loginHandler({email,password}){
    setLoginUser(true);
    try {
      const token=await login(email,password);
      authctx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed!','could not log you in.Please check your credentails or try again later!');
      setLoginUser(false);
    }
    
    
  }
  if(loginUser){
    return <LoadingOverlay message={"Logging..."}/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;