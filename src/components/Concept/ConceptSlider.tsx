import { useState } from "react";
import "../../imgslider.css";
import { CircleDot, Circle } from "lucide-react";

type ImgProps = {
  slides: string[];
};

export default function ConceptSlider({ slides }: ImgProps) {
  const [imgIndex, setImgIndex] = useState<number>(0);
  return (
    <div className="mt-5">
      <div className="w-full h-full flex overflow-hidden items-center">
        {slides.map((images) => (
          <img
            src={images}
            key={images}
            style={{ translate: `${-100 * imgIndex}%` }}
            className="img-slider-img2"
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-5 gap-3">
        {slides.map((_, index) => (
          <button
            onClick={() => setImgIndex(index)}
            key={index}
            className="img-slider-btn"
          >
            {index === imgIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
