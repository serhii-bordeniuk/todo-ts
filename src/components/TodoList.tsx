import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
    todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul className="todoList">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};
export default TodoList;
