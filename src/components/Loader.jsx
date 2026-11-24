import { useProgress } from '@react-three/drei';

const Loader = () => {
  const { active, progress } = useProgress();

  // Hide automatically once loading finishes
  if (!active && progress === 100) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <p className="text-4xl md:text-6xl font-black text-white">
        {progress.toFixed(0)}% Loaded
      </p>
    </div>
  );
};

export default Loader;