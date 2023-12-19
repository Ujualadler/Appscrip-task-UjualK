import React, { useState } from "react";

function SortComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block ">
      <button
        className="flex items-center gap-1 text-stone-800 text-lg font-bold font-['Simplon Norm'] uppercase leading-10"
        onClick={toggleDropdown}
      >
        {selectedOption}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-stone-800"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-stone-800"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 12l-8-8-4 4 8 8 4-4zm0 0l8-8 4 4-8 8-4-4z"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-56 right-0 flex flex-col  justify-end  bg-white border border-gray-300 rounded shadow-md">
          {[
            "RECOMMENDED",
            "NEWEST FIRST",
            "POPULAR",
            "PRICE: HIGH TO LOW",
            "PRICE: LOW TO HIGH",
          ].map((option) => (
            <button
              key={option}
              className={`flex justify-end p-3 items-center gap-2 text-right text-stone-800 text-lg  font-['Simplon Norm'] uppercase leading-10  hover:bg-gray-100 ${
                selectedOption === option ? "font-bold" : ""
              }`}
              onClick={() => {
                if (option !== "CLOSE") {
                  handleOptionSelect(option);
                } else {
                  setIsOpen(false);
                }
              }}
            >
              {selectedOption === option && option !== "CLOSE" && (
                <img src="/tick.png" alt="" />
              )}
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortComponent;
