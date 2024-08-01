import { useEffect } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"
import axios from "axios"

const Login = () => {
    const [_access_token, setToken] = useLocalStorage('access_token','')
    const [_refresh_token, setRefresh] = useLocalStorage('refresh_token','')
    
    if(location.search.substr(1).slice(5).length != 0)
        const response = await axios.post(
          'https://api.openspm.store/api/auth',
          '',
          {
            headers: {
              'code': location.search.substr(1).slice(5)
            }
          }
        );
    return ( <></> );
}
 
export default Login;
