const Button = ({ text, color, onClick, type }) => {
  return (
    <button className={`button-${color}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
