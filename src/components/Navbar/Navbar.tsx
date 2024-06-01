import Logo from "../../images/illusioLogo.png";
import MobileMenu from "../../images/mobile-menu.png";
export default function Navbar() {
  return (
    <div className="w-full h-[100px] bg-black">
      <div className="flex justify-between items-center px-8 pt-6">
        <img src={Logo} alt="logo" className="w-[100px]" />
        <img src={MobileMenu} alt="logo" className="w-[52px]" />
      </div>
    </div>
  );
}
