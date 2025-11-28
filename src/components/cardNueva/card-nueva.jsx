
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardNueva.css";
import group from "./Escudo_neg.png";
import image1 from "./image-1.jpeg";
import image2 from "./image-2.png";

export const CardNueva = () => {
  const { hashLagajo } = useParams();
  const [empleadoData, setEmpleadoData] = useState(null);

  useEffect(() => {
    if (hashLagajo) {
      console.log("Hash Legajo recibido:", hashLagajo);
      fetch(`${import.meta.env.VITE_URL_EXTERNO}/api/empleado?hashLegajo=${hashLagajo}`)
        .then((response) => response.json())
        .then((data) => {
          setEmpleadoData(data);
          console.log("Datos del legajo:", data);
        })
        .catch((error) => {
          console.error("Error al obtener los datos del legajo:", error);
        }); 



      // Aquí puedes realizar la lógica que necesites con el hashLagajo
      // Por ejemplo, hacer una llamada a API para obtener datos del legajo
    }
  }, []);


  const credentialData = {
    nombre: hashLagajo ? `Legajo: ${hashLagajo}` : "Nombre no disponible",
    dni: "",
    numeroAfiliado: hashLagajo || "00000000",
    telefono: "(381) 4524670",
    extension: "int 6122",
  };

   

  return (
    <main className="bg-[#606264] aspect-[0.88] w-full min-w-[1024px] h-[1165px] relative">
      <article className="absolute top-[133px] left-44 w-[672px] h-[900px] bg-[#3262ac] aspect-[0.75]">
        <header className="absolute top-0 left-[0px] w-[660px] h-[150px] bg-white rounded-[75px_0px_75px_0px]">
          <img
            className="top-[13px] w-[600px] h-[100px] aspect-[4.44] absolute left-[50px] object-cover"
            alt="Dirección de Ingresos Municipales Logo"
            src={image1}
          />
        </header>

        <section
          className="absolute top-[150px] left-0 w-[663px] h-[271px] bg-[#4da9df]  rounded-[0px_91px_0px_72px]"
          aria-label="Sección de fotos"
        >
          <div
            className="absolute top-[30px] left-[225px] w-[206px] h-[198px] bg-[#d9d9d9]"
            aria-label="Foto de perfil"
          >
            <img
              className="w-[206px] h-[198px] object-cover"
              alt="Foto de perfil del afiliado"
              src={
                empleadoData && empleadoData.urlImagen
                  ? `${import.meta.env.VITE_URL_EXTERNO}${empleadoData.urlImagen}`
                  : "https://via.placeholder.com/206x198.png?text=Foto+No+Disponible"
              }
            />
          </div>
          
        </section>

        <section
          className="absolute top-[421px] left-0 w-[660px] h-[321px] bg-white rounded-[90px_0px_90px_0px] rotate-180"
          aria-label="Información del afiliado"
        >
          <div className="absolute top-[30px] left-[60px]  w-[auto] h-[43px] bg-[#3262ac]">
            <p className="text-white text-center font-bold text-[20px] leading-[43px]">
              {empleadoData == null ? "Puesto no disponible" : empleadoData.puesto}
            </p>
          </div>

          <div className="relative top-[150px] left-[18px] w-[567px] rotate-180">
            <p className="w-[131px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[28px] tracking-[0] leading-[normal] mb-[9px]">
              <span className="[font-family:'Poppins-Bold',Helvetica] absolute left-[50px] top-[-60px] font-bold text-black text-[22px] tracking-[0]">
                Nombre: {empleadoData == null ? credentialData.nombre : empleadoData.nombreCompleto}
              </span>
            </p>
              
            <p className="w-100 [font-family:'Poppins-Bold',Helvetica] relative left-[50px] top-[-25px] font-bold text-black text-[22px] tracking-[0] leading-[normal] mb-[3px]">
              D.N.I: {empleadoData == null ? credentialData.dni : empleadoData.documento}
            </p>

            <p className="w-[307px] [font-family:'Poppins-Bold',Helvetica] relative  top-[-25px]  left-[50px]  font-bold text-black text-[22px] tracking-[0] leading-[normal] mb-[8px]">
              N° Afiliado: {empleadoData == null ? credentialData.numeroAfiliado : empleadoData.numeroAfiliado}
            </p>

            <p className="w-[603.2px] [font-family:'Poppins-Regular',Helvetica] relative top-[-20px] left-[50px] text-[20px] font-normal text-black text-left text-lg tracking-[0] leading-[normal]">
              <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-lg tracking-[0]">
                Esta credencial es de uso personal e intransferible. En caso de
                encontrarla, por favor comunicarse al número{" "}
              </span>
              <span className="[font-family:'Poppins-Bold',Helvetica] font-bold">
                {credentialData.telefono} <br />
                {credentialData.extension}
              </span>
            </p>
          </div>
        </section>

        <footer className="relative top-[775px] left-0 w-[430px] h-[93px]">
          <img
            className="w-[430px] h-[93px] aspect-[4.62] absolute left-[50px] object-cover"
            alt="Ciudad San Miguel de Tucumán - Secretaría de Ingresos Municipales"
            src={image2}
          />
          
           <img
          className="relative w-[80px] h-[100px] top-[0px] left-[520px]"
          alt="Icono decorativo"
          src={group}
        />

        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, nemo numquam ab iste tempore labore quo dolor, fugiat sit dignissimos at quia? Adipisci labore et iure est possimus accusamus magni!</p> */}
        </footer>

        {/* Mostrar hash del legajo si está presente */}
        {/* {hashLagajo && (
          <div className="hash-display">
            Hash Legajo: {hashLagajo}
          </div>
        )} */}
       
      </article>
    </main>
  );
};