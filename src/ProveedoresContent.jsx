import { useState, useEffect } from "react";
import { IconoEliminar } from "./Iconoeliminar";
import ModalProveedor from "./ModalProveedor";

export function ProveedoresContent() {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Lógica para cargar los datos inicialmente, por ejemplo, mediante un fetch
    fetchGet();
  }, []);

  const fetchGet = () => {
    fetch("http://localhost:8080/prov/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data._embedded && data._embedded.proveedors) {
          setData(data._embedded.proveedors);
        } else {
          setData([]); // Actualizar el estado con los datos recibidos
        }
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  };

  const fetchPost = () => {
    const proveedor = document.getElementById("modalProv").value;
    const razonSocial = document.getElementById("modalRS").value;
    const direccion = document.getElementById("modalDir").value;

    const data = {
      nombre: proveedor,
      razonSocial: razonSocial,
      direccion: direccion,
    };

    fetch("http://localhost:8080/prov/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("El elemento se guardó con éxito");
          fetchGet(); // Volver a cargar los datos
        } else {
          console.error("Error al guardar el elemento");
        }
      })
      .catch((error) => {
        console.error("Error de red:", error);
      });
  };

  const eliminarProv = (provId) => {
    //console.log(provId);
    const respuesta = window.confirm(
      "¿Estás seguro que deseas eliminar al proveedor?"
    );
    if (respuesta) {
      fetch("http://localhost:8080/prov/" + provId, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            console.log("El elemento se borró con éxito");
            fetchGet(); // Volver a cargar los datos
          } else {
            console.error("Error al borrar el elemento");
          }
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addProv = () => {
    closeModal();
    fetchPost();
  };

  return (
    <div className="contenedor">
      <ModalProveedor
        isOpen={modalIsOpen}
        onClose={closeModal}
        addProv={addProv}
      />
      <button className="agregar-btn" onClick={openModal}>
        Agregar Proveedor
      </button>
      <br />
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Razón Social</th>
              <th>Dirección</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {data.length == 0 ? (
              <tr>
                <td colSpan="4">No hay proveedores</td>
              </tr>
            ) : (
              data?.map((prov) => (
                <tr key={prov.id}>
                  <td>{prov.nombre}</td>
                  <td>{prov.razonSocial}</td>
                  <td>{prov.direccion}</td>
                  <td>
                    <button
                      className="eliminar-btn"
                      onClick={() => eliminarProv(prov.id)}
                    >
                      <IconoEliminar />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
