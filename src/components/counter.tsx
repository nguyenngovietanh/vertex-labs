import { useEffect, useState } from 'react';

export function Counter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  // Trích xuất số từ string (ví dụ '50+' thành 50, '99%' thành 99)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [numericValue, duration]);

  return <span>{count}{suffix}</span>;
}