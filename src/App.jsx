import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>Contacts App</h2>
        <Link to="/">Home</Link>
        <Link to="/create">Add New Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;