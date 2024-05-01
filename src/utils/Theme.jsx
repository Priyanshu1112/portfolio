// Filename - hooks/useDarkSide.js

import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  useEffect(() => {
    const root = window.document.documentElement;
    console.log(root);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (localStorage.theme == "dark") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  console.log({ theme, colorTheme });

  return [colorTheme, setTheme];
}
