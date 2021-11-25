export const Title = ({upper, center, sub}) => {
    return <div className="title">
              {upper ?<p className="upperHeading">{upper}</p>:""} 
              <h3 className="heading">{center}</h3>
              {sub ?<p className="subHeading">{sub}</p>:""}
            </div>
  }