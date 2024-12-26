const ButtonGoogle = ({text}) => {
  return (
    <button
      className={`flex flex-row justify-start items-center gap-16 bg-white text-sm text-secondary border-secondary border-2 py-1 px-4`}
    >
      <img src="src\assets\images\google_icon.png" alt="" />
      {text}
    </button>
  );
};

export default ButtonGoogle;
