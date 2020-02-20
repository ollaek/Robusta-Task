import React from "react";

const SearchForm = ({onSearchSubmit, onSetTerm}) => {
  return (
    <>
      <div className="ui icon input" style={{marginLeft:10}}>
        <input type="text" placeholder="Search..." onChange={(event) => onSetTerm(event.target.value)}/>
        <i
          className="circular search link icon"
        ></i>
      </div>
      <button className="ui button primary" onClick={() => onSearchSubmit()}>Search</button>
    </>
  );
};

export default SearchForm;
