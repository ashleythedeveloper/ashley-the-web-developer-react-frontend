import reactDom from "react-dom";
import React from 'react';
import Box from "@material-ui/core/Box";

const TabPanel = ({children, value, index, ...other }) => {
  return (
    <div 
      role={'tabpanel'}
      hidden={value !== index}
      id={index}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
  )
};


export default TabPanel