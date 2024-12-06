import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TrainingProgramsCard = ({ icon, name, desc, button, img }) => {
  return (
    <div className="flex flex-col justify-center items-end bg-[#ffffff] py-4 px-5 sm:px-8 pl-10 sm:pl-16">
      <img src={icon} alt="" className="w-8 sm:w-10" />
      <div className="flex flex-col items-end justify-center w-full mt-4">
        <h2
          dangerouslySetInnerHTML={{ __html: name }}
          className="w-full mb-2 text-lg font-medium text-right sm:text-xl"
        />
        <p
          dangerouslySetInnerHTML={{ __html: desc }}
          className="w-full mb-4 text-xs text-right sm:text-sm"
        />
        <Link
          to={"/study-programs"}
          className="flex items-center gap-2 text-[#0055D2] text-xs sm:text-sm"
        >
          <img src={img} alt="arrow" className="w-4 sm:w-5" /> {button}
        </Link>
      </div>
    </div>
  );
};
TrainingProgramsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
};
export default TrainingProgramsCard;
