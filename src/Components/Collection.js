import React, {useState} from "react";
import "./Collection.css";
import Filters from "./FilterComponents/Filters";
import Products from "./Products Components/Products";


const filterObjects = [
  {
    id: 1,
    title: 'Jacket',
    isSelected: false
  },
  {
    id: 2,
    title: 'Shirt',
    isSelected: true
  },

]
const Collection = () => {

  const [filter, setFilter] = useState(filterObjects)
  return (
    <div className="mainContent">
      <Filters filter= {filter} setFilter={setFilter}/>
      <Products/>
    </div>
  );
};

export default Collection;
