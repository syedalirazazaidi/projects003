import React from "react";
interface TypeProps {
  filterItem: (category: string) => void;
  categories: string[];
}
export const Categories = ({ filterItem, categories }: TypeProps) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
