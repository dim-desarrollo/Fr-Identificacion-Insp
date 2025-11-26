import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CredencialCard.css";

/**
 * CredencialAfiliadoCard
 *
 * Replica una credencial tipo "card" utilizando únicamente HTML + CSS dentro de un componente de React.
 * - Sin dependencias externas.
 * - Tamaño real CR80 (85.6mm x 54mm) para impresión, con escala para pantalla.
 * - Campos: Nombre, D.N.I., N° Afiliado, y leyenda de uso con teléfono e interno.
 * - Incluye modo oscuro/claro automático.
 *
 * Uso:
 * <CredencialAfiliadoCard
 *   nombre="Apellido, Nombre"
 *   dni="12.345.678"
 *   numeroAfiliado="00000000"
 *   telefono="(381) 4524670"
 *   interno="6122"
 * />
 */
function CredencialAfiliadoCard({
  nombre = "Apellido, Nombre",
  dni = "12.345.678", 
  numeroAfiliado = "00000000",
  telefono = "(381) 4524670",
  interno = "6122"
}) {
  const { hashLagajo } = useParams();

  useEffect(() => {
    if (hashLagajo) {
      console.log("Hash Legajo:", hashLagajo);
      // Aquí puedes realizar la lógica que necesites con el hashLagajo
      // Por ejemplo, buscar datos del inspector en base al hash
    }
  }, [hashLagajo]);

  return (
    <div className="credencial-container">
      <div className="credencial-card">
        {/* Header con logo DIM */}
        <div className="credencial-header">
          <div className="logo-dim">
            <span className="dim-text">DiM</span>
            <div className="dim-subtitle">
              <span>Dirección de</span>
              <span>Ingresos Municipales</span>
            </div>
          </div>
        </div>

        {/* Sección de fotos */}
        <div className="credencial-photos">
          <div className="photo-placeholder photo-left"></div>
          <div className="photo-placeholder photo-right"></div>
        </div>

        {/* Sección de información */}
        <div className="credencial-info">
          <div className="info-badge"></div>
          <div className="info-fields">
            <div className="field-row">
              <span className="field-label">Nombre:</span>
              <span className="field-value">{nombre}</span>
            </div>
            <div className="field-row">
              <span className="field-label">D.N.I.:</span>
              <span className="field-value">{dni}</span>
            </div>
            <div className="field-row">
              <span className="field-label">N° Afiliado:</span>
              <span className="field-value">{numeroAfiliado}</span>
            </div>
            <div className="disclaimer">
              Esta credencial es de uso personal e intransferible. En caso de
              encontrarla, por favor comunicarse al número{" "}
              <strong>{telefono} int {interno}</strong>
            </div>
            {hashLagajo && (
              <div className="hash-info">
                <small>Hash: {hashLagajo}</small>
              </div>
            )}
          </div>
        </div>

        {/* Footer con logo municipal */}
        <div className="credencial-footer">
          <div className="footer-logo">
            <div className="ciudad-logo">
              <div className="leaf-icon">🍃</div>
              <div className="ciudad-text">
                <span className="ciudad-title">CIUDAD</span>
                <span className="ciudad-name">San Miguel</span>
                <span className="ciudad-name">de Tucumán</span>
              </div>
            </div>
            <div className="secretaria-text">
              <span>Secretaría de</span>
              <span>Ingresos</span>
              <span>Municipales</span>
            </div>
            <div className="escudo-municipal"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CredencialAfiliadoCard;
export { CredencialAfiliadoCard };