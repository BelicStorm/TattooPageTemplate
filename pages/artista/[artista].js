import Layout from "../../components/layout.component";
import ListPaginatedImages from "../../components/pagination.component";
import { SocialButtons } from "../../components/socialButtons.component";
import { Title } from "../../components/title.component";
import { getImages, imageReg } from "../../utils/image.utils";
export default function ArtistDetails({homeArtists,images,actualPage,regs}) {
  const { name, aptitude, artistPhoto, social, description,recomendedWork1 } = homeArtists;
  const { tattoo, piercing } = aptitude;
  let artistType = "";
  artistType = tattoo && !piercing ? "Tattoo Artist" : artistType;
  artistType = !tattoo && piercing ? "Piercing Artist" : artistType;
  artistType = tattoo && piercing ? "Tattoo & Piercing" : artistType;
  return (
    <Layout actual="artistas" metaData={{metaTitle:`Raga Tattoo - ${name}`, metaDesc:`Conoce a ${name}, ${artistType} en Ragga Tattoo. Descubre sus trabajos y accede a sus redes sociales para saber más de su arte.- Teléfono: 669 56 44 58 - Dirección: Av. d'Albaida, 12, 46870 Ontinyent, Valencia`}}>
      <section className="ArtContainer container-page">
        <div className="artistPage-grid">
            <div className="col center">
              <h1>{name}</h1>
              <h2>{artistType}</h2>
              <div className="img featured">
                <img src={recomendedWork1} alt="Recomended Work" width="" height="" />
                {/* <p className="cp">Row House</p> */}
              </div>
            </div>
            <div className="col">
              <div className="img"><img src={artistPhoto} alt={name} width="" height="" /></div>
              <h3>Sobre mí</h3>
              <p>{description}</p>
              <div className="social-icons">
                <SocialButtons socialLinks={social} iconClassName="artistSocial"/>
              </div>
            </div>
        </div>
       <div className="personalGallery">
          <Title
              center="Trabajos del Artista"
          ></Title>
           <ListPaginatedImages
              data={images}
              actualPage={actualPage}
              location={`artista/${name}`}
              regs={regs}
            />
       </div>
      </section>

    </Layout>
  );
}
export async function getServerSideProps(context) {
  const actualArtist = context.params.artista
  const { artistas } = await import(`../../models/provisional-artists.json`);
  const works = await import(`../../models/provisional-images.json`);
  const artistData = artistas.find((artist)=> {
    return artist.name === actualArtist
  })
  const artistWork = works.images.filter((image)=>{
    return image.author === actualArtist
  })
  let page = context.query.page ? parseInt(context.query.page) : 1;
  const actualAmountOfImages = `${page}0`;
  const { images } = await getImages(artistWork, actualAmountOfImages, page);

  if (!artistData) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      homeArtists: artistData,
      images:images,
      actualPage:page,
      regs:imageReg
    } // will be passed to the page component as props
  };
}