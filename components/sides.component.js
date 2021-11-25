import { Button } from "./button.component"
import { SocialButtons } from "./socialButtons.component"
import { Title } from "./title.component"


const ImageSide = () => {
    return <div className="side iamgeSide">
              <div className="ArtistImage Center ">
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd1c3895999a4f9c5e4ac57e6e9fa2fb&auto=format&fit=crop&w=1950&q=80" alt="forest"/>
              </div>
              <div className="ArtistImage Left">
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd1c3895999a4f9c5e4ac57e6e9fa2fb&auto=format&fit=crop&w=1950&q=80" alt="forest"/>
              </div>
              <div className="ArtistImage Right">
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd1c3895999a4f9c5e4ac57e6e9fa2fb&auto=format&fit=crop&w=1950&q=80" alt="forest"/>
              </div>
            </div>
  }
const TextSide = ({textType,title,description,social,actionButton}) => {
    const {haveSocialButtons, socialLinks} = social
    const {upper, center, sub} = title
    const {buttonText, buttonHref} = actionButton
    return <div className="side textSide">
                <Title upper={upper} center={center} sub={sub}></Title> 
                <div className={`${textType}Content`}>
                <div className={`${textType}Description`}>
                    <p>{description}</p>
                </div>
                <div className={`${textType}Actions`}>
                    <Button buttonText={buttonText} buttonHref={buttonHref}/>
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