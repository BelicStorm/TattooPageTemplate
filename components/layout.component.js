import Image from "next/image";
import { SocialButtons } from "./socialButtons.component";

const Menu = () => {
  return (
    <header className="header">
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
          <ul className="menu">
            <li className="menu-item">
              <a href="#skills">Galeria</a>
            </li>
            <li className="menu-item">
              <a href="#portfolio">Artistas</a>
            </li>
            <li className="menu-item">
              <a href="#contact">Contactanos</a>
            </li>
            <li className="menu-item">
              <a href="#contact">Tienda</a>
            </li>
          </ul>
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
    <footer className="footer">
      <p>Texto del footer - Texto del Footer</p>
      <div className="divider"></div>
      <p>Texto del footer 2</p>
    </footer>
  );
};

export default function Layout({ children }) {
  return (
    <>
      <Menu></Menu>
      {children}
      <Footer></Footer>
      <SocialLinks></SocialLinks>
    </>
  );
}
