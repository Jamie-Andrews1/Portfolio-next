"use client";
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import Loading from "@/components/Loading/loading";

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: ReactNode;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }
  const prefersDarkColorScheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  function initialThemeHandler() {
    setMounted(true);
    if (isLocalStorageEmpty() && prefersDarkColorScheme()) {
      localStorage.setItem("isDarkTheme", `true`);
      document!.querySelector(":root")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      isDarkTheme && document!.querySelector(":root")!.classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector(":root")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  if (!mounted) {
    return <Loading />;
  }
  return (
    <MyThemeContext.Provider
      value={{ isDarkTheme: isDarkTheme, toggleThemeHandler }}
    >
      {props.children}
    </MyThemeContext.Provider>
  );
}
export default MyThemeContext;
