import { Button } from "./button.component";

export const Galeria = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => {
        let {url} = image
        return (
          <div className="gallery-item forest" key={Math.random()}>
            <img
              className="gallery-image"
              src={url}
              alt="forest"
            />
            <div className="overlay">
              <Button buttonText="Ver trabajo" buttonHref="/" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
