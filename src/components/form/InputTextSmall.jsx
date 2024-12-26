const InputTextSmall = ({
  placeholder,
  onChange,
  value,
  className,
  name,
  is_required,
}) => {
  return (
    <div className="">
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={is_required}
        className={`input-small input-text ${className}`}
      />
    </div>
  );
};

export default InputTextSmall;
