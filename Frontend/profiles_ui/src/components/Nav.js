import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";



function Nav() {

    let navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies()

    const userGreet = cookies.username ? 'Hello, ' + cookies.username : ''

    const logout = () => {
        removeCookie('token', { path: '/' });
        removeCookie('username', { path: '/' });
        navigate('/login')
    }

    return (
        <div className="nav">

            <Link to='/feed'><div style={{ cursor: 'pointer', color: 'white', float: 'left' }}>Feed</div></Link>

            <div onClick={logout} style={{ cursor: 'pointer', color: 'white' }}>{cookies.token?'Log out': 'Log in'}</div>
            <div>{userGreet}</div>
        </div>
    )
}


export default Nav;