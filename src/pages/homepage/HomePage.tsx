import {useRef, useState } from "react"
import SideBar from "../../components/sideBar/SideBar"
import TaskCard from "../../components/taskCard/TaskCard"
import styles from './HomePage.module.css'
import InputForm from "../../components/inputForm/InputForm"
import { useAppDispatch, useTypedSelector } from "../../redux/store"
import { deleteTask } from "../../redux/taskSlice"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
 
  const registerCardRef = useRef<HTMLDialogElement>(null);
  const data = useTypedSelector((state) => state.tasks);
  const userData = useTypedSelector((state) => state.user)
  const [currentTask, setCurrentTask] = useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOpenAddTaskCard = (open:string, task = null) => {
    if(open === 'open'){
      setCurrentTask(task);
      registerCardRef.current?.showModal()
    }
    else{
      setCurrentTask(null);
      registerCardRef.current?.close();
    }
  }

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
  }
  const handleEdit = (data:any) => {
    handleOpenAddTaskCard("open",data);
  }
  return (
    <div className={styles.homepage_container}>
      <SideBar />
      <div className={styles.task_area}>
        <div className={styles.add_task_area}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "31vw", alignItems: "center",color:"white"}}>
            To-Do
            <button className={styles.addtask_btn} onClick={()=>{userData.isLogin?handleOpenAddTaskCard("open"):navigate('/login')}}>Add Task</button>
          </div>
          <div className={styles.taskCard}>
          {data.tasks.filter(todo => todo.isComplete).length === 0 && (
              <div className={styles.emptytask_text}>
                <h2>No Task!</h2>
                <h1>Add Your Task</h1>
              </div>
            )}
            {userData.isLogin&&
              data.tasks .filter(todo => todo.isComplete).map((todo) => (
                <TaskCard
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  desc={todo.desc}
                  deleteTask={handleDelete}
                  editTask = {handleEdit} 
                  isComplete = {todo.isComplete}
                  
                  />
                 
              )).reverse()
            }
          </div>
        </div>

        <div className={styles.add_task_area}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "31vw", alignItems: "center",color:"white"}}>
            Completed Task
          </div>
          {userData.isLogin&&
              data.tasks.filter(todo => !todo.isComplete).map((todo) => (
                <TaskCard
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  desc={todo.desc}
                  date = {todo.date}
                  />
              )).reverse()
            }
        </div>
      </div>
    
        <dialog ref={registerCardRef}>
          <InputForm text={currentTask?"Update":"Add"} task={currentTask} closeCard={()=>handleOpenAddTaskCard("close")} />
        </dialog>
    </div>
  )
}
export default HomePage;
