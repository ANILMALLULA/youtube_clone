import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideosbySearchInput } from "../../redux/actions/videosActions";
import { Container } from "react-bootstrap";
import WatchScreen_Hor_Vids from "../../components/watchScreen_Hor_Vids/WatchScreen_Hor_Vids";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchScreen = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  const { videos, loading } = useSelector((state) => state.searchVideos);

  useEffect(() => {
    dispatch(getVideosbySearchInput(query));
  }, [dispatch, query]);

  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <WatchScreen_Hor_Vids
            video={video}
            key={video.id.videoId}
            searchScreen
          />
        ))
      ) : (
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Skeleton width='100%' height='160px' count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SearchScreen;
