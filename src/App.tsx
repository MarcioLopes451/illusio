import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
function App() {
  return (
    <>
      <div className="text-white bg-[#141619]">
        <Navbar />
        <Routes>
          <Route path="/illusio/" element={<HomePage />} />
          <Route path="/illusio/aboutus" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
