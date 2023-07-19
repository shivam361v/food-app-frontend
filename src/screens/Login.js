import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() 
{
  const [credentials, setCredentials] = useState({ email: "", password: ""})

  //const bcrypt = require('bcrypt');

  let navigate  = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({email: credentials.email, password: credentials.password}))
    const response = await fetch("https://foodapp-api-u4lc.onrender.com/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password})
    });
    
    const json = await response.json()
    console.log(json);

    if(!json.success)
    {
      alert("Invalid");
    }

    if(json.success)
    {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
<>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}/>
          </div>
          
          <button type="submit" className="m-3 btn btn-success">Submit</button>

          <Link to="/signup" className='m-3 btn btn-success'>New User</Link>
        
        </form>
      </div>
    </>
  )
}
