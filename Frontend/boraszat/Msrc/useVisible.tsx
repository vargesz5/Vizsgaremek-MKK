import { useEffect, useState } from 'react';

const useVisible = (baseClass: string = '') => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return visible ? `${baseClass} enter` : `${baseClass} fade`;
};

export default useVisible;
