import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { useState } from "react";

const MoonLight = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { mix_background_layout } = useAppSelector((store) => store.themeCustomizer);
  const darkModeHandler = () => {
    const body = document.body;
    if (darkMode) {
      body.classList.remove("dark-only");
      body.classList.remove("dark-sidebar");
      body.classList.add("light-only");
    } else {
      body.classList.remove("light-only");
      body.classList.remove("dark-sidebar");
      body.classList.add("dark-only");
    }
    setDarkMode(!darkMode);
  };

  return (
    <li>
      <div className="mode">{document.body.classList.contains("dark-only") ? <SvgIcon className="moon-icon d-block" iconId="moon" onClick={darkModeHandler} /> : <SvgIcon className="sun-icon" iconId="sun" onClick={darkModeHandler} />}</div>
    </li>
  );
};

export default MoonLight;
