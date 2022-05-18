import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";


function Auth() {
    return (
        <>
            <Routes>
                <Route path='/' exact element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Auth;