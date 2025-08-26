"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-3xl mt-4">Page Not Found</h2>
      <p className="mt-2 text-lg">
        Sorry, the page you are looking for does not exist. You will be redirected to the home page shortly.
      </p>
    </div>
  );
}
