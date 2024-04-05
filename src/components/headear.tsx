import logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={logo} alt="NLW" />
      <nav className="flex items-center gap-5">
        <a className="font-medium text-sm text-zinc-300" href="">
          Eventos
        </a>
        <a className="font-medium text-sm" href="">
          Participantes
        </a>
      </nav>
    </div>
  );
}
