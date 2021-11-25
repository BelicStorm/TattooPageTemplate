import { Button } from "./button.component"
import { Title } from "./title.component"

const imageData = [
    {},{},{},{},{},{},{},{},{},{}
  ]
export const Galeria = () => {

    return <div className="gallery">
              {
                imageData.map(image=>{
                  return <div className="gallery-item forest" key={Math.random()}>
                            <img className="gallery-image" src="https://lh3.googleusercontent.com/proxy/SsDPL12hiotYbM8BTdH3NnI5yBqDOAsXTDCeKZrCu-nXV4bNXgAkrBVZ6MaOAwCjxsqFd0U5_HXyG0zZgqXeuJ736sA7A5yK9bBfcboHYU27InF4INtU9M6T5qzLA25fj8ogex3NQhkQVe5i29WjIqO91rej59xOJq139xnvCwNWAQzpjiGIFac1" alt="forest"/>
                            <div className="overlay">
                                <Button buttonText="Ver trabajo" buttonHref="/"/>
                            </div>
                          </div>
                })
              }
              
            </div>
  }