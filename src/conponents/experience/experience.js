import react from "react";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <section>
      <div>
        <h3>{t("experience.title")}</h3>
        <strong>{t("experience.developer")}</strong>
        <ul>
          <li>{t("experience.developer_LiI")} </li>
          <li>{t("experience.developer_LiII")}</li>
        </ul>
        <strong>{t("experience.familyBusiness")}</strong>{" "}
        <ul>
          <li>{t("experience.familyBusiness_LiI")}</li>
        </ul>
        <strong>{t("experience.callCenter")}</strong>
        <ul>
          <li>{t("experience.callCenter_Li")}</li>
        </ul>
        <strong>{t("experience.customerService")}:</strong>
        <ul>
          <li>{t("experience.customerService_Li")}</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
