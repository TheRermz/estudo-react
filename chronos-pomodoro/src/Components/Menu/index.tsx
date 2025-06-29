import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handleThemeChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ir para a Home"
          title="Ir para a Home"
        >
          <HouseIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ver histórico"
          title="Ver histórico"
        >
          <HistoryIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Configuração"
          title="Configuração"
        >
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Alterar Tema"
          title="Alterar Tema"
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
};
