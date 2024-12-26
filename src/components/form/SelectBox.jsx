
const SelectBox = ({ class_name }) => {
  return (
    <div className="">
      <select name="type" id="type" className={`${class_name} text-xs`}>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
      </select>
    </div>
  );
};

export default SelectBox;
