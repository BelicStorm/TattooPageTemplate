import { Button } from "./button.component";
export const SectionTitle = ({ image, titleText }) => {
  return (
    <div className={`BigImage ${image}`}>
      {titleText ? (
        <div className="sectionTitle">
          <h2>{titleText}</h2>
        </div>
      ) : (
        <>
            <img src="/media/hero-logo.png"></img>
            <div className="homeTitleSectionButtonGroup">
              <Button buttonHref={"https://www.instagram.com/ragatattoo/"} buttonText={"Pedir Cita"}/>
              <Button buttonHref={"https://www.google.com/maps/dir/raga+tattoo//@38.8236353,-0.6815852,12z/data=!4m8!4m7!1m5!1m1!1s0xd619d561b1cd9eb:0x132f735a4bee74b0!2m2!1d-0.5991837!2d38.8235305!1m0?entry=ttu"} buttonText={"Ubicación"}/>
            </div>
        </>
      )}
    </div>
  );
};
