import React from "react";
import textIcon from "../assets/support and communication/text-icon.png";
import pinIcon from "../assets/support and communication/pin-icon.png";
import phoneIcon from "../assets/support and communication/phone-icon.png";
import emailIcon from "../assets/support and communication/email-icon.png";
import formIcon from "../assets/support and communication/form-icon.png";
import whatsappIcon from "../assets/support and communication/whatsapp-icon.png";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const nav = useNavigate();
  return (
    <div className="bg-white p-5 md:p-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-5 md:p-16 bg-[#EDF4FF]">
        <div className="flex flex-col flex-1 border border-white rounded-lg bg-white">
          {/* first Column */}
          <div className="flex flex-col gap-2 p-8 text-right">
            <h3 className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer ">
              المحادثة الفورية
            </h3>

            <div className="flex items-center gap-5 ">
              <img src={textIcon} alt="" />
              <p className="text-black mb-2">
                يمكننا مساعدتكم من خلال المحادثة الفورية{" "}
              </p>
            </div>

            <p className="text-black font-bold">
              من السبت الى الخميس من الساعة ٩ ص حتى ٥ مساءً
            </p>
          </div>

          {/* second Column */}
          <div className="flex flex-col gap-2 p-8 text-right">
            <h3 className="text-lg font-bold border-t pt-8 text-[#0055D2] hover:underline cursor-pointer ">
              فروعنا
            </h3>

            <div className="flex items-center gap-5 ">
              <img src={pinIcon} alt="" />
              <p className="text-black mb-2">
                الرياض-حي البديعة طريق المدينة المنورة، ظهرة البديعة، الرياض
                12784هد
              </p>
            </div>
            <p className="text-black font-bold">
              من السبت الى الخميس من الساعة ٩ ص حتى ٥ مساءً
            </p>
          </div>

          {/* third Column */}
          <div className="flex flex-col gap-2 p-8 text-right ">
            <h3
              className="text-lg font-bold border-t pt-8 text-[#0055D2] hover:underline cursor-pointer "
              onClick={() => nav("/support-and-communication/contact-us-phone")}
            >
              اتصل بنا
            </h3>
            <div className="flex items-center gap-5 ">
              <img src={phoneIcon} alt="" />
              <p className="text-black">+9660900-78601 </p>
            </div>

            <p className="text-black font-bold">
              الوقت المتوقع للرد اقل من دقيقة
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-[2] gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10 ">
            {/* fourth Column */}
            <div className="flex-1 flex flex-col items-center text-center border rounded-lg bg-white p-8 md:p-20">
              <div className="text-blue-600 text-4xl mb-4">
                {/* Icon for email communication */}
                <img className="cursor-pointer" src={emailIcon} alt="" />
                {/* Use a suitable icon from FontAwesome */}
              </div>
              <h3 className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer mb-3">
                البريد الإلكتروني
              </h3>
              <p className="text-gray-600 mb-2 font-extrabold text-lg">
                futuredroop@gmail.com
              </p>
              <p className="text-black">
                من السبت الى الخميس من الساعة ٩ ص حتى ٥ مساءً
              </p>
            </div>
            {/* fifth Column */}
            <div className="flex-1 flex flex-col items-center text-center border rounded-lg bg-white py-8 px-24 md:p-20">
              <div className="text-blue-600 text-4xl mb-4">
                {/* Icon for form communication */}
                <img
                  className="cursor-pointer"
                  src={formIcon}
                  alt=""
                  onClick={() =>
                    nav("/support-and-communication/contact-us-form")
                  }
                />
                {/* Use a suitable icon from FontAwesome or similar */}
              </div>
              <h3
                className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer mb-3"
                onClick={() =>
                  nav("/support-and-communication/contact-us-form")
                }
              >
                تواصل معنا
              </h3>
              <p className="text-gray-600 mb-2 font-extrabold text-lg">
                من خلال الفورم
              </p>
              <p className="text-black">طوال ايام الاسبوع، خدمة ٢٤ ساعة</p>
            </div>
          </div>

          {/* sixth Column */}
          <div className="flex flex-col items-center text-center border rounded-lg bg-white p-7">
            <div className="text-blue-600 text-4xl mb-4">
              {/* Icon for WhatsApp communication */}
              <img className="cursor-pointer" src={whatsappIcon} alt="" />
              {/* Use a suitable icon from FontAwesome */}
            </div>
            <h3 className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer mb-3">
              تواصل عبر الواتساب
            </h3>
            <p className="text-gray-600 mb-2 font-extrabold text-lg">
              whatsappme.link
            </p>
            <p className="text-black">
              من السبت الى الخميس من الساعة ٩ ص حتى ٥ مساءً
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
