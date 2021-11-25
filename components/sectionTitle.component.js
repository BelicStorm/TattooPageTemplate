export const SectionTitle = ({image,titleText}) => {
    return <div className={`BigImage ${image}`} style={{backgroundColor:"red"}}> 
              {
                titleText
                  ?<div className="sectionTitle"> 
                      <h2>{titleText}</h2>
                    </div>
                  :""
              }
           </div>
  }