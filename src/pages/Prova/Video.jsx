import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const Video = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
    videoRef.current.volume = 50 / 100;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Box
      sx={{
        minWidth: 500,
        maxWidth: 600,
        margin: "0 auto",
        mt: 4,
        transition: "none !important",
        boxShadow: "none !important",
      }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        width="100%"
        // src="assets/videoluluca.mp4"
        // type="video/mp4"
        controls={false}
        style={{
          borderRadius: 8,
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <source
          src="https://www.dropbox.com/scl/fi/zvuro6e0b62ke2dptm8es/videoluluca.mp4?rlkey=vm05oaq46a64cy60akffntvgh&st=f6n53aih&raw=1
"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default Video;
