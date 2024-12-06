import FAQs2 from "../components/FAQs2";
import img from "../assets/test.png";
import showProgram from "../assets/showProgramBG.png";
import HeaderImage from "../components/HeaderImage";
import { LuBarChart } from "react-icons/lu";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosCheckbox, IoMdPerson } from "react-icons/io";
import { useEffect, useState } from "react";
import { Axios } from "../utils/apiHandler";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ShowProgram = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleWhatsappRedirect = () => {
    const phoneNumber = "+966544492820";
    const url = `https://wa.me/${phoneNumber.replace(/^\+/, "")}`;
    window.open(url, "_blank");
  };

  const questions = [
    {
      id: 1,
      question: "المستوى الأول : أساسيات تطوير الويب",
      answer:
        "من المهم الاعتناء بالمريض، وأن يتبعه المريض، لكن ذلك سيحدث في وقت يكون فيه الكثير من العمل والألم.",
    },
    {
      id: 2,
      question: "المستوى الثاني : بناء هياكل وتنسيقات المواقع",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 3,
      question: "المستوى الثالث : تطوير مواقع ديناميكية",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 4,
      question: "المستوى الرابع : إتقان React.js وأدوات المطورين",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 5,
      question: "مستوى الخامس : مشاريع عملية وتطبيقات واقعية",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
  ];

  const questions2 = [
    {
      id: 1,
      question: "لمن تناسب هذه الدورة؟",
      answer:
        "من المهم الاعتناء بالمريض، وأن يتبعه المريض، لكن ذلك سيحدث في وقت يكون فيه الكثير من العمل والألم.",
    },
    {
      id: 2,
      question: "هل أحتاج إلى أي خبرة مسبقة للالتحاق بالدورة؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 3,
      question: "هل أحصل على شهادة بعد إتمام الدورة؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 4,
      question: "كيف يمكنني الدفع؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 5,
      question: "ماذا لو واجهتني مشكلة أثناء التعلم؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
  ];

  useEffect(() => {
    Axios.get(`/landing/course/${id}`)
      .then((res) => {
        const apiData = res.data.data;
        setData(apiData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div data-aos="fade-up" dir="rtl" className="">
      <HeaderImage img={showProgram} title="دورة تطوير تطبيقات الهاتف  " />
      <div className="grid items-start gap-8 px-8 my-8 md:my-24 xl:grid-cols-3 md:px-28">
        <div className="col-span-2 p-6 bg-white rounded-lg shadow-lg xl:col-span-1">
          <h2 className="mb-4 text-xl">تفاصيل الكورس</h2>
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
              <RiVideoAddFill className="text-2xl text-[#0055D2]" />
              <span className="font-semibold text-gray-700">عدد الحصص:</span>
              <span className="text-gray-700">
                {data?.number_of_servings} حصة
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdPerson className="text-2xl text-[#0055D2]" />
              <span className="font-semibold text-gray-700">المدرب:</span>
              <span className="text-gray-700">{data?.lecturer?.name}</span>
            </div>
          </div>

          <hr className="block mt-6" />

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <span className="text-gray-700">حصص مباشرة</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <span className="text-gray-700">مشاريع عملية</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckbox className="text-2xl text-[#0055D2]" />
              <span className="text-gray-700">شهادة تخرج</span>
            </div>
          </div>

          <button
            onClick={handleWhatsappRedirect}
            className="w-full py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            اشترك الآن
          </button>
        </div>

        <div className="col-span-2">
          <div className="w-full rounded-lg">
            <div className="rounded-lg">
              <img
                src={data?.image}
                alt="Course Video"
                className="object-cover w-full max-h-[28rem]"
              />
            </div>

            {/* Course Information */}
            <div className="mt-8">
              <h2 className="mb-8 text-2xl font-semibold text-gray-800">
                تعرف على الكورس
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
              المدرب لهذا الكورس
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
