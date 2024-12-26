const TextArea = ({ placeholder, onChange, value, name, min, max }) => {
  return (
    <div>
      <textarea
        name={name}
        id={name}
        cols="43"
        rows="4"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        minLength={min}
        maxLength={max}
        className="text-area"
      ></textarea>
    </div>
  );
};

export default TextArea;
