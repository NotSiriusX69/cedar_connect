const ButtonSmall = ({ text, color, onClick, type }) => {
  return (
    <button
      className={`button-small button-small-${color}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSmall;
