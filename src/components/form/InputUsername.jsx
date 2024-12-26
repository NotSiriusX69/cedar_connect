const InputUsername = ({ placeholder, onChange, value, className }) => {
  return (
    <div className="">
      <input
        type="text"
        name="username"
        id="username"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`input input-text ${className}`}
      />
    </div>
  );
};

export default InputUsername;
