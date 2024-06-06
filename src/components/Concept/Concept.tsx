import Img1 from "../../images/WhatsApp Image 2024-05-01 at 16.18.30 (9).jpeg";
import Img2 from "../../images/WhatsApp Image 2024-05-01 at 16.18.30 (10).jpeg";
import Img3 from "../../images/WhatsApp Image 2024-05-01 at 16.18.30 (12).jpeg";
import Img4 from "../../images/WhatsApp Image 2024-05-01 at 16.18.30.jpeg";

import ConceptSlider from "./ConceptSlider";

const slides = [Img1, Img2, Img3, Img4];

export default function Concept() {
  return (
    <div>
      <ConceptSlider slides={slides} />
      <div className="bg-[#015A92] -mt-10 pt-14 pb-6 px-[32px] font-Inter font-light text-center md:px-[50px] xl:px-[110px]">
        <p>
          The wonder event was the first time where the hologram was displayed
          to the general public. With an audience of 5,000 people, illusio's
          hologram stand was the most successful venue of the event! From there
          on Henrique and his team embarked on a journey to deliver that
          experience for the rest of the world.
        </p>
      </div>
    </div>
  );
}
