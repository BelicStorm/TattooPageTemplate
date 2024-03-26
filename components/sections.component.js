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
          // sub={"Tattoo & Piercing"}
          sub={"Tattoo"}
        ></Title>
        <Galeria images={images} displayPosts={9} />
        <Button buttonText="Ver Galería" buttonHref="/galeria" />
      </section>
    </>
  );
};
const AboutUsSection = ({ artists }) => {
  return (
    <div className="container aboutUs" id="sponsors">
      <Title center="Nuestro Método" />
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
    </div>
  );
};
const ArtistSection = ({ artists }) => {
  return (
    <div className="container aboutUs">
      <Title center="Artistas del estudio" />
      <section className="artistsContainer">
        {artists.map((artist) => {
          return <ArtistCard key={Math.random()} data={artist} />;
        })}
      </section>
      <Button buttonText="Más sobre nosotros" buttonHref="/artistas" />
    </div>
  );
};
const Sponsors = ({ sponsors }) => {
  return (
    <div className="container aboutUs">
      <Title center="Sponsors que confían en nosotros" />
      <section className="sponsorsContainer">
        {sponsors.map(({name,page,image}) => {
          return <a key={name} href={page}><img src={image}></img></a>
        })}
      </section>
      
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
          actionButton={{ 
            buttonHref: "https://www.google.com/maps/dir/raga+tattoo//@38.8236353,-0.6815852,12z/data=!4m8!4m7!1m5!1m1!1s0xd619d561b1cd9eb:0x132f735a4bee74b0!2m2!1d-0.5991837!2d38.8235305!1m0?entry=ttu", 
            buttonText: "Ver Ubicación" 
          }}
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
          actionButton={{ buttonHref: "https://www.instagram.com/ragatattoo", buttonText: "Pide Cita" }}
        />
      </div>
    </section>
  );
};
export { GalerySection, ArtistSection, ContactSection, AboutUsSection,Sponsors };
