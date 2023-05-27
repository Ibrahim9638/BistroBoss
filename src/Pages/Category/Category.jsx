import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
  <section>
    <SectionTitle
    subHeading={"--- From 11:00am to 10:00pm ---"}
    heading = {"ORDER ONLINE"}
    >
    </SectionTitle>
    
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img className="rounded" src={slide1} alt="" />
        <h2 style={{textShadow:'2px 2px 4px #000000'}}
          className="text-center text-2xl 
            text-white uppercase -mt-16" 
        >
          Salads
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded" src={slide2} alt="" />
        <h2 style={{textShadow:'2px 2px 4px #000000'}}
          className="text-center text-2xl 
            text-white uppercase -mt-16" 
        >
          soups
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded" src={slide3} alt="" />
        <h2 style={{textShadow:'2px 2px 4px #000000'}}
          className="text-center text-2xl 
            text-white uppercase -mt-16" 
        >
          Pizza
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded" src={slide4} alt="" />
        <h2 style={{textShadow:'2px 2px 4px #000000'}}
          className="text-center text-2xl 
            text-white uppercase -mt-16" 
        >
          Corns
        </h2>
      </SwiperSlide>

      <SwiperSlide>
        <img className="rounded" src={slide5} alt="" />
        <h2 style={{textShadow:'2px 2px 4px #000000'}}
          className="text-center text-2xl 
            text-white uppercase -mt-16" 
        >
          desserts
        </h2>
      </SwiperSlide>

    </Swiper>
  </section>
  );
};

export default Category;
