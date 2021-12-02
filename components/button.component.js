import Link from "next/dist/client/link";

export const Button = ({ buttonText, buttonHref }) => {
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
