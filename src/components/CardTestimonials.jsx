import PropTypes from "prop-types";
import { FaCircleUser } from "react-icons/fa6";
const CardTestimonials = ({ title, image, name, desc }) => {
  return (
    <div
      dir="rtl"
      className=" py-6 px-5 flex flex-col w-[95%] my-8 gap-5 bg-white text-[#2C2C2C] cursor-pointer"
    >
      <div dangerouslySetInnerHTML={{ __html: title }} />
      <div className="flex items-center gap-3">
        <img src={image} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <h3> {name} </h3>
          <p className="text-[#616161]">{desc}</p>
        </div>
      </div>
    </div>
  );
};
CardTestimonials.PropTypes = {
  title: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
};
export default CardTestimonials;
