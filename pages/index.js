import Layout from "../components/layout.component";
import { getImages } from "../utils/image.utils";
import {
  ArtistSection,
  ContactSection,
  GalerySection,
  AboutUsSection,
  Sponsors
} from "../components/sections.component";
// import {Title} from "../components/title.component"

export default function Home({ homeImages, homeArtists, sponsors }) {
  return (
    <Layout actual="home" metaData={{metaTitle:"Raga Tattoo"}}>
       <div className="main-wrapper">
     
        <GalerySection images={homeImages} />
        <ArtistSection artists={homeArtists} />
        <Sponsors sponsors={sponsors} />
        <AboutUsSection />
        <ContactSection />
       </div>
     </Layout>
    // <div style={{
    //   "display": "flex",
    //   "width": "100%",
    //   "height": "500px",
    //   "justifyContent": "center",
    //   "alignItems": "center",
    //   "flexDirection": "column"
    // }}>
    /* <Image
            src={`/media/logo.png`}
            alt="Raga Tattoo"
            width="60"
            height="60"
          />
      <Title center="Página bajo mantenimiento..." />
      <div style={{
            "bottom": "2em",
            "display": "flex",
            "position": "inherit"
      }}className="social-Icons-Wrapper">
        <SocialButtons socialLinks={["Facebook", "Instagram"] }/>
      </div>
    </div> */
     
  )
}

export async function getServerSideProps(context) {
  //import de los trabajos
  const { sponsors } = await import(
    `../models/sponsors.json`
  );
  const { images: imagesData } = await import(
    `../models/provisional-images.json`
  );
  //import de los datos de los artistas
  const { artistas } = await import(`../models/provisional-artists.json`);
  const { images } = await getImages(imagesData, 9, 1); // data, cantidad de imagenes, número de la pagina actual

  return {
    props: {
      homeImages: images,
      homeArtists: artistas,
      sponsors:sponsors
    } // will be passed to the page component as props
  };
}
