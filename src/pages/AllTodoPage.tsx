import TodoList from "../components/TodoList";
import { useAppSelector } from "../hook";

const AllTodoPage = () => {
    const todos = useAppSelector((state) => state.todos.list);
    return <TodoList todos={todos} />;
};
export default AllTodoPage;
