"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const LoadingBar: React.FC = () => {
  const pathname = usePathname();
  const [, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      NProgress.start();
    };

    const handleComplete = () => {
      setLoading(false);
      NProgress.done();
    };

    handleStart();

    const timer = setTimeout(() => {
      handleComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default LoadingBar;
