import HeroVideo from "../../videos/herovideo.mp4";
import hologramImg1 from "../../images/Blue Jellyfish.jpg";
import hologramImg2 from "../../images/Hummingbird (Green).jpg";
import FinalVideo from "../../videos/finalvideo.mp4";

export default function HomePage() {
  return (
    <section>
      {/* Hero Section */}

      <div className="w-full flex justify-center items-start text-center relative overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[353px]">
          <video
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center md:block md:top-[100px]">
          <h2
            className="font-BankGothic text-center text-2xl px-[86px] 
          md:text-left md:px-[50px] md:text-[34px] md:w-[300px] tracking-wider"
          >
            Unveiling Tomorrow, Today.
          </h2>
        </div>
      </div>

      {/* Intro Section */}

      <div className="bg-[#141619] pt-[22px] px-[32px] pb-[100px] md:px-[50px]">
        <div className="flex justify-between items-center">
          <h2 className="font-BankGothic text-xl">ILLUSIO</h2>
          <hr className="w-[186px] h-[1px] bg-gray-100 border-0 rounded md:w-[530px]" />
        </div>
        <div className="text-center mt-[40px] font-Inter flex justify-center items-center flex-col">
          <h3 className="font-semibold text-xl tracking-wide md:text-[22px]">
            A Glimpse into the Future
          </h3>
          <p className="font-light mt-[31px] md:text-[18px]">
            Introducing illusio, the cutting-edge AI companion that redefines
            your reality. Step into a world of wonder where illusion meets
            innovation. illusio is more than just a device; it's a gateway to a
            new dimension of interaction. <br /> <br />
            From personal assistance to immersive entertainment, illusio brings
            your wildest dreams to life with its advanced holographic
            capabilities. Embrace the future of technology and let illusio
            transform the way you experience the world.
          </p>
          <div className="flex justify-center items-center flex-col gap-14 mt-[47px] md:flex-row">
            <img
              src={hologramImg1}
              alt="img1"
              className="w-[311px] h-[361px] object-cover md:w-[289px]"
            />
            <img
              src={hologramImg2}
              alt="img1"
              className="w-[311px] h-[361px] object-cover md:w-[289px]"
            />
          </div>
        </div>
      </div>

      {/* Final Section */}

      <div className="w-full flex justify-center items-start text-center relative overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[353px] ">
          <video
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src={FinalVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h2
            className="font-BankGothic text-center text-2xl px-[86px] text-[#AEAEAE] 
           md:text-[34px] tracking-wider"
          >
            a glimpse into the future
          </h2>
        </div>
      </div>
    </section>
  );
}