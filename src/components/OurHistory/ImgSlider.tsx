import { useState, useEffect } from "react";
import "../../imgslider.css";
import { CircleDot, Circle } from "lucide-react";

type ImgProps = {
  slides: string[];
};

export default function ImgSlider({ slides }: ImgProps) {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [imagesToShow, setImagesToShow] = useState<number>(1);

  useEffect(() => {
    const updateImagesToShow = () => {
      if (window.innerWidth >= 1024) {
        setImagesToShow(slides.length);
      } else if (window.innerWidth >= 768) {
        setImagesToShow(2);
      } else {
        setImagesToShow(1);
      }
    };

    updateImagesToShow();

    window.addEventListener("resize", updateImagesToShow);

    return () => {
      window.removeEventListener("resize", updateImagesToShow);
    };
  }, [slides.length]);

  return (
    <div className="mt-10">
      <div className="w-full h-full flex overflow-hidden items-center">
        {slides.map((images) => (
          <img
            src={images}
            key={images}
            style={{
              translate: `${-imgIndex * (100 / imagesToShow)}%`,
              width: `${100 / imagesToShow}%`,
            }}
            className="img-slider-img"
          />
        ))}
      </div>
      {imagesToShow < slides.length && (
        <div className="flex justify-center items-center mt-5 gap-3">
          {[...Array(Math.ceil(slides.length / imagesToShow))].map(
            (_, index) => (
              <button
                onClick={() => setImgIndex(index * imagesToShow)}
                key={index}
                className="img-slider-btn"
              >
                {index === Math.floor(imgIndex / imagesToShow) ? (
                  <CircleDot />
                ) : (
                  <Circle />
                )}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
