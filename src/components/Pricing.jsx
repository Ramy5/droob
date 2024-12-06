// import PricingCard from "./PricingCard.jsx";

// const Pricing = () => {
//   return (
//     <div
//       dir="rtl"
//       className="bg-gradient-to-r from-blue-start to-blue-end py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:h-[600px] "
//     >
//       {/* Text Section */}
//       <div className="mb-10 text-center text-white">
//         <h5 className="text-xs sm:text-sm mb-6 text-[#E4E4E4]">
//           قيمة مضاعفة لسعر الإشتراك
//         </h5>
//         <h1 className="mb-12 text-lg font-bold leading-7 sm:text-2xl sm:leading-9">
//           استثمر في مستقبلك بأسعار تنافسية
//           <br />
//           وبدون أي مفاجآت أو تكاليف إضافية.
//         </h1>
//       </div>

//       {/* Pricing Cards Grid */}
//       <div className="grid items-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//         <PricingCard
//           title={"برنامج التعلم الفردي"}
//           semiTitle={"تعلم موضوعا أو مهارة واحدة واكسب بيانات اعتماد"}
//           pricing={"99"}
//           desc={"إعادة ضمان المال"}
//         />
//         <PricingCard
//           most={"الأكثر شيوعا"}
//           title={"دروب بلس شهريا"}
//           semiTitle={"أكمل دورات متعددة واكسب أوراق اعتماد على المدى القصير"}
//           pricing={"150"}
//           desc={"احصل على شهادة عند الانتهاء بعد انتهاء الفترة التجريبية"}
//         />
//         <PricingCard
//           title={"دروب بلس السنوي"}
//           semiTitle={
//             "الجمع بين المرونة والادخار مع أهداف التعلم على المدى الطويل"
//           }
//           pricing={"200"}
//           desc={"ادخر عندما تدفع مقدما للسنة"}
//         />
//       </div>
//     </div>
//   );
// };

// export default Pricing;

import { useEffect, useState } from "react";
import PricingCard from "./PricingCard.jsx";
import { Axios } from "../utils/apiHandler.js";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  console.log("🚀 ~ Pricing ~ plans:", plans);

  useEffect(() => {
    Axios.get("/landing/plans")
      .then((response) => {
        setPlans(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching pricing plans:", error);
      });
  }, []);

  return (
    <div
      dir="rtl"
      data-aos="fade-up"
      className="bg-gradient-to-r from-blue-start to-blue-end py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:h-[600px]"
    >
      {/* Text Section */}
      <div className="mb-10 text-center text-white">
        <h5 className="text-xs sm:text-sm mb-6 text-[#E4E4E4]">
          قيمة مضاعفة لسعر الإشتراك
        </h5>
        <h1 className="mb-12 text-lg font-bold leading-7 sm:text-2xl sm:leading-9">
          استثمر في مستقبلك بأسعار تنافسية
          <br />
          وبدون أي مفاجآت أو تكاليف إضافية.
        </h1>
      </div>

      {/* Pricing Cards Grid */}
      {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center */}
      <div dir="rtl" className="">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`grid items-center gap-5  sm:grid-cols-2 lg:grid-cols-3 `}
          >
            <PricingCard
              most={plan.is_common ? "الأكثر شيوعا" : null}
              title={plan.name}
              semiTitle={plan.per}
              pricing={plan.price}
              desc={plan.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
