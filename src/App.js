import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar/Index";
import Feed from "./components/feed/Index";
import { VideoDetail } from "./components/VideoDetail";
import { ChannelDetail } from "./components/ChannelDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import { staticData } from "./staticData";
import ReactPaginate from "react-paginate";
import VideoPlayer from "./components/videoPlayer/Index";

function App() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setisLoading] = useState(
    "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  );

  // useEffect(() => {
  //   setApiData(staticData);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://internship-service.onrender.com/videos",
          {
            params: {
              page: 2,
            },
          }
        );
        console.log("respone.data", response.data);
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {};
  }, []);
  console.log("APP_js", apiData);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<Feed isLoading={isLoading} data={apiData} />}
          />
          <Route
            path="/video/:id"
            element={
              <VideoPlayer data={apiData} videoData={apiData?.data?.posts} />
            }
          />
        </Routes>
        <ReactPaginate
          nextLabel="Next"
          previousLabel="Previous"
          pageCount={0}
        />
      </Box>
    </BrowserRouter>
  );
}

export default App;
