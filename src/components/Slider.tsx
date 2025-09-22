import { useState, useEffect } from "react";

import image1 from "/lovable-uploads/37658d80-78d7-4777-9c9b-9b98ef8820c5.png";

const Slider = () => {
  const images = [
    image1,
    image1,
    image1,
    image1,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getPreviousIndex = () => {
    return currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  };

  const getNextIndex = () => {
    return currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  };

  return (
    <div className="w-full max-w-full mx-auto px-4 py-4">
      {/* Título fora do slider */}
      <div className="text-center mb-8">
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-wider">
          NOSSOS DANÇARINOS
        </h2>
      </div>

      {/* Container do slider */}
      <div className="relative flex items-center justify-center gap-6 h-[420px] md:h-[480px] w-full max-w-[1600px] mx-auto overflow-hidden">
        {/* Imagem anterior (esquerda) */}
        <div
          className={`relative w-[25%] h-[75%] overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 ease-in-out opacity-50 scale-90 ${
            isSliding ? "translate-x-[-100px]" : ""
          }`}
        >
          <img
            src={images[getPreviousIndex()]}
            alt={`Dançarino ${getPreviousIndex() + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Imagem atual (centro) */}
        <div
          className={`relative w-[70%] h-full overflow-hidden rounded-3xl shadow-3xl transform transition-all duration-500 ease-in-out z-10 ${
            isSliding ? "translate-x-[-100px] scale-90 opacity-70" : ""
          }`}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Dançarino ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem próxima (direita) */}
        <div
          className={`relative w-[25%] h-[75%] overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 ease-in-out opacity-50 scale-90 ${
            isSliding
              ? "translate-x-[-100px] w-[70%] h-full scale-100 opacity-100 z-10 rounded-3xl shadow-3xl"
              : ""
          }`}
        >
          <img
            src={images[getNextIndex()]}
            alt={`Dançarino ${getNextIndex() + 1}`}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
              isSliding ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>

        {/* Nova imagem que entra da direita */}
        {isSliding && (
          <div className="absolute right-0 w-[25%] h-[75%] overflow-hidden rounded-2xl shadow-2xl opacity-50 scale-90 transition-all duration-500 ease-in-out">
            <img
              src={images[(currentImageIndex + 2) % images.length]}
              alt={`Dançarino ${((currentImageIndex + 2) % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
