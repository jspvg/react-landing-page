import { useEffect, useState } from 'react';
import { useScreenSize } from './useScreenSize';

export function useNavCollapse(): { isNavOpen: boolean } {
  const { isScreenXL, isScreenLg, isScreenMd } = useScreenSize();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleNavCollapse = () => {
      if (isScreenMd || isScreenLg || isScreenXL) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleNavCollapse);

    return () => {
      window.removeEventListener('resize', handleNavCollapse);
    };
  }, [isScreenMd, isScreenLg, isScreenXL]);

  return { isNavOpen };
}
