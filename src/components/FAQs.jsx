// import { useState } from "react";
// import faq from "../assets/faq.png";
// import faq2 from "../assets/faq2.png";
// import faq3 from "../assets/faq3.png";

// const FAQs = () => {
//   const [toggle, setToggle] = useState(null);
//   const questions = [
//     {
//       id: 1,
//       question: "هل يمكنني تجربة المنصة اولا قبل الإشتراك؟",
//       answer:
//         "من المهم الاعتناء بالمريض، وأن يتبعه المريض، لكن ذلك سيحدث في وقت يكون فيه الكثير من العمل والألم.",
//     },
//     {
//       id: 2,
//       question: "ما الذي تقدمه منصة دروب المستقبل؟",
//       answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
//     },
//     {
//       id: 3,
//       question: "كيف ندفع الإشتراك؟ ",
//       answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
//     },
//     {
//       id: 4,
//       question: "كم عدد الدورات التي يمكنني الحصول عليها؟ ",
//       answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
//     },
//     {
//       id: 5,
//       question: "هل يوجد محتوى مجاني على المنصة؟",
//       answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
//     },
//   ];

//   const handleToggle = (id) => {
//     setToggle(toggle === id ? null : id);
//   };

//   return (
//     <div
//       dir="rtl"
//       className="bg-[#F9F9F9] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col md:flex-row justify-center gap-10"
//     >
//       <div className="flex flex-col gap-3 md:w-[40%] text-center md:text-right lg:text-right">
//         <h5 className="text-[#0055D2] text-lg sm:text-xl font-bold mb-6">
//           الأسئلة المتكررة
//         </h5>
//         <h1 className="mb-4 text-xl font-bold sm:text-2xl"> الأسئلة الشائعة</h1>
//         <p className="text-sm sm:text-base text-[#616161] mb-4">
//           نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
//           المطابع ودور النشر. كان لوريم إيبسوم
//         </p>
//         <img src={faq} className="w-full md:w-auto" />
//       </div>

//       <div className="w-full md:w-[60%] mt-10 md:mt-0">
//         <div className="flex flex-col gap-5">
//           {questions.map((item) => (
//             <div key={item.id} className="flex flex-col gap-5">
//               <div
//                 onClick={() => handleToggle(item.id)}
//                 className="flex justify-between items-center cursor-pointer bg-[#fff] px-4 py-4"
//               >
//                 <p
//                   className={`${
//                     toggle === item.id ? "text-[#0055D2]" : "text-black"
//                   } font-bold`}
//                 >
//                   {item.question}
//                 </p>
//                 <img
//                   className={`w-4 ${toggle === item.id ? "block" : "hidden"}`}
//                   src={faq2}
//                 />
//                 <img
//                   className={`w-4 ${toggle === item.id ? "hidden" : "block"}`}
//                   src={faq3}
//                 />
//               </div>
//               <div
//                 className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                   toggle === item.id
//                     ? "max-h-96 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="text-[#616161] px-4 py-2">{item.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQs;
import { useEffect, useState } from "react";
import { Axios } from "../utils/apiHandler.js";
import faq2 from "../assets/faq2.png"; // أيقونة السهم للأسئلة المطوية
import faq3 from "../assets/faq3.png"; // أيقونة السهم للأسئلة المفتوحة

const FAQs = () => {
  const [toggle, setToggle] = useState(null);
  const [faqData, setFaqData] = useState({
    image: "",
    head: "",
    per: "",
    items: [],
  });

  useEffect(() => {
    // استدعاء API لجلب بيانات الأسئلة الشائعة
    Axios.get("/landing/visions").then((res) => {
      setFaqData(res.data.data.item);
    });
  }, []);

  const handleToggle = (id) => {
    setToggle(toggle === id ? null : id);
  };

  return (
    <div
      data-aos="fade-up"
      dir="rtl"
      className="bg-[#F9F9F9] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col md:flex-row justify-center gap-10"
    >
      <div className="flex flex-col gap-3 md:w-[40%] text-center md:text-right lg:text-right">
        <h5 className="text-[#0055D2] text-lg sm:text-xl font-bold mb-6">
          الأسئلة المتكررة
        </h5>
        <h1 className="mb-4 text-xl font-bold sm:text-2xl">{faqData.head}</h1>
        <p className="text-sm sm:text-base text-[#616161] mb-4">
          {faqData.per}
        </p>
        <img src={faqData.image} alt="faq" className="w-full md:w-auto" />
      </div>

      <div className="w-full md:w-[60%] mt-10 md:mt-0">
        <div className="flex flex-col gap-5">
          {faqData.items.map((item) => (
            <div key={item.id} className="flex flex-col gap-5">
              <div
                onClick={() => handleToggle(item.id)}
                className="flex justify-between items-center cursor-pointer bg-[#fff] px-4 py-4"
              >
                <p
                  className={`${
                    toggle === item.id ? "text-[#0055D2]" : "text-black"
                  } font-bold`}
                >
                  {item.question}
                </p>
                <img
                  className={`w-4 ${toggle === item.id ? "hidden" : "block"}`}
                  src={faq3}
                  alt="collapsed arrow"
                />
                <img
                  className={`w-4 ${toggle === item.id ? "block" : "hidden"}`}
                  src={faq2}
                  alt="expanded arrow"
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  toggle === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#616161] px-4 py-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
