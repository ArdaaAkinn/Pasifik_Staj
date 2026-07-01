import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";

export function Health() {
  const [images, setImages] = useState([]);
  const [articles, setArticles] = useState([]);

  async function getRepoArticles() {
    const articles = await axios.get(
      "https://api.github.com/repos/ArdaaAkinn/Blog-Articles/contents/Articles/Health/Texts",
    );
    console.log(articles.data);
    return articles.data;
  }

  async function getRepoImages() {
    const images = await axios.get(
      "https://api.github.com/repos/ArdaaAkinn/Blog-Articles/contents/Articles/Health/Images",
    );
    return images.data;
  }

  useEffect(() => {
    try {
      (async () => {
        const images = await getRepoImages();
        setImages(images);
        const articles = await getRepoArticles();
        setArticles(articles);
      })();
    } catch (error) {
      console.error("No Network");
    }
  }, []);

  return (
    <div className="sticky max-w-screen grid grid-rows-[auto_1fr] bg-slate-900 ">
      <div className="grid grid-cols-3 flex justify-between items-center m-2 p-2">
        <h1 className=" rounded-xl flex justify-center font-mono font-semibold text-2xl tracking-widest text-white m-2 p-2 outline-2 outline-white outline-offset-2 outline-dashed">
          BLOG
        </h1>
        <h1 className=" rounded-xl flex justify-center font-mono font-semibold text-2xl tracking-widest text-white m-2 p-2 outline-2 outline-white outline-offset-2 outline-dashed">
          Heath
        </h1>
        <div className="flex justify-end">
          <Link to="/">
            <button className=" rounded-xl font-mono font-semibold text-2xl tracking-widest text-white m-2 p-2 outline-2 outline-white outline-offset-2 outline-dashed">
              <HomeIcon className="h-6 w-6" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap flex-row m-2 p-2 gap-8 justify-center">
        {console.log(images.length)}
        {images && images.length === 0
          ? " "
          : images.map((img, index) => (
              <div className="relative group">
                <Link
                  to={`/article/${articles[index] ? articles[index].name : ""}`}
                >
                  <button className="h-56 w-80 shrink-0 outline outline-white">
                    <img
                      src={img.download_url}
                      alt={img.name}
                      className="h-56 w-80 shrink-0 group-hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-16 z-50 flex text-white text-center rounded-t-xl bg-slate-900/60 p-2 group-hover:scale-105 transition-transform duration-300">
                  <p className="overflow-hidden text-clip">
                    {articles[index]
                      ? articles[index].name.replace(".md", "")
                      : ""}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
