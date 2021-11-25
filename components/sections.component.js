import { Artist } from "./artist.component"
import { Button } from "./button.component"
import { Galeria } from "./galeria.component"
import { SectionTitle } from "./sectionTitle.component"
import { TextSide } from "./sides.component"
import { Title } from "./title.component"
import { Slider,slideData } from "./slider.component"

const GalerySection = () => {
    return <>
            <SectionTitle image={"HomeImage"}/> 
            <section className="container featuredArtContainer">
              <Title upper={"Arte seleccionado por nuestros artistas"} center="Arate destacado" sub={"Tattoo & Piercing"}></Title> 
              <Galeria/> 
              <Button buttonText="Ver Galería" buttonHref=""/>
            </section>
          </>
  }
const ArtistSection = () => {
return <>
            <SectionTitle image={"HomeImage"} titleText={"Artistas del estudio"}/> 
            <section className="container">
            <Artist/> 
            </section>
        </>
}
const ContactSection = () => {
return <>
            <SectionTitle image={"HomeImage"} titleText={"Contactanos"}/> 
            <section className="container">
                <div className="contactContainer">
                    <TextSide
                        textType="contact"
                        title={{upper:undefined, center:"Ven al estudio", sub:undefined}}
                        description="Contact 1 Description"
                        social={{
                            haveSocialButtons:false,
                            socialLinks:undefined
                        }}
                        actionButton={{buttonHref:"/",buttonText:"Ver Ubicación"}}
                    />
                    <TextSide
                        textType="contact"
                        title={{upper:undefined, center:"Pide Cita", sub:undefined}}
                        description="Contact 2 Description"
                        social={{
                            haveSocialButtons:false,
                            socialLinks:undefined
                        }}
                        actionButton={{buttonHref:"/",buttonText:"Pide Cita"}}
                    />
                </div>
            </section>
        </>
}
const ShopSection = () => {
return <>
        <SectionTitle image={"HomeImage"} titleText={"Tienda"}/> 
        <section className="container shopContainer">
            <Title upper={undefined} center="Articulos de la tienda" sub={undefined}></Title> 
            <div className="sliderContainer">
                <Slider heading="test" slides={slideData}></Slider>
            </div>
            <Button buttonText="Ver tienda" buttonHref=""/>
        </section>
        
        </>
}

export {
    GalerySection,ArtistSection,ContactSection,ShopSection
}