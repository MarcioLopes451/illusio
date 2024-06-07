import { Link } from "react-router-dom";

type Nav = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: Nav) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    onClose();
  };

  return isOpen ? (
    <div className="fixed top-24 bg-transparent z-[50] font-Roboto w-full">
      <div className="bg-black py-9 h-screen">
        <div className="flex mt-20 flex-col gap-9 text-white text-2xl px-6 font-light tracking-widest text-center">
          <Link to="/" onClick={scrollUp}>
            Home
          </Link>
          <Link to="/aboutus" onClick={scrollUp}>
            About Us
          </Link>
          <Link to="/services" onClick={scrollUp}>
            Services
          </Link>
          <Link to="/blog" onClick={scrollUp}>
            Blog
          </Link>
          <Link to="/contact" onClick={scrollUp}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
