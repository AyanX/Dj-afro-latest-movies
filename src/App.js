import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "../src/Assets/Components/data";
import Header from "./Assets/Components/header/header";
import Horizontal from "./Assets/Components/pages/horizontal";
import Teen from "./Assets/Components/Section/teen";
import Indian from "./Assets/Components/Section/indian";
import VIPMovies from "./Assets/Components/Section/vip-movies";
import VIPSection from "./Assets/Components/Section/vip";
import PageNotFound from "./Assets/Components/Section/pageNotFound";

export const subscribedContext = createContext();

export default function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const vipSectiom = "Ayan"
  return (
    <subscribedContext.Provider value={{isSubscribed, setIsSubscribed,vipSectiom}}>
      <div className="body-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Horizontal />} />
            <Route path="/teen" element={<Teen />} />
            <Route path="/indian" element={<Indian />} />
            <Route path="vip-movies" element={<VIPMovies />} />
            <Route path="vip-section" element={<VIPSection />} />
            <Route path="vip-movies" element={<VIPMovies />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </subscribedContext.Provider>
  );
}
