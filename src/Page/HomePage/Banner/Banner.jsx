import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const Banner = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("bannerslider.json")
      .then((response) => response.json())
      .then((result) => {
        setSliders(result);
      });
  }, []);
  return (
    <div className="relative mb-60">
      <div className="banner-img h-screen w-full text-white flex justify-center items-center">
        <div className="md:w-10/12 w-11/12">
          <h1 className="md:text-6xl text-3xl font-bold ">Black Mesa</h1>
          <p className="text-xl my-7 md:leading-normal leading-10">
            “Have beginning wherein spirit. Bearing unto. To after light. Good
            image can’t without hath <br /> fly beast him fish firmament fish
            Face waters fly unto spirit i doesn’t one waters divide.”
          </p>
          <button className="bg-[#d31c3e] hover:bg-white font-semibold duration-300 px-7 py-3 text-black rounded rounded-ss-xl  rounded-ee-xl">
            Pesachs
          </button>
          <button className="mx-2 hover:bg-[#d31c3e] font-semibold duration-300 rounded rounded-ss-xl  rounded-ee-xl bg-white px-7 py-3 text-black">
            Live Demo
          </button>
        </div>
      </div>
      <div className="text-white md:w-10/12 w-full absolute md:bottom-[-120px] bottom-[-20px] md:start-[90px]">
        <Swiper
          slidesPerView={3}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation]}
    
        >
          <div className="px-5">
            {sliders.map((game) => (
              <SwiperSlide className="px-2 text-white group " key={game?.id}>
                {" "}
                <img className="w-full rounded-md h-52"  src={game?.gameImage} alt="" />
                <p className="hidden group-hover:block absolute bottom-0 text-lg font-semibold">{game?.model}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
