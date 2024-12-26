const InputUsernameSmall = ({ placeholder, onChange, value, className }) => {
  return (
    <div className="">
      <input
        type="username"
        name="username"
        id="username"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`input-small input-text ${className}`}
      />
    </div>
  );
};

export default InputUsernameSmall;
