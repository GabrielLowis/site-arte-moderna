
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

// Componente de loading
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="text-junina-orange font-bold mb-2">Carregando modelo 3D...</div>
        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-junina-yellow to-junina-orange transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-sm text-gray-600 mt-1">{progress.toFixed(0)}%</div>
      </div>
    </Html>
  );
}

// Componente do modelo 3D
interface GLBModelProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
    isUserInteracting?: React.MutableRefObject<boolean>;
}

function GLBModel({ 
  url, 
  scale = 1, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  autoRotate = true,
  isUserInteracting
}: GLBModelProps) {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const interacting = isUserInteracting?.current ?? false;

    if (meshRef.current && autoRotate && !interacting) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const clonedScene = scene.clone();

  return (
    <group 
      ref={meshRef}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <primitive object={clonedScene} />
    </group>
  );
}


// Componente principal do visualizador
interface GLBViewerProps {
  modelUrl: string;
  width?: string;
  height?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  enableControls?: boolean;
  showEnvironment?: boolean;
  className?: string;
  isUserInteracting?: React.MutableRefObject<boolean>; // 👈 Adicionado aqui
}

const GLBViewer = ({
  modelUrl,
  width = "100%",
  height = "400px",
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  enableControls = true,
  showEnvironment = true,
  className = ""
}: GLBViewerProps) => {
  console.log('GLBViewer: Tentando carregar modelo:', modelUrl);
  const controlsRef = useRef<any>(null);
const isDraggingRef = useRef(false); // 👈 Referência para saber se o usuário está interagindo


  return (
    <div 
      className={`rounded-2xl overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Canvas
       camera={{ 
  position: [0, 0, 5], 
  fov: 50,
  near: 0.1,
  far: 1000 
}}

        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance" 
        }}
        
      >
        {/* Iluminação */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Ambiente (opcional) */}
        {showEnvironment && (
          <Environment preset="sunset" />
        )}

        {/* Controles de órbita (opcional) */}
        {enableControls && (
   <OrbitControls
  ref={controlsRef}
  enablePan={true}
  enableZoom={true}
  enableRotate={true}
  minDistance={2}
  maxDistance={10}
  autoRotate={false}
  minPolarAngle={Math.PI / 3}   // evita girar por cima
  maxPolarAngle={Math.PI / 1.5} // evita girar por baixo
  minAzimuthAngle={-Math.PI / 2}
maxAzimuthAngle={Math.PI / 2}
  onStart={() => { isDraggingRef.current = true; }}
  onEnd={() => { isDraggingRef.current = false; }}
/>



        )}

        {/* Modelo 3D com Suspense para loading */}
        <Suspense fallback={<Loader />}>
          <GLBModel
            url={modelUrl}
            scale={scale}
            position={position}
            rotation={rotation}
            autoRotate={autoRotate}
            isUserInteracting={isDraggingRef}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GLBViewer;