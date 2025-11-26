import { useEffect, useState } from "react"
import { getListNuevaBD } from "../../services/servicesList"
import QRCode from "qrcode"
import { Link } from "react-router-dom" 

function ListBd() {
    const [data, setData] = useState(null)
    const [qr, setQr] = useState([])

    const GenerateCode = async (IDNI) => {
        if (!IDNI) return '';
        try {
            const qrDataUrl = `http://dimsmt.gob.ar:3010/inspectores/${IDNI}`;
            return await QRCode.toDataURL(qrDataUrl, {
                width: 350,
                color: {
                    dark: "#282c34",
                    light: "#EEEEEEFF",
                },
            });
        } catch (error) {
            console.error("Error al generar QR:", error);
            return '';
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            console.log("Solicitud")
            const res = await getListNuevaBD();
            setData(res);
            console.log(res)


            const generatedQrs = await Promise.all(
                res.map((datos) => GenerateCode(datos.hashLagajo))
            );
            setQr(generatedQrs);
        };

        fetchData();
    }, []);

    function CambiarNombre(data) {
        return data.replace(/,/g, "").replace(/ /g, "-");
    }

    return (
        <>
            <h1>Listado de inspectores</h1>
            <div className="card-container">
                {data ? (
                    data.map((datos, i) => (
                        <div className="card" key={i}>
                            <div className="card-content">
                                <div className="cont-img">

                                    {datos.urlImagen ? (
                                        <img src={datos.urlImagen} alt="" />
                                    ) : (
                                        <p>No tiene Imagen</p>
                                    )}

                                    {qr[i] && <img src={qr[i]} alt="QR" />}

                                </div>
                                <p>Numero de afiliado: {datos.numeroAfiliado}</p>
                                <p>Nombre: {datos.nombreCompleto}</p>
                                <p>DNI: {datos.documento}</p>
                                <p>Area: {datos.area}</p>

                                <div className="content-btn">
                                    {qr[i] && (
                                        <a
                                            href={qr[i]}
                                            download={`${CambiarNombre(datos.nombreCompleto)}-${datos.numeroAfiliado}-qr.png`}
                                            className="Descargar-qr"
                                        >
                                            Descargar QR
                                        </a>
                                    )}
                                    <Link to={`/Insert/${datos.numeroAfiliado}`}>
                                        <button>Agregar imagen</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay datos</p>
                )}
            </div>
        </>
    );
}

export default ListBd;
