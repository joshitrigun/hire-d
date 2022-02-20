import React from "react";
import "./Signup.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Signup = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-5 mx-auto">
      <h2 className="pb-5 fs-2">Are you:</h2>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" href={"/signup/seeker"}>
          Job Seeker
        </Button>
        <h4>or</h4>
        <Button variant="outlined" href={"/signup/employer"}>
          Employer
        </Button>
      </Stack>
    </div>
  );
};

export default Signup;
