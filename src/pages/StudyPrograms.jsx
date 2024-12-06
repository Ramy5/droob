import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import business_course from "../assets/study courses/business_course.png";
import Rating from "../assets/study courses/Rating.png";
import accounting from "../assets/study courses/accounting_course.png";
import mobile from "../assets/study courses/mobile-course.png";
import english from "../assets/study courses/english_course.png";
import studying from "../assets/studying.png";
import HeaderImage from "../components/HeaderImage";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Pagination from "../components/Pagination";
import { Axios } from "../utils/apiHandler";
import CardCourses from "../components/CardCourses";
import Loading from "../components/Loading";

const StudyPrograms = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  console.log("🚀 ~ HeroSection ~ data:", data?.current_page);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get(`/landing/courses?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  const courses = data?.data?.map((course) => {
    return {
      icon: english,
      name: course.name,
      desc: course.desc,
      price: course.price,
      id: course.id,
      img: course.image,
      date: course.start_date,
      rate: course.rate,
    };
  });

  if (isLoading) return <Loading />;

  return (
    <div data-aos="fade-up" dir="rtl" className="bg-[#F8FBFB]">
      <HeaderImage img={studying} title="البرامج التدريبية" />

      <div className="flex flex-col items-center justify-center gap-3 mt-20 md:mx-10">
        <h1 className="text-[#2C2C2C] text-4xl font-bold">
          أحدث البرامج التدريبية
        </h1>
        <p className="text-center text-[#616161] p-3">
          نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
          المطابع ودور النشر. كان لوريم إيبسوم{" "}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-4 md:p-16">
        {courses?.map((item, index) => (
          <CardCourses
            key={index}
            icon={item.image}
            name={item.name}
            id={item.id}
            desc={item.desc}
            price={item.price}
            img={item.img}
            rate={item.rate}
            date={item.date}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between px-10 pb-10 md:mx-16">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className={`flex items-center gap-1 px-6 h-10 border border-[#023AA2] disabled:bg-gray-600`}
            disabled={page === data?.tatal || data?.tatal === 1}
          >
            <span className={"text-[#023AA2]"}>التالي</span>
            <MdKeyboardDoubleArrowRight className="text-xl text-[#023AA2]" />
          </button>
          <Pagination
            showNavigation={true}
            setPage={setPage}
            currentPage={1}
            totalPages={data?.total}
          />
          <button
            onClick={() => setPage((prev) => prev - 1)}
            className="flex items-center gap-1 px-6 h-10 border border-[#023AA2]"
            disabled={page === data?.tatal || data?.tatal === 1}
          >
            <span className={"text-[#023AA2]"}>السابق</span>
            <MdKeyboardDoubleArrowLeft className="text-xl text-[#023AA2]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyPrograms;
