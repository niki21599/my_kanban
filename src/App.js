import Header from "./components/Header";
import Summary from "./pages/Summary";
import Contacts from "./pages/Contacts";
import Board from "./pages/Board";
import AddTask from "./pages/AddTask";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/board" element={<Board />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
