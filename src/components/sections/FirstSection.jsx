import Button from "../form/Button";
import InputText from "../form/InputText";
import InputNumber from "../form/InputNumber";
import SelectBox from "../form/SelectBox";

const FirstSection = () => {
  const handleForm = () => {};
  return (
    <div className="flex flex-row justify-center items-center gap-12 mt-12 mx-24">
      <div className="flex flex-col justify-center items-center w-96 gap-4 p-6 shadow-2xl rounded-3xl bg-third">
        <h2>Find Your Perfect Place to stay In</h2>
        <p>Discover Homes, Apartments that befits your needs</p>
        <form action="" className="flex flex-col gap-2">
          <InputText
            name={"location"}
            placeholder={"Location"}
            is_required={true}
          />
          <InputNumber name={"rooms"} max={20} placeholder={"Rooms"} />
          <SelectBox class_name={"input"} />
          <Button text={"Find"} onClick={handleForm} type={"submit"} />
        </form>
      </div>
      <img
        src="src\assets\images\house1.jpg"
        alt="house-4"
        className="w-3/4 rounded-3xl"
      />
    </div>
  );
};

export default FirstSection;
