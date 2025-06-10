import React, { useRef } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollctions/NewCollections";

export const Shop = () => {
  const collectionRef = useRef(null);

  const handleScrollToCollections = () => {
    collectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero onScrollClick={handleScrollToCollections} />
      <Popular />
      <NewCollections ref={collectionRef} />
    </div>
  );
};
