import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import map from "../assets/map.png";
import contact from "../assets/contact/time.png";
import phone from "../assets/contact/phone.png";
import email from "../assets/contact/location.png";
import contactHero from "../assets/contactHero.png";
import HeaderImage from "./HeaderImage";
import { Form, Formik } from "formik";
import { Axios } from "../utils/apiHandler";
import { toast } from "react-toastify";

const ContactUs2 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("🚀 ~ ContactUs2 ~ data:", data);
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  };

  useEffect(() => {
    Axios.get(`/landing/footer`).then((res) => {
      setData(res.data?.data?.item);
    });
  }, []);

  const handleSubmit = async (values) => {
    console.log("🚀 ~ handleSubmit ~ values:", values);
    const formatValues = {
      name: values.name,
      phone: values.phoneNumber,
      email: values.email,
      message: values.message,
    };

    setIsLoading(true);
    await Axios.post(`/landing/order`, formatValues).finally(() =>
      setIsLoading(false)
    );
    toast.success("تم ارسال البيانات بنجاح");
  };

  return (
    <div data-aos="fade-up" dir="rtl">
      {/* Contact2 Hero */}
      <HeaderImage img={contactHero} title="تواصل معنا" />

      {/* Contact2 Form */}
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        className=" md:pt-28 md:pb-52"
      >
        {({ values, handleChange }) => {
          return (
            <Form>
              <div className="flex flex-col gap-16 p-10 bg-gray-50 md:flex-row justify-evenly">
                <div>
                  <h5 className="text-[#0055D2] text-xl font-bold mb-6">
                    إتصل بنا
                  </h5>
                  <h1 className="text-3xl font-bold leading-normal">
                    نسعد بالتواصل معك و الإجابة على استفساراتك
                  </h1>
                  <p className="mt-4 text-gray-500">
                    نحن هنا لمساعدتك! إذا كان لديك أي استفسار أو ترغب في حجز
                    إستشارة و معرفة المزيد عن
                    <br /> خدماتنا، لا تتردد في التواصل معنا من خلال ملء
                    الإستمارة التالية:
                  </p>
                  <div className="pt-20">
                    <div className="grid gap-4 mb-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block pb-3 font-medium"
                        >
                          الإسم
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="أدخل اسمك"
                          className="w-full p-2 border border-gray-300 rounded outline-none"
                          onChange={handleChange}
                          value={values.name}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block pb-3 font-medium"
                        >
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="عنوان بريدك الإلكتروني"
                          className="w-full p-2 border border-gray-300 rounded outline-none"
                          onChange={handleChange}
                          value={values.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 mb-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block pb-3 font-medium"
                        >
                          رقم الهاتف
                        </label>
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="+ 966 "
                          className="w-full p-2 border border-gray-300 rounded outline-none"
                          onChange={handleChange}
                          value={values.phoneNumber}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block pb-3 font-medium"
                        >
                          الخدمة
                        </label>
                        <select
                          className="w-full p-2 text-blue-800 border border-gray-300 rounded outline-none"
                          id="service"
                          name="service"
                          onChange={handleChange}
                          value={values.service}
                          required
                        >
                          <option value="">اختر خدمة</option>
                          <option value="consultation">حجز إستشارة</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block pb-3 font-medium"
                      >
                        الرسالة
                      </label>
                      <textarea
                        rows="4"
                        cols="50"
                        id="message"
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded outline-none resize-none"
                        onChange={handleChange}
                        value={values.message}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="items-center w-full py-3 font-semibold text-white bg-blue-800 border rounded-lg"
                    >
                      إرسال
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <img src={map} alt="Map" />
                  <div className="flex items-center gap-4 p-6 bg-white">
                    <img src={phone} alt="Work Time" />
                    <div className="flex flex-col gap-2">
                      <p className="text-blue-start">مواعيد العمل</p>
                      <p>
                        من السبت إلى الخميس من الساعة 9ص حتى 12م تعمل فروع حفر{" "}
                        <br />
                        الباطن والمصيف على مدار 24 ساعة
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-white">
                    <img src={phone} alt="Work Time" />
                    <div className="flex flex-col gap-2">
                      <p className="text-blue-start">رقم الهاتف</p>
                      <p>{data?.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-white">
                    <img src={email} alt="Email" />
                    <div className="flex flex-col gap-2">
                      <p className="text-blue-start">البريد الإلكتروني</p>
                      <p>{data?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactUs2;
