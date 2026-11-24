import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import DroneOverlay from "../components/Samurai";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 850 });

  return (
    <section id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen w-full overflow-hidden c-space">
      <Loader />
      <HeroText />
      <ParallaxBackground />

      <div className="pointer-events-none absolute inset-0 z-30 h-screen w-full">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, isMobile ? 6.5 : 5], fov: 45 }}
          gl={{ alpha: true }}
        >
          <Suspense fallback={null}>
            <DroneOverlay isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;