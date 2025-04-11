import react from "react";
import { useTranslation } from "react-i18next";

function Formations() {
  const { t } = useTranslation();

  return (
    <section>
      <div id="presentation">
        Développeuse Web créative et innovante, capable de créer des sites web
        pour des clients, dotée d'excellentes compétences en matière
        d'organisation, de planification et de vérification de code. Volonté
        d'apporter mon expertise dans la réalisation de projets de conception de
        sites Internet
      </div>
      <div>
        <h3>{t("training.title")} </h3>
        <ul id="container">
          <li>{t("training.Li1")}</li>
          <li>{t("training.Li2")}</li>
          <li>{t("training.Li3")}</li>
          <li>{t("training.Li4")}</li>
          <li>{t("training.Li5")}</li>
        </ul>
      </div>
    </section>
  );
}

export default Formations;
