import { Button } from "./button.component"
import { SocialButtons } from "./socialButtons.component"
import { Title } from "./title.component"


const ImageSide = ({ center, left, right}) => {
    return <div className="side iamgeSide">
              <div className="ArtistImage Center ">
                <img src={center} alt="forest"/>
              </div>
              <div className="ArtistImage Left">
                <img src={left} alt="forest"/>
              </div>
              <div className="ArtistImage Right">
                <img src={right} alt="forest"/>
              </div>
            </div>
  }
const TextSide = ({textType,title,description,social,actionButton}) => {
    const {haveSocialButtons, socialLinks} = social
    const {upper, center, sub} = title
    const {buttonText, buttonHref, isExternal} = actionButton
    return <div className="side textSide">
                <Title upper={upper} center={center} sub={sub}></Title> 
                <div className={`${textType}Content`}>
                <div className={`${textType}Description`}>
                    <p>{description}</p>
                </div>
                <div className={`${textType}Actions`}>
                    <Button buttonText={buttonText} buttonHref={buttonHref} isExternal={isExternal}/>
                    {
                    haveSocialButtons
                        ? <div className={`${textType}-Icons-Wrapper`}>
                            <SocialButtons socialLinks={socialLinks}   />
                        </div>
                        :""
                    }
                    
                </div>
                </div>
            </div>
}

export { ImageSide, TextSide}