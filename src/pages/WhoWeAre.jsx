import React, { useEffect, useState } from "react";
import "../index.css";
import longArrowRightW from "../assets/long-arrow-rightW.png";
import longArrowRight from "../assets/long-arrow-right.png";
import correct from "../assets/correct-circle.png";
import aboutImage from "../assets/about-img.png";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderImage from "../components/HeaderImage";
import { Axios } from "../utils/apiHandler";
import Loading from "../components/Loading";

const WhoWeAre = () => {
  const nav = useNavigate();

  const [data, setData] = useState({});
  const [mission, setMission] = useState({});
  const [team, setTeam] = useState({});
  const [goal, setGoal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("/landing/what-say")
      .then((res) => {
        setData(res.data.data.item);
      })
      .finally(() => setIsLoading(false));
    Axios.get("/landing/mission")
      .then((res) => {
        setMission(res.data.data);
      })
      .finally(() => setIsLoading(false));
    Axios.get("/landing/teams")
      .then((res) => {
        setTeam(res.data.data);
      })
      .finally(() => setIsLoading(false));
    Axios.get("/landing/goal")
      .then((res) => {
        setGoal(res.data.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div data-aos="fade-up" dir="rtl">
      {/* About Hero */}
      <HeaderImage img={aboutImage} title="من نحن" />
      {/* Second Part */}
      <div className="flex flex-col gap-8 px-8 my-6 md:gap-16 md:my-20 md:px-24 md:flex-row justify-evenly">
        <div className="flex flex-col justify-center gap-6 p-5 md:w-2/4">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            عن مركز دروب المستقبل للتدريب والإستشارات
          </h5>
          <h1
            dangerouslySetInnerHTML={{ __html: data?.head }}
            className="text-xl font-bold leading-normal md:text-4xl"
          />
          <p
            dangerouslySetInnerHTML={{ __html: data?.per }}
            className="text-gray-500"
          />
          <div>
            <NavLink to="">
              <button
                onClick={() => nav("/login")}
                className="flex flex-row-reverse items-center gap-3 px-10 py-3 font-semibold text-white bg-blue-800 border rounded-lg"
              >
                <img src={longArrowRightW} /> إبدأ الآن
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center px-4">
          <img src={data?.image} />
        </div>
      </div>

      {/* Third Part */}
      <div className="flex flex-col gap-6 px-8 py-10 md:py-20 md:gap-12 md:px-24 md:flex-row justify-evenly bg-gray-50">
        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={mission.mission?.image} className="w-32" />
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">{mission.mission?.head}</h1>
            <p className="text-gray-500">{mission.mission?.per}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={mission.visions?.image} className="w-32" />
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">{mission.visions?.head}</h1>
            <p className="text-gray-500">{mission.visions?.per}</p>
          </div>
        </div>
      </div>

      {/* Forth Part */}
      <div className="flex flex-col px-10 py-10 md:py-20 gap-11 bg-gray-50">
        {/* Title */}
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-3xl font-bold">{team.items?.head}</h1>
          <p className="text-center text-gray-500">{team.items?.per}</p>
        </div>

        {/* Persons */}
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          {team.items?.items.map((item, index) => (
            <div
              key={index}
              className="bg-white w-[380px] h-[400px] rounded-[16px] flex flex-col justify-center items-center gap-4 relative group"
            >
              <div className="relative w-[344px]">
                <img src={item.image} className="w-full rounded-[16px]" />

                <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-50 flex items-center justify-center rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* LinkedIn icon */}
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.602 20.982h-2.797v-10.6h2.797v10.6zm-1.398-12.182c-.883 0-1.602-.718-1.602-1.602s.718-1.602 1.602-1.602 1.602.718 1.602 1.602-.719 1.602-1.602 1.602zm13.602 12.182h-2.798v-5.644c0-1.343-.026-3.071-1.871-3.071-1.875 0-2.163 1.464-2.163 2.976v5.739h-2.797v-10.6h2.684v1.448h.038c.374-.707 1.287-1.449 2.65-1.449 2.833 0 3.357 1.864 3.357 4.288v6.314z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Text content */}
              <h1 className="text-xl font-bold">{item.head}</h1>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fifth Part */}
      <div className="flex flex-col-reverse gap-6 px-10 md:gap-20 md:py-20 md:flex-row md:px-28">
        {/* Images */}
        <div className="flex justify-center gap-3">
          <img
            className="w-40 h-70 md:w-60 md:h-full"
            src={goal.item?.image1}
          />
          <img
            className="w-40 h-70 md:w-60 md:h-full"
            src={goal.item?.image2}
          />
        </div>

        {/* Info */}
        <div className="md:w-[60%] flex flex-col gap-6">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            لماذا تختار مركز دروب المستقبل للتدريب و الإستشارات ؟
          </h5>
          <h1 className="text-lg font-bold leading-normal md:text-4xl">
            {goal.item?.head}
          </h1>
          <p className="mb-4 text-base text-gray-500">{goal.item?.per}</p>
          <div className="flex gap-6 md:gap-40">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[0].desc}</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[2].desc}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[1].desc}</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">{goal.item?.items[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Part */}
      <div className="flex items-center justify-center px-5 md:py-20 bg-gray-50">
        <div className="bg-[url('assets/who-we-are-mask.png')] h-[330px] flex items-center justify-center ">
          <div className="flex flex-col items-center w-3/4 gap-6 text-center">
            <h1 className="text-xl font-bold text-white md:text-3xl">
              سجل الآن و إنضم لمجتمع دروب المستقبل و استفد من برامجنا التدريبية
              والاستشارية المصممة خصيصًا لك
            </h1>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <NavLink to="">
                <button
                  onClick={() => nav("/login")}
                  className="flex flex-row-reverse items-center gap-3 px-10 py-3 font-semibold text-blue-800 bg-white border rounded-lg"
                >
                  <img src={longArrowRight} /> إبدأ الآن
                </button>
              </NavLink>
              <button
                onClick={() => nav("/support-and-communication")}
                className="font-semibold text-white rounded "
              >
                احجز استشارة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
