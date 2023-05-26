import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import VideoCard from "../videoCard/Index";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { loader } from "../../App";

const Feed = ({ data, isLoading, pagenumber, getData }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  //md means medium devices like phones

  const changePage = ({ selected }) => {
    navigate("/" + (selected + 1));
  };

  useEffect(() => {
    console.log("PAGENUMBER", page);
    if (page) {
      getData(page);
    }
  }, [page]);

  return (
    <div className="feedContainer">
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        {isLoading ? (
          <img src={loader} alt="gif" />
        ) : (
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
        )}
      </Stack>
      <div className="paginate">
        <ReactPaginate
          nextLabel="Next"
          previousLabel="Previous"
          pageCount={10}
          renderOnZeroPageCount={null}
          onPageChange={changePage}
          containerClassName="paginationButtons"
          previousLinkClassName="previousButton"
          nextLinkClassName="nextButton"
          activeClassName="paginationActive"
          disabledClassName="paginatiionDisabled"
        />
      </div>
    </div>
  );
};

export default Feed;
