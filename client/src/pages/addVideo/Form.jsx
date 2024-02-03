import React from "react";
import { useForm } from "react-hook-form";
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = formatDate(new Date());
    console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      {/* title and author */}
      <div className="flex flex-wrap mx-3 mb-6">
        {/* title */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="title"
          >
            VIDEO TITLE
          </label>
          <input
            {...register("title", { required: true })}
            placeholder="Video title"
            type="text"
            id="title"
            className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
          />
        </div>
        {/* author */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="author"
          >
            AUTHOR
          </label>
          <input
            {...register("author", { required: true })}
            placeholder="author"
            type="text"
            id="author"
            className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
          />
        </div>
      </div>
      {/* video link and thumbnail */}
      <div className="flex flex-wrap mx-3 mb-6">
        {/* video link */}
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="link"
          >
            YOUTUBE VIDEO LINK
          </label>
          <input
            {...register("link", { required: true })}
            placeholder="http://www.youtube.com/123"
            type="url"
            id="link"
            className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
          />
        </div>
        {/* thumbnail */}
        <div className="w-full px-3 mt-6 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="thumbnail"
          >
            YOUTUBE THUMBNAIL
          </label>
          <input
            {...register("thumbnail", { required: true })}
            placeholder="https://www.yt-thumbnail.com/1img.jpg"
            type="url"
            id="thumbnail"
            className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
          />
        </div>
      </div>
      {/* video duration, views and category */}
      <div className="flex flex-wrap mx-3 mb-6">
        {/* duration */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="duration"
          >
            VIDEO DURATION
          </label>
          <input
            {...register("duration", { required: true })}
            placeholder="1:21:56 hr"
            type="text"
            id="duration"
            className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
          />
        </div>
        {/* views */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="views"
          >
            VIDEO NO OF VIEWS
          </label>
          <input
            {...register("views", { required: true })}
            placeholder="12k"
            type="text"
            id="views"
            className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
          />
        </div>
        {/* category */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="category"
          >
            VIDEO CATEGORY
          </label>
          <div className="relative">
            <select
              {...register("category", { required: true })}
              id="category"
              className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
            >
              <option value="">Choose Category</option>
              <option value="react">React Js</option>
              <option value="mern">Mern Stack</option>
              <option value="typescript">Typescript</option>
              <option value="tailwindcss">Tailwind Css</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="flex flex-wrap mx-3 mb-6">
        {/* description */}
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description"
          >
            VIDEO DESCRIPTION
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Video description .."
            className="text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white appearance-none block w-full bg-gray-200"
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      {/* submit */}
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent rounded-md hover:bg-indigo-800 focus:outline-none bg-indigo-600 text-white shadow-sm text-sm font-medium "
        >
          Add video
        </button>
      </div>
    </form>
  );
};

export default Form;
