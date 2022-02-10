import { JsonLd } from "react-schemaorg";
import React from "react";

const Schema = (props) => {
  return (
    <React.Fragment>
        <JsonLd item={props.markup}/>
    </React.Fragment>
  );
}

export default Schema
