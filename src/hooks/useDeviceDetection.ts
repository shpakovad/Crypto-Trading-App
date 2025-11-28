import { useEffect, useState } from "react";

const MOBILE_DEVICE_WIDTH = 768;
export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.outerWidth;
      setIsMobile(width <= MOBILE_DEVICE_WIDTH);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return { isMobile };
};
