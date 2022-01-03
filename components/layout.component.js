import Link from "next/dist/client/link";
import Head from "next/head";
import Image from "next/image";
import { SocialButtons } from "./socialButtons.component";

const Menu = ({ active }) => {
  const menu = [
    { sectionName: "galeria", showedName: "Galería", path: "/galeria" },
    { sectionName: "artistas", showedName: "Artistas", path: "/artistas" },
    { sectionName: "contacto", showedName: "Contacto", path: "/" },
    { sectionName: "tienda", showedName: "Tienda", path: "/" }
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
        <title>Raga Tattoo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="navbar">
        <a className="brand" href="/">
          <Image
            src={`/media/logo.png`}
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
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <h2>Company Name</h2>
          <p>Description of any product or motto of the company.</p>
        </div>
        <div className="footer-items">
          <h3>Contact us</h3>
            <ul>
              <li>XYZ, abc</li>
              <li>123456789</li>
              <li>xyz@gmail.com</li>
            </ul> 
        </div>
      </div>
      
      <div className="footer-bottom">
        Copyright &copy; Cristian Pardo 2021
      </div>
    </div>
  );
};

export default function Layout({ children, actual }) {
  return (
    <>
      <Menu active={actual}></Menu>
      {children}
      <Footer></Footer>
      <SocialLinks></SocialLinks>
    </>
  );
}
