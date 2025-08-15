import React from "react";
import { useParams } from "react-router-dom";

const GeneticsDetails = ({ mapData }) => {
    const { id } = useParams();
    const article = mapData.find(item => item.slug === id);

    if (!article) {
        return <p className="text-center py-20 text-red-500">Article not found.</p>;
    }

    return (
        <div className="container custom_container px-5 mx-auto my-10 pb-6 lg:py-12">
            <div className="w-full bg-white shadow-lg shadow-[rgba(150,150,150,0.1)]">
                <div className="card-content text-black">
                    <img src={article.detailsImg} alt={article.title} className="mb-6" />
                    {/* <h1 className="text-3xl font-bold mb-4">{article.title}</h1> */}
                    {/* <p className="text-sm mb-6">{article.author} • {article.date}</p> */}

                    {article.content.map((block, index) => {
                        if (block.type === "heading") {
                            return (
                                <h3 key={index} className="mt-6 font-bold text-[#001689]">
                                    {block.text}
                                </h3>
                            );
                        }
                        if (block.type === "paragraph1") {
                            const nextBlock = article.content[index + 1];
                            return (
                                <p key={index} className={`mt-4 ${block.pStyling}`}>
                                    <span className="font-bold">{block.text} </span>
                                    {nextBlock?.type === "paragraph" && (
                                        <span className={nextBlock.pStyling}>{nextBlock.text}</span>
                                    )}
                                </p>
                            );
                        }

                        // Render paragraph normally only if the previous one wasn't paragraph1
                        if (
                            block.type === "paragraph" &&
                            article.content[index - 1]?.type !== "paragraph1"
                        ) {
                            return (
                                <p key={index} className={`mt-4 ${block.pStyling}`}>
                                    {block.text}
                                </p>
                            );
                        }



                        if (block.type === "list") {
                            return (
                                <ul key={index} className="list-disc ml-6 mt-4 space-y-1">
                                    {block.items.map((item, i) => {
                                        // If item is just a string (simple list)
                                        // if (typeof item === "string") {
                                        //     return <li dangerouslySetInnerHTML={{ __html: item }} key={i}>{item}</li>;
                                        // }

                                        if (typeof item === "string") {
                                            return <li className="mt-3" key={i} dangerouslySetInnerHTML={{ __html: item }} />;
                                        }

                                        // If item is an object (with text and maybe subList)
                                        return (
                                            <li key={i}>
                                                {item.text}
                                                {item.subList && item.subList.length > 0 && (
                                                    <ul className="list-disc ml-6 mt-2">
                                                        {item.subList.map((sub, si) => (
                                                            <li key={si}>
                                                                {typeof sub === "string" ? sub : sub.text}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        }
                        if (block.type === "image") {
                            return <img key={index} src={block.src} alt="img" className={`my-6 w-full ${block.imgStyling}`} />;
                        }
                        if (block.type === "links") {
                            return (
                                <div key={index} className="space-y-2 mt-3">
                                    {block.items.map((link, i) => (
                                        <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="text-black block">
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            );
                        }

                        return null;
                    })}
                    <p className="text-sm mb-6 text-black mt-6"> {article.date}</p>
                </div>
            </div>
        </div>
    );
};

export default GeneticsDetails;
