// Components
import { Navbar } from "./components/navbar";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Menu } from "./Pages/Menu";

// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style
import "./App.css";

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>Error page</p>} />
        </Routes>
      </Router>
    </>
  );
};
