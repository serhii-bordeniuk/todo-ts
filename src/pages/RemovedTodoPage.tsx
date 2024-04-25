import TodoList from "../components/TodoList";
import { useAppSelector } from "../hook";

const RemovedTodoPage = () => {
    const removedTodos = useAppSelector((state) => state.todos.deletedTodos);
    return <TodoList todos={removedTodos} />;
};
export default RemovedTodoPage;
