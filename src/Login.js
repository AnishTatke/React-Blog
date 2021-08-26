import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginUser = {email, password}
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(loginUser))
        setIsPending(true)
        
        setIsPending(true)
        fetch('http://localhost:5000/api/v1/auth', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(loginUser)
        }).then(res => {
            if(!res.ok){
                throw Error("Response not valid")
            }
            return res.json()
        }).then(data => {
            localStorage.setItem("token", data.data.token)
            setIsPending(false)
            history.push('/')
        })
    }

    return (
        <div className='create'>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type='password' required value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                {!isPending && <button>Login</button>}
            </form>
        </div>
    )
}

export default Login


/*
 

*/
