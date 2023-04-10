import React from 'react'
import "./Login.scss"
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await newRequest.post('/auth/login', { username, password });
      localStorage.setItem("currentUser",JSON.stringify(res.data));
      navigate('/')
    }catch(error){
      setError(error.response.data)
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  )
}

export default Login