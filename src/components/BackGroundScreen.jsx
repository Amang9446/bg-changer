import { useState } from "react";
import Button from "./Button";
const Background = () => {
  const [bgColor, setBgColor] = useState("bg-black");
  const colors = [
    {
      name: "Red",
      color: "bg-red-500",
    },
    {
      name: "Blue",
      color: "bg-blue-500",
    },
    {
      name: "Green",
      color: "bg-green-500",
    },
    {
      name: "Yellow",
      color: "bg-yellow-500",
    },
    {
      name: "Indigo",
      color: "bg-indigo-500",
    },
    {
      name: "Purple",
      color: "bg-purple-500",
    },
    {
      name: "Pink",
      color: "bg-pink-500",
    },
    {
      name: "Gray",
      color: "bg-gray-500",
    },
    {
      name: "White",
      color: "bg-white",
    },
  ];
  const handleClick = (color) => {
    setBgColor(color);
  };

  return (
    <div className={` flex w-full h-screen duration-200 ${bgColor}`}>
      <div className="fixed flex flex-col flex-wrap justify-center left-12 inset-y-0 py-2">
        <div className="flex flex-col flex-wrap justify-center gap-6 shadow-lg bg-white py-5 px-3 rounded-2xl  ">
          {colors.map((color, index) => (
            <Button
              name={color.name}
              key={index}
              onClick={() => handleClick(color.color)}
              bgColor={color.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
