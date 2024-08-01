import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homepage/HomePage'
import Header from '../components/header/Header'
import Profile from '../pages/homepage/profilePage/Profile'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className={styles.app_container}>
                <Header />
                <main className={styles.main_content}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/profile' element={<Profile/>} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default Navigation;