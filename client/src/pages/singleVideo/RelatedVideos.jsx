import React from "react";
import { useGetRelatedVideosQuery } from "../../features/api/apiSlice";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ id, title }) => {
  const { data: relatedVideos } = useGetRelatedVideosQuery({ id, title });
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {relatedVideos?.length > 0 ? (
        relatedVideos.map((relatedVideo) => (
          <RelatedVideo key={relatedVideo?.id} relatedVideo={relatedVideo} />
        ))
      ) : (
        <>No video found...</>
      )}
    </div>
  );
};

export default RelatedVideos;
