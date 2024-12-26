import RentalInfoCard from "./RentalInfoCard";
import ButtonSmall from "../../form/ButtonSmall";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { calculateAverage } from "../../../config/utils";

const RentedPlacesCard = ({ is_active, rented_data }) => {
  const navigate = useNavigate();

  const [rentedData, setRentedData] = useState([]);

  const navigateToListings = () => {
    navigate("/listings");
  };

  useEffect(() => {
    setRentedData(rented_data);
  }, []);

  return (
    <div className={`${is_active ? "flex" : "hidden"}  flex-col gap-6`}>
      <div className="flex flex-col justify-center ">
        <h3>Places You Rent</h3>
        <p>All the current places you rent</p>
      </div>
      <div className="flex flex-row justify-start items-start gap-12">
        {rentedData.length > 0 ? (
          rentedData.map((item) => (
            <RentalInfoCard
              key={item.id}
              review_average={calculateAverage(item.reviews)}
              price={item.price}
              location={item.location}
              img_src={item.img_src}
            />
          ))
        ) : (
          <div className="bg-gray p-12 w-full text-center rounded-3xl">
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
  );
};

export default RentedPlacesCard;
