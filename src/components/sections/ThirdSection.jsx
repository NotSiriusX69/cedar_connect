import LinkButton from "../form/LinkButton";
const ThirdSection = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-24 mx-24 mt-48 ">
      <div className="flex flex-col items-start justify-center gap-8">
        <h3>Apartments</h3>
        <img src="src\assets\images\house1.jpg" alt="house image" className="rounded-3xl"/>
        <p className="w-64">All sort of apartments that will serve your needs for best prices</p>
        <LinkButton text={"Check Apartments"} link={"/listings"} />
      </div>
      <div className="flex flex-col items-start justify-center gap-8">
        <h3>Houses</h3>
        <img src="src\assets\images\house4.jpg" alt="house image" className="rounded-3xl"/>
        <p className="w-64">Best houses available for rental for best prices</p>
        <LinkButton text={"Check Houses"} link={"/listings"} />
      </div>
    </div>
  );
};

export default ThirdSection;
