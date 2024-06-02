import Logo from "../../images/illusioLogo.png";
import Instagram from "../../images/1298747_instagram_brand_logo_social media_icon.png";
import X from "../../images/11244080_x_twitter_elon musk_twitter new logo_icon (1).png";
import Facebook from "../../images/5282541_fb_social media_facebook_facebook logo_social network_icon.png";
import Linkedin from "../../images/4747495_linked in_social media_networking_icon.png";

export default function Footer() {
  return (
    <div className="bg-[#141619] pt-10 font-Inter">
      <div className="flex justify-center items-center flex-col gap-5">
        <img src={Logo} className="w-[100px]" />
        <div className="flex justify-center items-center flex-col gap-5">
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex justify-center items-center gap-5 pb-10">
          <img src={Instagram} className="w-[30px]" />
          <img src={X} className="w-[30px]" />
          <img src={Facebook} className="w-[30px]" />
          <img src={Linkedin} className="w-[35px]" />
        </div>
      </div>
    </div>
  );
}
