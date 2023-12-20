import React, { useState } from "react";

function Filter({ width, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory && selectedCategory.name === category.name) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div
      className={`${
        width ? "sm:w-[25%] w-full " : " w-0"
      }  overflow-hidden absolute  transition-all duration-700 z-30  top-24 bg-white h-[96.5%]`}
    >
      <div className="flex p-2 border-b-2 w-full pt-4  border-[#E5E5E5]   items-center gap-1">
        <input
          type="checkbox"
          className="w-[20px] h-[20px] bg-white border border-neutral-600"
        />
        <div className=" text-stone-800 text-lg  font-bold font-['Simplon Norm'] uppercase">
          Customizable
        </div>
      </div>
      <div className="flex  items-center p-2   ">
        <div className="w-full">
          <ul className=" w-full ">
            {categories.map((category, index) => (
              <li
                className="text-stone-800 w-full py-4 border-b-2 border-[#E5E5E5] text-lg font-bold font-['Simplon Norm'] uppercase"
                key={index}
                onClick={() => handleCategoryClick(category)}
              >
                <div className="flex justify-between">
                  <h3>{category.name}</h3>
                  {selectedCategory?.name === category.name ? (
                    <img className="w-6" src="/arrowup.png" alt="" />
                  ) : (
                    <img className="w-6" src="/arrowdown.png" alt="" />
                  )}
                </div>

                {selectedCategory?.name === category.name && (
                  <ul>
                    {category.subcategories.map((subcategory, index) => (
                      <li key={index}>
                        <label className="flex justify-start my-2 items-center gap-2">
                          <input
                            className="w-[18px] h-[18px] bg-white border border-neutral-600"
                            type="checkbox"
                          />
                          <span className="text-stone-800 text-base font-normal font-['Simplon Norm']">
                            {subcategory}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="w-[300px] text-stone-800 text-lg font-normal font-['Simplon Norm']">
                  All
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
