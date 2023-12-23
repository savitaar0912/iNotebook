import React from 'react'

export default function UserForm() {
  return (
    <>
      <div className='container  bg-success-subtle'>
      <form>
        <div className="form-group my-3">
          <h1 style={{textAlign : "center"}}>UserForm</h1>
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
      <br />
    </div>
    </>
  )
}
