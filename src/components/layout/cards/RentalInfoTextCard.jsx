const RentalInfoTextCard = ({
  location,
  price,
  description,
  owner,
  phone,
  email,
  review_average,
}) => {
  return (
    <div className="flex flex-col justify-center items-start w-96 mt-40 p-2">
      <h3>Rental Information</h3>
      <div>
        <p className="text-xl">{location}</p>
        <p>
          {price}$ <span className="opacity-50">monthly</span>
        </p>
        <div className="">
          <p className="float-start">{review_average}</p>
          <img
            src="/src/assets/images/star.png"
            alt="star"
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="flex-col justify-start items-start mt-6">
          <span className="font-medium">Description</span>
          <p>{description}</p>
        </div>
        <div className="mt-12 font-noto">
          <p className="text-sm mb-2">
            Posted By <span className="text-base font-bold">{owner}</span>
          </p>
          <div className="flex flex-row justify-between gap-2 w-64">
            <span className="opacity-50">phone number</span>
            <p className="text-base">{phone}</p>
          </div>
          <div className="flex flex-row justify-between gap-2 w-64">
            <span className="opacity-50">email</span>
            <p className="text-base">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfoTextCard;
