import { Button } from "./button.component";

export const Galeria = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => {
        return (
          <div className="gallery-item forest" key={Math.random()}>
            <img
              className="gallery-image"
              src="https://i.pinimg.com/736x/d7/32/c8/d732c81e157c2ede834e5584699a81a6.jpg"
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
