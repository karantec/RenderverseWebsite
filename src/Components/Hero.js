import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import {
  ChevronDown,
  Terminal,
  Code,
  Cpu,
  Database,
  Shield,
  Zap,
} from "lucide-react";

const HeroSection = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const shapesRef = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create more complex technical shapes
    const shapes = [];
    const geometries = [
      new THREE.BoxGeometry(1.2, 1.2, 1.2),
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.ConeGeometry(0.8, 1.8, 16),
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(1.1),
      new THREE.CylinderGeometry(0.5, 0.8, 1.5, 16),
      new THREE.DodecahedronGeometry(0.9),
      new THREE.IcosahedronGeometry(0.9),
    ];

    const technicalColors = [
      0x00ff88, 0x0088ff, 0xff0080, 0xff8800, 0x8800ff, 0x00ffff,
    ];

    for (let i = 0; i < 25; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color:
          technicalColors[Math.floor(Math.random() * technicalColors.length)],
        transparent: true,
        opacity: 0.8,
        shininess: 200,
        emissive:
          technicalColors[Math.floor(Math.random() * technicalColors.length)],
        emissiveIntensity: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // More dynamic positioning for technical feel
      mesh.position.x = (Math.random() - 0.5) * 25;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 15;

      // Random rotation speeds
      mesh.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      };

      // Random movement
      mesh.floatSpeed = Math.random() * 0.01 + 0.005;
      mesh.floatOffset = Math.random() * Math.PI * 2;

      scene.add(mesh);
      shapes.push(mesh);
    }

    shapesRef.current = shapes;

    // Enhanced lighting for technical atmosphere
    const ambientLight = new THREE.AmbientLight(0x222244, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ff88, 1.5);
    directionalLight.position.set(8, 8, 8);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x0088ff, 2, 150);
    pointLight1.position.set(-8, 8, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff0080, 1.5, 120);
    pointLight2.position.set(8, -5, -8);
    scene.add(pointLight2);

    // Camera position
    camera.position.z = 10;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += shape.rotationSpeed.x;
        shape.rotation.y += shape.rotationSpeed.y;
        shape.rotation.z += shape.rotationSpeed.z;

        // Floating motion
        shape.position.y +=
          Math.sin(Date.now() * shape.floatSpeed + shape.floatOffset) * 0.01;

        // Mouse interaction
        const distance = Math.sqrt(
          Math.pow(shape.position.x - mouse.x * 5, 2) +
            Math.pow(shape.position.y - mouse.y * 5, 2)
        );

        if (distance < 3) {
          shape.scale.setScalar(1.2 + Math.sin(Date.now() * 0.01) * 0.1);
          shape.material.opacity = 0.9;
        } else {
          shape.scale.setScalar(1);
          shape.material.opacity = 0.7;
        }
      });

      // Camera sway
      camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
      camera.position.y = Math.cos(Date.now() * 0.0007) * 0.3;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Three.js Canvas */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
      />

      {/* Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10 z-10"
        style={{
          backgroundImage: `
               linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)
             `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 z-15" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-blue-900/10 z-15" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Floating Technical Icons */}
        <div className="absolute top-16 left-16 animate-pulse delay-100">
          <Terminal className="text-green-400 w-10 h-10 opacity-80" />
        </div>
        <div className="absolute top-24 right-20 animate-bounce delay-200">
          <Code className="text-blue-400 w-8 h-8 opacity-70" />
        </div>
        <div className="absolute bottom-28 left-20 animate-pulse delay-300">
          <Cpu className="text-purple-400 w-9 h-9 opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-500">
          <Database className="text-cyan-400 w-7 h-7 opacity-75" />
        </div>
        <div className="absolute bottom-40 right-16 animate-pulse delay-700">
          <Shield className="text-red-400 w-8 h-8 opacity-65" />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-10 animate-fade-in">
          {/* Technical Status Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-sm text-green-300 font-mono animate-pulse">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping"></span>
            SYSTEM_STATUS: OPERATIONAL
          </div>

          {/* Main Heading - Technical & Strong */}
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent leading-tight tracking-tight">
            ENGINEER
            <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              THE IMPOSSIBLE
            </span>
          </h1>

          {/* Technical Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            Build systems that{" "}
            <span className="text-green-400 font-bold">scale infinitely</span>.
            Deploy code that{" "}
            <span className="text-cyan-400 font-bold">never breaks</span>.
            Create architectures that{" "}
            <span className="text-blue-400 font-bold">define the future</span>.
          </p>

          {/* Technical Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 hover:border-green-400/40 transition-all duration-300">
              <Zap className="text-green-400 w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-300 text-sm">
                Sub-millisecond response times with edge computing
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
              <Shield className="text-blue-400 w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Military Grade
              </h3>
              <p className="text-gray-300 text-sm">
                Zero-trust security with quantum encryption
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-all duration-300">
              <Database className="text-purple-400 w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Infinite Scale
              </h3>
              <p className="text-gray-300 text-sm">
                Auto-scaling from zero to billions of requests
              </p>
            </div>
          </div>

          {/* CTA Buttons - More Technical */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg text-black font-black text-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 border-2 border-green-400/50">
              <span className="relative z-10 flex items-center">
                <Terminal className="mr-3 w-6 h-6" />
                DEPLOY NOW
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-cyan-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-10 py-5 border-2 border-cyan-400/50 rounded-lg text-cyan-300 font-bold text-xl backdrop-blur-sm hover:bg-cyan-400/10 hover:border-cyan-300 transition-all duration-300 hover:scale-105 flex items-center">
              <Code className="mr-3 w-6 h-6" />
              VIEW DOCS
            </button>
          </div>

          {/* Technical Stats */}
          <div className="grid grid-cols-4 gap-6 pt-28 max-w-2xl mx-auto mb-20">
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2 font-mono">
                99.99%
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Uptime SLA
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-400 mb-2 font-mono">
                &lt;1ms
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Latency
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2 font-mono">
                10M+
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Requests/sec
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-400 mb-2 font-mono">
                0
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Downtime
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
      </div>

      {/* Technical Matrix-style Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none mb-11">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 4}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
