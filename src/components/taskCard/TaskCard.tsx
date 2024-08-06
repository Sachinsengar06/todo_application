import styles from './TaskCard.module.css'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useAppDispatch } from '../../redux/store';
import { toggleTaskCompletion } from '../../redux/taskSlice';
interface Data {
  id: number;
  title: string;
  desc: string;
}
interface TaskCardProps {
  id: number;
  title: string;
  desc: string;
  deleteTask?: (id: number) => void;
  editTask?: (data: Data) => void;
  isComplete?: boolean;
  date?:string;
}
const TaskCard = ({ id, title, desc, deleteTask, editTask, isComplete,date }: TaskCardProps) => {
  const dispatch = useAppDispatch();

  const data = { id, title, desc };
  const handleChecked = (id: number) => {
    dispatch(toggleTaskCompletion(id))
  }
  return (
    <div className={styles.card_container}>
      <div className={styles.title_and_icon}>
        <h3>{title}</h3>
        <div>
          {editTask && <FaEdit style={{ color: "white" }} onClick={() => editTask(data)} />}
          {deleteTask && <MdDelete style={{ color: "white" }} onClick={() => deleteTask(id)} />}
        </div>
      </div>
      <div  className={styles.desc}>{desc}</div>
      <div className = {styles.checkbox}>
        {isComplete && <div>
          <label style={{ color: 'white' }}>Completed</label>
          <input type='checkbox' onChange={() => handleChecked(id)} />
        </div>}
        {date&&<div className= {styles.date}>
          <label style={{color:'white'}}>End Date: </label>
          <p style={{ color: 'white'}}>{date}</p>
        </div>}
      </div>
    </div>
  )
}

export default TaskCard
