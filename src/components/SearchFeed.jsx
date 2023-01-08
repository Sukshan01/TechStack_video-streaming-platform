import { useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';

import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';


const SearchFeed = () => {


  const [videos, setVideos] = useState([]);
const { searchTerm } = useParams();

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))

  }, [searchTerm]);

  return (
    
      <Box p={0}  sx={{width: "100%", overflowY: 'auto', height: '90vh', flex: 2, mt: 0, mb: 0, mr: 4, ml: 0}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{
          color: 'white'
        }}>
        Search Result For: <span style={{ color: '#F31503'}}> {searchTerm}</span>  videos

        </Typography> 
        <Videos videos={videos} />
        
      </Box>
    
  )
  
}

export default SearchFeed
