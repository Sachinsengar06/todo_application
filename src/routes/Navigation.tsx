import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homepage/HomePage'
import Header from '../components/header/Header'
import styles from './Navigation.module.css'
import Login from '../pages/login_signup/Login'
import SignUp from '../pages/login_signup/SignUp'
import UserProfile from '../pages/profile/UserProfile'
import { useState } from 'react'


const Navigation = () => {
    const [toggleLogin, setToggleLogin] = useState<boolean>(true)
    const toggleLoginBtn = () => {
        setToggleLogin(!toggleLogin);
    }
    return (
        <BrowserRouter>
            <div className={styles.app_container}>
                <Header toggleLogin = {toggleLogin} toggleLoginBtn = {toggleLoginBtn}/>
                <main className={styles.main_content}>
                    <Routes>
                        <Route path='/' element={<HomePage toggleLogin ={toggleLogin} />} />
                        <Route path='/profile' element={<UserProfile/>} />
                        <Route path='/login' element={<Login toggleLogin={toggleLoginBtn}/>}/>
                        <Route path = '/signup' element={<SignUp />}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default Navigation;