import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../store/todoSlice";
import { Todo } from "../types";

interface TodoItemProps extends Todo {}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="todoItem">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleComplete(id))}
            />
            <span>{title}</span>
            <span style={{cursor: "pointer", color: "red"}} onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </div>
    );
};
export default TodoItem;
