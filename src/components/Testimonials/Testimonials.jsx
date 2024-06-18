import React from "react";
import "./testimonials.css";
import data from "./TestimonialData";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Comments from colleague</h5>
      <h2>Reviews</h2>

      <Swiper
        spaceBetween={40}
        pagination={{
          // dynamicMainBullets: true,
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="container testimonials_container"
      >
        {data.map(({ text, name, position, avatar, profile }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <a href={profile} target="_blank" rel="noreferrer">
                  <img src={avatar} alt="" />{" "}
                </a>
              </div>
              <h5 className="client_name">{name}</h5>
              {/* <small className="position">{position}</small> */}
              <small className="client_review">{text}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
