import { SocialButtons } from "./socialButtons.component";
import { Button } from "./button.component";

export const ArtistCard = ({ data }) => {
  const { name, aptitude, artistPhoto, social } = data;
  const { tattoo, piercing } = aptitude;
  let artistType = "";
  artistType = tattoo && !piercing ? "Tattoo Artist" : artistType;
  artistType = !tattoo && piercing ? "Piercing Artist" : artistType;
  artistType = tattoo && piercing ? "Tattoo & Piercing" : artistType;
  return (
    <>
      <div className="artistContainer">
        <div
          className="card card0"
          style={{ backgroundImage: `url(${artistPhoto})` }}
        >
          <div className="border">
            <h2>{name}</h2>
            <div className="icons">
              <SocialButtons
                socialLinks={social}
                iconClassName="artistSocial"
              />
            </div>
            <h3>{artistType}</h3>
          </div>
          <Button buttonText="Ver Galería" buttonHref={`/artista/${name}`} />
        </div>
      </div>
    </>
  );
};

export const ArtistPresentation = ({data, imageSide})=>{
  const { name, aptitude, artistPhoto, social, description } = data;
  const { tattoo, piercing } = aptitude;
  let artistType = "";
  artistType = tattoo && !piercing ? "Tattoo Artist" : artistType;
  artistType = !tattoo && piercing ? "Piercing Artist" : artistType;
  artistType = tattoo && piercing ? "Tattoo & Piercing" : artistType;
  return (
    <>
      <div className="ArtistPresentation-container">
        <div className="ArtistPresentation-image">
        <img
          src={artistPhoto}
          alt="Picture of the author"
        />
        </div>
        <div className="ArtistPresentation-text">
            <h2>{name}</h2>
            <h3>{artistType}</h3>
            <div className="ArtistPresentation-description">
                <p>{description}</p>
            </div>
            <div className="ArtistPresentation-actions">
              <Button buttonText="Ver Trabajos" buttonHref={`/artista/${name}`} />
              <Button buttonText="Pedir Cita" buttonHref={social[0].link} isExternal={true} />
              <p style={{width:"auto"}}>{social[1].link}</p>
              {/* <div className="social-icons">
                <span>Redes Sociales:</span>
                <SocialButtons socialLinks={social} iconClassName="artistSocial"/>
              </div> */}
            </div>
            
        </div>
        
      </div>
      
    </>
  )
}

