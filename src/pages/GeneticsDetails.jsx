


import { Link, useParams } from "react-router";

const GeneticsDetails = ({ mapData }) => {
    const { id } = useParams();
    const article = mapData.find((item) => item.slug === id);

    const getEmbedUrl = (url) => {
        if (!url) return "";
        if (url.includes("youtu.be")) {
            const videoId = url.split("youtu.be/")[1].split("?")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes("watch?v=")) {
            const videoId = url.split("watch?v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url; // fallback
    };

    const getYoutubeId = (url) => {
        if (!url) return "";
        if (url.includes("youtu.be")) return url.split("youtu.be/")[1].split("?")[0];
        if (url.includes("watch?v=")) return url.split("watch?v=")[1].split("&")[0];
        return "";
    };

    return (
        <div className="w-full bg-white md:py-12 mb-10">
            <div className="container custom_container mx-auto p-5">
                <div className="relative">
                    <img
                        className="w-full md:w-[500px] mx-auto md:mt-10 h-full"
                        src={article?.img}
                        alt={article?.title}
                    />
                </div>

                {/* YouTube Video */}
                <div className="w-full max-w-full aspect-video mt-12 relative">
                    <Link target="_blank" to={article.video} className="w-full max-w-full aspect-video relative">
                        {article?.video ? (
                            <iframe
                                className="w-full h-full rounded-lg  pointer-events-none"
                                src={getEmbedUrl(article.video)}
                                title={`${article.title} Video`}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <Link
                                to={article.video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${getYoutubeId(
                                        article.video
                                    )}/0.jpg`}
                                    alt={article.title}
                                    className="w-full rounded-lg"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-50">
                                    <Link to={article.video} className="bg-red-600 text-white px-4 py-2 rounded-lg">
                                        ▶ Watch on YouTube
                                    </Link>
                                </div>
                            </Link>
                        )}
                    </Link>
                </div>

                {/* Description */}
                <p className="mt-6 text-black text-base leading-relaxed">
                    {article.description}
                </p>
            </div>
        </div>
    );
};

export default GeneticsDetails;

