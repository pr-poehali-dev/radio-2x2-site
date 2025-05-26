import { useEffect, useState } from "react";

const AudioVisualizer = ({ isPlaying }: { isPlaying: boolean }) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    const generateBars = () => {
      return Array.from({ length: 12 }, () => Math.random() * 100 + 10);
    };

    setBars(generateBars());

    if (isPlaying) {
      const interval = setInterval(() => {
        setBars(generateBars());
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="flex items-end justify-center space-x-1 h-16">
      {bars.map((height, index) => (
        <div
          key={index}
          className={`w-2 bg-gradient-to-t from-red-600 to-red-400 rounded-t transition-all duration-150 ${
            isPlaying ? "animate-pulse" : ""
          }`}
          style={{
            height: isPlaying ? `${height}%` : "20%",
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
