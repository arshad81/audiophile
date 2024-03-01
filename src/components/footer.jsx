import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <div className="bg-black text-white text-center md:text-start pt-12 pb-10 md:pb-8 px-6 md:px-7 ">
      <div className="max-w-6xl mx-auto">
        <img
          className="mx-auto md:mx-0 block my-12 md:my-8"
          src={logo}
          alt={logo}
        />
        <ul className="my-12 md:my-8 md:flex justify-start gap-x-9">
          <li className="uppercase tracking-wider my-4 font-bold">Home</li>
          <li className="uppercase tracking-wider my-4 font-bold">
            HEADPHONES
          </li>
          <li className="uppercase tracking-wider my-4 font-bold">SPEAKERS</li>
          <li className="uppercase tracking-wider my-4 font-bold">EARPHONES</li>
        </ul>
        <p className="my-12 md:my-8 text-cloud-grey font-medium">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="md:flex md:mt-20 justify-between">
          <p className="my-12 md:my-0 text-cloud-grey font-bold">
            Copyright 2021. All Rights Reserved
          </p>
          <ul className="flex justify-center items-center mt-12 md:mt-0 mb-0 gap-5">
            <li>
              <img src={facebook} alt="Facebook" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
