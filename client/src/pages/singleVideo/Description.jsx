import React, { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteVideoMutation,
  useEditVideoMutation,
} from "../../features/api/apiSlice";
const Description = ({ video }) => {
  const [deleteVideo, { isError, isSuccess, isLoading }] =
    useDeleteVideoMutation();
  const [editVideo, { isErrorEdit, isSuccessEdit, isLoadingEdit }] =
    useEditVideoMutation();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if (id) deleteVideo(id);
  };
  useEffect(() => {
    if (isSuccess) {
      alert("Video deleted successfully");
      navigate("/");
    }
  }, [isSuccess]);
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {video.title}
      </h1>
      <div className="pb-4 flex items-center justify-between border-b gap-4">
        <p className="text-sm leading-[1.72] text-nowrap">
          Uploaded on {video.date}
        </p>
        <div className="flex gap-6 w-full justify-end">
          <Link
            to={`/videos/edit/${video.id}`}
            className="flex gap-1 items-center hover:text-blue-600"
          >
            <div>
              <FaEdit className="w-4" />
            </div>
            <div>
              <span className="text-slate-600 text-sm leading-[1.72] cursor-pointer">
                Edit
              </span>
            </div>
          </Link>
          <div
            onClick={() => handleDelete(video?.id)}
            className="flex gap-1 items-center hover:text-red-600 cursor-pointer"
          >
            <div>
              <FaTrash className="w-4" />
            </div>
            <div>
              <span className="text-slate-600 text-sm leading-[1.72] cursor-pointer">
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-[#334155]">{video.description}</div>
    </div>
  );
};

export default Description;
