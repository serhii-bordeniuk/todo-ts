interface NewTodoFormProps {
    value: string;
    updateText: (str: string) => void;
    handleAction: () => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ value, updateText, handleAction }) => {
    return (
        <div className="newTodoForm">
            <div className="inputWrapper">
                <input className="formInput"
                    placeholder="New Todo"
                    value={value}
                    onChange={(e) => updateText(e.target.value)}
                />
            </div>
            <div>
                <button className="btn" onClick={handleAction}>Add Todo</button>
            </div>
        </div>
    );
};
export default NewTodoForm;
