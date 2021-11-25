import Image from 'next/image'
const socialLinksDictionary ={
    "Facebook":{link:"https://www.facebook.com/RagaTattoo/",img:`/media/facebook.svg`},
    "Instagram":{link:"https://www.instagram.com/ragatattoo/?hl=es",img:`/media/instagram.svg`},
    "Twitter":{link:"https://twitter.com/TwitterDev/",img:`/media/twitter.svg`}
  }

export const SocialButtons = ({socialLinks}) => {
    return <>
              {
                socialLinks.map(socialLink=>{
                  const {link,img} = socialLinksDictionary[socialLink]
                  return <div className="icon" key={Math.random()}>
                            <a title={socialLink} href={link}  target="_blank">
                                <Image
                                    src={img}
                                    alt={socialLink}
                                    width="20"
                                    height="20"
                                />
                            </a>
                        </div>
                })
              }
          </>
  }