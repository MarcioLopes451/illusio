import { useParams, useNavigate } from "react-router-dom";
import HeaderSection from "../../components/Header/HeaderSection";
import { PostData } from "../../data/PostData";
import { CircleArrowLeft } from "lucide-react";
import Instagram from "../../images/1298747_instagram_brand_logo_social media_icon.png";
import X from "../../images/11244080_x_twitter_elon musk_twitter new logo_icon (1).png";
import Facebook from "../../images/5282541_fb_social media_facebook_facebook logo_social network_icon.png";
import Linkedin from "../../images/4747495_linked in_social media_networking_icon.png";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (!id || isNaN(parseInt(id, 10))) {
    return <div>Invalid post ID</div>;
  }

  const postData = PostData.find((post) => post.id === parseInt(id, 10));

  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <HeaderSection title="Blog Post" />
      <section className="mt-10 px-[32px] text-center md:px-[50px]">
        <div className="flex justify-center items-center flex-col gap-10">
          <h2 className="font-BankGothic text-xl">{postData.title}</h2>
          <img
            src={postData.img}
            className="w-full h-[225px] object-cover md:h-[450px]"
          />
        </div>
        <div className="flex justify-between items-center mt-5">
          <CircleArrowLeft onClick={handleBack} />
          <div className="flex flex-col justify-end items-end">
            <p>{postData.date}</p>
            <p>{postData.Author}</p>
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center flex-col gap-5">
          <p>{postData.firstParagraph}</p>
          <p className="bg-white bg-opacity-[12%] rounded-md p-3 italic font-medium text-xl text-left">
            {postData.Quote}
          </p>
          <p>{postData.secondParagraph}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-10 md:flex-row mt-10">
          <h2 className="flex font-medium">
            Tags:
            {postData.Tags.map((tag) => (
              <p className="font-light" key={tag}>
                {tag},
              </p>
            ))}
          </h2>

          <div className="flex justify-center gap-6 items-center">
            <p>Share:</p>
            <div className="flex justify-center items-center gap-5 ">
              <img src={Instagram} className="w-[30px]" />
              <img src={X} className="w-[30px]" />
              <img src={Facebook} className="w-[30px]" />
              <img src={Linkedin} className="w-[35px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
