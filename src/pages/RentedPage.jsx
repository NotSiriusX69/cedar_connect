import RentalInfoCard from "../components/layout/cards/RentalInfoCard";
import ButtonSmall from "../components/form/ButtonSmall";
import NavBar from "../components/ui/NavBar";
import FooterSection from "../components/sections/FooterSection";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { calculateAverage } from "../config/utils";

import { useAuth } from "../contexts/authContext";

import { fetchRentedOfUser } from "../config/fireBaseServices";

const RentedPage = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [rentedData, setRentedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigateToRented = (rented_id) => {
    navigate(`/user-rented/${rented_id}`);
  };

  const navigateToListings = () => {
    navigate("/listings");
  };

  useEffect(() => {
    const getRentedOfuser = async () => {
      try {
        const data = await fetchRentedOfUser(user.uid);
        if (data) {
          setRentedData(data);
        } else {
          setRentedData([]);
        }
      } catch (error) {
        console.error("Error fetching rented data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getRentedOfuser();
  }, [user.uid]);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-6 m-12">
        <div className="flex flex-col justify-center ">
          <h3>Places You Rent</h3>
          <p>All the current places you rent</p>
        </div>
        <div className="flex flex-row justify-start items-start gap-12">
          {isLoading ? (
            <div className="w-full text-center">
              <p>Loading your rented places...</p>
            </div>
          ) : rentedData.length > 0 ? (
            rentedData.map((item) => (
              <RentalInfoCard
                key={item.id}
                review_average={calculateAverage(item.reviews)}
                price={item.price}
                location={item.location}
                img_src={item.img_src}
                onClick={() => navigateToRented(item.id)}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-12 bg-gray p-12 w-full text-center rounded-3xl">
              <p className="mb-2">You have no rented places</p>
              <ButtonSmall
                text={"Rent a place"}
                color={"dark"}
                onClick={navigateToListings}
              />
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default RentedPage;
