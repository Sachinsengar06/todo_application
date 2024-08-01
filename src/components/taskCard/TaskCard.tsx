import styles from './TaskCard.module.css'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskCard = () => {
  return (
    <div className={styles.card_container}>
      <div className = {styles.title_and_icon}>
        <h3>Hey This is my Task </h3>
        <div>
        <FaEdit />
        <MdDelete />
        </div>
      </div>
      <div>text</div>

    </div>
  )
}

export default TaskCard
