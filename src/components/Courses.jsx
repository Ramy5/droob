import business_course from "../assets/study courses/business_course.png";
import Rating from "../assets/study courses/Rating.png";
import accounting from "../assets/study courses/accounting_course.png";
import mobile from "../assets/study courses/mobile-course.png";
import english from "../assets/study courses/english_course.png";
import Slider from "react-slick";
// import studying from "../assets/studying.png";

import CardCourses from "./CardCourses.jsx";

// Import Slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../utils/apiHandler.js";

const Courses = () => {
  const nav = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("/landing/courses").then((res) => {
      const apiData = res.data.data;
      setData(apiData);
    });
  }, []);

  const details = data?.map((course) => {
    return {
      icon: english,
      id: course.id,
      name: course.name,
      desc: course.desc,
      price: course.price,
      img: course.image,
      date: course.start_date,
      rate: course.rate,
    };
  });
  console.log("🚀 ~ details ~ details:", details);

  // Slider settings
  const settings = {
    dots: true,
    // infinite: details?.length > 3 ? true : false,
    speed: 500,
    slidesToShow: 4,
    centerMode: false, // Center the slides
    beforeChange: (current, next) => setActiveIndex(next),
    rtl: true, // Enable RTL
    customPaging: (i) => (
      <div
        style={{
          marginTop: "10px",
          backgroundColor: i === activeIndex ? "#0055D2" : "#EEEEEE",
          width: "25px",
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
        },
      },
      {
        breakpoint: 900, // Tablet screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1224, // Desktop screens
        settings: {
          slidesToShow: 3,
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
      data-aos="fade-up"
      className="bg-[#F8FBFB] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
    >
      <div className="text-center">
        <h1 className="mt-5 text-2xl font-bold sm:text-3xl">
          {" "}
          أحدث الدورات التدريبية{" "}
        </h1>
        <p className="text-[#616161] text-sm mt-3">
          نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
          المطابع ودور النشر. كان لوريم إيبسوم
        </p>
      </div>

      <Slider {...settings} className="mt-14">
        {details.map((item, index) => (
          <CardCourses
            key={item.id}
            id={item.id}
            icon={item.icon}
            name={item.name}
            desc={item.desc}
            price={item.price}
            img={item.img}
            rate={item.rate}
            date={item.date}
          />
        ))}
      </Slider>

      <div className="mt-10 text-center">
        <button
          onClick={() => nav("/study-courses")}
          className="bg-[#0055D2] p-2 px-6 rounded-3xl text-white"
        >
          عرض جميع الكورسات
        </button>
      </div>
    </div>
  );
};

export default Courses;
