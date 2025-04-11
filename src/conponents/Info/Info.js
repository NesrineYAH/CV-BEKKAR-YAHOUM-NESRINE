import react from "react";
import { useTranslation } from "react-i18next";
import picture from "../../assets/MON_IMAGE-RB.png";
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Info() {
  const { t } = useTranslation();

  return (
    <div id="info">
      <img className="logo" src={picture} alt="photo" />
      <div>
        <ul>
          <li className="item">
            <FaPhoneFlip />
            <a itemProp="telephone" href="0033769551422">
              (0033) 7 69 55 14 22
            </a>
          </li>

          <li className="item">
            <IoMail />
            <a itemProp="email" href="mailto:nesrineyahoum@gmail.com">
              nesrineyahoum@gmail.com
            </a>
          </li>
          <li className="item">
            <FontAwesomeIcon icon={faLocationDot} />
            Paris, ile de france
          </li>
        </ul>
      </div>

      <div id="Links">
        <a
          class="link"
          href="http://linkedin.com/in/nesrine-bekkar-16ba4590"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialLinkedinCircular size="50px" />
        </a>
        <a
          class="link"
          href="https://github.com/NesrineYAH"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <DiGithubBadge size="50px" />
        </a>

        <a
          class="link"
          href="https://nesrinebekkar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiGlobe size="40px" />
        </a>

        <a href="https://x.com/NesrineYAH87" target="_blank" rel="X">
          {" "}
          <RiTwitterXLine size="35px" className="icone" />
        </a>
      </div>

      <div>
        <h3>{t("skills.title")}</h3>
        <ul id="container">
          <li>
            {" "}
            <strong>{t("skills.frontend")} : </strong>
            {t("skills.frontend_Li")}
          </li>
          <li>
            <strong> {t("skills.backend")} :</strong> Node.js, Express.js,
            MongoDB{" "}
          </li>
          <li>
            <strong> {t("skills.optimization")} :</strong> SEO,
            Performance,Responsive Design{" "}
          </li>
          <li>
            {" "}
            <strong> {t("skills.Outils")} : </strong> Github, Postamne, notion,
            Monday.com
          </li>
        </ul>
      </div>

      <div>
        <h3>{t("Lang.title")}: </h3>
        <p>{t("Lang.prg")} </p>
        <div>
          <h3>{t("INTERESTS.titte")}</h3>
          <p>{t("INTERESTS.prg")}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
