import { ImageSide, TextSide } from "./sides.component"

export const Artist = () => {  
    return  <>
              <div className="artistsContainer">
                <ImageSide/>
                <TextSide
                  textType="artist"
                  title={{upper:"Tattoo Artist", center:"Jon Doe", sub:undefined}}
                  description="Artist Description"
                  social={{
                    haveSocialButtons:true,
                    socialLinks:["Facebook","Instagram","Twitter"]
                  }}
                  actionButton={{buttonHref:"/",buttonText:"Ver Artista"}}
                />
              </div>
            </>
  }