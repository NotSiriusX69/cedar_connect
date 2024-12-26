import InputEmail from "../../form/InputEmail.jsx";
import InputPassword from "../../form/InputPassword.jsx";
import InputUsername from "../../form/InputUsername.jsx";

import Button from "../../form/Button.jsx";
import ButtonGoogle from "../../form/ButtonGoogle.jsx";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../../contexts/authContext.jsx";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../config/fireBaseConfig.js";

const SignupContainer = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const date = new Date();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Password Regex ( 8 chars - capital - number )
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  // Username regex ( max 10 chars, number )
  const usernameRegex = /^(?=.*\d)[A-Za-z\d]{1,10}$/;
  // Email regex
  const emailRegex = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;

  // For Error handling logic
  const [error, setError] = useState("");
  const [isError, setisError] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    // test if password is compatible with regex
    if (!passwordRegex.test(formData.password)) {
      setIsPasswordInvalid(true);
    } else {
      setIsPasswordInvalid(false);
    }
    // test if username is compatible with regex
    if (!usernameRegex.test(formData.username)) {
      setIsUsernameInvalid(true);
    } else {
      setIsUsernameInvalid(false);
    }
    // test if email is compatible with regex
    if (!emailRegex.test(formData.email)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }

    if (
      isPasswordInvalid == true ||
      isUsernameInvalid == true ||
      isEmailInvalid == true ||
      formData.username == "" ||
      formData.password == "" ||
      formData.email == ""
    ) {
      setisError(true);
    } else {
      try {
        const userCredential = await signup(formData.email, formData.password);
        const user = userCredential.user;

        // Use setDoc with user.uid as document ID
        await setDoc(doc(db, "users", user.uid), {
          username: formData.username,
          email: formData.email,
          creation_date: date,
        });

        navigate("/");
      } catch (err) {
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
          setError("Email already in use. Please try a different email.");
          setisError(true);
        } else if (err.code === "auth/invalid-email") {
          setError("Invalid email format. Please check your email.");
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
    <div className="flex flex-col items-center gap-3 py-10 p-9 shadow-2xl w-96 h-fit rounded-3xl">
      <div className="text-start ">
        <h2>Join Now</h2>
        <p>Please Input your credentials</p>
      </div>
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-2 justify-center"
      >
        <InputUsername
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className={`${isUsernameInvalid ? "input-error" : ""}`}
        />
        <InputEmail
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={`${isEmailInvalid ? "input-error" : ""}`}
        />
        <InputPassword
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className={`${isPasswordInvalid ? "input-error" : ""}`}
        />
        <Button text={"Sign Up"} color={"default"} />
      </form>
      {isError ? (
        <p className="text-error font-normal text-xs">{error}</p>
      ) : (
        <p></p>
      )}
      <div className="flex flex-row items-center gap-5 w-full font-noto font-light text-base px-2">
        <hr className="w-full" />
        <span>Or</span>
        <hr className="w-full" />
      </div>
      <ButtonGoogle text={"Signup With Google"} />
    </div>
  );
};

export default SignupContainer;
