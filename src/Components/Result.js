import React from "react";
function Result({allFormData,setShowForm}){
    return(
        <div className="resultContainer">
        <div className="result">
            {allFormData.map((value,index)=>{
                return(
                    <div key={index} className="resultin">
                        Name:{value.name}|Department:{value.department}|Rating:{value.rating}
                    </div>
                );
            })}
            
        </div>
        <button className="back" onClick={()=>{setShowForm(true)}}>Go Back</button>
        </div>
    );
}
export default Result;