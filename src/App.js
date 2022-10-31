import logo from "./logo.svg";
import "./App.css";
import News from "./components/News/News";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=733a861cb857485db32a9da59528385e"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App my-8 mx-8">
      <h3 className="text-3xl text-center text-slate-100 font-bold mb-8">
        Get Update New's
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {news.map((nw) => <News news={nw}></News>).reverse()}
      </div>
    </div>
  );
}

export default App;
