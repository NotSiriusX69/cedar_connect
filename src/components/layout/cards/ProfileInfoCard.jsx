import React, { useEffect, useState } from "react";

import {
  changeUsername,
  changeAboutMe,
} from "../../../config/fireBaseServices";
import { useAuth } from "../../../contexts/authContext";

import InputUsernameSmall from "../../form/InputUsernameSmall";
import TextArea from "../../form/TextArea";
import ButtonSmall from "../../form/ButtonSmall";

const ProfileInfoCard = ({ is_active, username, email, aboutme, phone }) => {
  const { user } = useAuth();

  const [usernameValue, setUsernameValue] = useState("");
  const [aboutMeValue, setAboutMeValue] = useState("");

  // Username regex ( max 10 chars, number )
  const usernameRegex = /^(?=.*\d)[A-Za-z\d]{1,10}$/;

  // classes of Divs
  const [usernameDiv, setusernameDiv] = useState("hidden");
  const [userNameError, setUsernameError] = useState("");

  const [aboutMeDiv, setAboutMeDiv] = useState("hidden");

  const [errorText, setErrorText] = useState("hidden");
  const [errorTextAboutMe, setErrorTextAboutMe] = useState("hidden");

  // for username change
  const handleUsername = async () => {
    if (usernameRegex.test(usernameValue)) {
      const isChanged = await changeUsername(user.uid, usernameValue);
      if (isChanged) {
        window.location.reload(false);
      } else {
        setErrorText("flex");
      }
    } else {
      setUsernameError("input-error");
    }
  };

  const openUsernameEditDiv = () => {
    if (usernameDiv == "hidden") {
      setusernameDiv("flex");
    } else {
      setusernameDiv("hidden");
    }
  };

  const handleAboutMe = async () => {
    const isChanged = await changeAboutMe(user.uid, aboutMeValue);
    if (isChanged) {
      window.location.reload(false);
    } else {
      setErrorTextAboutMe("flex");
    }
  };

  const openAboutMeEditDiv = () => {
    if (aboutMeDiv == "hidden") {
      setAboutMeDiv("flex");
    } else {
      setAboutMeDiv("hidden");
    }
  };

  return (
    <div
      className={`${is_active ? "flex" : "hidden"} flex-col justify-start items-start gap-5 bg-third rounded-3xl w-4/5`}
    >
      <div className="flex flex-col justify-center ">
        <h3>Profile Info</h3>
        <p>Your profile Info</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span>Username</span>
        <div className="bg-gray p-4">
          <p className="font-medium">{username}</p>
        </div>
        <ButtonSmall
          text={"Edit"}
          color={"dark"}
          onClick={openUsernameEditDiv}
        />
        <div
          className={`${usernameDiv} flex-col mt-4 gap-4 shadow-2xl bg-third py-8 px-4 rounded-3xl`}
        >
          <h4>Update Username</h4>
          <div>
            <label htmlFor="">New Username</label>
            <InputUsernameSmall
              placeholder={"New Username"}
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
              className={userNameError}
            />
          </div>
          <ButtonSmall text={"Save"} color={"green"} onClick={handleUsername} />
          <p className={`${errorText} text-error text-xs`}>
            Error changing username - already exists or Unknown error
          </p>
        </div>
      </div>
      <div className="w-full">
        <span>Email</span>
        <div className="bg-gray p-4">
          <p className="font-medium">{email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span>Phone Number</span>
        <div className="bg-gray p-4">
          <p className="font-medium">
            <span className="font-roboto text-xs">+961</span> {phone}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span>About Me</span>
        <div className="bg-gray p-4 w-full">
          <p className="font-medium">{aboutme}</p>
        </div>
        <ButtonSmall
          text={"Edit"}
          color={"dark"}
          onClick={openAboutMeEditDiv}
        />
        <div
          className={`${aboutMeDiv} flex-col mt-4 gap-4 shadow-2xl bg-third py-8 px-4 rounded-3xl`}
        >
          <h4>Update About Me</h4>
          <div>
            <label htmlFor="">About Me</label>
            <TextArea
              name={"newAboutMe"}
              placeholder={"New About Me"}
              value={aboutMeValue}
              onChange={(e) => setAboutMeValue(e.target.value)}
              min={20}
              max={200}
            />
          </div>
          <ButtonSmall text={"Save"} color={"green"} onClick={handleAboutMe} />
          <p className={`${errorTextAboutMe} text-error text-xs`}>
            Error changing about me - Unknown error
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
