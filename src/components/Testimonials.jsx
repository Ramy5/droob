import { useEffect, useState } from "react";
import CardTestimonials from "./CardTestimonials.jsx";
import { Axios } from "../utils/apiHandler";
import Slider from "react-slick";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index

  const [data, setData] = useState({
    head: "",
    per: "",
    items: [],
  });

  useEffect(() => {
    Axios.get("/landing/follow-up").then((res) => {
      const apiData = res.data.data.items;
      setData({
        head: apiData.head,
        per: apiData.per,
        items: apiData.items,
      });
    });
  }, []);
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    beforeChange: (current, next) => setActiveIndex(next),
    rtl: true, // Enable RTL
    customPaging: (i) => (
      <div
        style={{
          marginTop: "10px",
          width: "25px",
          backgroundColor: i === activeIndex ? "#0055D2" : "#fff",
          height: "5px",
          borderRadius: "5px",
        }}
      />
    ),
    dotsClass: "slick-dots", // Add custom class for slick dots
    responsive: [
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Desktop screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 1440, // Large Desktop
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //   }
      // },
    ],
  };

  return (
    <div
      dir="rtl"
      data-aos="fade-up"
      className="bg-[#F0F0F0] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:pt-[330px]"
    >
      <div className="mb-10 text-center">
        <h5 className="text-[#0055D2] text-xl font-bold mb-6">{data.head}</h5>
        <h3 className="mb-10 text-2xl font-bold leading-10 tracking-wider">
          {data.per}
        </h3>
      </div>

      <div>
        <Slider {...settings} className="mt-14">
          {data?.items?.map((item) => (
            <CardTestimonials
              key={item.id}
              title={item.desc}
              name={item.head}
              id={item.id}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
