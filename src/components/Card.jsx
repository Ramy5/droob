import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../utils/apiHandler";

const Card = ({ icon, name, desc, button, img, price, date, id }) => {
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
    <div className="flex flex-col justify-between items-center bg-white border border-gray-200 rounded-lg shadow-md mb-6 w-[320px]">
      {/* Image */}
      <img
        src={icon}
        alt="Course Image"
        className="object-cover w-full h-40 mb-4 rounded-t-lg"
      />

      {/* Card Content */}
      <div className="w-full p-5 text-right">
        <h2 className="mb-2 text-lg font-bold">{name}</h2>
        <p className="mb-4 text-sm text-gray-600">{desc}</p>

        {/* Rating */}
        <div className="flex items-center justify-start mb-4">
          <img src={img} alt="Rating" />
          <p className="text-[#616161] mr-1">42/862 تقييم</p>
        </div>

        {/* Course Information */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#0055D2] font-semibold">{price}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handlePayment}
            disabled={paymentIsLoading}
            className="bg-white border disabled:cursor-not-allowed disabled:bg-blue-300 border-[#0055D2] font-semibold text-[#0055D2] px-4 py-2 rounded flex-1"
          >
            التسجيل
          </button>
          <button
            onClick={() => navigate(`/showProgram/${id}`)}
            className="bg-[#0055D2] text-white px-4 py-2 rounded flex-1"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  // rating: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
};

export default Card;
