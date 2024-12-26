import NavBar from "../components/ui/NavBar";
import FirstSection from "../components/sections/FirstSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";
import FourthSection from "../components/sections/FourthSection";
import FaqSection from "../components/sections/FaqSection";
import FooterSection from "../components/sections/FooterSection";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default MainPage;
