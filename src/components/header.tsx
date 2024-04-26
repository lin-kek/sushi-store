import Sidebar from "./cart/sidebar";
import Logo from "./logo";
import { ThemeToggle } from "./theme/theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <Logo />
      <div className="flex gap-2">
        <Sidebar />
        <ThemeToggle />
      </div>
    </header>
  );
}
