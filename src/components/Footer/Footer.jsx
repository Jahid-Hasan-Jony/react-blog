import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="border-t-2 border-second">
      <div className="flex gap-4 flex-row py-16 container m-auto">
        <div className="w-1/4">
          <img className="w-36" src="/mts.png" alt="logo" />
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            recusandae dolorum totam dolore odit assumenda error ullam eos
            nulla, maxime sapiente minus accusamus unde inventore, aut eligendi,
            perferendis mollitia impedit!
          </p>
        </div>
        <div className="w-1/4">
          <h2 className="font-bold text-lg text-second">Quick Links</h2>
          <div className="py-1">
            <FontAwesomeIcon icon={faCaretRight} /> Home
          </div>
          <div className="py-1">
            <FontAwesomeIcon icon={faCaretRight} /> About
          </div>
          <div className="py-1">
            <FontAwesomeIcon icon={faCaretRight} /> Blogs
          </div>
          <div className="py-1">
            <FontAwesomeIcon icon={faCaretRight} /> Contact Us
          </div>
        </div>
        <div className="w-1/4">
          <h2 className="font-bold text-lg text-second">Contact Info</h2>
        </div>
        <div className="w-1/4">
          <h2 className="font-bold text-lg text-second">Newsletter & Social</h2>
          <p className="py-2">
            Sign up to get our latest exclusive updates, deals, offers and
            promotions.
            <div className="py-4 flex flex-row gap-5">
              <FontAwesomeIcon
                className="text-second hover:text-first  text-2xl"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="text-second hover:text-first  text-2xl"
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                className="text-second hover:text-first text-2xl"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="text-second hover:text-first text-2xl"
                icon={faYoutube}
              />
            </div>
          </p>
        </div>
      </div>
      <div className="bg-second text-center py-2 text-white">
        Copyright 2025 <FontAwesomeIcon icon={faCopyright} /> MAK-Tech Solution
        <FontAwesomeIcon icon="fa-thin fa-copyright" />
      </div>
    </footer>
  );
};

export default Footer;
