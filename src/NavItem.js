import logo from "./logo.svg";

export function NavItem({ text, id }) {
  return (
    <div className="nav-item">
      <h3><a href={id}>{text}</a></h3>
    </div>
  );
}

export function Logo() {
  return (
      <img src={logo} className='nav-logo'></img>
  );
}

