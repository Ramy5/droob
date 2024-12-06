import { useState } from "react";
import faq from "../assets/faq.png";
import faq2 from "../assets/faq2.png";
import faq3 from "../assets/faq3.png";
import { IoIosArrowDown } from "react-icons/io";

const FAQs2 = ({ questionData }) => {
  const [toggle, setToggle] = useState(null);
  const questions = [
    {
      id: 1,
      question: "هل يمكنني تجربة المنصة اولا قبل الإشتراك؟",
      answer:
        "من المهم الاعتناء بالمريض، وأن يتبعه المريض، لكن ذلك سيحدث في وقت يكون فيه الكثير من العمل والألم.",
    },
    {
      id: 2,
      question: "ما الذي تقدمه منصة دروب المستقبل؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 3,
      question: "كيف ندفع الإشتراك؟ ",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 4,
      question: "كم عدد الدورات التي يمكنني الحصول عليها؟ ",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 5,
      question: "هل يوجد محتوى مجاني على المنصة؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
  ];

  const handleToggle = (id) => {
    setToggle(toggle === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 px-6 md:pl-24">
      <div className="">
        <div className="flex flex-col gap-5">
          {questionData?.map((item) => (
            <div key={item.id} className="flex flex-col gap-5 border-b">
              <div
                onClick={() => handleToggle(item.id)}
                className="flex transition-all duration-300 justify-between items-center cursor-pointer bg-[#fff] py-2"
              >
                <p
                  className={`${
                    toggle === item.id ? "text-[#0055D2]" : "text-black"
                  } font-bold`}
                >
                  {item.question}
                </p>
                <IoIosArrowDown
                  className={`text-xl transition-all duration-300 ${
                    toggle === item.id ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
              <div
                className={`transition-all duration-300 ease-in-out ${
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

export default FAQs2;
