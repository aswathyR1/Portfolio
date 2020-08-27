import React from "react";
import { Box, Grid, Typography, TextField } from "@material-ui/core";
import { sendIcon } from "@material-ui/icons/Send";
import NavBar from "./NavBar";

const Contacts = () => {
  return (
    <>
      <NavBar />
      <Grid container justify="center">
        <Box component="form">
          <Typography variant="h4"> Contact me</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Contacts;
