const InputEmail = ({ placeholder, onChange, value, className }) => {
  return (
    <div className="">
      <input
        type="email"
        name="email"
        id="email"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`input input-email ${className}`}
      />
    </div>
  );
};

export default InputEmail;
