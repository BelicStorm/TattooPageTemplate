import { SocialButtons } from "./socialButtons.component"

export const ArtistCard = ({data}) => {  
  const {name,aptitude,artistPhoto,recomendedWork1,recomendedWork2,social,description} = data
  const {tattoo, piercing} = aptitude
  let artistType = ""
  artistType = tattoo && !piercing ? "Tattoo Artist" : artistType
  artistType = !tattoo && piercing ? "Piercing Artist" : artistType
  artistType = tattoo && piercing ? "Tattoo & Piercing" : artistType
    return  <>
              <div className="artistContainer">
                <div className="card card0" style={{backgroundImage: `url(${artistPhoto})`}}>
                  <div className="border">
                    <h2>{name}</h2>
                    <div className="icons">
                      <SocialButtons socialLinks={social} iconClass="artistSocial" />
                    </div>
                    <h3>{artistType}</h3>
                  </div>
                </div>
              </div>
            </>
  }

/* <ImageSide center={artistPhoto} left={recomendedWork1} right={recomendedWork2}/>
                <TextSide
                  textType="artist"
                  title={{upper:artistType, center:name, sub:undefined}}
                  description={description}
                  social={{
                    haveSocialButtons:true,
                    socialLinks:social
                  }}
                  actionButton={{buttonHref:"/",buttonText:"Ver Artista"}}
                /> */