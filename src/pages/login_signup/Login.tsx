import { useState } from 'react';
import styles from './Style.module.css'
import { getUser } from '../../localStorage/authDataStroage';
import { User } from '../../localStorage/authDataStroage';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  toggleLogin: () => void;
}

interface InitialData {
  email: string;
  password: string;
}
const Login = ({ toggleLogin }: LoginProps) => {
  const initialData: InitialData = {
    email: '',
    password: ''
  }
  const [loginData, setLoginData] = useState<InitialData>(initialData);
  const navigate = useNavigate();
  const handleLogin = (e:React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const existingUser = getUser();
      const validUser = existingUser.find((user: User) => user.email === loginData.email && user.password === loginData.password)
      if (validUser) {
        navigate('/');
        toggleLogin();
      }
      else {
        alert("Invalid credentails")
      }
      setLoginData(initialData);
    }
    else{
      alert('Email and password are required')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }))
  }
  const validateForm = () => {
    let isValid = true;
    if (!loginData.email) {
      isValid = false;
    }
    if (!loginData.password) {
      isValid = false;
    }
    return isValid;
  }
  return (
    <div>
      <div className={styles.img_div}>
        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg" alt="backGround Image" />
      </div>
      <form className={styles.form_div}>
        <h1>Welcome! Login here</h1>
        <input name='email' type="email" placeholder='Email' value={loginData.email} onChange={handleChange} />
        <input name='password' type="password" placeholder='Password' value={loginData.password} onChange={handleChange} />
        <p style={{ margin: "0", paddingBottom: '10px', fontSize: '13px', color: "white" }}>new user <u style={{ color: "blue", cursor: 'pointer' }} onClick={() => navigate('/signup')}>Register?</u></p>
        <button onClick={handleLogin}>Login</button>
      </form>

    </div>
  )
}

export default Login;
