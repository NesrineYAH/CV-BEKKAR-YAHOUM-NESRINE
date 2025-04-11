import react from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";

function Header() {
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("i18nextLng") || "fr";

  const changeLanguage = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };
  return (
    <header className="header">
      <div className="Bloc">
        <h1>Nesrine BEKKAR YAHOUM</h1> <br />
        <h2>{t("Header.jobTitle")}</h2>
       
      </div>
      <label className="Btn_lang">
        <select onChange={changeLanguage} value={lang}>
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
      </label>
    </header>
  );
}

export default Header;
