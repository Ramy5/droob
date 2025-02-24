import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for routing
import logoBlack from "../assets/logo-black.png";
import { toast } from "react-toastify";
import { Axios } from "../utils/apiHandler";

const Login = () => {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string().required("رقم الهاتف مطلوب"),
    password: Yup.string()
      .min(8, "يجب أن تكون كلمة المرور 8 أحرف على الأقل")
      .required("كلمة المرور مطلوبة"),
  });

  // Form submission handler
  const handleSubmit = async (values) => {
    try {
      const data = await Axios.post("/landing/login", values);
      toast.success("تم الاشتراك بنجاح! سيتم التواصل معك في اقرب وقت");
      localStorage.setItem("user", JSON.stringify(data?.data?.data?.user));
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      toast.error("حدث خطأ أثناء الاشتراك بنجاح. حاول مرة أخرى.");
    }
  };

  return (
    <div
      dir="rtl"
      data-aos="fade-up"
      className="max-w-lg mx-5 md:mx-auto  bg-[#EDF4FF] shadow-lg rounded-lg p-6 my-20"
    >
      <div className="flex flex-col items-start justify-center gap-3">
        <img className="w-80" src={logoBlack} alt="" />
        <h2 className="text-2xl text-right text-[#0B236B] mb-4">
          تسجيل الدخول
        </h2>
        <p className="text-right text-[#616161] mb-6">
          من فضلك أدخل بيانات تسجيل الدخول الخاصة بك
        </p>
      </div>

      <Formik
        initialValues={{ email: "", password: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                البريد الإلكتروني
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-right text-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                رقم الهاتف
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 text-right border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="mt-1 text-sm text-right text-red-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                كلمة المرور
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="mt-1 text-sm text-right text-red-500"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to={"/forgetPassword"}
                className="text-[#0055D2] cursor-pointer hover:underline"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0055D2] text-white p-3 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              تسجيل الدخول
            </button>
          </Form>
        )}
      </Formik>

      {/* Register Link */}
      <div className="mt-4 text-center">
        <p className="text-sm ml-3 text-[#616161]">
          ليس لديك حساب؟
          <Link
            to="/registerForm"
            className="text-[#0055D2] font-bold hover:underline mr-3"
          >
            أنشئ حساب الآن
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
