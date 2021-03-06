import Layout from "../components/layout.component";
import { getImages, imageReg } from "../utils/image.utils";
import ListPaginatedImages from "../components/pagination.component";
import { Title } from "../components/title.component";

export default function GalleryPage({ data, actualPage,regs }) {
  return (
    <Layout actual="galeria" metaData={{metaTitle:"Ragga Tattoo - Galería"}}>
      <section className="ArtContainer container-page">
        <Title
          upper={"Todo nuestro arte a tu alcance"}
          center="Galería"
        ></Title>
        <ListPaginatedImages
          data={data}
          actualPage={actualPage}
          location={"galeria"}
          regs={regs}
        />
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query, req }) {
  const { images: data } = await import(`../models/provisional-images.json`);
  let page = query.page ? parseInt(query.page) : 1;
  const actualAmountOfImages = `${page}0`;
  const { images } = await getImages(data, actualAmountOfImages, page);

  if (images.length === 0) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data: images,
      actualPage: page,
      regs:imageReg

    }
  };
}
