import "./test.css";
import React from "react";
import Form from "./form";
import Table from "./table";
function App() {
  return (
    <div className="container">
      <div className="row">
      
        <div className="col-6">
          <h5 style={{color:"darkblue",textDecorationLine:"underline"}}>STUDENT REGISTER </h5>
          <br />
          <br />
          
        < Form />
        </div>
        <div className="col-6">
        <h5 style={{color:"darkblue",textDecorationLine:"underline"}}>STUDENT LIST </h5>
          <br />
          <br />
          <Table />
          </div>
        </div>
         </div>
         
         
  );
}

export default App;
