import React from "react";
import "../";


function House(props) {

    let {id, name,address, city, state, zip_code} = props.house

    return (
      <div className="House">
          <h3>Property Name: {name}</h3>

          <h3>Address: {address}</h3>

          <h3>City: {city}</h3>

          <h3>State: {state}</h3>

          <h3>Zip-Code: {zip_code}</h3>

      </div>
    );
}

export default House;