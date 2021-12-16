import { ArtistCard } from "./artist.component";
import { Button } from "./button.component";
import { Galeria } from "./galeria.component";
import { SectionTitle } from "./sectionTitle.component";
import { TextSide } from "./sides.component";
import { Title } from "./title.component";

const GalerySection = ({ images }) => {
  return (
    <>
      <SectionTitle image={"HomeImage"} />
      <section className="container featuredArtContainer">
        <Title
          upper={"Te recomendamos"}
          center="Arate destacado"
          sub={"Tattoo & Piercing"}
        ></Title>
        <Galeria images={images} />
        <Button buttonText="Ver Galería" buttonHref="/galeria" />
      </section>
    </>
  );
};
const ArtistSection = ({ artists }) => {
  return (
    <div className="aboutUs">
      <SectionTitle image={"HomeImage"} titleText={"Artistas del estudio"} />
      <Title center="Artistas del estudio" />
      <section className="artistsContainer">
        {artists.map((artist) => {
          return <ArtistCard data={artist} />;
        })}
      </section>
      <Button buttonText="Más sobre nosotros" buttonHref="/" />
    </div>
  );
};
const ContactSection = () => {
  return (
    <>
      <SectionTitle image={"HomeImage"} titleText={"Contactanos"} />
      <section className="container">
        <div className="contactContainer">
          <TextSide
            textType="contact"
            title={{
              upper: undefined,
              center: "Ven al estudio",
              sub: undefined
            }}
            description="Ven al estudio y habla directamente con nosotros sobre lo que quieres hacerte. "
            social={{
              haveSocialButtons: false,
              socialLinks: undefined
            }}
            actionButton={{ buttonHref: "/", buttonText: "Ver Ubicación" }}
          />
          <TextSide
            textType="contact"
            title={{ upper: undefined, center: "Pide Cita", sub: undefined }}
            description="Pide cita para resolver dudas, ultimar un tatuaje etc, y asegurate de que estaremos a la hora 
            que lo necesitas."
            social={{
              haveSocialButtons: false,
              socialLinks: undefined
            }}
            actionButton={{ buttonHref: "/", buttonText: "Pide Cita" }}
          />
        </div>
      </section>
    </>
  );
};
export { GalerySection, ArtistSection, ContactSection };
