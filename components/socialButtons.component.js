import Image from 'next/image'
const socialLinksDictionary ={
    "Facebook":{link:"https://www.facebook.com/RagaTattoo/",img:`/media/facebook.svg`},
    "Instagram":{link:"https://www.instagram.com/ragatattoo/?hl=es",img:`/media/instagram.svg`},
    "Twitter":{link:"https://twitter.com/TwitterDev/",img:`/media/twitter.svg`},
  }

export const SocialButtons = ({socialLinks}) => {
    return <>
              {
                socialLinks.map(socialLink=>{
                  const {link,img} = socialLinksDictionary[socialLink] ?socialLinksDictionary[socialLink] :socialLink
                  
                  return <div className="icon" key={Math.random()}>
                            <a title={"Social Link"} href={link}  target="_blank">
                                {<Image
                                    src={img}
                                    alt={"social link"}
                                    layout='fill'
                                />}
                            </a>
                        </div>
                })
              }
          </>
  }
