import Layout from "../components/layout.component";
import { Title } from "../components/title.component";
import { ArtistPresentation } from "../components/artist.component";
export default function ArtistsPage({homeArtists}) {
  return (
    <Layout actual="artistas" metaData={{metaTitle:"Raga Tattoo - Artistas"}}>
      <section className="ArtContainer container-page">
      <Title
          center="Artistas del estudio"
          sub={"Tattoo & Piercing"}
      ></Title>
        {
          homeArtists.map((artist,index)=>{
            return <ArtistPresentation key={index} data={artist}></ArtistPresentation>
          })
        }
      </section>
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