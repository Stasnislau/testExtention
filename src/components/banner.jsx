import { Box, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  const styles = {
    banner: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      backgroundColor: "white",
      padding: "10px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
  };
  return (
    <Box className={styles.banner}>
      <Paper variant="outlined" sx={{ p: 2, display: "flex" }}>
        <Box sx={{ width: "30%", mr: 2 }}>
          <TextField fullWidth label="Write your message" />
        </Box>
        <Box sx={{ width: "40%", mr: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Messages in chat
          </Typography>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Typography variant="subtitle1" gutterBottom>
            Most important message
          </Typography>
          <Typography variant="body2">
            This is where the summarizer will go
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Banner;
