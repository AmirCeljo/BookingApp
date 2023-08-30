import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function Register() {
  // const role = 'user'
  const navigate = useNavigate()
  const [ registerUser, setRegisterUser] = useState({
    username: '',
    email:'',
    password: '',
    
  })
  const {username,email,password} = registerUser;

  const onChange = (e) => {
    setRegisterUser((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!username || !email || !password) {
      toast.error('Molimo popunite sva polja')
    }
    await axios.post('https://localhost:3000/register', registerUser)
    
      toast('Uspješno ste se registrovali')
      navigate('/login')
    
    
  }


  return (
    <div className='login-container secondary-color'>
      <div className='div'>
    <h1>Sign Up</h1>
    <small>Become our user, it costs absolutely nothing.</small>
    <p><br/>Create an account</p>

    <form className='login-register-form' onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" className='form-control' name="username" value={username}
        onChange={onChange}
        placeholder="Enter your username"
        />
      </div>
      <div className="form-group">
        <input type="email" className='form-control' name="email" value={email}
        onChange={onChange}
        placeholder="Enter e-mail"/>
      </div>
      <div className="form-group">
                <input type="password" className='form-control'name="password" value={password}
                onChange={onChange}
                placeholder="Enter password"/>
      </div>
      <div className="checkbox">
        
                <input type="checkbox" className=''name="checkbox"/>
                <label htmlFor=""> <small>I agree with privacy and policy</small></label>
      </div>
      
      
        <button type='submit' className='btn-block'>Sign Up</button>
      
    </form>
    </div>
  </div>
  )
}

export default Register
