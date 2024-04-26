import "./styles/Header.css";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

export default function Header(props) {
  const { theme, setTheme } = props;
  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span className="icon" onClick={ToggleTheme}>
            {theme === "light" ? <LuSun /> : <IoMoon />}
        </span>
      </div>
    </header>
  );
}
