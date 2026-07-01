import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Article() {
  const { name } = useParams();
  const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/ArdaaAkinn/Blog-Articles/main/Articles/Trending/Texts/${name}`,
      )
      .then((response) => {
        setContent(response.data);
      });
  }, [name]);

  return (
    <div className=" w-full max-w-none prose prose-gray p-8 ">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
