import AboutBox from "../ui/AboutBox";
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";

const FourthSection = () => {
  const navigate = useNavigate();

  const navigateToListRental = () => {
    navigate("/list-rental");
  };

  return (
    <div className="flex flex-row items-start justify-between mx-24 mt-48">
      <div className="flex flex-col items-start justify-start gap-8">
        <AboutBox
          title={"List your real estate"}
          text={
            "Do you have a house, apartment, any real estate you want to list, feel free to list yours on our website, we offer wide range of details and info that you can upload"
          }
          link={"More Info"}
        />
        <Button text={"List Now"} onClick={navigateToListRental} />
      </div>
      <img
        src="src\assets\images\house3.jpg"
        alt="house image"
        className="rounded-3xl"
      />
    </div>
  );
};

export default FourthSection;
