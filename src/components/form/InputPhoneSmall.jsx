const InputPhoneSmall = ({ placeholder, onChange, value, className }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <p className="text-sm font-noto font-semibold">+961</p>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`input-small input-phone ${className}`}
      />
    </div>
  );
};

export default InputPhoneSmall;
