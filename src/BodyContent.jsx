import { BienvenidoContent } from "./BienvenidoContent";
import { ProveedoresContent } from "./ProveedoresContent";

export function BodyContent({ selectedOption }) {
  return (
    <div className="content">
      {selectedOption === null && <BienvenidoContent />}
      {selectedOption === "menuBienvenido" && <BienvenidoContent />}
      {selectedOption === "menuProveedores" && <ProveedoresContent />}
    </div>
  );
}
