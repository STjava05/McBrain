import React,{useState} from 'react'
import '../pages/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Lottie from 'lottie-react';
import animationRegister from '../aminations/animation_lna0jg1c.json'


const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputs),
      });
      navigate('/login');
      const result = await response.json();
      console.log(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className='auth'>
      <Lottie animationData={animationRegister} className='animation'style={{width:"300px"}} />
      <h1>Register</h1>
      <form className='form'>
        <input required className='input' type='text' placeholder='Username' name='username' onChange={handleChange} />
        <input required type='email' placeholder='Email' name='email' onChange={handleChange} />
        <input required type='password' placeholder='Password' name='password' onChange={handleChange} />

        <button className='button' onClick={handleSubmit}>Register</button>
        {error && <p className='error'>{error}</p>}
        <span className='span'>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </Container>
  );
};

export default Register;
