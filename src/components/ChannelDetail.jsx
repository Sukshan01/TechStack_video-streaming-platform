
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,2,36,1) 0%, rgba(17,24,149,1) 0%, rgba(58,20,126,1) 0%, rgba(129,13,122,1) 37%, rgba(255,0,0,1) 95%)',
          zIndex: 10,
          height:'300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
      <Box sx={{ mr: { sm: '100px', md: '10px'}, width: "100%", overflowY: 'auto', height: '90vh', flex: 2, mt: 0, mb: 0, ml: 0 }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
