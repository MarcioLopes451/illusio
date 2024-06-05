import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
function App() {
  return (
    <>
      <div className="text-white bg-[#141619]">
        <div>
          <Navbar />
        </div>
        <div className="">
          <Routes>
            <Route path="/illusio/" element={<HomePage />} />
            <Route path="/illusio/aboutus" element={<About />} />
            <Route path="/illusio/services" element={<Services />} />
            <Route path="/illusio/blog" element={<Blog />} />
            <Route path="/illusio/blog/:id" element={<BlogPost />} />
            <Route path="/illusio/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
