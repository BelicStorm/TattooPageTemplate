import Link from "next/dist/client/link";
import Layout from "../../components/layout.component";
import { Title } from "../../components/title.component";
import { Galeria } from "../../components/galeria.component";
import React from "react";
export default function ArtistDetails({ work, relatedWork }) {
    const { title, url, type, dateAdd, author, tags, description } = work
    const initialPostList = 6; // Number of articles to display initially
    const incrementInitialPostList = 6; // Number of articles to add each time the "load more" button is clicked
    const [displayPosts, setDisplayPosts] = React.useState(initialPostList);
    const [articles, setArticles] = React.useState(relatedWork);

    const loadMore = () => {
        setDisplayPosts(displayPosts + incrementInitialPostList)
    }
    return (
        <Layout actual="artistas" metaData={{ metaTitle: `Raga Tattoo - ${title}`, metaDesc: `${title}, creado por ${author}. ${description}- Teléfono: 669 56 44 58 - Dirección: Av. d'Albaida, 12, 46870 Ontinyent, Valencia` }}>
            <section className="ArtContainer container-page">
                <div className="artistPage-grid">
                    {/* <div className="col center">
                        <h1>{title}</h1>
                        <h2>{type}</h2>
                        <h3>Sobre el trabajo</h3>
                        <p>{description}</p>
                        <p>
                            Created By:
                            <Link href={{ pathname: `/artista/${author}` }}><a>{author}</a></Link>
                        </p>
                        <div className="social-icons">
                            <SocialButtons socialLinks={["Facebook", "Twitter"]} />
                        </div>
                    </div> */}
                    <div className="col">
                        <div className="img"><img src={url} alt={title} width="" height="" /></div>
                        <p>
                            Created By:
                            <Link href={{ pathname: `/artista/${author}` }}><a>{author}</a></Link>
                        </p>
                    </div>
                </div>
                {
                    relatedWork.length === 0
                        ? ""
                        : (
                            <div className="personalGallery">
                                <Title
                                    center="Trabajo relacionado"
                                ></Title>
                                <Galeria images={relatedWork} displayPosts={displayPosts} />
                                {displayPosts < articles.length ? (
                                    <button className="button2" onClick={loadMore}>Ver más</button>
                                ) : null}
                            </div>
                        )
                }

            </section>

        </Layout>
    );
}
export async function getServerSideProps(context) {
    const actualWork = context.params.trabajo
    const works = await import(`../../models/provisional-images.json`);
    const artistWork = works.images.find((image) => {
        return image.title === actualWork
    })
    const relatedWorks = works.images.filter((image) => {
        const { tags: actualWorkTags, type: actualWorkType, title: actualWorkTitle } = artistWork
        const { tags, type, title } = image
        const related = actualWorkType === type && tags.some(r => title !== actualWorkTitle && actualWorkTags.includes(r))
        return related
    })

    if (!artistWork) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            work: artistWork,
            relatedWork: relatedWorks,
            // actualPage:page,
            // regs:imageReg
        } // will be passed to the page component as props
    };
}