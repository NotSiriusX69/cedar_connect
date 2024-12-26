import { Link } from "react-router-dom";

const LogoFull = () => {
  return (
    <div className="w-36 h-12">
      <Link to="/">
        <img
          className="w-full h-full object-contain"
          src="/src\assets\images\cedar_connect._big_new.png"
          alt="logo full"
        />
      </Link>
    </div>
  );
};

export default LogoFull;
