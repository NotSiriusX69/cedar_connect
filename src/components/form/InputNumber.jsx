const InputNumber = ({
  placeholder,
  onChange,
  value,
  className,
  name,
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
        required
        className={`input input-number ${className}`}
      />
    </div>
  );
};

export default InputNumber;
