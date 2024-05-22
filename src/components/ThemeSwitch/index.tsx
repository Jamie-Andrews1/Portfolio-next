"use client";
import { useContext } from "react";
import MyThemeContext from "@/app/theme-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import "./styles.css";
import { useEffect, useState } from "react";

interface Props {}

export default function ThemeSwitch({}: Props) {
  const themeCtx: {
    isDarkTheme?: boolean;
    toggleThemeHandler: () => void;
  } = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <div>
      {!themeCtx.isDarkTheme ? (
        <button
          title="dark mode"
          className="moon"
          type="button"
          onClick={toggleThemeHandler}
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      ) : (
        <button
          title="light mode"
          className="sun"
          type="button"
          onClick={toggleThemeHandler}
        >
          <FontAwesomeIcon icon={faSun} />
        </button>
      )}
    </div>
  );
}
