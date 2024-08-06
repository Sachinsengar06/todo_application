import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { useAppDispatch, useTypedSelector } from '../../redux/store';
import { clearUser } from '../../redux/authSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const userData = useTypedSelector((state)=> state.user)
  const handleNavigation = () => {
    if(userData.isLogin){
      dispatch(clearUser());
    }
    else{
      navigate('/login')
    }
  }
  return (
    <div className = {styles.header_container}>
      To-do Application
      <button onClick={handleNavigation}>{userData.isLogin?'LogOut':'Login'}</button>
    </div>
  )
}

export default Header
