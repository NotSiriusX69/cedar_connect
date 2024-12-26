const SelectDropDown = ({
  name,
  option1,
  option2,
  className,
  onChange,
  value,
}) => {
  return (
    <div>
      <select
        name={name}
        id={name}
        className={className}
        onChange={onChange}
        value={value}
      >
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
      </select>
    </div>
  );
};

export default SelectDropDown;
