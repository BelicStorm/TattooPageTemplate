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
          center="Arte destacado"
          sub={"Tattoo & Piercing"}
        ></Title>
        <Galeria images={images} />
        <Button buttonText="Ver Galería" buttonHref="/galeria" />
      </section>
    </>
  );
};
const AboutUsSection = ({ artists }) => {
  return (
    <div className="container aboutUs">
      <Title center="Nuetsro Metodo" />
      <section className="policityWorkContainer">
        <div>
          <h2>1. DESCRÍBENOS TU IDEA</h2>
          <p>
            Cuéntanos qué te gustaría tatuarte.Si lo crees necesario, adjunta
            alguna foto de referencia que nos sirva para hacernos una idea del
            estilo que buscas. *No copiamos diseños o tatuajes de otros
            artistas. Diseñamos cada tatuaje para cada cliente. Tampoco
            repetimos diseños que ya se han tatuado. Si quisieras tatuarte una
            ilustración o diseño de otra persona necesitaríamos el
            consentimiento explícito del autor.
          </p>
        </div>
        <div>
          <h2>2. EN QUÉ ZONA DEL CUERPO TE GUSTARÍA TATUARTE?</h2>
          <p>
            Dinos que zona del cuerpo quieres y/o pide consejo para saber que
            zonas pueden doler mas. Tambien puedes medir en centímetros lo que
            quieres que ocupe.
          </p>
        </div>
        <div>
          <h2>
            3. CON ESTA INFORMACIÓN YA PODEMOS DARTE UN PRESUPUESTO Y CITA
          </h2>
          <p>
            En el caso de que estés de acuerdo con nuestro presupuesto y quieras
            llevar a cabo tu proyecto, necesitaremos un depósito para reservar
            tu cita de tattoo y para poder trabajar en el diseño del mismo, este
            depósito se descuenta después del precio total del tatuaje
          </p>
        </div>
        <div>
          <h2>4. ¿CÚANDO TENDRÉ MI DISEÑO?</h2>
          <p>
            Unos días antes de nuestra cita de tattoo (depende del flujo de
            trabajo podría ser hasta 24h antes de la cita), nos pondremos en
            contacto contigo para enseñarte el diseño y que nos des el visto
            bueno.
          </p>
        </div>
      </section>
      <Button buttonText="Más sobre nosotros" buttonHref="/" />
    </div>
  );
};
const ArtistSection = ({ artists }) => {
  return (
    <div className="container aboutUs">
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
  );
};
export { GalerySection, ArtistSection, ContactSection, AboutUsSection };
