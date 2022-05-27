import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";




function Login() {

    let navigate = useNavigate()
    
    const [cookies, setCookie] = useCookies()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async () => {
        const res = await axios.post('http://host.docker.internal:8000/api/login/', {
            username: email,
            password: password

        })
        const username = res.data.user
        const token = res.data.token

        setCookie('username', username, { path: '/' })
        setCookie('token', token, { path: '/' })

        navigate('/feed')
    }

    return (
        <div className='log-in'>
            <h1 style={{fontWeight:'250'}}>Log in</h1>
            <TextField
                sx={style}
                id="Email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
            />
            <TextField
                sx={style}
                id="Password"
                label="Password"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
            />
            <Button onClick={submit} style={{backgroundColor:'teal',width:'400px'}} variant="contained">log in</Button>
            <h3>
                No account? <Link style={{ textDecoration: 'none' }} to='/'>
                    <span style={{ cursor: 'pointer', color: 'crimson',fontWeight:'450' }} >Sign up</span>
                </Link>
            </h3>
        </div>
    )
}

const style = {
    width: '70%',
    margin: 2.5
}

export default Login;