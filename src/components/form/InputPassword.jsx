import { useState } from "react";

const InputPassword = ({ placeholder, onChange, value, className }) => {
  const [boxType, setBoxType] = useState("password");
  const [spanName, setSpanName] = useState("Show");

  const handleShowText = () => {
    if (boxType === "password") {
      setBoxType("text");
      setSpanName("Hide");
    } else {
      setSpanName("Show");
      setBoxType("password");
    }
  };
  return (
    <div className=" ">
      <input
        type={boxType}
        name="password"
        id="password"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`input input-password ${className}`}
      />
      <span
        className="relative bottom-10 left-60 cursor-pointer text-xs font-inter font-medium text-center hover:text-primary"
        onClick={handleShowText}
      >
        {spanName}
      </span>
    </div>
  );
};

export default InputPassword;
