import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciceDetail from "./pages/ExerciceDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exerices/:id" element={<ExerciceDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
