import NavBar from "../components/ui/NavBar";
import FooterSection from "../components/sections/FooterSection";
import RentalInfoCard from "../components/layout/cards/RentalInfoCard";
import Button from "../components/form/Button";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  fetchRentedDoc,
  updateIsRentedOfRental,
  deleteRentedDoc,
} from "../config/fireBaseServices";
import { useParams } from "react-router-dom";
import { calculateAverage } from "../config/utils";

const RentedOfUserPage = () => {
  const navigate = useNavigate();

  const { rented_id } = useParams();
  const [rentalData, setRentalData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleDelete = async () => {
    try {
      const isDeleted = await deleteRentedDoc(rented_id);
      const isChanged = await updateIsRentedOfRental(
        rentalData.rental_id,
        false
      );
      if (isDeleted && isChanged) navigate("/user-rented");
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    const getRentalData = async () => {
      console.log(rented_id);
      const data = await fetchRentedDoc(rented_id);
      if (data) {
        console.log(data);
        setRentalData(data);
        setReviews(data.reviews);
      } else {
        console.log("error");
      }
    };
    getRentalData();
  }, [rented_id]);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-12 justify-center items-center mt-12">
        <div className="text-center">
          <h2>Your Rental</h2>
          <h3>{rentalData.name}</h3>
        </div>
        <RentalInfoCard
          key={rentalData.id}
          review_average={calculateAverage(reviews)}
          location={rentalData.location}
          price={rentalData.price}
          img_src={rentalData.img_src}
        />
        <Button color={"error"} text={"Cancel Reservation"} onClick={handleDelete} />
        {isError ? <p>Error Deleting The Rented Document</p> : null}
      </div>
      <FooterSection />
    </div>
  );
};

export default RentedOfUserPage;
