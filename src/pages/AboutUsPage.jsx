import NavBar from "../components/ui/NavBar";
import FooterSection from "../components/sections/FooterSection";

import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center w-3/4 m-auto mt-12 gap-2 text-center leading-10">
        <h2>About Us</h2>
        <hr className="w-64 h-2 bg-primary rounded-3xl mt-12" />
        <div className="flex flex-col justify-center items-center gap-2 m-12">
          <h3>Welcome to Cedar Connect</h3>
          <p>
            At Cedar Connect, we believe that everyone deserves a place to call
            home. Born out of a desire to address Lebanon’s growing housing
            challenges, Cedar Connect is more than just a platform—it’s a
            community resource. By connecting individuals and families with
            rental properties, we aim to provide stability, hope, and support to
            those who need it most.
          </p>
        </div>
        <hr className="bg-primary w-full h-1 rounded-3xl" />
        <div className="flex flex-col justify-center items-center gap-2 m-12">
          <h3>Our Mission</h3>
          <p>
            Our mission is simple yet powerful: to bridge the gap for
            individuals and families affected by displacement, providing a
            reliable and supportive platform where they can find safe, suitable
            housing. Cedar Connect is dedicated to fostering resilience,
            rebuilding lives, and creating a sense of unity within our
            communities.
          </p>
        </div>
        <hr className="bg-primary w-full h-1 rounded-3xl" />
        <div className="flex flex-col justify-center items-center gap-2 m-12">
          <h3>Our Vision</h3>
          <p>
            We envision a Lebanon where everyone has access to a safe place to
            call home. Cedar Connect strives to be the leading platform for
            rental housing, offering innovative solutions and fostering a
            compassionate network that supports individuals in rebuilding their
            lives. Our ultimate goal is a connected community where shelter is
            no longer a challenge but a given right.
          </p>
        </div>
        <hr className="bg-primary w-full h-1 rounded-3xl" />
        <div className="flex flex-col justify-center items-center gap-2 m-12">
          <h3>Who Are We?</h3>
          <p>
            Cedar Connect is a passionate team of developers, designers, and
            community advocates rooted in Lebanon’s rich culture and values. We
            are united by a shared commitment to creating opportunities and
            providing hope for people displaced by conflict. Our platform
            combines cutting-edge technology with empathy, helping to connect
            landlords with tenants in a secure, user-friendly way. Together,
            we’re building a future where everyone has the opportunity to thrive
            in a safe and welcoming home.
          </p>
        </div>
        <hr className="bg-primary w-full h-1 rounded-3xl" />
        <div className="flex flex-col justify-center items-center gap-2 m-12">
          <h3>Why Choose Cedar Connect?</h3>
          <p>
            Built for the Community: Cedar Connect is designed with a deep
            understanding of Lebanon’s housing challenges, focusing on
            supporting displaced families and individuals.
            <br />
            Simple and Reliable: With intuitive features and a secure platform,
            Cedar Connect ensures a seamless experience for renters and
            landlords alike.
            <br />
            Empathy at its Core: We’re not just a tech platform; we’re a
            community-driven initiative committed to making a real difference in
            people’s lives.
          </p>
        </div>
        <hr className="bg-primary w-full h-1 rounded-3xl" />
        <div className="flex flex-col justify-center items-center gap-2 m-12">
          <h3>Meet the Team</h3>
          <p>
            Behind Cedar Connect is a team of passionate individuals who
            understand the importance of home. Our developers ensure the
            platform runs smoothly, our designers focus on creating an intuitive
            experience, and our advocates work tirelessly to support those in
            need. Together, we’re dedicated to creating a space where hope and
            opportunity thrive.
          </p>
        </div>
        <hr className="bg-primary w-full h-1 rounded-3xl" />
        <div className="flex flex-col justify-center items-center gap-2 m-12">
          <h3>Get In Touch</h3>
          <p>
            Do you have questions, feedback, or ideas? We’d love to hear from
            you! Contact us via email at support@cedarconnect.com or
            <Link to="/contactus"> visit our Contact Us page </Link> visit our
            Let’s build a stronger, connected Lebanon—one home at a time.
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;
