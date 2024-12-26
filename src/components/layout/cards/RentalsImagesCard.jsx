import { useEffect, useState } from "react";

import ButtonSmall from "../../form/ButtonSmall";

const RentalsImagesCard = ({ imgs_srcs }) => {
  const [imagesSources, setImagesSources] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [divClass, setDivClass] = useState("hidden");

  const setImage = (img_src) => {
    setSelectedImage(img_src);
    setDivClass("flex");
  };

  const closeClass = () => {
    setDivClass("hidden");
  };

  useEffect(() => {
    console.log("imgs_srcs in ", imgs_srcs)
    setImagesSources(imgs_srcs);
    console.log("set", imagesSources);
  }, [imgs_srcs]);

  return (
    <div className="flex flex-col items-start justify-start p-2 m-1">
      <p>Images</p>
      <div className="grid grid-flow-row grid-cols-4 gap-4 justify-items-center place-items-center mt-2 overflow-hidden">
        {imagesSources.length > 0 ? (
          imagesSources.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`house image ${index + 1}`}
              className="rounded-3xl"
              onClick={() => setImage(item)}
            />
          ))
        ) : (
          <p>No Images Uploaded by User</p>
        )}
      </div>
      <div
        className={`fixed ${divClass} inset-0 flex flex-col gap-2 justify-center items-center bg-third z-50 overflow-auto`}
      >
        <div className="absolute top-4">
          <ButtonSmall text={"Close"} color={"dark"} onClick={closeClass} />
        </div>
        <img
          src={selectedImage}
          alt="Image"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default RentalsImagesCard;
