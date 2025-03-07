import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false); 
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <>
      <section className='flex items-center justify-center h-[100vh] bg-gray-100'>
        <div className='flex flex-col gap-10 py-12 px-8 w-[400px] bg-white rounded-md'>
            <h2 className='text-3xl font-semibold font-serif'>Breakout</h2>
            <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-semibold'>Log in</h3>
                <p className='text-base font-light'>Enter your Email.</p>

                <Box
          component="form"
          sx={{ "& > :not(style)": { width: "100%", rounded: "lg"} }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </Box>
                <button className='w-full text-center bg-blue-500 text-white rounded-md py-2 text-base'>Continue</button>

                <a className='text-base text-blue-500 mt-3' href="#">Privacy</a>
            </div>
        </div>

        {/* <div className='flex flex-col w-[400px] gap-10 py-12 px-8 bg-white rounded-md'>
            <h2 className='text-3xl font-semibold font-serif text-center'>Style Sprouts</h2>
            <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-semibold'>Log in</h3>
                <p className='text-base font-light'>Enter your Password.</p>
                 <Box
          component="form"
          sx={{ "& > :not(style)": { width: "100%", rounded: "lg"} }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </Box>
                <button className='w-full text-center bg-blue-500 text-white rounded-md py-2 text-base'>Login</button>

                <a className='text-base text-blue-500 mt-3' href="#">Privacy</a>
            </div>

        </div>
         */}
         
      </section>

      {/* <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
        <div className="w-[350px] h-auto bg-white rounded-lg shadow-lg pb-10 pt-5 px-6">
          {isSignup ? (
            <form>

              <h1 className="text-2xl font-serif mb-5 text-center">Create new Account</h1>
              <div className="mb-4">
              <Box
          component="form"
          sx={{ "& > :not(style)": { width: "100%", rounded: "lg"} }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="UserName"
            variant="outlined"
          />
        </Box>
              </div>
              <div className="mb-4">
              <Box
          component="form"
          sx={{ "& > :not(style)": { width: "100%", rounded: "lg"} }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </Box>
              </div>
              <div className="mb-4">
              <Box
          component="form"
          sx={{ "& > :not(style)": { width: "100%", rounded: "lg"} }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </Box>
              </div>
              <button
                type="submit"
                className="w-full p-3 mt-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Sign Up
              </button>
            </form>
          ) : (
            <form>
               <h1 className="text-2xl font-serif mb-6 ml-1">Login</h1>
              <div className="mb-4">
              <Box
          component="form"
          sx={{ "& > :not(style)": { width: "100%", rounded: "lg"} }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </Box>
              </div>
              <div className="mb-4">
              <Box
          component="form"
          sx={{ "& > :not(style)": { width: "100%", rounded: "lg"} }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </Box>
              </div>
              <button
                type="submit"
                className="w-full p-3 mt-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Login
              </button>
            </form>
          )}
          <div className="flex justify-between items-center">
            <button className="text-base text-blue-500 mt-5" onClick={toggleForm}>
              {isSignup
                ? "Already have an account? Login"
                : "Don’t have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default LoginPage;
