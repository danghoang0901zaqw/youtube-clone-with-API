import { useState, useEffect, createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectCategories, setSelectCategories] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData =  async(query) => {
    try {
      setLoading(true);
      const res = await fetchDataFromApi(`search/?q=${query}`);
      setSearchResult(res.contents);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
