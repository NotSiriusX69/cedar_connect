import SelectDropDown from "../../form/SelectDropDown";
import InputTextSmall from "../../form/InputTextSmall";
import InputNumberSmall from "../../form/InputNumberSmall";
import Button from "../../form/Button";
import TextArea from "../../form/TextArea";

import { useAuth } from "../../../contexts/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addRentalDoc } from "../../../config/fireBaseServices";

const ListRentalContainer = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    address: "",
    description: "",
    img_src: "",
    imgs_srcs: [""],
    is_rented: false,
    is_furniture: "No Furniture",
    location: "",
    name: "",
    price: 0,
    reviews: [],
    rooms: 0,
    type: "Apartment",
    payment_type: "Cash",
    user_id: user.uid,
    user:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.user = `users/${user.uid}`
    try {
      const docId = await addRentalDoc(formData);
      if (docId) {
        console.log("added");
        navigate(`/rental/${docId}/add-image`)
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-12 justify-center items-start m-4">
      <h2>List your rental </h2>
      {isError ? <p>Error During submission</p> : null}
      <div className="flex flex-row gap-12 self-center">
        <div className="flex flex-col gap-8 bg-white p-12 shadow-2xl rounded-3xl">
          <div>
            <h3>Real Estate</h3>
            <p>Please Input Necessary Info</p>
          </div>
          <form className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <InputTextSmall
                name={"name"}
                placeholder={"Real Estate Name"}
                is_required={true}
                onChange={handleChange}
                value={formData.name}
              />
              <InputTextSmall
                name={"location"}
                placeholder={"Location"}
                is_required={true}
                onChange={handleChange}
                value={formData.location}
              />
              <InputTextSmall
                name={"address"}
                placeholder={"Real Estate Address"}
                is_required={true}
                onChange={handleChange}
                value={formData.address}
              />
              <SelectDropDown
                name={"type"}
                option1={"Apartment"}
                option2={"House"}
                className={"select"}
                onChange={handleChange}
                value={formData.type}
              />
              <SelectDropDown
                name={"payment-type"}
                option1={"Cash"}
                option2={"On App"}
                className={"select"}
                onChange={handleChange}
                value={formData.payment_type}
              />
              <SelectDropDown
                name={"is_furniture"}
                option1={"Furnitured"}
                option2={"No Furniture"}
                className={"select"}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "is_furniture", // Ensure this matches
                      value: e.target.value, // The selected value
                    },
                  })
                }
                value={formData.is_furniture}
              />
              <label htmlFor="price">Rooms</label>
              <InputNumberSmall
                name={"rooms"}
                placeholder={"Rooms"}
                max={20}
                onChange={handleChange}
                value={formData.rooms}
              />
              <label htmlFor="price">Price</label>
              <InputNumberSmall
                name={"price"}
                placeholder={"Montly Price"}
                max={10000}
                onChange={handleChange}
                value={formData.price}
              />
            </div>

            <div className="flex flex-col gap-6 bg-white p-8 shadow-2xl rounded-3xl">
              <h3>Description</h3>
              <p>Please Add your description</p>
              <TextArea
                name={"description"}
                placeholder={"Description"}
                onChange={handleChange}
                value={formData.description}
                min={0}
                max={250}
              />
            </div>
            <div className="self-center">
              <Button
                text={"Add Rental"}
                type={"submit"}
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListRentalContainer;
