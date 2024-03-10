"use client";

import { useRouter } from 'next/navigation';
import React from 'react'; // Ensure React is imported when using TypeScript with React

type Props = {
  root: string;
  displayWord: string;
}

// Corrected function component declaration
const OnClickRooting: React.FC<Props> = ({ root, displayWord }) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Use the variable directly for router.push
    router.push(root);
  };

  return (
    <div>
      <button onClick={handleNavigation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 w-auto ">
        {displayWord}
      </button>
    </div>
  );
}

export default OnClickRooting;