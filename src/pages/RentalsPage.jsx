import RentalInfoCard from "../components/layout/cards/RentalInfoCard";
import ButtonSmall from "../components/form/ButtonSmall";
import NavBar from "../components/ui/NavBar";
import FooterSection from "../components/sections/FooterSection";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { calculateAverage } from "../config/utils";

import { useAuth } from "../contexts/authContext";

import { fetchRentalsOfUser } from "../config/fireBaseServices";

const RentalsPage = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [rentalsData, setRentalsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigateToListRental = () => {
    navigate("/list-rental");
  };

  useEffect(() => {
    const getRentalsOfuser = async () => {
      try {
        const data = await fetchRentalsOfUser(user.uid);
        if (data) {
          setRentalsData(data);
        } else {
          setRentalsData([]);
        }
      } catch (error) {
        console.error("Error fetching rentals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getRentalsOfuser();
  }, [user.uid]);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-6 m-12">
        <div className="flex flex-col justify-center">
          <h3>Your Rentals</h3>
          <p>All the current places you are renting</p>
        </div>
        <div className="flex flex-row justify-start items-start gap-12">
          {isLoading ? (
            <div className="w-full text-center">
              <p>Loading your rentals...</p>
            </div>
          ) : rentalsData.length > 0 ? (
            rentalsData.map((item) => (
              <RentalInfoCard
                key={item.id}
                review_average={calculateAverage(item.reviews)}
                price={item.price}
                location={item.location}
                img_src={item.img_src}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-12 bg-gray p-12 w-full text-center rounded-3xl">
              <p className="mb-2">You have no rentals</p>
              <ButtonSmall
                text={"Add your Rental"}
                color={"dark"}
                onClick={navigateToListRental}
              />
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default RentalsPage;
