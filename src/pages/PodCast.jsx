// import React, { useState } from "react";
// import { PlayCircle, X } from "lucide-react";
// import podcast0 from '../assets/images/png/podcast-prev0.png'
// import { podcastsList } from "../components/common/Helper";


// const PodCast = () => {
//     const [visibleCount, setVisibleCount] = useState(3);
//     const [selectedVideo, setSelectedVideo] = useState(null);

//     const handleLoadMore = () => {
//         setVisibleCount((prev) => prev + 3);
//     };

//     const openVideoModal = (videoUrl) => {
//         setSelectedVideo(videoUrl);
//     };

//     const closeVideoModal = () => {
//         setSelectedVideo(null);
//     };

//     const visiblePodcasts = podcastsList.slice(0, visibleCount);

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
//             {/* Hero Section */}
//             <section className="text-center py-20 px-6">
//                 <h1 className="text-4xl md:text-6xl font-bold mb-4">BullTalks 🎥</h1>
//                 <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//                     Honest conversations with industry experts, vets & breeders sharing
//                     insights on genetics, semen quality, and the future of breeding.
//                 </p>
//             </section>

//             {/* Featured Podcast */}
//             <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 md:px-16 mb-20">
//                 <div
//                     className="relative w-full md:w-1/2 cursor-pointer"
//                     onClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")}
//                 >
//                     <img
//                         src={podcast0}
//                         alt="Podcast"
//                         className="rounded-2xl shadow-lg w-full h-72 object-cover"
//                     />
//                     <button className="absolute inset-0 flex items-center justify-center">
//                         <PlayCircle className="w-16 h-16 text-white opacity-90 hover:opacity-100 transition-all" />
//                     </button>
//                 </div>
//                 <div className="w-full md:w-1/2 space-y-3">
//                     <h2 className="text-2xl md:text-3xl font-semibold">
//                         "Building Excellence in Dairy Innovation – A Talk with Dr. Anil Berry"
//                     </h2>
//                     <p className="text-gray-600">
//                         Join Dr. Ramesh Kumar as he breaks down the evolution of bull semen
//                         preservation and AI advancements transforming the livestock
//                         industry.
//                     </p>
//                     <button
//                         onClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")}
//                         className="mt-4 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
//                     >
//                         Watch Now
//                     </button>
//                 </div>
//             </section>

//             {/* Podcast Grid */}
//             <section className="px-6 md:px-16 pb-20">
//                 <h3 className="text-3xl font-semibold mb-8 text-center">
//                     Latest Episodes
//                 </h3>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {visiblePodcasts.map((pod) => (
//                         <div
//                             key={pod.id}
//                             className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white cursor-pointer"
//                         >
//                             <div
//                                 className="relative"
//                                 onClick={() => openVideoModal(pod.videoUrl)}
//                             >
//                                 <img
//                                     src={pod.thumbnail}
//                                     alt={pod.title}
//                                     className="w-full h-52 object-cover"
//                                 />
//                                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-80 transition-all">
//                                     <PlayCircle className="w-12 h-12 text-white" />
//                                 </div>
//                             </div>
//                             <div className="p-5">
//                                 <h4 className="text-xl font-semibold mb-2">{pod.title}</h4>
//                                 <p className="text-gray-600 text-sm mb-1">
//                                     Guest: {pod.guest}
//                                 </p>
//                                 <p className="text-gray-400 text-xs mb-3">{pod.date}</p>
//                                 <button
//                                     onClick={() => openVideoModal(pod.videoUrl)}
//                                     className="flex items-center gap-2 text-black font-medium hover:gap-3 transition"
//                                 >
//                                     <PlayCircle className="w-5 h-5" /> Watch Now
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Load More Button */}
//                 {visibleCount < podcastsList.length && (
//                     <div className="flex justify-center mt-12">
//                         <button
//                             onClick={handleLoadMore}
//                             className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all"
//                         >
//                             Load More
//                         </button>
//                     </div>
//                 )}
//             </section>

//             {/* Video Modal */}
//             {selectedVideo && (
//                 <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
//                     <button
//                         onClick={closeVideoModal}
//                         className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
//                     >
//                         <X />
//                     </button>
//                     <div className="w-full max-w-4xl aspect-video">
//                         <iframe
//                             src={selectedVideo}
//                             title="Podcast Video"
//                             allow="autoplay; fullscreen"
//                             className="w-full h-full rounded-xl shadow-lg"
//                         ></iframe>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PodCast;



import React, { useState } from "react";
import { PlayCircle, X } from "lucide-react";
import podcast0 from "../assets/images/png/podcast-prev0.png";
import { podcastsList } from "../components/common/Helper";

const PodCast = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    // 🧠 Auto-convert any YouTube link to embed format
    const openVideoModal = (videoUrl) => {
        let embedUrl = videoUrl;

        if (videoUrl.includes("youtu.be")) {
            const videoId = videoUrl.split("/").pop().split("?")[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (videoUrl.includes("watch?v=")) {
            const videoId = videoUrl.split("watch?v=")[1].split("&")[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }

        setSelectedVideo(embedUrl);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    const visiblePodcasts = podcastsList.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
            {/* Hero Section */}
            <section className="text-center py-20 px-5">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">BullTalks 🎥</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Honest conversations with industry experts, vets & breeders sharing
                    insights on genetics, semen quality, and the future of breeding.
                </p>
            </section>

            {/* Featured Podcast */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-5 md:px-16 mb-20">
                <div
                    className="relative w-full md:w-1/2 cursor-pointer"
                    onClick={() =>
                        openVideoModal("https://youtu.be/CJZ4EJvF71E?si=bqHl7QJryyqyCaQK")
                    }
                >
                    <img
                        src={podcast0}
                        alt="Podcast"
                        className="rounded-2xl shadow-lg w-full h-72 object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white opacity-90 hover:opacity-100 transition-all" />
                    </button>
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        "Building Excellence in Dairy Innovation – A Talk with Dr. Anil Berry"
                    </h2>
                    <p className="text-gray-600">
                        Join Dr. Ramesh Kumar as he breaks down the evolution of bull semen
                        preservation and AI advancements transforming the livestock industry.
                    </p>
                    <button
                        onClick={() =>
                            openVideoModal("https://youtu.be/CJZ4EJvF71E?si=bqHl7QJryyqyCaQK")
                        }
                        className="mt-4 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
                    >
                        Watch Now
                    </button>
                </div>
            </section>

            {/* Podcast Grid */}
            <section className="px-5 md:px-16 pb-20">
                <h3 className="text-3xl font-semibold mb-8 text-center">
                    Latest Episodes
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visiblePodcasts.map((pod) => (
                        <div
                            key={pod.id}

                            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white "
                        >
                            <div className="relative cursor-pointer" onClick={() => openVideoModal(pod.videoUrl)}>
                                <img
                                    src={pod.thumbnail}
                                    alt={pod.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-80 transition-all">
                                    <PlayCircle className="w-12 h-12 text-white" />
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="text-xl font-semibold mb-2">{pod.title}</h4>
                                {/* <p className="text-gray-600 text-sm mb-1">Guest: {pod.guest}</p> */}
                                {/* <p className="text-gray-400 text-xs mb-3">{pod.date}</p> */}
                            
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < podcastsList.length && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <button
                        onClick={closeVideoModal}
                        className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
                    >
                        <X />
                    </button>
                    <div className="w-full max-w-4xl aspect-video">
                        <iframe
                            src={selectedVideo}
                            title="Podcast Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-xl shadow-lg"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PodCast;
