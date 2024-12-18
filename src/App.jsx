import { useState } from 'react'
import './App.css'
import {Route,Routes,BrowserRouter} from "react-router-dom";
import {Box} from "@mui/material";
import {Navbar , Feed, VideoDetail , ChannelDetails , SearchFeed , SearchBar,Sidebar} from "./components/index.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor : '#000'}}>
          <Navbar/>
          <Routes>
            <Route path="/" element = {<Feed />} />
            <Route path="/video/:id" element = {<VideoDetail />} />
            <Route path="/channel/:id" element = {<ChannelDetails />} />
            <Route path="/search/:searchTerm" element = {<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
