import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto", // Enable scrolling
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        '&::-webkit-scrollbar': {
          display: 'none', // Hide scrollbar for Webkit browsers (Chrome, Safari)
        },
        msOverflowStyle: 'none',  // Hide scrollbar for Internet Explorer and Edge
        scrollbarWidth: 'none',  // Hide scrollbar for Firefox
      }}
    >
      {categories.map((category) => (
        <button 
          onClick={()=> setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? '#FC1503' : undefined,
            color: 'white',
          }} 
          className="category-btn" 
          key={category.name}
        >
          <span 
            style={{ 
              color: category.name === selectedCategory ? 'white' : 'red', 
              marginRight: '15px' 
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
      
    </Stack>
  );
};

export default Sidebar;
