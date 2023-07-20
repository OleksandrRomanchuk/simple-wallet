import { useLayoutEffect, useState, useMemo } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState(useMemo(() => [window.innerWidth], []));

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

export { useWindowSize };
