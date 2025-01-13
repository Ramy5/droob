import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { useEffect, useState } from "react";
import { Axios } from "../utils/apiHandler";

const CardCourses = ({ name, desc, img, price, date, rate, id }) => {
  console.log("🚀 ~ CardCourses ~ rate:", rate);
  const [paymentIsLoading, setPaymentIsLoading] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const handlePayment = async () => {
    if (!user) {
      return navigate("/login");
    }

    setPaymentIsLoading(true);
    try {
      const response = await Axios.post("/landing/charge", {
        name: user.name,
        amount: price,
        email: user.email,
        phone: user.phone,
      });

      const paymentUrl = response.data.data.url;

      if (paymentUrl && paymentUrl.startsWith("http")) {
        window.location.href = paymentUrl;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPaymentIsLoading(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div
      dir="rtl"
      className="flex flex-col justify-between bg-[#ffffff] w-[98%] my-8 shadow-md rounded-xl"
    >
      <img
        src={img}
        alt=""
        className="rounded-t-xl h-[200px] w-full sm:h-[180px] object-cover "
      />
      <div className="flex flex-col gap-3 px-4 mt-4">
        <h1 className="mb-3 text-base font-bold sm:text-lg">
          {name.slice(0, 30)}...
        </h1>
        <p className="text-[#616161] text-ellipsis text-xs sm:text-sm mb-3 h-[70px] overflow-hidden">
          {desc.slice(0, 100)}...
        </p>
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
            onClick={() => navigate(`/showProgram/${id}`)}
            className="bg-[#0055D2] text-white py-1 px-2 sm:py-2 rounded flex-1"
          >
            عرض البرنامج
          </button>
          <button
            onClick={handlePayment}
            disabled={paymentIsLoading}
            className="bg-white border  border-[#0055D2] disabled:cursor-not-allowed disabled:bg-blue-300 font-semibold text-[#0055D2] py-1 px-2 sm:py-2 rounded flex-1"
          >
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
