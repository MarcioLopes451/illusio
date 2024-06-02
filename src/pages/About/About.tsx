import Concept from "../../components/Concept/Concept";
import HeaderSection from "../../components/HeaderSection";
import OurHistory from "../../components/OurHistory/OurHistory";
import CEOImg from "../../images/WhatsApp Image 2024-05-22 at 15.35.52.jpeg";
import CEOImg2 from "../../images/WhatsApp Image 2024-05-24 at 11.46.05.jpeg";

export default function About() {
  return (
    <>
      <HeaderSection title="About Us" />
      <OurHistory />
      <div className="mt-5 px-[32px] font-Inter">
        {/* CEO Section */}

        <div className="flex justify-between items-center">
          <hr className="w-[47px] h-[1px] bg-gray-100 border-0 rounded" />
          <h2 className="font-BankGothic text-[20px]">Presenting Our Team</h2>
        </div>
        <div className="mt-5 flex justify-center items-center flex-col">
          <div className="mt-5 flex justify-center items-center flex-col gap-5">
            <img
              src={CEOImg}
              className="object-cover w-[311px] h-[361px] rounded-lg"
            />
            <h3 className="text-[20px]">Henrique Fernandes</h3>
            <h3 className="text-[16px] opacity-60 font-light">CEO & Founder</h3>
          </div>
          <div className="mt-5 flex justify-center items-center flex-col gap-5 text-center">
            <h3>Our CEO's backstory</h3>
            <p>
              Henrique has been in the engineering field for nearly a decade.
              With both academic research and real-world engineering experience
              in his repertoire. He was born in Brazil but has traveled to
              multiple countries throughout his life. He enjoys the art of
              filmmaking in his spare time. Henrique currently resides in London
              where he is implementing his passion for filmmaking and
              engineering to illusio’s Hologram experiences.
            </p>
            <img src={CEOImg2} className="object-cover w-[313px] h-[199px]" />
          </div>
        </div>
      </div>

      {/* Concept Section */}

      <div className="mt-5">
        <div className="flex justify-between items-center px-[32px]">
          <h2 className="font-BankGothic text-[20px]">Concept Event</h2>
          <hr className="w-[118px] h-[1px] bg-gray-100 border-0 rounded" />
        </div>
        <Concept />
      </div>
    </>
  );
}
