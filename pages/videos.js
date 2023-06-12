import { useState } from 'react';
import Layout from '../components/layout.component';
import { Title } from '../components/title.component';



export default function VideoPage({ videos }) {
    console.log(videos[0].url);
    const [videoState, setVideoState] = useState(videos[0]);
    const changeVideo = (videoNumber) => {
        setVideoState(videos[videoNumber]);
    };
    return (
        <Layout actual="videos" metaData={{ metaTitle: "Ragga Tattoo - Vídeos" }}>
            <section className="video-container-page">
                <Title
                    upper={"Gabo Arreglame el tattoo"}
                    center="Vídeos"
                >
                </Title>
                <div className="videoListContainer">
                    <section className="main-video">
                        <h3 className="titleIframeTitle">{videoState.title}</h3>
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoState.url}
                            title={videoState.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        
                    </section>

                    <section className="video-playlist">
                        <h3 className="playListTitle">Gabo Arreglame El Tattoo by Cink Visuals</h3>
                        <p> {videos.length} covers</p>
                        <div className="videos">
                            {
                                videos.map((video, i) => {
                                    const videoListClass =
                                        video.title === videoState.title ? 'video active' : 'video';
                                    return (
                                        <div
                                            className={videoListClass}
                                            data-id={video.id}
                                            key={video.id}
                                            onClick={() => changeVideo(i)}
                                        >
                                            <div className="videotitleInfo">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="playIcon"
                                                >
                                                    <path
                                                        d="M0 0h512v512H0z"
                                                        fill="#000000"
                                                        fillOpacity="0.01"
                                                    ></path>
                                                    <g className="" transform="translate(0,0)" style={{}}>
                                                        <path
                                                            d="M106.854 106.002a26.003 26.003 0 0 0-25.64 29.326c16 124 16 117.344 0 241.344a26.003 26.003 0 0 0 35.776 27.332l298-124a26.003 26.003 0 0 0 0-48.008l-298-124a26.003 26.003 0 0 0-10.136-1.994z"
                                                            fill="#fff"
                                                            fillOpacity="1"
                                                        ></path>
                                                    </g>
                                                </svg>
                                                <p>{i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                                                <h3 className="videoTitle">{video.title}</h3>
                                            </div>
                                            <p className="time">{video.duration}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </section>
                </div>
            </section>
        </Layout>

    );
}

export async function getServerSideProps({ query, req }) {
    const { videos } = await import(`../models/videos.json`);

    if (videos.length === 0) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            videos: videos
        }
    };
}