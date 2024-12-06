import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import contactHero from "../assets/contactHero.png";

const ContactUs1 = () => {
  const validationSchema = Yup.object({
    customerType: Yup.string().required("يرجى اختيار نوع العميل"),
    programName: Yup.string().required("يرجى اختيار اسم البرنامج"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صحيح")
      .required("يرجى إدخال البريد الإلكتروني"),
    phoneNumber: Yup.string().required("يرجى إدخال رقم الهاتف"),
    country: Yup.string().required("يرجى إدخال الدولة"),
    purpose: Yup.string().required("يرجى اختيار الغرض من الرسالة"),
    message: Yup.string().required("يرجى إدخال الرسالة"),
  });

  const formik = useFormik({
    initialValues: {
      customerType: "",
      programName: "",
      email: "",
      phoneNumber: "",
      country: "",
      purpose: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted data:", values);
    },
  });
  return (
    <div data-aos="fade-up" dir="rtl">
      {/* Contact2 Hero */}
      <div className="relative ">
        {/* Image */}
        <img src={contactHero} alt="about" className="w-full h-auto" />

        {/* Text on top of the image */}
        <div className="absolute inset-0 flex items-center justify-between px-10 md:px-28 ">
          <h1 className="text-2xl font-bold text-white md:text-6xl">
            تواصل معنا{" "}
            <p className="mt-6 text-xs font-thin text-white md:text-lg">
              <NavLink to="/">
                <span className="text-gray-400 cursor-pointer"> الرئيسية</span>
              </NavLink>{" "}
              <NavLink to="/support-and-communication">
                <span className="text-gray-400 cursor-pointer">
                  / الدعم و التواصل
                </span>
              </NavLink>
              / تواصل معنا
            </p>
          </h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-8 md:py-20 bg-gray-50">
        <form
          onSubmit={formik.handleSubmit}
          className="mx-10 px-6 py-6 md:py-16 md:px-28 bg-[#EDF4FF] w-auto"
        >
          <div className="grid gap-4 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="customerType" className="block pb-3 font-medium">
                نوع العميل
              </label>
              <select
                id="customerType"
                name="customerType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.customerType}
                className="w-full p-3 border border-gray-300 rounded outline-none"
              >
                <option value="">اختر من القائمة</option>
                <option value="نوع1">نوع1</option>
                <option value="نوع2">نوع2</option>
              </select>
              {formik.touched.customerType && formik.errors.customerType && (
                <p className="text-red-500">{formik.errors.customerType}</p>
              )}
            </div>
            <div>
              <label htmlFor="programName" className="block pb-3 font-medium">
                اسم البرنامج
              </label>
              <select
                id="programName"
                name="programName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.programName}
                className="w-full p-3 border border-gray-300 rounded outline-none"
              >
                <option value="">اختر من القائمة</option>
                <option value="برنامج1">برنامج1</option>
                <option value="برنامج2">برنامج2</option>
              </select>
              {formik.touched.programName && formik.errors.programName && (
                <p className="text-red-500">{formik.errors.programName}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block pb-3 font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block pb-3 font-medium">
                رقم الهاتف
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="أدخل رقم الهاتف"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-red-500">{formik.errors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="country" className="block pb-3 font-medium">
                الدولة
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="أدخل الدولة"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500">{formik.errors.country}</p>
              )}
            </div>
            <div>
              <label htmlFor="purpose" className="block pb-3 font-medium">
                الغرض من الرسالة
              </label>
              <select
                id="purpose"
                name="purpose"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purpose}
                className="w-full p-3 border border-gray-300 rounded outline-none"
              >
                <option value="">اختر من القائمة</option>
                <option value="الغرض1">الغرض1</option>
                <option value="الغرض2">الغرض2</option>
              </select>
              {formik.touched.purpose && formik.errors.purpose && (
                <p className="text-red-500">{formik.errors.purpose}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block pb-3 font-medium">
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full p-2 border border-gray-300 rounded outline-none resize-none"
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500">{formik.errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="items-center px-20 py-3 font-semibold text-white bg-blue-800 border rounded-lg"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs1;
