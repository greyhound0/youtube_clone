import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
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

export const loader =
  "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";

function App() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const fetchData = async (page) => {
    setisLoading(true);
    try {
      const response = await axios.get(
        "https://internship-service.onrender.com/videos",
        {
          params: {
            page: page - 1,
          },
        }
      );
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        {/* <Navigate replace="/" to="/1" /> */}
        <Routes>
          <Route
            path="/:page"
            exact
            element={
              <Feed isLoading={isLoading} data={apiData} getData={fetchData} />
            }
          />
          <Route
            path="/video/:id"
            element={
              <VideoPlayer data={apiData} videoData={apiData?.data?.posts} />
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
