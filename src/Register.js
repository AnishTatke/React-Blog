import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [picture, setPicture] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const formHandler = (e) => {
        e.preventDefault()
        const user = { name, email, password, phoneNumber, picture}
        console.log(JSON.stringify(user))

        setIsPending(true)
        fetch('http://localhost:5000/api/v1/user', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => {
            if(!res.ok){
                throw Error("Response not Valid")
            }
            return res.json()
        }).then(data => {
            console.log(data.message)
            setIsPending(false)
            history.push('/login')
        })
    }
    return (
        <div className='create'>
            <h2>Register a user</h2>
            <form onSubmit={formHandler}>
                <label>Name</label>
                <input type='text' required value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Email</label>
                <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label>Mobile Number</label>
                <input type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                <label>Upload a Profile Picture</label>
                <input type='file' value={picture} onChange={(e) => setPicture(e.target.value)}></input>
                {!isPending && <button>Submit</button>}
            </form>
        </div>
    )
}

export default Register
