import { useState, useEffect } from "react";

export const Usescrolltop = (thresold = 10) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > thresold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [thresold]);

  return scroll;
};

export default Usescrolltop;
