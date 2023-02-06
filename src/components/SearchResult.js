import React, { useContext, useEffect, useState } from "react";
import LeftNav from "./LeftNav";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SearchResultVideo from "./SearchResultVideo";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchhResultSearch();
  }, [searchQuery]);

  const fetchhResultSearch = async () => {
    try {
      setLoading(true);
      const res = await fetchDataFromApi(`search/?q=${searchQuery}`);
      setResult(res?.contents);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-row h-[100vh] ">
      <LeftNav />
      <div className="grid grid-cols-1 gap-2 p-5 w-full overflow-y-auto bg-[#0f0f0f]">
        {result?.map((item) => (
          <SearchResultVideo key={item?.video?.videoId} video={item?.video} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
