import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AllTodoPage from "./pages/AllTodoPage";
import RemovedTodoPage from "./pages/RemovedTodoPage";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
            <Routes>
                <Route path="*" />
                <Route
                    path="/"
                    element={
                        <Layout>
                            <AllTodoPage />
                        </Layout>
                    }
                />

                <Route
                    path="/removedtodos"
                    element={
                        <Layout>
                            <RemovedTodoPage />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
        </div>
        
    );
}

export default App;
