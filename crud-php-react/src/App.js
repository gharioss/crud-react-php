import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Insert from "./components/Insert";
import Edit from "./components/Edit";
import View from "./components/View";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <h2>Welcome to React CRUD Tutorial</h2>

        <Routes>
          <Route path="/insert" element={<Insert />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
      <br />
    </BrowserRouter>
  );
}

export default App;
