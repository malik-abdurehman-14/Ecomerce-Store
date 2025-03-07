import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { FaArrowRightLong } from "react-icons/fa6";

function EmailSubscription() {
  return (
    <>
      <section className="py-20 px-10 flex flex-col items-center gap-6">
        <h1 className="text-5xl font-sans ">Subscribe to our Emails</h1>
        <p className="text-base text-gray-700">
          Be the first to know about new collections and exclusive offers.
        </p>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaArrowRightLong className="cursor-pointer" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </section>
    </>
  );
}

export default EmailSubscription;
