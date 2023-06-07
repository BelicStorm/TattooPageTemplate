import { Button } from "./button.component";
/* import Image from 'next/image' 
<div className="gallery-image">
              <Image src={url} 
                    alt="Picture of the author"
                    layout='fill'
                    objectFit='contain'/>
            </div>
*/

export const Galeria = ({ images, displayPosts }) => {
  return (
    <div className="gallery">
        {images.slice(0, displayPosts).map(image => {
          let {url,title} = image
          return (
            <div className="gallery-item forest" key={Math.random()}>
              <img
                className="gallery-image"
                src={url}
                alt="forest"
              />
              <div className="overlay">
                <Button buttonText="Ver trabajo" buttonHref={`/trabajos/${title}`} />
              </div>
            </div>
          );
        })}

    </div>
  );
};
