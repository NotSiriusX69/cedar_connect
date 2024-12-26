import { Link } from "react-router-dom";

const AboutBox = ({ title, text, link }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 w-auto ">
      <h2>{title}</h2>
      <hr className="w-64 h-2 bg-primary rounded-3xl" />
      <p className="text-sm font-normal font-noto w-80">{text}</p>
      <Link className="text-only text-sm font-medium font-noto no-underline">{link}</Link>
    </div>
  );
};

export default AboutBox;
