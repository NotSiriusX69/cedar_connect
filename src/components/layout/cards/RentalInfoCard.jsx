const RentalInfoCard = ({
  review_average,
  location,
  price,
  img_src,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer" onClick={onClick}>
      <div className="item-img-box">
        <img
          src={img_src}
          alt="house image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="">
        <p>{location}</p>
        <p>
          {price}$ <span className="opacity-50">monthly</span>
        </p>

        <div className="relative left-64 bottom-9">
          <p className="float-start">{review_average}</p>
          <img
            src="src\assets\images\star.png"
            alt="star"
            className="w-5 h-5 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RentalInfoCard;
