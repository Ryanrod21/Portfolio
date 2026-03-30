import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (vantaEffect.current) return;
      if (!window.VANTA?.WAVES) return;

      vantaEffect.current = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x4141,
      });
    };

    // If already loaded, init immediately
    if (window.VANTA?.WAVES) {
      initVanta();
    } else {
      // Poll until the CDN scripts are ready
      const interval = setInterval(() => {
        if (window.VANTA?.WAVES) {
          initVanta();
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="w-full relative">
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaBackground;
