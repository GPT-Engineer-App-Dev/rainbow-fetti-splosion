import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const RainbowConfetti = () => {
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

  const detectSize = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8b00ff'];

  return (
    <Confetti
      width={windowDimension.width}
      height={windowDimension.height}
      colors={colors}
      numberOfPieces={200}
      recycle={true}
    />
  );
};

export default RainbowConfetti;
