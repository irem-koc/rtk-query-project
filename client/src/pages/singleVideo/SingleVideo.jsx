import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import Description from "./Description";
import Player from "./Player";
import RelatedVideos from "./RelatedVideos";

const SingleVideo = () => {
  const { id } = useParams();
  const { data: video } = useGetVideoQuery(id);
  return (
    <section className="pt-6 pb-20">
      <div className="max-w-7xl mx-auto px-2 pb-20 min-h-[400px]">
        {/* Video details */}
        <div className="grid grid-cols-3 gap-2 lg:gap-16">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {video ? (
              <>
                <Player link={video?.link} title={video?.title} />
                <Description video={video} />
              </>
            ) : (
              <div>Error when loading the video...</div>
            )}
          </div>
          {/* related video */}
          <RelatedVideos id={video?.id} title={video?.title} />
        </div>
      </div>
    </section>
  );
};

export default SingleVideo;
