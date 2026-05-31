import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateNewsPage from "./pages/CreateNewsPage";
import EditNewsPage from "./pages/EditNewsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateNewsPage />} />
            <Route path="/edit/:id" element={<EditNewsPage />} />
        </Routes>
    );
}

export default App;