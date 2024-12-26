import FaqBox from "../ui/FaqBox";

const FaqSection = () => {
  return (
    <div className="flex flex-col gap-24 justify-center items-center mt-48">
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <h2>Frequently Asked Questions</h2>
        <hr className="w-64 h-2 bg-primary rounded-3xl" />
      </div>

      <div className="flex flex-col gap-12 justify-center items-center w-3/5">
        <FaqBox
          question={"What is Cedar Connect?"}
          text={
            "Cedar Connect is a platform designed to bridge the gap between individuals and families searching for rental housing and landlords with available properties in Lebanon. Our goal is to support people, especially those displaced by conflict, by providing a user-friendly web and mobile application where they can easily browse, list, and connect for rental opportunities. Cedar Connect represents more than a housing service—it's a community resource aimed at fostering stability and unity."
          }
        />
        <FaqBox
          question={"How does Cedar Connect Work?"}
          text={
            "Cedar Connect simplifies the rental process for both renters and landlords. Renters can create an account, browse available listings, and use filters like location, price range, and property type to narrow down their options. Each property includes detailed information such as photos, amenities, and rental terms. Renters can then contact landlords directly using the secure in-app messaging system to discuss rental details. For landlords, the process is equally straightforward. They can register on the platform, create a profile, and list their properties by adding details like location, rent price, and conditions. Landlords can upload photos to showcase their properties and respond to inquiries from potential tenants. Cedar Connect ensures that both renters and landlords enjoy a seamless and secure experience."
          }
        />
        <FaqBox
          question={"is Cedar Connect Free to use?"}
          text={
            "Yes, Cedar Connect is completely free for renters to use. Renters can browse listings, contact landlords, and find their ideal rental home without any fees. For landlords, creating an account and listing properties is also free. In the future, we may introduce optional premium features for landlords, but the core functionalities will remain accessible to all users at no cost."
          }
        />
        <FaqBox
          question={"Who are Cedar Connect?"}
          text={
            "Cedar Connect is a team of passionate developers, designers, and community advocates based in Lebanon. Our mission is to provide a reliable platform that connects displaced individuals and families with housing opportunities, promoting stability and hope. Rooted in Lebanese values of unity and support, Cedar Connect was created to address the pressing housing challenges caused by displacement, aiming to rebuild lives and strengthen communities across the country."
          }
        />
        <FaqBox
          question={"How Do I list my property on Cedar Connect?"}
          text={
            "Listing a property on Cedar Connect is quick and straightforward. Landlords simply need to sign up for an account and complete their profile. They can then create a listing by entering all the necessary property details, such as the type of property, location, monthly rent, and available amenities. High-quality images can be uploaded to showcase the property and attract renters. Once the listing is published, it becomes visible to potential tenants. Landlords can then manage inquiries and update the listing as needed, all through the Cedar Connect platform."
          }
        />
      </div>
    </div>
  );
};

export default FaqSection;
