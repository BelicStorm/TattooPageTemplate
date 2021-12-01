import Head from "next/head";
import Layout from "../components/layout.component";
import {
  ArtistSection,
  ContactSection,
  GalerySection,
  ShopSection
} from "../components/sections.component";

export default function Home({ homeImages }) {
  return (
    <Layout>
      <Head>
        <title>Raga Tattoo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="main-wrapper">
        {/* Section 1 */}
        <GalerySection images={homeImages} />
        {/* Section 2 */}
        <ArtistSection />
        {/* Section 3 */}
        <ContactSection />
        {/* Section 4 */}
        <ShopSection />
      </div>
    </Layout>
  );
}
const getImages = async () => {
  try {
    const data = await import(`../models/provisional-images.json`);

    return data.images;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export async function getServerSideProps(context) {
  const images = await getImages();
  console.log(images);
  return {
    props: {
      homeImages: images
    } // will be passed to the page component as props
  };
}
