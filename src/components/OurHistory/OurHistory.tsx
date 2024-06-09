import Img1 from "../../images/WhatsApp Image 2024-05-24 at 11.44.15.jpeg";
import Img2 from "../../images/WhatsApp Image 2024-05-24 at 11.46.05 (4).jpeg";
import Img3 from "../../images/WhatsApp Image 2024-06-08 at 12.15.34.jpeg";
import ImgSlider from "./ImgSlider";

const HistoryList = [Img1, Img2, Img3];

export default function OurHistory() {
  return (
    <section className="mt-10 px-[32px] md:px-[50px] xl:px-[110px]">
      <div className="flex items-center">
        <h2 className="font-BankGothic text-[20px] whitespace-nowrap mr-4">
          Our History
        </h2>
        <hr className="flex-grow h-[1px] bg-gray-100 border-0 rounded" />
      </div>
      <div className="mt-10 flex justify-center items-center flex-col text-center">
        <p className="text-[16px] font-light font-Inter md:text-[18px] text-[#CFCFCF]">
          illusio starts like any other company, with one vision. A vision that,
          at heart, combines art and technology into a transcendental
          experience. When John Henry Pepper created the Pepper’s ghost illusion
          in theatre performances he was setting the stage for a new visual
          medium. With modern technology that visual medium can now become a new
          <span className="font-semibold text-white">
            {" "}
            showcase for storytelling.
          </span>
        </p>
      </div>
      <div className="">
        <ImgSlider slides={HistoryList} />
      </div>
    </section>
  );
}
