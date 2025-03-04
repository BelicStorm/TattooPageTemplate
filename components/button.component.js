import Link from "next/dist/client/link";

const ButtonInternalLink = ({ buttonText, buttonHref }) => {
  return (
    <Link
      href={{
        pathname: buttonHref
      }}
    >
      <a className="button2">{buttonText}</a>
    </Link>
  );
};

const ButtonExternalLink = ({ buttonText, buttonHref }) => {
  return (
    <a className="button2" href={buttonHref} target="_blank">{buttonText}</a>
  );
};

export const Button = ({ buttonText, buttonHref, isExternal }) => {
  return !isExternal ? <ButtonInternalLink buttonHref={buttonHref} buttonText={buttonText} />
    : <ButtonExternalLink buttonHref={buttonHref} buttonText={buttonText} />
};
