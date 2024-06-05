import Logo from "../../images/illusioLogo.png";
import Instagram from "../../images/1298747_instagram_brand_logo_social media_icon.png";
import X from "../../images/11244080_x_twitter_elon musk_twitter new logo_icon (1).png";
import Facebook from "../../images/5282541_fb_social media_facebook_facebook logo_social network_icon.png";
import Linkedin from "../../images/4747495_linked in_social media_networking_icon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#141619] pt-10 font-Inter">
      <div className="flex justify-center items-center flex-col gap-5 md:gap-[60px] xl:items-start xl:px-[110px]">
        <img src={Logo} className="w-[100px] md:w-[150px]" />
        <div className="flex justify-center items-center flex-col gap-5 md:flex-row md:gap-[50px] xl:flex-col xl:items-start">
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
        <div className="flex justify-center items-center gap-5 pb-10 xl:justify-end">
          <img src={Instagram} className="w-[30px]" />
          <img src={X} className="w-[30px]" />
          <img src={Facebook} className="w-[30px]" />
          <img src={Linkedin} className="w-[35px]" />
        </div>
      </div>
    </div>
  );
}
