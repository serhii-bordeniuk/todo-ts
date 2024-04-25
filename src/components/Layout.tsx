import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import { useAppDispatch } from "../hook";
import { addTodo } from "../store/todoSlice";
import Navigation from "./Navigation";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [text, setText] = useState("");
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div className="layout">
            <NewTodoForm value={text} updateText={setText} handleAction={handleAction} />
            <Navigation />
            <div>{children}</div>
        </div>
    );
};
export default Layout;
