import { Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const BaseLayout = ({ children }) => {
  return (
    <Stack sx={{ background: "aqua", height: "100%" }}>
      <Header />
      {children}
    </Stack>
  );
};

export default BaseLayout;
