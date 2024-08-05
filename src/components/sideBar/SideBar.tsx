import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import styles from './SideBar.module.css'
import { RiDashboardFill } from "react-icons/ri";

const SideBar = ({ loginStatus }) => {
  const navigate = useNavigate()
  const noImage = 'https://th.bing.com/th/id/OIP.sSXq5Etsa1tt-2yEWN-mDgHaHa?rs=1&pid=ImgDetMain'
  const profileImage = "https://th.bing.com/th/id/OIP.EaWIte8CmWqf0EYM2TcohAHaHW?w=1000&h=992&rs=1&pid=ImgDetMain"
 
  return (
    <div className={styles.sideBar_container}>

      <div className={styles.img_div}>
        <img src= {loginStatus?noImage:profileImage}
          alt="img" onClick={()=>loginStatus?navigate('/login'):navigate('/profile')} />
      </div>

      <div className={styles.dashBoard_info}>
        <div className={styles.name}>{!loginStatus?'Sundar Garg':'Mr. Unknown'}</div>
        <span className={styles.gmail}>{!loginStatus?'sundarGarge@gmail.com':"Your Email"}</span>
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
        <div><Button text={"Vital Task"} handleClick={() => {loginStatus?navigate('/login'):navigate('/profile')}} /></div>
        <div><Button text={"My Task"} handleClick={() => {loginStatus?navigate('/login'):navigate('/profile')}} /></div>
        <div><Button text={"Task Categories"} handleClick={() => {loginStatus?navigate('/login'):navigate('/profile')}} /></div>
        <div><Button text={"Settings"} handleClick={() => {loginStatus?navigate('/login'):navigate('/profile')}} /></div>
        <div><Button text={"Help"} handleClick={() => {loginStatus?navigate('/login'):navigate('/profile')}} /></div>
      </div>

      <div className={styles.logout}>
        logout
      </div>

    </div>
  )
}

export default SideBar
