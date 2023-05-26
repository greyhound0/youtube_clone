import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import SearchBar from "../searchBox/Index";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        display: "flex",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/1" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={40} />
      </Link>
      <SearchBar />
      <div></div>
    </Stack>
  );
};

export default Navbar;
