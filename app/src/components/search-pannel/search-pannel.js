import React from "react";

import "./search-pannel.css";

const SearchPannel = () => {
  return (
    <div className="search-pannel">
      <input type="text" placeholder="search" />
      <i class="fa fa-search"></i>
    </div>
  );
};

export default SearchPannel;
