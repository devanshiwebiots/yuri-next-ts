import { languageData, languageDataType } from "@/Data/Layout/RightHeader";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<languageDataType | undefined>(undefined);
  const [lang, setLang] = useState("EN");
  const [flag, setFlag] = useState("us");

  const changeLanguage = (lng: languageDataType) => {
    setLang(lng.languageParameter);
    setFlag(lng.languageIconClassName);
    i18n.changeLanguage(lng.languageParameter);
    Cookies.set("i18next", lng.languageParameter);  
    setOpen(false);
    router.refresh();
  };

  const LanguageSelection = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const savedLanguage = Cookies.get("i18next") || currentLanguage || "EN";  
    const defaultLanguage = languageData.find((data) => data.languageParameter === savedLanguage);
    if (defaultLanguage) {
      setLang(defaultLanguage.languageParameter);
      setFlag(defaultLanguage.languageIconClassName);
      setSelectedLang(defaultLanguage);
      i18n.changeLanguage(defaultLanguage.languageParameter); 
    }
  }, [currentLanguage]);

  useEffect(() => {
    if (lang === "ae") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
      document.documentElement.dir = "rtl";
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
      document.documentElement.dir = "ltr";
    }
  }, [lang]);

  return (
    <ul className='footer-language simple-list'>
      <li className='language-nav'>
        <div className={`translate_wrapper ${open ? "active" : ""}`}>
          <div className='current_lang' onClick={LanguageSelection}>
            <i className={`flag-icon fi fi-${flag}`}></i>
            <span className='ms-2 lang-txt f-light f-w-500'>{lang}</span>
            <span className='ms-2'>
              <i className='fa fa-caret-down txt-primary'></i>
            </span>
          </div>
          <div className={`more_lang ${open ? "active" : ""}`}>
            {languageData.map((item, index) => (
              <div className='lang' key={index} onClick={() => changeLanguage(item)}>
                <i className={`flag-icon fi fi-${item.languageIconClassName}`}></i>
                <span className='lang-txt'>
                  {item.languageName}
                  <span> ({item.languageParameter})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Languages;
