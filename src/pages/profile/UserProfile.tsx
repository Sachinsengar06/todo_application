import UserWallpaper from '../../assets/img/userWallpaper.jpg'
import styles from './UserProfile.module.css'
const UserProfile = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.img_div}>
        <img src={UserWallpaper} alt="back Imge" />
      </div>
      <div className = {styles.card_container}>
        <div className = {styles.name}>
          <h1>I AM SACHIN</h1>
        </div>
        <div className = {styles.content}>
          <h3>About Me</h3>
          <p>I am web desinger and a enthusiast</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
