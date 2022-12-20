
import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '100%', sm: '255px', md: "255px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '255px'}, height: 150 }} 
        //height --> 150
        // sm: '358px', md: "320px"

        //sm --> 270
      />
      </Link>
 
    <CardContent sx={{ backgroundColor: "#000000", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard






// import React from 'react'
// import { Link, useParams} from "react-router-dom"; 
// import { useEffect, useState } from "react";
// import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

// import { Videos } from "./";
// import Loader from "./Loader";
// import { fetchFromAPI } from "../utils/fetchFromAPI";

// const VideoDetail = () => {
//   const [videoDetail, setVideoDetail] = useState(null);
//   const [videos, setVideos] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
//       .then((data) => setVideoDetail(data.items[0]))

//     fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
//       .then((data) => setVideos(data.items))
//   }, [id]);

//   if(!videoDetail?.snippet) return <Loader />;

//   const { snippet: { title}, statistics: { viewCount } } = videoDetail;

// const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
   
//   <Card sx={{ width: { xs: '100%', sm: '255px', md: "255px", }, boxShadow: "none", borderRadius: 0 }}>
//     <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
//       <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet.title} 
//         sx={{ width: { xs: '100%', sm: '255px'}, height: 150 }} 
//         //height --> 150
//         // sm: '358px', md: "320px"

//         //sm --> 270
//       />
//       </Link>
 
//     <CardContent sx={{ backgroundColor: "#000000", height: '106px' }}>
//       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
//         <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
//             {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
//         </Typography>
//       </Link>
//       <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
//         <Typography variant="subtitle2" color="gray">
//           {snippet?.channelTitle || demoChannelTitle}
//           <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
//         </Typography>
        
//       </Link>
//           <Stack direction="row" gap="20px" alignItems="center">
//                 <Typography variant="body1" sx={{ opacity: 0.7 }}>
//                   {parseInt(viewCount).toLocaleString()} views
//                 </Typography>
//                 </Stack>
//     </CardContent>
//   </Card>
// );
// };

// export default VideoCard;
