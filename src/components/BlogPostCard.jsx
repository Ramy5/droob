import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BlogPostCard = ({ obj }) => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <img
        src={obj.image}
        alt=""
        className="w-72 h-72"
        onClick={() => nav(`/blog/${obj.slug}`)}
      />
      <div className="flex flex-col gap-2">
        <p className="text-[#0055D2]">البرامج التأهيلية • 1 يناير2024</p>
        <h1 className="text-[#1A1A1A]">{obj?.title_ar}</h1>
        <p className="text-[#616161] flex items-center gap-1 text-wrap">
          <span dangerouslySetInnerHTML={{ __html: obj?.desc_ar }} />
          <span
            className="text-[#0055D2] underline cursor-pointer"
            onClick={() => nav(`/blog/${obj.slug}`)}
          >
            {" "}
            عرض المزيد
          </span>
        </p>
      </div>
    </div>
  );
};

// BlogPostCard.propTypes = {
//   obj: PropTypes.node.isRequired,
// };

export default BlogPostCard;
