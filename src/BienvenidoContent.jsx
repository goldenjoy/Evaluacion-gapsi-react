import foto from "./assets/fotoCandidato.png"; // Ruta de la imagen
import { fetchGet } from "./FetchData";

const dataBienvenido = fetchGet("http://localhost:8080/msgBienvenido/");
const dataApp = fetchGet("http://localhost:8080/versionApp/");

export function BienvenidoContent() {
  const msgBienvenido = dataBienvenido.read();
  const versionApp = dataApp.read();

  return (
    <div className="contenedor">
      <div className="contenido">
        <img src={foto} alt="Imagen de usuario" />
        <div className="textosCandidato">
          <p>{msgBienvenido.data}</p>
          <p>{versionApp.data}</p>
        </div>
      </div>
    </div>
  );
}
