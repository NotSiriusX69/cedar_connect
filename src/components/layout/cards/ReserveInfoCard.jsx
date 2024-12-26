import ButtonSmall from "../../form/ButtonSmall";
import InputNumberSmall from "../../form/InputNumberSmall";

import {
  fetchRentalDoc,
  fetchUserOfRentalDoc,
  fetchUserDoc,
  updateIsRentedOfRental,
} from "../../../config/fireBaseServices";
import { calculateAverage } from "../../../config/utils";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/fireBaseConfig";
import { useAuth } from "../../../contexts/authContext";

const ReserveInfoCard = ({ rental_id }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const date = new Date();

  const [rentalData, setRentalData] = useState({});
  const [userData, setUserData] = useState({});
  const [userRentalData, setUserRentalData] = useState({});
  const [reviews, setReviews] = useState([]);

  const [durationValue, setDurationValue] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserDoc(user.uid);
      if (data) {
        const user_data = data;
        setUserData(user_data);
      }
    };

    const getRentalData = async () => {
      const data = await fetchRentalDoc(rental_id);
      if (data) {
        const userData = await fetchUserOfRentalDoc(rental_id);
        setRentalData(data);
        setReviews(data.reviews);
        setUserRentalData(userData);

        console.log(data);
      } else {
        console.log("error");
      }
    };
    getRentalData();
    getUserData();
  }, [rental_id]);

  // Submit Reservation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(durationValue < 1 || durationValue > 24)) {
      try {
        if (await updateIsRentedOfRental(rental_id, true)) {
          await addDoc(collection(db, "rented"), {
            address: rentalData.address,
            description: rentalData.description,
            img_src: rentalData.img_src,
            location: rentalData.location,
            reviews: reviews,
            name: rentalData.name,
            type: rentalData.type,
            duration: durationValue,
            rooms: rentalData.rooms,
            price: rentalData.price,
            user_id: user.uid,
            rental_id: rental_id,
          });

          navigate("/account");
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error("error", error);
      }
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center bg-third shadow-2xl p-12 w-96 rounded-3xl">
        <h3>Reserve Information</h3>
        <p>Please check the reservation info</p>
        <div className="flex flex-col items-start justify-start mt-4">
          <p className="text-xl">{rentalData.location}</p>
          <p>
            {rentalData.price}$ <span className="opacity-50">monthly</span>
          </p>
          <div className="">
            <p className="float-start">{calculateAverage(reviews)}</p>
            <img
              src="/src/assets/images/star.png"
              alt="star"
              className="w-5 h-5 object-contain"
            />
          </div>
          <img
            src={rentalData.img_src}
            alt="house image"
            className="w-72 h-48 object-contain rounded-2xl mt-4"
          />
        </div>
        <div className="flex flex-row justify-between gap-2 w-64 mt-4">
          <span className="opacity-50">phone number</span>
          <p className="text-base">{userRentalData.phone}</p>
        </div>
        <div className="flex flex-row justify-between gap-2 w-64">
          <span className="opacity-50">email</span>
          <p className="text-base">{userRentalData.email}</p>
        </div>

        <div className="flex flex-row justify-between gap-2 w-64 mt-8 mb-4">
          <span className="opacity-50">reserve by</span>
          <p className="text-base">{userData.username}</p>
        </div>
      </div>
      <form className="flex flex-col items-center justify-center gap-4 w-full mb-8 bg-third shadow-2xl p-12 rounded-3xl">
        <h3>Confirm your Reservation</h3>
        <p className="mb-2">Please confirm the reservation</p>
        <label htmlFor="">Duration In months</label>
        <InputNumberSmall
          placeholder={"Duration"}
          max={24}
          value={durationValue}
          onChange={(e) => setDurationValue(e.target.value)}
        />
        <ButtonSmall text={"Confirm"} color={"green"} onClick={handleSubmit} />
        {isError ? (
          <p className="text-sm text-error">
            Value Should be between 1 and 24 months
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default ReserveInfoCard;
