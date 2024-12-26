import NavBar from "../components/ui/NavBar";
import FooterSection from "../components/sections/FooterSection";
import ContactUsSection from "../components/sections/ContactUsSection";
const ContactUsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center mt-24">
        <ContactUsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactUsPage;
