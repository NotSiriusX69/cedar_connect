const InputNumberSmall = ({
  name,
  placeholder,
  onChange,
  value,
  className,
  max,
}) => {
  return (
    <div className="">
      <input
        type="number"
        name={name}
        id={name}
        min={1}
        max={max}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`input-small-fit input-number ${className}`}
      />
    </div>
  );
};

export default InputNumberSmall;
