import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RentalInfoCard from "./RentalInfoCard";
import ButtonSmall from "../../form/ButtonSmall";

import { calculateAverage } from "../../../config/utils";
import Button from "../../form/Button";

const RentalsInfoCard = ({ is_active, rentals_data }) => {
  const navigate = useNavigate();

  const [rentalsData, setRentalsData] = useState([]);

  const navigateToListRental = () => {
    navigate("/list-rental");
  };

  return (
    <div className={`${is_active ? "flex" : "hidden"} flex-col gap-6`}>
      <div className="flex flex-col justify-center ">
        <h3>Your Rentals</h3>
        <p>All Your Rentals</p>
      </div>
      <div className="flex flex-row justify-start items-start gap-12">
        {rentals_data.length > 0 ? (
          rentals_data.map((item) => {
            <RentalInfoCard
              key={item.id}
              //review_average={calculateAverage(item.reviews)}
              review_average={5}
              price={item.price}
              location={item.location}
              img_src={item.img_src}
            />;
          })
        ) : (
          <div className="bg-gray p-12 w-full text-center rounded-3xl">
            <p className="mb-2">You have no rentals at the moment</p>
            <ButtonSmall
              text={"List your Rental"}
              color={"dark"}
              onClick={navigateToListRental}
            />
          </div>
        )}
      </div>
      <Button
        text={"Add more Rentals"}
        color={"dark"}
        onClick={navigateToListRental}
      />
    </div>
  );
};

export default RentalsInfoCard;
