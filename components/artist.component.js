import { ImageSide, TextSide } from "./sides.component"
/* "name":"John Doe","do":{"tatto":true,"piercing":false},"artistPhoto":"/tatto-test/artist1.jpg","recomendedWork1":"/tatto-test/2.jpg","recomendedWork2":"/tatto-test/3.jpg",
         "social":{"facebook":"","instagram":"","twitter":""} */
export const Artist = ({data}) => {  
  const {name,aptitude,artistPhoto,recomendedWork1,recomendedWork2,social,description} = data
  const {tattoo, piercing} = aptitude
  let artistType = ""
  artistType = tattoo && !piercing ? "Tattoo Artist" : artistType
  artistType = !tattoo && piercing ? "Piercing Artist" : artistType
  artistType = tattoo && piercing ? "Tattoo & Piercing Artist" : artistType
    return  <>
              <div className="artistsContainer">
                <ImageSide center={artistPhoto} left={recomendedWork1} right={recomendedWork2}/>
                <TextSide
                  textType="artist"
                  title={{upper:artistType, center:name, sub:undefined}}
                  description={description}
                  social={{
                    haveSocialButtons:true,
                    socialLinks:social
                  }}
                  actionButton={{buttonHref:"/",buttonText:"Ver Artista"}}
                />
              </div>
            </>
  }