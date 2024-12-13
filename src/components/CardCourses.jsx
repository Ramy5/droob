import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const CardCourses = ({ name, desc, img, price, date, rate, id }) => {
  console.log("🚀 ~ CardCourses ~ rate:", rate);
  const nav = useNavigate();
  return (
    <div
      dir="rtl"
      className="flex flex-col justify-between bg-[#ffffff] w-[98%] my-8 shadow-md rounded-xl min-h-[580px]"
    >
      <img
        src={img}
        alt=""
        className="rounded-t-xl h-[200px] w-full sm:h-[180px]"
      />
      <div className="flex flex-col gap-3 px-4 mt-4">
        <h1 className="mb-3 text-base font-bold sm:text-lg">{name}</h1>
        <p className="text-[#616161] text-xs sm:text-sm mb-3">{desc}</p>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rate={rate} />
          <p className="text-[#616161] text-xs sm:text-sm">{rate} تقييم</p>
        </div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <p className="text-[#616161] text-xs sm:text-sm text-nowrap">
            يبدأ اليوم في {date}
          </p>
          <p className="text-[#0055D2] text-sm sm:text-xl font-bold">
            {price} ر.س
          </p>
        </div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <button
            onClick={() => nav(`/showProgram/${id}`)}
            className="bg-[#0055D2] text-white py-1 px-2 sm:py-2 rounded flex-1"
          >
            عرض البرنامج
          </button>
          <button className="bg-white border border-[#0055D2] font-semibold text-[#0055D2] py-1 px-2 sm:py-2 rounded flex-1">
            التسجيل
          </button>
        </div>
      </div>
    </div>
  );
};

CardCourses.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  rate: PropTypes.node.isRequired,
};

export default CardCourses;
