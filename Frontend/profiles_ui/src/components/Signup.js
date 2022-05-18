import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";



function Signup() {

    let navigate = useNavigate()
    
    const [cookies, setCookie] = useCookies()


    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const submit = async () => {
        await axios.post('http://localhost:8000/api/profile/', {
            email,
            name,
            password
        })


        const res = await axios.post('http://localhost:8000/api/login/', {
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
        <div className='sign-up'>
            <h1>Sign up</h1>
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
                id="Name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <Button onClick={submit} variant="contained">sign up</Button>
            <h3>
                Have account? <Link style={{ textDecoration: 'none' }} to='/login' >
                    <span style={{ cursor: 'pointer', color: 'blueviolet' }} >Login in</span>
                </Link>
            </h3>
        </div>
    )
}

const style = {
    width: '70%',
    margin: 2.5
}

export default Signup;