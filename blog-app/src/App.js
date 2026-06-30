import "./App.css";
import axios from "axios";
import { useState } from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import ChatBubbleLeftIcon from "@heroicons/react/24/outline/ChatBubbleLeftIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

function App() {
  const [openArt, setIsArtOpen] = useState(false);
  const [openWeather, setIsWeatherOpen] = useState(false);
  const [openNews, setIsNewsOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  const [openComment, setCommentOpen] = useState(false);
  const [openMenu, setMenuOpen] = useState(false);

  function handleTabs(name) {
    if (name === "Art") {
      setIsArtOpen(!openArt);
      if (openNews) {
        setIsNewsOpen(!openNews);
      }
      if (openWeather) {
        setIsWeatherOpen(!openWeather);
      }
    }
    if (name === "News") {
      setIsNewsOpen(!openNews);
      if (openArt) {
        setIsArtOpen(!openArt);
      }
      if (openWeather) {
        setIsWeatherOpen(!openWeather);
      }
    }
    if (name === "Weather") {
      setIsWeatherOpen(!openWeather);
      if (openNews) {
        setIsNewsOpen(!openNews);
      }
      if (openArt) {
        setIsArtOpen(!openArt);
      }
    }
  }

  async function getRepoArticles() {
    const articles = await axios.get(
      "https://api.github.com/repos/ArdaaAkinn/Blog-Articles/contents/Articles/Trending/Texts",
    );
    return articles.data;
  }

  async function getRepoImages() {
    const images = await axios.get(
      "https://api.github.com/repos/ArdaaAkinn/Blog-Articles/contents/Articles/Trending/Images",
    );
    return images.data;
  }

  (async () => {
    console.log(await getRepoArticles());
    console.log(await getRepoImages());
  })();

  return (
    <div className="h-screen w-full grid grid-rows-[auto_1fr]">
      <div className="sticky top-0 z-50 bg-slate-900 grid grid-cols-3 p-4">
        <div className="grid grid-cols-2">
          <h1 className=" rounded-xl flex justify-center font-mono font-semibold text-2xl tracking-widest text-white p-2 outline-2 outline-white outline-offset-2 outline-dashed">
            BLOG
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => handleTabs("Art")}
            className="rounded-xl w-16 h-10 bg-indigo-500 text-white outline outline-2 outline-slate-600 outline-offset-2 outline-solid hover:bg-indigo-400 hover:outline-slate-400 "
          >
            Articles
          </button>
          {openArt && (
            <div className="fixed rounded-b-3xl right-120 h-20 w-60 bg-slate-900 z-50 translate-y-20 px-6 border-2 border-white">
              <li className="text-white">
                <button className="text-white underline">Trending</button>
              </li>
              <li className="text-white">
                <button className="text-white underline">Health</button>
              </li>
              <li className="text-white">
                <button className="text-white underline">Lifestyle</button>
              </li>
            </div>
          )}
          <button
            onClick={() => handleTabs("News")}
            className="rounded-xl w-16 h-10 bg-indigo-500 text-white outline outline-slate-600 outline-offset-2 outline-solid hover:bg-indigo-400 hover:outline-slate-400"
          >
            News
          </button>
          {openNews && (
            <div className="fixed rounded-b-3xl right-120 h-20 w-60 bg-slate-900 z-50 translate-y-20 px-6 border-2 border-white">
              <li className="text-white">
                {" "}
                <button className="text-white underline">
                  {" "}
                  Daily News{" "}
                </button>{" "}
              </li>
              <li className="text-white">
                {" "}
                <button className="text-white underline">
                  {" "}
                  Technology{" "}
                </button>{" "}
              </li>
              <li className="text-white">
                {" "}
                <button className="text-white underline"> Sports </button>{" "}
              </li>
            </div>
          )}
          <button
            onClick={() => handleTabs("Weather")}
            className="rounded-xl w-16 h-10 bg-indigo-500 text-white outline outline-slate-600 outline-offset-2 outline-solid hover:bg-indigo-400 hover:outline-slate-400"
          >
            Weather
          </button>

          {openWeather && (
            <div className="fixed rounded-b-3xl right-120 h-20 w-60 bg-sky-300 z-50 translate-y-20 border-2 border-slate-900 grid grid-cols-[auto_1fr]">
              <SunIcon className="size-20 p-4 text-yellow-500" />
              <div className="p-4 items-center text-white font-semibold">
                <p>Sunny</p>
                <p>Feels Like: 20°C</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end items-center gap-4">
          {openSearch && (
            <div>
              <input
                className="rounded-xl p-1 w-full bg-white border border-medium text-heading text-md"
                placeholder=" Search..."
              />
            </div>
          )}
          <button>
            <MagnifyingGlassIcon
              onClick={() => setSearchOpen(!openSearch)}
              className="h-8 w-8 text-indigo-500 hover:text-indigo-300"
            />
          </button>
          <button>
            <ChatBubbleLeftIcon
              className="h-8 w-8 text-indigo-500 hover:text-indigo-300"
              onClick={() => setCommentOpen(!openComment)}
            />
          </button>
          <button>
            <Bars3Icon
              onClick={() => setMenuOpen(!openMenu)}
              className="h-8 w-8 text-indigo-500 hover:text-indigo-300"
            />
          </button>
        </div>
      </div>
      <hr className="h-px bg-gray-200 border-0"></hr>
      <div className="grid grid-cols-[4fr_1fr] overflow-hidden">
        <div
          className={`bg-slate-900 p-4 grid grid-rows-[3fr_1fr] overflow-hidden ${openArt || openNews || openWeather ? "bg-slate-900/60" : ""}`}
        >
          <div className="gap-4 outline outline-white outline-solid overflow-hidden"></div>
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
        <div
          className={`gap-4 flex flex-col min-h-0 overflow-y-auto items-center bg-slate-900 p-4 [&::-webkit-scrollbar]:hidden ${openArt || openNews || openWeather ? "bg-slate-900/60" : ""}`}
        >
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
      {openMenu && (
        <div className="absolute right-1 top-[80px] h-[calc(100vh-80px)] overflow-hidden w-80 z-50 bg-slate-500 border-2 border-indigo-500 flex flex-col">
          <h1 className="text-center font-mono font-semibold text-2xl tracking-widest text-white p-2">
            MENU
          </h1>
          <hr className="h-px bg-gray-200 border-2"></hr>
          <button className="text-white text-left m-2">Home</button>
          <hr className="h-px bg-gray-200 border-0"></hr>
          <button className="text-white text-left m-2">About</button>
          <hr className="h-px bg-gray-200 border-0"></hr>
          <button className="text-white text-left m-2">Contact</button>
          <hr className="h-px bg-gray-200 border-0"></hr>
        </div>
      )}
      {openComment && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl h-52 w-80 z-50 bg-slate-500  border-2 border-indigo-500 flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={() => setCommentOpen(!openComment)}
              className="m-2 rounded-full h-4 w-4 bg-red-500 border-1 border-black hover:bg-red-400"
            ></button>
          </div>
          <p className="font-semibold text-white p-2">
            You Can Send Your Ideas or Suggestions Through This Box!
          </p>
          <div className="p-1">
            <input
              className="rounded-xl p-1 w-full bg-white border border-medium text-heading text-md"
              placeholder=" Type Here..."
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setCommentOpen(!openComment)}
              className="m-2 bg-green-500 text-white w-16 h-8 rounded-2xl border-2 border-black hover:bg-green-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
