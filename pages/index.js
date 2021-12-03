import Layout from "../components/layout.component";
import { getImages } from "../utils/image.utils";
import {
  ArtistSection,
  ContactSection,
  GalerySection,
  ShopSection
} from "../components/sections.component";

export default function Home({ homeImages,homeArtists }) {
  return (
    <Layout actual="home">
      <div className="main-wrapper">
        {/* Section 1 */}
        <GalerySection images={homeImages} />
        {/* Section 2 */}
        <ArtistSection artists={homeArtists} />
        {/* Section 3 */}
        <ContactSection />
        {/* Section 4 */}
        <ShopSection />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { images: imagesData } = await import(`../models/provisional-images.json`);
  const { artistas } = await import(`../models/provisional-artists.json`);
  const { images } = await getImages(imagesData, 8, 1);
  console.log(artistas);

  return {
    props: {
      homeImages: images,
      homeArtists: artistas
    } // will be passed to the page component as props
  };
}
