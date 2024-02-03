import { useEffect, useState } from "react";
import Search from "../../components/Search";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";

const Home = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);

  useEffect(() => {
    setSelectedVideos(videos);
  }, [videos]);

  //filter videos by category

  useEffect(() => {
    if (categoryFilter) {
      const filteredTodos = videos?.filter(
        (video) => video.category === categoryFilter
      );
      setSelectedVideos(filteredTodos);
    } else {
      setSelectedVideos(videos);
    }
  }, [categoryFilter, videos]);

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh-175px)] max-w-7xl mx-auto">
      {/* Kategori btn and search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mb-5 gap-4">
        {/* kategori */}
        <div className="flex gap-2">
          <button
            onClick={() => setCategoryFilter(null)}
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
          >
            All
          </button>
          <button
            onClick={() => setCategoryFilter("react")}
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
          >
            React
          </button>
          <button
            onClick={() => setCategoryFilter("nextjs")}
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
          >
            Next.js
          </button>
          <button
            onClick={() => setCategoryFilter("tailwindcss")}
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
          >
            Tailwind CSS
          </button>
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-5 lg:px-0 min-h-[300px]">
        {selectedVideos?.length > 0 ? (
          selectedVideos.map((video) => <Video key={video.id} video={video} />)
        ) : (
          <div>No video found ...</div>
        )}
      </div>
    </section>
  );
};

export default Home;
