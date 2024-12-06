import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import WhoWeAre from "../pages/WhoWeAre.jsx";
import SupportAndCommunication from "../pages/SupportAndCommunication.jsx";
import Blog from "../pages/Blog.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import StudyPrograms from "../pages/StudyPrograms.jsx";
import StudyCourses from "../pages/StudyCourses.jsx";
import { NavbarProvider } from "../contexts/NavBarContext";
import BlogPost from "../pages/BlogPost.jsx";
import ContactUs1 from "../components/ContactUs1.jsx";
import ContactUs2 from "../components/ContactUs2.jsx";
import Error from "../pages/error/Error.jsx";
import Test from "../pages/ShowProgram.jsx";
import AOS from "aos";
import RegisterForm from "../pages/RegisterForm.jsx";
import ForgetPassword from "../pages/ForgetPassword.jsx";
import ShowProgram from "../pages/ShowProgram.jsx";

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 350, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "study-programs",
        element: <StudyPrograms />,
      },
      {
        path: "study-courses",
        element: <StudyCourses />,
      },
      {
        path: "who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "showProgram/:id",
        element: <ShowProgram />,
      },
      {
        path: "support-and-communication",
        element: <SupportAndCommunication />,
      },
      {
        path: "support-and-communication/contact-us-form",
        element: <ContactUs1 />,
      },
      {
        path: "support-and-communication/contact-us-phone",
        element: <ContactUs2 />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPost />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registerForm",
        element: <RegisterForm />,
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <NavbarProvider>
      <RouterProvider router={router} />
    </NavbarProvider>
  );
};

export default AppRouter;
