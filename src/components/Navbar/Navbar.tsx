import Logo from "../../images/illusioLogo.png";
import MobileMenu from "../../images/mobile-menu.png";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-[100px] bg-black fixed z-10">
      <div className="flex justify-between items-center px-8 pt-6 md:px-[50px]">
        <Link to="/illusio/">
          <img src={Logo} alt="logo" className="w-[100px] bg-cover" />
        </Link>
        <img
          src={MobileMenu}
          alt="logo"
          className="w-[52px]"
          onClick={handleClick}
        />
      </div>
      <MobileNav isOpen={open} onClose={handleClick} />
    </div>
  );
}
