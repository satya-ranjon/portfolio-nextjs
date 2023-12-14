"use client";
import { useLayoutEffect, useState } from "react";

const useDisplay = (): [number, number] => {
  const [width, setWindowWidth] = useState<number>(window.innerWidth);
  const [scrollY, setScroll] = useState<number>(window.scrollY);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [width, scrollY];
};

export default useDisplay;
