import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for routing
import logoBlack from "../assets/logo-black.png";
import { toast } from "react-toastify";
import { Axios } from "../utils/apiHandler";

const ForgetPassword = () => {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .min(8, "يجب أن تكون كلمة المرور 8 أحرف على الأقل")
      .required("كلمة المرور مطلوبة"),
    password_confirmation: Yup.string()
      .min(8, "يجب أن تكون كلمة المرور 8 أحرف على الأقل")
      .required("كلمة المرور مطلوبة"),
  });

  // Form submission handler
  const handleSubmit = async (values) => {
    try {
      await Axios.post("/client/reset-password", values);
      toast.success("تم تغيير كلمة السر بنجاح!");
      setTimeout(() => {
        navigate("/login");
      }, 500); // Redirect after 2 seconds
    } catch (error) {
      toast.error("حدث خطأ أثناء تغيير كلمة السر. حاول مرة أخرى.");
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
          تغيير كلمة السر{" "}
        </h2>
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
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
            <div>
              <label
                htmlFor="password_confirmation"
                className="block text-right mb-3 text-[#2C2C2C]"
              >
                تاكيد كلمة المرور
              </label>
              <Field
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password_confirmation"
                component="div"
                className="mt-1 text-sm text-right text-red-500"
              />
            </div>

            {/* Forgot Password Link */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0055D2] text-white p-3 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ارسال
            </button>
          </Form>
        )}
      </Formik>

      {/* Register Link */}
      <div className="mt-4 text-center">
        <p className="text-sm ml-3 text-[#616161]">
          لديك كلمة السر{" "}
          <Link
            to="/login"
            className="text-[#0055D2] font-bold hover:underline mr-3"
          >
            تسجيل الدخول{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
