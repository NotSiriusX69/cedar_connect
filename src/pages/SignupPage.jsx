import LogoFull from "../components/ui/LogoFull";
import SignupContainer from "../components/layout/containers/SignupContainer";

import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="self-start">
        <LogoFull />
      </div>
      <SignupContainer />
      <p className="">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default LoginPage;
