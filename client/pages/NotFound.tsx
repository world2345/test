import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">404</h1>
        <p className="text-xl text-gray-700 mb-4">Oops! Page not found</p>
        <a href="/" className="text-amber-600 hover:text-amber-800 underline font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
