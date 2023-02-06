import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Header from './components/Header'
import VideoDetails from "./components/VideoDetails";
import SearchResult from "./components/SearchResult";
import Feed from "./components/Feed";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full h-full">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
          <Route path="/video/:id" element={<VideoDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
