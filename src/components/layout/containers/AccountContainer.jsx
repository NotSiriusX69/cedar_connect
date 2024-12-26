import ProfileInfoCard from "../cards/ProfileInfoCard";
import AccountSecurityCard from "../cards/AccountSecurityCard";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../../contexts/authContext";

import {
  fetchUserDoc,
  fetchRentalsOfUser,
  fetchRentedOfUser,
} from "../../../config/fireBaseServices";

const AccountContainer = () => {
  const [userData, setUserData] = useState({});
  const [userRentals, setUserRentals] = useState([]);
  const [userRented, setUserRented] = useState([]);

  const { user } = useAuth();

  const [isProfileInfoActive, setIsProfileInfoActive] = useState(true);
  const [isSecurityInfoActive, setIsSecurityInfoActive] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserDoc(user.uid);
      if (data) {
        const user_data = data;
        setUserData(user_data);
      }
    };

    const getRentalsOfuser = async () => {
      const data = await fetchRentalsOfUser(user.uid);
      setUserRentals(data);
    };

    const getRentedOfuser = async () => {
      const data = await fetchRentedOfUser(user.uid);
      setUserRented(data);
    };

    getUserData();
    getRentalsOfuser();
    getRentedOfuser();
  }, [user.uid]);

  return (
    <div className="flex flex-row justify-center items-start gap-12 w-2/4">
      <div className="flex flex-col gap-3 items-start justify-start p-2 w-40 text-sm font-noto mt-6">
        <p
          className={`table-text ${isProfileInfoActive ? "active" : null}`}
          onClick={() => {
            setIsProfileInfoActive(true);
            setIsSecurityInfoActive(false);
          }}
        >
          Profile Info
        </p>
        <hr className="w-full bg-secondary opacity-25" />
        <p
          className={`table-text ${isSecurityInfoActive ? "active" : null}`}
          onClick={() => {
            setIsProfileInfoActive(false);
            setIsSecurityInfoActive(true);
          }}
        >
          Account Security
        </p>
        <Link to="/user-rented">
          Your Rented Places
        </Link>
        <Link to="/user-rentals">Your Rentals</Link>
      </div>
      <ProfileInfoCard
        is_active={isProfileInfoActive}
        username={userData.username}
        aboutme={userData.aboutme}
        phone={userData.phone}
        email={userData.email}
      />
      <AccountSecurityCard is_active={isSecurityInfoActive} />
    </div>
  );
};

export default AccountContainer;
