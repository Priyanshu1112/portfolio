import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckPage = ({ sectionRef, path }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the viewport
      threshold: 0.5, // Call the callback when 50% of the target is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (path) navigate("/?" + path);
          else navigate("/");
          // Do something when home comes into view
          // For example, call yourFunction();
        }
      });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(callback, options);

    // Attach the observer to the target home div
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default CheckPage;
