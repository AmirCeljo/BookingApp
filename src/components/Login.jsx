import React from 'react'
import { useState } from 'react'
// import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useNavigate,Link} from 'react-router-dom'


import axios from 'axios'
function Login() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const [ loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })
  const {email,password} = loginUser;

  

  const onChange = (e) => {
    setLoginUser((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  const onSubmit = async(e) => {
    e.preventDefault()

    if(!email || !password) {
      toast.error('Molimo popunite sva polja')
    }

    if(!user){
      const result = await axios.post('http://localhost:3001/login', loginUser)
      if(result.data.role === 'admin'){
        toast('Uspješno ste logovani kao admin')
        navigate('/admin')

        if(localStorage.getItem('user') === null){
          localStorage.setItem('user', JSON.stringify(result.data))
        }

      }else{
        if(localStorage.getItem('user') === null){
          localStorage.setItem('user', JSON.stringify(result.data))
        }
        toast('Uspješno ste logovani')
        navigate('/profile')
        
      }
    }
  }


  return (
    <div className='login-container secondary-color'>
      <div className='div'>
      <h1>Sign In</h1>
      <small>Doesn't have an account yet ?     <Link to='/register'>Sign Up</Link></small>

      <form className='login-register-form' onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email" className='form-control' name="email" value={email}
          onChange={onChange}
          placeholder="Unesite Email"/>
        </div>
            
        <div className="form-group">
                  <input type="password" className='form-control'name="password" value={password}
                  onChange={onChange}
                  placeholder="Unesite Password"/>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <label htmlFor=""> <small> Remember me</small></label>
        </div>
        
          <button type='submit' className='btn-block'>Sign in</button>
        
      </form>
      </div>
    </div>
  )
}

export default Login
