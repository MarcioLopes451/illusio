import Logo from "../../images/illusioLogo.png";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  const [state, setState] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBackgroundColor = () => {
    const { pathname } = location;
    const isTransparent = width > 768 && !isTop;

    if (pathname === "/illusio/") {
      return width <= 768 ? "black" : isTransparent ? "black" : "transparent";
    } else {
      return "black";
    }
  };

  const handleClick = () => {
    setState(!state);
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-full h-[101px] bg-black z-50 fixed top-0 transition-colors lg:bg-none"
      style={{
        backgroundColor: getBackgroundColor(),
        backdropFilter:
          getBackgroundColor() === "transparent" ? "none" : "blur(10px)",
        WebkitBackdropFilter:
          getBackgroundColor() === "transparent" ? "none" : "blur(10px)",
      }}
    >
      <div className="flex justify-between items-center px-8 pt-6 md:px-[50px]">
        <img src={Logo} className="w-[100px] bg-cover" />
        <div className="hidden lg:flex flex-row gap-9 text-white text-[16px] px-6 font-medium tracking-widest text-center">
          <Link to="/illusio/" onClick={scrollUp}>
            Home
          </Link>
          <Link to="/illusio/aboutus" onClick={scrollUp}>
            About Us
          </Link>
          <Link to="/illusio/services" onClick={scrollUp}>
            Services
          </Link>
          <Link to="/illusio/blog" onClick={scrollUp}>
            Blog
          </Link>
          <Link to="/illusio/contact" onClick={scrollUp}>
            Contact
          </Link>
        </div>
        <div className={`mobile-nav ${state ? "open" : ""} lg:hidden`}>
          <div className="menu-icon" onClick={handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <MobileNav isOpen={state} onClose={handleClick} />
    </div>
  );
}
