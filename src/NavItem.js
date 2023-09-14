import AC from "./AC.svg";

export function NavItem({ text, id }) {
  return (
    <div className="nav-item">
      <h3><a href={id}>{text}</a></h3>
    </div>
  );
}

export function Logo() {
  return (
    <a href="/">
      <img src={AC} className='nav-logo' color="white"></img>
    </a>
  );
}

