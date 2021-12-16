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
              <SocialButtons socialLinks={social} iconClass="artistSocial" />
            </div>
            <h3>{artistType}</h3>
          </div>
          <Button buttonText="Ver Galería" buttonHref="/" />
        </div>
      </div>
    </>
  );
};
