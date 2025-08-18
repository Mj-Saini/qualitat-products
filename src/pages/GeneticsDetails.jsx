
import { Link, useParams } from "react-router";

const GeneticsDetails = ({ mapData }) => {
  const { id } = useParams();
  const article = mapData.find((item) => item.slug === id);

  return (
    <div className="w-full bg-white md:py-12 mb-10">
      <div className="container custom_container mx-auto p-5">
        {/* IMAGE (main banner or detail image) */}
        <div className="relative">
          <img
            className="w-full md:w-[500px] mx-auto md:mt-10 h-full"
            src={article?.img}
            alt={article?.title}
          />
        </div>

        {/* THUMBNAIL + LINK */}
        <div className="w-full h-full max-w-full aspect-video mt-12 relative content-center">
          {article?.video && (
            <Link
              to={article.video}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative bg-black/40 h-full content-center"
            >
              {/* Thumbnail -> ab yaha youtube ki jagah article.img use hoga */}
              <img
                src={article?.img} 
                alt={`${article?.title} thumbnail`}
                className="w-full rounded-lg object-cover"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-red-600 text-white px-2 sm:px-6 py-3 rounded-lg text-xs sm:text-xl font-semibold cursor-pointer">
                  ▶ Watch on YouTube
                </button>
              </div>
            </Link>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="mt-6 text-black text-base leading-relaxed">
          {article?.description}
        </p>
      </div>
    </div>
  );
};

export default GeneticsDetails;
