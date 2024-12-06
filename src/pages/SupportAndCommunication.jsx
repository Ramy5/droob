import ContactSection from "../components/ContactSection";
import contactHero from "../assets/support and communication/contactHero.png";
import HeaderImage from "../components/HeaderImage";

const SupportAndCommunication = () => {
  return (
    <div data-aos="fade-up" dir="rtl" className="bg-[#F8FBFB]">
      <HeaderImage img={contactHero} title="تواصل معنا" />
      <ContactSection />
    </div>
  );
};

export default SupportAndCommunication;
