import HeaderSection from "../../components/Header/HeaderSection";
import HologramTent1 from "../../images/WhatsApp Image 2024-06-08 at 12.14.46.jpeg";
import HologramTent2 from "../../images/3D Architecture Render of Hologram Tent (5).jpeg";
import HologramTent3 from "../../images/3D Architecture Render of Hologram Tent (4).jpeg";
import HologramTent4 from "../../images/3D Architecture Render of Hologram Tent (6).jpeg";
import HologramTent5 from "../../images/3D Architecture render of Hologram tent.jpeg";
import FrequentQuestions from "../../components/FrequentQuestions/FrequentQuestions";

export default function Services() {
  return (
    <>
      <HeaderSection title="Services" />
      <section className="mt-10 px-[32px] font-Inter md:px-[50px] xl:px-[110px]">
        <div className="flex items-center">
          <h2 className="font-BankGothic text-[20px] whitespace-nowrap mr-4">
            What We Offer
          </h2>
          <hr className="flex-grow h-[1px] bg-gray-100 border-0 rounded" />
        </div>

        {/* Hologram Section */}
        <div className="mt-5 text-center flex flex-col justify-center items-center gap-5">
          <h2 className="font-BankGothic text-[18px] md:text-[24px]">
            Hologram Tents
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#CFCFCF]">
            Our hologram tents deliver an unparalleled experience, transporting
            you to fantastical realms. Each Pavilion provides a complete
            blackout environment, ensuring full immersion in our hologram films.
          </p>
          <img
            src={HologramTent1}
            className="w-full object-cover md:h-[376px] xl:w-[950px] xl:h-[530px]"
          />
          <p className="text-[16px] md:text-[18px] text-[#CFCFCF]">
            Crafted with original stories tailored exclusively for our hologram
            tents, illusio offers a unique and captivating adventure every time.
            Dive into a{" "}
            <span className="font-semibold text-white">
              {" "}
              world of storytelling
            </span>{" "}
            like never before with illusio’s Hologram Tents.
          </p>
        </div>
        {/* Hologram 2nd Section */}
        <div className="mt-5 text-center flex flex-col justify-center items-center gap-5">
          <div className="mt-5 text-center flex flex-col justify-center items-center gap-[62px] xl:flex-row-reverse">
            <img
              src={HologramTent2}
              className="w-[311px] md:w-[673px] xl:w-[607px] object-cover"
            />
            <p className="xl:w-[607px] text-[#CFCFCF]">
              We offer the{" "}
              <span className="font-semibold text-white">
                {" "}
                Highest quality holographic imagery
              </span>{" "}
              with a variety of sizes and a vast{" "}
              <span className="font-semibold text-white">
                {" "}
                Library of animations
              </span>{" "}
              . A Premium experience for our deserving customers.
            </p>
          </div>
          <div className="mt-5 text-center flex flex-col justify-center items-center gap-[62px] xl:flex-row">
            <img
              src={HologramTent3}
              className="w-[311px] md:w-[673px] xl:w-[607px]"
            />
            <p className="xl:w-[607px] text-[#CFCFCF]">
              Our hologram Stands are created using plexiglass sheets that are
              delivered by our third party providers and shaped to the precise
              measurements using{" "}
              <span className="font-semibold text-white">
                {" "}
                leading edge laser cutting machine & computer modelling software
              </span>{" "}
              .
            </p>
          </div>
        </div>

        {/* Featured Galleries */}
        <div className="mt-10 text-center">
          <p className="font-BankGothic text-[18px] md:text-[24px]">
            Featued Galleries
          </p>
          <div className="mt-10 flex justify-center items-center flex-col gap-[50px] lg:flex-row">
            <img
              src={HologramTent4}
              className="lg:w-[full] lg:min-w-[400px] lg:max-w-[540px]"
            />
            <img
              src={HologramTent5}
              className="lg:w-[full] lg:min-w-[400px] lg:max-w-[540px]"
            />
          </div>
        </div>

        {/* Frequent Questions */}
        <FrequentQuestions />
      </section>
    </>
  );
}
