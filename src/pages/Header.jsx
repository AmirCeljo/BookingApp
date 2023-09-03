import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaSearch, FaShoppingCart, FaSignOutAlt,FaUser} from 'react-icons/fa'

function Header() {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogout = () => {
    if(user){
      localStorage.removeItem('user')
      navigate('/login')
    }
    
  }
  return (
    <div className='header'>
      <div className="header-ul">
        <Link to='/'>EstateSelect</Link>
        <div className={`menu-button`} onClick={toggleMenu}>
          <div className={`menu-icon ${isMenuOpen ? 'open':''}`}>
          <span className={`ul-item ${isMenuOpen ? 'top' :''}`}></span>
          <span className={`ul-item ${isMenuOpen ? 'middle': ''}`}></span>
          <span className={`ul-item ${isMenuOpen ? 'bottom':''}`}></span>
          </div>
        </div> 
        <ul className={`div-ul ${isMenuOpen ? 'open' : ''}`}>
          {user ? (
              
                <>
                <li><Link to='/cart'><FaShoppingCart/></Link></li>
                {user.role === 'admin' ? (
                <>
                <li><span>Admin</span></li>
              <li><Link to='/admin'>{user && user.name}<FaUser/></Link></li>
                
                </>): (<>
              <li><Link to='/profile'>{user && user.name}<FaUser/></Link></li>
                </>)}
              <li><button className='btn-secondary' onClick={onLogout}><FaSignOutAlt />Logout</button></li>
              </>    
              ) :
                  
                  (<>
                  <li><Link to=''><FaSearch/></Link></li>
                    <li><Link to='/'><FaShoppingCart/></Link></li>
                  <li><Link to=''>Contact</Link></li>
                  <li><Link to='/login' className='login'>
                        Log In
                    </Link></li>
                    <li><Link to='/register' className='signup'>
                      Sign Up
                    </Link></li>
                  </>)}
                
        </ul>
        
       
    </div>
    
    </div>
  )
}

export default Header
