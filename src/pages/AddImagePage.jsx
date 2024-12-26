import NavBar from "../components/ui/NavBar";
import FooterSection from "../components/sections/FooterSection";
import ButtonSmall from "../components/form/ButtonSmall";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { updateImageSourceOfRental } from "../config/fireBaseServices";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const AddImagePage = () => {
  const { rental_id } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  const [isImageAdded, SetIsImageAdded] = useState(false);

  const storage = getStorage();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const storageRef = ref(storage, `${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (error) => {
        console.error("Error uploading file:", error);
      },
      () => {
        // Get the download URL after upload is complete
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setImageUrl(downloadURL);
            setProgress(0);

            // Update the image source of the rental
            return updateImageSourceOfRental(rental_id, downloadURL);
          })
          .then((isUpdated) => {
            if (isUpdated) {
              SetIsImageAdded(true);
            } else {
              SetIsImageAdded(false);
            }
          })
          .catch((error) => {
            console.error("Error updating rental image source:", error);
          });
          navigate("/listings");
      }
    );
  };
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center gap-6 bg-gray p-24 m-auto mt-24 w-fit shadow-2xl rounded-3xl">
        <input
          type="file"
          name="iamge"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <ButtonSmall
          onClick={handleUpload}
          disabled={!image}
          text={"Upload Image"}
        />

        <h2>Upload Main Image</h2>
        {progress > 0 && <p>Upload Progress: {progress}%</p>}
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
        {isImageAdded ? (
          <p>Image Added</p>
        ) : (
          <p className="text-error">Error Adding Image</p>
        )}
      </div>
      <FooterSection />
    </div>
  );
};

export default AddImagePage;
