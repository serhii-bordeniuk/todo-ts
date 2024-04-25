import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

type TodosState = {
    list: Todo[];
    deletedTodos: Todo[];
};

const initialState: TodosState = {
    list: [],
    deletedTodos: [],
};

const todoSlice = createSlice({
    name: "todos", 
    initialState: initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggleTodo = state.list.find((todo) => todo.id === action.payload);
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            const todoToDelete = state.list.find((todo) => todo.id === action.payload);
            if (todoToDelete) {
                state.list = state.list.filter((todo) => todo.id !== todoToDelete.id);
                state.deletedTodos.push(todoToDelete);
            }
        },
    },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
