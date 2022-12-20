import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants';
import SearchBar from "./SearchBar";

import { Typography } from "@mui/material";





const Navbar = () => (

  <Stack 
  direction="row"
   alignItems="center"
  p={2}
  sx={{position: "sticky", background: "#000", top:0, justifyContent: "space-between"}}>



  <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <img src={logo} alt="logo" height={45} />

    <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="red" fontWeight='bold' fontSize= '30px' py={1} px={1}>
                  TechStack
                </Typography>

  </Link>
  <SearchBar />
  </Stack>
)

export default Navbar
