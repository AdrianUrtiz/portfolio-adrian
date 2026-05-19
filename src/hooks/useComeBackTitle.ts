import { useEffect } from "react";

const useComeBackTitle = (blurTitle: string) => {
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) return;

    const prevTitle = document.title;

    const handleBlur = () => {
      document.title = blurTitle;
    };

    const handleFocus = () => {
      document.title = prevTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [blurTitle]);
};

export default useComeBackTitle;
