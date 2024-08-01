import { useEffect, useRef, useState } from "react"
import Button from "../../components/button/Button"
import SideBar from "../../components/sideBar/SideBar"
import TaskCard from "../../components/taskCard/TaskCard"
import styles from './HomePage.module.css'
import InputForm from "../../components/inputForm/InputForm"
const HomePage = () => {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const registerCardRef = useRef<HTMLDialogElement>(null);
  const handleOpenAddTaskCard = () =>{
    setIsAddCardOpen(!isAddCardOpen)
  }
  useEffect(() =>{
    if(isAddCardOpen){
      registerCardRef.current?.showModal()
    }
    else{
      registerCardRef.current?.close()
    }
  },[isAddCardOpen])
  return (
    <div className={styles.homepage_container}>
      <SideBar />
      <div className={styles.task_area}>
        <div className={styles.add_task_area}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "31vw", alignItems: "center" }}>
            To-Do
            <button onClick={handleOpenAddTaskCard}>Add Task</button>
          </div>
          <TaskCard />
        </div>

        <div className={styles.add_task_area}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "31vw", alignItems: "center" }}>
            Completed Task
          </div>
          <TaskCard />
        </div>
      </div>
      {isAddCardOpen &&
        <dialog ref = {registerCardRef}>
          <InputForm text = {"Done"} closeCard = {handleOpenAddTaskCard}/>
        </dialog>}
    </div>
  )
}

export default HomePage
