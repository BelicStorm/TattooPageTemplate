import Layout from "../components/layout.component";
import { AboutUsSection, ArtistSection } from "../components/sections.component";
export default function ArtistsPage({homeArtists}) {
  return (
    <Layout actual="artistas" metaData={{metaTitle:"Raga Tattoo - Artistas"}}>
      <ArtistSection homeArtists={homeArtists}/>
      <AboutUsSection/>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { artistas } = await import(`../models/provisional-artists.json`);

  return {
    props: {
      homeArtists: artistas
    } // will be passed to the page component as props
  };
}