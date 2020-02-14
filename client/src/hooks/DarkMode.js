import {useEffect} from "react";
import useLocalStorage from "./LocalStorage";

function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);

  useEffect(() => {
    document.body.classList.remove('dark-mode');
    if (darkMode) document.body.classList.add('dark-mode');
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
