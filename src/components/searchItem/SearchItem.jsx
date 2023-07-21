import React from "react";
import BadgeCard from "./Searchitem1";

const SearchItem = (props) => {
  console.log(props.data);
  const path = props.data.URLPath;
  const fileName = path;
  console.log(fileName);
  return (
    <div className="grid-container">
      <BadgeCard
        image={props.data.URLPath}
        title={props.data.Name}
        description={props.data.Description}
        amenities={props.data.Amenties}
        id={props.data.id}
        location={`${props.data.City}, ${props.data.State}`}
        type={props.data.Type}
      />
    </div>
  );
};

export default SearchItem;
