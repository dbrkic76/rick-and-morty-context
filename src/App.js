import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
const App = () => {
  return (
    <Routes>
      <Route path="/characters" element={<HomePage />} />
      <Route path="/character/:id" element={<SinglePage />} />
      <Route path="*" element={<Navigate to={"/characters"} />} />
    </Routes>
  );
};

export default App;
