import { useEffect, useRef, useState } from 'react';
import styles from './InputForm.module.css'
import { useAppDispatch } from '../../redux/store';
import { addTask, updateTask } from '../../redux/taskSlice';

interface InputProps {
    text: string;
    closeCard: (arg: string) => void;
    task: any;
}

interface InitialState {
    id: number;
    title: string;
    desc: string;
    isComplete: boolean;
    date:string;
}

const initialState: InitialState = {
    id: 0,
    title: '',
    desc: '',
    isComplete: true,
    date:new Date().toISOString().split('T')[0]
}

const InputForm = ({ text, closeCard, task }: InputProps) => {
    const idRef = useRef(0);
    const [data, setData] = useState<InitialState>(initialState);
    const dispatch = useAppDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const validateForm = () => {
        let isValid = true;
        if (!data.title) {
            isValid = false
        }
        if (!data.desc) {
            isValid = false;
        }
        return isValid;
    }

    useEffect(() => {
        if (task) {
            setData({ ...data, id: task.id, title: task.title, desc: task.desc, isComplete: true }); // set the form data with the task to be edited
        } else {
            setData(initialState); // reset the form
        }
    }, [task]);

    const handleCloseCard = () => {
        if (validateForm()) {
            if (task) {
                dispatch(updateTask(data)); // update the task
            } else {
                const newId = idRef.current;
                idRef.current++; // Increment for next use

                const newTask = { ...data, id: newId };
                dispatch(addTask(newTask)); // add a new task
            }

            setData(initialState); // Reset the form
            closeCard("close");
        }
        else {
            alert('Title and description can not be empty');
        }

    }

    return (
        <div className={styles.input_container}>
            <h1 style={{ color: "white" }}>Add Task Details</h1>
            <div className={styles.cross_btn} onClick={() => closeCard("close")}>
                x
            </div>
            <input
                value={data.title}
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleChange}

            />
            <textarea
                name="desc"
                placeholder="description"
                onChange={handleChange}
                value={data.desc}

            />
            <label style={{color:'white'}}>
                <input type="date" name="date" value={data.date} min={new Date().toISOString().split('T')[0]}  onChange={handleChange}/>
            </label>
            <button className={styles.btn} onClick={handleCloseCard}>{text}</button>
        </div>
    )
}

export default InputForm;