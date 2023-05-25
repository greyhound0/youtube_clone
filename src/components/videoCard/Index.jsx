import React, { useState } from "react";
import { Paper } from "@mui/material";
import "./style.css";
import VideoPlayer from "../videoPlayer/Index";

const VideoCard = ({ data, index, isLoading }) => {
  console.log("videoCard", data);
  console.log("thumbnail", data?.submission?.thumbnail);

  return (
    <Paper
      sx={{
        height: "300px",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        gap: "10px",
        background: "black",
        marginLeft: "20px",
      }}
    >
      {data?.submission?.thumbnail ? (
        <img
          src={data?.submission?.thumbnail}
          alt="yt"
          style={{
            width: "350px",
            height: "200px",
            borderRadius: "10px",
            cursor: "pointer",
            objectFit: "contain",
            border: "0.5px solid #727272",
          }}
        />
      ) : (
        <img src={isLoading} alt="gif" />
      )}
      <div style={{ display: "flex", gap: "20px" }}>
        <img
          src={data?.creator?.pic}
          alt="channelImage"
          className="channelImage"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="title">{data?.submission?.title}</span>
          <p className="creatorName">{data?.creator?.handle}</p>
        </div>
      </div>
    </Paper>
  );
};

export default VideoCard;
