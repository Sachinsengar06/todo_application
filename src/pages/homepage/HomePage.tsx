import {useRef, useState } from "react"
import SideBar from "../../components/sideBar/SideBar"
import TaskCard from "../../components/taskCard/TaskCard"
import styles from './HomePage.module.css'
import InputForm from "../../components/inputForm/InputForm"
import { useAppDispatch, useTypedSelector } from "../../redux/store"
import { deleteTask } from "../../redux/taskSlice"
import { useNavigate } from "react-router-dom"

const HomePage = ({toggleLogin}:any) => {
 
  const registerCardRef = useRef<HTMLDialogElement>(null);
  const data = useTypedSelector((state) => state.tasks);
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
      <SideBar loginStatus = {toggleLogin} />
      <div className={styles.task_area}>
        <div className={styles.add_task_area}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "31vw", alignItems: "center",color:"white"}}>
            To-Do
            <button className={styles.addtask_btn} onClick={()=>{toggleLogin?navigate('/login'):handleOpenAddTaskCard("open")}}>Add Task</button>
          </div>
          <div className={styles.taskCard}>
          {data.tasks.filter(todo => todo.isComplete).length === 0 && (
              <div className={styles.emptytask_text}>
                <h2>No Task!</h2>
                <h1>Add Your Task</h1>
              </div>
            )}
            {!toggleLogin&&
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
                 
              ))
            }
          </div>
        </div>

        <div className={styles.add_task_area}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "31vw", alignItems: "center",color:"white"}}>
            Completed Task
          </div>
          {!toggleLogin&&
              data.tasks.filter(todo => !todo.isComplete).map((todo) => (
                <TaskCard
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  desc={todo.desc}
                  />
              ))
            }
        </div>
      </div>
    
        <dialog ref={registerCardRef}>
          <InputForm text={currentTask?"Update":"Add"} task={currentTask} closeCard={()=>handleOpenAddTaskCard("close")} />
        </dialog>
    </div>
  )
}
export default HomePage
