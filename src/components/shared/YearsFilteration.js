import React from "react";

const YearFilteration = ({ years, onChangeSelect }) => {
  return (
    <div className="ui action input">
      <select className="ui compact selection dropdown" onChange={(event) => onChangeSelect(event.target.value) }>
        <option defaultValue value="">please select a year</option>
        {years.map((year)=>{
            return <option value={year} key={year}>{year}</option>
        })}
        
      </select>
    </div>
  );
};

export default YearFilteration;
