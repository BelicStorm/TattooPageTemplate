import Link from "next/dist/client/link";
import Head from "next/head";
import Image from "next/image";
import { SocialButtons } from "./socialButtons.component";
import { Button } from "./button.component";

const Menu = ({ active, metaData }) => {
  const {metaTitle,metaDesc} = metaData

  const menu = [
    { sectionName: "galeria", showedName: "Galería", path: "/galeria" },
    { sectionName: "artistas", showedName: "Artistas - Pedir Cita", path: "/artistas" },
    { sectionName: "videos", showedName: "Vídeos", path: "/videos" },
    // { sectionName: "tienda", showedName: "Tienda", path: "/" }
  ];

  const isActive = (section) => {
    return active === section ? "active" : "menu-item";
  };
  const makeMenu = () => {
    const to_return = menu.map((menuItem) => {
      let { sectionName, showedName, path } = menuItem;
      return (
        <li key={Math.random()} className={isActive(sectionName)}>
          <Link href={{ pathname: path }}>
            <a href="#skills">{showedName}</a>
          </Link>
        </li>
      );
    });
    return to_return;
  };

  return (
    <header className="header">
      <Head>
        <title>{metaTitle ?metaTitle :"Raga Tattoo"}</title>
        <meta name="description" content={
          !metaDesc 
            ?`Somos un estudio con larga trayectoria de Tattoo en Ontinyent. 
              Disponemos de excelentes profesionales con diferentes estilos para cumplir con tus expectativas. 
              - Teléfono: 669 56 44 58 - Dirección: Av. d'Albaida, 12, 46870 Ontinyent, Valencia` 
            :metaDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <nav className="navbar">
        <a className="brand" href="/">
          <Image
            src={`/media/logo.svg`}
            alt="Raga Tattoo"
            width="60"
            height="60"
          />
        </a>
        <input type="checkbox" id="nav" className="hidden" />
        <label htmlFor="nav" className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="navbar-wrapper">
          <ul className="menu">{makeMenu()}</ul>
        </div>
      </nav>
    </header>
  );
};

/* Sharer url: Facebook("https://www.facebook.com/sharer/sharer.php?u=https://unclebigbay.hashnode.dev") 
               Twitter:("https://twitter.com/intent/tweet?text=I just published an article on how you can share content to Twitter from the client website") */

const SocialLinks = () => {
  return (
    <div className="social-Icons-Wrapper">
      <SocialButtons socialLinks={["Facebook", "Instagram", "Twitter"]} />
    </div>
  );
};
const Footer = () => {
  let d = new Date(); 
  let currentYear = d.getFullYear(); 
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <h2>Raga Tattoo</h2>
          <p>
              Somos un estudio con larga trayectoria de Tattoo en Ontinyent. 
              Disponemos de excelentes profesionales con diferentes estilos para cumplir con tus expectativas.
          </p>
        </div>
        <div className="footer-items">
          <h3>Contact us</h3>
            <div>
              <p>Dirección: Av. d'Albaida, 12, 46870 Ontinyent, Valencia</p>
               
            </div> 
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
              <Button buttonText="Pedir Cita" buttonHref={"/artistas"} isExternal={true} />
              <SocialButtons socialLinks={["Facebook", "Instagram", "Twitter"]} />
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright &copy; {currentYear} - Cristian Pardo - Todos los derechos reservados
      </div>
    </div>
  );
};

export default function Layout({ children, actual, metaData }) {
  return (
    <>
      <Menu active={actual} metaData={metaData}></Menu>
      {children}
      <Footer></Footer>
      <SocialLinks></SocialLinks>
    </>
  );
}
