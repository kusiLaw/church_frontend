
import React from "react";

const YoutubeVideo = ({ embedId = '', width= '453', height='480'}) => (
  <div className="overflow-hidden w-full h-full border-0 relative bo">
    <iframe
    className=" abslute top-0 left-0 bottom-0 w-full h-full"     
    //   width={width}
    //   height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);


export default YoutubeVideo








