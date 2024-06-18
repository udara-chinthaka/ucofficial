import React from "react";
import "./testimonials.css";
import avatar from "../../assets/me.jpg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    avatar: avatar,
    clientName: "Udara Chinthaka",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt distinctio, ducimus itaque excepturi sed, corporis accusantium voluptate ad provident laboriosam obcaecati quos et dignissimos earum odio facilis nemo aspernatur",
  },
  {
    avatar: avatar,
    clientName: "Udara Chinthaka",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt distinctio, ducimus itaque excepturi sed, corporis accusantium voluptate ad provident laboriosam obcaecati quos et dignissimos earum odio facilis nemo aspernatur",
  },
  {
    avatar: avatar,
    clientName: "Udara Chinthaka",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt distinctio, ducimus itaque excepturi sed, corporis accusantium voluptate ad provident laboriosam obcaecati quos et dignissimos earum odio facilis nemo aspernatur",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from cleints</h5>
      <h2>Testimonials</h2>

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
        {testimonialData.map(({ avatar, clientName, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{clientName}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
