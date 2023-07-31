import React from 'react'
import { routeConfig } from '../../config/routes';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../components/loader/Loader"
import { userLogin } from '../../store/actions/userAction';
import Error from '../../components/error/Error';

import "./Login.scss"

const Login = () => {
  const { success, error, loading } = useSelector(state => state.user)
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  React.useEffect(()=>{
    if(success){
      navigate(routeConfig.home)
    }
  },[success])

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin({
      username : username,
      password : password
    }));
  }

  return (
    <div className='login'>
      {error && <Error message={error}/>}
      <form onSubmit={handleSubmit}>
        <div className='login--text'>
          <h1>Sign in to your account</h1>
          <div className='login--info'>
            <h4>Don't have an account?</h4>
            <Link to={routeConfig.register}>Join here</Link>
          </div>
        </div>
        <label>Email or username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>{
          loading ? <Loader/> : "Login"
        }</button>
      </form>
    </div>
  )
}

export default Login