"use client";
import { useState, useLayoutEffect } from "react";

const useDisplay = (): [number, number] => {
  const [width, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [scrollY, setScroll] = useState<number>(
    typeof window !== "undefined" ? window.scrollY : 0
  );

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
