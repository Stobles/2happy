import { RefObject, useEffect } from "react";

const useObserver = <T extends Element>(
  ref: RefObject<T | null>,
  onObserve: (entry: IntersectionObserverEntry) => void
) => {
  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        onObserve(entry);
      },
      { threshold: 0 }
    );
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
};

export default useObserver;
