import ReserveInfoCard from "../cards/ReserveInfoCard";

import { useParams } from "react-router-dom";

const ReserveRentalContainer = () => {
  const { rental_id } = useParams();

  
  return (
    <div className="flex flex-col gap-2 p-2 m-2 justify-center items-center">
      <h2 className="self-start">Reserve Rental</h2>
      <ReserveInfoCard rental_id={rental_id}/>
    </div>
  );
};

export default ReserveRentalContainer;
