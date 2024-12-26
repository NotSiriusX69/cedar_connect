import { useEffect, useState } from "react";
import ButtonSmall from "../form/ButtonSmall";

const SuccessBox = ({}) => {
  const [boxDiv, setBoxDiv] = useState("hidden");

  const openDiv = () => {
    if (usernameDiv == "hidden") {
      setBoxDiv("flex");
    } else {
      setBoxDiv("hidden");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setBoxDiv("flex");
    }, 3000);
  }, []);

  return (
    <div className={`${boxDiv} absolute bottom-1 right-1 p-6`}>
      <p>Success!</p>
      <ButtonSmall text={"Close"} color={"dark"} onClick={openDiv} />
    </div>
  );
};

export default SuccessBox;
