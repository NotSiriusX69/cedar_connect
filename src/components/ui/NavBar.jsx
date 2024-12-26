import LogoFull from "./LogoFull";
import LinkButton from "../form/LinkButton";

import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center border-b-2 border-secondary border-opacity-10 px-4 py-3 ">
      <LogoFull />
      <div className="flex gap-8 ">
        <Link className="text-only" to="/listings">
          Listings
        </Link>
        <Link className="text-only" to="/aboutus">
          About Us
        </Link>
        <Link className="text-only" to="/contactus">
          Contact Us
        </Link>
      </div>

      <div className="flex gap-8">
        <LinkButton link={"/listings"} text={"Rent a Home"} />
        {user ? (
          <LinkButton link={"/account"} text={"Account"} hoverable={true}/>
        ) : (
          <LinkButton link={"/signup"} text={"Sign up"} hoverable={false}/>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
