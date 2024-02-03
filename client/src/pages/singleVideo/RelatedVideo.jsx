import React from "react";
import { Link } from "react-router-dom";

const RelatedVideo = ({ relatedVideo }) => {
  const { id, title, description, author, thumbnail, views, date, duration } =
    relatedVideo;
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/videos/${id}`}>
          <img alt={description} className="w-full h-auto" src={thumbnail} />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-sm px-1 py-1">
          {duration} hr
        </p>
      </div>
      <div className="flex flex-row mt-2 gap-2">
        <img
          className="rounded-full h-6 w-6 shrink-0"
          src="https://randomuser.me/api/portraits/women/19.jpg"
          alt="avatar"
        />
        <div className="flex flex-col ">
          <Link to={`/videos/${id}`}>
            <p className="text-slate-900 text-sm font-semibold">{title}</p>
          </Link>

          <span className="text-gray-400 text-xs hover:text-gray-600">
            {author}
          </span>
          <p className="text-gray-500 text-xs">
            {views} views . {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideo;
