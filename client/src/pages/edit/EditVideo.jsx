import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import EditForm from "./EditForm";

const EditVideo = () => {
  const { id } = useParams();
  const { data: video, isLoading, isError, isSuccess } = useGetVideoQuery(id);
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0 my-5">
      {/* header */}
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Edit video
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fillup the form to edit video
          </p>
        </div>
      </div>
      {/* form */}
      <div className="mt-5 md:mt-0 md:col-span-2">
        <EditForm video={video} />
      </div>
    </div>
  );
};

export default EditVideo;
