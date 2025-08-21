import React from "react";
import { newsData } from "../components/common/Helper";

const NewsPage = () => {
 

  return (
    <section className="container mx-auto py-16 lg:pt-32 px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Latest News</h1>
      <div className="flex flex-col gap-12">
        {newsData.map((news) => (
          <div key={news.id} className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <img
              src={news.img}
              alt={news.title}
              className="w-full object-cover" // full width & tall
            />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsPage;
