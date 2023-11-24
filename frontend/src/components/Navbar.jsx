import React from 'react'
import './navbar.css'
import Logo from '../assets/zeus2.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
   
    
  return (
    <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <Link className='link' to='/'><h4>McBrain International</h4>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className='links'>
                    <div>
                        <Link className='link' to='/?cat=art'><h6>About</h6></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/shop'><h6>Shop</h6></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/form'><h6>Nin/Bvn</h6></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/blog'><h6>Blog</h6></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/?cat=design'><h6>Design</h6></Link>
                    </div>
                    <div className='links'>
                        <Link className='link' to='/contact'><h6>Contact</h6></Link>
                    </div>
                    <div className='links'>
                     
                      <Link className='link' to='/login'><h6>Login</h6></Link>
                    <img className='topImg'
                    src='https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    />
                    {/* <Link className='btn btn-outline-secondary' to="/addpost">AddUser</Link> */}
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar