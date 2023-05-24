import React from "react";
import ReactPlayer from "react-player";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };

    const videoUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;

    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                {videoUrl && (
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        allow="autoplay"
                        width="100%"
                        height="100%"
                    />
                )}
            </div>
        </div>
    );
};

export default VideoPopup;