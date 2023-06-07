import Layout from "../components/layout.component";
import { Title } from "../components/title.component";
import { Galeria } from "../components/galeria.component";
import React from "react";

export default function GalleryPage({ data, actualPage }) {
  const initialPostList = 6; // Number of articles to display initially
  const incrementInitialPostList = 6; // Number of articles to add each time the "load more" button is clicked
  const [displayPosts, setDisplayPosts] = React.useState(initialPostList);
  const [articles, setArticles] = React.useState(data);

  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList)
  }

  
  return (
    <Layout actual="galeria" metaData={{metaTitle:"Ragga Tattoo - Galería"}}>
      <section className="ArtContainer container-page">
        <Title
          upper={"Todo nuestro arte a tu alcance"}
          center="Galería"
        ></Title>
        <Galeria images={data} displayPosts={displayPosts} />
        {displayPosts < articles.length ? ( 
            <button className="button2" onClick={loadMore}>Ver más</button>
        ) : null}
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query, req }) {
  const { images } = await import(`../models/provisional-images.json`);
  let page = query.page ? parseInt(query.page) : 1;
  const actualAmountOfImages = `${page}0`;
  // const { images } = await getImages(data, actualAmountOfImages, page);
  if (images.length === 0) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data: images,
      actualPage: page,
      // regs:imageReg

    }
  };
}
