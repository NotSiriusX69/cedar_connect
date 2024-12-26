import ButtonSmall from "../form/ButtonSmall";
import Search from "../form/Search";
import SelectBox from "../form/SelectBox";
import InputNumberSmall from "../form/InputNumberSmall";

import { fetchFilteredRentals } from "../../config/fireBaseServices";

import { useState } from "react";

const FiltersBox = () => {
  const [filteredListings, setFilteredListings] = useState([]);
  const [ExtraFilterClass, setExtraFilterClass] = useState("hidden");

  const [formData, setFormData] = useState({
    min: 0,
    max: 0,
    rooms: 0,
    type: "House",
    location: null,
  });

  const handleExtraFilterClass = () => {
    if (ExtraFilterClass === "hidden") {
      setExtraFilterClass("flex");
    } else {
      setExtraFilterClass("hidden");
    }
  };

  const handleFilters = async (e) => {
    e.preventDefault();
    try {

      const filters_listing = await fetchFilteredRentals(
        parseInt(formData.rooms),
        formData.type,
        formData.location,
      );
      if (filters_listing) {
        setFilteredListings(filters_listing);
        console.log(formData)
        console.log(filters_listing);
      }
    } catch (error) {
      console.log("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-6">
      <form className="shadow-box flex flex-col px-4 py-4 gap-4 justify-center items-start bg-third h-fit w-fit m-auto rounded-3xl">
        <div className="flex flex-row px-4 gap-4 justify-center items-center">
          <InputNumberSmall
            name={"rooms"}
            max={20}
            placeholder={"Rooms"}
            onChange={handleChange}
            value={formData.rooms}
          />
          <SelectBox
            class_name={"input-small"}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "type",
                  value: e.target.value,
                },
              })
            }
          />
          <Search
            name={"location"}
            placeholder={"Search For Location"}
            onChange={handleChange}
            value={formData.location}
          />
          <ButtonSmall
            text={"Submit"}
            type={"submit"}
            onClick={handleFilters}
          />
          <div
            className="flex flex-row items-center cursor-pointer p-2 rounded-3xl duration-200 hover:bg-gray-200"
            onClick={handleExtraFilterClass}
          >
            <img
              src="src\assets\images\filters.png"
              alt="filters"
              className="w-4 h-4"
            />
            <p className="inline m-2 font-inter text-sm font-medium">
              More Filters
            </p>
          </div>
        </div>
        <div
          className={`${ExtraFilterClass} flex-row px-4 gap-4 justify-center items-center`}
        >
          <div className="flex flex-row gap-2">
            <InputNumberSmall
              name={"min"}
              max={100}
              placeholder={"Minimum Price"}
              onChange={handleChange}
              value={formData.min}
            />
            <InputNumberSmall
              name={"max"}
              max={20000}
              placeholder={"Maximum Price"}
              onChange={handleChange}
              value={formData.max}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FiltersBox;
