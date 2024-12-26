import { useState } from "react";

import { useAuth } from "../../../contexts/authContext";
import { updatePassword } from "firebase/auth";

import InputPasswordSmall from "../../form/InputPasswordSmall";
import ButtonSmall from "../../form/ButtonSmall";

const AccountSecurityCard = ({ is_active }) => {
  const { user } = useAuth();

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successText, setsuccessText] = useState("hidden");
  const [errorText, setErrorText] = useState("hidden");

  // Password Regex ( 8 chars - capital - number )
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [display, setDisplay] = useState("hidden");

  const handlePassword = async () => {
    try {
      if (passwordRegex.test(passwordValue)) {
        await updatePassword(user, passwordValue);
        setsuccessText("block");
      } else {
        setPasswordError("input-error");
      }
    } catch (err) {
      console.error("err", err);
      if (err.code === "auth/requires-recent-login") {
        console.log("test");
        setErrorText("block");
      }
    }
  };

  const changeDisplay = () => {
    if (display == "hidden") {
      setDisplay("block");
    } else {
      setDisplay("hidden");
    }
  };
  return (
    <div
      className={`${is_active ? "flex" : "hidden"} flex-col justify-start items-start gap-5 bg-third rounded-3xl `}
    >
      <div className="flex flex-col justify-center">
        <h3>Account's Security</h3>
        <p>Your Account's Security</p>
      </div>
      <div className={`flex flex-col gap-3 w-full ${display}`}>
        <p>Change Password</p>
        <InputPasswordSmall
          placeholder={"New Password"}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className={passwordError}
        />
      </div>
      <p className={`${successText} text-xs text-green-500`}>
        Password succesfully Changed
      </p>
      <p className={`${errorText} text-xs text-error`}>
        Please Login again to change your password
      </p>
      <div className="flex flex-row justify-between items-center w-full gap-6">
        <ButtonSmall
          text={"Change Password"}
          color={"dark"}
          onClick={changeDisplay}
        />
        <ButtonSmall text={"Save"} color={"dark"} onClick={handlePassword} />
      </div>
    </div>
  );
};

export default AccountSecurityCard;
