"use client";
import useStore from "@/stores/useStore";
import React from "react";

const ButtonRevalidate = () => {
  const { language, toggleLanguage } = useStore();
  return (
    <div className="absolute top-[50px] right-[50px]">
      <button onClick={toggleLanguage}>Cambiar idioma (Actual: {language})</button>
    </div>
  );
};

export default ButtonRevalidate;
