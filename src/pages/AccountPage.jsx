import React from "react";
import FooterSection from "../components/sections/FooterSection";

import AccountContainer from "../components/layout/containers/AccountContainer";
import NavBar from "../components/ui/NavBar";

const AccountPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-3 m-2 gap-2">
        <h2 className="self-start">Your Profile</h2>
        <AccountContainer />
      </div>
      <FooterSection />
    </div>
  );
};

export default AccountPage;
