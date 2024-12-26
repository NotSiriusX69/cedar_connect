import InputEmail from "../../form/InputEmail.jsx";
import InputPassword from "../../form/InputPassword.jsx";
import Button from "../../form/Button.jsx";
import ButtonGoogle from "../../form/ButtonGoogle.jsx";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../../contexts/authContext.jsx";

const LoginContainer = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // For Error handling logic
  const [error, setError] = useState("");
  const [isError, setisError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (formData.password == "" || formData.email == "") {
      setisError(true);
    } else {
      try {
        await login(formData.email, formData.password);
        navigate("/");
      } catch (err) {
        console.error(err);
        if (err.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
          setisError(true);
        } else if (err.code === "auth/invalid-credential") {
          setError("Please make sure Email and Password are correct");
          setisError(true);
        } else {
          setError("An error occurred. Please try again later.");
          setisError(true);
        }
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex flex-col items-center gap-6 py-10 p-9 shadow-2xl w-96 h-fit rounded-3xl">
      <div className="text-start ">
        <h2>Welcome Back</h2>
        <p>Please Input your credentials</p>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2 justify-center"
      >
        <InputEmail
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={`${isError ? "input-error" : ""}`}
        />
        <InputPassword
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className={`${isError ? "input-error" : ""}`}
        />
        <Button text={"Log In"} color={"default"} />
      </form>
      {isError ? (
        <p className="text-error font-normal text-sm">{error}</p>
      ) : (
        <p></p>
      )}
      <div className="flex flex-row items-center gap-5 w-full font-noto font-light text-base px-2">
        <hr className="w-full" />
        <span>Or</span>
        <hr className="w-full" />
      </div>
      <ButtonGoogle text={"Login With Google"} />
    </div>
  );
};

export default LoginContainer;
