import { useDarkMode } from "../hooks/useDarkMode"; 
import { Sun, Moon, Monitor } from "lucide-react"; 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="px-6 py-2 bg-button-bg-light dark:bg-button-bg-dark text-button-text-light dark:text-button-text-dark rounded-lg flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-5 h-5" />
          
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-5 h-5" />
          
        </>
      ) : (
        <>
          <Monitor className="w-5 h-5" />
          
        </>
      )}
    </button>
  );
}
