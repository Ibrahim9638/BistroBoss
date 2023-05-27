import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiMuscleFat } from "react-icons/Gi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useState(() => {
    fetch("/public/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <div className="">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>

              <div className="flex flex-col items-center space-y-12 mx-24 my-16">
            
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                onChange={review.setRating}
                isRequired
              />
                <div className="text-6xl flex">
                <GiMuscleFat/>
                <GiMuscleFat/>
                </div>
              <div>
                <p className="text-lg">{review.details}</p>
                <h4 className="text-3xl font-extrabold text-center text-orange-500">
                  {review.name}
                </h4>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
