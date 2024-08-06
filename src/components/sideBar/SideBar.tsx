import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import styles from './SideBar.module.css'
import { RiDashboardFill } from "react-icons/ri";
import { useTypedSelector } from '../../redux/store';

const SideBar = () => {
  const navigate = useNavigate();
  const noImage = 'https://th.bing.com/th/id/OIP.sSXq5Etsa1tt-2yEWN-mDgHaHa?rs=1&pid=ImgDetMain'
  const profileImage = "https://th.bing.com/th/id/OIP.EaWIte8CmWqf0EYM2TcohAHaHW?w=1000&h=992&rs=1&pid=ImgDetMain"
  const userData = useTypedSelector((state) => state.user)
  return (
    <div className={styles.sideBar_container}>

      <div className={styles.img_div}>
        <img src= {userData.isLogin?profileImage:noImage}
          alt="img" onClick={()=>userData.isLogin?navigate('/profile'):navigate('/login')} />
      </div>

      <div className={styles.dashBoard_info}>
        <div className={styles.name}>{userData.isLogin?`${userData.name}`:'Mr. Unknown'}</div>
        <span className={styles.gmail}>{userData.isLogin?`${userData.email}`:"Your Email"}</span>
      </div>

      <div className={styles.dashBoard}>
        <div className={styles.dashBoard_icon}>
          <RiDashboardFill color='white' fontSize={25} />
        </div>
        <div className={styles.dashBoard_text}>
          DashBoard
        </div>
      </div>

      <div className={styles.dashBoard_btns}>
        <div><Button text={"Vital Task"} handleClick={() => {userData.isLogin?navigate('/profile'):navigate('/login')}} /></div>
        <div><Button text={"My Task"} handleClick={() => {userData.isLogin?navigate('/profile'):navigate('/login')}} /></div>
        <div><Button text={"Task Categories"} handleClick={() => {userData.isLogin?navigate('/profile'):navigate('/login')}} /></div>
        <div><Button text={"Settings"} handleClick={() => {userData.isLogin?navigate('/profile'):navigate('/login')}} /></div>
        <div><Button text={"Help"} handleClick={() => {userData.isLogin?navigate('/profile'):navigate('/login')}} /></div>
      </div>

      <div className={styles.logout}>
        logout
      </div>

    </div>
  )
}

export default SideBar
