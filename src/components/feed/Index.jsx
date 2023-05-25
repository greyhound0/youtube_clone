import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import VideoCard from "../videoCard/Index";
import "./style.css";
import VideoPlayer from "../videoPlayer/Index";
import { Link } from "react-router-dom";
const Feed = ({ data, isLoading }) => {
  console.log("FEED", data);
  //md means medium devices like phones

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {data ? (
        <>
          <Box
            sx={{
              height: { sx: "auto", md: "92vh" },
              borderRight: "1px solid #3d3d3d",
              px: { sx: 0, md: 2 },
            }}
          >
            Sidebar
            <Typography
              className="copyright"
              variant="body2"
              sx={{ mt: 1.5, color: "#fff" }}
            >
              © 2023 Greyhound
            </Typography>
          </Box>
          <div className="mapContainer">
            {data?.data?.posts?.map((data, index) => (
              <Link to={"/video/" + data.postId}>
                <VideoCard
                  key={index}
                  data={data}
                  index={index}
                  isLoading={isLoading}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <img src={isLoading} alt="gif" />
      )}
    </Stack>
  );
};

export default Feed;
