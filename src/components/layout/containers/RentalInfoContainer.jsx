import { useEffect, useState } from "react";

import Button from "../../form/Button";
import ImageCard from "../cards/ImageCard";
import RentalInfoTextCard from "../cards/RentalInfoTextCard";
import RentalsImagesCard from "../cards/RentalsImagesCard";

import {
  fetchRentalDoc,
  fetchUserOfRentalDoc,
} from "../../../config/fireBaseServices";
import { useParams } from "react-router-dom";
import { calculateAverage } from "../../../config/utils";
import { useNavigate } from "react-router-dom";

const RentalInfoContainer = () => {
  const navigate = useNavigate();
  const { rental_id } = useParams();

  const [rentalData, setRentalData] = useState({});
  const [userRentalData, setUserRentalData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [imgagesSources, setImagesSources] = useState([]);

  const navigateToReserve = (rental_id) => {
    navigate(`/reserve/${rental_id}`);
  };

  useEffect(() => {
    const getRentalData = async () => {
      const data = await fetchRentalDoc(rental_id);
      if (data) {
        const userData = await fetchUserOfRentalDoc(rental_id);
        console.log("data", data);
        setRentalData(data);
        setReviews(data.reviews);
        console.log("users", userData);
        setUserRentalData(userData);
        console.log("imgs", data.imgs_srcs);
        setImagesSources(data.imgs_srcs);
        console.log("images here w", imgagesSources);
      } else {
        console.log("error");
      }
    };
    getRentalData();
  }, [rental_id]);

  return (
    <div className="flex flex-col gap-12 justify-start items-start p-4 mt-6">
      <div className="flex flex-row gap-12 justify-start items-start p-4 mt-6">
        <div className="flex flex-col gap-2 justify-start items-start">
          <div>
            <h2>{rentalData.name}</h2>
            <p>Main Image</p>
          </div>
          <ImageCard img_src={rentalData.img_src} />
          <Button
            text={"Reserve & Contact"}
            onClick={() => navigateToReserve(rental_id)}
          />
        </div>
        <RentalInfoTextCard
          location={rentalData.location}
          price={rentalData.price}
          review_average={calculateAverage(reviews)}
          description={rentalData.description}
          owner={userRentalData.username}
          phone={userRentalData.phone}
          email={userRentalData.email}
        />
      </div>
      <RentalsImagesCard imgs_srcs={imgagesSources} />
    </div>
  );
};

export default RentalInfoContainer;
