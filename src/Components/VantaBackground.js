import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE, // Ensure Three.js is passed
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      color: 0xffffff, // Adjust color if needed
      backgroundColor: 0x000000, // Background color (black)
      points: 10.0, // Number of points in the net
      maxDistance: 20.0, // Max distance between points
      spacing: 15.0, // Distance between points
      scale: 1.0,
      scaleMobile: 1.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup effect when component unmounts
    };
  }, []);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10"></div>;
};

export default VantaBackground;
