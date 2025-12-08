import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Registro from "./components/registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
