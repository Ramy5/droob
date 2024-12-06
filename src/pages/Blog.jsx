import React, { useEffect, useState } from "react";
import BlogPostCard from "../components/BlogPostCard";
import { NavLink, useNavigate } from "react-router-dom";
import blogPosts from "../assets/blog posts/blogPosts";
import blogImg from "../assets/blog-img.png";
import HeaderImage from "../components/HeaderImage";
import { Axios } from "../utils/apiHandler";
import Loading from "../components/Loading";

const Blog = () => {
  const nav = useNavigate();

  const [blogPosts, setBlogPosts] = useState([]);
  console.log("🚀 ~ blogs ~ blogs:", blogPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("/landing/articles")
      .then((res) => {
        setBlogPosts(res.data.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div data-aos="fade-up" dir="rtl" className="bg-[#F8FBFB]">
      <HeaderImage img={blogImg} title="المدونة" />

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-8 md:mx-28">
        أحدث المدونات
      </h1>
      <div className="flex flex-col justify-between gap-10 mx-8 mb-20 xl:flex-row md:mx-28">
        <div className="flex flex-col flex-1 gap-3">
          <img
            src={blogPosts[0]?.image}
            alt=""
            className="h-72"
            onClick={() => nav(`/blog/${blogPosts[0].slug}`)}
          />
          <p className="text-[#0055D2]">البرامج التأهيلية • 1 يناير2024</p>
          <h1 className="text-[#1A1A1A]">{blogPosts[0]?.title_ar}</h1>

          <p className="text-[#616161] flex items-center gap-1 text-wrap">
            {/* في بعض الحالات وفي حال عدم تلقي العلاج بالوقت المناسب، يؤدي تضرر لب
            السن إلى تحلله وبالتالي إعطاء الفرصة للبكتيريا بالنمو والتكاثر مكان
            اللب، وهذه البكتيريا إلى جانب التسوس الموجود بالأصل من شأنهما أن
            يُؤديا إلى الإصابة بالالتهاب أو خراج السن كما ذكرنا سابقًا، وهذا ما
            يجعل استئصال لب السن ضروريًا */}
            <span dangerouslySetInnerHTML={{ __html: blogPosts[0]?.desc_ar }} />
            <span
              className="text-[#0055D2] underline cursor-pointer"
              onClick={() => nav(`/blog/${blogPosts[0].slug}`)}
            >
              {" "}
              عرض المزيد
            </span>
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-10 md:flex-row lg:flex-col">
          {blogPosts?.slice(1, 4).map((item) => {
            return (
              <div
                className="flex flex-col gap-5 cursor-pointer lg:flex-row"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="min-w-64 h-36"
                  onClick={() => nav(`/blog/${item.slug}`)}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#0055D2]">تطوير الذات • 1 يناير2024</p>
                  <h1 className="text-[#1A1A1A]">{item?.title_ar}</h1>
                  <p className="text-[#616161] flex items-center gap-1 text-wrap">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item?.desc_ar,
                      }}
                    />
                    <span
                      className="text-[#0055D2] underline cursor-pointer"
                      onClick={() => nav(`/blog/${item.slug}`)}
                    >
                      {" "}
                      عرض المزيد
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-8 md:mx-28">
        المقالات الرئيسية
      </h1>

      <div className="grid grid-cols-1 gap-8 mx-8 mb-20 md:grid-cols-2 lg:grid-cols-3 md:mx-28">
        {blogPosts?.slice(4, 10).map((item) => {
          return <BlogPostCard obj={item} key={item.id} />;
        })}
      </div>

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-8 md:mx-28">
        المقالات الأكثر قراءة
      </h1>

      <div className="grid grid-cols-1 gap-8 pb-20 mx-8 md:grid-cols-2 lg:grid-cols-3 md:mx-28">
        {blogPosts?.slice(10).map((item) => {
          return <BlogPostCard obj={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
