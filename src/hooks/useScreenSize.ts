import { useEffect, useState } from 'react';

export function useScreenSize(): {
  isScreenXL: boolean;
  isScreenLg: boolean;
  isScreenMd: boolean;
  isScreenSm: boolean;
  isScreenMobile: boolean;
} {
  const [isScreenXL, setIsScreenXL] = useState<boolean>(false);
  const [isScreenLg, setIsScreenLg] = useState<boolean>(false);
  const [isScreenMd, setIsScreenMd] = useState<boolean>(false);
  const [isScreenSm, setIsScreenSm] = useState<boolean>(false);
  const [isScreenMobile, setIsScreenMobile] = useState<boolean>(false);

  const handleScreenChange = () => {
    const windowWidth = window.innerWidth;

    setIsScreenXL(windowWidth >= 1200);
    setIsScreenLg(windowWidth >= 992 && windowWidth < 1200);
    setIsScreenMd(windowWidth >= 768 && windowWidth < 992);
    setIsScreenSm(windowWidth >= 576 && windowWidth < 768);
    setIsScreenMobile(windowWidth < 576);
  };

  useEffect(() => {
    handleScreenChange();

    window.addEventListener('resize', handleScreenChange);

    return () => {
      window.removeEventListener('resize', handleScreenChange);
    };
  }, []);

  return { isScreenXL, isScreenLg, isScreenMd, isScreenSm, isScreenMobile };
}
