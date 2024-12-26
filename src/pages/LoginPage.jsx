import LogoFull from "../components/ui/LogoFull";
import LoginContainer from "../components/layout/containers/LoginContainer";

import { Link } from "react-router-dom";

const LoginPage = () => {


  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="self-start">
        <LogoFull />
      </div>
      <LoginContainer />
      <p className="">
        New To CedarConnect? <Link to="/signup">Join Now</Link>{" "}
      </p>
    </div>
  );
};

export default LoginPage;
