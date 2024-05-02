const Button = ({ onClick, bgColor, name }) => {
  return bgColor === "bg-white" ? (
    <button
      className={`outline-none px-4 py-2 ${bgColor} text-black rounded-xl shadow-lg`}
      onClick={onClick}
    >
      {name}
    </button>
  ) : (
    <button
      className={`outline-none px-4 py-2 ${bgColor} text-white rounded-xl shadow-lg`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
