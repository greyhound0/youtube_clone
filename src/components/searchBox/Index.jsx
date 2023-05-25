import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: "30px",
        height: "35px",
        display: "flex",
        border: "1px solid #292929",
        pl: 2,
        pr: 0,
        boxShadow: "none",
        mr: { sm: 5 },
        backgroundColor: "#121212",
      }}
    >
      <input
        style={{ backgroundColor: "#121212", color: "white", width: "500px" }}
        className="search-bar"
        placeholder="Search"
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "white",
          padding: "0",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222222",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            marginRight: "0",
          }}
        >
          <Search sx={{ height: "20px" }} />
        </div>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
