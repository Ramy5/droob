import whiteArrow from "../assets/whiteArrow.png";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";
import { Axios } from "../utils/apiHandler";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ most, title, semiTitle, pricing, desc }) => {
  const [paymentIsLoading, setPaymentIsLoading] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handlePayment = async () => {
    if (!user) {
      return navigate("/login");
    }

    setPaymentIsLoading(true);
    try {
      const response = await Axios.post("/landing/charge", {
        name: user.name,
        amount: pricing,
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
      className={`py-10 px-6 sm:px-10 bg-[#ffffff] relative ${
        most ? "h-[600px]" : "h-[550px]"
      }`}
    >
      {most && (
        <button className="bg-[#0055D2] absolute top-3 right-3 text-white text-center px-3 py-2 sm:px-5 sm:py-2">
          {most}
        </button>
      )}
      <div className={`text-center ${most ? "mt-12" : ""}`}>
        <h1 className="mb-2 text-lg font-bold sm:text-xl">{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: semiTitle }}
          className="text-xs sm:text-sm text-[#616161] mb-4"
        />
        <h1 className="text-[#0055D2] text-xl sm:text-2xl font-bold">
          {pricing} ر.س <sup>/مرة واحدة</sup>
        </h1>
        <hr className="mt-4 text-[#DADADA]" />
      </div>
      <div className="flex flex-col gap-4 mt-5 text-[#2C2C2C]">
        <div className="flex items-center gap-2 mb-2">
          <CheckIcon className="text-[#0055D2]" />
          <div
            className="text-xs leading-8 sm:text-sm"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
        <hr className="text-[#DADADA] mb-4" />
        <button
          onClick={handlePayment}
          disabled={paymentIsLoading}
          className="flex gap-3 justify-self-end items-center bg-[#0055D2] py-2 sm:py-3 px-4 sm:px-6 text-white justify-center disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          اشترك الان
          <img src={whiteArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.node.isRequired,
  semiTitle: PropTypes.node.isRequired,
  pricing: PropTypes.node.isRequired,
  most: PropTypes.node,
  desc: PropTypes.node.isRequired,
};

export default PricingCard;
