import React from "react";
import '../assets/styles/youtubeEmbed.css'

const YoutubeEmbed = () => (
    <div className="video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aYW4SYRWN5c?si=KoXF6hMO7fWitZ7T"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    </div>
);


export default YoutubeEmbed;