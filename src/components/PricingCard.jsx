import whiteArrow from "../assets/whiteArrow.png";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";

const PricingCard = ({ most, title, semiTitle, pricing, desc }) => {
  return (
    <div
      className={`py-10 px-6 sm:px-10 bg-[#ffffff] relative ${
        most ? "h-[630px]" : "h-[550px]"
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
        <button className="flex gap-3 justify-self-end items-center bg-[#0055D2] py-2 sm:py-3 px-4 sm:px-6 text-white justify-center">
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
