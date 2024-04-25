import { useNavigate } from "react-router-dom";
const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className="navigation">
            <div>
                <button className="btn" onClick={() => navigate("/")}>
                    All Todos
                </button>
            </div>
            <div>
                <button className="btn" onClick={() => navigate("/removedtodos")}>
                    Removed Todos
                </button>
            </div>
        </div>
    );
};
export default Navigation;
