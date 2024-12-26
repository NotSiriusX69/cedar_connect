import { useState } from "react";

const InputPasswordSmall = ({ placeholder, onChange, value, className }) => {
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
    <div className="flex items-center">
      <input
        type={boxType}
        name="password"
        id="password"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`input-small input-password ${className}`}
      />
      <span
        className="relative right-14 cursor-pointer text-xs font-inter font-medium text-center hover:text-primary"
        onClick={handleShowText}
      >
        {spanName}
      </span>
    </div>
  );
};

export default InputPasswordSmall;
