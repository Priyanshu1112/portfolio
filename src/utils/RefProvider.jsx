import { createContext, useContext, useRef } from "react";

const RefContext = createContext();

export const RefProvider = ({ children }) => {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <RefContext.Provider value={{ projectRef, aboutRef, contactRef, homeRef }}>
      {children}
    </RefContext.Provider>
  );
};

export const useElementRef = () => {
  const { projectRef, aboutRef, contactRef, homeRef } = useContext(RefContext);
  return { projectRef, aboutRef, contactRef, homeRef };
};
