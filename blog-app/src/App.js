import './App.css';
import axios from "axios";
import { useState } from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon"
import ChatBubbleLeftIcon from "@heroicons/react/24/outline/ChatBubbleLeftIcon"
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon"

function App() {

  const [openArt, setIsArtOpen] = useState(false);
  const [openWeather, setIsWeatherOpen] = useState(false);
  const [openNews, setIsNewsOpen] = useState(false);

  async function getRepoItems() {
    const response = await axios.get("https://api.github.com/repos/ArdaaAkinn/Blog-Articles/contents");
    return response.data;
  }

  (async () => {
    console.log(await getRepoItems());
  })();


  return (
    <div className="h-screen w-full grid grid-rows-[auto_1fr]">
      <div className="sticky top-0 z-50 bg-slate-900 grid grid-cols-3 p-4">
        <div className="grid grid-cols-2">
          <h1 className=" rounded-xl flex justify-center font-mono font-semibold text-2xl tracking-widest text-white p-2 outline-2 outline-white outline-offset-2 outline-dashed">
            BLOG
          </h1>
        </div>
        <div className="flex items-center justify-center items-center gap-4">
          <button onClick={() => setIsArtOpen(!openArt)} className="rounded-xl w-16 h-10 bg-indigo-500 text-white outline outline-2 outline-slate-600 outline-offset-2 outline-solid hover:bg-indigo-400 hover:outline-slate-400 ">Articles</button>
          {openArt && (
            <div className="rounded-xl w-16 h-16 bg-blue-500"></div>
          )}
          <button onClick={() => setIsNewsOpen(!openNews)} className="rounded-xl w-16 h-10 bg-indigo-500 text-white outline outline-slate-600 outline-offset-2 outline-solid hover:bg-indigo-400 hover:outline-slate-400">News</button>
          {openNews && (
            <div className="rounded-xl w-16 h-16 bg-blue-500"></div>
          )}
          <button onClick={() => setIsWeatherOpen(!openWeather)} className="rounded-xl w-16 h-10 bg-indigo-500 text-white outline outline-slate-600 outline-offset-2 outline-solid hover:bg-indigo-400 hover:outline-slate-400">Weather</button>

          {openWeather && (
             <div className="rounded-xl w-16 h-16 bg-blue-500"></div>
          )}
        </div>
        <div className="flex justify-end items-center gap-4">
          <button>
            <MagnifyingGlassIcon className="h-8 w-8 text-indigo-500 hover:text-indigo-300" />
          </button>
          <button>
            <ChatBubbleLeftIcon className="h-8 w-8 text-indigo-500 hover:text-indigo-300" />
          </button>
          <button>
            <Bars3Icon className="h-8 w-8 text-indigo-500 hover:text-indigo-300" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[4fr_1fr] overflow-hidden">
        <div className="bg-slate-900 p-4 grid grid-rows-[3fr_1fr] overflow-hidden">
          <div className="gap-4 outline outline-white outline-solid overflow-hidden">

          </div>
          <div className="gap-4 grid grid-rows-[auto_1fr]">
            <div>
              <p className="p-2 text-white">Trending Now</p>
            </div>
            <div className="gap-2 grid grid-cols-3">
              <button className="outline outline-white"></button>
              <button className="outline outline-white"></button>
              <button className="outline outline-white"></button>
            </div>
          </div>
        </div>
        <div className="gap-4 flex flex-col min-h-0 overflow-y-auto items-center bg-slate-900 p-4 [&::-webkit-scrollbar]:hidden">
          <p className="p-2 text-white">Check These Out!</p>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>
          <button className="h-48 w-72 shrink-0 outline outline-white"></button>

        </div>
      </div>
    </div>
  );
}

export default App;


