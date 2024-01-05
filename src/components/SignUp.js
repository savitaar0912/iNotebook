import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const hostname = "http://localhost:5000"
    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        const { name, email, password } = newUser

        e.preventDefault()

        // API call
        const response = await fetch((`${hostname}/api/auth/createuser`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })

        const json = await response.json()
        console.log(json)

        if (json.error) {
            alert(`Error: ${json.error}`);
        } else {
            localStorage.setItem('token' , json.token)
            alert("User Created")
            navigate('/')
        }
    }

    return (
        <>
            <div className='container  bg-success-subtle'>
                <form onSubmit={handleSubmit} >
                    <div className="form-group my-3">
                        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={newUser.name} onChange={handleChange} placeholder="Name" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" value={newUser.email} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <br />
            </div>
        </>
    )
}
