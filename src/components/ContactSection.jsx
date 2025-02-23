import React, { useEffect, useState } from "react";
import textIcon from "../assets/support and communication/text-icon.png";
import pinIcon from "../assets/support and communication/pin-icon.png";
import phoneIcon from "../assets/support and communication/phone-icon.png";
import emailIcon from "../assets/support and communication/email-icon.png";
import formIcon from "../assets/support and communication/form-icon.png";
import whatsappIcon from "../assets/support and communication/whatsapp-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../utils/apiHandler";

const ContactSection = () => {
  const nav = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios("/landing/footer").then((res) => {
      setData(res.data.data.item);
    });
  }, []);

  return (
    <div className="p-5 bg-white md:p-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-5 md:p-16 bg-[#EDF4FF]">
        <div className="flex flex-col flex-1 bg-white border border-white rounded-lg">
          {/* first Column */}
          <div className="flex flex-col gap-2 p-8 text-right">
            <h3 className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer ">
              المحادثة الفورية
            </h3>

            <div className="flex items-center gap-5 ">
              <img src={textIcon} alt="" />
              <p className="mb-2 text-black">
                يمكننا مساعدتكم من خلال المحادثة الفورية{" "}
              </p>
            </div>

            <p className="font-bold text-black">
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
              <p className="mb-2 text-black">
                الرياض-حي البديعة طريق المدينة المنورة، ظهرة البديعة، الرياض
                12784هد
              </p>
            </div>
            <p className="font-bold text-black">
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
              <p className="text-black" dir="ltr">
                {data?.phone}
              </p>
            </div>

            <p className="font-bold text-black">
              الوقت المتوقع للرد اقل من دقيقة
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-[2] gap-10">
          <div className="flex flex-col items-center gap-10 md:flex-row ">
            {/* fourth Column */}
            <div className="flex flex-col items-center flex-1 p-8 text-center bg-white border rounded-lg md:p-20">
              <div className="mb-4 text-4xl text-blue-600">
                {/* Icon for email communication */}
                <img className="cursor-pointer" src={emailIcon} alt="" />
                {/* Use a suitable icon from FontAwesome */}
              </div>
              <h3 className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer mb-3">
                البريد الإلكتروني
              </h3>
              <p className="mb-2 text-lg font-extrabold text-gray-600">
                {data?.email}
              </p>
              <p className="text-black">
                من السبت الى الخميس من الساعة ٩ ص حتى ٥ مساءً
              </p>
            </div>
            {/* fifth Column */}
            <div className="flex flex-col items-center flex-1 px-24 py-8 text-center bg-white border rounded-lg md:p-20">
              <div className="mb-4 text-4xl text-blue-600">
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
              <p className="mb-2 text-lg font-extrabold text-gray-600">
                من خلال الفورم
              </p>
              <p className="text-black">طوال ايام الاسبوع، خدمة ٢٤ ساعة</p>
            </div>
          </div>

          {/* sixth Column */}
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center text-center bg-white border rounded-lg p-7">
              <div className="mb-4 text-4xl text-blue-600">
                {/* Icon for WhatsApp communication */}
                <img className="cursor-pointer" src={whatsappIcon} alt="" />
                {/* Use a suitable icon from FontAwesome */}
              </div>
              <h3 className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer mb-3">
                تواصل عبر الواتساب
              </h3>
              <p className="mb-2 text-lg font-extrabold text-gray-600">
                whatsappme.link
              </p>
              <p className="text-black">
                من السبت الى الخميس من الساعة ٩ ص حتى ٥ مساءً
              </p>
            </div>
            <Link
              to={"/facility-training"}
              className="flex flex-col items-center justify-center gap-4 text-center bg-white border rounded-lg p-7"
            >
              <img className="cursor-pointer" src={formIcon} alt="form" />
              <h3 className="text-lg font-bold text-[#0055D2] hover:underline cursor-pointer mb-3">
                تدريب المنشئات
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
