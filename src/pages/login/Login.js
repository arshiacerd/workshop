import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
   const [email, setEmail]  = useState(null)
   const [pass, setPass]  = useState(null)

    const handleLogin=()=>{
        if(email != null && pass !=null)
        {
            localStorage.setItem("email", email)
            localStorage.setItem("password", pass)
            navigate("/")
        }
        else{
            alert("provide some data")
        }
       
    }
    return (
        <>
     <label htmlFor="">Email</label>     <input type="email" onChange={(e)=>setEmail(e.target.value)} /> <br />
     <label htmlFor="">Password</label>     <input type="password" onChange={(e)=>setPass(e.target.value)} />
     <button type='submit' onClick={handleLogin}>Login</button>

        </>
    )
}

export default Login