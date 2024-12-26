const ImageCard = ({img_src}) => {
  return (
    <div className="flex flex-row justify-center items-center w-fit h-fit">
      <img
        src={img_src}
        alt="house image"
        className="rental-img"
      />
    </div>
  );
};

export default ImageCard;
