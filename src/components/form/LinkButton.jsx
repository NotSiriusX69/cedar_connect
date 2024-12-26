import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

const LinkButton = ({ text, link, hoverable }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const { logout } = useAuth();

  const handleLogout = async (e) => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log("Unexpected error");
    }
  };

  return hoverable ? (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={link}
      className="text-center font-roboto text-base underline font-semibold"
    >
      {text}
      {isHovered ? (
        <div className="absolute bg-third shadow-md py-6 px-4 text-center right-1">
          <p
            className="text-sm font-light hover:text-error"
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      ) : null}
    </Link>
  ) : (
    <Link
      to={link}
      className="text-center font-roboto text-base underline font-semibold"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
