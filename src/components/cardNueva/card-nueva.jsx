
import group from "./Escudo_neg.png";
import image1 from "./image-1.jpeg";
import image2 from "./image-2.png";

export const CardNueva = () => {
  const credentialData = {
    nombre: "",
    dni: "",
    numeroAfiliado: "",
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
          className="absolute top-[150px] left-0 w-[663px] h-[271px] bg-[#4da9df] rounded-[0px_91px_0px_72px]"
          aria-label="Sección de fotos"
        >
          <div
            className="absolute top-[30px] left-[60px] w-[206px] h-[198px] bg-[#d9d9d9]"
            aria-label="Foto de perfil"
          ></div>
          <div
            className="absolute top-[30px] left-[390px] w-[210px] h-[198px] bg-[#d9d9d9]"
            aria-label="Foto adicional"
          ></div>
        </section>

        <section
          className="absolute top-[421px] left-0 w-[660px] h-[321px] bg-white rounded-[90px_0px_90px_0px] rotate-180"
          aria-label="Información del afiliado"
        >
          <div className="absolute top-[220px] left-[480px] w-[131px] h-[43px] bg-[#3262ac]"></div>

          <div className="relative top-[-10px] left-[92px] w-[567px] rotate-180">
            <p className="w-[131px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[28px] tracking-[0] leading-[normal] mb-[9px]">
              <span className="[font-family:'Poppins-Bold',Helvetica] absolute left-[50px] top-[-60px] font-bold text-black text-[28px] tracking-[0]">
                Nombre: 
              </span>
            </p>

            <p className="w-44 [font-family:'Poppins-Bold',Helvetica] relative left-[50px] top-[-25px] font-bold text-black text-[28px] tracking-[0] leading-[normal] mb-[3px]">
              D.N.I:
            </p>

            <p className="w-[307px] [font-family:'Poppins-Bold',Helvetica] relative  top-[-25px]  left-[50px]  font-bold text-black text-[28px] tracking-[0] leading-[normal] mb-[8px]">
              N° Afiliado:
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

       
      </article>
    </main>
  );
};