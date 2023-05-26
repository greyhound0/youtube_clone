import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import VideoCard from "../videoCard/Index";
function VideoPlayer({ data, videoData = [] }) {
  const { id } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (videoData?.length) {
      setActiveVideo(null);
      setTimeout(
        () => setActiveVideo(videoData?.find((item) => item?.postId === id)),
        0
      );

      console.log(
        "activeVideo",
        videoData?.find((item) => item?.postId === id)
      );
    }
  }, [videoData, id]);

  return activeVideo?.submission?.mediaUrl ? (
    <div className="videoPlayer">
      <div style={{ display: "flex" }}>
        <div className="playingCard">
          {activeVideo?.submission?.mediaUrl ? (
            <video width="520" height="400" controls autoPlay>
              <source
                src={activeVideo?.submission?.mediaUrl}
                type="video/mp4"
              />
            </video>
          ) : null}
          <div className="infoContainer">
            <p className="title">{activeVideo?.submission?.title}</p>
            <p className="description">
              {activeVideo?.submission?.description}
            </p>
          </div>
        </div>

        <div className="playlist">
          {data?.data?.posts?.map((data, index) => (
            <Link to={"/video/" + data.postId}>
              <VideoCard key={index} data={data} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default VideoPlayer;
