import React,{useState} from 'react'
import './login.css'
import { Container } from 'react-bootstrap'
import { useNavigate,Link } from 'react-router-dom'
import Lottie from 'lottie-react';
import animationLogin from '../aminations/animation_ln9zzjc4.json'

const Login = () => {
 const [inputs, setInputs] = useState({
    username: '',
    password: ''
    })
    const [error, setError] = useState(null)
   const navigate = useNavigate()


    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            })
            navigate('/');
            const result = await res.json();
            console.log(result);
          } catch (err) {
            setError(err.message);
          }
        };
      
   


  return (
    <Container className='auth'>
         <Lottie animationData={animationLogin} className='animation'style={{width:"300px"}} />
        <h1>Login</h1>
        <form className='form'>
            <input required className='input' type="text" placeholder='username'name='username'onChange={handleChange} />
            <input required className='input' type="password" placeholder='password'name='password'onChange={handleChange} />
            <button className='btn btn-outline-warning' type='submit' onClick={handleSubmit}>Login</button>
            {error && <span className='error-message'>{error}</span>}
            <span className='span'>Don't you have an account? <Link to="/register">Register</Link></span>
        </form>

    </Container>
  )
}


export default Login