import React from "react";
import { useTranslation } from "react-i18next";

const Projets = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t("projects.title")}</h3>
      <ul id="container">
        <li>
          {t("projects.ohmyfood")}
          <a
            href="https://github.com/NesrineYAH/Ohmyfood-YAHOUM-NESRINE.git"
            target="_blank"
            rel="noopener noreferrer"
            className="lien"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>{" "}
        </li>
        <li>
          {" "}
          {t("projects.lapanthere")}
          <a
            className="lien"
            href="https://github.com/NesrineYAH/La-Pantherre-YAHOUM-Nesrine-site-optimise.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>
        </li>
        <li>
          {" "}
          {t("projects.Picante")}
          <a
            className="lien"
            href="https://github.com/NesrineYAH/Construisez-une-API-securise-pour-une-appliccation-Picante.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>
        </li>
        <li>
          {t("projects.Kanap")}
          <a
            className="lien"
            href="https://github.com/NesrineYAH/KANAP-YAHOUM-Nesrine.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>
        </li>
        <li>
          {" "}
          {t("projects.KASA")}
          <a
            className="lien"
            href="https://github.com/NesrineYAH/Kasa-app-YAHOUM.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>
        </li>
        <li>
          {" "}
          {t("projects.petitsPlats")}
          <a
            className="lien"
            href="https://github.com/NesrineYAH/les_petits_plats.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>
        </li>
        <li>
          {" "}
          {t("projects.Fisheye")}
          <a
            className="lien"
            href="https://github.com/NesrineYAH/Front-End-Fisheye.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>
        </li>
        <li>
          {t("projects.SaaSRH")}
          <a
            className="lien"
            href="https://github.com/NesrineYAH/Projet-jest.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("projects.a")}{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projets;
