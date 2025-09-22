import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const HorizontalSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/frame1.jpeg",
      title: "ELETRÔNICOS",
    },
    {
      id: 2,
      image: "/frame2.jpeg",
      title: "DANÇA",
    },
    {
      id: 3,
      image: "/frame3.jpeg",
      title: "PINTURA",
    },
    {
      id: 4,
      image: "/frame1.jpeg",
      title: "ESCULTURA",
    },
    {
      id: 5,
      image: "/frame2.jpeg",
      title: "FOTOGRAFIA",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      <div className="absolute top-0 w-full h-[15vh] z-20 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 w-[160vw] h-full bg-black rounded-b-[50%]" />
      </div>

      <div className="absolute bottom-0 w-full h-[15vh] z-20 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 w-[160vw] h-full bg-black rounded-t-[50%]" />
      </div>

      <div className="flex-1 flex items-center justify-center z-10 min-h-screen">
        <div className="relative w-full px-[5%] overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: -200,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: -300,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: -400,
              },
            }}
            className="w-full min-h-screen"
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="flex justify-center items-center px-2 md:px-4"
              >
                <Link to={"/semana22"}>
                  <div className="relative w-full max-w-[90vw]  md:max-w-[600px] aspect-[2/3] overflow-hidden rounded-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-20">
            <ChevronLeft size={24} />
          </button>

          <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-20">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-[-28rem] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-30 pointer-events-none">
        <div className="relative w-[600px] h-[700px] md:w-[800px] md:h-[800px]">
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "20s" }}
          >
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <path
                  id="circle-path"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text className="fill-white text-xs font-light tracking-wider">
                <textPath href="#circle-path" startOffset="0%">
                  ARTE DIGITAL • MÚSICA • DANÇA • PINTURA • ESCULTURA • JOGOS
                  ELETRÔNICOS •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
