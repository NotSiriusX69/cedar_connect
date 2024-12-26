import AboutBox from "../ui/AboutBox";

const SecondSection = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-36 px-24">
      <AboutBox
        title={"Our Misison"}
        text={
          "At Cedar Connect, our mission is to bridge the gap for individuals and families affected by displacement, providing a reliable, supportive platform"
        }
        link={"About Us"}
      />
      <AboutBox
        title={"Our Vision"}
        text={
          "We envision a Lebanon where everyone has access to a safe place to call home. By combining innovative technology with a deep sense of community responsibility"
        }
        link={"About Us"}
      />
      <AboutBox
        title={"Who are we?"}
        text={
          "Cedar Connect is a dedicated team of developers, designers, and community advocates committed to making a exceptional difference"
        }
        link={"About Us"}
      />
    </div>
  );
};

export default SecondSection;
