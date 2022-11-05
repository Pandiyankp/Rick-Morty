import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({setStatus,setPageNumber,setGender,setSpecies}) => {

  let clear =()=>{
    setStatus("")
    setPageNumber("")
    setGender("")
    setSpecies("")
    window.location.reload(false)
  }
  return (
    <>
      <div className="col-lg-3 col-12 mb-4">
        <div className="text-center fs-4 fw-bold mb-3">
          <h2>Filter</h2>
        </div>

        <div 
        onClick={ clear }
          style={{ cursor: "pointer" }}
          className="text-center text-primary text-decoration-underline mb-3">
          Clear Filters
        </div>
        <div className="accordion" id="accordionExample">

<Status setStatus={setStatus}  setPageNumber={setPageNumber}/>
<Species setSpecies={setSpecies}  setPageNumber={setPageNumber}/>
<Gender setGender={setGender}    setPageNumber={setPageNumber}/>

        </div>
      </div>
    </>
  );
};

export default Filter;
