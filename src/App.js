import './App.css';
import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import Logging from "./Logging";

function App() {
  const [link, setLink] = useState("https://www.youtube.com/watch?v=paiO6M2wBqE");
  const [list, setList] = useState([]);
  const fetchedFolders = [
    { label:"Video 1", link: "https://www.youtube.com/watch?v=paiO6M2wBqE"},
    { label:"Video 2", link: "https://www.youtube.com/watch?v=Et7TTfwvBFo"},
    { label:"Video 3", link: "https://www.youtube.com/watch?v=krsBRQbOPQ4"},
  ];

  useEffect(() => {
    console.log("use effect is triggered by anchor link")
  },[link])

  return (
    <div className="App">
      {/* Video Player */}
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={link}
            width="600px"
            height="300px"
            controls
          />
        </div>
    <div className="flex p-4 flex-row">
      {fetchedFolders && fetchedFolders.map((folder) => (    
        <>
        <div className="flex flex-col items-center">
            
            <a href="#" onClick={() => {setLink(folder.link) 
              setList([...list, folder.label]);
            }} className="text-xs rounded-full border border-blue-700 text-blue-700 p-1">{folder.label}</a>
        </div>
      </>
      ))}
      
    </div>

        <>
          <Logging history={list}/>
        </>

    </div>
  );
}

export default App;
