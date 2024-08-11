import "./App.css";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { getPictures } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [pictures, setPictures] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (searchValue === null) return;
    async function fetchPictures() {
      setError(null);
      setShowBtn(false);
      setIsLoading(true);
      try {
        const data = await getPictures(searchValue, page);
        console.log(data);
        setPictures(data);
        if (data.total_pages > page) {
          setShowBtn(true);
        }
      } catch (err) {
        setError(err.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPictures();
  }, [searchValue, page]);

  const onSearch = (searchQuery) => {
    console.log("Search query: ", searchQuery);
    setSearchValue(searchQuery);
  };

  const handleClick = () => {
    setPage(page + 1);
    console.log(page);
  };
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            background: "#FFC300 ",
            fontSize: "20px",
            width: "500px",
          },
        }}
      />
      <SearchBar onSearch={onSearch} />
      <ImageGallery pictures={pictures} />
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn handleClick={handleClick} />}
      {error !== null && <ErrorMessage />}
    </>
  );
}

export default App;
