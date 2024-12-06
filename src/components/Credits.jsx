// import credit1 from "../assets/credits/credit1.png";
// import credit2 from "../assets/credits/credit2.png";
// import credit3 from "../assets/credits/credit3.png";
// import credit4 from "../assets/credits/credit4.png";

// export const Credits = () => {
//   const images = [
//     { img: credit1 },
//     { img: credit2 },
//     { img: credit3 },
//     { img: credit4 },
//     { img: credit2 },
//     { img: credit2 },
//     { img: credit2 },
//   ];
//   return (
//     <div className=" py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] m-auto bg-[#F0F0F0]">
//       <div className="text-center">
//         <h5 className="text-[#0055D2] text-xl font-bold mb-6"> الاعتمادات</h5>
//         <h3 className="mb-10 text-2xl font-bold">
//           نـفتخر بأننا على مستوى ثقة عملائنا وتطلعاتهم
//         </h3>
//       </div>
//       <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
//         {images.map((item, index) => (
//           <img key={index} src={item.img} className="w-[13%]" />
//         ))}
//       </div>
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import { Axios } from "../utils/apiHandler.js";

export const Credits = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get("/landing/evolution").then((res) => {
      const apiImages = res.data.data.items.map((item) => item.image);
      setImages(apiImages);
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] m-auto bg-[#F0F0F0]"
    >
      <div className="text-center">
        <h5 className="text-[#0055D2] text-xl font-bold mb-6"> شركاء النجاح</h5>
        <h3 className="mb-10 text-2xl font-bold">
          نـفتخر بأننا على مستوى ثقة عملائنا وتطلعاتهم
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-[13%]"
            alt={`credit-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Credits;
