import { Logo } from "./NavItem";
import { NavItem } from "./NavItem";

export function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <NavItem text="About Me" id="#about" />
      <NavItem text="Languages" id="#languages" />
      <NavItem text="Projects" id="#projects" />
      <NavItem text="Contact" id="#contact" />
    </nav>
  );
}


