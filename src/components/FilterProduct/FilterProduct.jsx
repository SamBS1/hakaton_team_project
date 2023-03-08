import React from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const FilterProduct = () => {
  const { filter } = useProducts();
  const onFilterValueChanged = (e) => {
    filter(e.target.value);
  };

  return (
    <div className="category" onChange={onFilterValueChanged}>
      <select name="drugs">
        <option value="all">All</option>
        <option value="drug">Drug</option>
        <option value="asd">Asd</option>
      </select>
    </div>
  );
};

export default FilterProduct;
