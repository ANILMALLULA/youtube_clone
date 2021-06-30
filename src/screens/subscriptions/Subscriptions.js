import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import WATCHSCREEN_HOR_VIDS from "../../components/watchScreen_Hor_Vids/WatchScreen_Hor_Vids";
import { getSubscribedChannels } from "../../redux/actions/videosActions";
import "./subscriptions.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Subscriptions = () => {
  const dispatch = useDispatch();

  const { loading, videos } = useSelector((state) => state.subscriptionsChannel);

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <WATCHSCREEN_HOR_VIDS video={video} key={video.id} subscriptionScreen />
        ))
      ) : (
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Skeleton width='100%' height='160px' count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default Subscriptions;
