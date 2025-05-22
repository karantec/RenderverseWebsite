import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/AboutUs/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
