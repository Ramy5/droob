import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Axios } from "../utils/apiHandler";

const FacilityTraining = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get("/landing/footer").then((res) => {
      setData(res.data.data.item);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      city: "",
      phone: "",
      email: "",
      trainingRequest: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      companyName: Yup.string().required("اسم المنشأة مطلوب"),
      city: Yup.string().required("المدينة مطلوبة"),
      phone: Yup.string()
        .matches(/^\d{10,15}$/, "رقم الهاتف غير صالح")
        .required("رقم الهاتف مطلوب"),
      email: Yup.string()
        .email("البريد الإلكتروني غير صالح")
        .required("البريد الإلكتروني مطلوب"),
      trainingRequest: Yup.string().required("الوصف مطلوب"),
    }),
    onSubmit: (values, { resetForm }) => {
      const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: values.name,
        company: values.companyName,
        city: values.city,
        phone: values.phone,
        email: values.email,
        message: values.trainingRequest,
        to_email: data?.email,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          toast.success("تم إرسال النموذج بنجاح!");
          resetForm();
        })
        .catch((error) => {
          console.error("فشل إرسال النموذج:", error);
        });
    },
  });

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h2 className="mb-8 text-xl font-bold text-center">تدريب المنشآت</h2>
      <form dir="rtl" onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              الاسم
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-sm text-red-500">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              اسم المنشأة
            </label>
            <input
              type="text"
              name="companyName"
              className="w-full p-2 border border-gray-300 rounded"
              {...formik.getFieldProps("companyName")}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <p className="text-sm text-red-500">
                {formik.errors.companyName}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              المدينة
            </label>
            <input
              type="text"
              name="city"
              className="w-full p-2 border border-gray-300 rounded"
              {...formik.getFieldProps("city")}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-sm text-red-500">{formik.errors.city}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              رقم الجوال
            </label>
            <input
              type="text"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-sm text-red-500">{formik.errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            وصف الاحتياج التدريبي
          </label>
          <textarea
            name="trainingRequest"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("trainingRequest")}
          ></textarea>
          {formik.touched.trainingRequest && formik.errors.trainingRequest && (
            <p className="text-sm text-red-500">
              {formik.errors.trainingRequest}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
          className={`w-full transition-all duration-300 py-2 text-white rounded bg-[#0055D2] hover:bg-[#0054d2d5] disabled:cursor-not-allowed disabled:opacity-50`}
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default FacilityTraining;
