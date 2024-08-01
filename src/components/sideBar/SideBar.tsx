import Button from '../button/Button';
import styles from './SideBar.module.css'
import { RiDashboardFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className={styles.sideBar_container}>

      <div className={styles.img_div}>
        <img src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?rs=1&pid=ImgDetMain"
          alt="img" />
      </div>

      <div className={styles.dashBoard_info}>
        <div className = {styles.name}>Sundar Garg</div>
        <span className={styles.gmail}>sundarGarge@gmail.com</span>
      </div>

      <div className={styles.dashBoard}>
        <div className={styles.dashBoard_icon}>
          <RiDashboardFill/>
        </div>
        <div className={styles.dashBoard_text}>
          DashBoard
        </div>
      </div>

      <div className={styles.dashBoard_btns}>
        <Button text = {"Vital Task"}/>
        <Button text = {"My Task"}/>
        <Button text = {"Task Categories"}/>
        <Button text = {"Settings"}/>
        <Button text = {"Help"}/>
      </div>

      <div className={styles.logout}>
        logout
      </div>

    </div>
  )
}

export default SideBar
