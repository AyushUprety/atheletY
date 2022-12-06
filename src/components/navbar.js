import React from "react";
import Logo from "../assets/assets/images/Logo.png";
import { Link } from "react-router-dom";
import Body from "../assets/assets/images/—Pngtree—strong muscles bodybuilding muscles cartoon_3869907.png";
import { Box } from "@mui/material/Box";
import { Stack } from "@mui/system";

const navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ gap: { xs: "50px", sm: "80px", md: "100px", gl: "120px" } }}
    >
      <Link to="/">
        <img src={Body} width="65" height="65" />
      </Link>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Link to="/" style={{ textDecoration: "underline", color: "#3A1212" }}>
          Home
        </Link>
        <Link
          to="/exercise"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default navbar;
