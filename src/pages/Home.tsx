import Image22 from "/22.png";
import GLBViewer from "../components/GLBViewer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Spiral 3D Elements - escondidos em telas pequenas */}
      <div className="hidden md:block absolute top-1 left-1 w-[500px] h-[500px] z-10">
        <GLBViewer
          modelUrl="/red.glb"
          height="400px"
          width="400px"
          scale={0.02}
          position={[0, 0, 1]}
          rotation={[8, 4, 4]}
          autoRotate={true}
          enableControls={true}
          showEnvironment={true}
        />
      </div>

      <div className="hidden md:block absolute bottom-1 left-1 w-[500px] h-[500px] z-10">
        <GLBViewer
          modelUrl="/blue.glb"
          height="500px"
          width="500px"
          scale={0.02}
          position={[0, -1.9, 2.2]}
          rotation={[8, 4, 4]}
          autoRotate={true}
          enableControls={true}
          showEnvironment={true}
        />
      </div>

      <div className="hidden md:block absolute top-1 right-1 w-[500px] h-[500px] z-10 transform scale-x-[-1]">
        <GLBViewer
          modelUrl="/green.glb"
          height="400px"
          width="400px"
          scale={0.02}
          position={[0, 0, 2.2]}
          rotation={[8, 4, 4]}
          autoRotate={true}
          enableControls={true}
          showEnvironment={true}
        />
      </div>

      <div className="hidden md:block absolute bottom-1 right-1 w-[800px] h-[400px] z-10 transform scale-y-[-1]">
        <GLBViewer
          modelUrl="/pink.glb"
          height="400px"
          width="1000px"
          scale={0.02}
          position={[3.6, 0.7, 1]}
          rotation={[8, 4.6, 4]}
          autoRotate={true}
          enableControls={true}
          showEnvironment={true}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="flex items-center justify-center flex-col min-h-screen px-4 sm:px-6 md:px-8 relative z-20">
        <div className="flex  items-center justify-center">
          {/* Texto SEMANA */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-white font-black text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] mb-[-20px]  md:leading-none tracking-wider">
              SE
            </div>
            <div className="text-white font-black text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] mb-[-20px] md:leading-none tracking-wider">
              MA
            </div>
            <div className="text-white font-black text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] mb-[-15px] md:leading-none tracking-wider">
              NA
            </div>
            <div className="text-white text-[1rem] sm:text-2xl md:text-3xl font-light leading-none  md:tracking-wide">
              a arte moderna
            </div>
          </div>

          {/* Imagem "22" */}
          <img
            src={Image22}
            className="w-[200px] sm:w-[300px] md:w-[500px] lg:w-[600px]"
          />
        </div>

        {/* Botão */}
        <div className="pt-6">
          <button onClick={() => navigate("/slider")} className="bg-[#eb9619] text-white font-medium px-6 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105">
            Confira nossa exposição
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;