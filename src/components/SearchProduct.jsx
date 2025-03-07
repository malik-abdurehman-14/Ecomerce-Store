import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { GoSearch } from "react-icons/go";
import InputBase from "@mui/material/InputBase";
import { RxCross2 } from "react-icons/rx";

function SearchProduct({setSearchItem}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleSearch = (e)=> {
    setSearchItem(e.target.value);
  }

  return (
    <>
      <GoSearch
        className="text-2xl cursor-pointer"
        onClick={toggleDrawer(true)}
      />

      <Drawer
        anchor="top"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "white",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "15vh",
            position: "relative", 
          }}
          role="presentation"
          onClick={(event) => event.stopPropagation()}
        >
          <InputBase
            placeholder="Search..."
            sx={{
              width: "60%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            onChange={handleSearch}
          />

          <RxCross2
            className="text-3xl ml-2 font-light cursor-pointer transform transition-transform duration-500 hover:rotate-90"
            onClick={toggleDrawer(false)}
          />
        </Box>
      </Drawer>
    </>
  );
}

export default SearchProduct;
