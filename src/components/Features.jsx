import videoBox from "../assets/Video Box.png";
import whiteArrow from "../assets/whiteArrow.png";
import features2 from "../assets/features2.png";
import features3 from "../assets/features3.png";
import features4 from "../assets/features4.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import { Axios } from "../utils/apiHandler";
import ReactPlayer from "react-player";

const Features = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  console.log("🚀 ~ Features ~ data:", data);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    Axios.get("/landing/section").then((res) => {
      const apiData = res.data.data.section;

      setData(apiData);
    });

    Axios.get("/landing/video").then((res) => {
      const apiData = res.data.data;

      setVideoUrl(apiData?.video?.link);
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      dir="rtl"
      className="py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
    >
      <div>
        <div className="rounded-lg">
          <ReactPlayer url={videoUrl} controls width="100%" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-10 mt-20 lg:flex-row">
        <div className="w-full lg:w-[50%] text-center lg:text-right">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            مدربين و مدرسين معتمدون
          </h5>
          <h1 className="mb-4 text-2xl font-bold">{data?.head}</h1>
          <p className="text-base text-[#616161] mb-4">{data?.per}</p>

          <button
            onClick={() => nav("/who-we-are")}
            className="flex gap-3 items-center bg-[#0055D2] py-3 px-6 border rounded-xl text-white mx-auto lg:mx-0"
          >
            اعرف المزيد
            <img src={whiteArrow} alt="arrow" />
          </button>
        </div>

        {/* Hide images on mobile screens */}
        <div className="w-full  lg:w-[50%]">
          <img src={data?.image3} alt="feature 2" className="" />
          <div className="flex gap-5 mt-4 overflow-hidden ">
            <img src={data?.image1} alt="feature 4" className="w-[50%] h-44" />
            <img src={data?.image2} alt="feature 3" className="w-[50%] h-44" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
