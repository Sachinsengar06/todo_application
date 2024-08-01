import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Task {
    id: string;
    title: string;
    desc: string;
}

interface TasksState {
    tasks: Task[];
}

const initialState:TasksState = {
    tasks: []
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action:PayloadAction<Task>) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks =  state.tasks.filter((task:Task) => task.id! === action.payload)
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task:Task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
    }
});
export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;