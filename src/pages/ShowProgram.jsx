import FAQs2 from "../components/FAQs2";
import img from "../assets/test.png";
import showProgramImg from "../assets/showProgramBG.png";
import HeaderImage from "../components/HeaderImage";
import { LuBarChart } from "react-icons/lu";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosCheckbox, IoMdPerson } from "react-icons/io";
import { useEffect, useState } from "react";
import { Axios } from "../utils/apiHandler";
import { redirect, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ReactPlayer from "react-player";
import { DateRange, Timeline, Timer, TimeToLeave } from "@mui/icons-material";

const ShowProgram = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [paymentIsLoading, setPaymentIsLoading] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    scrollTo(0, 0);
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handlePayment = async () => {
    if (!user) {
      return navigate("/login");
    }

    setPaymentIsLoading(true);
    try {
      const response = await Axios.post("/landing/charge", {
        name: user.name,
        amount: data.price,
        email: user.email,
        phone: user.phone,
      });

      const paymentUrl = response.data.data.url;

      if (paymentUrl && paymentUrl.startsWith("http")) {
        window.location.href = paymentUrl;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPaymentIsLoading(false);
    }
  };

  const handleWhatsappRedirect = () => {
    const phoneNumber = "+966544492820";
    const url = `https://wa.me/${phoneNumber.replace(/^\+/, "")}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    Axios.get(`/landing/course/${id}`)
      .then((res) => {
        const apiData = res.data.data;
        setData(apiData || {});
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div data-aos="fade-up" dir="rtl" className="">
      <HeaderImage img={showProgramImg} title={data?.name} subTitle="" />
      <div className="grid items-start gap-8 px-8 my-8 md:my-24 xl:grid-cols-3 md:px-28">
        <div className="col-span-2 p-6 bg-white rounded-lg shadow-lg xl:col-span-1">
          <h2 className="mb-4 text-xl">تفاصيل البرنامج التدريبي</h2>
          <p
            dangerouslySetInnerHTML={{ __html: data?.desc }}
            className="mb-6 leading-relaxed text-gray-700"
          />

          <hr className="block mb-6" />

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <LuBarChart className="text-2xl text-[#0055D2]" />
              <span className="font-semibold text-gray-700">
                عدد المستويات:
              </span>
              <span className="text-gray-700">{data?.number_of_evels}</span>
            </div>
            <div className="flex items-center gap-2">
              <LuBarChart className="text-2xl text-[#0055D2]" />
              <span className="font-semibold text-gray-700">
                مستوي البرنامج التدريبي:
              </span>
              <span className="text-gray-700">{data?.level}</span>
            </div>
            <div className="space-x-2">
              <DateRange className="text-2xl ml-2 text-[#0055D2]" />
              <span className="font-semibold text-gray-700">التاريخ</span>
              <ul className="grid grid-cols-2 pt-2 pr-6">
                {Array.isArray(data?.dates) ? (
                  data.dates.map((item, i) => <li key={i}>{item.date}</li>)
                ) : (
                  <li>No Dates Available</li>
                )}
              </ul>
            </div>
            <div className="">
              <Timer className="text-2xl text-[#0055D2]" />
              <span className="mr-2 font-semibold text-gray-700">الوقت</span>
              <ul className="grid grid-cols-2 pt-2 pr-6">
                {Array.isArray(data?.times) ? (
                  data.times.map((item, i) => <li key={i}>{item.time}</li>)
                ) : (
                  <li>No Times Available</li>
                )}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <RiVideoAddFill className="text-2xl text-[#0055D2]" />
              <span className="font-semibold text-gray-700">عدد الحصص:</span>
              <span className="text-gray-700">
                {data?.number_of_servings} حصة
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdPerson className="text-2xl text-[#0055D2]" />
              <span className="font-semibold text-gray-700">المدرب:</span>
              <span className="text-gray-700">
                {data?.lecturer?.name || ""}
              </span>
            </div>
          </div>

          <hr className="block mt-6" />

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">نوع البرنامج التدريبي:</span>
                <span className="text-gray-700">{data?.type}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">مكان الانعقاد:</span>
                <span className="text-gray-700">{data?.venue}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">مدة البرنامج التدريبي:</span>
                <span className="text-gray-700">{data?.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">
                  رقم اعتماد البرنامج التدريبي:
                </span>
                <span className="text-gray-700">{data?.number}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">حصص مباشرة:</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <span className="text-gray-700">مشاريع عملية:</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <span className="text-gray-700">شهادة تخرج:</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={paymentIsLoading}
            className="w-full py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-lg disabled:cursor-not-allowed disabled:bg-blue-300 hover:bg-blue-700"
          >
            احجز الان{" "}
          </button>
        </div>

        <div className="col-span-2">
          <div className="w-full rounded-lg">
            <div className="rounded-lg">
              {data?.url && (
                <ReactPlayer url={data?.url} controls width="100%" />
              )}
            </div>

            {/* Course Information */}
            <div className="mt-8">
              <h2 className="mb-8 text-2xl font-semibold text-gray-800">
                تعرف على البرنامج التدريبي
              </h2>

              <div
                dangerouslySetInnerHTML={{ __html: data?.know_the_course }}
              />

              {/** <h3 className="mb-4 text-lg font-semibold text-gray-800">
                ماذا ستتعلم؟
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700">
                خلال هذه الدورة الشاملة ستتعلم كل ما تحتاجه لتصبح مصمم واجهات
                أمامية محترفاً، بدءاً من الأساسيات وصولاً إلى التقنيات المتقدمة.
              </p>
              <ul className="grid gap-6 space-y-4 leading-relaxed text-gray-700 list-decimal list-inside md:grid-cols-2">
                <li>
                  <strong>HTML و CSS:</strong>
                  <ul className="ml-6 list-disc list-inside">
                    <li>فهم أسس تصميم الويب باستخدام CSS.</li>
                    <li>إنشاء تأثيرات وتحسينات في جميع العناصر.</li>
                  </ul>
                </li>
                <li>
                  <strong>JavaScript</strong>
                  <ul className="ml-6 list-disc list-inside">
                    <li>التعامل مع DOM وإنشاء تفاعلات مخصصة.</li>
                    <li>
                      إدارة البيانات باستخدام التخزين المحلي (local storage).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>React.js</strong>
                  <ul className="ml-6 list-disc list-inside">
                    <li>فهم أسس بناء مكونات React.</li>
                    <li>التعامل مع إدارة الحالة (State Management).</li>
                    <li>إنشاء تكاملات API.</li>
                  </ul>
                </li>
                <li>
                  <strong>أدوات المطورين</strong>
                  <ul className="ml-6 list-disc list-inside">
                    <li>
                      Git لإدارة المشاريع و GitHub لعرض المشاريع، بالإضافة إلى
                      بيئة التطوير باستخدام Webpack و Babel.
                    </li>
                  </ul>
                </li>
              </ul> */}

              <p className="mt-6 leading-relaxed text-gray-600">
                بنهاية الدورة، ستكون قادراً على تصميم وتطوير مواقع ويب وتطبيقات
                كاملة تفاعلية.
              </p>
            </div>

            <div
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>

          <div className="p-4 my-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              المدرب لهذا البرنامج التدريبي
            </h2>
            <div className="flex items-center">
              {/* Instructor Image Placeholder */}
              <div className="h-32 ml-6 bg-gray-300 rounded-full w-52 md:w-24 md:h-24"></div>

              {/* Instructor Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {data?.lecturer?.name}
                </h3>
                <p className="text-gray-600">{data?.lecturer?.title}</p>
              </div>
            </div>

            {/* Instructor Bio */}
            <p className="mt-4 leading-relaxed text-gray-700">
              {data?.lecturer?.desc}
            </p>
          </div>
          <div>
            <h2 className="my-8 text-lg font-semibold text-gray-800">
              الاسْلة المتكررة
            </h2>
            <div
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: data?.faq }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProgram;
