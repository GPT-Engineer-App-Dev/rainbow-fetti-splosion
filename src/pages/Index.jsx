import RainbowConfetti from '../components/RainbowConfetti';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {showConfetti && <RainbowConfetti />}
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-6">Rainbow Confetti Celebration!</h1>
        <p className="text-xl text-white mb-8">Click the button to start the party!</p>
        <Button 
          onClick={() => setShowConfetti(!showConfetti)}
          className="bg-white text-purple-600 hover:bg-purple-100 transition-colors"
        >
          {showConfetti ? 'Stop Confetti' : 'Start Confetti'}
        </Button>
      </div>
    </div>
  );
};

export default Index;
