// // import Wrapper from "../assets/Wrapper.png";
// import wrapper2 from "../assets/wrapper2.png";
// import whiteArrow from "../assets/whiteArrow.png";
// import wrapper from "../assets/wrapper.png";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const nav = useNavigate();
//   return (
//     <div
//       className="flex flex-col lg:flex-row items-center py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-5"
//     >
//       {/* right side */}
//       <div className="w-full lg:w-[60%] text-center lg:text-right">
//         <h5 className="text-[#0055D2] text-xl font-bold mb-6">
//           عن مركز دروب المستقبل للتدريب و الإستشارات
//         </h5>
//         <h1 className="mb-4 text-2xl font-bold">
//           مجموعة من الدورات التدريبية والكورسات المتنوعة لتعزيز معارفك وتحسين
//           أدائك المهني.
//         </h1>
//         <p className="text-base text-[#616161] mb-4">
//           نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
//           المطابع ودور النشر.
//         </p>
//         <button
//           onClick={() => nav("/who-we-are")}
//           className="flex gap-3 items-center bg-[#0055D2] py-3 px-6 border rounded-xl text-white mx-auto lg:mx-0"
//         >
//           تعلم المزيد <img src={whiteArrow} alt="arrow" />
//         </button>
//       </div>
//       {/* left side */}
//       <div className="hidden gap-3 lg:flex">
//         <img className="w-60 h-80" src={wrapper} alt="wrapper1" />
//         <img className="w-60 h-80" src={wrapper2} alt="wrapper2" />
//       </div>
//     </div>
//   );
// };

// export default About;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import whiteArrow from "../assets/whiteArrow.png";
import { Axios } from "../utils/apiHandler";
import Aos from "aos";

const About = () => {
  const [data, setData] = useState({
    head: "",
    per: "",
    image1: "",
    image2: "",
  });
  console.log("🚀 ~ About ~ data:", data);

  useEffect(() => {
    Axios.get("/landing/about-us").then((res) => {
      const apiData = res.data.data.item;
      setData({
        head: apiData.head,
        per: apiData.per,
        image1: apiData.image1,
        image2: apiData.image2,
      });
    });
  }, []);

  const nav = useNavigate();

  return (
    <div
      data-aos="fade-up"
      dir="rtl"
      className="flex flex-col lg:flex-row items-center py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-5"
    >
      {/* right side */}
      <div className="w-full lg:w-[60%] text-center lg:text-right">
        <h5 className="text-[#0055D2] text-xl font-bold mb-6">
          عن مركز دروب المستقبل للتدريب و الإستشارات
        </h5>
        <h1 className="mb-4 text-2xl font-bold">{data.head}</h1>
        <p
          className="text-base text-[#616161] mb-4"
          dangerouslySetInnerHTML={{ __html: data.per }}
        />
        <button
          onClick={() => nav("/who-we-are")}
          className="flex gap-3 items-center bg-[#0055D2] py-3 px-6 border rounded-xl text-white mx-auto lg:mx-0"
        >
          تعلم المزيد <img src={whiteArrow} alt="arrow" />
        </button>
      </div>
      {/* left side */}
      <div className="hidden gap-3 lg:flex">
        <img className="w-60 h-80" src={data.image1} alt="wrapper1" />
        <img className="w-60 h-80" src={data.image2} alt="wrapper2" />
      </div>
    </div>
  );
};

export default About;
