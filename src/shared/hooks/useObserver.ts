import { RefObject, useCallback, useEffect, useRef } from "react";

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

export const useIntersection = (onIntersect: () => void) => {
  const unsubscribe = useRef(() => {});
  return useCallback((el: HTMLDivElement | null) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          onIntersect();
        }
      });
    });

    if (el) {
      observer.observe(el);
      unsubscribe.current = () => observer.disconnect();
    } else {
      unsubscribe.current();
    }
  }, []);
};

export default useObserver;
