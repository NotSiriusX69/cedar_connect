import FooterText from "../ui/FooterText";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="flex flex-col justify-between items-end bg-primary h-96 py-12 px-12 mt-36">
      <div className="flex flex-row justify-between gap-24 items-start w-fit text-third">
        <ul>
          <li>Discover</li>
          <li>
            <Link to="/listings">Listings</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
        <ul>
          <li>Find Us</li>
          <li>
            <Link to="https://www.facebook.com">Facebook</Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">Instagram</Link>
          </li>
          <li>
            <Link to="https://www.x.com">Twitter</Link>
          </li>
        </ul>
        <ul>
          <li>Policies</li>
          <li>
            <Link to="/listings">Cookie Policy</Link>
          </li>
          <li>
            <Link to="/contactus">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/aboutus">Cancelation Privacy</Link>
          </li>
        </ul>
        <ul>
          <li>Why Us</li>
          <li>
            <Link to="/listings">Best Security</Link>
          </li>
          <li>
            <Link to="/contactus">Trusted By Many</Link>
          </li>
          <li>
            <Link to="/aboutus">Life Time Service</Link>
          </li>
          <li>
            <Link to="/aboutus">Full Control</Link>
          </li>
        </ul>
      </div>
      <FooterText is_white={true}/>
    </div>
  );
};

export default FooterSection;
