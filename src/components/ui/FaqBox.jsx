import { useState } from "react";

const FaqBox = ({ question, text }) => {
  const [textClass, setTextClass] = useState("hidden");

  const handleClass = () => {
    if (textClass == "inline") {
      setTextClass("hidden");
    } else {
      setTextClass("inline");
    }
  };
  return (
    <div className="flex flex-col gap-8 justify-stretch items-stretch w-full">
      <div className="flex flex-row justify-between items-center">
        <h3>{question}</h3>
        <img
          src="src\assets\images\arrow.png"
          alt="arrow-down"
          className="w-6 h-6 cursor-pointer"
          onClick={handleClass}
        />
      </div>
      <p className={`${textClass}`}>{text}</p>
      <hr className="w-full bg-secondary" />
    </div>
  );
};

export default FaqBox;
