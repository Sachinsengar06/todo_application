import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/homepage/HomePage'
import Header from '../components/header/Header'
import styles from './Navigation.module.css'
import Login from '../pages/login_signup/Login'
import SignUp from '../pages/login_signup/SignUp'
import UserProfile from '../pages/profile/UserProfile'
import PrivateRoutes from './PrivateRoutes'

const NavigationContent = () => {
 
  const location = useLocation();

  const mainContentStyle = location.pathname === '/login'
    ? styles.main_content_no_margin
    : styles.main_content;

  return (
    <div className={styles.app_container}>
      {location.pathname !== '/login' && (
        <Header />
      )}
      <main className={mainContentStyle}>
        <Routes>
          <Route element={<PrivateRoutes/>}>
          <Route path='/profile' element={<UserProfile />} />
          </Route>
          <Route path='/login' element={<Login  />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </main>
    </div>
  );
};

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavigationContent />
    </BrowserRouter>
  );
};

export default Navigation;