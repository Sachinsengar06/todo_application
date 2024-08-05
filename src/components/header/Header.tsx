import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
interface HeaderProps{
  toggleLoginBtn:()=>void
  toggleLogin:boolean;
}
const Header = ({toggleLogin,toggleLoginBtn}:HeaderProps) => {
  const navigate = useNavigate()
  const handleNavigation = () => {
    if(toggleLogin){
      navigate('/login')
    }
    else{
      toggleLoginBtn()
    }
  }
  return (
    <div className = {styles.header_container}>
      To-do Application
      <button onClick={handleNavigation}>{toggleLogin?'Login':'LogOut'}</button>
    </div>
  )
}

export default Header
