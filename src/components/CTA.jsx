import { useNavigate } from "react-router-dom";
import cta from "../assets/CTA.png";
import whiteArrow from "../assets/whiteArrow.png";

const CTA = () => {
  const nav = useNavigate();
  return (
    <div
      data-aos="fade-up"
      dir="rtl"
      style={{
        backgroundImage: `url(${cta})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "420px",
        position: "relative",
      }}
      className="flex items-center justify-center min-w-full md:justify-start"
    >
      {/* White Box for Text */}
      <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] bg-white p-6 sm:p-10 rounded-lg shadow-lg mr-0 md:mr-12 mt-10">
        <div>
          <h5 className="text-[#0055D2] text-lg sm:text-xl font-bold mb-4 sm:mb-6">
            20 ٪ من المكالمات اليوم
          </h5>
          <h1 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
            احصل على خصم خاص عند اشتراكك لأول مرة في العضوية السنوية
          </h1>
          <p className="text-sm sm:text-base text-[#616161] mb-4">
            نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
            المطابع ودور النشر. كان لوريم إيبسوم
          </p>
          <button
            onClick={() => nav("support-and-communication/contact-us-phone")}
            className="flex gap-3 items-center bg-[#0055D2] py-2 sm:py-3 px-4 sm:px-6 border rounded-xl text-white"
          >
            اتصل بنا
            <img src={whiteArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
