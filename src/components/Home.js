import React from 'react'
import Notes from './Notes'

export default function Home() {
  return (
    <>
    <div className='container'>
      <form>
        <div className="form-group my-3">
          <h1 style={{textAlign : "center"}}>Notes page</h1>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br />
    </div>
    <Notes/>
    </>
  )
}
