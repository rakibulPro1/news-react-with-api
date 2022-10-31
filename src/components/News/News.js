const News = (props) => {
  const { title, description, urlToImage } = props.news;
  return (
    <div>
      <div class="max-w-sm bg-white rounded-md border border-gray-800 shadow-sm">
        <a href="#">
          <img class="rounded-t-lg" src={urlToImage} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-slate-300">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-400">
            {description.slice(0, 100)}
          </p>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
