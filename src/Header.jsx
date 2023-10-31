import logo from "./assets/logo.png"; // Ruta de la imagen

export function Header({ onOptionClick }) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo de la empresa" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => onOptionClick("menuBienvenido")}>
              Bienvenido
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onOptionClick("menuProveedores")}>
              Proveedores
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
