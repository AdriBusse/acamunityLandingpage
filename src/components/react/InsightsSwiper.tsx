import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "../../styles/swiperStyles.css";
function InsightsSwiper() {
  const swiperData = [
    {
      citate:
        "Connecting minds, not timelines. Explore the future of academic networking.",
    },
    {
      citate:
        "Where research meets networking. Join the scholarly conversation today",
    },
    {
      citate:
        "Sharing knowledge, not selfies. The new frontier of academic collaboration.",
    },
    {
      citate:
        "Elevate your academic journey. Join the revolution in scholarly social media.",
    },
  ];
  return (
    <Swiper
      className="fade-in"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {swiperData.map((item, index) => (
        <SwiperSlide className="swiperSlide">
          <div className="content">
            <div className="citate">
              <h3>{item.citate}</h3>
            </div>
            <div className="image">image</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default InsightsSwiper;
