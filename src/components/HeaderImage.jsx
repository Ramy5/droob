import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderImage = ({ img, title, subTitle }) => {
  return (
    <div className="relative">
      {/* Image */}
      <img src={img} alt="about" className="w-full h-auto" />
      {/* Text on top of the image */}
      <div className="absolute inset-0 flex items-center justify-between px-12 md:px-28">
        <h1 className="text-lg font-bold text-white lg:text-3xl md:text-6xl">
          {title}
          <p className="mt-6 text-xs font-thin text-white md:text-lg">
            <NavLink to="/">
              <span className="text-gray-400 cursor-pointer"> الرئيسية</span>
            </NavLink>{" "}
            / {title} {subTitle}
          </p>
        </h1>
      </div>
    </div>
  );
};

HeaderImage.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
};

export default HeaderImage;
