
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
       
         {article?.video && (
          <div className="w-full h-full max-w-full aspect-video mt-12 relative content-center">
            <video
              className="w-full h-full object-cover rounded-lg"
              src={article.video}
              autoPlay
              muted
              loop
              controls
            />
          </div>
        )}

        {/* DESCRIPTION */}
        <p className="mt-6 text-black text-base leading-relaxed">
          {article?.description}
        </p>
      </div>
    </div>
  );
};

export default GeneticsDetails;
