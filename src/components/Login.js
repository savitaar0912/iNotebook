import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const hostname = "http://localhost:5000"
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    const { email, password } = user
    // console.log(email,password)

    e.preventDefault()

    // API call
    const response = await fetch((`${hostname}/api/auth/login`), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    // console.log(response)
    const json = await response.json()
    console.log(json)
    
    if (json.error) {
      alert(`Error: ${json.error}`);
    } else {
      localStorage.setItem('token' , json.token)
      alert(`Welcome ${json.user.name}`)
      navigate('/notes')
    }
  }

  return (
    <>
      <div className='container  bg-success-subtle'>
        <form onSubmit={handleSubmit} >
          <div className="form-group my-3">
            <h1 style={{ textAlign: "center" }}>Log In</h1>
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={user.email} aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} value={user.password} placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-success">Log In</button>
        </form>
        <br />
      </div>
    </>
  )
}
