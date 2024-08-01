import { useEffect } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"
import axios from "axios"

const Login = () => {
    const [_access_token, setToken] = useLocalStorage('access_token','')
    const [_refresh_token, setRefresh] = useLocalStorage('refresh_token','')
    
    if(location.search.substr(1).slice(5).length != 0)
      useEffect(()=>{
        axios.get('https://api.openspm.store/api/auth',{headers:{'code':location.search.substr(1).slice(5)}}).then((response)=>{setToken(response.data['access_token']);setRefresh(response.data['refresh_token']);location.replace('https://openspm.store/')})},[])
    return ( <></> );
}
 
export default Login;