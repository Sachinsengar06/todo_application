import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Task {
    id: number;
    title: string;
    desc: string;
    isComplete: boolean;
}

export interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: []
}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task: Task) => task.id !== action.payload)
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task: Task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        toggleTaskCompletion: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) {
                task.isComplete = !task.isComplete;
            }
        },

    }
});
export const { addTask, deleteTask, updateTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;