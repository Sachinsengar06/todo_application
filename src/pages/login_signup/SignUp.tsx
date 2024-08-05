import { useState } from 'react';
import { getUser, saveUser } from '../../localStorage/authDataStroage'
import styles from './Style.module.css'

interface InitialState {
  email: string;
  name: string;
  password: string;
  cnfrm_pass: string;
}
interface Errors {
  email?: string;
  name?: string;
  password?: string;
  cnfrm_pass?: string;
}

const SignUp = () => {
  const initialState: InitialState = {
    email: '',
    name: '',
    password: '',
    cnfrm_pass: ''
  }
  const [signUpData, setSignUpData] = useState<InitialState>(initialState);
  const [errors, setErrors] = useState<Errors>({})
  const handleRegister = (e) => {
    e.preventDefault()
    if (validateForm() && signUpData.password === signUpData.cnfrm_pass) {
      const Users = getUser();
      const existingUser = Users.find((user: InitialState) => user.email === signUpData.email)
      if (!existingUser) {
        saveUser(signUpData)
      }
      else {
        setErrors(prev => ({ ...prev, email: 'User already exists' }));
      }
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({ ...prev, [name]: value }))
  }
  const validateForm = (): boolean => {
    let newErrors: Errors = {};
    let isValid = true;

    // Email validation
    if (!signUpData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Name validation
    if (!signUpData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Password validation
    if (!signUpData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (signUpData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    // Confirm password validation
    if (!signUpData.cnfrm_pass) {
      newErrors.cnfrm_pass = 'Please confirm your password';
      isValid = false;
    } else if (signUpData.password !== signUpData.cnfrm_pass) {
      newErrors.cnfrm_pass = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  return (
    <div>
      <div className={styles.img_div}>
        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg" alt="backGround Image" />
      </div>
      <form className={styles.form_div}>
        <h1>Welcome! SignUp here</h1>
        <input type="email" placeholder='Email' name='email' autoComplete='false' value={signUpData.email} onChange={handleChange} />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <input type="text" placeholder='Name' name='name' autoComplete='false' value={signUpData.name} onChange={handleChange} />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <input type="password" placeholder='Password' name='password' value={signUpData.password} onChange={handleChange} />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <input type="password" placeholder='Confirm Password' name='cnfrm_pass' value={signUpData.cnfrm_pass} onChange={handleChange} />
        {errors.cnfrm_pass && <p className={styles.error}>{errors.cnfrm_pass}</p>}
        <button onClick={handleRegister}>Register</button>
      </form>

    </div>
  )
}

export default SignUp
